import { CrowdDataStore } from '../types/crowd';

export function renderSettingsView(crowdStore: CrowdDataStore): string {
  const verifiedCount = crowdStore.totalVerifiedDays;
  const unavailableCount = crowdStore.totalUnavailableDays;

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Configurações & Auditoria</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerenciamento do projeto, exportação/importação de dados e módulo administrativo de auditoria.
          </p>
        </div>
      </section>

      <!-- Grid Cards: Backup & Export -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <!-- Card Backup JSON -->
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-primary mb-2">
              <span class="material-symbols-outlined text-[20px]">save_as</span>
              <h3 class="font-bold text-sm text-on-surface">Backup & Restauração Completa (JSON)</h3>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Exporte todos os dados da viagem (roteiro, ingressos, notas, pesos de otimização) em um único arquivo de dados com esquema versionado (v1).
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20">
            <button id="btn-export-full-json" class="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">download</span>
              <span>Baixar Backup JSON</span>
            </button>

            <label class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">upload</span>
              <span>Importar JSON</span>
              <input type="file" id="input-import-json" accept=".json" class="hidden">
            </label>
          </div>
        </div>

        <!-- Card Export Markdown & Print -->
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-tertiary-container mb-2">
              <span class="material-symbols-outlined text-[20px]">article</span>
              <h3 class="font-bold text-sm text-on-surface">Exportação Editorial (Markdown & PDF)</h3>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Gere um documento estruturado em Markdown com a tabela completa do roteiro, estratégias de Rope Drop e dicas por parque para levar no celular ou imprimir.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20">
            <button id="btn-export-settings-md" class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">description</span>
              <span>Baixar Markdown</span>
            </button>

            <button id="btn-export-settings-pdf" class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary text-xs font-semibold transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">print</span>
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Administrative Module: Crowd Data Auditor -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-4">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary text-[20px]">admin_panel_settings</span>
            <div>
              <h2 class="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider">
                Módulo Administrativo — Importação & Auditoria de Lotação
              </h2>
              <span class="text-[11px] text-outline block">
                Regra de privacidade: A proveniência é restrita a este fluxo e não é exposta na interface do viajante.
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="px-2 py-0.5 rounded bg-surface-container text-outline font-label-xs-mono">
              ${verifiedCount} verificados / ${unavailableCount} nulos
            </span>
          </div>
        </div>

        <!-- Import instructions -->
        <div class="text-xs text-on-surface-variant leading-relaxed bg-surface-container-low p-3 rounded-lg border border-outline-variant/20 space-y-1">
          <p>
            <strong>Formato aceito:</strong> Arquivos JSON ou CSV com colunas: <code>date</code> (YYYY-MM-DD), <code>parkId</code>, <code>crowdLevel</code> (1-10 ou nulo), <code>isRecommended</code> (true/false), <code>isBusyDay</code> (true/false), <code>season</code>, <code>status</code>.
          </p>
          <p class="text-outline">
            Valores não informados ou ausentes permanecem estritamente nulos, sem conversão para zero.
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap items-center gap-3">
          <label class="px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 shadow-sm">
            <span class="material-symbols-outlined text-[16px]">file_upload</span>
            <span>Importar CSV ou JSON de Lotação</span>
            <input type="file" id="input-import-crowd-file" accept=".json,.csv" class="hidden">
          </label>

          <button id="btn-load-benchmark-data" class="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold transition-colors flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">science</span>
            <span>Carregar Dados Benchmark de Simulação</span>
          </button>

          <button id="btn-clear-crowd-data" class="px-3 py-2 rounded-lg text-outline hover:text-error text-xs font-medium transition-colors">
            Limpar Previsões (Retornar a Nulo)
          </button>
        </div>

        <div id="import-report-banner" class="hidden mt-2 p-3 rounded-lg text-xs"></div>
      </section>

      <!-- System Architecture Info -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 text-xs text-outline space-y-1.5">
        <h4 class="font-bold text-on-surface text-sm uppercase tracking-wider mb-2">Especificação Técnica</h4>
        <p>• <strong>Plataforma:</strong> ORLANDO PLANNER — SPA Estática otimizada para GitHub Pages</p>
        <p>• <strong>Fuso Horário Operacional:</strong> America/New_York (Datas locais imunes a distorção UTC)</p>
        <p>• <strong>Armazenamento:</strong> LocalStorage com versionamento de esquema (v1) e pilha de desfazer/refazer</p>
        <p>• <strong>Conformidade Legal:</strong> Separação hermética de metadados de scraping e modelo de apresentação do viajante</p>
      </section>
    </div>
  `;
}
