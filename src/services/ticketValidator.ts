import { TicketDefinition, TicketValidationResult, ValidationIssue, TicketUsageStatus } from '../types/ticket';
import { ItineraryDay } from '../types/itinerary';
import { daysBetween, addDays } from '../utils/dateUtils';

export function validateTickets(
  itinerary: ItineraryDay[],
  tickets: TicketDefinition[]
): TicketValidationResult {
  const issues: ValidationIssue[] = [];
  const ticketMap = new Map<string, TicketDefinition>();
  tickets.forEach((t) => ticketMap.set(t.id, t));

  // 1. Group usage by ticket
  const ticketUsageMap = new Map<
    string,
    {
      usedVisits: number;
      dates: string[];
      parkCounts: Record<string, number>;
    }
  >();

  tickets.forEach((t) => {
    ticketUsageMap.set(t.id, {
      usedVisits: 0,
      dates: [],
      parkCounts: {},
    });
  });

  const unassignedVisits: Array<{ date: string; parkId: string }> = [];
  const dateParkOccurrences = new Map<string, string[]>();

  // Iterate over itinerary
  itinerary.forEach((day) => {
    if (day.parkId) {
      const existing = dateParkOccurrences.get(day.date) || [];
      existing.push(day.parkId);
      dateParkOccurrences.set(day.date, existing);

      if (!day.ticketId) {
        unassignedVisits.push({ date: day.date, parkId: day.parkId });
        issues.push({
          code: 'UNASSIGNED_TICKET',
          severity: 'conflict',
          message: `Visita ao parque em ${day.date} (${day.parkId}) não possui ingresso associado.`,
          date: day.date,
          parkId: day.parkId,
        });
      } else {
        const ticket = ticketMap.get(day.ticketId);
        if (!ticket) {
          issues.push({
            code: 'TICKET_NOT_FOUND',
            severity: 'conflict',
            message: `Ingresso com ID "${day.ticketId}" associado ao dia ${day.date} não foi encontrado no cadastro.`,
            date: day.date,
            ticketId: day.ticketId,
          });
        } else {
          // Check if park is allowed by this ticket
          if (!ticket.allowedParkIds.includes(day.parkId)) {
            issues.push({
              code: 'PARK_NOT_ALLOWED',
              severity: 'conflict',
              message: `O ingresso "${ticket.name}" não permite acesso ao parque (${day.parkId}) em ${day.date}.`,
              date: day.date,
              ticketId: ticket.id,
              parkId: day.parkId,
            });
          }

          // Accumulate usage
          const usage = ticketUsageMap.get(ticket.id)!;
          usage.usedVisits += 1;
          usage.dates.push(day.date);
          usage.parkCounts[day.parkId] = (usage.parkCounts[day.parkId] || 0) + 1;
        }
      }
    }
  });

  // Check multiple parks on the same day
  dateParkOccurrences.forEach((parks, date) => {
    if (parks.length > 1) {
      issues.push({
        code: 'MULTIPLE_PARKS_SAME_DAY',
        severity: 'conflict',
        message: `Detectados múltiplos parques no mesmo dia (${date}): ${parks.join(', ')}. Não permitido sem passe Park Hopper expresso.`,
        date,
      });
    }
  });

  // Check specific isolation rule: 23/05/2027 Magic Kingdom MUST use independent single ticket
  const day23 = itinerary.find((d) => d.date === '2027-05-23');
  if (day23) {
    if (day23.parkId !== 'magic-kingdom') {
      issues.push({
        code: 'FINAL_DAY_MK_VIOLATION',
        severity: 'conflict',
        message: 'O dia 23/05/2027 deve obrigatoriamente ser reservado para Magic Kingdom.',
        date: '2027-05-23',
      });
    }
    if (day23.ticketId === 'ticket-disney-4park') {
      issues.push({
        code: 'FINAL_DAY_TICKET_POLLUTION',
        severity: 'conflict',
        message: 'O dia 23/05/2027 deve utilizar ingresso avulso independente e NÃO pode consumir o passe Disney 4-Park.',
        date: '2027-05-23',
        ticketId: 'ticket-disney-4park',
      });
    }
  }

  // 2. Validate ticket rules per ticket
  const ticketUsages: Record<string, TicketUsageStatus> = {};

  tickets.forEach((ticket) => {
    const usage = ticketUsageMap.get(ticket.id)!;
    const sortedDates = [...usage.dates].sort();
    const firstUsedDate = sortedDates.length > 0 ? sortedDates[0] : null;
    const lastUsedDate = sortedDates.length > 0 ? sortedDates[sortedDates.length - 1] : null;

    let windowExpiryDate: string | null = null;
    let isExpired = false;

    if (ticket.validityWindowDays && firstUsedDate) {
      windowExpiryDate = addDays(firstUsedDate, ticket.validityWindowDays - 1);
      if (lastUsedDate && daysBetween(firstUsedDate, lastUsedDate) >= ticket.validityWindowDays) {
        isExpired = true;
        const severity = ticket.ruleStatus === 'confirmed' ? 'conflict' : 'warning';
        issues.push({
          code: 'VALIDITY_WINDOW_EXCEEDED',
          severity,
          message: `O ingresso "${ticket.name}" excedeu a janela de validade de ${ticket.validityWindowDays} dias (1º uso: ${firstUsedDate}, último: ${lastUsedDate}, expiração: ${windowExpiryDate}).`,
          ticketId: ticket.id,
        });
      }
    }

    // Check fixed date boundaries
    if (ticket.fixedStartDate && firstUsedDate && firstUsedDate < ticket.fixedStartDate) {
      issues.push({
        code: 'VISIT_BEFORE_START_DATE',
        severity: 'conflict',
        message: `Uso do ingresso "${ticket.name}" antes da data de início permitida (${ticket.fixedStartDate}).`,
        ticketId: ticket.id,
      });
    }

    if (ticket.fixedEndDate && lastUsedDate && lastUsedDate > ticket.fixedEndDate) {
      issues.push({
        code: 'VISIT_AFTER_END_DATE',
        severity: 'conflict',
        message: `Uso do ingresso "${ticket.name}" após a data de término permitida (${ticket.fixedEndDate}).`,
        ticketId: ticket.id,
      });
    }

    // Check visit capacity
    const isOverLimit = usage.usedVisits > ticket.totalVisitsAllowed;
    if (isOverLimit) {
      issues.push({
        code: 'TICKET_OVERLIMIT',
        severity: 'conflict',
        message: `O ingresso "${ticket.name}" excedeu o número máximo de visitas permitidas (${usage.usedVisits}/${ticket.totalVisitsAllowed}).`,
        ticketId: ticket.id,
      });
    }

    // Check park repetition
    if (!ticket.allowParkRepetition) {
      Object.entries(usage.parkCounts).forEach(([parkId, count]) => {
        if (count > 1) {
          issues.push({
            code: 'PARK_REPETITION_FORBIDDEN',
            severity: 'conflict',
            message: `O ingresso "${ticket.name}" não permite repetir visitas ao mesmo parque (${parkId} visitado ${count} vezes).`,
            ticketId: ticket.id,
            parkId,
          });
        }
      });
    } else if (ticket.maxRepetitionPerPark) {
      Object.entries(usage.parkCounts).forEach(([parkId, count]) => {
        const max = ticket.maxRepetitionPerPark![parkId];
        if (max !== undefined && count > max) {
          issues.push({
            code: 'PARK_REPETITION_EXCEEDED',
            severity: 'conflict',
            message: `O ingresso "${ticket.name}" excedeu o limite de repetições para o parque ${parkId} (${count} visitas, máximo permitido: ${max}).`,
            ticketId: ticket.id,
            parkId,
          });
        }
      });
    }

    // Add notice for pending rules
    if (ticket.ruleStatus === 'pending_confirmation') {
      issues.push({
        code: 'TICKET_RULE_PENDING',
        severity: 'warning',
        message: `Regras de validade do ingresso "${ticket.name}" estão pendentes de confirmação para a temporada de 2027.`,
        ticketId: ticket.id,
      });
    }

    ticketUsages[ticket.id] = {
      ticketId: ticket.id,
      name: ticket.name,
      operator: ticket.operator,
      usedVisits: usage.usedVisits,
      maxVisits: ticket.totalVisitsAllowed,
      usedDates: sortedDates,
      firstUsedDate,
      lastUsedDate,
      windowExpiryDate,
      isExpired,
      isOverLimit,
      ruleStatus: ticket.ruleStatus,
    };
  });

  // Calculate overall validation status:
  // - 'conflict' if any conflict exists
  // - 'warning' if any warning exists (e.g. pending confirmation)
  // - 'valid' ONLY if zero conflicts AND zero warnings (Section 5 rule: never declare 100% valid if unconfirmed rules exist!)
  let status: 'valid' | 'warning' | 'conflict' | 'unverifiable' = 'valid';

  const hasConflict = issues.some((i) => i.severity === 'conflict');
  const hasWarning = issues.some((i) => i.severity === 'warning');

  if (hasConflict) {
    status = 'conflict';
  } else if (hasWarning) {
    status = 'warning';
  } else {
    status = 'valid';
  }

  return {
    status,
    issues,
    ticketUsages,
    unassignedVisits,
  };
}
