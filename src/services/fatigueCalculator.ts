import { ItineraryDay } from '../types/itinerary';
import {
  FatigueParameters,
  DayFatigueResult,
  ItineraryFatigueSummary,
  FatigueLevel,
} from '../types/fatigue';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { DEFAULT_FATIGUE_PARAMS } from './storageManager';

export class FatigueCalculator {
  public static calculate(
    itinerary: ItineraryDay[],
    params: FatigueParameters = DEFAULT_FATIGUE_PARAMS
  ): ItineraryFatigueSummary {
    const dailyResults: Record<string, DayFatigueResult> = {};
    const criticalAlerts: string[] = [];

    let currentConsecutiveParkDays = 0;
    let accumulatedFatigue = 0; // Carries over across days
    let peakScore = 0;
    let peakDay = itinerary[0]?.date || '';
    let totalRestDays = 0;

    for (let i = 0; i < itinerary.length; i++) {
      const day = itinerary[i];
      const isParkDay = day.activityType === 'park' && !!day.parkId;
      const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;

      let walkKm = 0;
      let transitMinutes = 0;
      let dailyBaseEffortScore = 0;
      const dayAlerts: string[] = [];

      if (isParkDay && parkInfo) {
        currentConsecutiveParkDays++;
        walkKm = parkInfo.avgWalkingKm;
        transitMinutes = parkInfo.avgTransitMinutes * 2; // Ida e volta

        // Calculate base effort (0-60 points from the day itself)
        // 1. Walk points (up to 30)
        const walkPoints = Math.min(30, (walkKm / 15) * 30);

        // 2. Commute points (up to 20, e.g. Tampa 150m round trip is significant)
        const transitPoints = Math.min(20, (transitMinutes / 120) * 20);

        // 3. Park intensity factor (10 to 20)
        let intensityPoints = 12;
        if (parkInfo.baseEffort === 'Pesado' || day.effortLevel === 'Pesado') {
          intensityPoints = 20;
        } else if (parkInfo.baseEffort === 'Médio' || day.effortLevel === 'Médio') {
          intensityPoints = 15;
        } else {
          intensityPoints = 8;
        }

        dailyBaseEffortScore = (walkPoints + transitPoints + intensityPoints) * params.userToleranceMultiplier;

        // Apply accumulation penalty from previous days
        accumulatedFatigue = accumulatedFatigue * 0.75 + dailyBaseEffortScore;

        // Consecutive park day compounding
        if (currentConsecutiveParkDays >= 2) {
          accumulatedFatigue += (currentConsecutiveParkDays - 1) * 6;
        }

        // Check alerts
        if (currentConsecutiveParkDays >= params.maxConsecutiveParkDays) {
          const alertMsg = `${currentConsecutiveParkDays} dias seguidos de parques temáticos. Recomendado dia de descanso intercalado.`;
          dayAlerts.push(alertMsg);
          if (currentConsecutiveParkDays >= 3) {
            criticalAlerts.push(`${day.date} (${parkInfo.name}): ${alertMsg}`);
          }
        }

        if (transitMinutes >= params.longCommuteThresholdMinutes * 2) {
          dayAlerts.push(`Deslocamento interestadual longo para ${parkInfo.location} (~${transitMinutes}min ida e volta).`);
          // Check if previous day was also heavy
          if (i > 0 && itinerary[i - 1].effortLevel === 'Pesado') {
            const commuteAlert = `Deslocamento longo para Tampa após dia cansativo em ${itinerary[i - 1].date}.`;
            dayAlerts.push(commuteAlert);
            criticalAlerts.push(commuteAlert);
          }
        }

        // Check back-to-back heavy days
        if (
          i > 0 &&
          (itinerary[i - 1].effortLevel === 'Pesado' || itinerary[i - 1].parkId === 'epic-universe') &&
          (day.effortLevel === 'Pesado' || day.parkId === 'epic-universe')
        ) {
          const backToBackAlert = `Alerta de sobrecarga: Dois dias consecutivos de esforço Pesado (${itinerary[i - 1].date} e ${day.date}).`;
          dayAlerts.push(backToBackAlert);
          if (!criticalAlerts.includes(backToBackAlert)) {
            criticalAlerts.push(backToBackAlert);
          }
        }
      } else {
        // Rest / Shopping / Arrival day
        currentConsecutiveParkDays = 0;
        totalRestDays++;
        walkKm = day.activityType === 'shopping' ? 5.5 : 2.0;
        transitMinutes = 20;
        dailyBaseEffortScore = day.activityType === 'shopping' ? 20 : 5;

        // Rest bonus recovers accumulated fatigue
        accumulatedFatigue = Math.max(0, accumulatedFatigue - params.restDayRecoveryBonus);
      }

      // Cap cumulative score between 0 and 100
      const finalCumulativeScore = Math.min(100, Math.max(0, Math.round(accumulatedFatigue)));

      if (finalCumulativeScore > peakScore) {
        peakScore = finalCumulativeScore;
        peakDay = day.date;
      }

      let level: FatigueLevel = 'Leve';
      if (!isParkDay) {
        level = 'Descanso';
      } else if (finalCumulativeScore >= 80) {
        level = 'Crítico';
      } else if (finalCumulativeScore >= 60) {
        level = 'Alto';
      } else if (finalCumulativeScore >= 35) {
        level = 'Moderado';
      } else {
        level = 'Leve';
      }

      dailyResults[day.date] = {
        date: day.date,
        dayNumber: day.dayNumber,
        activityType: day.activityType,
        baseScore: Math.round(dailyBaseEffortScore),
        cumulativeScore: finalCumulativeScore,
        level,
        walkKm,
        transitMinutes,
        consecutiveParkDays: currentConsecutiveParkDays,
        alerts: dayAlerts,
      };
    }

    // Recommended rest days count: ideally ~1 rest day every 2-3 park days
    const totalParkDays = itinerary.filter((d) => d.activityType === 'park').length;
    const recommendedRestDays = Math.ceil(totalParkDays / 2.5);

    // Overall itinerary fatigue score (weighted average of daily cumulative scores)
    const totalScore = Object.values(dailyResults).reduce((sum, r) => sum + r.cumulativeScore, 0);
    const overallScore = Math.round(totalScore / (itinerary.length || 1));

    return {
      dailyResults,
      overallFatigueScore: overallScore,
      criticalAlerts,
      recommendedRestDaysCount: recommendedRestDays,
      actualRestDaysCount: totalRestDays,
      peakFatigueDay: peakDay,
    };
  }
}
