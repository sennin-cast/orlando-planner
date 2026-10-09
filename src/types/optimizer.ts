import { ItineraryDay } from './itinerary';

export interface OptimizerWeights {
  crowdWeight: number; // default: 0.40
  fatigueWeight: number; // default: 0.25
  commuteWeight: number; // default: 0.15
  preferenceWeight: number; // default: 0.10
  flexibilityWeight: number; // default: 0.10
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

export interface OptimizationResult {
  currentScore: number;
  suggestedScore: number;
  isPartialOptimization: boolean; // True if crowd forecast is unavailable or partially verified
  partialOptimizationNote?: string;
  suggestions: ItineraryChangeSuggestion[];
  proposedItinerary: ItineraryDay[];
  summary: {
    crowdImprovementPercent: number | null;
    fatigueImprovementPercent: number;
    resolvedConflicts: number;
  };
}
