import { StorageSnapshot } from '../services/storageManager';

export function renderHistoryView(
  snapshots: StorageSnapshot[],
  canUndo: boolean,
  canRedo: boolean
): string {
  const snapshotsHtml = snapshots
    .map((s) => {
      const parkCount = s.itinerary.filter((d) => d.activityType === 'park').length;
      return `
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-[20px]">bookmark</span>
            </div>
            <div>
              <h3 class="font-bold text-sm text-on-surface">${s.name}</h3>
              <span class="text-xs text-outline">${new Date(s.timestamp).toLocaleString('pt-BR')} • ${parkCount} parques</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button 
              type="button" 
              class="btn-restore-snapshot px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-colors flex items-center gap-1"
              data-id="${s.id}"
            >
              <span class="material-symbols-outlined text-[15px]">restore</span>
              <span>Restaurar</span>
            </button>
            <button 
              type="button" 
              class="btn-delete-snapshot p-1.5 rounded-lg text-outline hover:text-error hover:bg-[#ffdad6]/40 transition-colors"
              data-id="${s.id}"
              title="Excluir snapshot"
            >
              <span class="material-symbols-outlined text-[16px]">delete</span>
            </button>
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
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Histórico e Versões</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerencie pontos de restauração salvos, histórico de navegação e reverta alterações a qualquer momento.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <button id="btn-history-undo" class="px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold text-on-surface hover:bg-surface-container disabled:opacity-40 flex items-center gap-1 transition-colors" ${!canUndo ? 'disabled' : ''}>
            <span class="material-symbols-outlined text-[16px]">undo</span>
            <span>Desfazer</span>
          </button>
          <button id="btn-history-redo" class="px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold text-on-surface hover:bg-surface-container disabled:opacity-40 flex items-center gap-1 transition-colors" ${!canRedo ? 'disabled' : ''}>
            <span class="material-symbols-outlined text-[16px]">redo</span>
            <span>Refazer</span>
          </button>
        </div>
      </section>

      <!-- Create Snapshot Banner -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <span class="material-symbols-outlined text-primary text-[24px]">save</span>
          <div>
            <h3 class="text-sm font-bold text-on-surface">Criar Ponto de Restauração</h3>
            <p class="text-xs text-outline">Salve uma fotografia do roteiro antes de fazer experimentos com trocas.</p>
          </div>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <input 
            type="text" 
            id="input-snapshot-name" 
            placeholder="Ex: Antes da otimização" 
            class="h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-xs text-on-surface w-full sm:w-56 focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button id="btn-create-snapshot" class="h-9 px-4 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold transition-colors shrink-0 flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">add</span>
            <span>Salvar</span>
          </button>
        </div>
      </section>

      <!-- Snapshots List -->
      <section class="flex flex-col gap-3">
        <h2 class="text-xs font-bold uppercase tracking-wider text-outline">
          Pontos Salvos (${snapshots.length})
        </h2>

        ${
          snapshots.length > 0
            ? `<div class="space-y-2.5">${snapshotsHtml}</div>`
            : `
          <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
            <span class="material-symbols-outlined text-4xl mb-2 text-outline-variant">history_toggle_drop_down</span>
            <p class="text-xs">Nenhum ponto de restauração manual criado ainda. Crie um acima para guardar versões do roteiro.</p>
          </div>
        `
        }
      </section>

      <!-- Reset Danger Zone -->
      <section class="bg-[#ffdad6]/30 border border-[#ffdad6] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5">restart_alt</span>
          <div>
            <h4 class="text-xs font-bold text-[#93000a]">Restaurar Roteiro Original de Fábrica</h4>
            <p class="text-xs text-on-surface-variant mt-0.5">
              Descarta todas as edições locais e redefine para a distribuição proposta inicial de 05 a 23 de maio de 2027.
            </p>
          </div>
        </div>

        <button id="btn-reset-initial" class="px-3.5 py-1.5 rounded-lg bg-[#ba1a1a] text-white hover:bg-[#93000a] text-xs font-semibold transition-colors shrink-0">
          Redefinir Tudo
        </button>
      </section>
    </div>
  `;
}
