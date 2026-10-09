import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { FatigueCalculator } from './fatigueCalculator';

export interface DateCandidateEvaluation {
  date: string;
  dayOfWeek: string;
  currentActivityTitle: string;
  currentActivityType: string;
  isDateLocked: boolean;
  crowdLevel: number | null;
  crowdLabel: string;
  isRecommendedByCrowd: boolean;
  isBusyDayAlert: boolean;
  ticketCompatibility: {
    compatible: boolean;
    ticketName: string | null;
    ticketId: string | null;
    reason: string;
  };
  projectedFatigueScore: number;
  projectedFatigueLevel: string;
  hasConflictWithCurrentPlan: boolean;
  conflictNotes: string[];
  overallRatingScore: number; // 0 to 100 higher is better
  explanation: string;
}

export class ComparatorService {
  public static evaluateParkDates(
    parkId: string,
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore
  ): DateCandidateEvaluation[] {
    const parkInfo = PARKS_CATALOG[parkId];
    if (!parkInfo) return [];

    const fatigueSummary = FatigueCalculator.calculate(itinerary);

    // Filter tickets that allow this park
    const eligibleTickets = tickets.filter((t) => t.allowedParkIds.includes(parkId));

    return itinerary.map((day) => {
      const crowdRecord = crowdStore.records[`${day.date}_${parkId}`];
      const crowdLevel = crowdRecord?.crowdLevel ?? null;
      const isRecommended = crowdRecord?.isRecommended ?? false;
      const isBusyDay = crowdRecord?.isBusyDay ?? false;

      // Check current day activity
      const isDateLocked = day.isLocked;

      // Ticket check: simulate placing parkId on this date
      let ticketCompatibility = {
        compatible: false,
        ticketName: null as string | null,
        ticketId: null as string | null,
        reason: 'Nenhum ingresso cadastrado cobre este parque.',
      };

      if (eligibleTickets.length > 0) {
        // Pick best matching ticket
        const matchedTicket = eligibleTickets[0];
        ticketCompatibility = {
          compatible: true,
          ticketName: matchedTicket.name,
          ticketId: matchedTicket.id,
          reason: `Compatível com ${matchedTicket.name}`,
        };

        // If it's Magic Kingdom on 23/05
        if (day.date === '2027-05-23') {
          if (parkId === 'magic-kingdom') {
            ticketCompatibility = {
              compatible: true,
              ticketName: 'Magic Kingdom — Ingresso Avulso',
              ticketId: 'ticket-disney-mk-single',
              reason: 'Data travada para o encerramento da viagem com ingresso avulso.',
            };
          } else {
            ticketCompatibility = {
              compatible: false,
              ticketName: null,
              ticketId: null,
              reason: 'Data bloqueada exclusivamente para Magic Kingdom (Encerramento).',
            };
          }
        }
      }

      // Check conflict notes
      const conflictNotes: string[] = [];
      if (isDateLocked && day.parkId !== parkId) {
        conflictNotes.push(`Data está bloqueada com "${day.title}".`);
      }
      if (day.date === '2027-05-05') {
        conflictNotes.push('Dia reservado para voo e chegada a Orlando.');
      }

      const dayFatigue = fatigueSummary.dailyResults[day.date];
      const projectedFatigue = dayFatigue ? dayFatigue.cumulativeScore : 30;

      // Scoring
      let score = 50; // Neutral baseline
      if (crowdLevel !== null) {
        // 1 = +35 points, 10 = -30 points
        score += (6 - crowdLevel) * 7;
      } else {
        score += 0; // Neutral if no crowd data
      }

      if (projectedFatigue < 40) score += 15;
      else if (projectedFatigue > 70) score -= 20;

      if (isDateLocked && day.parkId !== parkId) score -= 100;
      if (day.activityType === 'park' && day.parkId === parkId) score += 10; // Already here

      let explanation = '';
      if (isDateLocked && day.parkId !== parkId) {
        explanation = 'Data indisponível pois está bloqueada com compromisso prioritário.';
      } else if (crowdLevel !== null) {
        explanation = `Previsão de lotação ${crowdLevel}/10 (${crowdLevel <= 4 ? 'favorável' : 'elevada'}). Desgaste físico estimado em nível ${dayFatigue?.level || 'Moderado'}.`;
      } else {
        explanation = `Lotação não verificada. Nível de desgaste estimado: ${dayFatigue?.level || 'Moderado'}.`;
      }

      let crowdLabel = 'Não disponível';
      if (crowdLevel !== null) {
        crowdLabel = `${crowdLevel}/10`;
      }

      return {
        date: day.date,
        dayOfWeek: day.dayOfWeek,
        currentActivityTitle: day.title,
        currentActivityType: day.activityType,
        isDateLocked,
        crowdLevel,
        crowdLabel,
        isRecommendedByCrowd: isRecommended,
        isBusyDayAlert: isBusyDay,
        ticketCompatibility,
        projectedFatigueScore: projectedFatigue,
        projectedFatigueLevel: dayFatigue?.level || 'Moderado',
        hasConflictWithCurrentPlan: conflictNotes.length > 0,
        conflictNotes,
        overallRatingScore: Math.max(0, Math.min(100, score)),
        explanation,
      };
    });
  }

  public static compareDates(
    parkId: string,
    dates: string[],
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore
  ): {
    evaluations: DateCandidateEvaluation[];
    bestCandidateDate: string | null;
    comparativeRationale: string;
  } {
    const all = this.evaluateParkDates(parkId, itinerary, tickets, crowdStore);
    const selected = all.filter((e) => dates.includes(e.date));

    if (selected.length === 0) {
      return {
        evaluations: [],
        bestCandidateDate: null,
        comparativeRationale: 'Nenhuma data selecionada para comparação.',
      };
    }

    // Sort by rating score descending
    const validCandidates = selected.filter((s) => !s.hasConflictWithCurrentPlan);
    const best = (validCandidates.length > 0 ? validCandidates : selected).reduce((prev, curr) =>
      curr.overallRatingScore > prev.overallRatingScore ? curr : prev
    );

    let comparativeRationale = `A data recomendada para ${PARKS_CATALOG[parkId]?.name || parkId} é ${best.date} (${best.dayOfWeek}). `;
    if (best.crowdLevel !== null) {
      comparativeRationale += `Apresenta o menor índice de lotação (${best.crowdLevel}/10) e equilíbrio favorável de desgaste físico.`;
    } else {
      comparativeRationale += `Apresenta melhor janela de recuperação física no planejamento atual.`;
    }

    return {
      evaluations: selected,
      bestCandidateDate: best.date,
      comparativeRationale,
    };
  }
}
