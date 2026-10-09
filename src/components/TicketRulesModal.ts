import { TicketDefinition } from '../types/ticket';

export function renderTicketRulesModal(ticket: TicketDefinition): string {
  return `
    <div id="ticket-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
        <div class="px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">confirmation_number</span>
            <h3 class="font-headline-sm text-sm font-bold text-on-surface">
              Ajustar Regras do Ingresso
            </h3>
          </div>
          <button id="btn-close-ticket-modal" class="p-1 rounded text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="form-ticket-rules" class="p-5 space-y-4 text-xs" data-id="${ticket.id}">
          <div>
            <label class="block text-on-surface font-semibold mb-1">Nome do Ingresso</label>
            <input type="text" name="name" value="${ticket.name}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Total de Visitas Permitidas</label>
              <input type="number" name="totalVisitsAllowed" value="${ticket.totalVisitsAllowed}" min="1" max="14" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Janela de Validade (dias corridos)</label>
              <input type="number" name="validityWindowDays" value="${ticket.validityWindowDays || ''}" placeholder="Sem limite" min="1" max="30" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Status de Confirmação</label>
              <select name="ruleStatus" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="pending_confirmation" ${ticket.ruleStatus === 'pending_confirmation' ? 'selected' : ''}>Pendente de confirmação</option>
                <option value="confirmed" ${ticket.ruleStatus === 'confirmed' ? 'selected' : ''}>Confirmado oficialmente</option>
                <option value="unverifiable" ${ticket.ruleStatus === 'unverifiable' ? 'selected' : ''}>Não verificável</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Repetição de Parques</label>
              <select name="allowParkRepetition" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="false" ${!ticket.allowParkRepetition ? 'selected' : ''}>Não permitida (1 por parque)</option>
                <option value="true" ${ticket.allowParkRepetition ? 'selected' : ''}>Permitida</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-on-surface font-semibold mb-1">Nota Oficial / Restrições</label>
            <textarea name="officialSourceNote" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">${ticket.officialSourceNote}</textarea>
          </div>

          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
            <button type="button" id="btn-cancel-ticket-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Salvar Regras</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}
