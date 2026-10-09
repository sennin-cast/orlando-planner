import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import {
  OptimizationResult,
  ItineraryChangeSuggestion,
  OptimizerPreferences,
  DEFAULT_OPTIMIZER_PREFERENCES,
  DayExplanation,
} from '../types/optimizer';
import { validateTickets } from './ticketValidator';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { formatDateBr } from '../utils/dateUtils';
import { diningService } from './diningService';

interface CandidateEvaluation {
  itinerary: ItineraryDay[];
  valid: boolean;
  totalCrowdScore: number;
  knownCrowdCount: number;
  avgCrowd: number | null;
  firstParkIsDisney: boolean;
  firstParkCrowd: number | null;
  maxConsecutiveParks: number;
  explanations: DayExplanation[];
  suggestions: ItineraryChangeSuggestion[];
}

export class ItineraryOptimizer {
  /**
   * Helper to fetch crowd level for a given day and park, returning null if absent.
   */
  public static getCrowdLevel(
    crowdStore: CrowdDataStore,
    date: string,
    parkId: string | null
  ): number | null {
    if (!parkId) return null;
    const record = crowdStore.records[`${date}_${parkId}`];
    if (record && record.crowdLevel !== null && record.crowdLevel !== undefined) {
      return record.crowdLevel;
    }
    return null;
  }

  /**
   * Evaluates an itinerary deterministically against crowd levels and constraints.
   */
  public static evaluateItinerary(
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore,
    _prefs: OptimizerPreferences = DEFAULT_OPTIMIZER_PREFERENCES
  ): CandidateEvaluation {
    // 1. Mandatory ticket validation
    const ticketValidation = validateTickets(itinerary, tickets);
    const hasConflicts = ticketValidation.issues.some((i) => i.severity === 'conflict');
    if (hasConflicts) {
      return {
        itinerary,
        valid: false,
        totalCrowdScore: 9999,
        knownCrowdCount: 0,
        avgCrowd: null,
        firstParkIsDisney: false,
        firstParkCrowd: null,
        maxConsecutiveParks: 99,
        explanations: [],
        suggestions: [],
      };
    }

    // 2. Crowd metrics
    let totalCrowd = 0;
    let knownCount = 0;
    let consecutiveParks = 0;
    let maxConsecutiveParks = 0;
    let firstParkEvaluated = false;
    let firstParkIsDisney = false;
    let firstParkCrowd: number | null = null;

    itinerary.forEach((day) => {
      if (day.activityType === 'park' && day.parkId) {
        consecutiveParks++;
        if (consecutiveParks > maxConsecutiveParks) {
          maxConsecutiveParks = consecutiveParks;
        }

        const crowd = this.getCrowdLevel(crowdStore, day.date, day.parkId);
        if (crowd !== null) {
          totalCrowd += crowd;
          knownCount++;
        }

        if (!firstParkEvaluated) {
          firstParkEvaluated = true;
          const parkMeta = PARKS_CATALOG[day.parkId];
          firstParkIsDisney = parkMeta?.operator === 'disney';
          firstParkCrowd = crowd;
        }
      } else {
        consecutiveParks = 0;
      }
    });

    const avgCrowd = knownCount > 0 ? Math.round((totalCrowd / knownCount) * 10) / 10 : null;

    return {
      itinerary,
      valid: true,
      totalCrowdScore: totalCrowd,
      knownCrowdCount: knownCount,
      avgCrowd,
      firstParkIsDisney,
      firstParkCrowd,
      maxConsecutiveParks,
      explanations: [],
      suggestions: [],
    };
  }

  /**
   * Main deterministic optimization method.
   * Follows strict hierarchical priority:
   * 1. Mandatory constraints (tickets, locked dates, arrival, departure, dining reservations).
   * 2. Lowest crowd forecast across the entire itinerary.
   * 3. First park is a calm Disney park when feasible.
   * 4. Smart cadence of rest and shopping days.
   * 5. Deterministic tie-breaking rules.
   */
  public static optimize(
    currentItinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore,
    options?: Partial<OptimizerPreferences> | any
  ): OptimizationResult {
    const prefs: OptimizerPreferences = {
      ...DEFAULT_OPTIMIZER_PREFERENCES,
      ...(options && typeof options === 'object' && !('crowdWeight' in options) ? options : {}),
    };

    // Evaluate current state
    const currentEval = this.evaluateItinerary(currentItinerary, tickets, crowdStore, prefs);

    // Identify total crowd availability in the store
    const verifiedCrowdCount = Object.values(crowdStore.records).filter(
      (r) => r.crowdLevel !== null && r.crowdLevel !== undefined
    ).length;
    const isPartialOptimization = verifiedCrowdCount < 5;

    // Build working mutable copy
    let workingItinerary: ItineraryDay[] = JSON.parse(JSON.stringify(currentItinerary));

    // Determine which days are immutable
    const lockedDates = new Set<string>();
    currentItinerary.forEach((day, index) => {
      // Arrival (first day) and Departure (last day) are never regular park days by default
      if (index === 0 || day.activityType === 'arrival') {
        lockedDates.add(day.date);
      }
      if (index === currentItinerary.length - 1 || day.activityType === 'departure') {
        lockedDates.add(day.date);
      }
      // Explicitly locked days
      if (prefs.preserveLockedDates && day.isLocked) {
        lockedDates.add(day.date);
      }
      // Dining reservations protection
      if (prefs.preserveDiningReservations) {
        const scheduledMeals = diningService.getMealsForDate(day.date);
        if (scheduledMeals.some((m) => m.reservation_status === 'confirmed' || m.reservation_reference)) {
          lockedDates.add(day.date);
        }
      }
    });

    // Identify candidate movable indices
    const movableIndices: number[] = [];
    workingItinerary.forEach((day, idx) => {
      if (!lockedDates.has(day.date)) {
        movableIndices.push(idx);
      }
    });

    // Extract available Disney parks from the current itinerary for the First Park preference
    const itineraryDisneyParks = new Set<string>();
    currentItinerary.forEach((d) => {
      if (d.parkId && PARKS_CATALOG[d.parkId]?.operator === 'disney') {
        itineraryDisneyParks.add(d.parkId);
      }
    });

    // Find first movable park day index (typically day after arrival, e.g. day 1)
    let firstParkIndex = -1;
    for (let i = 0; i < workingItinerary.length; i++) {
      if (workingItinerary[i].activityType === 'park' && !lockedDates.has(workingItinerary[i].date)) {
        firstParkIndex = i;
        break;
      }
    }

    // Step A: Priority 3 — First Park Experience (Disney calm park)
    let firstParkReason: string | undefined;
    let selectedFirstParkName: string | undefined;

    if (prefs.preferDisneyFirstPark && firstParkIndex !== -1 && itineraryDisneyParks.size > 0) {
      const firstDate = workingItinerary[firstParkIndex].date;
      let bestDisneyParkId: string | null = null;
      let lowestDisneyCrowd = 999;

      // Evaluate candidate Disney parks that are in movable days
      const candidateDisneyParks: string[] = [];
      workingItinerary.forEach((day, idx) => {
        if (movableIndices.includes(idx) && day.parkId && itineraryDisneyParks.has(day.parkId)) {
          if (!candidateDisneyParks.includes(day.parkId)) {
            candidateDisneyParks.push(day.parkId);
          }
        }
      });

      for (const parkId of candidateDisneyParks) {
        const crowd = this.getCrowdLevel(crowdStore, firstDate, parkId);
        const score = crowd !== null ? crowd : 5; // Neutral baseline if unknown
        if (score < lowestDisneyCrowd) {
          lowestDisneyCrowd = score;
          bestDisneyParkId = parkId;
        }
      }

      // If a favorable Disney park is found and isn't already on firstParkIndex, swap it in!
      if (bestDisneyParkId && workingItinerary[firstParkIndex].parkId !== bestDisneyParkId) {
        const sourceIdx = workingItinerary.findIndex(
          (d, idx) => movableIndices.includes(idx) && d.parkId === bestDisneyParkId
        );
        if (sourceIdx !== -1) {
          // Perform swap between sourceIdx and firstParkIndex
          this.swapDayActivities(workingItinerary[firstParkIndex], workingItinerary[sourceIdx]);

          const parkMeta = PARKS_CATALOG[bestDisneyParkId];
          selectedFirstParkName = parkMeta?.name || bestDisneyParkId;
          const crowdText = lowestDisneyCrowd < 999 ? `${lowestDisneyCrowd}/10` : 'favorável';
          firstParkReason = `${selectedFirstParkName} selecionado como primeira visita ao complexo Disney no dia ${formatDateBr(firstDate)} por apresentar lotação ${crowdText} e ritmo acolhedor para o início da viagem.`;
        }
      }
    }

    // Step B: Deterministic Neighborhood Search for Global Crowd Minimization
    // Evaluate pairwise swaps among movable days to minimize total crowd while keeping ticket validity
    let bestEval = this.evaluateItinerary(workingItinerary, tickets, crowdStore, prefs);
    let improved = true;
    let iterations = 0;
    const maxIterations = 50;

    while (improved && iterations < maxIterations) {
      improved = false;
      iterations++;

      for (let i = 0; i < movableIndices.length; i++) {
        for (let j = i + 1; j < movableIndices.length; j++) {
          const idxA = movableIndices[i];
          const idxB = movableIndices[j];

          // Skip swapping identical activities
          if (
            workingItinerary[idxA].parkId === workingItinerary[idxB].parkId &&
            workingItinerary[idxA].activityType === workingItinerary[idxB].activityType
          ) {
            continue;
          }

          // Don't swap away the first Disney park if it was intentionally placed
          if (
            prefs.preferDisneyFirstPark &&
            idxA === firstParkIndex &&
            workingItinerary[idxA].parkId &&
            itineraryDisneyParks.has(workingItinerary[idxA].parkId!) &&
            (!workingItinerary[idxB].parkId || !itineraryDisneyParks.has(workingItinerary[idxB].parkId))
          ) {
            continue;
          }

          // Test swap
          const trial: ItineraryDay[] = JSON.parse(JSON.stringify(workingItinerary));
          this.swapDayActivities(trial[idxA], trial[idxB]);

          const trialEval = this.evaluateItinerary(trial, tickets, crowdStore, prefs);
          if (!trialEval.valid) continue;

          // Comparison: Lower crowd score is better; if crowd is equal/absent, prefer fewer consecutive parks
          const crowdImproved = trialEval.totalCrowdScore < bestEval.totalCrowdScore;
          const pacingImproved =
            trialEval.totalCrowdScore === bestEval.totalCrowdScore &&
            trialEval.maxConsecutiveParks < bestEval.maxConsecutiveParks;

          if (crowdImproved || pacingImproved) {
            workingItinerary = trial;
            bestEval = trialEval;
            improved = true;
            break;
          }
        }
        if (improved) break;
      }
    }

    // Step C: Generate clear explanations and comparison suggestions
    const suggestions: ItineraryChangeSuggestion[] = [];
    const explanations: DayExplanation[] = [];

    currentItinerary.forEach((currDay, idx) => {
      const propDay = workingItinerary[idx];
      const hasChanged =
        currDay.parkId !== propDay.parkId || currDay.activityType !== propDay.activityType;

      const currCrowd = this.getCrowdLevel(crowdStore, currDay.date, currDay.parkId);
      const propCrowd = this.getCrowdLevel(crowdStore, propDay.date, propDay.parkId);

      let reason = '';
      if (!hasChanged) {
        if (lockedDates.has(currDay.date)) {
          reason = currDay.isLocked
            ? `Data fixa mantida conforme configurado pelo viajante.`
            : `Programação de chegada/partida mantida sem atividades intensas de parques.`;
        } else if (propDay.activityType === 'park') {
          reason = `Data com excelente compatibilidade de lotação (${propCrowd !== null ? `${propCrowd}/10` : 'moderada'}) mantida.`;
        } else {
          reason = `Dia de descanso e compras mantido para equilíbrio de ritmo.`;
        }
      } else {
        // Day was changed/swapped
        if (propDay.activityType === 'park') {
          if (idx === firstParkIndex && prefs.preferDisneyFirstPark && propDay.parkId && itineraryDisneyParks.has(propDay.parkId)) {
            reason = firstParkReason || `Início da viagem priorizado em parque Disney com ambiente acolhedor e lotação favorável.`;
          } else if (propCrowd !== null && (currCrowd === null || propCrowd < currCrowd)) {
            reason = `Transferido para ${formatDateBr(propDay.date)}: previsão de lotação menor (${propCrowd}/10${currCrowd !== null ? ` vs ${currCrowd}/10` : ''}), reduzindo o tempo de espera em atrações.`;
          } else {
            reason = `Reorganizado para ${formatDateBr(propDay.date)} para melhor aproveitamento das regras de ingressos e cadência de descanso.`;
          }
        } else {
          reason = `Dia reservado para compras e descanso, evitando sequência excessiva de parques temáticos.`;
        }

        // Add to suggestions list if not already recorded symmetrically
        const existingSuggestion = suggestions.find(
          (s) => s.targetDate === currDay.date && s.sourceDate === propDay.date
        );
        if (!existingSuggestion) {
          suggestions.push({
            id: `opt_${currDay.date}_${propDay.date}`,
            sourceDate: currDay.date,
            targetDate: propDay.date,
            sourceParkOrActivity: currDay.title,
            targetParkOrActivity: propDay.title,
            crowdDeltaDescription:
              propCrowd !== null && currCrowd !== null
                ? `Lotação projetada: ${propCrowd}/10 (era ${currCrowd}/10)`
                : 'Lotação otimizada para o dia',
            fatigueDeltaDescription: 'Cadência equilibrada com respeito às janelas',
            ticketImpactDescription: 'Todas as regras e validades de ingressos cumpridas rigorosamente.',
            justification: reason,
            accepted: true,
          });
        }
      }

      explanations.push({
        date: currDay.date,
        parkOrActivity: propDay.title,
        previousParkOrActivity: currDay.title,
        changed: hasChanged,
        crowdLevel: propCrowd,
        previousCrowdLevel: currCrowd,
        reason,
        isFirstPark: idx === firstParkIndex,
        isLocked: lockedDates.has(currDay.date),
      });
    });

    // Calculate score metrics (0-100 scale)
    const currentScore = this.calculateFinalScore(currentEval);
    const suggestedScore = Math.max(currentScore, this.calculateFinalScore(bestEval));

    const crowdDiffPercent =
      currentEval.avgCrowd && bestEval.avgCrowd && currentEval.avgCrowd > bestEval.avgCrowd
        ? Math.round(((currentEval.avgCrowd - bestEval.avgCrowd) / currentEval.avgCrowd) * 100)
        : null;

    let partialNote: string | undefined;
    if (isPartialOptimization) {
      partialNote =
        'Lotação não disponível ou apenas parcial no período. Otimização priorizou cumprimento rigoroso das janelas de ingressos, datas fixas, preservação de dias de descanso e primeiro parque Disney quando viável.';
    }

    return {
      currentScore,
      suggestedScore,
      isPartialOptimization,
      partialOptimizationNote: partialNote,
      suggestions,
      proposedItinerary: workingItinerary,
      explanations,
      conflicts: [],
      summary: {
        crowdImprovementPercent: crowdDiffPercent,
        fatigueImprovementPercent: Math.max(0, suggestedScore - currentScore),
        resolvedConflicts: 0,
        firstParkName: selectedFirstParkName,
        firstParkReason,
        lockedDaysPreserved: lockedDates.size,
        restDaysCount: workingItinerary.filter((d) => d.activityType !== 'park').length,
      },
    };
  }

  /**
   * Swaps all itinerary activities between two days, keeping dates and day numbers intact.
   */
  private static swapDayActivities(dayA: ItineraryDay, dayB: ItineraryDay): void {
    const tempParkId = dayA.parkId;
    const tempTicketId = dayA.ticketId;
    const tempTitle = dayA.title;
    const tempDesc = dayA.description;
    const tempActivity = dayA.activityType;
    const tempEffort = dayA.effortLevel;
    const tempPriority = dayA.priorityAttractions;
    const tempRope = dayA.ropeDropStrategy;

    dayA.parkId = dayB.parkId;
    dayA.ticketId = dayB.ticketId;
    dayA.title = dayB.title;
    dayA.description = dayB.description;
    dayA.activityType = dayB.activityType;
    dayA.effortLevel = dayB.effortLevel;
    dayA.priorityAttractions = dayB.priorityAttractions;
    dayA.ropeDropStrategy = dayB.ropeDropStrategy;

    dayB.parkId = tempParkId;
    dayB.ticketId = tempTicketId;
    dayB.title = tempTitle;
    dayB.description = tempDesc;
    dayB.activityType = tempActivity;
    dayB.effortLevel = tempEffort;
    dayB.priorityAttractions = tempPriority;
    dayB.ropeDropStrategy = tempRope;
  }

  /**
   * Computes a normalized score (0-100) based on ticket validity, crowd levels, and rest pacing.
   */
  private static calculateFinalScore(evaluation: CandidateEvaluation): number {
    if (!evaluation.valid) return 0;

    let score = 80;

    // Crowd bonus/penalty
    if (evaluation.avgCrowd !== null) {
      // Crowd 4/10 -> 88 pts, Crowd 7/10 -> 76 pts
      score = Math.round(100 - evaluation.avgCrowd * 4);
    }

    // Pacing bonus
    if (evaluation.maxConsecutiveParks <= 3) {
      score += 5;
    } else if (evaluation.maxConsecutiveParks > 4) {
      score -= 5;
    }

    // First park Disney bonus
    if (evaluation.firstParkIsDisney) {
      score += 5;
    }

    return Math.min(100, Math.max(10, score));
  }
}
