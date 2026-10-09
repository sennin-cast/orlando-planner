import { ItineraryDay } from '../types/itinerary';

export function renderSwapDaysModal(
  sourceDate: string,
  itinerary: ItineraryDay[]
): string {
  const sourceDay = itinerary.find((d) => d.date === sourceDate);
  if (!sourceDay) return '';

  const eligibleTargetDays = itinerary.filter(
    (d) => d.date !== sourceDate && !d.isLocked && d.date !== '2027-05-05' && d.date !== '2027-05-23'
  );

  const targetOptions = eligibleTargetDays
    .map(
      (d) =>
        `<option value="${d.date}">${d.date.substring(5)} (${d.dayOfWeek}): ${d.title}</option>`
    )
    .join('');

  return `
    <div id="swap-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
        <div class="px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">swap_horiz</span>
            <h3 class="font-headline-sm text-sm font-bold text-on-surface">
              Trocar Atividade de Data
            </h3>
          </div>
          <button id="btn-close-swap-modal" class="p-1 rounded text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="form-swap-days" class="p-5 space-y-4 text-xs" data-source="${sourceDate}">
          <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <span class="text-outline uppercase text-[10px] font-bold block mb-1">Origem (Data selecionada):</span>
            <span class="font-bold text-sm text-on-surface">${sourceDay.date.substring(5)} (${sourceDay.dayOfWeek}): ${sourceDay.title}</span>
          </div>

          <div>
            <label class="block text-on-surface font-semibold mb-1">Trocar com qual data?</label>
            <select name="targetDate" class="w-full h-10 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${targetOptions}
            </select>
          </div>

          <p class="text-xs text-outline leading-relaxed">
            As duas programações serão invertidas preservando os ingressos associados e as datas do calendário.
          </p>

          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
            <button type="button" id="btn-cancel-swap" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">swap_horiz</span>
              <span>Confirmar Troca</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
