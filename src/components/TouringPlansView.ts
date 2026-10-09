import { TOURING_PLANS_CATALOG, TouringPlan } from '../data/touringPlansCatalog';

export function renderTouringPlansView(
  selectedPlanId: string = 'magic-kingdom',
  filterOperator: 'all' | 'disney' | 'universal' | 'seaworld' = 'all'
): string {
  const allPlans = Object.values(TOURING_PLANS_CATALOG);
  const filteredPlans = allPlans.filter((p) => {
    if (filterOperator === 'all') return true;
    return p.operator === filterOperator;
  });

  const currentPlan: TouringPlan =
    TOURING_PLANS_CATALOG[selectedPlanId] ||
    filteredPlans[0] ||
    TOURING_PLANS_CATALOG['magic-kingdom'];

  // Operator badges styling
  const operatorBadge = (op: string) => {
    switch (op) {
      case 'disney':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e8f0fe] text-[#1967d2]">Walt Disney World</span>';
      case 'universal':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#fce8e6] text-[#c5221f]">Universal Orlando</span>';
      case 'seaworld':
        return '<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e6f4ea] text-[#137333]">United Parks</span>';
      default:
        return '';
    }
  };

  // Plan picker list items
  const planCardsHtml = filteredPlans
    .map((plan) => {
      const isSelected = plan.id === currentPlan.id;
      return `
        <button
          type="button"
          class="btn-select-touring-plan text-left w-full p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${
            isSelected
              ? 'bg-surface-container-lowest border-primary shadow-sm ring-2 ring-primary/20'
              : 'bg-surface-container-low/70 hover:bg-surface-container border-outline-variant/30 text-on-surface'
          }"
          data-plan-id="${plan.id}"
        >
          <div class="flex items-center justify-between w-full">
            <span class="font-bold text-xs sm:text-sm text-on-surface">${plan.parkName}</span>
            ${operatorBadge(plan.operator)}
          </div>
          <span class="text-[11px] text-outline line-clamp-1">${plan.subtitle}</span>
          <div class="flex items-center gap-2 text-[10px] text-outline font-medium pt-1">
            <span class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[12px]">schedule</span>
              ${plan.estimatedDuration}
            </span>
            <span>•</span>
            <span class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[12px]">format_list_numbered</span>
              ${plan.steps.length} passos
            </span>
          </div>
        </button>
      `;
    })
    .join('');

  // Step category helper
  const getStepIcon = (category: string) => {
    switch (category) {
      case 'rope_drop':
        return { icon: 'wb_twilight', color: 'text-[#e37400] bg-[#fef7ed]' };
      case 'morning':
        return { icon: 'wb_sunny', color: 'text-[#1a73e8] bg-[#e8f0fe]' };
      case 'lunch':
        return { icon: 'restaurant', color: 'text-[#188038] bg-[#e6f4ea]' };
      case 'afternoon':
        return { icon: 'wb_cloudy', color: 'text-[#9334e6] bg-[#f3e8fd]' };
      case 'evening':
        return { icon: 'bedtime', color: 'text-[#d93025] bg-[#fce8e6]' };
      case 'show':
        return { icon: 'theater_comedy', color: 'text-[#a142f4] bg-[#f3e8fd]' };
      case 'night_show':
        return { icon: 'auto_awesome', color: 'text-[#f29900] bg-[#fff8e1]' };
      default:
        return { icon: 'arrow_forward', color: 'text-primary bg-primary-container/20' };
    }
  };

  // Steps timeline HTML
  const stepsTimelineHtml = currentPlan.steps
    .map((step) => {
      const stepStyle = getStepIcon(step.category);
      return `
        <div class="relative flex gap-3 sm:gap-4 group">
          <!-- Step circle number -->
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full ${stepStyle.color} flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs border border-outline-variant/30">
              <span class="material-symbols-outlined text-[16px]">${stepStyle.icon}</span>
            </div>
            <div class="w-0.5 grow bg-outline-variant/30 my-1 group-last:hidden"></div>
          </div>

          <!-- Step content card -->
          <div class="bg-surface-container-lowest p-3.5 sm:p-4 rounded-xl border border-outline-variant/30 shadow-2xs space-y-2 grow mb-3">
            <div class="flex items-start justify-between gap-2 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="font-label-xs-mono text-xs font-bold text-outline">Passo ${step.step}</span>
                <h4 class="font-bold text-xs sm:text-sm text-on-surface">${step.title}</h4>
              </div>
              ${
                step.badge
                  ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-fixed text-on-primary-fixed">${step.badge}</span>`
                  : ''
              }
            </div>

            <p class="text-xs text-on-surface-variant leading-relaxed">${step.description}</p>

            ${
              step.tip
                ? `
              <div class="p-2.5 rounded-lg bg-surface-container-low/70 border border-outline-variant/20 flex items-start gap-2 text-[11px] text-on-surface">
                <span class="material-symbols-outlined text-[14px] text-tertiary-container shrink-0 mt-0.5">tips_and_updates</span>
                <span class="italic"><strong class="not-italic font-semibold text-primary">Dica de Especialista:</strong> ${step.tip}</span>
              </div>
            `
                : ''
            }
          </div>
        </div>
      `;
    })
    .join('');

  // Dining recommendations HTML
  const qsList = currentPlan.diningRecommendations.quickService
    .map((item) => `<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#188038] shrink-0 mt-0.5">check_circle</span><span>${item}</span></li>`)
    .join('');
  const tsList = currentPlan.diningRecommendations.tableService
    .map((item) => `<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#1a73e8] shrink-0 mt-0.5">restaurant</span><span>${item}</span></li>`)
    .join('');
  const snackList = currentPlan.diningRecommendations.snacks
    .map((item) => `<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#e37400] shrink-0 mt-0.5">icecream</span><span>${item}</span></li>`)
    .join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title & Header -->
      <section class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Roteiros de Parques (Touring Plans)</h1>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">100% PT-BR</span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Planos de touring passo a passo baseados nos dados históricos de Undercover Tourist para economizar até 4 horas de filas por dia.
          </p>
        </div>

        <button type="button" id="btn-print-touring-plan" class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-2xs">
          <span class="material-symbols-outlined text-[16px]">print</span>
          <span>Imprimir Roteiro do Parque</span>
        </button>
      </section>

      <!-- Operator Filter Tabs -->
      <section class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto scrollbar-none">
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterOperator === 'all' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-op="all">
          Todos os Roteiros (10)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterOperator === 'disney' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-op="disney">
          Disney (4)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterOperator === 'universal' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-op="universal">
          Universal & Epic Universe (5)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${filterOperator === 'seaworld' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-op="seaworld">
          SeaWorld Orlando (1)
        </button>
      </section>

      <!-- Main Two-Column Layout (Park Selector + Active Plan Details) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <!-- Left: Park List Selector (4 cols on desktop) -->
        <div class="lg:col-span-4 space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-outline px-1">Selecione o Parque</h3>
          <div class="space-y-2 max-h-[700px] overflow-y-auto pr-1">
            ${planCardsHtml}
          </div>
        </div>

        <!-- Right: Active Plan Details (8 cols on desktop) -->
        <div class="lg:col-span-8 space-y-5" id="printable-touring-plan">
          <!-- Active Plan Hero Banner -->
          <div class="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-4">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  ${operatorBadge(currentPlan.operator)}
                  <span class="text-xs text-outline font-medium">• ${currentPlan.targetAudience}</span>
                </div>
                <h2 class="text-lg sm:text-2xl font-bold text-on-surface">${currentPlan.title}</h2>
                <p class="text-xs sm:text-sm text-outline mt-0.5">${currentPlan.subtitle}</p>
              </div>

              <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center shrink-0">
                <span class="text-[10px] text-outline block">Duração Estimada</span>
                <span class="font-label-xs-mono text-xs font-extrabold text-primary">${currentPlan.estimatedDuration}</span>
              </div>
            </div>

            <!-- Strategy Highlights Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 rounded-xl bg-[#fef7ed] border border-[#f7dfb7] space-y-1">
                <div class="flex items-center gap-1.5 text-[#b97820] font-bold text-xs">
                  <span class="material-symbols-outlined text-[16px]">wb_twilight</span>
                  <span>Estratégia de Rope Drop & Portões</span>
                </div>
                <p class="text-xs text-[#6e460d]">${currentPlan.ropeDropArrival}</p>
              </div>

              <div class="p-3 rounded-xl bg-[#e8f0fe] border border-[#c2d7fc] space-y-1">
                <div class="flex items-center gap-1.5 text-[#1967d2] font-bold text-xs">
                  <span class="material-symbols-outlined text-[16px]">psychology</span>
                  <span>Filosofia de Economia de Fila</span>
                </div>
                <p class="text-xs text-[#134994]">${currentPlan.generalStrategy}</p>
              </div>
            </div>
          </div>

          <!-- Chronological Step-by-Step Sequence -->
          <div class="space-y-3">
            <div class="flex items-center justify-between px-1">
              <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-primary">route</span>
                <span>Passo a Passo do Dia (${currentPlan.steps.length} Etapas)</span>
              </h3>
              <span class="text-[11px] text-outline font-medium">Ordem cronológica recomendada</span>
            </div>

            <div class="pt-1">
              ${stepsTimelineHtml}
            </div>
          </div>

          <!-- Dining & Night Show Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Dining Recommendations -->
            <div class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-[#ebf6f1] text-[#1b6443] flex items-center justify-center">
                  <span class="material-symbols-outlined text-[18px]">restaurant_menu</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs sm:text-sm text-on-surface">Onde Comer Sem Erro</h4>
                  <span class="text-[11px] text-outline">Recomendações testadas e aprovadas</span>
                </div>
              </div>

              <div class="space-y-2.5 text-xs">
                <div>
                  <span class="font-bold text-[#188038] text-[11px] uppercase tracking-wider block mb-1">Rápido / Quick-Service</span>
                  <ul class="space-y-1 text-on-surface-variant">${qsList}</ul>
                </div>

                <div class="pt-1 border-t border-outline-variant/15">
                  <span class="font-bold text-[#1a73e8] text-[11px] uppercase tracking-wider block mb-1">Com Reserva / Table-Service</span>
                  <ul class="space-y-1 text-on-surface-variant">${tsList}</ul>
                </div>

                <div class="pt-1 border-t border-outline-variant/15">
                  <span class="font-bold text-[#e37400] text-[11px] uppercase tracking-wider block mb-1">Lanches & Sobremesas Famosas</span>
                  <ul class="space-y-1 text-on-surface-variant">${snackList}</ul>
                </div>
              </div>
            </div>

            <!-- Night Show Highlight -->
            <div class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg bg-[#fff8e1] text-[#b97820] flex items-center justify-center">
                    <span class="material-symbols-outlined text-[18px]">celebration</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-on-surface">Show de Encerramento da Noite</h4>
                    <span class="text-[11px] text-outline">${currentPlan.nightShow.name}</span>
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-outline font-medium">Horário Médio</span>
                    <span class="font-bold text-primary font-label-xs-mono">${currentPlan.nightShow.time}</span>
                  </div>
                </div>

                <div class="text-xs text-on-surface-variant leading-relaxed">
                  <strong class="font-semibold text-on-surface">Onde Assistir com Menos Aglomeração:</strong>
                  <p class="mt-1">${currentPlan.nightShow.tip}</p>
                </div>
              </div>

              <!-- Vault Link Alert -->
              <div class="p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 flex items-center justify-between text-xs text-outline">
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[15px] text-tertiary-container">folder_open</span>
                  <span>Versão para Obsidian disponível em <strong>Obsidian_Vault/02 - Planos de Parques</strong></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
