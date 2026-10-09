export type ActivityType = 'park' | 'rest' | 'arrival' | 'departure' | 'shopping' | 'travel';
export type EffortLevel = 'OFF' | 'Leve' | 'Médio' | 'Pesado';

export interface ItineraryDay {
  date: string; // YYYY-MM-DD
  dayOfWeek: string; // 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom', 'Seg', 'Ter'
  dayNumber: number; // 1 to 19
  title: string;
  description: string;
  activityType: ActivityType;
  parkId: string | null;
  ticketId: string | null;
  isLocked: boolean; // Cannot be moved or altered by optimization
  effortLevel: EffortLevel;
  plannedArrivalTime?: string;
  plannedDepartureTime?: string;
  ropeDropStrategy?: string;
  priorityAttractions?: string[];
  diningNotes?: string;
  expressPassNotes?: string;
  personalNotes?: string;
  userCustomized?: boolean;
}

export interface DaySwapAction {
  sourceDate: string;
  targetDate: string;
}
