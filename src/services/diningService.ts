import {
  Restaurant,
  EditorialSource,
  DiningEvidence,
  ScheduledMeal,
  DiningFilterCriteria,
  DiningDaySuggestion,
  DiningAuditSummary,
  DiningCatalogData,
  MealType
} from '../types/dining';
import {
  DINING_CATALOG,
  EDITORIAL_SOURCES,
  DINING_EVIDENCES,
  DINING_CATALOG_METADATA
} from '../data/diningCatalog';

const FAVORITES_STORAGE_KEY = 'orlando_planner_dining_favorites';
const SCHEDULED_MEALS_STORAGE_KEY = 'orlando_planner_scheduled_meals';

class DiningService {
  private restaurants: Restaurant[] = [...DINING_CATALOG];
  private sources: EditorialSource[] = [...EDITORIAL_SOURCES];
  private evidences: DiningEvidence[] = [...DINING_EVIDENCES];
  private memoryStore = new Map<string, string>();

  constructor() {
    this.ensureInitialized();
  }

  private getItem(key: string): string | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        return localStorage.getItem(key);
      } catch {
        return this.memoryStore.get(key) || null;
      }
    }
    return this.memoryStore.get(key) || null;
  }

  private setItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
        return;
      } catch {
        // Fallback
      }
    }
    this.memoryStore.set(key, value);
  }

  public clearStorage(): void {
    this.memoryStore.clear();
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        localStorage.removeItem(FAVORITES_STORAGE_KEY);
        localStorage.removeItem(SCHEDULED_MEALS_STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  }

  private ensureInitialized(): void {
    if (!this.getItem(FAVORITES_STORAGE_KEY)) {
      this.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([]));
    }
    if (!this.getItem(SCHEDULED_MEALS_STORAGE_KEY)) {
      this.setItem(SCHEDULED_MEALS_STORAGE_KEY, JSON.stringify([]));
    }
  }

  // ==========================================
  // CONSULTA E FILTRAGEM DE RESTAURANTES
  // ==========================================

  public getAllRestaurants(includeHistorical: boolean = false): Restaurant[] {
    if (includeHistorical) {
      return [...this.restaurants];
    }
    return this.restaurants.filter(r => r.visibility === 'active');
  }

  public getRestaurantById(id: string): Restaurant | undefined {
    return this.restaurants.find(r => r.restaurant_id === id);
  }

  public getSources(): EditorialSource[] {
    return [...this.sources];
  }

  public getSourceById(id: string): EditorialSource | undefined {
    return this.sources.find(s => s.source_id === id);
  }

  public getEvidencesForRestaurant(restaurantId: string): DiningEvidence[] {
    return this.evidences.filter(e => e.restaurant_id === restaurantId);
  }

  public filterRestaurants(criteria: Partial<DiningFilterCriteria>): Restaurant[] {
    const favorites = this.getFavorites();

    return this.restaurants.filter(r => {
      // 1. Visibilidade: ocultar registros puramente históricos a menos que pesquisados explicitamente
      if (r.visibility === 'historical_only' && !criteria.searchQuery?.trim()) {
        return false;
      }

      // 2. Busca textual
      if (criteria.searchQuery && criteria.searchQuery.trim() !== '') {
        const query = criteria.searchQuery.toLowerCase().trim();
        const matchesName = r.name.toLowerCase().includes(query);
        const matchesPark = r.park?.toLowerCase().includes(query) ?? false;
        const matchesArea = r.park_area?.toLowerCase().includes(query) ?? false;
        const matchesResort = r.resort?.toLowerCase().includes(query) ?? false;
        const matchesCuisine = r.cuisine_types.some(c => c.toLowerCase().includes(query));
        const matchesDesc = r.short_description.toLowerCase().includes(query);
        const matchesCharacters = r.characters.some(ch => ch.toLowerCase().includes(query));

        if (!matchesName && !matchesPark && !matchesArea && !matchesResort && !matchesCuisine && !matchesDesc && !matchesCharacters) {
          return false;
        }
      }

      // 3. Categoria principal (Tabs)
      if (criteria.categoryTab && criteria.categoryTab !== 'all') {
        switch (criteria.categoryTab) {
          case 'in_park':
            if (r.location_type !== 'in_park') return false;
            break;
          case 'disney_springs':
            if (r.location_type !== 'disney_springs') return false;
            break;
          case 'citywalk':
            if (r.location_type !== 'citywalk') return false;
            break;
          case 'resort_hotel':
            if (r.location_type !== 'resort_hotel') return false;
            break;
          case 'off_park':
            if (r.location_type !== 'off_park') return false;
            break;
          case 'economic':
            // Faixa $ ou Fast Food econômico
            if (r.price_category !== '$' && r.service_type !== 'quick_service') return false;
            break;
          case 'character_dining':
            if (!r.character_dining) return false;
            break;
          case 'coffee_dessert':
            const isSnack = r.meal_types.includes('snack') || r.service_type === 'kiosk_snack';
            const isBakeryOrSweet = r.cuisine_types.some(c =>
              /doces|café|padaria|sorvetes|confeitaria|lanches/i.test(c)
            );
            if (!isSnack && !isBakeryOrSweet) return false;
            break;
          case 'favorites':
            if (!favorites.includes(r.restaurant_id)) return false;
            break;
        }
      }

      // 4. Filtro por tipo de localização específico
      if (criteria.locationType && criteria.locationType !== 'all') {
        if (r.location_type !== criteria.locationType) return false;
      }

      // 5. Filtro por Parque
      if (criteria.park && criteria.park !== 'all') {
        if (r.park?.toLowerCase() !== criteria.park.toLowerCase()) return false;
      }

      // 6. Tipo de refeição
      if (criteria.mealType && criteria.mealType !== 'all') {
        if (!r.meal_types.includes(criteria.mealType)) return false;
      }

      // 7. Tipo de serviço
      if (criteria.serviceType && criteria.serviceType !== 'all') {
        if (r.service_type !== criteria.serviceType) return false;
      }

      // 8. Faixa de preço
      if (criteria.priceCategory && criteria.priceCategory !== 'all') {
        if (r.price_category !== criteria.priceCategory) return false;
      }

      // 9. Tipo de Cozinha
      if (criteria.cuisine && criteria.cuisine !== 'all') {
        if (!r.cuisine_types.some(c => c.toLowerCase() === criteria.cuisine?.toLowerCase())) return false;
      }

      // 10. Refeição com personagens apenas
      if (criteria.characterDiningOnly && !r.character_dining) {
        return false;
      }

      // 11. Reserva obrigatória
      if (criteria.reservationRequiredOnly && !r.reservation_required) {
        return false;
      }

      // 12. Opções vegetarianas
      if (criteria.vegetarianOnly) {
        const hasVegetarian = r.dietary_options.some(d =>
          /vegetariano|vegano|plant-based/i.test(d)
        );
        if (!hasVegetarian) return false;
      }

      // 13. Apenas com status operacional confirmado
      if (criteria.confirmedOnly && r.operational_status !== 'confirmed') {
        return false;
      }

      // 14. Favoritos apenas
      if (criteria.favoritesOnly && !favorites.includes(r.restaurant_id)) {
        return false;
      }

      return true;
    });
  }

  // ==========================================
  // GESTÃO DE FAVORITOS (LOCALSTORAGE + MEMORY FALLBACK)
  // ==========================================

  public getFavorites(): string[] {
    try {
      const data = this.getItem(FAVORITES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public isFavorite(restaurantId: string): boolean {
    return this.getFavorites().includes(restaurantId);
  }

  public toggleFavorite(restaurantId: string): boolean {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(restaurantId);
    let isNowFavorite = false;

    if (index >= 0) {
      favorites.splice(index, 1);
      isNowFavorite = false;
    } else {
      favorites.push(restaurantId);
      isNowFavorite = true;
    }

    try {
      this.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Erro ao salvar favoritos:', err);
    }

    return isNowFavorite;
  }

  // ==========================================
  // REFEIÇÕES AGENDADAS NO ROTEIRO (MEU ROTEIRO)
  // ==========================================

  public getScheduledMeals(tripId?: string): ScheduledMeal[] {
    try {
      const data = this.getItem(SCHEDULED_MEALS_STORAGE_KEY);
      const meals: ScheduledMeal[] = data ? JSON.parse(data) : [];
      if (tripId) {
        return meals.filter(m => m.trip_id === tripId);
      }
      return meals;
    } catch {
      return [];
    }
  }

  public getMealsForDate(dateStr: string, tripId?: string): ScheduledMeal[] {
    const all = this.getScheduledMeals(tripId);
    return all.filter(m => m.visit_date === dateStr);
  }

  public addMeal(mealData: Omit<ScheduledMeal, 'meal_id' | 'created_at'>): ScheduledMeal {
    const meals = this.getScheduledMeals();
    const newMeal: ScheduledMeal = {
      ...mealData,
      meal_id: `meal-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      created_at: new Date().toISOString()
    };

    meals.push(newMeal);

    try {
      this.setItem(SCHEDULED_MEALS_STORAGE_KEY, JSON.stringify(meals));
    } catch (err) {
      console.error('Erro ao salvar refeição agendada:', err);
    }

    return newMeal;
  }

  public updateMeal(mealId: string, updates: Partial<ScheduledMeal>): ScheduledMeal | undefined {
    const meals = this.getScheduledMeals();
    const index = meals.findIndex(m => m.meal_id === mealId);
    if (index === -1) return undefined;

    // Preservar integridade do ID e criação original
    const updated = {
      ...meals[index],
      ...updates,
      meal_id: meals[index].meal_id,
      created_at: meals[index].created_at
    };

    meals[index] = updated;

    try {
      this.setItem(SCHEDULED_MEALS_STORAGE_KEY, JSON.stringify(meals));
    } catch (err) {
      console.error('Erro ao atualizar refeição:', err);
    }

    return updated;
  }

  public removeMeal(mealId: string): boolean {
    const meals = this.getScheduledMeals();
    const filtered = meals.filter(m => m.meal_id !== mealId);
    if (filtered.length === meals.length) return false;

    try {
      this.setItem(SCHEDULED_MEALS_STORAGE_KEY, JSON.stringify(filtered));
      return true;
    } catch (err) {
      console.error('Erro ao remover refeição:', err);
      return false;
    }
  }

  // ==========================================
  // SUGESTÕES CONTEXTUALIZADAS ("SUGESTÕES PARA ESTE DIA")
  // ==========================================

  public getSuggestionsForDay(
    _dateStr: string,
    parkNameOrRegion: string | null,
    targetMealType?: MealType
  ): DiningDaySuggestion[] {
    const suggestions: DiningDaySuggestion[] = [];
    const activeRestaurants = this.getAllRestaurants(false);

    // Mapeamento de proximidade e correspondência
    const normalizedTarget = (parkNameOrRegion || '').toLowerCase().trim();

    // 1. Cenário: Parque Disney
    const isMagicKingdom = normalizedTarget.includes('magic kingdom');
    const isEpcot = normalizedTarget.includes('epcot');
    const isHollywood = normalizedTarget.includes('hollywood studios');
    const isAnimalKingdom = normalizedTarget.includes('animal kingdom');

    // 2. Cenário: Parques Universal
    const isUniversalStudios = normalizedTarget.includes('universal studios');
    const isIslandsOfAdventure = normalizedTarget.includes('islands of adventure');
    const isEpicUniverse = normalizedTarget.includes('epic universe');
    const isVolcanoBay = normalizedTarget.includes('volcano bay');

    // 3. Cenário: Outros Parques
    const isSeaWorld = normalizedTarget.includes('seaworld');
    const isBuschGardens = normalizedTarget.includes('busch gardens');

    // 4. Cenário: Compras ou Descanso
    const isShoppingOrRest =
      normalizedTarget.includes('compras') ||
      normalizedTarget.includes('descanso') ||
      normalizedTarget.includes('chegada') ||
      normalizedTarget.includes('partida') ||
      !parkNameOrRegion;

    for (const rest of activeRestaurants) {
      // Filtrar por tipo de refeição se especificado
      if (targetMealType && !rest.meal_types.includes(targetMealType)) {
        continue;
      }

      let matches = false;
      let reason = '';
      let convenienceScore = 50;

      if (isMagicKingdom && rest.park === 'Magic Kingdom') {
        matches = true;
        convenienceScore = 95;
        if (rest.service_type === 'quick_service') {
          reason = 'Opção de refeição rápida dentro do Magic Kingdom, ideal para manter o fluxo de atrações sem perda de tempo.';
        } else if (rest.character_dining) {
          reason = 'Experiência mágica com personagens dentro do parque (reserva com 60 dias de antecedência altamente recomendada).';
        } else {
          reason = 'Restaurante temático com serviço de mesa excelente para descanso climatizado no Magic Kingdom.';
        }
      } else if (isMagicKingdom && rest.location_type === 'resort_hotel' && rest.resort?.includes('Polynesian')) {
        matches = true;
        convenienceScore = 80;
        reason = 'Apenas uma viagem de monorail do Magic Kingdom; clássico havaiano muito procurado para o jantar.';
      } else if (isEpcot && rest.park === 'EPCOT') {
        matches = true;
        convenienceScore = 95;
        reason = `Destaque gastronômico no World Showcase / Discovery do EPCOT (${rest.cuisine_types.join(', ')}).`;
      } else if (isHollywood && rest.park === "Disney's Hollywood Studios") {
        matches = true;
        convenienceScore = 95;
        reason = 'Restaurante imersivo dentro do Hollywood Studios, perfeito para pausa antes dos shows noturnos.';
      } else if (isAnimalKingdom && rest.park === "Disney's Animal Kingdom") {
        matches = true;
        convenienceScore = 95;
        reason = 'Localizado no Animal Kingdom com sabores autênticos e opções saudáveis e rápidas.';
      } else if (isUniversalStudios && (rest.park === 'Universal Studios Florida' || rest.location_type === 'citywalk')) {
        matches = true;
        convenienceScore = rest.park ? 95 : 85;
        reason = rest.park
          ? 'Localizado dentro do Universal Studios Florida, ideal para refeição temática sem sair da área.'
          : 'No Universal CityWalk, a poucos passos da saída do parque, perfeito para almoço tardio ou jantar.';
      } else if (isIslandsOfAdventure && (rest.park === "Universal's Islands of Adventure" || rest.location_type === 'citywalk')) {
        matches = true;
        convenienceScore = rest.park ? 95 : 85;
        reason = rest.park
          ? 'Dentro do Islands of Adventure, referência gastronômica do parque.'
          : 'No CityWalk, trajeto a pé imediato ao lado do portal do Islands of Adventure.';
      } else if (isEpicUniverse && rest.park === 'Universal Epic Universe') {
        matches = true;
        convenienceScore = 95;
        reason = 'Localizado no novíssimo Epic Universe, ambiente imersivo de última geração.';
      } else if (isVolcanoBay && (rest.park === 'Universal Volcano Bay' || rest.location_type === 'citywalk')) {
        matches = true;
        convenienceScore = 90;
        reason = 'Opção gastronômica próxima para o dia no parque aquático Volcano Bay.';
      } else if (isSeaWorld && rest.park === 'SeaWorld Orlando') {
        matches = true;
        convenienceScore = 95;
        reason = 'Dentro do SeaWorld Orlando, permitindo recarregar energias entre as montanhas-russas.';
      } else if (isBuschGardens && rest.park === 'Busch Gardens Tampa Bay') {
        matches = true;
        convenienceScore = 90;
        reason = 'Opção prática para o dia de visita a Tampa no Busch Gardens.';
      } else if (isShoppingOrRest && (rest.location_type === 'disney_springs' || rest.location_type === 'off_park')) {
        matches = true;
        convenienceScore = 90;
        reason = rest.location_type === 'disney_springs'
          ? 'Excelente para o dia de compras/descanso em Disney Springs, com ambiente agradável para passear e comer.'
          : 'Opção externa econômica e tradicional da rota de compras e International Drive em Orlando.';
      }

      if (matches) {
        suggestions.push({
          restaurant_id: rest.restaurant_id,
          restaurant_name: rest.name,
          meal_type: targetMealType || rest.meal_types[0],
          reason_summary: reason,
          is_partial_recommendation: rest.operational_status !== 'confirmed',
          requires_advance_reservation: rest.reservation_required || rest.reservation_recommended,
          convenience_score: convenienceScore
        });
      }
    }

    // Ordenar por pontuação de conveniência
    return suggestions.sort((a, b) => b.convenience_score - a.convenience_score).slice(0, 8);
  }

  // ==========================================
  // AUDITORIA ADMINISTRATIVA & RELATÓRIOS
  // ==========================================

  public getAuditSummary(): DiningAuditSummary {
    const totalEditorial = this.sources.length;
    const discoveredUrls = this.sources.map(s => s.canonical_url);
    const articlesProcessed = this.sources.filter(s => s.crawl_status === 'discovered' || s.crawl_status === 'fetched').length;
    const totalErrors = this.sources.filter(s => s.crawl_status === 'failed').length;

    const totalRestaurants = this.restaurants.length;
    const confirmedCount = this.restaurants.filter(r => r.operational_status === 'confirmed').length;
    const pendingCount = this.restaurants.filter(r => r.operational_status === 'pending_confirmation').length;
    const closedCount = this.restaurants.filter(r => r.operational_status === 'reported_closed').length;

    // Verificar duplicatas potenciais por nome normalizado
    const names = new Set<string>();
    let duplicatesCount = 0;
    this.restaurants.forEach(r => {
      if (names.has(r.normalized_name)) {
        duplicatesCount++;
      } else {
        names.add(r.normalized_name);
      }
    });

    return {
      sources_registered: totalEditorial,
      discovered_urls_count: discoveredUrls.length,
      articles_found: totalEditorial,
      articles_processed: articlesProcessed,
      errors_count: totalErrors,
      restaurants_identified: totalRestaurants,
      duplicates_count: duplicatesCount,
      pending_review_count: pendingCount,
      last_execution_date: DINING_CATALOG_METADATA.generated_on,
      version: DINING_CATALOG_METADATA.schema_version,
      version_diff_notes: [
        'Ingestão inicial baseada no arquivo mestre JSON e catálogo de fontes editoriais.',
        `Total de ${totalRestaurants} estabelecimentos cadastrados com identificação de operadora e localização.`,
        `${confirmedCount} estabelecimentos com checagem operacional preliminar e ${pendingCount} aguardando confirmação próxima à viagem em 2027.`,
        `${closedCount} estabelecimentos com encerramento reportado mantidos exclusivamente como histórico.`
      ]
    };
  }

  // ==========================================
  // EXPORTAÇÃO CSV E JSON
  // ==========================================

  public exportCatalogAsJSON(): string {
    const exportData: DiningCatalogData = {
      schema_version: '1.0.0',
      project: 'ORLANDO PLANNER',
      feature: 'Onde Comer',
      generated_on: new Date().toISOString().split('T')[0],
      scope: {
        travel_period: {
          start: '2027-05-05',
          end: '2027-05-23'
        },
        locale: 'pt-BR',
        currency: 'USD'
      },
      feature_flags: {
        where_to_eat_enabled: true,
        search_enabled: true,
        filters_enabled: true,
        favorites_enabled: true,
        add_to_itinerary_enabled: true,
        show_editorial_sources: true,
        show_unverified_operational_data_as_confirmed: false,
        show_closed_restaurants_in_recommendations: false
      },
      source_catalog: this.sources,
      restaurants: this.restaurants,
      evidences: this.evidences,
      display_rules: {
        restaurant_catalog_is_user_approved: true,
        approval_is_not_operational_verification: true,
        unknown_price_or_hours: 'omit_and_label_as_not_confirmed',
        closed_restaurants: 'historical_only',
        recipes: 'editorial_reference_only',
        article_indexes: 'discovery_sources_not_restaurants',
        chain_locations: 'do_not_invent_addresses_or_branches'
      },
      audit_summary: this.getAuditSummary()
    };

    return JSON.stringify(exportData, null, 2);
  }

  public exportCatalogAsCSV(): string {
    const headers = [
      'ID',
      'Nome',
      'Operadora',
      'Tipo de Localização',
      'Parque / Resort',
      'Tipo de Serviço',
      'Culinária',
      'Faixa de Preço',
      'Personagens',
      'Reserva Obrigatória',
      'Status Operacional',
      'Visibilidade',
      'Última Verificação'
    ];

    const rows = this.restaurants.map(r => [
      `"${r.restaurant_id}"`,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.operator}"`,
      `"${r.location_type}"`,
      `"${(r.park || r.resort || r.shopping_center || 'Fora dos parques').replace(/"/g, '""')}"`,
      `"${r.service_type}"`,
      `"${r.cuisine_types.join('; ').replace(/"/g, '""')}"`,
      `"${r.price_category || 'N/A'}"`,
      `"${r.character_dining ? 'Sim' : 'Não'}"`,
      `"${r.reservation_required ? 'Sim' : 'Não'}"`,
      `"${r.operational_status}"`,
      `"${r.visibility}"`,
      `"${r.last_verified_at || 'Pendente'}"`
    ]);

    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  public exportMealsAsJSON(): string {
    const meals = this.getScheduledMeals();
    return JSON.stringify(meals, null, 2);
  }

  public exportMealsAsCSV(): string {
    const headers = [
      'ID',
      'Viagem',
      'Data',
      'Tipo de Refeição',
      'Horário',
      'Restaurante',
      'Status da Reserva',
      'Código de Reserva',
      'Observações'
    ];

    const meals = this.getScheduledMeals();
    const rows = meals.map(m => [
      `"${m.meal_id}"`,
      `"${m.trip_id}"`,
      `"${m.visit_date}"`,
      `"${m.meal_type}"`,
      `"${m.planned_time}"`,
      `"${m.restaurant_name.replace(/"/g, '""')}"`,
      `"${m.reservation_status}"`,
      `"${(m.reservation_reference || '').replace(/"/g, '""')}"`,
      `"${(m.personal_notes || '').replace(/"/g, '""')}"`
    ]);

    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  // ==========================================
  // ATUALIZAÇÃO SEGURA (PRESERVA DADOS PESSOAIS)
  // ==========================================

  public importCatalogSafely(newRestaurants: Restaurant[]): {
    added: number;
    updated: number;
    unchanged: number;
  } {
    let added = 0;
    let updated = 0;
    let unchanged = 0;

    const existingMap = new Map<string, Restaurant>();
    this.restaurants.forEach(r => existingMap.set(r.restaurant_id, r));

    newRestaurants.forEach(incoming => {
      const existing = existingMap.get(incoming.restaurant_id);
      if (!existing) {
        this.restaurants.push(incoming);
        added++;
      } else {
        // Comparar se houve alterações em dados operacionais/editoriais
        const hasDiff =
          existing.name !== incoming.name ||
          existing.operational_status !== incoming.operational_status ||
          existing.service_type !== incoming.service_type ||
          existing.price_category !== incoming.price_category;

        if (hasDiff) {
          Object.assign(existing, incoming);
          updated++;
        } else {
          unchanged++;
        }
      }
    });

    // NUNCA toca em localStorage de favoritos ou refeições agendadas!
    return { added, updated, unchanged };
  }
}

export const diningService = new DiningService();
