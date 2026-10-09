import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { ItineraryFatigueSummary } from '../types/fatigue';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { CrowdDataService } from '../services/crowdDataService';
import { diningService } from '../services/diningService';
import { formatDateBr } from '../utils/dateUtils';

export function renderCalendarView(
  itinerary: ItineraryDay[],
  tickets: TicketDefinition[],
  crowdStore: CrowdDataStore,
  _fatigue: ItineraryFatigueSummary,
  filterType: 'all' | 'parks' | 'rest' = 'all'
): string {
  const ticketMap = new Map<string, TicketDefinition>();
  tickets.forEach((t) => ticketMap.set(t.id, t));

  const filteredDays = itinerary.filter((day) => {
    if (filterType === 'parks') return day.activityType === 'park';
    if (filterType === 'rest') return day.activityType !== 'park';
    return true;
  });

  const cardsHtml = filteredDays
    .map((day) => {
      const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;
      const crowdRecord = day.parkId ? crowdStore.records[`${day.date}_${day.parkId}`] : null;
      const crowdStyle = CrowdDataService.getCrowdBadgeStyle(crowdRecord?.crowdLevel ?? null);
      const ticket = day.ticketId ? ticketMap.get(day.ticketId) : null;
      const dayMeals = diningService.getMealsForDate(day.date);

      // Border and header color based on activity
      let accentBorder = 'border-l-4 border-l-outline-variant';
      let tagBg = 'bg-surface-container text-outline';
      if (day.isLocked) {
        accentBorder = 'border-l-4 border-l-[#c89532]';
      } else if (parkInfo) {
        if (parkInfo.operator === 'disney') {
          accentBorder = 'border-l-4 border-l-primary';
          tagBg = 'bg-primary-fixed text-on-primary-fixed';
        } else if (parkInfo.operator === 'universal') {
          accentBorder = 'border-l-4 border-l-[#2563a6]';
          tagBg = 'bg-[#ccdfff] text-[#001c39]';
        } else {
          accentBorder = 'border-l-4 border-l-[#007047]';
          tagBg = 'bg-[#95f0bd] text-[#002112]';
        }
      }

      const hasCrowdData = crowdRecord && crowdRecord.crowdLevel !== null && crowdRecord.crowdLevel !== undefined;
      const crowdLabelText = hasCrowdData ? `Lotação: ${crowdRecord.crowdLevel}/10` : 'Lotação não disponível';

      return `
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-3 hover:border-outline-variant transition-all ${accentBorder}" data-date="${day.date}">
          <!-- Top Row: Date, Day, Lock -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-headline-sm text-[16px] font-bold text-on-surface">${day.dayOfWeek}, ${formatDateBr(day.date)}</span>
              <span class="text-[11px] px-1.5 py-0.5 rounded ${tagBg} font-medium">
                ${parkInfo ? parkInfo.shortName : day.activityType === 'shopping' ? 'Compras' : day.activityType === 'arrival' ? 'Chegada' : day.activityType === 'departure' ? 'Partida' : 'Descanso'}
              </span>
            </div>

            <button 
              class="btn-toggle-lock p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" 
              data-date="${day.date}" 
              title="${day.isLocked ? 'Data bloqueada (clique para desbloquear)' : 'Data livre (clique para bloquear)'}"
              type="button"
            >
              <span class="material-symbols-outlined text-[18px] ${day.isLocked ? 'text-[#c89532]' : 'text-outline-variant'}">
                ${day.isLocked ? 'lock' : 'lock_open'}
              </span>
            </button>
          </div>

          <!-- Title & Description -->
          <div class="flex flex-col gap-1 min-w-0">
            <h3 class="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug truncate" title="${day.title}">
              ${day.title}
            </h3>
            <p class="font-caption text-caption text-on-surface-variant line-clamp-2 leading-relaxed">
              ${day.description}
            </p>
          </div>

          <!-- Indicators Grid: Lotação & Ritmo da Programação -->
          <div class="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
            <!-- Crowd Tag -->
            <div class="px-2 py-1 rounded ${hasCrowdData ? crowdStyle.bgClass : 'bg-surface-container-low'} ${hasCrowdData ? crowdStyle.textClass : 'text-outline'} border ${hasCrowdData ? crowdStyle.borderClass : 'border-outline-variant/20'} font-medium flex items-center justify-between truncate" title="${hasCrowdData ? crowdStyle.label : 'Sem previsão de parque para este dia'}">
              <span class="truncate">${crowdLabelText}</span>
              ${crowdRecord?.isRecommended ? '<span class="material-symbols-outlined text-[13px] text-[#27865b]">thumb_up</span>' : ''}
              ${crowdRecord?.isBusyDay ? '<span class="material-symbols-outlined text-[13px] text-[#c44b4b]">warning</span>' : ''}
            </div>

            <!-- Pace / Activity Tag -->
            <div class="px-2 py-1 rounded bg-surface-container-low text-on-surface-variant border border-outline-variant/20 font-medium flex items-center justify-between">
              <span class="truncate">${day.activityType === 'park' ? 'Parque' : day.activityType === 'shopping' ? 'Compras' : day.activityType === 'arrival' ? 'Chegada' : day.activityType === 'departure' ? 'Partida' : 'Descanso'}</span>
              <span class="text-[10px] text-outline font-semibold">${day.activityType === 'park' ? day.effortLevel : 'Off-Park'}</span>
            </div>
          </div>

          <!-- Ticket Info -->
          <div class="text-[11px] text-on-surface-variant flex items-center justify-between pt-1 border-t border-outline-variant/20">
            <div class="flex items-center gap-1 truncate text-outline" title="${ticket ? ticket.name : 'Sem ingresso associado'}">
              <span class="material-symbols-outlined text-[14px]">confirmation_number</span>
              <span class="truncate">${ticket ? ticket.name : (day.activityType === 'park' ? 'Ingresso não definido' : 'Dia Off-Park')}</span>
            </div>
          </div>

          <!-- Meals Info -->
          <div class="text-[11px] text-on-surface-variant flex items-center justify-between pt-1 border-t border-outline-variant/20">
            <div class="flex items-center gap-1 truncate ${dayMeals.length > 0 ? 'text-primary font-semibold' : 'text-outline'}" title="${dayMeals.length > 0 ? dayMeals.map(m => `${m.meal_type.toUpperCase()}: ${m.restaurant_name} (${m.planned_time})`).join(' | ') : 'Nenhuma refeição agendada'}">
              <span class="material-symbols-outlined text-[14px] ${dayMeals.length > 0 ? 'text-primary' : 'text-outline'}">restaurant</span>
              <span class="truncate">${dayMeals.length > 0 ? `${dayMeals.length} ref.: ${dayMeals[0].restaurant_name}${dayMeals.length > 1 ? ` (+${dayMeals.length - 1})` : ''}` : 'Sem refeição agendada'}</span>
            </div>
            <button 
              type="button" 
              class="btn-quick-add-meal text-[11px] text-primary hover:text-primary-container font-semibold flex items-center gap-0.5" 
              data-date="${day.date}"
              title="Adicionar refeição para esta data"
            >
              <span>+ Refeição</span>
            </button>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center justify-between pt-1 gap-1">
            <button 
              type="button" 
              class="btn-open-day-details text-[12px] font-medium text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1"
              data-date="${day.date}"
            >
              <span class="material-symbols-outlined text-[14px]">visibility</span>
              <span>Detalhes</span>
            </button>

            <button 
              type="button" 
              class="btn-trigger-swap text-[12px] font-medium text-on-surface-variant hover:text-on-surface px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1 ${day.isLocked ? 'opacity-40 cursor-not-allowed' : ''}"
              data-date="${day.date}"
              ${day.isLocked ? 'disabled' : ''}
              title="${day.isLocked ? 'Data bloqueada contra alterações' : 'Trocar com outro dia'}"
            >
              <span class="material-symbols-outlined text-[14px]">swap_horiz</span>
              <span>Trocar</span>
            </button>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Top Title & Filter Bar -->
      <section class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Meu Roteiro</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Programação dia a dia (${itinerary.length} dias). Arraste, troque ou edite qualquer data.
          </p>
        </div>

        <!-- Action and Filter buttons -->
        <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button 
            id="btn-trigger-optimize-trip" 
            class="px-3.5 py-1.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            type="button"
            title="Otimizar distribuição inteligente com base na lotação dos parques e restrições"
          >
            <span class="material-symbols-outlined text-[17px]">auto_fix_high</span>
            <span>Otimizar Minha Viagem</span>
          </button>

          <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30">
            <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterType === 'all' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-filter="all">
              Todos (${itinerary.length})
            </button>
            <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterType === 'parks' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-filter="parks">
              Parques (${itinerary.filter((d) => d.activityType === 'park').length})
            </button>
            <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterType === 'rest' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-filter="rest">
              Descanso/Compras (${itinerary.filter((d) => d.activityType !== 'park').length})
            </button>
          </div>
        </div>
      </section>

      <!-- Calendar Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
        ${cardsHtml}
      </section>
    </div>
  `;
}
