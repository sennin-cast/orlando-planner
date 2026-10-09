import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { ComparatorService } from '../services/comparatorService';
import { CrowdDataService } from '../services/crowdDataService';

export function renderComparatorView(
  selectedParkId: string,
  selectedDates: string[],
  itinerary: ItineraryDay[],
  tickets: TicketDefinition[],
  crowdStore: CrowdDataStore
): string {
  const parkIds = Object.keys(PARKS_CATALOG);
  const activePark = PARKS_CATALOG[selectedParkId] || PARKS_CATALOG['magic-kingdom'];

  const allEvaluations = ComparatorService.evaluateParkDates(activePark.id, itinerary, tickets, crowdStore);

  // Compare up to 3 selected dates
  const comparison = ComparatorService.compareDates(
    activePark.id,
    selectedDates.slice(0, 3),
    itinerary,
    tickets,
    crowdStore
  );

  // Selector options for parks
  const parkOptionsHtml = parkIds
    .map(
      (pid) => `
    <option value="${pid}" ${pid === activePark.id ? 'selected' : ''}>
      ${PARKS_CATALOG[pid].name} (${PARKS_CATALOG[pid].operator === 'disney' ? 'Disney' : PARKS_CATALOG[pid].operator === 'universal' ? 'Universal' : 'United'})
    </option>
  `
    )
    .join('');

  // Cards for the compared dates
  const comparisonCardsHtml = comparison.evaluations
    .map((candidate) => {
      const isBest = candidate.date === comparison.bestCandidateDate;
      const crowdStyle = CrowdDataService.getCrowdBadgeStyle(candidate.crowdLevel);

      return `
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border ${isBest ? 'border-primary ring-2 ring-primary/20' : 'border-outline-variant/30'} flex flex-col justify-between gap-4">
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-headline-sm text-lg font-bold text-on-surface">${candidate.date.substring(5)} (${candidate.dayOfWeek})</span>
                ${isBest ? '<span class="px-2 py-0.5 rounded bg-primary text-on-primary text-[11px] font-bold">RECOMENDADO</span>' : ''}
              </div>
              <span class="text-xs text-outline mt-0.5 block">Programado atualmente: ${candidate.currentActivityTitle}</span>
            </div>

            <div class="text-right">
              <span class="font-label-xs-mono text-sm font-bold text-primary">${candidate.overallRatingScore} pts</span>
            </div>
          </div>

          <!-- Key Metrics -->
          <div class="space-y-2 text-xs">
            <!-- Crowd Level -->
            <div class="flex items-center justify-between p-2 rounded ${crowdStyle.bgClass} border ${crowdStyle.borderClass}">
              <span class="font-medium text-on-surface">Lotação Prevista:</span>
              <span class="font-bold ${crowdStyle.textClass}">${candidate.crowdLabel}</span>
            </div>

            <!-- Fatigue -->
            <div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20">
              <span class="font-medium text-on-surface">Nível de Fadiga:</span>
              <span class="font-semibold text-on-surface">${candidate.projectedFatigueLevel} (${candidate.projectedFatigueScore}/100)</span>
            </div>

            <!-- Ticket Compatibility -->
            <div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20">
              <span class="font-medium text-on-surface">Ingresso:</span>
              <span class="font-semibold ${candidate.ticketCompatibility.compatible ? 'text-tertiary-container' : 'text-error'} truncate max-w-[150px]" title="${candidate.ticketCompatibility.reason}">
                ${candidate.ticketCompatibility.ticketName || 'Incompatível'}
              </span>
            </div>
          </div>

          <!-- Explanation -->
          <p class="text-xs text-on-surface-variant bg-surface-container-low p-2.5 rounded-lg leading-relaxed">
            ${candidate.explanation}
          </p>

          <!-- Conflict warnings if any -->
          ${
            candidate.conflictNotes.length > 0
              ? `
            <div class="p-2 rounded bg-error-container/40 border border-error-container text-[11px] text-on-error-container flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px] text-error">warning</span>
              <span>${candidate.conflictNotes.join(' ')}</span>
            </div>
          `
              : ''
          }

          <!-- Action Button -->
          <button 
            type="button" 
            class="btn-apply-candidate-date w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors flex items-center justify-center gap-1 ${candidate.isDateLocked ? 'opacity-40 cursor-not-allowed' : ''}"
            data-park="${activePark.id}"
            data-date="${candidate.date}"
            ${candidate.isDateLocked ? 'disabled' : ''}
          >
            <span class="material-symbols-outlined text-[16px]">event_repeat</span>
            <span>Mudar ${activePark.shortName} para esta data</span>
          </button>
        </div>
      `;
    })
    .join('');

  // Candidate dates checkboxes selector
  const dateCheckboxesHtml = allEvaluations
    .map((e) => {
      const isChecked = selectedDates.includes(e.date);
      return `
        <label class="flex items-center gap-2 p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container-low cursor-pointer text-xs ${isChecked ? 'bg-surface-container text-primary font-medium' : 'text-on-surface'}">
          <input type="checkbox" class="compare-date-checkbox rounded text-primary" value="${e.date}" ${isChecked ? 'checked' : ''}>
          <span>${e.date.substring(5)} (${e.dayOfWeek})</span>
        </label>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Comparar Melhores Dias</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Avalie até três datas simultâneas para um parque e decida com base em lotação, janelas de ingressos e desgaste físico.
          </p>
        </div>

        <!-- Park select box -->
        <div class="min-w-[240px]">
          <label class="block text-xs font-semibold uppercase text-outline mb-1">Selecione o Parque</label>
          <select id="select-comparator-park" class="w-full h-10 px-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-md text-sm focus:border-primary focus:ring-1 focus:ring-primary">
            ${parkOptionsHtml}
          </select>
        </div>
      </section>

      <!-- Date pickers strip -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wider text-outline">Selecione até 3 datas da viagem para comparar:</span>
          <span class="text-xs font-label-xs-mono text-primary font-bold">${selectedDates.length}/3 selecionadas</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-1.5 pt-1">
          ${dateCheckboxesHtml}
        </div>
      </section>

      <!-- Side-by-side comparison cards -->
      ${
        comparison.evaluations.length > 0
          ? `
        <section class="flex flex-col gap-3">
          <!-- Rationale banner -->
          <div class="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30 flex items-center gap-2.5 text-xs text-on-surface">
            <span class="material-symbols-outlined text-[20px] text-primary">lightbulb</span>
            <span><strong>Conclusão Analítica:</strong> ${comparison.comparativeRationale}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            ${comparisonCardsHtml}
          </div>
        </section>
      `
          : `
        <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
          <span class="material-symbols-outlined text-4xl mb-2 text-outline-variant">compare_arrows</span>
          <p class="text-sm">Selecione até 3 datas nos seletores acima para visualizar a comparação lado a lado.</p>
        </div>
      `
      }
    </div>
  `;
}
