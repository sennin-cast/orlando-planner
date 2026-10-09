import { describe, it, expect } from 'vitest';
import {
  MONTHS_METADATA_2027,
  ANNUAL_CROWD_DATA_2027,
  getDayCrowdInfo2027,
  getMonthDaysCrowd2027,
  getParkCrowdLevelsForDate,
} from '../src/data/annualCrowdData2027';
import {
  TOURING_PLANS_CATALOG,
  getTouringPlanById,
  getTouringPlanForPark,
} from '../src/data/touringPlansCatalog';
import { renderCrowdView } from '../src/components/CrowdView';
import { renderTouringPlansView } from '../src/components/TouringPlansView';
import { createVerified2027CrowdStore } from '../src/data/defaultCrowdData';

describe('Calendário Anual de Lotação 2027 (Undercover Tourist Data)', () => {
  it('contém exatamente 365 dias para o ano de 2027 distribuídos nos 12 meses', () => {
    const totalDays = Object.keys(ANNUAL_CROWD_DATA_2027).length;
    expect(totalDays).toBe(365);

    // Verifica se os 12 meses têm a contagem exata de dias
    expect(MONTHS_METADATA_2027[1].daysCount).toBe(31); // Jan
    expect(MONTHS_METADATA_2027[2].daysCount).toBe(28); // Fev
    expect(MONTHS_METADATA_2027[3].daysCount).toBe(31); // Mar
    expect(MONTHS_METADATA_2027[4].daysCount).toBe(30); // Abr
    expect(MONTHS_METADATA_2027[5].daysCount).toBe(31); // Mai
    expect(MONTHS_METADATA_2027[6].daysCount).toBe(30); // Jun
    expect(MONTHS_METADATA_2027[7].daysCount).toBe(31); // Jul
    expect(MONTHS_METADATA_2027[8].daysCount).toBe(31); // Ago
    expect(MONTHS_METADATA_2027[9].daysCount).toBe(30); // Set
    expect(MONTHS_METADATA_2027[10].daysCount).toBe(31); // Out
    expect(MONTHS_METADATA_2027[11].daysCount).toBe(30); // Nov
    expect(MONTHS_METADATA_2027[12].daysCount).toBe(31); // Dez
  });

  it('identifica corretamente o mês de Setembro como o mais tranquilo do ano', () => {
    const setembroMeta = MONTHS_METADATA_2027[9];
    expect(setembroMeta.name).toBe('Setembro');
    expect(setembroMeta.avgCrowd).toBe(6.0);
    expect(setembroMeta.season).toContain('Baixa Temporada');

    const setembroDias = getMonthDaysCrowd2027(9);
    expect(setembroDias.length).toBe(30);
    expect(setembroDias[0].crowdLevel).toBeDefined();
  });

  it('registra picos históricos nas datas festivas (Ano Novo, Natal, Memorial Day)', () => {
    // 1º de Janeiro (Ano Novo)
    expect(ANNUAL_CROWD_DATA_2027['2027-01-01']).toBe(10);
    // 25 de Dezembro (Natal)
    expect(ANNUAL_CROWD_DATA_2027['2027-12-25']).toBe(10);
    // 31 de Dezembro (Réveillon)
    expect(ANNUAL_CROWD_DATA_2027['2027-12-31']).toBe(10);
    // Fim de Maio (Memorial Day weekend)
    expect(ANNUAL_CROWD_DATA_2027['2027-05-30']).toBeGreaterThanOrEqual(8);
  });

  it('gera níveis e recomendações coerentes para cada parque', () => {
    const dayInfo = getDayCrowdInfo2027('2027-05-10');
    expect(dayInfo).toBeDefined();
    expect(dayInfo?.crowdLevel).toBe(6);

    const parkLevels = getParkCrowdLevelsForDate('2027-05-10');
    expect(parkLevels['magic-kingdom']).toBeDefined();
    expect(parkLevels['epic-universe']).toBeDefined();
    expect(parkLevels['animal-kingdom']).toBeDefined();
    expect(parkLevels['seaworld']).toBeDefined();
    expect(typeof parkLevels['magic-kingdom'].crowdLevel).toBe('number');

    const mkPlan = getTouringPlanForPark('magic-kingdom');
    expect(mkPlan?.id).toBe('magic-kingdom');
  });
});

describe('Catálogo de Roteiros Passo a Passo (Touring Plans em PT-BR)', () => {
  it('contém todos os 10 roteiros de parques essenciais de Orlando', () => {
    const planIds = Object.keys(TOURING_PLANS_CATALOG);
    expect(planIds.length).toBe(10);
    expect(planIds).toContain('magic-kingdom');
    expect(planIds).toContain('epcot');
    expect(planIds).toContain('hollywood-studios');
    expect(planIds).toContain('animal-kingdom');
    expect(planIds).toContain('epic-universe');
    expect(planIds).toContain('islands-of-adventure');
    expect(planIds).toContain('universal-studios');
    expect(planIds).toContain('universal-1day-park-to-park');
    expect(planIds).toContain('universal-2day-park-to-park');
    expect(planIds).toContain('seaworld');
  });

  it('valida que o roteiro do Epic Universe inclui as novas terras cósmicas e montanhas-russas', () => {
    const epic = getTouringPlanById('epic-universe');
    expect(epic).toBeDefined();
    expect(epic?.parkName).toBe('Universal Epic Universe');
    expect(epic?.steps.length).toBeGreaterThanOrEqual(7);

    const stepTitles = epic!.steps.map((s) => s.title.toLowerCase());
    const hasNintendo = stepTitles.some((t) => t.includes('nintendo') || t.includes('mario'));
    const hasFrankensteinOrDark = stepTitles.some((t) => t.includes('dark universe') || t.includes('monsters'));
    const hasMinistry = stepTitles.some((t) => t.includes('ministry of magic') || t.includes('harry potter'));
    const hasStardust = stepTitles.some((t) => t.includes('stardust'));

    expect(hasNintendo).toBe(true);
    expect(hasFrankensteinOrDark).toBe(true);
    expect(hasMinistry).toBe(true);
    expect(hasStardust).toBe(true);
  });

  it('todos os roteiros possuem recomendações completas de refeição e show noturno', () => {
    Object.values(TOURING_PLANS_CATALOG).forEach((plan) => {
      expect(plan.diningRecommendations.quickService.length).toBeGreaterThan(0);
      expect(plan.diningRecommendations.tableService.length).toBeGreaterThan(0);
      expect(plan.nightShow.name).toBeDefined();
      expect(plan.nightShow.tip).toBeDefined();
      expect(plan.ropeDropArrival).toBeDefined();
    });
  });
});

describe('Renderização dos Componentes Web (Mobile & Desktop)', () => {
  it('renderiza CrowdView com o seletor de 12 meses e a metodologia explicativa', () => {
    const store = createVerified2027CrowdStore();
    const html = renderCrowdView(store, 'all', 'annual-calendar', 'magic-kingdom', null, 9, ['2027-09-10']);

    // Verifica presença do mês de Setembro selecionado
    expect(html).toContain('Setembro de 2027');
    expect(html).toContain('Grade Diária de Lotação — Setembro 2027');
    // Verifica a seção pedagógica do Crowd Calendar
    expect(html).toContain('Guia Oficial: O que é e Como Usar o Calendário de Lotação');
    expect(html).toContain('COMECE PELO NÍVEL DE LOTAÇÃO DO DIA');
    expect(html).toContain('CRITÉRIO DE DESEMPATE POR PARQUE');
    expect(html).toContain('SPettiette');
  });

  it('renderiza TouringPlansView com lista de passos e botão de impressão', () => {
    const html = renderTouringPlansView('magic-kingdom', 'all');

    expect(html).toContain('Roteiros de Parques (Touring Plans)');
    expect(html).toContain('Magic Kingdom — Plano Passo a Passo de 1 Dia');
    expect(html).toContain("Rope Drop: Frontierland & Tiana's Bayou Adventure");
    expect(html).toContain('btn-print-touring-plan');
    expect(html).toContain('Onde Comer Sem Erro');
  });
});
