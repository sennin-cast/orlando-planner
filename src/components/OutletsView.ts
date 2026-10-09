import { OUTLETS_CATALOG, OutletStore } from '../data/outletsCatalog';

export function renderOutletsView(
  activeFilter: 'all' | 'outlet_geral' | 'desconto_extremo' | 'eletronicos' | 'mercado_vitaminas' = 'all'
): string {
  const filtered = OUTLETS_CATALOG.filter((store) => {
    if (activeFilter === 'all') return true;
    return store.category === activeFilter;
  });

  const cardsHtml = filtered
    .map((store: OutletStore) => {
      let badgeBg = 'bg-[#ebf6f1] text-[#27865b] border-[#c2e6d5]';
      if (store.priceLevel === '$$') badgeBg = 'bg-[#fef7ed] text-[#b97820] border-[#f7dfb7]';
      if (store.priceLevel === '$$$') badgeBg = 'bg-surface-container text-outline border-outline-variant/40';

      const brandsHtml = store.topBrands
        .map(
          (b) => `
        <span class="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium text-[11px]">
          ${b}
        </span>
      `
        )
        .join('');

      return `
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4 hover:border-outline-variant/60 transition-all">
          <div>
            <!-- Header: Title, Category & Price Level -->
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[11px] font-label-xs-mono uppercase tracking-wider text-outline block">
                  ${store.categoryLabel}
                </span>
                <h3 class="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                  ${store.name}
                </h3>
                <span class="text-xs text-outline flex items-center gap-1 mt-0.5">
                  <span class="material-symbols-outlined text-[14px]">location_on</span>
                  <span>${store.distanceRegion}</span>
                </span>
              </div>

              <span class="px-2 py-0.5 rounded border text-xs font-bold ${badgeBg}">
                Preço: ${store.priceLevel}
              </span>
            </div>

            <!-- Description / Highlight -->
            <p class="text-xs text-on-surface-variant mt-3 leading-relaxed">
              ${store.highlight}
            </p>

            <!-- Brands Tags -->
            <div class="mt-3">
              <span class="text-[11px] font-semibold uppercase text-outline block mb-1.5">Lojas e Marcas em Destaque:</span>
              <div class="flex flex-wrap gap-1.5">
                ${brandsHtml}
              </div>
            </div>

            <!-- Golden Saving Tip -->
            <div class="mt-3.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs">
              <div class="flex items-center gap-1.5 text-primary font-bold mb-1">
                <span class="material-symbols-outlined text-[16px]">savings</span>
                <span>Dica de Ouro para Pagar Menos:</span>
              </div>
              <p class="text-on-surface-variant leading-relaxed">
                ${store.savingTips}
              </p>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <span class="text-[11px] text-outline font-label-xs-mono truncate max-w-[220px]" title="${store.address}">
              ${store.address}
            </span>

            <button 
              type="button" 
              class="btn-plan-shopping-day px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors flex items-center gap-1 shrink-0"
              data-outlet-name="${store.name}"
              data-outlet-tips="${store.savingTips}"
            >
              <span class="material-symbols-outlined text-[15px]">event_available</span>
              <span>Incluir no Roteiro</span>
            </button>
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
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Guia de Outlets & Compras Econômicas</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Onde comprar roupas, tênis, eletrônicos e malas pagando os menores preços em Orlando.
          </p>
        </div>

        <button id="btn-open-trip-generator-from-outlets" class="h-10 px-4 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm" type="button">
          <span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
          <span>Personalizar Roteiro por Dias</span>
        </button>
      </section>

      <!-- Category Filter Tabs -->
      <section class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto">
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeFilter === 'all' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="all">
          Todos os Locais (${OUTLETS_CATALOG.length})
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeFilter === 'outlet_geral' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="outlet_geral">
          Outlets de Roupas & Tênis
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeFilter === 'desconto_extremo' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="desconto_extremo">
          Preço Baixo Extremo ($5-$35)
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeFilter === 'eletronicos' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="eletronicos">
          Eletrônicos & Tech
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeFilter === 'mercado_vitaminas' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="mercado_vitaminas">
          Mercados & Suprimentos
        </button>
      </section>

      <!-- Strategy Banner: 5 Regras de Ouro -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30">
        <div class="flex items-center gap-2 mb-3">
          <span class="material-symbols-outlined text-primary text-[22px]">lightbulb</span>
          <h2 class="text-sm font-bold uppercase tracking-wider text-on-surface">
            5 Regras de Ouro para Compras Baratas em Orlando
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-on-surface-variant">
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">1. Horário Estratégico</strong>
            <p>Vá aos Outlets e à Ross sempre pela manhã (abrem às 08h30-10h). À tarde, as lojas ficam desorganizadas e as filas de provador passam de 40 min.</p>
          </div>
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">2. Cupons VIP Simon</strong>
            <p>Cadastre-se no site da Simon Malls antes da viagem. No caixa de marcas como Nike, Tommy e Polo Ralph, mostre o cupom digital para ganhar +15% a +25% de desconto.</p>
          </div>
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">3. Eletrônicos Open-Box</strong>
            <p>Na Best Buy, pergunte ou filtre por itens "Open-Box". São computadores, fones e câmeras devolvidos intactos por americanos com garantia original e 20%-35% de desconto.</p>
          </div>
        </div>
      </section>

      <!-- Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        ${cardsHtml}
      </section>
    </div>
  `;
}
