export type ParkOperator = 'disney' | 'universal' | 'seaworld';

export interface ParkAttraction {
  id: string;
  name: string;
  tier: 'headliner' | 'tier1' | 'family';
  lightningLaneOrExpress: boolean;
  minHeightCm?: number;
}

export interface ParkInfo {
  id: string;
  name: string;
  shortName: string;
  operator: ParkOperator;
  location: 'Orlando' | 'Tampa';
  defaultOpeningHour: string;
  defaultClosingHour: string;
  avgWalkingKm: number;
  avgTransitMinutes: number; // e.g. Busch Gardens is 75-80 min each way
  baseEffort: 'Leve' | 'Médio' | 'Pesado';
  color: string;
  accentColor: string;
  ropeDropAdvice: string;
  expressPassNote: string;
  keyAttractions: string[];
}
