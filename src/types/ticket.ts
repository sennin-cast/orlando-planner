import { ParkOperator } from './park';

export type TicketRuleStatus = 'confirmed' | 'pending_confirmation' | 'unverifiable';

export interface TicketDefinition {
  id: string;
  name: string;
  operator: ParkOperator;
  allowedParkIds: string[];
  totalVisitsAllowed: number;
  allowParkRepetition: boolean;
  maxRepetitionPerPark?: Record<string, number>; // e.g. Epic Universe max 2
  validityWindowDays: number | null; // e.g., 7 days for Disney 4-Park, 14 days for Universal
  fixedStartDate?: string | null;
  fixedEndDate?: string | null;
  ruleStatus: TicketRuleStatus;
  officialSourceNote: string;
  isIndependentTicket?: boolean; // e.g., Magic Kingdom single-day pass on 23/05/2027
  lockedDate?: string | null; // e.g., '2027-05-23'
}

export type ValidationStatus = 'valid' | 'warning' | 'conflict' | 'unverifiable';

export interface ValidationIssue {
  code: string;
  severity: 'conflict' | 'warning' | 'info';
  message: string;
  ticketId?: string;
  date?: string;
  parkId?: string;
}

export interface TicketUsageStatus {
  ticketId: string;
  name: string;
  operator: ParkOperator;
  usedVisits: number;
  maxVisits: number;
  usedDates: string[];
  firstUsedDate: string | null;
  lastUsedDate: string | null;
  windowExpiryDate: string | null;
  isExpired: boolean;
  isOverLimit: boolean;
  ruleStatus: TicketRuleStatus;
}

export interface TicketValidationResult {
  status: ValidationStatus;
  issues: ValidationIssue[];
  ticketUsages: Record<string, TicketUsageStatus>;
  unassignedVisits: Array<{ date: string; parkId: string }>;
}
