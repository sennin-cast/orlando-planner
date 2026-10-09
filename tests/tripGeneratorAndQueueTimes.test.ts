import { describe, it, expect } from 'vitest';
import { ItineraryGenerator } from '../src/services/itineraryGenerator';
import { QueueTimesService, QUEUE_TIMES_PARK_IDS } from '../src/services/queueTimesService';

describe('ItineraryGenerator — Data de Chegada e Partida', () => {
  it('deve gerar roteiro com exatidão no intervalo entre startDate e endDate', () => {
    const itinerary = ItineraryGenerator.generateCustomItinerary({
      startDate: '2027-05-10',
      endDate: '2027-05-20',
      profile: 'equilibrado',
      includeBuschGardensTampa: true,
      includeEpicUniverseTwoDays: true,
    });

    // 10 a 20 de maio = 11 dias
    expect(itinerary).toHaveLength(11);
    expect(itinerary[0].date).toBe('2027-05-10');
    expect(itinerary[10].date).toBe('2027-05-20');
  });

  it('o primeiro dia deve ser configurado como Chegada (arrival) e esforço OFF', () => {
    const itinerary = ItineraryGenerator.generateCustomItinerary({
      startDate: '2027-05-05',
      endDate: '2027-05-15',
      profile: 'equilibrado',
      includeBuschGardensTampa: false,
      includeEpicUniverseTwoDays: false,
    });

    const firstDay = itinerary[0];
    expect(firstDay.activityType).toBe('arrival');
    expect(firstDay.effortLevel).toBe('OFF');
    expect(firstDay.parkId).toBeNull();
    expect(firstDay.isLocked).toBe(true);
    expect(firstDay.title).toContain('Chegada em Orlando');
  });

  it('o último dia (Data de Partida) padrão deve ser de check-out e voo (sem parque)', () => {
    const itinerary = ItineraryGenerator.generateCustomItinerary({
      startDate: '2027-05-05',
      endDate: '2027-05-23',
      departureDayHasPark: false,
      profile: 'equilibrado',
      includeBuschGardensTampa: true,
      includeEpicUniverseTwoDays: true,
    });

    const lastDay = itinerary[itinerary.length - 1];
    expect(lastDay.activityType).toBe('departure');
    expect(lastDay.effortLevel).toBe('OFF');
    expect(lastDay.parkId).toBeNull();
    expect(lastDay.isLocked).toBe(true);
    expect(lastDay.title).toContain('Partida de Orlando');
    expect(lastDay.personalNotes).toContain('DIA DE PARTIDA');
  });

  it('o último dia com departureDayHasPark: true deve incluir parque matinal', () => {
    const itinerary = ItineraryGenerator.generateCustomItinerary({
      startDate: '2027-05-05',
      endDate: '2027-05-12',
      departureDayHasPark: true,
      profile: 'equilibrado',
      includeBuschGardensTampa: false,
      includeEpicUniverseTwoDays: false,
    });

    const lastDay = itinerary[itinerary.length - 1];
    expect(lastDay.activityType).toBe('park');
    expect(lastDay.parkId).toBe('magic-kingdom');
    expect(lastDay.isLocked).toBe(true);
  });
});

describe('QueueTimesService — Theme Park Wait Times API & Atribuição', () => {
  it('deve possuir IDs mapeados para os 10 principais parques de Orlando e Tampa', () => {
    expect(QUEUE_TIMES_PARK_IDS['magic-kingdom']).toBe(6);
    expect(QUEUE_TIMES_PARK_IDS['epcot']).toBe(5);
    expect(QUEUE_TIMES_PARK_IDS['hollywood-studios']).toBe(7);
    expect(QUEUE_TIMES_PARK_IDS['animal-kingdom']).toBe(8);
    expect(QUEUE_TIMES_PARK_IDS['universal-studios']).toBe(65);
    expect(QUEUE_TIMES_PARK_IDS['islands-of-adventure']).toBe(64);
    expect(QUEUE_TIMES_PARK_IDS['volcano-bay']).toBe(67);
    expect(QUEUE_TIMES_PARK_IDS['seaworld']).toBe(21);
    expect(QUEUE_TIMES_PARK_IDS['busch-gardens']).toBe(24);
  });

  it('deve retornar estrutura válida de resumo para Magic Kingdom', async () => {
    const summary = await QueueTimesService.fetchParkWaitTimes('magic-kingdom');
    expect(summary).not.toBeNull();
    if (summary) {
      expect(summary.parkId).toBe('magic-kingdom');
      expect(summary.queueTimesId).toBe(6);
      expect(summary.totalRides).toBeGreaterThan(0);
      expect(summary.openRides).toBeGreaterThanOrEqual(0);
      expect(typeof summary.avgWaitTime).toBe('number');
      expect(Array.isArray(summary.lands)).toBe(true);
      expect(typeof summary.isLive).toBe('boolean');
    }
  });

  it('deve retornar null para parques não cadastrados', async () => {
    const summary = await QueueTimesService.fetchParkWaitTimes('parque-inexistente');
    expect(summary).toBeNull();
  });
});
