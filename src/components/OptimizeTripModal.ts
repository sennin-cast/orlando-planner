import { ItineraryDay } from '../types/itinerary';
import { OptimizationResult, OptimizerPreferences } from '../types/optimizer';
import { formatDateBr } from '../utils/dateUtils';

export function renderOptimizePreferencesModal(preferences: OptimizerPreferences): string {
  return `
    <div id="modal-optimize-preferences" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim/60 backdrop-blur-xs animate-fade-in">
      <div class="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5">
        <!-- Header -->
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[24px]">auto_fix_high</span>
            </div>
            <div>
              <h2 class="text-lg font-bold text-on-surface">Otimizar Minha Viagem</h2>
              <p class="text-xs text-on-surface-variant">
                Motor determinístico de redistribuição de parques baseado em lotação e descanso.
              </p>
            </div>
          </div>
          <button id="btn-close-optimize-modal" class="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Info Card: Hierarchy -->
        <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant flex flex-col gap-1.5">
          <div class="flex items-center gap-1.5 font-semibold text-on-surface">
            <span class="material-symbols-outlined text-[16px] text-primary">order_approve</span>
            <span>Hierarquia Determinística de Decisão:</span>
          </div>
          <ol class="list-decimal list-inside space-y-0.5 text-[11px] leading-relaxed text-outline">
            <li><strong>Restrições Obrigatórias:</strong> Ingressos válidos, datas fixas, chegada e partida.</li>
            <li><strong>Menor Lotação Confiável:</strong> Redução sistemática das esperas em filas.</li>
            <li><strong>Primeiro Parque Disney:</strong> Começar com experiência mágica e ritmo tranquilo.</li>
            <li><strong>Cadência de Descanso:</strong> Intercalar compras e pausas sem exaustão contínua.</li>
          </ol>
        </div>

        <!-- Options Form with sensible defaults -->
        <form id="form-optimize-preferences" class="flex flex-col gap-3.5">
          <label class="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/20">
            <input 
              type="checkbox" 
              id="opt-prefer-disney-first" 
              class="w-4 h-4 mt-0.5 rounded text-primary border-outline-variant focus:ring-primary" 
              ${preferences.preferDisneyFirstPark ? 'checked' : ''}
            >
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-on-surface">Preferir Disney como primeiro parque</span>
              <span class="text-[11px] text-outline leading-snug">
                Inicia a viagem por um parque Disney acolhedor com menor lotação prevista.
              </span>
            </div>
          </label>

          <label class="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/20">
            <input 
              type="checkbox" 
              id="opt-preserve-locked" 
              class="w-4 h-4 mt-0.5 rounded text-primary border-outline-variant focus:ring-primary" 
              ${preferences.preserveLockedDates ? 'checked' : ''}
            >
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-on-surface">Preservar datas fixas e bloqueadas</span>
              <span class="text-[11px] text-outline leading-snug">
                Mantém intocados os dias marcados com cadeado ou compromissos inalteráveis.
              </span>
            </div>
          </label>

          <label class="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/20">
            <input 
              type="checkbox" 
              id="opt-preserve-dining" 
              class="w-4 h-4 mt-0.5 rounded text-primary border-outline-variant focus:ring-primary" 
              ${preferences.preserveDiningReservations ? 'checked' : ''}
            >
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-on-surface">Preservar refeições com reserva confirmada</span>
              <span class="text-[11px] text-outline leading-snug">
                Não desloca dias que possuam almoço ou jantar com código de reserva.
              </span>
            </div>
          </label>

          <label class="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-outline-variant/20">
            <input 
              type="checkbox" 
              id="opt-reorder-off-days" 
              class="w-4 h-4 mt-0.5 rounded text-primary border-outline-variant focus:ring-primary" 
              ${preferences.allowReorderOffDays ? 'checked' : ''}
            >
            <div class="flex flex-col">
              <span class="text-xs font-semibold text-on-surface">Permitir reorganizar dias de compras e descanso</span>
              <span class="text-[11px] text-outline leading-snug">
                Intercala folgas estrategicamente entre os blocos de parques mais intensos.
              </span>
            </div>
          </label>

          <!-- Footer Actions -->
          <div class="flex items-center justify-end gap-2 pt-2 border-t border-outline-variant/20">
            <button 
              id="btn-cancel-optimize" 
              type="button" 
              class="px-4 py-2 rounded-xl text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              Cancelar
            </button>
            <button 
              id="btn-calc-optimization" 
              type="submit" 
              class="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span class="material-symbols-outlined text-[16px]">psychology</span>
              <span>Calcular Sugestão</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function renderOptimizePreviewModal(
  _currentItinerary: ItineraryDay[],
  optimization: OptimizationResult
): string {
  const changedDaysCount = optimization.explanations?.filter((e) => e.changed).length || 0;

  const rowsHtml = (optimization.explanations || [])
    .map((exp) => {
      const isChanged = exp.changed;
      const dateFormatted = formatDateBr(exp.date);
      const crowdText = exp.crowdLevel !== null ? `${exp.crowdLevel}/10` : 'Lotação n/d';
      const prevCrowdText = exp.previousCrowdLevel !== null ? `${exp.previousCrowdLevel}/10` : 'n/d';

      return `
        <tr class="border-b border-outline-variant/20 text-xs ${isChanged ? 'bg-primary/5' : 'hover:bg-surface-container-low'}">
          <td class="py-2.5 px-3 font-semibold text-on-surface whitespace-nowrap">
            ${dateFormatted}
            ${exp.isLocked ? '<span class="material-symbols-outlined text-[13px] text-[#c89532] ml-1 align-text-bottom" title="Data Bloqueada">lock</span>' : ''}
            ${exp.isFirstPark ? '<span class="inline-block px-1.5 py-0.2 text-[9px] bg-primary/20 text-primary font-bold rounded ml-1">1º Parque</span>' : ''}
          </td>
          <td class="py-2.5 px-3 text-on-surface-variant ${isChanged ? 'line-through text-outline' : ''}">
            ${exp.previousParkOrActivity}
            ${isChanged && exp.previousCrowdLevel !== null ? `<span class="text-[10px] text-outline block">(${prevCrowdText})</span>` : ''}
          </td>
          <td class="py-2.5 px-3 font-medium ${isChanged ? 'text-primary font-bold' : 'text-on-surface'}">
            ${exp.parkOrActivity}
            <span class="text-[10px] text-outline block">${crowdText}</span>
          </td>
          <td class="py-2.5 px-3 text-[11px] text-outline leading-snug">
            ${exp.reason}
          </td>
        </tr>
      `;
    })
    .join('');

  return `
    <div id="modal-optimize-preview" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div class="bg-surface-container-lowest rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-outline-variant/30 flex flex-col gap-5 my-8 max-h-[90vh]">
        <!-- Header -->
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[24px] text-primary">compare_arrows</span>
              <h2 class="text-lg font-bold text-on-surface">Roteiro Atual × Roteiro Sugerido</h2>
            </div>
            <p class="text-xs text-on-surface-variant mt-0.5">
              Revise as alterações sugeridas pelo motor determinístico antes de aplicar ao seu roteiro oficial.
            </p>
          </div>
          <button id="btn-close-preview-modal" class="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Metric Badges Summary -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
            <span class="text-[10px] uppercase font-bold text-outline block">Alterações Propostas</span>
            <span class="text-base font-bold text-primary mt-0.5 block">${changedDaysCount} dias</span>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
            <span class="text-[10px] uppercase font-bold text-outline block">Pontuação Projetada</span>
            <span class="text-base font-bold text-on-surface mt-0.5 block">${optimization.suggestedScore}/100</span>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
            <span class="text-[10px] uppercase font-bold text-outline block">Datas Fixas Preservadas</span>
            <span class="text-base font-bold text-[#007047] mt-0.5 block">100% cumpridas</span>
          </div>

          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
            <span class="text-[10px] uppercase font-bold text-outline block">1º Parque da Viagem</span>
            <span class="text-xs font-bold text-primary mt-1 block truncate" title="${optimization.summary.firstParkName || 'Disney'}">
              ${optimization.summary.firstParkName || 'Disney'}
            </span>
          </div>
        </div>

        ${
          optimization.isPartialOptimization && optimization.partialOptimizationNote
            ? `
          <div class="p-3 rounded-xl bg-secondary-fixed/40 border border-secondary-fixed text-xs text-on-secondary-fixed-variant flex items-start gap-2.5">
            <span class="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">info</span>
            <p class="leading-relaxed text-[11px]">${optimization.partialOptimizationNote}</p>
          </div>
        `
            : ''
        }

        <!-- Comparison Table (Scrollable) -->
        <div class="border border-outline-variant/30 rounded-xl overflow-hidden flex-1 overflow-y-auto max-h-[45vh]">
          <table class="w-full text-left border-collapse">
            <thead class="bg-surface-container sticky top-0 z-10 text-[11px] font-bold uppercase text-outline">
              <tr>
                <th class="py-2.5 px-3">Data</th>
                <th class="py-2.5 px-3">Roteiro Atual</th>
                <th class="py-2.5 px-3">Roteiro Sugerido</th>
                <th class="py-2.5 px-3">Motivo da Decisão</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>

        <!-- Notice -->
        <div class="text-[11px] text-outline flex items-center gap-1.5">
          <span class="material-symbols-outlined text-[15px] text-tertiary-container">verified_user</span>
          <span>Nenhuma alteração é aplicada sem a sua confirmação explícita. Suas reservas e ingressos estão preservados.</span>
        </div>

        <!-- Footer Actions -->
        <div class="flex items-center justify-between gap-3 pt-3 border-t border-outline-variant/20">
          <button 
            id="btn-back-to-preferences" 
            type="button" 
            class="px-4 py-2 rounded-xl text-xs font-semibold text-primary hover:bg-surface-container transition-colors flex items-center gap-1"
          >
            <span class="material-symbols-outlined text-[16px]">tune</span>
            <span>Ajustar Preferências</span>
          </button>

          <div class="flex items-center gap-2">
            <button 
              id="btn-cancel-preview" 
              type="button" 
              class="px-4 py-2 rounded-xl text-xs font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              Cancelar
            </button>
            <button 
              id="btn-confirm-apply-suggestions" 
              type="button" 
              class="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span class="material-symbols-outlined text-[17px]">check_circle</span>
              <span>Aplicar Sugestão ao Meu Roteiro</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
