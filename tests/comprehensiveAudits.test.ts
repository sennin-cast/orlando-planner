import { describe, it, expect } from 'vitest';
import {
  formatDateShortBr,
  formatDateCompleteBr,
  formatDateWithWeekdayPt,
  formatDateRangePt,
  formatTimeBr,
  parseDateIso,
  addDays,
} from '../src/utils/dateUtils';
import { ItineraryOptimizer } from '../src/services/itineraryOptimizer';
import { INITIAL_ITINERARY } from '../src/data/initialItinerary';
import { INITIAL_TICKETS } from '../src/data/initialTickets';
import { createBenchmarkCrowdRecords } from '../src/data/defaultCrowdData';
import { CrowdDataService } from '../src/services/crowdDataService';
import { diningService } from '../src/services/diningService';
import { authService } from '../src/services/authService';
import { NAV_ITEMS } from '../src/components/Sidebar';

describe('FASE 2 — Padronização de Datas Brasileiras', () => {
  it('valida que 01/05/2027 é Sábado e 23/05/2027 é Domingo', () => {
    const formattedStart = formatDateWithWeekdayPt('2027-05-01');
    const formattedEnd = formatDateWithWeekdayPt('2027-05-23');

    expect(formattedStart).toBe('Sáb, 01/05');
    expect(formattedEnd).toBe('Dom, 23/05');
  });

  it('valida formato de data curta (DD/MM) e completa (DD/MM/AAAA)', () => {
    expect(formatDateShortBr('2027-05-01')).toBe('01/05');
    expect(formatDateCompleteBr('2027-05-01')).toBe('01/05/2027');
    expect(formatDateCompleteBr('2027-12-31')).toBe('31/12/2027');
  });

  it('valida formato de intervalo de datas (01/05 a 23/05/2027)', () => {
    const range = formatDateRangePt('2027-05-01', '2027-05-23');
    expect(range).toBe('01/05 a 23/05/2027');

    const multiYear = formatDateRangePt('2026-12-28', '2027-01-08');
    expect(multiYear).toBe('28/12/2026 a 08/01/2027');
  });

  it('valida formatação de horários (HH:mm)', () => {
    expect(formatTimeBr('09:30')).toBe('09:30');
    expect(formatTimeBr('14:05:00')).toBe('14:05');
  });

  it('lida corretamente com anos bissextos e sem deslocamento de fusos', () => {
    // 2028 é bissexto
    const leapDay = parseDateIso('2028-02-29');
    expect(leapDay.getUTCDate()).toBe(29);
    expect(leapDay.getUTCMonth()).toBe(1); // Fevereiro = 1
    expect(formatDateCompleteBr('2028-02-29')).toBe('29/02/2028');

    const nextDay = addDays('2028-02-29', 1);
    expect(nextDay).toBe('2028-03-01');
    expect(formatDateCompleteBr(nextDay)).toBe('01/03/2028');
  });
});

describe('FASE 3 — Integridade Gastronômica & Relacionamentos', () => {
  it('Earl of Sandwich não deve estar associado a Perkins', () => {
    const evidences = diningService.getEvidencesForRestaurant('food-001');
    expect(evidences.length).toBeGreaterThan(0);
    // Deve apontar para o guia de Disney Springs (src-005), e NÃO Perkins (src-011)
    expect(evidences[0].source_id).toBe('src-005');
    expect(evidences[0].source_id).not.toBe('src-011');
  });

  it('Catálogo deve conter restaurantes do CityWalk', () => {
    const cityWalk = diningService.filterRestaurants({ categoryTab: 'citywalk' });
    expect(cityWalk.length).toBeGreaterThanOrEqual(4);
    expect(cityWalk.some((r) => r.name.includes('Cowfish'))).toBe(true);
    expect(cityWalk.some((r) => r.name.includes('Voodoo'))).toBe(true);
    expect(cityWalk.some((r) => r.name.includes('Toothsome'))).toBe(true);
  });

  it('Ana\'s Kitchen permanece registrado como histórico e fechado', () => {
    const anas = diningService.getRestaurantById('food-003');
    expect(anas).toBeDefined();
    expect(anas?.operational_status).toBe('reported_closed');
    expect(anas?.visibility).toBe('historical_only');
  });
});

describe('FASE 4 & 5 — Motor de Otimização Determinístico e Regras Hierárquicas', () => {
  it('não agenda parque de dia inteiro no dia de chegada por padrão', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());

    const result = ItineraryOptimizer.optimize(
      INITIAL_ITINERARY,
      INITIAL_TICKETS,
      crowdService.getStore()
    );

    const firstDay = result.proposedItinerary[0];
    expect(firstDay.activityType).toBe('arrival');
    expect(firstDay.parkId).toBeNull();
  });

  it('preserva datas bloqueadas e datas fixas (como Magic Kingdom no dia 23)', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());

    const result = ItineraryOptimizer.optimize(
      INITIAL_ITINERARY,
      INITIAL_TICKETS,
      crowdService.getStore()
    );

    const day23 = result.proposedItinerary.find((d) => d.date === '2027-05-23');
    expect(day23).toBeDefined();
    expect(day23?.parkId).toBe('magic-kingdom');
    expect(day23?.isLocked).toBe(true);
  });

  it('prioriza primeiro parque Disney com lotação favorável', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());

    const result = ItineraryOptimizer.optimize(
      INITIAL_ITINERARY,
      INITIAL_TICKETS,
      crowdService.getStore(),
      { preferDisneyFirstPark: true }
    );

    // O primeiro dia de parque (após chegada em 05/05) é 06/05
    const firstParkDay = result.proposedItinerary.find((d) => d.activityType === 'park');
    expect(firstParkDay).toBeDefined();
    expect(['epcot', 'hollywood-studios', 'animal-kingdom', 'magic-kingdom']).toContain(firstParkDay?.parkId);
    expect(result.summary.firstParkReason).toBeDefined();
  });

  it('gera explicações reais para alterações e nunca expõe undefined/10', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());

    const result = ItineraryOptimizer.optimize(
      INITIAL_ITINERARY,
      INITIAL_TICKETS,
      crowdService.getStore()
    );

    expect(result.explanations).toBeDefined();
    expect(result.explanations!.length).toBe(INITIAL_ITINERARY.length);

    result.explanations!.forEach((exp) => {
      expect(exp.reason.length).toBeGreaterThan(10);
      expect(exp.reason).not.toContain('undefined');
      if (exp.crowdLevel !== null) {
        expect(exp.crowdLevel).toBeGreaterThanOrEqual(1);
        expect(exp.crowdLevel).toBeLessThanOrEqual(10);
      }
    });
  });

  it('é estritamente determinístico: execuções consecutivas produzem exatamente o mesmo resultado', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());
    const store = crowdService.getStore();

    const run1 = ItineraryOptimizer.optimize(INITIAL_ITINERARY, INITIAL_TICKETS, store);
    const run2 = ItineraryOptimizer.optimize(INITIAL_ITINERARY, INITIAL_TICKETS, store);

    expect(run1.suggestedScore).toBe(run2.suggestedScore);
    expect(run1.proposedItinerary.map((d) => d.parkId)).toEqual(run2.proposedItinerary.map((d) => d.parkId));
    expect(run1.suggestions.length).toBe(run2.suggestions.length);
  });
});

describe('FASE 13A — Controle de Acesso e Limpeza da Navegação', () => {
  it('Aba Desgaste Físico foi completamente removida da navegação', () => {
    const hasFatigueNav = NAV_ITEMS.some((item) => (item.id as string) === 'desgaste-fisico');
    expect(hasFatigueNav).toBe(false);

    expect(authService.canAccessTab('desgaste-fisico' as any)).toBe(false);
  });

  it('Usuário comum (não administrador) não pode acessar Histórico nem Configurações', () => {
    // Paola Ameixoeira (usuária regular, não administradora)
    expect(authService.isAdmin()).toBe(false); // Por padrão sem login admin
    expect(authService.canAccessTab('historico')).toBe(false);
    expect(authService.canAccessTab('configuracoes')).toBe(false);

    // Abas comuns continuam acessíveis
    expect(authService.canAccessTab('visao-geral')).toBe(true);
    expect(authService.canAccessTab('meu-roteiro')).toBe(true);
    expect(authService.canAccessTab('onde-comer')).toBe(true);
    expect(authService.canAccessTab('calendario-de-lotacao')).toBe(true);
  });
});
