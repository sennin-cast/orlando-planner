import { TicketDefinition, TicketValidationResult } from '../types/ticket';

export function renderTicketsView(
  tickets: TicketDefinition[],
  validation: TicketValidationResult
): string {
  const cardsHtml = tickets
    .map((ticket) => {
      const usage = validation.ticketUsages[ticket.id];
      const used = usage ? usage.usedVisits : 0;
      const max = ticket.totalVisitsAllowed;
      const percent = Math.min(100, Math.round((used / max) * 100));

      let statusBadge = '';
      if (ticket.ruleStatus === 'confirmed') {
        statusBadge = `
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Confirmado
          </span>
        `;
      } else {
        statusBadge = `
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Pendente de confirmação
          </span>
        `;
      }

      return `
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[11px] font-label-xs-mono uppercase tracking-wider text-outline block">
                  ${ticket.operator.toUpperCase()}
                </span>
                <h3 class="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                  ${ticket.name}
                </h3>
              </div>
              ${statusBadge}
            </div>

            <!-- Usage counter & Progress bar -->
            <div class="mt-4">
              <div class="flex items-center justify-between text-xs font-semibold text-on-surface mb-1">
                <span>Visitas utilizadas:</span>
                <span class="font-label-xs-mono text-primary font-bold">${used} de ${max}</span>
              </div>
              <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div class="bg-primary-container h-full rounded-full transition-all" style="width: ${percent}%;"></div>
              </div>
            </div>

            <!-- Ticket Specific Details -->
            <div class="mt-4 space-y-2 text-xs text-on-surface-variant">
              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Janela de Validade:</span>
                <span class="font-semibold text-on-surface">${ticket.validityWindowDays ? `${ticket.validityWindowDays} dias corridos` : 'Data específica'}</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Primeiro uso / Expiração:</span>
                <span class="font-semibold text-on-surface truncate max-w-[170px]">
                  ${usage?.firstUsedDate ? `${usage.firstUsedDate.substring(5)} até ${usage.windowExpiryDate?.substring(5) || '—'}` : 'Não iniciado'}
                </span>
              </div>

              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Repetição de Parques:</span>
                <span class="font-semibold text-on-surface">${ticket.allowParkRepetition ? 'Permitida (c/ limites)' : 'Não permitida (1 por parque)'}</span>
              </div>
            </div>

            <!-- Official note -->
            <p class="text-xs text-outline mt-3 leading-relaxed border-t border-outline-variant/20 pt-2.5">
              ${ticket.officialSourceNote}
            </p>
          </div>

          <!-- Bottom Button -->
          <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <span class="text-xs text-outline">ID: <code class="font-label-xs-mono">${ticket.id}</code></span>
            <button 
              type="button" 
              class="btn-edit-ticket-rules text-xs font-semibold text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors"
              data-id="${ticket.id}"
            >
              Ajustar Regras
            </button>
          </div>
        </div>
      `;
    })
    .join('');

  // Issues list html
  const issuesHtml = validation.issues
    .map((issue) => {
      let icon = 'info';
      let bg = 'bg-surface-container-low';
      let text = 'text-on-surface';

      if (issue.severity === 'conflict') {
        icon = 'error';
        bg = 'bg-[#ffdad6]';
        text = 'text-[#93000a]';
      } else if (issue.severity === 'warning') {
        icon = 'warning';
        bg = 'bg-[#ffdeaa]/60';
        text = 'text-[#5f4100]';
      }

      return `
        <div class="p-3 rounded-lg ${bg} flex items-start gap-2.5 text-xs ${text}">
          <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">${icon}</span>
          <div class="flex flex-col">
            <span class="font-semibold">[${issue.code}]</span>
            <span class="mt-0.5 leading-relaxed">${issue.message}</span>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Meus Ingressos</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerenciamento e auditoria estrita de janelas de validade, limites de visitas e regras por parque.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-outline font-medium">Status Geral do Motor:</span>
          ${
            validation.status === 'valid'
              ? '<span class="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">100% Válido</span>'
              : validation.status === 'warning'
              ? '<span class="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold">Avisos Pendentes</span>'
              : '<span class="px-2.5 py-1 rounded bg-error-container text-on-error-container text-xs font-bold">Conflito Detectado</span>'
          }
        </div>
      </section>

      <!-- Tickets Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
        ${cardsHtml}
      </section>

      <!-- Auditoria e Alertas do Motor -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">policy</span>
            <h2 class="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider">
              Relatório de Conformidade e Auditoria
            </h2>
          </div>
          <span class="text-xs text-outline font-label-xs-mono">${validation.issues.length} notas emitidas</span>
        </div>

        <div class="space-y-2">
          ${issuesHtml}
        </div>
      </section>
    </div>
  `;
}
