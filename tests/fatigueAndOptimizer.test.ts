import { describe, it, expect } from 'vitest';
import { FatigueCalculator } from '../src/services/fatigueCalculator';
import { ItineraryOptimizer } from '../src/services/itineraryOptimizer';
import { INITIAL_ITINERARY } from '../src/data/initialItinerary';
import { INITIAL_TICKETS } from '../src/data/initialTickets';
import { createInitialCrowdStore, createBenchmarkCrowdRecords } from '../src/data/defaultCrowdData';
import { CrowdDataService } from '../src/services/crowdDataService';
import { ItineraryDay } from '../src/types/itinerary';

describe('Fatigue Calculator', () => {
  it('detects two consecutive heavy days and warns about physical overload', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    // Force two consecutive heavy days
    itineraryModified[1].effortLevel = 'Pesado';
    itineraryModified[2].effortLevel = 'Pesado';

    const result = FatigueCalculator.calculate(itineraryModified);
    expect(result.criticalAlerts.some((a) => a.includes('Dois dias consecutivos de esforço Pesado'))).toBe(true);
  });

  it('detects long commute to Tampa for Busch Gardens', () => {
    const result = FatigueCalculator.calculate(INITIAL_ITINERARY);
    const buschDayResult = result.dailyResults['2027-05-09'];
    expect(buschDayResult).toBeDefined();
    expect(buschDayResult.alerts.some((a) => a.includes('Deslocamento interestadual'))).toBe(true);
  });

  it('correctly provides rest bonus on OFF days', () => {
    const result = FatigueCalculator.calculate(INITIAL_ITINERARY);
    const restDay = result.dailyResults['2027-05-08']; // Descanso / Disney Springs
    expect(restDay.level).toBe('Descanso');
    expect(restDay.baseScore).toBeLessThan(10);
  });
});

describe('Itinerary Optimizer Engine', () => {
  it('preserves locked dates (especially Magic Kingdom on 23/05/2027)', () => {
    const crowdStore = createInitialCrowdStore();
    const result = ItineraryOptimizer.optimize(INITIAL_ITINERARY, INITIAL_TICKETS, crowdStore);

    const proposedDay23 = result.proposedItinerary.find((d) => d.date === '2027-05-23');
    expect(proposedDay23).toBeDefined();
    expect(proposedDay23?.parkId).toBe('magic-kingdom');
    expect(proposedDay23?.ticketId).toBe('ticket-disney-mk-single');
    expect(proposedDay23?.isLocked).toBe(true);

    const proposedDayArrival = result.proposedItinerary.find((d) => d.date === '2027-05-05');
    expect(proposedDayArrival?.activityType).toBe('arrival');
  });

  it('flags partial optimization when crowd data is unavailable without inventing scores', () => {
    const crowdStore = createInitialCrowdStore(); // All crowdLevel: null
    const result = ItineraryOptimizer.optimize(INITIAL_ITINERARY, INITIAL_TICKETS, crowdStore);

    expect(result.isPartialOptimization).toBe(true);
    expect(result.partialOptimizationNote).toBeDefined();
    expect(result.summary.crowdImprovementPercent).toBeNull();
  });

  it('performs full optimization when verified benchmark crowd records exist', () => {
    const crowdService = new CrowdDataService();
    crowdService.importFromJson(createBenchmarkCrowdRecords());

    const result = ItineraryOptimizer.optimize(INITIAL_ITINERARY, INITIAL_TICKETS, crowdService.getStore());
    expect(result.proposedItinerary.length).toBe(INITIAL_ITINERARY.length);
    expect(result.suggestedScore).toBeGreaterThanOrEqual(result.currentScore);
  });
});
