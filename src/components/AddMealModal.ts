import { ItineraryDay } from '../types/itinerary';
import { MealType } from '../types/dining';
import { diningService } from '../services/diningService';

export function renderAddMealModal(
  itinerary: ItineraryDay[],
  initialRestaurantId?: string,
  initialDate?: string,
  initialMealType?: MealType
): string {
  const restaurants = diningService.getAllRestaurants(false);
  const selectedRestaurant = initialRestaurantId
    ? diningService.getRestaurantById(initialRestaurantId)
    : restaurants[0];

  const defaultDate = initialDate || itinerary[0]?.date || '2027-05-05';
  const defaultMealType: MealType = initialMealType || 'lunch';

  // Opções de Dias do Roteiro
  const dayOptions = itinerary.map(d => {
    const isSelected = d.date === defaultDate;
    const parkOrType = d.title;
    return `<option value="${d.date}" ${isSelected ? 'selected' : ''}>${d.date.substring(5)} (${d.dayOfWeek}) — ${parkOrType}</option>`;
  }).join('');

  // Opções de Restaurantes
  const restaurantOptions = restaurants.map(r => {
    const isSelected = r.restaurant_id === (initialRestaurantId || selectedRestaurant?.restaurant_id);
    const loc = r.park || (r.location_type === 'disney_springs' ? 'Disney Springs' : r.location_type === 'citywalk' ? 'CityWalk' : 'Fora');
    return `<option value="${r.restaurant_id}" ${isSelected ? 'selected' : ''}>${r.name} (${loc})</option>`;
  }).join('');

  return `
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh] animate-fade-in">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm">
              <span class="material-symbols-outlined text-[22px]">calendar_add_on</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                Adicionar Refeição ao Roteiro
              </h2>
              <span class="text-xs text-outline font-medium">Integração gastronômica com a programação da viagem</span>
            </div>
          </div>

          <button id="btn-close-modal" class="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form Body -->
        <form id="form-add-meal" class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Seleção do Dia -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Dia do Roteiro</label>
            <select name="visitDate" id="meal-select-date" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${dayOptions}
            </select>
          </div>

          <!-- Seleção do Restaurante -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Restaurante</label>
            <select name="restaurantId" id="meal-select-restaurant" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${restaurantOptions}
            </select>
          </div>

          <!-- Tipo de Refeição & Horário -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Tipo de Refeição</label>
              <select name="mealType" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="breakfast" ${defaultMealType === 'breakfast' ? 'selected' : ''}>Café da Manhã</option>
                <option value="lunch" ${defaultMealType === 'lunch' ? 'selected' : ''}>Almoço</option>
                <option value="dinner" ${defaultMealType === 'dinner' ? 'selected' : ''}>Jantar</option>
                <option value="snack" ${defaultMealType === 'snack' ? 'selected' : ''}>Lanche / Sobremesa</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto</label>
              <input type="text" name="plannedTime" value="13:00" placeholder="Ex: 12:45" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
          </div>

          <!-- Status de Reserva & Código -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Status da Reserva</label>
              <select name="reservationStatus" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="confirmed">Reserva Confirmada</option>
                <option value="needed_pending" selected>Pendente / Fazer Reserva (60d)</option>
                <option value="not_needed">Não Necessita Reserva</option>
                <option value="walk_in">Ordem de Chegada (Walk-in)</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Código / Ref. de Reserva</label>
              <input type="text" name="reservationReference" placeholder="Ex: #WDW-948271" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>
          </div>

          <!-- Observações Pessoais -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Observações Pessoais / Preferências</label>
            <textarea name="personalNotes" rows="2" placeholder="Ex: Pedir mesa com vista para os fogos; avisar restrição alimentar ao garçom..." class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
          </div>

          <!-- Nota de Conveniência e Proteção do Roteiro -->
          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-2 text-[11px] text-outline">
            <span class="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">verified_user</span>
            <span>
              Ao associar este restaurante, sua programação de parques, ingressos e notas pessoais são 100% preservadas. Caso o restaurante fique fora do parque do dia, considere o tempo de deslocamento e estacionamento.
            </span>
          </div>

          <!-- Footer Buttons -->
          <div class="pt-3 border-t border-outline-variant/30 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-2xs transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Confirmar Refeição</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
