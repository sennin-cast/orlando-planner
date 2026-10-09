import { DiningFilterCriteria } from '../types/dining';
import { diningService } from '../services/diningService';
import { ItineraryDay } from '../types/itinerary';

export function renderDiningView(
  criteria: DiningFilterCriteria,
  itinerary: ItineraryDay[],
  selectedDayForSuggestions: string | null = null,
  showAdminPanel: boolean = false
): string {
  const allActive = diningService.getAllRestaurants(false);
  const filtered = diningService.filterRestaurants(criteria);
  const favorites = diningService.getFavorites();
  const auditSummary = diningService.getAuditSummary();

  // Categorias em formato de pills horizontais
  const categories: { id: DiningFilterCriteria['categoryTab']; label: string; icon: string; count: number }[] = [
    { id: 'all', label: 'Todos', icon: 'restaurant', count: allActive.length },
    { id: 'in_park', label: 'Dentro dos Parques', icon: 'park', count: allActive.filter(r => r.location_type === 'in_park').length },
    { id: 'disney_springs', label: 'Disney Springs', icon: 'storefront', count: allActive.filter(r => r.location_type === 'disney_springs').length },
    { id: 'citywalk', label: 'CityWalk', icon: 'nightlife', count: allActive.filter(r => r.location_type === 'citywalk').length },
    { id: 'resort_hotel', label: 'Hotéis e Resorts', icon: 'hotel', count: allActive.filter(r => r.location_type === 'resort_hotel').length },
    { id: 'off_park', label: 'Fora dos Parques', icon: 'near_me', count: allActive.filter(r => r.location_type === 'off_park').length },
    { id: 'economic', label: 'Econômicos', icon: 'savings', count: allActive.filter(r => r.price_category === '$' || r.service_type === 'quick_service').length },
    { id: 'character_dining', label: 'Com Personagens', icon: 'sentiment_very_satisfied', count: allActive.filter(r => r.character_dining).length },
    { id: 'coffee_dessert', label: 'Cafés & Sobremesas', icon: 'bakery_dining', count: allActive.filter(r => r.meal_types.includes('snack') || r.cuisine_types.some(c => /doces|café|padaria|sorvetes/i.test(c))).length },
    { id: 'favorites', label: 'Favoritos', icon: 'favorite', count: favorites.length }
  ];

  const categoryPillsHtml = categories.map(cat => {
    const isActive = criteria.categoryTab === cat.id;
    const activeClass = isActive
      ? 'bg-primary text-on-primary shadow-xs font-semibold'
      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface';

    return `
      <button 
        type="button" 
        class="btn-dining-cat-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shrink-0 ${activeClass}" 
        data-category="${cat.id}"
      >
        <span class="material-symbols-outlined text-[15px]">${cat.icon}</span>
        <span>${cat.label}</span>
        <span class="text-[10px] opacity-75 font-label-xs-mono">(${cat.count})</span>
      </button>
    `;
  }).join('');

  // Sugestões para o dia selecionado (se ativo)
  let suggestionsHtml = '';
  if (selectedDayForSuggestions) {
    const selectedDayObj = itinerary.find(d => d.date === selectedDayForSuggestions);
    const dayLabel = selectedDayObj
      ? `${selectedDayObj.dayOfWeek}, ${selectedDayObj.date.substring(5)} (${selectedDayObj.title})`
      : selectedDayForSuggestions;

    const parkTarget = selectedDayObj?.parkId ? selectedDayObj.title : (selectedDayObj?.activityType === 'shopping' ? 'Compras' : 'Descanso');
    const daySuggestions = diningService.getSuggestionsForDay(selectedDayForSuggestions, parkTarget);

    const cardsSug = daySuggestions.map(sug => {
      const rest = diningService.getRestaurantById(sug.restaurant_id);
      return `
        <div class="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between gap-2 shadow-2xs">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[11px] font-bold text-primary block">${sug.restaurant_name}</span>
              <span class="text-[10px] text-outline">${rest?.park || rest?.location_type === 'disney_springs' ? 'Disney Springs' : rest?.location_type === 'citywalk' ? 'CityWalk' : 'Fora dos Parques'} • ${rest?.service_type === 'quick_service' ? 'Serviço Rápido' : 'Serviço de Mesa'}</span>
            </div>
            ${sug.requires_advance_reservation ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold shrink-0">Reserva 60d</span>' : '<span class="text-[9px] px-1.5 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-semibold shrink-0">Sem Reserva</span>'}
          </div>
          <p class="text-[11px] text-on-surface-variant leading-relaxed">
            ${sug.reason_summary}
          </p>
          <div class="flex items-center justify-between pt-1 border-t border-outline-variant/15 text-[11px]">
            <span class="text-[10px] text-outline font-label-xs-mono">Conveniência: ${sug.convenience_score}%</span>
            <button 
              type="button" 
              class="btn-quick-add-to-day text-primary font-semibold hover:underline flex items-center gap-0.5" 
              data-restaurant-id="${sug.restaurant_id}" 
              data-date="${selectedDayForSuggestions}"
            >
              <span>Agendar</span>
              <span class="material-symbols-outlined text-[13px]">add_circle</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    suggestionsHtml = `
      <section class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] text-primary">lightbulb</span>
            <div>
              <h3 class="font-bold text-sm text-on-surface">Sugestões de Onde Comer para: ${dayLabel}</h3>
              <p class="text-[11px] text-outline">Recomendações baseadas na localização planejada, tempo de deslocamento e perfil do dia.</p>
            </div>
          </div>
          <button type="button" id="btn-close-day-suggestions" class="p-1 rounded-lg text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          ${cardsSug || '<p class="text-xs text-outline col-span-4 py-2">Nenhuma sugestão específica encontrada para este dia.</p>'}
        </div>
      </section>
    `;
  }

  // Cards de Restaurantes
  const restaurantCardsHtml = filtered.map(r => {
    const isFav = favorites.includes(r.restaurant_id);

    // Badges de Status Operacional
    let statusBadge = '';
    if (r.operational_status === 'confirmed') {
      statusBadge = '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-semibold">Confirmado</span>';
    } else if (r.operational_status === 'reported_closed') {
      statusBadge = '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold">Fechado (Histórico)</span>';
    } else {
      statusBadge = '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-semibold" title="Aguardando confirmação operacional oficial para 2027">Pendente de Confirmação</span>';
    }

    // Localização
    const locationStr = r.park || r.resort || r.shopping_center || (r.location_type === 'disney_springs' ? 'Disney Springs' : r.location_type === 'citywalk' ? 'Universal CityWalk' : 'Fora dos Parques');

    // Serviço legível
    const serviceMap: Record<string, string> = {
      quick_service: 'Balcão / Rápido',
      table_service: 'Serviço de Mesa',
      buffet: 'Buffet',
      kiosk_snack: 'Quiosque / Snack',
      bar_lounge: 'Bar / Lounge',
      fine_dining: 'Alta Gastronomia'
    };

    return `
      <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-3 hover:border-primary/40 transition-all" data-id="${r.restaurant_id}">
        <!-- Top: Nome, Categoria e Favorito -->
        <div>
          <div class="flex items-start justify-between gap-2 mb-1">
            <div>
              <h3 class="font-headline-sm text-[15px] font-bold text-on-surface leading-tight hover:text-primary cursor-pointer btn-open-restaurant-details" data-id="${r.restaurant_id}">
                ${r.name}
              </h3>
              <span class="text-[11px] text-outline font-medium block">
                ${locationStr}
              </span>
            </div>
            <button 
              type="button" 
              class="btn-toggle-dining-favorite p-1 rounded-lg transition-colors hover:bg-surface-container" 
              data-id="${r.restaurant_id}" 
              title="${isFav ? 'Remover dos favoritos' : 'Favoritar restaurante'}"
            >
              <span class="material-symbols-outlined text-[19px] ${isFav ? 'text-[#e53935] fill-1' : 'text-outline-variant'}">
                ${isFav ? 'favorite' : 'favorite_border'}
              </span>
            </button>
          </div>

          <!-- Tags strip -->
          <div class="flex flex-wrap items-center gap-1.5 pt-1">
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
              ${serviceMap[r.service_type] || r.service_type}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs-mono font-bold" title="${r.price_category ? `Faixa de preço: ${r.price_category}` : 'Faixa de preço não confirmada'}">
              ${r.price_category || 'Preço N/D'}
            </span>
            ${r.character_dining ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ede7f6] text-[#512da8] font-bold flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">sentiment_very_satisfied</span> Personagens</span>' : ''}
            ${r.reservation_required ? '<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold">Reserva Obrigatória</span>' : ''}
            ${statusBadge}
          </div>

          <!-- Culinária -->
          <p class="text-[11px] text-on-surface-variant font-medium pt-2 line-clamp-1">
            <span class="text-outline">Cozinha:</span> ${r.cuisine_types.join(', ')}
          </p>

          <!-- Resumo Curto -->
          <p class="text-[11px] text-outline pt-1 line-clamp-2 leading-relaxed">
            ${r.short_description}
          </p>
        </div>

        <!-- Rodapé de Ações do Card -->
        <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between gap-1">
          <button 
            type="button" 
            class="btn-open-restaurant-details text-[11px] font-semibold text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1" 
            data-id="${r.restaurant_id}"
          >
            <span class="material-symbols-outlined text-[14px]">info</span>
            <span>Detalhes</span>
          </button>

          <button 
            type="button" 
            class="btn-add-restaurant-to-itinerary text-[11px] font-semibold bg-primary text-on-primary hover:bg-primary-container px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-2xs" 
            data-id="${r.restaurant_id}"
            data-name="${r.name}"
          >
            <span class="material-symbols-outlined text-[14px]">calendar_add_on</span>
            <span>Adicionar ao Roteiro</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Painel Administrativo de Auditoria (Toggleable)
  let adminSectionHtml = '';
  if (showAdminPanel) {
    adminSectionHtml = `
      <section class="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-4 shadow-sm animate-fade-in">
        <div class="flex items-center justify-between border-b border-outline-variant/20 pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[22px] text-primary">admin_panel_settings</span>
            <div>
              <h2 class="font-bold text-sm text-on-surface">Painel Administrativo & Auditoria de Fontes</h2>
              <p class="text-[11px] text-outline">Monitoramento de URLs descobertas, integridade de extração e governança de dados operacionais.</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-export-catalog-csv" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">download</span> CSV Catálogo
            </button>
            <button type="button" id="btn-export-catalog-json" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">code</span> JSON Catálogo
            </button>
            <button type="button" id="btn-export-meals-csv" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">table_view</span> CSV Refeições
            </button>
          </div>
        </div>

        <!-- Métricas Administrativas -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Fontes Registradas</span>
            <span class="font-label-xs-mono text-base font-bold text-primary">${auditSummary.sources_registered}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">URLs Descobertas</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${auditSummary.discovered_urls_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Artigos Processados</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${auditSummary.articles_processed}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Erros de Coleta</span>
            <span class="font-label-xs-mono text-base font-bold text-[#1b6443]">${auditSummary.errors_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Restaurantes</span>
            <span class="font-label-xs-mono text-base font-bold text-primary">${auditSummary.restaurants_identified}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Duplicatas</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${auditSummary.duplicates_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Aguardando Revisão</span>
            <span class="font-label-xs-mono text-base font-bold text-[#8f5700]">${auditSummary.pending_review_count}</span>
          </div>
        </div>

        <!-- Notas de Versão e Diferenças -->
        <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1 text-xs">
          <span class="font-semibold text-on-surface block">Relatório de Diferenças e Auditoria da Versão (${auditSummary.version} — ${auditSummary.last_execution_date}):</span>
          <ul class="list-disc list-inside text-outline space-y-0.5 text-[11px]">
            ${auditSummary.version_diff_notes.map((note: string) => `<li>${note}</li>`).join('')}
          </ul>
        </div>
      </section>
    `;
  }

  // Lista de parques para o select de filtro
  const parkOptions = [
    { id: 'all', label: 'Todos os Parques' },
    { id: 'Magic Kingdom', label: 'Magic Kingdom' },
    { id: 'EPCOT', label: 'EPCOT' },
    { id: "Disney's Hollywood Studios", label: 'Hollywood Studios' },
    { id: "Disney's Animal Kingdom", label: 'Animal Kingdom' },
    { id: 'Universal Studios Florida', label: 'Universal Studios' },
    { id: "Universal's Islands of Adventure", label: 'Islands of Adventure' },
    { id: 'Universal Epic Universe', label: 'Epic Universe' },
    { id: 'Universal Volcano Bay', label: 'Volcano Bay' },
    { id: 'SeaWorld Orlando', label: 'SeaWorld Orlando' },
    { id: 'Busch Gardens Tampa Bay', label: 'Busch Gardens' }
  ].map(p => `<option value="${p.id}" ${criteria.park === p.id ? 'selected' : ''}>${p.label}</option>`).join('');

  // Lista de dias do roteiro para o seletor de sugestões
  const daySelectOptions = itinerary.map(d => {
    return `<option value="${d.date}" ${selectedDayForSuggestions === d.date ? 'selected' : ''}>${d.date.substring(5)} (${d.dayOfWeek}) — ${d.title}</option>`;
  }).join('');

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Top Title & Controls Header -->
      <section class="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Onde Comer</h1>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold font-label-xs-mono">
              ${filtered.length} Restaurantes
            </span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Encontre restaurantes e planeje suas refeições durante a viagem.
          </p>
        </div>

        <!-- Quick Top Action Buttons -->
        <div class="flex flex-wrap items-center gap-2">
          <!-- Selector de Sugestões por Dia -->
          <div class="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs">
            <span class="material-symbols-outlined text-[16px] text-primary pl-1.5">auto_awesome</span>
            <select id="select-suggest-day" class="h-8 bg-transparent text-xs font-semibold text-on-surface focus:outline-none pr-2">
              <option value="">Sugestões para o dia...</option>
              ${daySelectOptions}
            </select>
          </div>

          <!-- Botão Painel Administrativo -->
          <button 
            type="button" 
            id="btn-toggle-admin-panel" 
            class="px-3 py-2 rounded-xl text-xs font-semibold border border-outline-variant/30 flex items-center gap-1.5 transition-colors ${showAdminPanel ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface hover:bg-surface-container'}"
          >
            <span class="material-symbols-outlined text-[16px]">tune</span>
            <span>Auditoria & Fontes</span>
          </button>
        </div>
      </section>

      <!-- Painel Administrativo (se expandido) -->
      ${adminSectionHtml}

      <!-- Painel de Sugestões do Dia (se selecionado) -->
      ${suggestionsHtml}

      <!-- Barra de Categorias Principais (Pills) -->
      <section class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        ${categoryPillsHtml}
      </section>

      <!-- Search & Filters Container -->
      <section class="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 space-y-3 shadow-sm">
        <!-- Search bar -->
        <div class="relative w-full">
          <span class="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
          <input 
            type="text" 
            id="input-dining-search" 
            value="${criteria.searchQuery || ''}" 
            placeholder="Pesquisar por nome, culinária, parque, personagens ou palavras-chave..." 
            class="w-full h-10 pl-9 pr-10 rounded-xl border border-outline-variant/40 bg-surface text-on-surface text-xs focus:border-primary focus:ring-1 focus:ring-primary font-medium"
          />
          ${criteria.searchQuery ? `
            <button type="button" id="btn-clear-dining-search" class="absolute right-3 top-2.5 text-outline hover:text-on-surface">
              <span class="material-symbols-outlined text-[16px]">close</span>
            </button>
          ` : ''}
        </div>

        <!-- Filter Selects Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          <!-- Localização -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Localização</label>
            <select id="filter-dining-location-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${criteria.locationType === 'all' ? 'selected' : ''}>Todas</option>
              <option value="in_park" ${criteria.locationType === 'in_park' ? 'selected' : ''}>Dentro do Parque</option>
              <option value="disney_springs" ${criteria.locationType === 'disney_springs' ? 'selected' : ''}>Disney Springs</option>
              <option value="citywalk" ${criteria.locationType === 'citywalk' ? 'selected' : ''}>CityWalk</option>
              <option value="resort_hotel" ${criteria.locationType === 'resort_hotel' ? 'selected' : ''}>Hotéis & Resorts</option>
              <option value="off_park" ${criteria.locationType === 'off_park' ? 'selected' : ''}>Fora dos Parques</option>
            </select>
          </div>

          <!-- Parque -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Parque</label>
            <select id="filter-dining-park" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              ${parkOptions}
            </select>
          </div>

          <!-- Tipo de Refeição -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Refeição</label>
            <select id="filter-dining-meal-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${criteria.mealType === 'all' ? 'selected' : ''}>Todas</option>
              <option value="breakfast" ${criteria.mealType === 'breakfast' ? 'selected' : ''}>Café da Manhã</option>
              <option value="lunch" ${criteria.mealType === 'lunch' ? 'selected' : ''}>Almoço</option>
              <option value="dinner" ${criteria.mealType === 'dinner' ? 'selected' : ''}>Jantar</option>
              <option value="snack" ${criteria.mealType === 'snack' ? 'selected' : ''}>Lanches / Sobremesas</option>
            </select>
          </div>

          <!-- Tipo de Restaurante -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Tipo de Serviço</label>
            <select id="filter-dining-service-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${criteria.serviceType === 'all' ? 'selected' : ''}>Todos</option>
              <option value="quick_service" ${criteria.serviceType === 'quick_service' ? 'selected' : ''}>Balcão / Rápido</option>
              <option value="table_service" ${criteria.serviceType === 'table_service' ? 'selected' : ''}>Mesa (Table Service)</option>
              <option value="buffet" ${criteria.serviceType === 'buffet' ? 'selected' : ''}>Buffet</option>
              <option value="kiosk_snack" ${criteria.serviceType === 'kiosk_snack' ? 'selected' : ''}>Quiosque</option>
              <option value="bar_lounge" ${criteria.serviceType === 'bar_lounge' ? 'selected' : ''}>Bar / Lounge</option>
              <option value="fine_dining" ${criteria.serviceType === 'fine_dining' ? 'selected' : ''}>Alta Gastronomia</option>
            </select>
          </div>

          <!-- Faixa de Preço -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Faixa de Preço</label>
            <select id="filter-dining-price-category" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${criteria.priceCategory === 'all' ? 'selected' : ''}>Todas</option>
              <option value="$" ${criteria.priceCategory === '$' ? 'selected' : ''}>$ (Até $15 - Econômico)</option>
              <option value="$$" ${criteria.priceCategory === '$$' ? 'selected' : ''}>$$ ($15 a $35 - Moderado)</option>
              <option value="$$$" ${criteria.priceCategory === '$$$' ? 'selected' : ''}>$$$ ($35 a $60 - Superior)</option>
              <option value="$$$$" ${criteria.priceCategory === '$$$$' ? 'selected' : ''}>$$$$ (Acima de $60 - Luxo)</option>
            </select>
          </div>

          <!-- Status Operacional -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Status Operacional</label>
            <select id="filter-dining-confirmed-only" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="false" ${!criteria.confirmedOnly ? 'selected' : ''}>Todos os Status</option>
              <option value="true" ${criteria.confirmedOnly ? 'selected' : ''}>Apenas Confirmados</option>
            </select>
          </div>
        </div>

        <!-- Checkbox Filters Strip -->
        <div class="flex flex-wrap items-center gap-4 pt-2 border-t border-outline-variant/20 text-xs text-on-surface">
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-character-dining" class="w-4 h-4 rounded text-primary" ${criteria.characterDiningOnly ? 'checked' : ''} />
            <span>Refeições com Personagens</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-reservation-required" class="w-4 h-4 rounded text-primary" ${criteria.reservationRequiredOnly ? 'checked' : ''} />
            <span>Exige Reserva</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-vegetarian-options" class="w-4 h-4 rounded text-primary" ${criteria.vegetarianOnly ? 'checked' : ''} />
            <span>Opções Vegetarianas / Plant-Based</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-favorites-only" class="w-4 h-4 rounded text-primary" ${criteria.favoritesOnly ? 'checked' : ''} />
            <span>Apenas Favoritos</span>
          </label>

          <button type="button" id="btn-reset-dining-filters" class="ml-auto text-xs text-primary hover:underline font-semibold flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">refresh</span>
            <span>Limpar Filtros</span>
          </button>
        </div>
      </section>

      <!-- Grid de Restaurantes -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md">
        ${restaurantCardsHtml || `
          <div class="col-span-full py-12 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 space-y-2">
            <span class="material-symbols-outlined text-[36px] text-outline">search_off</span>
            <h3 class="font-bold text-sm text-on-surface">Nenhum restaurante encontrado com os filtros atuais.</h3>
            <p class="text-xs text-outline">Tente ajustar a busca textual ou selecione outra categoria.</p>
          </div>
        `}
      </section>
    </div>
  `;
}
