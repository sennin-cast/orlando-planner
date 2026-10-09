import { describe, it, expect, beforeEach } from 'vitest';
import { diningService } from '../src/services/diningService';
import { Restaurant } from '../src/types/dining';

describe('Funcionalidade ONDE COMER (Gastronomia)', () => {
  beforeEach(() => {
    diningService.clearStorage();
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.clear();
    }
  });

  describe('1. Catálogo de Fontes Editoriais e Descoberta (Camada A)', () => {
    it('deve conter as fontes canônicas com Vai pra Disney? e Chick-fil-A', () => {
      const sources = diningService.getSources();
      expect(sources.length).toBeGreaterThanOrEqual(18);

      const mainIndex = sources.find(s => s.canonical_url === 'https://www.vaipradisney.com/blog/comida/');
      expect(mainIndex).toBeDefined();
      expect(mainIndex?.publisher).toBe('Vai pra Disney?');

      const parkGuide = sources.find(s => s.canonical_url.includes('onde-comer-universal-studios'));
      expect(parkGuide).toBeDefined();
      expect(parkGuide?.category).toBe('guia_parque');
    });

    it('não deve possuir duplicatas de URLs canônicas', () => {
      const sources = diningService.getSources();
      const urls = sources.map(s => s.canonical_url);
      const uniqueUrls = new Set(urls);
      expect(uniqueUrls.size).toBe(urls.length);
    });
  });

  describe('2. Modelo de Dados dos Estabelecimentos (Camada B)', () => {
    it('deve carregar todos os restaurantes do catálogo aprovado', () => {
      const all = diningService.getAllRestaurants(true);
      expect(all.length).toBeGreaterThanOrEqual(30);

      const active = diningService.getAllRestaurants(false);
      expect(active.length).toBeLessThan(all.length); // Ana's Kitchen é histórico
    });

    it('deve conter os estabelecimentos prioritários fornecidos pelo usuário', () => {
      const earl = diningService.getRestaurantById('food-001');
      expect(earl).toBeDefined();
      expect(earl?.name).toBe('Earl of Sandwich');

      const fiveGuys = diningService.getRestaurantById('food-006');
      expect(fiveGuys).toBeDefined();
      expect(fiveGuys?.name).toBe('Five Guys');

      const chickFilA = diningService.getRestaurantById('food-013');
      expect(chickFilA).toBeDefined();
      expect(chickFilA?.name).toBe('Chick-fil-A');
    });

    it('deve tratar Ana\'s Kitchen como histórico e fechado', () => {
      const anas = diningService.getRestaurantById('food-003');
      expect(anas).toBeDefined();
      expect(anas?.operational_status).toBe('reported_closed');
      expect(anas?.visibility).toBe('historical_only');

      // Não deve aparecer na listagem ativa padrão
      const active = diningService.getAllRestaurants(false);
      expect(active.some(r => r.restaurant_id === 'food-003')).toBe(false);
    });
  });

  describe('3. Evidências e Separação Editorial vs. Operacional (Camada C)', () => {
    it('deve associar evidências aos estabelecimentos com links corretos', () => {
      const evidences = diningService.getEvidencesForRestaurant('food-001');
      expect(evidences.length).toBeGreaterThan(0);
      expect(evidences[0].source_id).toBe('src-011');
      expect(evidences[0].review_status).toBe('approved');
    });

    it('não deve inventar preços para itens não verificados operacionalmente', () => {
      const earl = diningService.getRestaurantById('food-001');
      expect(earl?.price_category).toBeNull();
      expect(earl?.operational_status).toBe('pending_confirmation');
    });

    it('deve marcar restaurantes com confirmação oficial adequadamente', () => {
      const cinderella = diningService.getRestaurantById('food-014');
      expect(cinderella?.operational_status).toBe('confirmed');
      expect(cinderella?.reservation_required).toBe(true);
      expect(cinderella?.character_dining).toBe(true);
    });
  });

  describe('4. Filtros e Pesquisa do Catálogo', () => {
    it('deve filtrar por busca textual (nome, parque e palavras-chave)', () => {
      const results = diningService.filterRestaurants({ searchQuery: 'pizza' });
      expect(results.length).toBeGreaterThan(0);
      results.forEach(r => {
        const matchesName = r.name.toLowerCase().includes('pizza');
        const matchesCuisine = r.cuisine_types.some(c => c.toLowerCase().includes('pizza'));
        expect(matchesName || matchesCuisine).toBe(true);
      });
    });

    it('deve filtrar por categoria temática (pills)', () => {
      const disneySprings = diningService.filterRestaurants({ categoryTab: 'disney_springs' });
      expect(disneySprings.length).toBeGreaterThan(0);
      disneySprings.forEach(r => {
        expect(r.location_type).toBe('disney_springs');
      });

      const characterDining = diningService.filterRestaurants({ categoryTab: 'character_dining' });
      expect(characterDining.length).toBeGreaterThan(0);
      characterDining.forEach(r => {
        expect(r.character_dining).toBe(true);
      });
    });

    it('deve filtrar por opções vegetarianas', () => {
      const veg = diningService.filterRestaurants({ vegetarianOnly: true });
      expect(veg.length).toBeGreaterThan(0);
      veg.forEach(r => {
        const hasVeg = r.dietary_options.some(d => /vegetariano|plant-based|vegano/i.test(d));
        expect(hasVeg).toBe(true);
      });
    });

    it('deve filtrar por exigência de reserva', () => {
      const resOnly = diningService.filterRestaurants({ reservationRequiredOnly: true });
      expect(resOnly.length).toBeGreaterThan(0);
      resOnly.forEach(r => {
        expect(r.reservation_required).toBe(true);
      });
    });
  });

  describe('5. Gestão de Favoritos', () => {
    it('deve alternar e persistir favoritos no localStorage', () => {
      expect(diningService.isFavorite('food-001')).toBe(false);

      const added = diningService.toggleFavorite('food-001');
      expect(added).toBe(true);
      expect(diningService.isFavorite('food-001')).toBe(true);

      const removed = diningService.toggleFavorite('food-001');
      expect(removed).toBe(false);
      expect(diningService.isFavorite('food-001')).toBe(false);
    });

    it('deve filtrar apenas favoritos quando solicitado', () => {
      diningService.toggleFavorite('food-006'); // Five Guys
      const favList = diningService.filterRestaurants({ favoritesOnly: true });
      expect(favList.length).toBe(1);
      expect(favList[0].restaurant_id).toBe('food-006');
    });
  });

  describe('6. Integração com o Roteiro e Proteção de Dados (Camada D)', () => {
    it('deve agendar uma refeição para uma data específica', () => {
      const meal = diningService.addMeal({
        trip_id: 'trip-may-2027',
        restaurant_id: 'food-014',
        restaurant_name: "Cinderella's Royal Table",
        visit_date: '2027-05-18',
        meal_type: 'lunch',
        planned_time: '13:15',
        reservation_status: 'confirmed',
        reservation_reference: '#WDW-829182',
        personal_notes: 'Mesa perto do vitral',
        itinerary_day_id: '2027-05-18'
      });

      expect(meal.meal_id).toBeDefined();
      expect(meal.restaurant_name).toBe("Cinderella's Royal Table");

      const dateMeals = diningService.getMealsForDate('2027-05-18');
      expect(dateMeals.length).toBe(1);
      expect(dateMeals[0].meal_id).toBe(meal.meal_id);
    });

    it('deve remover refeição agendada sem afetar dados do roteiro', () => {
      const meal = diningService.addMeal({
        trip_id: 'trip-may-2027',
        restaurant_id: 'food-006',
        restaurant_name: 'Five Guys',
        visit_date: '2027-05-09',
        meal_type: 'dinner',
        planned_time: '19:30',
        reservation_status: 'not_needed',
        reservation_reference: null,
        personal_notes: null,
        itinerary_day_id: '2027-05-09'
      });

      expect(diningService.getMealsForDate('2027-05-09').length).toBe(1);

      const success = diningService.removeMeal(meal.meal_id);
      expect(success).toBe(true);
      expect(diningService.getMealsForDate('2027-05-09').length).toBe(0);
    });
  });

  describe('7. Motor de Sugestões Contextualizadas ("Sugestões para este dia")', () => {
    it('deve sugerir restaurantes do Magic Kingdom para dia no Magic Kingdom', () => {
      const suggestions = diningService.getSuggestionsForDay('2027-05-18', 'Magic Kingdom Park');
      expect(suggestions.length).toBeGreaterThan(0);

      const topSuggestion = suggestions[0];
      const rest = diningService.getRestaurantById(topSuggestion.restaurant_id);
      expect(rest?.park === 'Magic Kingdom' || rest?.resort?.includes('Polynesian')).toBe(true);
      expect(topSuggestion.convenience_score).toBeGreaterThanOrEqual(80);
      expect(topSuggestion.reason_summary.length).toBeGreaterThan(15);
    });

    it('deve sugerir restaurantes de Disney Springs ou externos para dia de compras', () => {
      const suggestions = diningService.getSuggestionsForDay('2027-05-09', 'Compras nos Outlets');
      expect(suggestions.length).toBeGreaterThan(0);

      suggestions.forEach(sug => {
        const rest = diningService.getRestaurantById(sug.restaurant_id);
        expect(rest?.location_type === 'disney_springs' || rest?.location_type === 'off_park').toBe(true);
      });
    });
  });

  describe('8. Painel Administrativo, Auditoria e Exportação', () => {
    it('deve produzir relatório resumido de auditoria', () => {
      const audit = diningService.getAuditSummary();
      expect(audit.sources_registered).toBeGreaterThanOrEqual(18);
      expect(audit.discovered_urls_count).toBeGreaterThanOrEqual(18);
      expect(audit.restaurants_identified).toBeGreaterThanOrEqual(30);
      expect(audit.version).toBe('1.0.0');
      expect(audit.version_diff_notes.length).toBeGreaterThan(0);
    });

    it('deve exportar catálogo em formato JSON válido', () => {
      const json = diningService.exportCatalogAsJSON();
      const parsed = JSON.parse(json);
      expect(parsed.project).toBe('ORLANDO PLANNER');
      expect(parsed.feature).toBe('Onde Comer');
      expect(parsed.restaurants.length).toBeGreaterThanOrEqual(30);
      expect(parsed.source_catalog.length).toBeGreaterThanOrEqual(18);
    });

    it('deve exportar catálogo em formato CSV válido', () => {
      const csv = diningService.exportCatalogAsCSV();
      const lines = csv.split('\n');
      expect(lines.length).toBeGreaterThan(30);
      expect(lines[0]).toContain('Nome');
      expect(lines[0]).toContain('Status Operacional');
    });

    it('deve importar catálogo de forma segura preservando favoritos e refeições', () => {
      diningService.toggleFavorite('food-001');
      diningService.addMeal({
        trip_id: 'trip-may-2027',
        restaurant_id: 'food-001',
        restaurant_name: 'Earl of Sandwich',
        visit_date: '2027-05-10',
        meal_type: 'lunch',
        planned_time: '12:00',
        reservation_status: 'not_needed',
        reservation_reference: null,
        personal_notes: 'Sanduíche The Original 1762',
        itinerary_day_id: '2027-05-10'
      });

      const clone: Restaurant[] = JSON.parse(JSON.stringify(diningService.getAllRestaurants(true)));
      const result = diningService.importCatalogSafely(clone);

      expect(result.unchanged).toBe(clone.length);
      expect(diningService.isFavorite('food-001')).toBe(true);
      expect(diningService.getMealsForDate('2027-05-10').length).toBe(1);
    });
  });
});
