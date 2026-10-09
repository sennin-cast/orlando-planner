import './styles/main.css';

import { ItineraryDay } from './types/itinerary';
import { TicketDefinition } from './types/ticket';
import { CrowdDataStore } from './types/crowd';
import { FatigueParameters, ItineraryFatigueSummary } from './types/fatigue';
import { OptimizerWeights, OptimizationResult, OptimizerPreferences, DEFAULT_OPTIMIZER_PREFERENCES } from './types/optimizer';

import { storageManager, StorageSnapshot, DEFAULT_FATIGUE_PARAMS, DEFAULT_OPTIMIZER_WEIGHTS } from './services/storageManager';
import { validateTickets } from './services/ticketValidator';
import { FatigueCalculator } from './services/fatigueCalculator';
import { ItineraryOptimizer } from './services/itineraryOptimizer';
import { CrowdDataService } from './services/crowdDataService';
import { ExportService } from './services/exportService';
import { ItineraryGenerator } from './services/itineraryGenerator';
import { createInitialCrowdStore, createVerified2027CrowdStore, createBenchmarkCrowdRecords } from './data/defaultCrowdData';

import { QueueTimesService, ParkLiveWaitSummary } from './services/queueTimesService';
import { addDays, daysBetween } from './utils/dateUtils';

import { renderSidebar, AppTab } from './components/Sidebar';
import { renderHeader } from './components/Header';
import { renderDashboardView } from './components/DashboardView';
import { renderCalendarView } from './components/CalendarView';
import { renderCrowdView, CrowdSubTab } from './components/CrowdView';
import { renderComparatorView } from './components/ComparatorView';
import { renderTicketsView } from './components/TicketsView';
import { renderOptimizerView } from './components/OptimizerView';
import { renderHistoryView } from './components/HistoryView';
import { renderSettingsView } from './components/SettingsView';
import { renderOutletsView } from './components/OutletsView';
import { renderTouringPlansView } from './components/TouringPlansView';
import { renderDiningView } from './components/DiningView';

import { renderDayDetailsModal, renderLiveQueueContent } from './components/DayDetailsModal';
import { renderSwapDaysModal } from './components/SwapDaysModal';
import { renderTicketRulesModal } from './components/TicketRulesModal';
import { renderTripGeneratorModal } from './components/TripGeneratorModal';
import { renderRestaurantDetailsModal } from './components/RestaurantDetailsModal';
import { renderAddMealModal } from './components/AddMealModal';
import { renderOptimizePreferencesModal, renderOptimizePreviewModal } from './components/OptimizeTripModal';
import { DiningFilterCriteria, MealType } from './types/dining';
import { diningService } from './services/diningService';
import { authService } from './services/authService';
import { renderLoginView } from './components/LoginView';

class OrlandoPlannerApp {
  private currentTab: AppTab = 'visao-geral';
  private itinerary: ItineraryDay[] = [];
  private tickets: TicketDefinition[] = [];
  private crowdStore: CrowdDataStore;
  private fatigueParams: FatigueParameters = { ...DEFAULT_FATIGUE_PARAMS };
  private optimizerWeights: OptimizerWeights = { ...DEFAULT_OPTIMIZER_WEIGHTS };
  private optimizerPreferences: OptimizerPreferences = { ...DEFAULT_OPTIMIZER_PREFERENCES };
  private previewOptimizationResult: OptimizationResult | null = null;
  private snapshots: StorageSnapshot[] = [];

  // Filter & Sub-state
  private calFilter: 'all' | 'parks' | 'rest' = 'all';
  private crowdFilter: 'all' | 'disney' | 'universal' | 'seaworld' = 'all';
  private crowdSubTab: CrowdSubTab = 'forecast';
  private selectedLiveParkId = 'magic-kingdom';
  private liveWaitData: ParkLiveWaitSummary | null = null;
  private outletFilter: 'all' | 'outlet_geral' | 'desconto_extremo' | 'eletronicos' | 'mercado_vitaminas' = 'all';
  private selectedTouringPlanId: string = 'magic-kingdom';
  private touringOperatorFilter: 'all' | 'disney' | 'universal' | 'seaworld' = 'all';
  private selectedCrowdMonth: number = 5;
  private comparatorParkId = 'magic-kingdom';
  private comparatorDates: string[] = ['2027-05-18', '2027-05-21', '2027-05-23'];

  // Dining state
  private diningCriteria: DiningFilterCriteria = {
    searchQuery: '',
    categoryTab: 'all',
    locationType: 'all',
    park: 'all',
    mealType: 'all',
    serviceType: 'all',
    priceCategory: 'all',
    cuisine: 'all',
    characterDiningOnly: false,
    reservationRequiredOnly: false,
    vegetarianOnly: false,
    confirmedOnly: false,
    favoritesOnly: false,
  };
  private selectedDiningDaySuggestion: string | null = null;
  private showDiningAdminPanel: boolean = false;

  // Modals state
  private activeModal:
    | 'day-details'
    | 'swap-days'
    | 'ticket-rules'
    | 'trip-generator'
    | 'restaurant-details'
    | 'add-meal'
    | 'optimize-preferences'
    | 'optimize-preview'
    | null = null;
  private modalSelectedDate: string | null = null;
  private modalSelectedTicketId: string | null = null;
  private modalSelectedRestaurantId: string | null = null;
  private modalSelectedMealDay: string | null = null;
  private modalSelectedMealType?: MealType;

  // Cached calculated results
  private validationResult!: ReturnType<typeof validateTickets>;
  private fatigueResult!: ItineraryFatigueSummary;
  private optimizationResult!: OptimizationResult;

  constructor() {
    this.itinerary = storageManager.loadItinerary();
    this.tickets = storageManager.loadTickets();
    const storedCrowd = storageManager.loadCrowdStore();
    this.crowdStore = Object.keys(storedCrowd.records).length > 0 ? storedCrowd : createVerified2027CrowdStore();
    this.fatigueParams = storageManager.loadFatigueParams();
    this.optimizerWeights = storageManager.loadOptimizerWeights();
    this.snapshots = storageManager.loadSnapshots();

    if (!authService.isAuthenticated()) {
      this.renderLogin();
    } else {
      this.recalculateAll();
      this.render();
      this.attachGlobalListeners();
    }
  }

  private recalculateAll(): void {
    this.validationResult = validateTickets(this.itinerary, this.tickets);
    this.fatigueResult = FatigueCalculator.calculate(this.itinerary, this.fatigueParams);
    this.optimizationResult = ItineraryOptimizer.optimize(
      this.itinerary,
      this.tickets,
      this.crowdStore,
      this.optimizerPreferences
    );
  }

  private saveCurrentState(recordUndo: boolean = true): void {
    storageManager.saveItinerary(this.itinerary, recordUndo);
    storageManager.saveTickets(this.tickets);
    storageManager.saveCrowdStore(this.crowdStore);
    storageManager.saveFatigueParams(this.fatigueParams);
    storageManager.saveOptimizerWeights(this.optimizerWeights);
    storageManager.saveSnapshots(this.snapshots);
    this.recalculateAll();
  }

  public render(): void {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    if (!authService.isAuthenticated()) {
      this.renderLogin();
      return;
    }

    const canUndo = storageManager.canUndo();
    const canRedo = storageManager.canRedo();
    const tripDays = this.itinerary.length;

    if (!authService.canAccessTab(this.currentTab)) {
      this.currentTab = 'visao-geral';
    }

    let viewHtml = '';
    switch (this.currentTab) {
      case 'visao-geral':
        viewHtml = renderDashboardView(this.itinerary, this.validationResult, this.fatigueResult);
        break;
      case 'meu-roteiro':
        viewHtml = renderCalendarView(this.itinerary, this.tickets, this.crowdStore, this.fatigueResult, this.calFilter);
        break;
      case 'onde-comer':
        viewHtml = renderDiningView(
          this.diningCriteria,
          this.itinerary,
          this.selectedDiningDaySuggestion,
          this.showDiningAdminPanel
        );
        break;
      case 'guia-outlets':
        viewHtml = renderOutletsView(this.outletFilter);
        break;
      case 'calendario-de-lotacao': {
        const tripDates = this.itinerary.map((d) => d.date);
        viewHtml = renderCrowdView(
          this.crowdStore,
          this.crowdFilter,
          this.crowdSubTab,
          this.selectedLiveParkId,
          this.liveWaitData,
          this.selectedCrowdMonth,
          tripDates,
          this.itinerary
        );
        break;
      }
      case 'roteiros-de-parques':
        viewHtml = renderTouringPlansView(this.selectedTouringPlanId, this.touringOperatorFilter);
        break;
      case 'comparar-datas':
        viewHtml = renderComparatorView(this.comparatorParkId, this.comparatorDates, this.itinerary, this.tickets, this.crowdStore);
        break;
      case 'meus-ingressos':
        viewHtml = renderTicketsView(this.tickets, this.validationResult);
        break;
      case 'sugestoes-de-roteiro':
        viewHtml = renderOptimizerView(this.optimizationResult, this.optimizerWeights);
        break;
      case 'historico':
        viewHtml = renderHistoryView(this.snapshots, canUndo, canRedo);
        break;
      case 'configuracoes':
        viewHtml = renderSettingsView(this.crowdStore);
        break;
      default:
        viewHtml = renderDashboardView(this.itinerary, this.validationResult, this.fatigueResult);
        break;
    }

    // Modal overlay if open
    let modalHtml = '';
    if (this.activeModal === 'day-details' && this.modalSelectedDate) {
      const day = this.itinerary.find((d) => d.date === this.modalSelectedDate);
      if (day) modalHtml = renderDayDetailsModal(day, this.tickets, this.crowdStore);
    } else if (this.activeModal === 'swap-days' && this.modalSelectedDate) {
      modalHtml = renderSwapDaysModal(this.modalSelectedDate, this.itinerary);
    } else if (this.activeModal === 'ticket-rules' && this.modalSelectedTicketId) {
      const ticket = this.tickets.find((t) => t.id === this.modalSelectedTicketId);
      if (ticket) modalHtml = renderTicketRulesModal(ticket);
    } else if (this.activeModal === 'trip-generator') {
      const initialStart = this.itinerary[0]?.date || '2027-05-05';
      const initialEnd = this.itinerary[this.itinerary.length - 1]?.date || '2027-05-23';
      modalHtml = renderTripGeneratorModal(tripDays, initialStart, initialEnd);
    } else if (this.activeModal === 'restaurant-details' && this.modalSelectedRestaurantId) {
      modalHtml = renderRestaurantDetailsModal(this.modalSelectedRestaurantId);
    } else if (this.activeModal === 'add-meal') {
      modalHtml = renderAddMealModal(
        this.itinerary,
        this.modalSelectedRestaurantId || undefined,
        this.modalSelectedMealDay || undefined,
        this.modalSelectedMealType
      );
    } else if (this.activeModal === 'optimize-preferences') {
      modalHtml = renderOptimizePreferencesModal(this.optimizerPreferences);
    } else if (this.activeModal === 'optimize-preview' && this.previewOptimizationResult) {
      modalHtml = renderOptimizePreviewModal(this.itinerary, this.previewOptimizationResult);
    }

    const currentUser = authService.getCurrentUser();
    const userName = currentUser?.name || 'Viajante';

    appEl.innerHTML = `
      <div class="min-h-screen bg-surface flex flex-col">
        ${renderSidebar(this.currentTab, tripDays, userName, authService.isAdmin())}
        <div class="lg:pl-[230px] flex flex-col flex-1">
          ${renderHeader(canUndo, canRedo, tripDays, {
            onUndo: () => this.handleUndo(),
            onRedo: () => this.handleRedo(),
            onExportMarkdown: () => this.handleExportMarkdown(),
            onExportJson: () => this.handleExportJson(),
            onPrintPdf: () => this.handlePrintDossier(),
            onOpenTripGenerator: () => this.openTripGeneratorModal(),
            onLogout: () => this.handleLogout(),
          }, userName)}
          <main class="w-full pt-20 pb-16 min-h-screen px-4 sm:px-6 lg:px-space-xl max-w-7xl">
            ${viewHtml}
          </main>
        </div>
        ${modalHtml}
      </div>
    `;

    this.attachViewSpecificListeners();
  }

  private attachGlobalListeners(): void {
    // Backdrop close on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });

    // Close export dropdown on outer click
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#export-dropdown-wrapper')) {
        const menu = document.getElementById('export-menu');
        if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      }
    });
  }

  private attachViewSpecificListeners(): void {
    // 1. Sidebar tab buttons
    document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement).getAttribute('data-tab') as AppTab;
        if (target) {
          if (!authService.canAccessTab(target)) {
            return;
          }
          this.currentTab = target;
          this.closeMobileSidebar();
          this.render();
        }
      });
    });

    document.getElementById('sidebar-logo-btn')?.addEventListener('click', () => {
      this.currentTab = 'visao-geral';
      this.render();
    });

    document.getElementById('header-mobile-logo')?.addEventListener('click', () => {
      this.currentTab = 'visao-geral';
      this.render();
    });

    document.getElementById('btn-sidebar-trip-generator')?.addEventListener('click', () => {
      this.openTripGeneratorModal();
    });

    document.getElementById('btn-sidebar-logout')?.addEventListener('click', () => {
      this.handleLogout();
    });

    document.getElementById('btn-header-logout')?.addEventListener('click', () => {
      this.handleLogout();
    });

    // 2. Mobile Sidebar toggle
    document.getElementById('btn-mobile-menu')?.addEventListener('click', () => {
      document.getElementById('app-sidebar')?.classList.remove('-translate-x-full');
    });
    document.getElementById('btn-close-mobile-menu')?.addEventListener('click', () => {
      this.closeMobileSidebar();
    });

    // 3. Header actions
    document.getElementById('btn-header-undo')?.addEventListener('click', () => this.handleUndo());
    document.getElementById('btn-header-redo')?.addEventListener('click', () => this.handleRedo());
    document.getElementById('btn-header-trip-settings')?.addEventListener('click', () => this.openTripGeneratorModal());
    document.getElementById('btn-direct-print')?.addEventListener('click', () => this.handlePrintDossier());

    const btnExportDropdown = document.getElementById('btn-export-dropdown');
    const exportMenu = document.getElementById('export-menu');
    if (btnExportDropdown && exportMenu) {
      btnExportDropdown.addEventListener('click', () => {
        exportMenu.classList.toggle('hidden');
      });
    }

    document.getElementById('action-export-md')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.handleExportMarkdown();
    });
    document.getElementById('action-export-json')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.handleExportJson();
    });
    document.getElementById('action-print-pdf')?.addEventListener('click', () => {
      exportMenu?.classList.add('hidden');
      this.handlePrintDossier();
    });

    // 4. Dashboard View actions
    document.getElementById('btn-goto-itinerary')?.addEventListener('click', () => {
      this.currentTab = 'meu-roteiro';
      this.render();
    });
    document.getElementById('btn-open-full-schedule')?.addEventListener('click', () => {
      this.currentTab = 'meu-roteiro';
      this.render();
    });
    document.getElementById('btn-quick-optimize')?.addEventListener('click', () => {
      this.currentTab = 'sugestoes-de-roteiro';
      this.render();
    });
    document.getElementById('card-dashboard-tickets')?.addEventListener('click', () => {
      this.currentTab = 'meus-ingressos';
      this.render();
    });
    document.getElementById('btn-quick-tickets')?.addEventListener('click', () => {
      this.currentTab = 'meus-ingressos';
      this.render();
    });
    document.getElementById('btn-quick-crowd')?.addEventListener('click', () => {
      this.currentTab = 'calendario-de-lotacao';
      this.render();
    });
    document.querySelectorAll('.day-preview-item').forEach((item) => {
      item.addEventListener('click', (e) => {
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) this.openDayDetails(date);
      });
    });

    // 5. Calendar View actions
    document.getElementById('btn-trigger-optimize-trip')?.addEventListener('click', () => {
      this.activeModal = 'optimize-preferences';
      this.render();
    });

    document.querySelectorAll('.btn-cal-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.calFilter = (e.currentTarget as HTMLElement).getAttribute('data-filter') as any;
        this.render();
      });
    });

    document.querySelectorAll('.btn-toggle-lock').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) this.toggleDayLock(date);
      });
    });

    document.querySelectorAll('.btn-open-day-details').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) this.openDayDetails(date);
      });
    });

    document.querySelectorAll('.btn-trigger-swap').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) this.openSwapModal(date);
      });
    });

    // 6. Outlets View actions
    document.querySelectorAll('.btn-outlet-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.outletFilter = (e.currentTarget as HTMLElement).getAttribute('data-filter') as any;
        this.render();
      });
    });

    document.getElementById('btn-open-trip-generator-from-outlets')?.addEventListener('click', () => {
      this.openTripGeneratorModal();
    });

    document.querySelectorAll('.btn-plan-shopping-day').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const outletName = (e.currentTarget as HTMLElement).getAttribute('data-outlet-name');
        const outletTips = (e.currentTarget as HTMLElement).getAttribute('data-outlet-tips');
        if (outletName) {
          // Find first available rest/shopping day or ask user
          const shoppingDay = this.itinerary.find((d) => d.activityType === 'shopping' || d.activityType === 'rest');
          if (shoppingDay) {
            shoppingDay.title = `Compras: ${outletName}`;
            shoppingDay.personalNotes = `${shoppingDay.personalNotes ? shoppingDay.personalNotes + ' • ' : ''}${outletTips}`;
            this.saveCurrentState(true);
            alert(`O local "${outletName}" foi adicionado com sucesso ao dia ${shoppingDay.date.substring(5)} (${shoppingDay.dayOfWeek})!`);
            this.currentTab = 'meu-roteiro';
            this.render();
          } else {
            alert(`Para incluir "${outletName}", converta um dia para Compras ou use o Gerador de Roteiro.`);
          }
        }
      });
    });

    // 7. Crowd View actions
    document.querySelectorAll('.btn-crowd-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.crowdFilter = (e.currentTarget as HTMLElement).getAttribute('data-filter') as any;
        this.render();
      });
    });

    document.querySelectorAll('.btn-crowd-subtab').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const sub = (e.currentTarget as HTMLElement).getAttribute('data-subtab') as CrowdSubTab;
        if (sub) {
          this.crowdSubTab = sub;
          if (sub === 'live-queues' && !this.liveWaitData) {
            this.loadLiveWaitData(this.selectedLiveParkId);
          } else {
            this.render();
          }
        }
      });
    });

    document.querySelectorAll('.btn-select-live-park').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parkId = (e.currentTarget as HTMLElement).getAttribute('data-park-id');
        if (parkId) {
          this.loadLiveWaitData(parkId);
        }
      });
    });

    document.getElementById('btn-refresh-live-queues')?.addEventListener('click', () => {
      this.loadLiveWaitData(this.selectedLiveParkId, true);
    });

    // Crowd Month Selector
    document.querySelectorAll('.btn-select-crowd-month').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const m = (e.currentTarget as HTMLElement).getAttribute('data-month');
        if (m) {
          this.selectedCrowdMonth = parseInt(m, 10);
          this.render();
        }
      });
    });

    document.getElementById('btn-crowd-view-grid')?.addEventListener('click', () => {
      document.getElementById('crowd-month-grid-container')?.classList.remove('hidden');
      document.getElementById('crowd-month-list-container')?.classList.add('hidden');
      document.getElementById('btn-crowd-view-grid')?.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-xs');
      document.getElementById('btn-crowd-view-grid')?.classList.remove('text-on-surface-variant');
      document.getElementById('btn-crowd-view-list')?.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-xs');
      document.getElementById('btn-crowd-view-list')?.classList.add('text-on-surface-variant');
    });

    document.getElementById('btn-crowd-view-list')?.addEventListener('click', () => {
      document.getElementById('crowd-month-grid-container')?.classList.add('hidden');
      document.getElementById('crowd-month-list-container')?.classList.remove('hidden');
      document.getElementById('btn-crowd-view-list')?.classList.add('bg-surface-container-lowest', 'text-primary', 'shadow-xs');
      document.getElementById('btn-crowd-view-list')?.classList.remove('text-on-surface-variant');
      document.getElementById('btn-crowd-view-grid')?.classList.remove('bg-surface-container-lowest', 'text-primary', 'shadow-xs');
      document.getElementById('btn-crowd-view-grid')?.classList.add('text-on-surface-variant');
    });

    // Touring Plans actions
    document.querySelectorAll('.btn-select-touring-plan').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const pid = (e.currentTarget as HTMLElement).getAttribute('data-plan-id');
        if (pid) {
          this.selectedTouringPlanId = pid;
          this.render();
        }
      });
    });

    document.querySelectorAll('.btn-touring-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const op = (e.currentTarget as HTMLElement).getAttribute('data-op') as any;
        if (op) {
          this.touringOperatorFilter = op;
          this.render();
        }
      });
    });

    document.getElementById('btn-print-touring-plan')?.addEventListener('click', () => {
      window.print();
    });

    // 8. Comparator View actions
    const selectPark = document.getElementById('select-comparator-park') as HTMLSelectElement | null;
    if (selectPark) {
      selectPark.addEventListener('change', (e) => {
        this.comparatorParkId = (e.target as HTMLSelectElement).value;
        this.render();
      });
    }

    document.querySelectorAll('.compare-date-checkbox').forEach((chk) => {
      chk.addEventListener('change', (e) => {
        const input = e.target as HTMLInputElement;
        const val = input.value;
        if (input.checked) {
          if (!this.comparatorDates.includes(val)) {
            if (this.comparatorDates.length >= 3) {
              this.comparatorDates.shift();
            }
            this.comparatorDates.push(val);
          }
        } else {
          this.comparatorDates = this.comparatorDates.filter((d) => d !== val);
        }
        this.render();
      });
    });

    document.querySelectorAll('.btn-apply-candidate-date').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parkId = (e.currentTarget as HTMLElement).getAttribute('data-park');
        const targetDate = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (parkId && targetDate) {
          this.applyParkToDate(parkId, targetDate);
        }
      });
    });

    // 9. Tickets View actions
    document.querySelectorAll('.btn-edit-ticket-rules').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) this.openTicketRulesModal(id);
      });
    });

    // 10. Optimizer View actions
    document.getElementById('btn-run-optimizer')?.addEventListener('click', () => {
      this.recalculateAll();
      this.render();
    });

    const toggleWeights = document.getElementById('btn-toggle-weights-panel');
    const weightsPanel = document.getElementById('weights-panel');
    if (toggleWeights && weightsPanel) {
      toggleWeights.addEventListener('click', () => {
        weightsPanel.classList.toggle('hidden');
      });
    }

    document.querySelectorAll('.suggestion-toggle-checkbox').forEach((chk) => {
      chk.addEventListener('change', (e) => {
        const input = e.target as HTMLInputElement;
        const id = input.getAttribute('data-id');
        const item = this.optimizationResult.suggestions.find((s) => s.id === id);
        if (item) item.accepted = input.checked;
      });
    });

    document.getElementById('btn-apply-selected-suggestions')?.addEventListener('click', () => {
      this.applyAcceptedOptimizerSuggestions();
    });

    // 11. History View actions
    document.getElementById('btn-history-undo')?.addEventListener('click', () => this.handleUndo());
    document.getElementById('btn-history-redo')?.addEventListener('click', () => this.handleRedo());

    document.getElementById('btn-create-snapshot')?.addEventListener('click', () => {
      const input = document.getElementById('input-snapshot-name') as HTMLInputElement | null;
      const name = input?.value.trim() || `Ponto de Restauração #${this.snapshots.length + 1}`;
      this.snapshots.unshift({
        id: `snap_${Date.now()}`,
        name,
        timestamp: new Date().toISOString(),
        itinerary: JSON.parse(JSON.stringify(this.itinerary)),
      });
      storageManager.saveSnapshots(this.snapshots);
      this.render();
    });

    document.querySelectorAll('.btn-restore-snapshot').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        const snap = this.snapshots.find((s) => s.id === id);
        if (snap) {
          if (confirm(`Restaurar o roteiro "${snap.name}"?`)) {
            this.itinerary = JSON.parse(JSON.stringify(snap.itinerary));
            this.saveCurrentState(true);
            this.render();
          }
        }
      });
    });

    document.querySelectorAll('.btn-delete-snapshot').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        this.snapshots = this.snapshots.filter((s) => s.id !== id);
        storageManager.saveSnapshots(this.snapshots);
        this.render();
      });
    });

    document.getElementById('btn-reset-initial')?.addEventListener('click', () => {
      if (confirm('Tem certeza de que deseja restaurar o roteiro original de fábrica? Todas as personalizações serão redefinidas.')) {
        storageManager.resetToDefault();
        this.itinerary = storageManager.loadItinerary();
        this.tickets = storageManager.loadTickets();
        this.crowdStore = createInitialCrowdStore();
        this.fatigueParams = { ...DEFAULT_FATIGUE_PARAMS };
        this.optimizerWeights = { ...DEFAULT_OPTIMIZER_WEIGHTS };
        this.recalculateAll();
        this.render();
      }
    });

    // 12. Settings View actions
    document.getElementById('btn-export-full-json')?.addEventListener('click', () => {
      const json = storageManager.exportFullProject();
      ExportService.downloadFile('orlando-planner-backup.json', json, 'application/json');
    });

    const inputImportJson = document.getElementById('input-import-json') as HTMLInputElement | null;
    if (inputImportJson) {
      inputImportJson.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const content = event.target?.result as string;
            const res = storageManager.importFullProject(content);
            if (res.success) {
              alert(res.message);
              this.itinerary = storageManager.loadItinerary();
              this.tickets = storageManager.loadTickets();
              this.crowdStore = storageManager.loadCrowdStore();
              this.recalculateAll();
              this.render();
            } else {
              alert(res.message);
            }
          };
          reader.readAsText(file);
        }
      });
    }

    document.getElementById('btn-export-settings-md')?.addEventListener('click', () => this.handleExportMarkdown());
    document.getElementById('btn-export-settings-pdf')?.addEventListener('click', () => this.handlePrintDossier());

    // Crowd Import (Admin)
    const inputCrowdFile = document.getElementById('input-import-crowd-file') as HTMLInputElement | null;
    if (inputCrowdFile) {
      inputCrowdFile.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const content = event.target?.result as string;
            const service = new CrowdDataService(this.crowdStore);
            let report;
            if (file.name.endsWith('.csv')) {
              report = service.importFromCsv(content);
            } else {
              try {
                const parsed = JSON.parse(content);
                report = service.importFromJson(parsed);
              } catch (err) {
                alert('JSON inválido: ' + err);
                return;
              }
            }
            this.crowdStore = service.getStore();
            storageManager.saveCrowdStore(this.crowdStore);
            this.recalculateAll();
            this.render();
            alert(`Importação concluída: ${report.importedCount} registros importados. Duplicados: ${report.duplicatesCount}.`);
          };
          reader.readAsText(file);
        }
      });
    }

    document.getElementById('btn-load-benchmark-data')?.addEventListener('click', () => {
      const service = new CrowdDataService(this.crowdStore);
      const records = createBenchmarkCrowdRecords();
      service.importFromJson(records);
      this.crowdStore = service.getStore();
      storageManager.saveCrowdStore(this.crowdStore);
      this.recalculateAll();
      this.render();
      alert('Dados benchmark de simulação carregados com sucesso! Otimização completa liberada.');
    });

    document.getElementById('btn-clear-crowd-data')?.addEventListener('click', () => {
      this.crowdStore = createInitialCrowdStore();
      storageManager.saveCrowdStore(this.crowdStore);
      this.recalculateAll();
      this.render();
    });

    // 13. Modal Form Submissions
    this.attachModalListeners();

    // 14. Onde Comer (Dining) View Actions
    this.attachDiningViewListeners();
  }

  private attachModalListeners(): void {
    // Close modal triggers
    document.getElementById('btn-close-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-close-swap-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-swap')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-close-ticket-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-ticket-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-close-trip-gen-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-trip-gen')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-close-optimize-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-optimize')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-close-preview-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('btn-cancel-preview')?.addEventListener('click', () => this.closeModal());

    document.getElementById('btn-back-to-preferences')?.addEventListener('click', () => {
      this.activeModal = 'optimize-preferences';
      this.render();
    });

    const formOpt = document.getElementById('form-optimize-preferences') as HTMLFormElement | null;
    if (formOpt) {
      formOpt.addEventListener('submit', (e) => {
        e.preventDefault();
        const preferDisney = (document.getElementById('opt-prefer-disney-first') as HTMLInputElement)?.checked ?? true;
        const preserveLocked = (document.getElementById('opt-preserve-locked') as HTMLInputElement)?.checked ?? true;
        const preserveDining = (document.getElementById('opt-preserve-dining') as HTMLInputElement)?.checked ?? true;
        const reorderOff = (document.getElementById('opt-reorder-off-days') as HTMLInputElement)?.checked ?? true;

        this.optimizerPreferences = {
          preferDisneyFirstPark: preferDisney,
          preserveLockedDates: preserveLocked,
          preserveDiningReservations: preserveDining,
          allowReorderOffDays: reorderOff,
        };

        this.previewOptimizationResult = ItineraryOptimizer.optimize(
          this.itinerary,
          this.tickets,
          this.crowdStore,
          this.optimizerPreferences
        );

        this.activeModal = 'optimize-preview';
        this.render();
      });
    }

    document.getElementById('btn-confirm-apply-suggestions')?.addEventListener('click', () => {
      if (this.previewOptimizationResult) {
        this.itinerary = JSON.parse(JSON.stringify(this.previewOptimizationResult.proposedItinerary));
        this.saveCurrentState(true);
        this.closeModal();
        this.render();
        alert('Roteiro otimizado com sucesso com base na lotação dos parques e restrições obrigatórias!');
      }
    });

    // Open Touring Plan from Day Details Modal
    document.querySelectorAll('.btn-open-park-plan').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parkId = (e.currentTarget as HTMLElement).getAttribute('data-park-id');
        if (parkId) {
          this.selectedTouringPlanId = parkId;
          this.closeModal();
          this.currentTab = 'roteiros-de-parques';
          this.render();
        }
      });
    });

    // Day Details Form
    const formDay = document.getElementById('form-day-details') as HTMLFormElement | null;
    if (formDay) {
      formDay.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = formDay.getAttribute('data-date');
        const day = this.itinerary.find((d) => d.date === date);
        if (day) {
          const formData = new FormData(formDay);
          day.title = formData.get('title') as string;
          day.activityType = formData.get('activityType') as any;
          day.description = formData.get('description') as string;
          day.parkId = (formData.get('parkId') as string) || null;
          day.ticketId = (formData.get('ticketId') as string) || null;
          day.effortLevel = formData.get('effortLevel') as any;
          day.plannedArrivalTime = formData.get('plannedArrivalTime') as string;
          day.plannedDepartureTime = formData.get('plannedDepartureTime') as string;
          day.ropeDropStrategy = formData.get('ropeDropStrategy') as string;
          day.personalNotes = formData.get('personalNotes') as string;
          day.isLocked = formDay.querySelector<HTMLInputElement>('input[name="isLocked"]')?.checked ?? false;

          this.saveCurrentState(true);
          this.closeModal();
          this.render();
        }
      });
    }

    // Swap Days Form
    const formSwap = document.getElementById('form-swap-days') as HTMLFormElement | null;
    if (formSwap) {
      formSwap.addEventListener('submit', (e) => {
        e.preventDefault();
        const sourceDate = formSwap.getAttribute('data-source');
        const formData = new FormData(formSwap);
        const targetDate = formData.get('targetDate') as string;
        if (sourceDate && targetDate) {
          this.executeDaySwap(sourceDate, targetDate);
          this.closeModal();
          this.render();
        }
      });
    }

    // Ticket Rules Form
    const formTicket = document.getElementById('form-ticket-rules') as HTMLFormElement | null;
    if (formTicket) {
      formTicket.addEventListener('submit', (e) => {
        e.preventDefault();
        const ticketId = formTicket.getAttribute('data-id');
        const ticket = this.tickets.find((t) => t.id === ticketId);
        if (ticket) {
          const formData = new FormData(formTicket);
          ticket.name = formData.get('name') as string;
          ticket.totalVisitsAllowed = parseInt(formData.get('totalVisitsAllowed') as string, 10);
          const winDays = formData.get('validityWindowDays') as string;
          ticket.validityWindowDays = winDays ? parseInt(winDays, 10) : null;
          ticket.ruleStatus = formData.get('ruleStatus') as any;
          ticket.allowParkRepetition = formData.get('allowParkRepetition') === 'true';
          ticket.officialSourceNote = formData.get('officialSourceNote') as string;

          this.saveCurrentState(true);
          this.closeModal();
          this.render();
        }
      });
    }

    // Day details queue refresh button
    document.getElementById('btn-refresh-day-queues')?.addEventListener('click', () => {
      const container = document.getElementById('day-live-queue-section');
      const parkId = container?.getAttribute('data-park-id');
      if (parkId) {
        this.loadDayDetailsQueueTimes(parkId, true);
      }
    });

    // Trip Generator Form: Start Date, End Date & Duration Sync
    const inputStartDate = document.getElementById('input-trip-start-date') as HTMLInputElement | null;
    const inputEndDate = document.getElementById('input-trip-end-date') as HTMLInputElement | null;
    const sliderDays = document.getElementById('input-trip-total-days') as HTMLInputElement | null;
    const labelDays = document.getElementById('label-selected-trip-days');
    const labelSliderVal = document.getElementById('label-slider-val');
    const previewText = document.getElementById('trip-preview-text');

    const updateTripGenPreview = () => {
      if (!inputStartDate || !inputEndDate || !sliderDays || !labelDays || !previewText) return;
      const start = inputStartDate.value || '2027-05-05';
      const end = inputEndDate.value || '2027-05-23';
      const days = Math.max(3, daysBetween(start, end) + 1);

      labelDays.innerText = `${days} dias de estadia`;
      if (labelSliderVal) labelSliderVal.innerText = `${days} dias`;
      sliderDays.value = String(Math.min(28, Math.max(4, days)));

      const estParks = Math.max(2, Math.floor(days * 0.62));
      const estShopping = Math.max(1, days - estParks - 2);
      previewText.innerHTML = `<strong>Período de ${days} dias (${start.substring(5)} a ${end.substring(5)}):</strong> 1 dia de chegada (abastecimento) + ~${estParks} dias nos principais parques temáticos + ${estShopping} dias de compras & descanso nos outlets mais baratos (International Premium, Vineland e Ross) + 1 dia de partida / check-out.`;
    };

    if (inputStartDate && inputEndDate && sliderDays) {
      inputStartDate.addEventListener('change', () => {
        const start = inputStartDate.value;
        const currentDays = parseInt(sliderDays.value, 10) || 10;
        inputEndDate.value = addDays(start, currentDays - 1);
        updateTripGenPreview();
      });

      inputEndDate.addEventListener('change', () => {
        const start = inputStartDate.value;
        const end = inputEndDate.value;
        if (end < start) {
          inputEndDate.value = start;
        }
        updateTripGenPreview();
      });

      sliderDays.addEventListener('input', () => {
        const start = inputStartDate.value || '2027-05-05';
        const days = parseInt(sliderDays.value, 10);
        inputEndDate.value = addDays(start, days - 1);
        updateTripGenPreview();
      });

      // Initialize preview
      updateTripGenPreview();
    }

    const formTripGen = document.getElementById('form-generate-custom-trip') as HTMLFormElement | null;
    if (formTripGen) {
      formTripGen.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formTripGen);
        const startDate = (formData.get('startDate') as string) || '2027-05-05';
        const endDate = (formData.get('endDate') as string) || '2027-05-23';
        const departureOption = formData.get('departureOption') as string;
        const departureDayHasPark = departureOption === 'morning_park';
        const profile = (formData.get('profile') as any) || 'equilibrado';
        const includeBusch = formTripGen.querySelector<HTMLInputElement>('input[name="includeBuschGardensTampa"]')?.checked ?? true;
        const includeEpic2 = formTripGen.querySelector<HTMLInputElement>('input[name="includeEpicUniverseTwoDays"]')?.checked ?? true;

        // Auto snapshot previous itinerary
        this.snapshots.unshift({
          id: `snap_${Date.now()}`,
          name: `Roteiro anterior (${this.itinerary.length} dias)`,
          timestamp: new Date().toISOString(),
          itinerary: JSON.parse(JSON.stringify(this.itinerary)),
        });

        const newItinerary = ItineraryGenerator.generateCustomItinerary({
          startDate,
          endDate,
          departureDayHasPark,
          profile,
          includeBuschGardensTampa: includeBusch,
          includeEpicUniverseTwoDays: includeEpic2,
        });

        this.itinerary = newItinerary;
        this.saveCurrentState(true);
        this.closeModal();
        this.currentTab = 'meu-roteiro';
        this.render();
        alert(`Roteiro sob medida de ${this.itinerary.length} dias gerado com sucesso! Período: ${startDate} a ${endDate}.`);
      });
    }

    // Attach Meal modal actions
    this.attachMealModalListeners();
  }

  private attachDiningViewListeners(): void {
    // 1. Category Pills
    document.querySelectorAll('.btn-dining-cat-pill').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const cat = (e.currentTarget as HTMLElement).getAttribute('data-category') as any;
        if (cat) {
          this.diningCriteria.categoryTab = cat;
          this.render();
        }
      });
    });

    // 2. Search Input
    const searchInput = document.getElementById('input-dining-search') as HTMLInputElement | null;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.diningCriteria.searchQuery = (e.target as HTMLInputElement).value;
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.diningCriteria.searchQuery = searchInput.value;
          this.render();
        }
      });
    }

    document.getElementById('btn-clear-dining-search')?.addEventListener('click', () => {
      this.diningCriteria.searchQuery = '';
      this.render();
    });

    // 3. Dropdown Filters
    document.getElementById('filter-dining-location-type')?.addEventListener('change', (e) => {
      this.diningCriteria.locationType = (e.target as HTMLSelectElement).value as any;
      this.render();
    });

    document.getElementById('filter-dining-park')?.addEventListener('change', (e) => {
      this.diningCriteria.park = (e.target as HTMLSelectElement).value;
      this.render();
    });

    document.getElementById('filter-dining-meal-type')?.addEventListener('change', (e) => {
      this.diningCriteria.mealType = (e.target as HTMLSelectElement).value as any;
      this.render();
    });

    document.getElementById('filter-dining-service-type')?.addEventListener('change', (e) => {
      this.diningCriteria.serviceType = (e.target as HTMLSelectElement).value as any;
      this.render();
    });

    document.getElementById('filter-dining-price-category')?.addEventListener('change', (e) => {
      this.diningCriteria.priceCategory = (e.target as HTMLSelectElement).value as any;
      this.render();
    });

    document.getElementById('filter-dining-confirmed-only')?.addEventListener('change', (e) => {
      this.diningCriteria.confirmedOnly = (e.target as HTMLSelectElement).value === 'true';
      this.render();
    });

    // 4. Checkbox Filters
    document.getElementById('check-character-dining')?.addEventListener('change', (e) => {
      this.diningCriteria.characterDiningOnly = (e.target as HTMLInputElement).checked;
      this.render();
    });

    document.getElementById('check-reservation-required')?.addEventListener('change', (e) => {
      this.diningCriteria.reservationRequiredOnly = (e.target as HTMLInputElement).checked;
      this.render();
    });

    document.getElementById('check-vegetarian-options')?.addEventListener('change', (e) => {
      this.diningCriteria.vegetarianOnly = (e.target as HTMLInputElement).checked;
      this.render();
    });

    document.getElementById('check-favorites-only')?.addEventListener('change', (e) => {
      this.diningCriteria.favoritesOnly = (e.target as HTMLInputElement).checked;
      this.render();
    });

    document.getElementById('btn-reset-dining-filters')?.addEventListener('click', () => {
      this.diningCriteria = {
        searchQuery: '',
        categoryTab: 'all',
        locationType: 'all',
        park: 'all',
        mealType: 'all',
        serviceType: 'all',
        priceCategory: 'all',
        cuisine: 'all',
        characterDiningOnly: false,
        reservationRequiredOnly: false,
        vegetarianOnly: false,
        confirmedOnly: false,
        favoritesOnly: false,
      };
      this.render();
    });

    // 5. Toggle Favorites
    document.querySelectorAll('.btn-toggle-dining-favorite').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) {
          diningService.toggleFavorite(id);
          this.render();
        }
      });
    });

    // 6. Restaurant Details Modal
    document.querySelectorAll('.btn-open-restaurant-details').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) {
          this.activeModal = 'restaurant-details';
          this.modalSelectedRestaurantId = id;
          this.render();
        }
      });
    });

    // 7. Add to Itinerary from Card or Details
    document.querySelectorAll('.btn-add-restaurant-to-itinerary').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) {
          this.activeModal = 'add-meal';
          this.modalSelectedRestaurantId = id;
          this.modalSelectedMealDay = this.itinerary[0]?.date || '2027-05-05';
          this.render();
        }
      });
    });

    // 8. Day Suggestions & Quick Add
    document.getElementById('select-suggest-day')?.addEventListener('change', (e) => {
      const date = (e.target as HTMLSelectElement).value;
      this.selectedDiningDaySuggestion = date || null;
      this.render();
    });

    document.getElementById('btn-close-day-suggestions')?.addEventListener('click', () => {
      this.selectedDiningDaySuggestion = null;
      this.render();
    });

    document.querySelectorAll('.btn-quick-add-to-day').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const restId = (e.currentTarget as HTMLElement).getAttribute('data-restaurant-id');
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (restId && date) {
          this.activeModal = 'add-meal';
          this.modalSelectedRestaurantId = restId;
          this.modalSelectedMealDay = date;
          this.render();
        }
      });
    });

    // 9. Admin Panel & Exports
    document.getElementById('btn-toggle-admin-panel')?.addEventListener('click', () => {
      this.showDiningAdminPanel = !this.showDiningAdminPanel;
      this.render();
    });

    document.getElementById('btn-export-catalog-csv')?.addEventListener('click', () => {
      const csv = diningService.exportCatalogAsCSV();
      ExportService.downloadFile('orlando-planner-restaurantes.csv', csv, 'text/csv;charset=utf-8');
    });

    document.getElementById('btn-export-catalog-json')?.addEventListener('click', () => {
      const json = diningService.exportCatalogAsJSON();
      ExportService.downloadFile('orlando-planner-catalogo-gastronomico.json', json, 'application/json');
    });

    document.getElementById('btn-export-meals-csv')?.addEventListener('click', () => {
      const csv = diningService.exportMealsAsCSV();
      ExportService.downloadFile('orlando-planner-refeicoes-agendadas.csv', csv, 'text/csv;charset=utf-8');
    });

    // 10. Calendar View Quick Add Meal
    document.querySelectorAll('.btn-quick-add-meal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) {
          this.activeModal = 'add-meal';
          this.modalSelectedMealDay = date;
          this.modalSelectedRestaurantId = null;
          this.render();
        }
      });
    });
  }

  private attachMealModalListeners(): void {
    // Open add meal from Day Details Modal
    document.querySelectorAll('.btn-open-add-meal-for-date').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const date = (e.currentTarget as HTMLElement).getAttribute('data-date');
        if (date) {
          this.activeModal = 'add-meal';
          this.modalSelectedMealDay = date;
          this.modalSelectedRestaurantId = null;
          this.render();
        }
      });
    });

    // Remove scheduled meal
    document.querySelectorAll('.btn-remove-day-meal').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const mealId = (e.currentTarget as HTMLElement).getAttribute('data-meal-id');
        if (mealId) {
          diningService.removeMeal(mealId);
          this.render();
        }
      });
    });

    // Form Add Meal Submit
    const formAddMeal = document.getElementById('form-add-meal') as HTMLFormElement | null;
    if (formAddMeal) {
      formAddMeal.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formAddMeal);
        const visitDate = (formData.get('visitDate') as string) || '2027-05-05';
        const restaurantId = (formData.get('restaurantId') as string) || '';
        const mealType = (formData.get('mealType') as MealType) || 'lunch';
        const plannedTime = (formData.get('plannedTime') as string) || '13:00';
        const reservationStatus = (formData.get('reservationStatus') as any) || 'needed_pending';
        const reservationReference = (formData.get('reservationReference') as string) || null;
        const personalNotes = (formData.get('personalNotes') as string) || null;

        const rest = diningService.getRestaurantById(restaurantId);
        const restaurantName = rest ? rest.name : 'Restaurante';

        diningService.addMeal({
          trip_id: 'trip-may-2027',
          restaurant_id: restaurantId,
          restaurant_name: restaurantName,
          visit_date: visitDate,
          meal_type: mealType,
          planned_time: plannedTime,
          reservation_status: reservationStatus,
          reservation_reference: reservationReference,
          personal_notes: personalNotes,
          itinerary_day_id: visitDate,
        });

        this.closeModal();
        this.render();
      });
    }
  }

  // --- Actions ---

  private toggleDayLock(date: string): void {
    const day = this.itinerary.find((d) => d.date === date);
    if (day) {
      day.isLocked = !day.isLocked;
      this.saveCurrentState(true);
      this.render();
    }
  }

  private openDayDetails(date: string): void {
    this.activeModal = 'day-details';
    this.modalSelectedDate = date;
    this.render();

    const day = this.itinerary.find((d) => d.date === date);
    if (day && day.parkId) {
      this.loadDayDetailsQueueTimes(day.parkId);
    }
  }

  private async loadDayDetailsQueueTimes(parkId: string, force: boolean = false): Promise<void> {
    const container = document.getElementById('day-queue-content');
    if (!container) return;

    if (force) {
      container.innerHTML = `
        <div class="flex items-center justify-center py-6 text-outline gap-2">
          <span class="material-symbols-outlined animate-spin text-[18px] text-primary">progress_activity</span>
          <span>Atualizando filas em tempo real...</span>
        </div>
      `;
    }

    try {
      const summary = await QueueTimesService.fetchParkWaitTimes(parkId);
      if (summary && this.activeModal === 'day-details') {
        const liveContainer = document.getElementById('day-queue-content');
        if (liveContainer) {
          liveContainer.innerHTML = renderLiveQueueContent(summary);
        }
      }
    } catch (e) {
      console.warn('Erro ao carregar filas do dia:', e);
    }
  }

  private async loadLiveWaitData(parkId: string, _force: boolean = false): Promise<void> {
    this.selectedLiveParkId = parkId;
    this.liveWaitData = null;
    this.render();

    try {
      const summary = await QueueTimesService.fetchParkWaitTimes(parkId);
      this.liveWaitData = summary;
      if (this.currentTab === 'calendario-de-lotacao' && this.crowdSubTab === 'live-queues') {
        this.render();
      }
    } catch (e) {
      console.warn('Erro ao carregar filas ao vivo:', e);
      this.render();
    }
  }

  private openSwapModal(date: string): void {
    this.activeModal = 'swap-days';
    this.modalSelectedDate = date;
    this.render();
  }

  private openTicketRulesModal(ticketId: string): void {
    this.activeModal = 'ticket-rules';
    this.modalSelectedTicketId = ticketId;
    this.render();
  }

  private openTripGeneratorModal(): void {
    this.activeModal = 'trip-generator';
    this.render();
  }

  private closeModal(): void {
    this.activeModal = null;
    this.modalSelectedDate = null;
    this.modalSelectedTicketId = null;
    this.modalSelectedRestaurantId = null;
    this.modalSelectedMealDay = null;
    this.modalSelectedMealType = undefined;
    this.render();
  }

  private closeMobileSidebar(): void {
    document.getElementById('app-sidebar')?.classList.add('-translate-x-full');
  }

  private executeDaySwap(sourceDate: string, targetDate: string): void {
    const idxA = this.itinerary.findIndex((d) => d.date === sourceDate);
    const idxB = this.itinerary.findIndex((d) => d.date === targetDate);
    if (idxA === -1 || idxB === -1) return;

    if (this.itinerary[idxA].isLocked || this.itinerary[idxB].isLocked) {
      alert('Não é possível trocar datas bloqueadas.');
      return;
    }

    const dayA = this.itinerary[idxA];
    const dayB = this.itinerary[idxB];

    const tempParkId = dayA.parkId;
    const tempTicketId = dayA.ticketId;
    const tempTitle = dayA.title;
    const tempDesc = dayA.description;
    const tempActivity = dayA.activityType;
    const tempEffort = dayA.effortLevel;
    const tempRope = dayA.ropeDropStrategy;
    const tempPriority = dayA.priorityAttractions;

    dayA.parkId = dayB.parkId;
    dayA.ticketId = dayB.ticketId;
    dayA.title = dayB.title;
    dayA.description = dayB.description;
    dayA.activityType = dayB.activityType;
    dayA.effortLevel = dayB.effortLevel;
    dayA.ropeDropStrategy = dayB.ropeDropStrategy;
    dayA.priorityAttractions = dayB.priorityAttractions;

    dayB.parkId = tempParkId;
    dayB.ticketId = tempTicketId;
    dayB.title = tempTitle;
    dayB.description = tempDesc;
    dayB.activityType = tempActivity;
    dayB.effortLevel = tempEffort;
    dayB.ropeDropStrategy = tempRope;
    dayB.priorityAttractions = tempPriority;

    this.saveCurrentState(true);
  }

  private applyParkToDate(parkId: string, targetDate: string): void {
    const currentDayWithPark = this.itinerary.find((d) => d.parkId === parkId);
    const targetDay = this.itinerary.find((d) => d.date === targetDate);
    if (!targetDay) return;

    if (targetDay.isLocked) {
      alert('Esta data está bloqueada.');
      return;
    }

    if (currentDayWithPark) {
      this.executeDaySwap(currentDayWithPark.date, targetDate);
      this.currentTab = 'meu-roteiro';
      this.render();
    } else {
      targetDay.parkId = parkId;
      targetDay.activityType = 'park';
      this.saveCurrentState(true);
      this.currentTab = 'meu-roteiro';
      this.render();
    }
  }

  private applyAcceptedOptimizerSuggestions(): void {
    const accepted = this.optimizationResult.suggestions.filter((s) => s.accepted);
    if (accepted.length === 0) {
      alert('Nenhuma sugestão aceita para aplicar.');
      return;
    }

    this.itinerary = JSON.parse(JSON.stringify(this.optimizationResult.proposedItinerary));
    this.saveCurrentState(true);
    alert(`${accepted.length} alterações do otimizador aplicadas com sucesso!`);
    this.currentTab = 'meu-roteiro';
    this.render();
  }

  private handleUndo(): void {
    const prev = storageManager.undo(this.itinerary);
    if (prev) {
      this.itinerary = prev;
      this.saveCurrentState(false);
      this.render();
    }
  }

  private handleRedo(): void {
    const next = storageManager.redo(this.itinerary);
    if (next) {
      this.itinerary = next;
      this.saveCurrentState(false);
      this.render();
    }
  }

  private handleExportMarkdown(): void {
    const md = ExportService.generateMarkdownItinerary(this.itinerary, this.tickets, this.crowdStore);
    ExportService.downloadFile(`orlando-planner-roteiro-${this.itinerary.length}dias.md`, md, 'text/markdown;charset=utf-8');
  }

  private handleExportJson(): void {
    const json = storageManager.exportFullProject();
    ExportService.downloadFile(`orlando-planner-backup-${this.itinerary.length}dias.json`, json, 'application/json');
  }

  private handlePrintDossier(): void {
    ExportService.printFullDossier(this.itinerary, this.tickets, this.crowdStore);
  }

  public renderLogin(errorMessage?: string): void {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    const isLocked = authService.isLockedOut();
    const remainingSec = authService.getLockoutRemainingSeconds();

    appEl.innerHTML = renderLoginView(errorMessage, isLocked, remainingSec);

    const form = document.getElementById('form-login') as HTMLFormElement | null;
    const emailInput = document.getElementById('login-email') as HTMLInputElement | null;
    const pwdInput = document.getElementById('login-password') as HTMLInputElement | null;
    const rememberInput = document.getElementById('login-remember') as HTMLInputElement | null;
    const toggleBtn = document.getElementById('btn-toggle-pwd');
    const pwdIcon = document.getElementById('pwd-icon');
    const submitBtn = document.getElementById('btn-login-submit') as HTMLButtonElement | null;
    const spinner = document.getElementById('btn-login-spinner');
    const btnText = document.getElementById('btn-login-text');

    if (toggleBtn && pwdInput && pwdIcon) {
      toggleBtn.addEventListener('click', () => {
        const isPwd = pwdInput.type === 'password';
        pwdInput.type = isPwd ? 'text' : 'password';
        pwdIcon.textContent = isPwd ? 'visibility_off' : 'visibility';
      });
    }

    if (isLocked) {
      const timer = window.setInterval(() => {
        if (!authService.isLockedOut()) {
          window.clearInterval(timer);
          this.renderLogin();
        } else {
          const sec = authService.getLockoutRemainingSeconds();
          const area = document.getElementById('login-feedback-area');
          if (area) {
            area.innerHTML = `
              <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-start gap-2.5 text-xs animate-pulse">
                <span class="material-symbols-outlined text-[20px] text-error flex-shrink-0">shield_with_heart</span>
                <div>
                  <span class="font-semibold block text-[13px]">Acesso Temporariamente Suspenso</span>
                  Muitas tentativas sem sucesso. Aguarde <strong>${sec} segundos</strong> para tentar novamente.
                </div>
              </div>
            `;
          }
        }
      }, 1000);
      return;
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput?.value || '';
        const password = pwdInput?.value || '';
        const rememberMe = rememberInput ? rememberInput.checked : true;

        if (!email.trim() || !password) {
          this.renderLogin('Por favor, informe seu e-mail e senha.');
          return;
        }

        if (submitBtn) submitBtn.disabled = true;
        if (spinner) spinner.classList.remove('hidden');
        if (btnText) btnText.textContent = 'Autenticando com segurança...';

        try {
          const res = await authService.login(email, password, rememberMe);
          if (res.success) {
            this.recalculateAll();
            this.render();
            this.attachGlobalListeners();
          } else {
            this.renderLogin(res.error || 'Credenciais inválidas.');
          }
        } catch {
          this.renderLogin('Erro inesperado durante a autenticação. Tente novamente.');
        }
      });
    }
  }

  private handleLogout(): void {
    if (window.confirm('Deseja realmente sair do Orlando Planner?')) {
      authService.logout();
      this.renderLogin();
    }
  }
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  new OrlandoPlannerApp();
});
