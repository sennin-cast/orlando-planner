import { OptimizationResult, OptimizerWeights } from '../types/optimizer';

export function renderOptimizerView(
  optimization: OptimizationResult,
  weights: OptimizerWeights
): string {
  const suggestionsHtml = optimization.suggestions
    .map((s, index) => {
      return `
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-start gap-3 min-w-0">
            <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              ${index + 1}
            </span>
            <div class="flex flex-col min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-bold text-sm text-on-surface">${s.sourceDate.substring(5)}: ${s.sourceParkOrActivity}</span>
                <span class="material-symbols-outlined text-[16px] text-primary">swap_horiz</span>
                <span class="font-bold text-sm text-on-surface">${s.targetDate.substring(5)}: ${s.targetParkOrActivity}</span>
              </div>
              <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">
                ${s.justification}
              </p>
              <div class="flex items-center gap-3 mt-2 text-[11px] text-outline">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-primary">groups</span>
                  <span>${s.crowdDeltaDescription}</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-tertiary-container">directions_walk</span>
                  <span>${s.fatigueDeltaDescription}</span>
                </span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
            <label class="flex items-center gap-2 text-xs font-semibold cursor-pointer">
              <input type="checkbox" class="suggestion-toggle-checkbox w-4 h-4 rounded text-primary" data-id="${s.id}" ${s.accepted ? 'checked' : ''}>
              <span>Aceitar</span>
            </label>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Sugestões de Roteiro</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Motor de otimização analítica: balanceamento de esforço físico, cadência de descanso e restrições obrigatórias.
          </p>
        </div>

        <button 
          id="btn-run-optimizer" 
          class="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition-colors shadow-sm"
          type="button"
        >
          <span class="material-symbols-outlined text-[18px]">psychology</span>
          <span>Recalcular Otimização</span>
        </button>
      </section>

      <!-- Partial Optimization Note if applicable -->
      ${
        optimization.isPartialOptimization && optimization.partialOptimizationNote
          ? `
        <div class="p-4 rounded-xl bg-secondary-fixed/40 border border-secondary-fixed text-xs text-on-secondary-fixed-variant flex items-start gap-3">
          <span class="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">info</span>
          <div>
            <strong class="font-semibold block mb-0.5">Otimização Parcial Ativa</strong>
            <p class="leading-relaxed">${optimization.partialOptimizationNote}</p>
          </div>
        </div>
      `
          : ''
      }

      <!-- Score Comparison Summary -->
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Pontuação Atual</span>
          <div class="font-headline-lg text-2xl font-bold text-on-surface mt-1">${optimization.currentScore}/100</div>
          <span class="text-[11px] text-outline mt-0.5 block">Configuração em vigor</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Pontuação Projetada</span>
          <div class="font-headline-lg text-2xl font-bold text-primary mt-1">${optimization.suggestedScore}/100</div>
          <span class="text-[11px] text-tertiary-container font-semibold mt-0.5 block">
            +${Math.max(0, optimization.suggestedScore - optimization.currentScore)} pontos de eficiência
          </span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Redução de Fadiga</span>
          <div class="font-headline-lg text-2xl font-bold text-tertiary-container mt-1">
            -${optimization.summary.fatigueImprovementPercent} pts
          </div>
          <span class="text-[11px] text-outline mt-0.5 block">Melhoria física cumulativa</span>
        </div>
      </section>

      <!-- Optimizer Weights Config Slider Collapsible -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
        <div class="flex items-center justify-between cursor-pointer" id="btn-toggle-weights-panel">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-outline text-[18px]">tune</span>
            <span class="text-xs font-semibold uppercase text-outline">Pesos e Critérios do Algoritmo</span>
          </div>
          <span class="text-xs text-primary font-medium">Ajustar Pesos</span>
        </div>

        <div id="weights-panel" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 mt-2 border-t border-outline-variant/20">
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Lotação: <span id="val-w-crowd" class="font-bold text-primary">${Math.round(weights.crowdWeight * 100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-crowd" min="0" max="100" value="${weights.crowdWeight * 100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Fadiga: <span id="val-w-fatigue" class="font-bold text-primary">${Math.round(weights.fatigueWeight * 100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-fatigue" min="0" max="100" value="${weights.fatigueWeight * 100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Deslocamentos: <span id="val-w-commute" class="font-bold text-primary">${Math.round(weights.commuteWeight * 100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-commute" min="0" max="100" value="${weights.commuteWeight * 100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Preferências: <span id="val-w-pref" class="font-bold text-primary">${Math.round(weights.preferenceWeight * 100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-pref" min="0" max="100" value="${weights.preferenceWeight * 100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Flexibilidade: <span id="val-w-flex" class="font-bold text-primary">${Math.round(weights.flexibilityWeight * 100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-flex" min="0" max="100" value="${weights.flexibilityWeight * 100}">
          </div>
        </div>
      </section>

      <!-- Proposals List -->
      <section class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-bold uppercase tracking-wider text-outline">
            Alterações Estratégicas Propostas (${optimization.suggestions.length})
          </h2>
          ${
            optimization.suggestions.length > 0
              ? `
            <button id="btn-apply-selected-suggestions" class="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm" type="button">
              <span class="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Aplicar Alterações Aceitas</span>
            </button>
          `
              : ''
          }
        </div>

        ${
          optimization.suggestions.length > 0
            ? `<div class="space-y-3">${suggestionsHtml}</div>`
            : `
          <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
            <span class="material-symbols-outlined text-4xl mb-2 text-tertiary-container">verified</span>
            <h3 class="font-semibold text-on-surface text-base">Roteiro Atual Já Otimizado</h3>
            <p class="text-xs text-outline mt-1 max-w-md mx-auto">
              O itinerário atual atende com excelência ao equilíbrio de desgaste físico, intercalação de compras e respeito obrigatório às datas travadas.
            </p>
          </div>
        `
        }
      </section>
    </div>
  `;
}
