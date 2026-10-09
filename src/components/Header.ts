export interface HeaderEvents {
  onUndo: () => void;
  onRedo: () => void;
  onExportMarkdown: () => void;
  onExportJson: () => void;
  onPrintPdf: () => void;
  onOpenTripGenerator?: () => void;
  onToggleMobileMenu?: () => void;
  onLogout?: () => void;
}

export function renderHeader(
  canUndo: boolean,
  canRedo: boolean,
  tripDays: number,
  _events?: HeaderEvents,
  userName?: string
): string {
  return `
    <header class="fixed top-0 left-0 lg:left-[230px] right-0 h-[64px] bg-surface-container-lowest border-b border-outline-variant/30 z-40 flex items-center justify-between px-3 sm:px-4 lg:px-space-xl">
      <div class="flex items-center gap-2 sm:gap-space-md">
        <button id="btn-mobile-menu" class="lg:hidden p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button" aria-label="Abrir menu">
          <span class="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <img 
          src="./logo.png" 
          alt="Orlando Planner" 
          class="lg:hidden h-7 max-h-[30px] w-auto max-w-[125px] object-contain cursor-pointer" 
          id="header-mobile-logo" 
        />

        <button id="btn-header-trip-settings" class="hidden sm:flex items-center gap-space-xs px-2.5 py-1.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-body-md-medium text-[13px] transition-colors" type="button" title="Clique para personalizar duração ou perfil">
          <span class="material-symbols-outlined text-[18px] text-primary">flight_takeoff</span>
          <span>Orlando • ${tripDays} dias</span>
          <span class="material-symbols-outlined text-[16px] text-outline">tune</span>
        </button>
        <span class="hidden md:inline-block h-4 w-[1px] bg-outline-variant/40"></span>
        <span class="hidden md:inline-block font-caption text-caption text-outline uppercase tracking-wider font-semibold">Planejador Oficial</span>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-space-sm md:gap-space-md">
        <!-- Undo / Redo controls -->
        <div class="flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg border border-outline-variant/20">
          <button id="btn-header-undo" class="p-1 rounded text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:pointer-events-none transition-colors" title="Desfazer alteração" ${!canUndo ? 'disabled' : ''}>
            <span class="material-symbols-outlined text-[18px]">undo</span>
          </button>
          <button id="btn-header-redo" class="p-1 rounded text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:pointer-events-none transition-colors" title="Refazer alteração" ${!canRedo ? 'disabled' : ''}>
            <span class="material-symbols-outlined text-[18px]">redo</span>
          </button>
        </div>

        <!-- Direct Print Button -->
        <button id="btn-direct-print" class="h-9 px-2 sm:px-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1.5" title="Imprimir Roteiro Completo / Salvar em PDF" type="button">
          <span class="material-symbols-outlined text-[17px] text-secondary">print</span>
          <span class="hidden sm:inline">Imprimir PDF</span>
        </button>

        <!-- Export Menu dropdown trigger -->
        <div class="relative inline-block text-left" id="export-dropdown-wrapper">
          <button id="btn-export-dropdown" class="h-9 px-2.5 sm:px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1 sm:gap-1.5 shadow-sm" type="button">
            <span class="material-symbols-outlined text-[16px]">file_download</span>
            <span class="hidden md:inline">Exportar</span>
            <span class="material-symbols-outlined text-[14px]">expand_more</span>
          </button>

          <div id="export-menu" class="hidden absolute right-0 mt-1 w-56 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/30 py-1.5 z-50">
            <button id="action-export-md" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-primary">description</span>
              <span>Exportar Markdown (Roteiro)</span>
            </button>
            <button id="action-export-json" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-tertiary-container">data_object</span>
              <span>Backup do Planejamento (JSON)</span>
            </button>
            <button id="action-print-pdf" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-secondary">print</span>
              <span>Dossiê Completo de Impressão (PDF)</span>
            </button>
          </div>
        </div>

        <!-- User Logout Quick Action -->
        <button id="btn-header-logout" class="h-9 px-2 sm:px-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-error-container/20 hover:border-error/40 text-on-surface hover:text-error transition-colors flex items-center gap-1.5" title="Sair da Conta (${userName || 'Viajante'})" type="button">
          <span class="material-symbols-outlined text-[17px]">logout</span>
          <span class="hidden lg:inline text-xs font-medium">Sair</span>
        </button>
      </div>
    </header>
  `;
}
