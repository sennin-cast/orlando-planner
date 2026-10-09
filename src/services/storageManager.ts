import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { FatigueParameters } from '../types/fatigue';
import { OptimizerWeights } from '../types/optimizer';
import { INITIAL_ITINERARY } from '../data/initialItinerary';
import { INITIAL_TICKETS } from '../data/initialTickets';

export const SCHEMA_VERSION = 1;

export interface StorageSnapshot {
  id: string;
  timestamp: string;
  name: string;
  itinerary: ItineraryDay[];
}

export interface PlannerProjectData {
  schemaVersion: number;
  exportedAt: string;
  tripName: string;
  startDate: string;
  endDate: string;
  itinerary: ItineraryDay[];
  tickets: TicketDefinition[];
  crowdStore: CrowdDataStore;
  fatigueParams: FatigueParameters;
  optimizerWeights: OptimizerWeights;
  snapshots: StorageSnapshot[];
}

const STORAGE_KEYS = {
  ITINERARY: 'orlando_planner_itinerary_v1',
  TICKETS: 'orlando_planner_tickets_v1',
  CROWD: 'orlando_planner_crowd_v1',
  FATIGUE_PARAMS: 'orlando_planner_fatigue_params_v1',
  OPTIMIZER_WEIGHTS: 'orlando_planner_optimizer_weights_v1',
  HISTORY: 'orlando_planner_history_v1',
  SNAPSHOTS: 'orlando_planner_snapshots_v1',
};

export const DEFAULT_FATIGUE_PARAMS: FatigueParameters = {
  maxConsecutiveParkDays: 3,
  maxDailyWalkingKm: 15,
  restDayRecoveryBonus: 35,
  longCommuteThresholdMinutes: 60,
  userToleranceMultiplier: 1.0,
};

export const DEFAULT_OPTIMIZER_WEIGHTS: OptimizerWeights = {
  crowdWeight: 0.40,
  fatigueWeight: 0.25,
  commuteWeight: 0.15,
  preferenceWeight: 0.10,
  flexibilityWeight: 0.10,
};

export class StorageManager {
  private undoStack: ItineraryDay[][] = [];
  private redoStack: ItineraryDay[][] = [];
  private memoryStore = new Map<string, string>();

  constructor() {}

  private getItem(key: string): string | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        return localStorage.getItem(key);
      } catch {
        return this.memoryStore.get(key) || null;
      }
    }
    return this.memoryStore.get(key) || null;
  }

  private setItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
        return;
      } catch {
        // Fallback to memory
      }
    }
    this.memoryStore.set(key, value);
  }

  private removeItem(key: string): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch {
        // Fallback
      }
    }
    this.memoryStore.delete(key);
  }

  public saveItinerary(itinerary: ItineraryDay[], recordUndo: boolean = true): void {
    if (recordUndo) {
      const current = this.loadItinerary();
      if (current) {
        this.undoStack.push(JSON.parse(JSON.stringify(current)));
        if (this.undoStack.length > 30) this.undoStack.shift();
        this.redoStack = []; // Clear redo on fresh action
      }
    }
    this.setItem(STORAGE_KEYS.ITINERARY, JSON.stringify(itinerary));
  }

  public loadItinerary(): ItineraryDay[] {
    try {
      const raw = this.getItem(STORAGE_KEYS.ITINERARY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Falha ao ler roteiro do storage, usando inicial:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_ITINERARY));
  }

  public canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  public canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  public undo(current: ItineraryDay[]): ItineraryDay[] | null {
    if (this.undoStack.length === 0) return null;
    const previous = this.undoStack.pop()!;
    this.redoStack.push(JSON.parse(JSON.stringify(current)));
    this.saveItinerary(previous, false);
    return previous;
  }

  public redo(current: ItineraryDay[]): ItineraryDay[] | null {
    if (this.redoStack.length === 0) return null;
    const next = this.redoStack.pop()!;
    this.undoStack.push(JSON.parse(JSON.stringify(current)));
    this.saveItinerary(next, false);
    return next;
  }

  public saveTickets(tickets: TicketDefinition[]): void {
    this.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  }

  public loadTickets(): TicketDefinition[] {
    try {
      const raw = this.getItem(STORAGE_KEYS.TICKETS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Falha ao ler ingressos do storage, usando inicial:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_TICKETS));
  }

  public saveCrowdStore(store: CrowdDataStore): void {
    this.setItem(STORAGE_KEYS.CROWD, JSON.stringify(store));
  }

  public loadCrowdStore(): CrowdDataStore {
    const defaultStore: CrowdDataStore = {
      records: {},
      lastImportDate: null,
      totalVerifiedDays: 0,
      totalUnavailableDays: 0,
    };
    try {
      const raw = this.getItem(STORAGE_KEYS.CROWD);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Falha ao carregar dados de lotação:', e);
    }
    return defaultStore;
  }

  public saveFatigueParams(params: FatigueParameters): void {
    this.setItem(STORAGE_KEYS.FATIGUE_PARAMS, JSON.stringify(params));
  }

  public loadFatigueParams(): FatigueParameters {
    try {
      const raw = this.getItem(STORAGE_KEYS.FATIGUE_PARAMS);
      if (raw) return { ...DEFAULT_FATIGUE_PARAMS, ...JSON.parse(raw) };
    } catch {
      // fallback
    }
    return { ...DEFAULT_FATIGUE_PARAMS };
  }

  public saveOptimizerWeights(weights: OptimizerWeights): void {
    this.setItem(STORAGE_KEYS.OPTIMIZER_WEIGHTS, JSON.stringify(weights));
  }

  public loadOptimizerWeights(): OptimizerWeights {
    try {
      const raw = this.getItem(STORAGE_KEYS.OPTIMIZER_WEIGHTS);
      if (raw) return { ...DEFAULT_OPTIMIZER_WEIGHTS, ...JSON.parse(raw) };
    } catch {
      // fallback
    }
    return { ...DEFAULT_OPTIMIZER_WEIGHTS };
  }

  public saveSnapshots(snapshots: StorageSnapshot[]): void {
    this.setItem(STORAGE_KEYS.SNAPSHOTS, JSON.stringify(snapshots));
  }

  public loadSnapshots(): StorageSnapshot[] {
    try {
      const raw = this.getItem(STORAGE_KEYS.SNAPSHOTS);
      if (raw) return JSON.parse(raw);
    } catch {
      // fallback
    }
    return [];
  }

  public resetToDefault(): void {
    this.removeItem(STORAGE_KEYS.ITINERARY);
    this.removeItem(STORAGE_KEYS.TICKETS);
    this.removeItem(STORAGE_KEYS.FATIGUE_PARAMS);
    this.removeItem(STORAGE_KEYS.OPTIMIZER_WEIGHTS);
    this.undoStack = [];
    this.redoStack = [];
  }

  public exportFullProject(): string {
    const project: PlannerProjectData = {
      schemaVersion: SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      tripName: 'Orlando — Maio 2027',
      startDate: '2027-05-05',
      endDate: '2027-05-23',
      itinerary: this.loadItinerary(),
      tickets: this.loadTickets(),
      crowdStore: this.loadCrowdStore(),
      fatigueParams: this.loadFatigueParams(),
      optimizerWeights: this.loadOptimizerWeights(),
      snapshots: this.loadSnapshots(),
    };
    return JSON.stringify(project, null, 2);
  }

  public importFullProject(jsonString: string): { success: boolean; message: string } {
    try {
      const data = JSON.parse(jsonString) as PlannerProjectData;
      if (!data.schemaVersion || !data.itinerary || !Array.isArray(data.itinerary)) {
        return { success: false, message: 'Arquivo JSON inválido ou esquema não reconhecido.' };
      }
      this.saveItinerary(data.itinerary, true);
      if (data.tickets) this.saveTickets(data.tickets);
      if (data.crowdStore) this.saveCrowdStore(data.crowdStore);
      if (data.fatigueParams) this.saveFatigueParams(data.fatigueParams);
      if (data.optimizerWeights) this.saveOptimizerWeights(data.optimizerWeights);
      if (data.snapshots) this.saveSnapshots(data.snapshots);
      return { success: true, message: 'Projeto importado com sucesso!' };
    } catch (err: unknown) {
      return { success: false, message: `Erro ao processar JSON: ${err instanceof Error ? err.message : String(err)}` };
    }
  }
}

export const storageManager = new StorageManager();
