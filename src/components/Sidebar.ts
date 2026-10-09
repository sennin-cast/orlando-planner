export type AppTab =
  | 'visao-geral'
  | 'meu-roteiro'
  | 'onde-comer'
  | 'roteiros-de-parques'
  | 'guia-outlets'
  | 'calendario-de-lotacao'
  | 'comparar-datas'
  | 'meus-ingressos'
  | 'sugestoes-de-roteiro'
  | 'desgaste-fisico'
  | 'historico'
  | 'configuracoes';

export interface NavItem {
  id: AppTab;
  label: string;
  icon: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'visao-geral', label: 'Visão Geral', icon: 'dashboard' },
  { id: 'meu-roteiro', label: 'Meu Roteiro', icon: 'calendar_today' },
  { id: 'onde-comer', label: 'Onde Comer', icon: 'restaurant', badge: 'Gastronomia' },
  { id: 'roteiros-de-parques', label: 'Planos de Parques', icon: 'route', badge: '10 Guias' },
  { id: 'guia-outlets', label: 'Outlets & Compras', icon: 'shopping_bag', badge: 'Econômico' },
  { id: 'calendario-de-lotacao', label: 'Calendário de Lotação', icon: 'groups' },
  { id: 'comparar-datas', label: 'Comparar Datas', icon: 'compare_arrows' },
  { id: 'meus-ingressos', label: 'Meus Ingressos', icon: 'confirmation_number' },
  { id: 'sugestoes-de-roteiro', label: 'Sugestões de Roteiro', icon: 'alt_route' },
  { id: 'desgaste-fisico', label: 'Desgaste Físico', icon: 'directions_walk' },
  { id: 'historico', label: 'Histórico', icon: 'history' },
  { id: 'configuracoes', label: 'Configurações', icon: 'settings' },
];

export function renderSidebar(currentTab: AppTab, tripDays: number, userName?: string): string {
  const navHtml = NAV_ITEMS.map((item) => {
    const isActive = item.id === currentTab;
    const activeClass = isActive
      ? 'bg-surface-container text-primary font-semibold shadow-xs'
      : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface';

    return `
      <button 
        type="button" 
        class="nav-tab-btn w-full flex items-center justify-between px-space-sm py-2 rounded-lg font-body-md transition-colors text-left ${activeClass}" 
        data-tab="${item.id}"
      >
        <div class="flex items-center gap-space-sm">
          <span class="material-symbols-outlined text-[19px] ${isActive ? 'text-primary' : 'text-on-surface-variant'}">${item.icon}</span>
          <span class="text-[13.5px]">${item.label}</span>
        </div>
        ${item.badge ? `<span class="text-[10px] px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">${item.badge}</span>` : ''}
      </button>
    `;
  }).join('');

  return `
    <aside id="app-sidebar" class="fixed left-0 top-0 h-full w-[230px] bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between select-none transform -translate-x-full lg:translate-x-0 transition-transform duration-200">
      <div class="flex flex-col">
        <!-- Logo / App Identity -->
        <div class="h-[64px] px-4 flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-lowest">
          <div class="flex items-center cursor-pointer py-1" id="sidebar-logo-btn" title="Orlando Planner">
            <img 
              src="./logo.png" 
              alt="Orlando Planner" 
              class="h-8 max-h-[34px] w-auto max-w-[155px] object-contain hover:opacity-90 transition-opacity" 
            />
          </div>
          <button id="btn-close-mobile-menu" class="lg:hidden p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" aria-label="Fechar menu">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Quick Wizard Trigger Button -->
        <div class="px-space-xs pt-space-xs pb-1">
          <button id="btn-sidebar-trip-generator" class="w-full py-2 px-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold flex items-center justify-between transition-colors shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">auto_fix_high</span>
              <span>Ajustar Duração</span>
            </div>
            <span class="font-label-xs-mono bg-white/20 px-1.5 py-0.5 rounded text-[10px]">${tripDays}d</span>
          </button>
        </div>

        <!-- Navigation items -->
        <nav class="px-space-xs py-1 space-y-0.5 flex flex-col">
          ${navHtml}
        </nav>
      </div>

      <!-- Bottom User Profile & Trip Badge -->
      <div class="p-space-sm border-t border-outline-variant/30 m-space-xs flex flex-col gap-2">
        <!-- User account card -->
        <div class="bg-surface-container-low p-2 rounded-lg flex items-center justify-between border border-outline-variant/20">
          <div class="flex items-center gap-2 overflow-hidden">
            <div class="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">
              ${userName ? userName.charAt(0).toUpperCase() : 'U'}
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="font-label-sm text-[12px] font-semibold text-on-surface truncate">${userName || 'Viajante'}</span>
              <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Conectado
              </span>
            </div>
          </div>
          <button id="btn-sidebar-logout" class="p-1 rounded-md text-outline hover:text-error hover:bg-error-container/20 transition-colors" title="Encerrar sessão com segurança" type="button">
            <span class="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>

        <!-- Trip Status & Credits -->
        <div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 border border-outline-variant/20">
          <div class="flex items-center justify-between">
            <span class="font-label-sm text-label-sm font-semibold text-on-surface truncate">Orlando Planner</span>
            <span class="w-2 h-2 rounded-full bg-tertiary-container" title="Planejador Ativo"></span>
          </div>
          <span class="font-caption text-caption text-outline">Viagem de ${tripDays} dias</span>
          <div class="pt-1.5 mt-1 border-t border-outline-variant/20 flex items-center justify-between">
            <a href="https://queue-times.com/pt-BR" target="_blank" rel="noopener noreferrer" class="text-[10px] text-outline hover:text-primary transition-colors flex items-center gap-1 font-medium" title="Dados de filas ao vivo fornecidos por Queue-Times.com">
              <span>Powered by Queue-Times.com</span>
              <span class="material-symbols-outlined text-[10px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  `;
}
