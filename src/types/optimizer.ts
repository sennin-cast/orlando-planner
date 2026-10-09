import { ItineraryDay } from './itinerary';

export interface OptimizerPreferences {
  preferDisneyFirstPark: boolean;
  preserveLockedDates: boolean;
  preserveDiningReservations: boolean;
  allowReorderOffDays: boolean;
}

export const DEFAULT_OPTIMIZER_PREFERENCES: OptimizerPreferences = {
  preferDisneyFirstPark: true,
  preserveLockedDates: true,
  preserveDiningReservations: true,
  allowReorderOffDays: true,
};

// Legacy interface retained for backward compatibility with existing storage or imports
export interface OptimizerWeights {
  crowdWeight: number;
  fatigueWeight: number;
  commuteWeight: number;
  preferenceWeight: number;
  flexibilityWeight: number;
}

export interface ItineraryChangeSuggestion {
  id: string;
  sourceDate: string;
  targetDate: string;
  sourceParkOrActivity: string;
  targetParkOrActivity: string;
  crowdDeltaDescription: string;
  fatigueDeltaDescription: string;
  ticketImpactDescription: string;
  justification: string;
  accepted: boolean;
}

export interface DayExplanation {
  date: string;
  parkOrActivity: string;
  previousParkOrActivity: string;
  changed: boolean;
  crowdLevel: number | null;
  previousCrowdLevel: number | null;
  reason: string;
  isFirstPark?: boolean;
  isLocked?: boolean;
}

export interface OptimizationResult {
  currentScore: number;
  suggestedScore: number;
  isPartialOptimization: boolean;
  partialOptimizationNote?: string;
  suggestions: ItineraryChangeSuggestion[];
  proposedItinerary: ItineraryDay[];
  explanations?: DayExplanation[];
  conflicts?: string[];
  summary: {
    crowdImprovementPercent: number | null;
    fatigueImprovementPercent: number;
    resolvedConflicts: number;
    firstParkName?: string;
    firstParkReason?: string;
    lockedDaysPreserved?: number;
    restDaysCount?: number;
  };
}
