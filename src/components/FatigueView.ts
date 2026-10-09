import { ItineraryDay } from '../types/itinerary';
import { ItineraryFatigueSummary, FatigueParameters } from '../types/fatigue';

export function renderFatigueView(
  itinerary: ItineraryDay[],
  fatigue: ItineraryFatigueSummary,
  params: FatigueParameters
): string {
  const rowsHtml = itinerary
    .map((day) => {
      const res = fatigue.dailyResults[day.date];
      if (!res) return '';

      let levelClass = 'bg-[#9af5c2] text-[#005233]';
      if (res.level === 'Crítico') levelClass = 'bg-[#ffdad6] text-[#93000a] font-bold';
      else if (res.level === 'Alto') levelClass = 'bg-[#ffdad6] text-[#ba1a1a] font-semibold';
      else if (res.level === 'Moderado') levelClass = 'bg-[#ffdeaa] text-[#5f4100]';
      else if (res.level === 'Descanso') levelClass = 'bg-surface-container text-outline';

      return `
        <tr class="hover:bg-surface-container-low/50 transition-colors">
          <td class="p-3 text-xs font-semibold text-on-surface">
            ${day.date.substring(5)} (${day.dayOfWeek})
          </td>
          <td class="p-3 text-xs text-on-surface font-medium truncate max-w-[160px]">
            ${day.title}
          </td>
          <td class="p-3 text-xs text-center font-label-xs-mono">
            ${res.walkKm > 0 ? `${res.walkKm.toFixed(1)} km` : '—'}
          </td>
          <td class="p-3 text-xs text-center font-label-xs-mono">
            ${res.transitMinutes > 0 ? `${res.transitMinutes} min` : '—'}
          </td>
          <td class="p-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[11px] ${levelClass}">
              ${res.level}
            </span>
          </td>
          <td class="p-3 text-center">
            <div class="flex items-center justify-center gap-1.5">
              <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div class="h-full rounded-full ${res.cumulativeScore > 75 ? 'bg-error' : res.cumulativeScore > 50 ? 'bg-secondary' : 'bg-tertiary-container'}" style="width: ${res.cumulativeScore}%;"></div>
              </div>
              <span class="font-label-xs-mono text-xs font-bold text-on-surface w-7">${res.cumulativeScore}</span>
            </div>
          </td>
          <td class="p-3 text-xs text-on-surface-variant max-w-[200px] truncate" title="${res.alerts.join(' ')}">
            ${res.alerts.length > 0 ? `<span class="text-error font-medium">${res.alerts[0]}</span>` : '<span class="text-outline">Ritmo controlado</span>'}
          </td>
        </tr>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Desgaste Físico</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Monitoramento biomecânico de caminhada acumulada, impacto de deslocamentos de estrada e janelas de repouso muscular.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-outline font-medium">Esforço Médio do Roteiro:</span>
          <span class="px-2.5 py-1 rounded bg-surface-container font-label-xs-mono font-bold text-primary text-sm">
            ${fatigue.overallFatigueScore}/100
          </span>
        </div>
      </section>

      <!-- KPI Summary Cards -->
      <section class="grid grid-cols-1 sm:grid-cols-4 gap-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Dias de Parques</span>
          <div class="font-headline-lg text-2xl font-bold text-on-surface mt-1">${itinerary.filter((d) => d.activityType === 'park').length}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Exigem caminhada intensa</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Dias de Descanso / Compras</span>
          <div class="font-headline-lg text-2xl font-bold text-tertiary-container mt-1">${fatigue.actualRestDaysCount}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Recuperam +${params.restDayRecoveryBonus} pts/dia</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Pico de Fadiga</span>
          <div class="font-headline-lg text-2xl font-bold text-secondary mt-1">${fatigue.peakFatigueDay.substring(5)}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Dia com maior esforço acumulado</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Alertas Críticos</span>
          <div class="font-headline-lg text-2xl font-bold ${fatigue.criticalAlerts.length > 0 ? 'text-error' : 'text-tertiary-container'} mt-1">${fatigue.criticalAlerts.length}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Pontos de atenção física</span>
        </div>
      </section>

      <!-- User Tolerance Sliders Box -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-primary">fitness_center</span>
            <span class="text-xs font-bold uppercase tracking-wider text-outline">Ajuste de Tolerância e Limites Pessoais</span>
          </div>
          <span class="text-xs text-primary font-medium">Parâmetros Ativos</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label class="block text-on-surface font-medium mb-1">Máx. dias seguidos em parques: <span id="val-max-consec" class="font-bold text-primary">${params.maxConsecutiveParkDays} dias</span></label>
            <input type="range" class="w-full" id="slider-max-consec" min="1" max="5" value="${params.maxConsecutiveParkDays}">
          </div>

          <div>
            <label class="block text-on-surface font-medium mb-1">Bônus de recuperação de descanso: <span id="val-rest-bonus" class="font-bold text-primary">${params.restDayRecoveryBonus} pts</span></label>
            <input type="range" class="w-full" id="slider-rest-bonus" min="10" max="60" value="${params.restDayRecoveryBonus}">
          </div>

          <div>
            <label class="block text-on-surface font-medium mb-1">Sensibilidade física pessoal: <span id="val-tolerance" class="font-bold text-primary">${params.userToleranceMultiplier === 1.0 ? 'Padrão (1.0x)' : `${params.userToleranceMultiplier.toFixed(1)}x`}</span></label>
            <input type="range" class="w-full" id="slider-tolerance" min="0.8" max="1.3" step="0.1" value="${params.userToleranceMultiplier}">
          </div>
        </div>
      </section>

      <!-- Detailed Breakdown Table -->
      <section class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div class="p-4 border-b border-outline-variant/20 flex items-center justify-between">
          <h2 class="text-xs font-bold uppercase tracking-wider text-outline">Detalhamento Diário do Impacto Físico</h2>
          <span class="text-xs text-outline">19 dias avaliados</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low border-b border-outline-variant/30 text-xs text-outline font-semibold">
                <th class="p-3">Data</th>
                <th class="p-3">Atividade</th>
                <th class="p-3 text-center">Caminhada Estimada</th>
                <th class="p-3 text-center">Deslocamento (Ida+Volta)</th>
                <th class="p-3 text-center">Nível</th>
                <th class="p-3 text-center">Esforço Acumulado</th>
                <th class="p-3">Diagnóstico</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/20">
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}
