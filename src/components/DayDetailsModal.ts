import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { CrowdDataService } from '../services/crowdDataService';
import { ParkLiveWaitSummary } from '../services/queueTimesService';
import { diningService } from '../services/diningService';

export function renderLiveQueueContent(summary: ParkLiveWaitSummary): string {
  const statusBadge = summary.isLive
    ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">
        <span class="w-1.5 h-1.5 rounded-full bg-[#27865b] animate-ping"></span>
        Tempo Real (Live API)
      </span>`
    : `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-outline text-[10px]">
        <span class="w-1.5 h-1.5 rounded-full bg-outline"></span>
        Estimativa de Fila
      </span>`;

  // Render top attractions / lands
  const landsHtml = summary.lands
    .map((land) => {
      const ridesHtml = land.rides
        .map((ride) => {
          let waitBadge = '';
          if (!ride.is_open) {
            waitBadge = `<span class="px-2 py-0.5 rounded bg-surface-container text-outline text-[10px]">Fechado</span>`;
          } else if (ride.wait_time === 0) {
            waitBadge = `<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">Livre</span>`;
          } else if (ride.wait_time <= 20) {
            waitBadge = `<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">${ride.wait_time} min</span>`;
          } else if (ride.wait_time <= 45) {
            waitBadge = `<span class="px-2 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-bold text-[10px]">${ride.wait_time} min</span>`;
          } else {
            waitBadge = `<span class="px-2 py-0.5 rounded bg-[#fdf2f2] text-[#93000a] font-bold text-[10px]">${ride.wait_time} min</span>`;
          }

          return `
            <div class="flex items-center justify-between py-1.5 border-b border-outline-variant/15 text-xs">
              <span class="font-medium text-on-surface truncate pr-2">${ride.name}</span>
              ${waitBadge}
            </div>
          `;
        })
        .join('');

      return `
        <div class="pt-2">
          <h4 class="font-bold text-[11px] text-outline uppercase tracking-wider mb-1">${land.name}</h4>
          <div class="space-y-0.5 bg-surface rounded-lg p-2 border border-outline-variant/20">
            ${ridesHtml || '<p class="text-outline text-[11px]">Nenhuma atração listada nesta área.</p>'}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="space-y-3">
      <!-- Summary metrics strip -->
      <div class="grid grid-cols-3 gap-2">
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center">
          <span class="text-[10px] text-outline block">Média de Espera</span>
          <span class="font-label-xs-mono text-base font-extrabold text-primary">${summary.avgWaitTime} min</span>
        </div>
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center">
          <span class="text-[10px] text-outline block">Atrações Abertas</span>
          <span class="font-label-xs-mono text-base font-bold text-on-surface">${summary.openRides} / ${summary.totalRides}</span>
        </div>
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center truncate">
          <span class="text-[10px] text-outline block truncate">Pico de Fila</span>
          <span class="font-label-xs-mono text-base font-extrabold text-[#93000a] truncate" title="${summary.maxWaitRide?.name || '—'}">
            ${summary.maxWaitRide ? `${summary.maxWaitRide.wait_time} min` : '—'}
          </span>
        </div>
      </div>

      <!-- Status line -->
      <div class="flex items-center justify-between text-[11px] px-1">
        <div class="flex items-center gap-1.5">
          ${statusBadge}
          <span class="text-outline font-label-xs-mono">Última leitura: ${summary.lastUpdated}</span>
        </div>
        <a href="https://queue-times.com/pt-BR" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold inline-flex items-center gap-0.5" title="Acesse os dados em Queue-Times.com">
          <span>Powered by Queue-Times.com</span>
          <span class="material-symbols-outlined text-[12px]">open_in_new</span>
        </a>
      </div>

      <!-- Lands and Rides List -->
      <div class="max-h-56 overflow-y-auto space-y-2 pr-1">
        ${landsHtml}
      </div>
    </div>
  `;
}

export function renderDayDetailsModal(
  day: ItineraryDay,
  tickets: TicketDefinition[],
  crowdStore: CrowdDataStore
): string {
  const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;
  const crowdRecord = day.parkId ? crowdStore.records[`${day.date}_${day.parkId}`] : null;
  const crowdStyle = CrowdDataService.getCrowdBadgeStyle(crowdRecord?.crowdLevel ?? null);

  // Parks options
  const parkOptions = Object.values(PARKS_CATALOG)
    .map(
      (p) =>
        `<option value="${p.id}" ${day.parkId === p.id ? 'selected' : ''}>${p.name} (${p.operator.toUpperCase()})</option>`
    )
    .join('');

  // Tickets options
  const ticketOptions = tickets
    .map(
      (t) =>
        `<option value="${t.id}" ${day.ticketId === t.id ? 'selected' : ''}>${t.name}</option>`
    )
    .join('');

  // Scheduled Meals
  const dayMeals = diningService.getMealsForDate(day.date);
  const mealTypeLabels: Record<string, string> = {
    breakfast: 'Café da Manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    snack: 'Lanche / Sobremesa'
  };

  const mealsListHtml = dayMeals
    .map(
      (m) => `
      <div class="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-xs">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-primary">restaurant</span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-on-surface">${mealTypeLabels[m.meal_type] || m.meal_type}:</span>
              <span class="font-semibold text-primary">${m.restaurant_name}</span>
              <span class="text-[10px] text-outline font-label-xs-mono">(${m.planned_time})</span>
            </div>
            ${m.personal_notes ? `<span class="text-[10px] text-outline block">${m.personal_notes}</span>` : ''}
            ${m.reservation_reference ? `<span class="text-[10px] text-[#1b6443] font-label-xs-mono">Reserva: ${m.reservation_reference}</span>` : ''}
          </div>
        </div>
        <button type="button" class="btn-remove-day-meal p-1 text-outline hover:text-[#ba1a1a] rounded transition-colors" data-meal-id="${m.meal_id}" title="Remover refeição">
          <span class="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </div>
    `
    )
    .join('');

  return `
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px]">calendar_today</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                ${day.date.substring(5)} (${day.dayOfWeek}) — Detalhes do Dia
              </h2>
              <span class="text-xs text-outline font-medium">Dia ${day.dayNumber} da programação</span>
            </div>
          </div>

          <button id="btn-close-modal" class="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <form id="form-day-details" class="p-6 overflow-y-auto space-y-4 text-xs" data-date="${day.date}">
          <!-- Title & Activity Type -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Título da Atividade</label>
              <input type="text" name="title" value="${day.title}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Tipo de Dia</label>
              <select name="activityType" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="park" ${day.activityType === 'park' ? 'selected' : ''}>Parque Temático</option>
                <option value="rest" ${day.activityType === 'rest' ? 'selected' : ''}>Descanso / Pausa</option>
                <option value="shopping" ${day.activityType === 'shopping' ? 'selected' : ''}>Compras / Outlets</option>
                <option value="arrival" ${day.activityType === 'arrival' ? 'selected' : ''}>Chegada em Orlando</option>
                <option value="departure" ${day.activityType === 'departure' ? 'selected' : ''}>Partida / Retorno (Check-out & Voo)</option>
              </select>
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Descrição</label>
            <textarea name="description" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">${day.description}</textarea>
          </div>

          <!-- Park, Ticket & Lock -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Parque Associado</label>
              <select name="parkId" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="">Nenhum (Dia sem parque)</option>
                ${parkOptions}
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Ingresso Utilizado</label>
              <select name="ticketId" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="">Nenhum ingresso</option>
                ${ticketOptions}
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Nível de Esforço</label>
              <select name="effortLevel" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="OFF" ${day.effortLevel === 'OFF' ? 'selected' : ''}>OFF (Descanso total)</option>
                <option value="Leve" ${day.effortLevel === 'Leve' ? 'selected' : ''}>Leve</option>
                <option value="Médio" ${day.effortLevel === 'Médio' ? 'selected' : ''}>Médio</option>
                <option value="Pesado" ${day.effortLevel === 'Pesado' ? 'selected' : ''}>Pesado</option>
              </select>
            </div>
          </div>

          <!-- Crowd Status Box -->
          <div class="p-3 rounded-xl ${crowdStyle.bgClass} border ${crowdStyle.borderClass} flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] ${crowdStyle.textClass}">groups</span>
              <span class="font-semibold text-on-surface">Lotação Prevista:</span>
              <span class="font-bold ${crowdStyle.textClass}">${crowdStyle.label}</span>
            </div>
            ${crowdRecord?.lastUpdated ? `<span class="text-[11px] text-outline font-label-xs-mono">Atualizado: ${crowdRecord.lastUpdated}</span>` : ''}
          </div>

          ${
            day.parkId
              ? `
          <!-- Quick link to Touring Plan -->
          <div class="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-primary">route</span>
              <div>
                <span class="font-bold text-on-surface text-xs block">Roteiro Passo a Passo (Touring Plan)</span>
                <span class="text-[10px] text-outline">Estratégia de Rope Drop e atrações sequenciadas</span>
              </div>
            </div>
            <button type="button" class="btn-open-park-plan px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-2xs" data-park-id="${day.parkId}">
              <span class="material-symbols-outlined text-[15px]">menu_book</span>
              <span>Ver Roteiro do Parque</span>
            </button>
          </div>

          <!-- Live Queue Times Section (Powered by Queue-Times.com) -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2.5" id="day-live-queue-section" data-park-id="${day.parkId}">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-primary">schedule</span>
                <span class="font-bold text-on-surface text-xs sm:text-sm">Filas ao Vivo — ${parkInfo?.name || 'Parque'}</span>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" id="btn-refresh-day-queues" class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface hover:bg-surface-container text-on-surface border border-outline-variant/30 flex items-center gap-1 transition-colors">
                  <span class="material-symbols-outlined text-[14px]">refresh</span>
                  <span>Atualizar</span>
                </button>
              </div>
            </div>

            <div id="day-queue-content" class="text-xs">
              <div class="flex items-center justify-center py-6 text-outline gap-2">
                <span class="material-symbols-outlined animate-spin text-[18px] text-primary">progress_activity</span>
                <span>Consultando filas em tempo real via Queue-Times.com...</span>
              </div>
            </div>
          </div>
          `
              : ''
          }

          <!-- Alimentação & Refeições Agendadas -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-primary">lunch_dining</span>
                <div>
                  <span class="font-bold text-on-surface text-xs block">Alimentação & Refeições Agendadas</span>
                  <span class="text-[10px] text-outline">Café, almoço, jantar ou lanches vinculados a este dia</span>
                </div>
              </div>
              <button 
                type="button" 
                class="btn-open-add-meal-for-date px-2.5 py-1 rounded-md text-[11px] font-semibold bg-primary text-on-primary hover:bg-primary-container flex items-center gap-1 transition-colors" 
                data-date="${day.date}"
              >
                <span class="material-symbols-outlined text-[13px]">add</span>
                <span>Adicionar Refeição</span>
              </button>
            </div>

            <div class="space-y-1.5">
              ${mealsListHtml || '<p class="text-outline text-[11px] italic py-1">Nenhuma refeição associada a este dia ainda.</p>'}
            </div>
          </div>

          <!-- Times: Arrival & Departure -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto de Chegada</label>
              <input type="text" name="plannedArrivalTime" value="${day.plannedArrivalTime || (parkInfo?.defaultOpeningHour ? parkInfo.defaultOpeningHour : '09:00')}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto de Saída</label>
              <input type="text" name="plannedDepartureTime" value="${day.plannedDepartureTime || (parkInfo?.defaultClosingHour ? parkInfo.defaultClosingHour : '21:00')}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>
          </div>

          <!-- Rope Drop Strategy -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Estratégia de Rope Drop</label>
            <input type="text" name="ropeDropStrategy" value="${day.ropeDropStrategy || (parkInfo?.ropeDropAdvice ? parkInfo.ropeDropAdvice : '')}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
          </div>

          <!-- Personal Notes -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Observações Pessoais</label>
            <textarea name="personalNotes" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">${day.personalNotes || ''}</textarea>
          </div>

          <!-- Lock Date Checkbox -->
          <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-[#c89532]">lock</span>
              <div>
                <span class="font-semibold text-on-surface block">Bloquear Esta Data</span>
                <span class="text-[11px] text-outline">Impede que o otimizador altere ou troque este dia de posição.</span>
              </div>
            </div>
            <input type="checkbox" name="isLocked" class="w-5 h-5 rounded text-primary" ${day.isLocked ? 'checked' : ''} />
          </div>

          <!-- Modal Footer -->
          <div class="pt-4 border-t border-outline-variant/30 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Salvar Alterações</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
