export type FatigueLevel = 'Descanso' | 'Leve' | 'Moderado' | 'Alto' | 'Crítico';

export interface FatigueParameters {
  maxConsecutiveParkDays: number; // default: 3
  maxDailyWalkingKm: number; // default: 15
  restDayRecoveryBonus: number; // default: 35
  longCommuteThresholdMinutes: number; // default: 60 (e.g. Tampa)
  userToleranceMultiplier: number; // 0.8 (sensitive) to 1.2 (athletic/high tolerance)
}

export interface DayFatigueResult {
  date: string;
  dayNumber: number;
  activityType: string;
  baseScore: number;
  cumulativeScore: number;
  level: FatigueLevel;
  walkKm: number;
  transitMinutes: number;
  consecutiveParkDays: number;
  alerts: string[];
}

export interface ItineraryFatigueSummary {
  dailyResults: Record<string, DayFatigueResult>;
  overallFatigueScore: number; // 0 to 100
  criticalAlerts: string[];
  recommendedRestDaysCount: number;
  actualRestDaysCount: number;
  peakFatigueDay: string;
}
