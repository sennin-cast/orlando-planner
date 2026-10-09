import { ItineraryDay } from '../types/itinerary';
import { TicketValidationResult } from '../types/ticket';
import { ItineraryFatigueSummary } from '../types/fatigue';
import { PARKS_CATALOG } from '../data/parksCatalog';

export function renderDashboardView(
  itinerary: ItineraryDay[],
  validation: TicketValidationResult,
  fatigue: ItineraryFatigueSummary
): string {
  const parkDays = itinerary.filter((d) => d.activityType === 'park').length;
  const restDays = itinerary.length - parkDays;
  const parkPercentage = Math.round((parkDays / itinerary.length) * 100);

  // Group distribution
  let disneyDays = 0;
  let universalDays = 0;
  let unitedDays = 0;
  let offDays = 0;

  itinerary.forEach((d) => {
    if (d.parkId) {
      const park = PARKS_CATALOG[d.parkId];
      if (park?.operator === 'disney') disneyDays++;
      else if (park?.operator === 'universal') universalDays++;
      else if (park?.operator === 'seaworld') unitedDays++;
    } else {
      offDays++;
    }
  });

  // Ticket badge
  let ticketBadgeHtml = '';
  if (validation.status === 'valid') {
    ticketBadgeHtml = `
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
        Válido
      </span>
    `;
  } else if (validation.status === 'warning') {
    ticketBadgeHtml = `
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Pendente
      </span>
    `;
  } else {
    ticketBadgeHtml = `
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-error"></span>
        Conflito
      </span>
    `;
  }

  // Next 5 days
  const previewDays = itinerary.slice(0, 5);
  const previewDaysHtml = previewDays
    .map((day) => {
      const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;
      const dayDateParts = day.date.split('-');
      const dayNum = dayDateParts[2];

      let badgeType = '';
      if (day.isLocked) {
        badgeType = `
          <span class="inline-flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[12px]">lock</span>
            Fixo
          </span>
        `;
      } else if (parkInfo) {
        badgeType = `
          <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-surface-container text-primary">
            ${parkInfo.operator === 'disney' ? 'Disney' : parkInfo.operator === 'universal' ? 'Universal' : 'United Parks'}
          </span>
        `;
      } else {
        badgeType = `
          <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-surface-container text-secondary">
            Sem Parque
          </span>
        `;
      }

      return `
        <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm hover:bg-surface-container-low/60 px-2 rounded-lg transition-colors cursor-pointer day-preview-item" data-date="${day.date}">
          <div class="flex items-start sm:items-center gap-space-md min-w-0">
            <div class="flex flex-col items-center justify-center w-12 py-1 rounded bg-surface-container-low text-center shrink-0">
              <span class="font-label-xs-mono text-label-xs-mono uppercase text-outline">${day.dayOfWeek}</span>
              <span class="font-headline-sm text-headline-sm text-on-surface leading-tight">${dayNum}</span>
            </div>
            <div class="min-w-0 flex flex-col">
              <div class="flex items-center gap-2">
                <span class="font-body-md-medium text-body-md-medium text-on-surface truncate">${day.title}</span>
                ${badgeType}
              </div>
              <span class="font-caption text-caption text-on-surface-variant truncate">${day.description}</span>
            </div>
          </div>
          <div class="flex items-center gap-space-md self-end sm:self-center shrink-0">
            <span class="font-caption text-caption ${day.activityType === 'park' ? 'text-tertiary-container' : 'text-outline'} bg-surface-container px-2 py-0.5 rounded">
              ${day.activityType === 'park' ? 'Parque' : day.activityType === 'shopping' ? 'Compras' : 'Descanso'}
            </span>
            <span class="font-label-xs-mono text-label-xs-mono text-on-surface-variant min-w-[70px] text-right">
              ${day.effortLevel}
            </span>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-xl animate-fade-in">
      <!-- Header editorial sóbrio -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
            <span class="font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">Itinerário Ativo</span>
            <span class="font-caption text-caption text-outline">Versão 1.0 • Salvo localmente</span>
          </div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight mt-1">Visão Geral</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">Orlando — 05 a 23 de maio de 2027 (19 dias)</p>
        </div>
        
        <div class="flex items-center gap-space-sm">
          <button id="btn-quick-optimize" class="h-9 px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface shadow-sm font-label-md text-label-md flex items-center gap-1.5 transition-colors border border-outline-variant/40" type="button">
            <span class="material-symbols-outlined text-[17px] text-primary">alt_route</span>
            <span>Ver Otimizações</span>
          </button>
          <button id="btn-open-full-schedule" class="h-9 px-space-md rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm" type="button">
            <span class="material-symbols-outlined text-[17px]">calendar_today</span>
            <span>Ver Roteiro Completo</span>
          </button>
        </div>
      </section>

      <!-- Métricas Rápidas: 4 Cards Compactos -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <!-- Card 1: Duração -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Duração Total</span>
            <span class="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">19 dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">05/05 a 23/05/2027</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-primary-container h-full w-full rounded-full"></div>
          </div>
        </div>

        <!-- Card 2: Parques -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Dias em Parques</span>
            <span class="material-symbols-outlined text-[18px] text-tertiary-container">attractions</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">${parkDays} dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">${parkPercentage}% da programação ativa</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-tertiary-container h-full rounded-full" style="width: ${parkPercentage}%;"></div>
          </div>
        </div>

        <!-- Card 3: Descanso & Compras -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Descanso & Compras</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">hotel</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">${restDays} dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">Sem agendamento de parque</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-secondary h-full rounded-full" style="width: ${100 - parkPercentage}%;"></div>
          </div>
        </div>

        <!-- Card 4: Ingressos / Auditoria -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all cursor-pointer" id="card-dashboard-tickets">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Validação de Ingressos</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
          </div>
          <div class="mt-space-md">
            <div class="flex items-center gap-1.5">
              ${ticketBadgeHtml}
            </div>
            <div class="font-caption text-caption text-outline mt-1.5">Regras de 2027 a conferir</div>
          </div>
          <div class="flex items-center justify-between text-caption font-caption text-secondary mt-space-xs">
            <span>Conferência necessária</span>
            <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </div>
        </div>
      </section>

      <!-- Layout Principal em 2 Colunas (65% / 35%) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <!-- Coluna Principal (65% -> col-span-8) -->
        <section class="lg:col-span-8 flex flex-col gap-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-outline-variant/20">
            <!-- Cabeçalho do Bloco -->
            <div class="flex items-center justify-between pb-space-md">
              <div class="flex items-center gap-space-sm">
                <span class="material-symbols-outlined text-primary-container text-[20px]">view_timeline</span>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Primeiros dias do roteiro</h2>
              </div>
              <span class="font-caption text-caption text-outline">Exibindo 5 de 19 dias</span>
            </div>

            <!-- Tabela / Lista Estruturada de Dias -->
            <div class="flex flex-col divide-y divide-outline-variant/30">
              ${previewDaysHtml}
            </div>

            <!-- Rodapé do Card com Ação Direta -->
            <div class="pt-space-md mt-space-sm flex items-center justify-between border-t border-outline-variant/20">
              <div class="flex items-center gap-1.5 text-caption font-caption text-outline">
                <span class="material-symbols-outlined text-[15px]">info</span>
                <span>Roteiro calibrado com dias de descanso intercalados</span>
              </div>
              <button class="inline-flex items-center gap-1 font-body-md-medium text-body-md text-primary hover:text-primary-container transition-colors" id="btn-goto-itinerary">
                <span>Abrir roteiro completo</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Resumo Estratégico de Grupos de Parques -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/20">
            <h3 class="font-label-md text-label-md uppercase tracking-wider text-outline mb-space-sm font-semibold">Distribuição por Complexo</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Walt Disney World</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${disneyDays} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">4 parques + MK</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Universal Orlando</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${universalDays} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">Inclui Epic (2x)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">United Parks</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${unitedDays} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">SeaWorld, Busch</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Off-Park / Pausa</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${offDays} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-tertiary-container mt-1">Recuperação física</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Coluna Secundária (35% -> col-span-4) -->
        <aside class="lg:col-span-4 flex flex-col gap-space-md">
          <!-- Card Branco: Pontos de Atenção -->
          <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/20">
            <div class="flex items-center justify-between pb-space-xs">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-[20px] text-secondary">notification_important</span>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Pontos de atenção</h2>
              </div>
              <span class="font-label-xs-mono text-label-xs-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">4 alertas</span>
            </div>

            <div class="flex flex-col gap-space-md">
              <!-- Alerta 1: Data Fixa Magic Kingdom -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">lock_clock</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Magic Kingdom Travado (23/05)</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Gran Finale agendado para o último dia de viagem com ingresso avulso. Esta data não pode ser alterada ou remanejada pelo algoritmo.
                  </p>
                </div>
              </div>

              <!-- Alerta 2: Regras de Validade dos Ingressos -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">hourglass_top</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Validade dos Pacotes Pendente</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    As regras de validade em dias corridos dos passes Disney 4-Park (7 dias) e Universal Explorer (14 dias) ainda requerem confirmação das regras de 2027.
                  </p>
                </div>
              </div>

              <!-- Alerta 3: Parques Épicos -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">rocket_launch</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Epic Universe (2 Visitas)</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Programado para 11/05 e 19/05. Mantenha intervalo adequado entre as duas idas para absorver o novo parque sem saturação.
                  </p>
                </div>
              </div>

              <!-- Alerta 4: Previsão de Lotação -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">schedule</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Previsão 2027 Indisponível</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Dados oficiais de previsão de lotação para maio de 2027 não estão liberados pelas APIs dos complexos. O planejador opera em modo íntegro sem inventar dados.
                  </p>
                </div>
              </div>
            </div>

            <!-- Atalhos Rápidos da Coluna Secundária -->
            <div class="pt-space-sm flex flex-col gap-2">
              <button id="btn-quick-tickets" class="w-full h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                <span class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[17px] text-secondary">confirmation_number</span>
                  <span>Conferir regras de ingressos</span>
                </span>
                <span class="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              </button>
              <button id="btn-quick-crowd" class="w-full h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                <span class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[17px] text-primary">groups</span>
                  <span>Ver calendário de lotação</span>
                </span>
                <span class="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              </button>
            </div>
          </div>

          <!-- Card Complementar: Status de Prontidão & Fadiga -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-outline-variant/20">
            <div class="flex items-center justify-between">
              <span class="font-caption text-caption uppercase tracking-wider text-outline font-semibold">Índice Médio de Fadiga</span>
              <span class="font-label-xs-mono text-label-xs-mono text-primary font-bold">${fatigue.overallFatigueScore}/100</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div class="bg-primary-container h-full rounded-full" style="width: ${fatigue.overallFatigueScore}%;"></div>
            </div>
            <div class="flex items-center justify-between text-caption font-caption text-on-surface-variant pt-1">
              <span>${fatigue.actualRestDaysCount} dias de recuperação</span>
              <span class="text-tertiary-container font-medium">${fatigue.criticalAlerts.length === 0 ? 'Ritmo equilibrado' : `${fatigue.criticalAlerts.length} alertas físicos`}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}
