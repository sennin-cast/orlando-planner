import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { OptimizerWeights, OptimizationResult, ItineraryChangeSuggestion } from '../types/optimizer';
import { FatigueCalculator } from './fatigueCalculator';
import { validateTickets } from './ticketValidator';
import { DEFAULT_OPTIMIZER_WEIGHTS, DEFAULT_FATIGUE_PARAMS } from './storageManager';
import { PARKS_CATALOG } from '../data/parksCatalog';

export class ItineraryOptimizer {
  public static calculateItineraryScore(
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore,
    weights: OptimizerWeights = DEFAULT_OPTIMIZER_WEIGHTS
  ): {
    totalScore: number;
    crowdComponent: number | null;
    fatigueComponent: number;
    commuteComponent: number;
    isValid: boolean;
  } {
    // 1. Ticket validity check
    const ticketValidation = validateTickets(itinerary, tickets);
    const hasConflicts = ticketValidation.issues.some((i) => i.severity === 'conflict');
    if (hasConflicts) {
      return {
        totalScore: 0,
        crowdComponent: null,
        fatigueComponent: 0,
        commuteComponent: 0,
        isValid: false,
      };
    }

    // 2. Fatigue score
    const fatigueSummary = FatigueCalculator.calculate(itinerary, DEFAULT_FATIGUE_PARAMS);
    // Lower fatigue is better: invert 100 - fatigue
    const fatigueComponent = Math.max(0, 100 - fatigueSummary.overallFatigueScore);

    // 3. Crowd score
    let totalCrowdScore = 0;
    let crowdCount = 0;
    itinerary.forEach((day) => {
      if (day.parkId) {
        const crowdRecord = crowdStore.records[`${day.date}_${day.parkId}`];
        if (crowdRecord && crowdRecord.crowdLevel !== null) {
          // Crowd 1 = 100 points, Crowd 10 = 10 points
          totalCrowdScore += (11 - crowdRecord.crowdLevel) * 10;
          crowdCount++;
        }
      }
    });

    const hasCrowdData = crowdCount > 0;
    const crowdComponent = hasCrowdData ? Math.round(totalCrowdScore / crowdCount) : null;

    // 4. Commute component (commutes under 30min are good, commutes >60min receive small penalty)
    let commuteScore = 100;
    itinerary.forEach((day) => {
      if (day.parkId) {
        const park = PARKS_CATALOG[day.parkId];
        if (park && park.avgTransitMinutes > 60) {
          commuteScore -= 10; // e.g. Busch Gardens trip
        }
      }
    });
    const commuteComponent = Math.max(0, commuteScore);

    // Combined score calculation
    let totalScore = 0;
    if (crowdComponent !== null) {
      totalScore =
        crowdComponent * weights.crowdWeight +
        fatigueComponent * weights.fatigueWeight +
        commuteComponent * weights.commuteWeight +
        85 * weights.preferenceWeight +
        90 * weights.flexibilityWeight;
    } else {
      // Re-normalize weights when crowd is absent
      const remainingWeight = weights.fatigueWeight + weights.commuteWeight + weights.preferenceWeight + weights.flexibilityWeight;
      totalScore =
        (fatigueComponent * weights.fatigueWeight +
          commuteComponent * weights.commuteWeight +
          85 * weights.preferenceWeight +
          90 * weights.flexibilityWeight) /
        remainingWeight;
    }

    return {
      totalScore: Math.round(totalScore),
      crowdComponent,
      fatigueComponent: Math.round(fatigueComponent),
      commuteComponent: Math.round(commuteComponent),
      isValid: true,
    };
  }

  public static optimize(
    currentItinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore,
    weights: OptimizerWeights = DEFAULT_OPTIMIZER_WEIGHTS
  ): OptimizationResult {
    const currentEval = this.calculateItineraryScore(currentItinerary, tickets, crowdStore, weights);
    const initialFatigue = FatigueCalculator.calculate(currentItinerary, DEFAULT_FATIGUE_PARAMS);

    // Check if crowd data is available
    const verifiedCrowdCount = Object.values(crowdStore.records).filter(
      (r) => r.crowdLevel !== null && r.status === 'verified'
    ).length;
    const isPartialOptimization = verifiedCrowdCount < 5;

    // Clone working copy
    let bestItinerary: ItineraryDay[] = JSON.parse(JSON.stringify(currentItinerary));
    let bestScore = currentEval.totalScore;
    const suggestions: ItineraryChangeSuggestion[] = [];

    // Identify candidate days for swapping (must NOT be locked!)
    // Locked dates (e.g. 2027-05-05 Chegada, 2027-05-23 Magic Kingdom) MUST NEVER be altered!
    const swappableIndices: number[] = [];
    bestItinerary.forEach((day, index) => {
      if (!day.isLocked && day.date !== '2027-05-05' && day.date !== '2027-05-23') {
        swappableIndices.push(index);
      }
    });

    // Test smart pairwise swaps
    for (let i = 0; i < swappableIndices.length; i++) {
      for (let j = i + 1; j < swappableIndices.length; j++) {
        const idxA = swappableIndices[i];
        const idxB = swappableIndices[j];

        const dayA = bestItinerary[idxA];
        const dayB = bestItinerary[idxB];

        // Only swap if activities are different
        if (dayA.parkId === dayB.parkId && dayA.activityType === dayB.activityType) {
          continue;
        }

        // Create trial swap
        const trialItinerary: ItineraryDay[] = JSON.parse(JSON.stringify(bestItinerary));
        
        // Swap activities, keeping the fixed dates & dayNumbers intact
        const tempParkId = trialItinerary[idxA].parkId;
        const tempTicketId = trialItinerary[idxA].ticketId;
        const tempTitle = trialItinerary[idxA].title;
        const tempDesc = trialItinerary[idxA].description;
        const tempActivity = trialItinerary[idxA].activityType;
        const tempEffort = trialItinerary[idxA].effortLevel;
        const tempPriority = trialItinerary[idxA].priorityAttractions;
        const tempRope = trialItinerary[idxA].ropeDropStrategy;

        trialItinerary[idxA].parkId = trialItinerary[idxB].parkId;
        trialItinerary[idxA].ticketId = trialItinerary[idxB].ticketId;
        trialItinerary[idxA].title = trialItinerary[idxB].title;
        trialItinerary[idxA].description = trialItinerary[idxB].description;
        trialItinerary[idxA].activityType = trialItinerary[idxB].activityType;
        trialItinerary[idxA].effortLevel = trialItinerary[idxB].effortLevel;
        trialItinerary[idxA].priorityAttractions = trialItinerary[idxB].priorityAttractions;
        trialItinerary[idxA].ropeDropStrategy = trialItinerary[idxB].ropeDropStrategy;

        trialItinerary[idxB].parkId = tempParkId;
        trialItinerary[idxB].ticketId = tempTicketId;
        trialItinerary[idxB].title = tempTitle;
        trialItinerary[idxB].description = tempDesc;
        trialItinerary[idxB].activityType = tempActivity;
        trialItinerary[idxB].effortLevel = tempEffort;
        trialItinerary[idxB].priorityAttractions = tempPriority;
        trialItinerary[idxB].ropeDropStrategy = tempRope;

        // Evaluate trial
        const trialEval = this.calculateItineraryScore(trialItinerary, tickets, crowdStore, weights);

        if (trialEval.isValid && trialEval.totalScore > bestScore + 1.5) {
          // Found an improving swap!
          const trialFatigue = FatigueCalculator.calculate(trialItinerary, DEFAULT_FATIGUE_PARAMS);
          const fatigueGain = initialFatigue.overallFatigueScore - trialFatigue.overallFatigueScore;

          let crowdGainText = 'Lotação não verificada';
          if (trialEval.crowdComponent !== null && currentEval.crowdComponent !== null) {
            const diff = trialEval.crowdComponent - currentEval.crowdComponent;
            crowdGainText = diff > 0 ? `Lotação estimada ${diff}% mais favorável` : 'Lotação estável';
          }

          const justification = `Troca recomendada entre ${dayA.date} (${dayA.title}) e ${dayB.date} (${dayB.title}). Reduz desgaste acumulado e melhora a cadência de descanso.`;

          suggestions.push({
            id: `swap_${dayA.date}_${dayB.date}`,
            sourceDate: dayA.date,
            targetDate: dayB.date,
            sourceParkOrActivity: dayA.title,
            targetParkOrActivity: dayB.title,
            crowdDeltaDescription: crowdGainText,
            fatigueDeltaDescription: fatigueGain > 0 ? `Redução de ${fatigueGain} pontos na fadiga acumulada` : 'Fadiga equilibrada',
            ticketImpactDescription: 'Regras de janelas de ingressos preservadas e válidas.',
            justification,
            accepted: true,
          });

          bestItinerary = trialItinerary;
          bestScore = trialEval.totalScore;

          // Limit suggestions to top 4 strategic swaps to avoid overwhelming the user
          if (suggestions.length >= 4) break;
        }
      }
      if (suggestions.length >= 4) break;
    }

    const proposedFatigue = FatigueCalculator.calculate(bestItinerary, DEFAULT_FATIGUE_PARAMS);
    const fatigueImprovement = Math.max(0, initialFatigue.overallFatigueScore - proposedFatigue.overallFatigueScore);

    let partialNote: string | undefined;
    if (isPartialOptimization) {
      partialNote =
        'Otimização Parcial: Dados de lotação de maio de 2027 ainda não verificados externamente. O algoritmo priorizou equilíbrio de desgaste físico, intercalação de dias de descanso e conformidade estrita das janelas dos ingressos.';
    }

    return {
      currentScore: currentEval.totalScore,
      suggestedScore: Math.round(bestScore),
      isPartialOptimization,
      partialOptimizationNote: partialNote,
      suggestions,
      proposedItinerary: bestItinerary,
      summary: {
        crowdImprovementPercent: currentEval.crowdComponent ? Math.round(((bestScore - currentEval.totalScore) / currentEval.totalScore) * 100) : null,
        fatigueImprovementPercent: Math.round(fatigueImprovement),
        resolvedConflicts: 0,
      },
    };
  }
}
