import { diningService } from '../services/diningService';

export function renderRestaurantDetailsModal(restaurantId: string): string {
  const restaurant = diningService.getRestaurantById(restaurantId);
  if (!restaurant) return '';

  const isFav = diningService.isFavorite(restaurantId);
  const evidences = diningService.getEvidencesForRestaurant(restaurantId);
  const sources = restaurant.source_ids
    .map(id => diningService.getSourceById(id))
    .filter(Boolean);

  // Status Operacional Badge
  let statusBadge = '';
  let statusAlert = '';
  if (restaurant.operational_status === 'confirmed') {
    statusBadge = '<span class="text-xs px-2 py-0.5 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold">Informação Operacional Confirmada</span>';
  } else if (restaurant.operational_status === 'reported_closed') {
    statusBadge = '<span class="text-xs px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] font-bold">Fechado Permanentemente</span>';
    statusAlert = `
      <div class="p-3 rounded-xl bg-[#ffdad6]/40 border border-[#ba1a1a]/20 flex items-start gap-2.5 text-xs text-[#93000a]">
        <span class="material-symbols-outlined text-[18px] shrink-0">report</span>
        <div>
          <span class="font-bold block">Aviso de Encerramento:</span>
          <span>Este estabelecimento teve seu encerramento reportado em setembro de 2025. Consta neste catálogo apenas como registro histórico editorial. Não é possível adicioná-lo ao roteiro de maio de 2027.</span>
        </div>
      </div>
    `;
  } else {
    statusBadge = '<span class="text-xs px-2 py-0.5 rounded-full bg-[#fef7ed] text-[#8f5700] font-bold">Aguardando Confirmação Operacional</span>';
    statusAlert = `
      <div class="p-3 rounded-xl bg-[#fef7ed] border border-[#ffdeaa] flex items-start gap-2.5 text-xs text-[#5f4100]">
        <span class="material-symbols-outlined text-[18px] shrink-0">info</span>
        <div>
          <span class="font-bold block">Informação Editorial vs. Operacional:</span>
          <span>Os dados de atendimento, cardápio e preços são referências editoriais e necessitam de checagem prévia nas fontes oficiais antes da sua visita em maio de 2027. Não garantimos preços fixos ou disponibilidade sem confirmação oficial.</span>
        </div>
      </div>
    `;
  }

  // Tradução do serviço
  const serviceLabels: Record<string, string> = {
    quick_service: 'Balcão / Serviço Rápido (Quick-Service)',
    table_service: 'Serviço de Mesa Tradicional (Table-Service)',
    buffet: 'Buffet Livre / Estilo Familiar',
    kiosk_snack: 'Quiosque de Lanches / Sobremesas',
    bar_lounge: 'Bar e Lounge',
    fine_dining: 'Alta Gastronomia / Experiência Especial'
  };

  // Tradução das refeições
  const mealLabels: Record<string, string> = {
    breakfast: 'Café da Manhã',
    lunch: 'Almoço',
    dinner: 'Jantar',
    snack: 'Lanches / Sobremesas'
  };

  // Localização formatada
  const locationText = restaurant.park
    ? `${restaurant.park}${restaurant.park_area ? ` (${restaurant.park_area})` : ''}`
    : restaurant.resort
    ? `Hotel Resort: ${restaurant.resort}`
    : restaurant.shopping_center
    ? `Centro Comercial: ${restaurant.shopping_center}`
    : restaurant.location_type === 'disney_springs'
    ? 'Disney Springs'
    : restaurant.location_type === 'citywalk'
    ? 'Universal CityWalk'
    : 'Fora dos Parques (Orlando & Região)';

  return `
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh] animate-fade-in">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-headline-sm">
              <span class="material-symbols-outlined text-[22px]">restaurant</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="font-headline-sm text-base font-bold text-on-surface">
                  ${restaurant.name}
                </h2>
                ${restaurant.price_category ? `<span class="font-label-xs-mono text-xs px-1.5 py-0.2 rounded bg-surface-container font-bold text-outline">${restaurant.price_category}</span>` : ''}
              </div>
              <span class="text-xs text-outline font-medium">${locationText}</span>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button 
              type="button" 
              class="btn-toggle-dining-favorite p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors" 
              data-id="${restaurant.restaurant_id}" 
              title="${isFav ? 'Remover dos favoritos' : 'Favoritar este restaurante'}"
            >
              <span class="material-symbols-outlined text-[20px] ${isFav ? 'text-[#e53935] fill-1' : ''}">
                ${isFav ? 'favorite' : 'favorite_border'}
              </span>
            </button>
            <button id="btn-close-modal" class="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Alertas de Status -->
          <div class="flex items-center justify-between flex-wrap gap-2">
            ${statusBadge}
            ${restaurant.last_verified_at ? `<span class="text-[11px] text-outline font-label-xs-mono">Última checagem: ${restaurant.last_verified_at}</span>` : '<span class="text-[11px] text-outline">Verificação de 2027 pendente</span>'}
          </div>

          ${statusAlert}

          <!-- Descrição Principal -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1.5">
            <h3 class="font-bold text-xs text-on-surface">Sobre o Restaurante</h3>
            <p class="text-on-surface-variant leading-relaxed">
              ${restaurant.short_description}
            </p>
            ${restaurant.tips ? `
              <div class="pt-2 border-t border-outline-variant/15 flex items-start gap-1.5 text-primary">
                <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5">tips_and_updates</span>
                <span class="font-medium text-[11px]">${restaurant.tips}</span>
              </div>
            ` : ''}
          </div>

          <!-- Grade de Informações Operacionais -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- Tipo de Serviço -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Tipo de Serviço</span>
              <span class="font-semibold text-on-surface">${serviceLabels[restaurant.service_type] || restaurant.service_type}</span>
            </div>

            <!-- Culinária -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Culinária</span>
              <span class="font-semibold text-on-surface">${restaurant.cuisine_types.join(', ')}</span>
            </div>

            <!-- Refeições Servidas -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Refeições Servidas</span>
              <span class="font-semibold text-on-surface">${restaurant.meal_types.map(m => mealLabels[m] || m).join(', ')}</span>
            </div>

            <!-- Faixa de Preço -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Faixa de Preço Estimada</span>
              <span class="font-semibold text-on-surface">${restaurant.price_category ? `${restaurant.price_category} (${restaurant.price_category === '$' ? 'Econômico' : restaurant.price_category === '$$' ? 'Moderado' : restaurant.price_category === '$$$' ? 'Superior' : 'Luxo'})` : 'Não confirmada oficialmente'}</span>
            </div>
          </div>

          <!-- Reservas & Mobile Order -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <h3 class="font-bold text-xs text-on-surface flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-primary">event_available</span>
              <span>Procedimento de Reserva & Pedido Móvel</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant">
              <div>
                <span class="text-outline">Reserva de Mesa: </span>
                <span class="font-semibold text-on-surface">
                  ${restaurant.reservation_required ? 'Obrigatória com antecedência' : restaurant.reservation_recommended ? 'Altamente Recomendada' : 'Não exigida / Ordem de chegada'}
                </span>
              </div>
              <div>
                <span class="text-outline">Mobile Order (App Oficial): </span>
                <span class="font-semibold text-on-surface">${restaurant.mobile_order_available ? 'Disponível no App oficial' : 'Não se aplica / No balcão'}</span>
              </div>
            </div>
            ${restaurant.reservation_url ? `
              <div class="pt-1">
                <a href="${restaurant.reservation_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
                  <span>Página Oficial de Reservas</span>
                  <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            ` : ''}
          </div>

          <!-- Personagens Disney / Universal -->
          ${restaurant.character_dining ? `
            <div class="p-3.5 rounded-xl bg-[#f3e5f5] border border-[#e1bee7] space-y-1.5">
              <h3 class="font-bold text-xs text-[#4a148c] flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px]">sentiment_very_satisfied</span>
                <span>Refeição com Personagens (Character Dining)</span>
              </h3>
              <p class="text-[#4a148c] leading-relaxed">
                <span class="font-semibold">Personagens frequentes:</span> ${restaurant.characters.join(', ') || 'Personagens clássicos'}.
              </p>
              <p class="text-[11px] text-[#6a1b9a]">
                *A aparição exata de personagens pode sofrer alterações pela operadora sem aviso prévio. Recomenda-se reservar com exatamente 60 dias de antecedência às 06:00 EST.
              </p>
            </div>
          ` : ''}

          <!-- Restrições Alimentares e Acessibilidade -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Opções Dietéticas / Restrições</span>
              <span class="font-medium text-on-surface">${restaurant.dietary_options.length > 0 ? restaurant.dietary_options.join(', ') : 'Consulte no balcão de atendimento'}</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Acessibilidade</span>
              <span class="font-medium text-on-surface">${restaurant.accessibility_information || 'Acesso padrão conforme normas ADA nos parques de Orlando'}</span>
            </div>
          </div>

          <!-- Fontes Editoriais Consultadas (Vai pra Disney?) -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <h3 class="font-bold text-xs text-on-surface flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-primary">menu_book</span>
              <span>Referências Editoriais (Vai pra Disney?)</span>
            </h3>
            <p class="text-[11px] text-outline">
              Informações qualitativas, dicas e avaliações baseadas no portal editorial brasileiro especializado:
            </p>
            <div class="space-y-1.5">
              ${sources.map(src => `
                <div class="flex items-center justify-between p-2 rounded-lg bg-surface border border-outline-variant/15">
                  <div class="truncate pr-2">
                    <span class="font-semibold text-on-surface block truncate">${src?.article_title}</span>
                    <span class="text-[10px] text-outline">Fonte: ${src?.publisher}</span>
                  </div>
                  <a href="${src?.canonical_url}" target="_blank" rel="noopener noreferrer" class="shrink-0 text-primary hover:underline font-semibold text-[11px] flex items-center gap-0.5">
                    <span>Ler avaliação original</span>
                    <span class="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                </div>
              `).join('')}
            </div>
            ${evidences.length > 0 ? `
              <div class="pt-1.5 space-y-1">
                <span class="text-[10px] font-bold text-outline uppercase tracking-wider block">Notas e Fatos Extraídos:</span>
                ${evidences.map(ev => `
                  <div class="p-2 rounded bg-surface border border-outline-variant/15 text-[11px] text-on-surface-variant italic leading-relaxed">
                    "${ev.source_excerpt_short}"
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
            Fechar
          </button>

          ${restaurant.visibility === 'active' ? `
            <button 
              type="button" 
              class="btn-add-restaurant-to-itinerary px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-2xs transition-colors flex items-center gap-1.5"
              data-id="${restaurant.restaurant_id}"
              data-name="${restaurant.name}"
            >
              <span class="material-symbols-outlined text-[16px]">calendar_add_on</span>
              <span>Adicionar ao Roteiro</span>
            </button>
          ` : `
            <span class="text-xs text-outline italic">Indisponível para adicionar ao roteiro</span>
          `}
        </div>
      </div>
    </div>
  `;
}
