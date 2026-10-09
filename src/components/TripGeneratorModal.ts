import { addDays, daysBetween } from '../utils/dateUtils';

export function renderTripGeneratorModal(
  currentDays: number,
  initialStartDate: string = '2027-05-05',
  initialEndDate?: string
): string {
  const startDate = initialStartDate || '2027-05-05';
  const endDate = initialEndDate || addDays(startDate, currentDays - 1);
  const calculatedDays = Math.max(3, daysBetween(startDate, endDate) + 1);

  return `
    <div id="trip-gen-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[92vh]">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px]">auto_fix_high</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                Gerador de Roteiro Sob Medida
              </h2>
              <span class="text-xs text-outline font-medium">Calcule o itinerário ideal informando sua chegada e partida</span>
            </div>
          </div>

          <button id="btn-close-trip-gen-modal" class="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form (Scrollable) -->
        <form id="form-generate-custom-trip" class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Dates Selection (Chegada e Partida) -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-3">
            <div class="flex items-center justify-between">
              <label class="font-bold text-sm text-on-surface flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                <span>Período da Viagem</span>
              </label>
              <span id="label-selected-trip-days" class="font-label-xs-mono text-sm font-extrabold text-primary px-3 py-1 bg-surface-container rounded-lg border border-outline-variant/30 shadow-2xs">
                ${calculatedDays} dias de estadia
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label class="block text-on-surface font-semibold mb-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px] text-[#27865b]">flight_land</span>
                  <span>Data de Chegada (Início)</span>
                </label>
                <input 
                  type="date" 
                  id="input-trip-start-date" 
                  name="startDate" 
                  value="${startDate}" 
                  class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" 
                  required 
                />
              </div>

              <div>
                <label class="block text-on-surface font-semibold mb-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px] text-[#c44b4b]">flight_takeoff</span>
                  <span>Data de Partida (Final)</span>
                </label>
                <input 
                  type="date" 
                  id="input-trip-end-date" 
                  name="endDate" 
                  value="${endDate}" 
                  class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" 
                  required 
                />
              </div>
            </div>

            <!-- Days Slider Sync -->
            <div class="pt-2">
              <div class="flex items-center justify-between text-[11px] text-outline mb-1">
                <span>Ajuste rápido da duração:</span>
                <span id="label-slider-val" class="font-semibold text-on-surface">${calculatedDays} dias</span>
              </div>
              <input 
                type="range" 
                id="input-trip-total-days" 
                name="totalDays" 
                min="4" 
                max="28" 
                value="${calculatedDays}" 
                class="w-full"
              />
              <div class="flex items-center justify-between text-[10px] text-outline pt-0.5">
                <span>5 dias</span>
                <span>10 dias</span>
                <span>14 dias (2 sem.)</span>
                <span>19 dias (Padrão)</span>
                <span>25+ dias</span>
              </div>
            </div>
          </div>

          <!-- Departure Day Logistics -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-primary">luggage</span>
              <label class="font-bold text-on-surface text-[13px]">Logística do Dia de Partida (Final)</label>
            </div>
            <p class="text-[11px] text-outline leading-relaxed">
              O último dia define o encerramento do seu roteiro. Escolha como prefere alocar seu tempo antes do retorno:
            </p>

            <div class="space-y-2 pt-1">
              <label class="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface hover:bg-surface-container border border-outline-variant/30 cursor-pointer transition-colors">
                <input type="radio" name="departureOption" value="flight_only" checked class="mt-0.5 text-primary">
                <div class="flex flex-col">
                  <span class="font-semibold text-on-surface">Apenas Check-out, Malas & Aeroporto MCO (Recomendado)</span>
                  <span class="text-[11px] text-outline leading-relaxed">
                    Dia sem parque, reservado para pesagem de bagagens (23kg), check-out tranquilo e deslocamento para o aeroporto com 3h de antecedência. O Grande Encerramento acontece no dia anterior.
                  </span>
                </div>
              </label>

              <label class="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface hover:bg-surface-container border border-outline-variant/30 cursor-pointer transition-colors">
                <input type="radio" name="departureOption" value="morning_park" class="mt-0.5 text-primary">
                <div class="flex flex-col">
                  <span class="font-semibold text-on-surface">Incluir Parque Matinal no Dia de Partida</span>
                  <span class="text-[11px] text-outline leading-relaxed">
                    Indicado para quem possui voo tarde da noite e deseja aproveitar a manhã do último dia em uma atração clássica (Magic Kingdom).
                  </span>
                </div>
              </label>
            </div>
          </div>

          <!-- Profile -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Perfil da Viagem</label>
            <select name="profile" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
              <option value="equilibrado" selected>Equilibrado: Melhores Parques + Outlets Baratos</option>
              <option value="foco_parques">Foco em Parques Radicais & Montanhas-Russas</option>
              <option value="economico_compras">Econômico: Mais Compras e Parques Essenciais</option>
              <option value="familia">Família com Crianças (Ritmo Mais Leve)</option>
            </select>
          </div>

          <!-- Preferences -->
          <div class="space-y-2 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="includeBuschGardensTampa" checked class="w-4 h-4 rounded text-primary">
              <span class="text-on-surface font-medium">Incluir Busch Gardens em Tampa (~1h15 de estrada pela I-4)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="includeEpicUniverseTwoDays" checked class="w-4 h-4 rounded text-primary">
              <span class="text-on-surface font-medium">Prever 2 visitas ao novo Universal Epic Universe (para viagens de 12+ dias)</span>
            </label>
          </div>

          <!-- Dynamic Advice Box -->
          <div id="trip-preview-box" class="p-3.5 rounded-xl bg-primary-fixed/30 border border-primary-fixed text-xs text-on-primary-fixed space-y-1">
            <strong class="font-bold flex items-center gap-1.5 text-primary">
              <span class="material-symbols-outlined text-[16px]">info</span>
              <span>Distribuição Estimada do Roteiro:</span>
            </strong>
            <p id="trip-preview-text" class="text-on-surface leading-relaxed">
              Calculando distribuição inteligente de parques e paradas nos outlets mais baratos (International Premium, Vineland e Ross Dress for Less)...
            </p>
          </div>

          <!-- Warning note -->
          <p class="text-[11px] text-outline leading-relaxed">
            * O roteiro atual será automaticamente salvo como um Ponto de Restauração no seu Histórico.
          </p>

          <!-- Footer -->
          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-trip-gen" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-2">
              <span class="material-symbols-outlined text-[17px]">auto_fix_high</span>
              <span>Gerar Roteiro Sob Medida</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
