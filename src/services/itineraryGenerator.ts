import { ItineraryDay, EffortLevel } from '../types/itinerary';
import { addDays, getDayOfWeekPt, daysBetween } from '../utils/dateUtils';
import { PARKS_CATALOG } from '../data/parksCatalog';

export interface GeneratorPreferences {
  totalDays?: number; // e.g. 7 to 25
  startDate: string; // Data de Chegada (Início), e.g. '2027-05-05'
  endDate: string; // Data de Partida (Final), e.g. '2027-05-23'
  profile: 'equilibrado' | 'foco_parques' | 'economico_compras' | 'familia';
  includeBuschGardensTampa: boolean;
  includeEpicUniverseTwoDays: boolean;
  departureDayHasPark?: boolean; // Se o dia de partida inclui parque ou é dedicado a check-out/voo
}

export class ItineraryGenerator {
  public static generateCustomItinerary(prefs: GeneratorPreferences): ItineraryDay[] {
    const startDate = prefs.startDate || '2027-05-05';
    let endDate = prefs.endDate;
    if (!endDate) {
      const defaultDuration = prefs.totalDays || 19;
      endDate = addDays(startDate, defaultDuration - 1);
    }

    // Calculate total days from startDate and endDate
    let calculatedDays = daysBetween(startDate, endDate) + 1;
    if (isNaN(calculatedDays) || calculatedDays < 3) {
      calculatedDays = prefs.totalDays || 19;
    }
    const totalDays = Math.max(3, Math.min(35, calculatedDays));
    const itinerary: ItineraryDay[] = [];

    // Prioritized list of parks based on profile
    let priorityParkSequence: Array<{ parkId: string; effort: EffortLevel; title: string }> = [];

    if (prefs.profile === 'foco_parques') {
      priorityParkSequence = [
        { parkId: 'epic-universe', effort: 'Pesado', title: 'Universal Epic Universe — Visita 1' },
        { parkId: 'islands-of-adventure', effort: 'Pesado', title: 'Universal Islands of Adventure' },
        { parkId: 'magic-kingdom', effort: 'Pesado', title: 'Magic Kingdom' },
        { parkId: 'hollywood-studios', effort: 'Pesado', title: 'Disney\'s Hollywood Studios' },
        { parkId: 'universal-studios', effort: 'Médio', title: 'Universal Studios Florida' },
        { parkId: 'epcot', effort: 'Pesado', title: 'EPCOT' },
        { parkId: 'busch-gardens', effort: 'Médio', title: 'Busch Gardens Tampa Bay' },
        { parkId: 'animal-kingdom', effort: 'Leve', title: 'Disney\'s Animal Kingdom' },
        { parkId: 'seaworld', effort: 'Leve', title: 'SeaWorld Orlando' },
        { parkId: 'volcano-bay', effort: 'Leve', title: 'Universal Volcano Bay' },
        { parkId: 'epic-universe', effort: 'Pesado', title: 'Universal Epic Universe — Visita 2' },
      ];
    } else if (prefs.profile === 'economico_compras') {
      priorityParkSequence = [
        { parkId: 'magic-kingdom', effort: 'Pesado', title: 'Magic Kingdom' },
        { parkId: 'epic-universe', effort: 'Pesado', title: 'Universal Epic Universe' },
        { parkId: 'islands-of-adventure', effort: 'Pesado', title: 'Universal Islands of Adventure' },
        { parkId: 'epcot', effort: 'Pesado', title: 'EPCOT' },
        { parkId: 'hollywood-studios', effort: 'Pesado', title: 'Disney\'s Hollywood Studios' },
        { parkId: 'seaworld', effort: 'Leve', title: 'SeaWorld Orlando' },
        { parkId: 'animal-kingdom', effort: 'Leve', title: 'Disney\'s Animal Kingdom' },
      ];
    } else {
      // Padrão Equilibrado
      priorityParkSequence = [
        { parkId: 'seaworld', effort: 'Leve', title: 'SeaWorld Orlando' },
        { parkId: 'universal-studios', effort: 'Médio', title: 'Universal Studios Florida' },
        { parkId: 'busch-gardens', effort: 'Médio', title: 'Busch Gardens Tampa Bay' },
        { parkId: 'volcano-bay', effort: 'Leve', title: 'Universal Volcano Bay' },
        { parkId: 'epic-universe', effort: 'Pesado', title: 'Universal Epic Universe — Visita 1' },
        { parkId: 'islands-of-adventure', effort: 'Pesado', title: 'Universal Islands of Adventure' },
        { parkId: 'animal-kingdom', effort: 'Leve', title: 'Disney\'s Animal Kingdom' },
        { parkId: 'hollywood-studios', effort: 'Pesado', title: 'Disney\'s Hollywood Studios' },
        { parkId: 'epcot', effort: 'Pesado', title: 'EPCOT' },
        { parkId: 'epic-universe', effort: 'Pesado', title: 'Universal Epic Universe — Visita 2' },
        { parkId: 'magic-kingdom', effort: 'Pesado', title: 'Magic Kingdom — Passe Disney' },
      ];
    }

    if (!prefs.includeBuschGardensTampa) {
      priorityParkSequence = priorityParkSequence.filter((p) => p.parkId !== 'busch-gardens');
    }

    const shoppingThemes = [
      {
        title: 'Descanso / International Premium Outlets & Ross',
        description: 'Compras no maior outlet de Orlando (Nike Factory, Adidas, Tommy) + garimpo na Ross Dress for Less (malas de viagem e tênis por $25-$45).',
        activityType: 'shopping' as const,
        notes: 'Dica: Chegue às 10h no International Premium Outlets para pegar vagas perto da Nike.',
      },
      {
        title: 'Descanso / Vineland Premium Outlets & Best Buy',
        description: 'Compras no Vineland Premium (mais organizado, perto da Disney) e eletrônicos/fones na Best Buy / Apple Store do Mall at Millenia.',
        activityType: 'shopping' as const,
        notes: 'Best Buy: procure itens Open-Box com garantia de fábrica e até 30% de desconto.',
      },
      {
        title: 'Descanso / Disney Springs & Lake Buena Vista Stores',
        description: 'Manhã nas Lake Buena Vista Factory Stores (preços mais baixos e fila zero na Nike) e tarde relaxante em Disney Springs.',
        activityType: 'rest' as const,
        notes: 'Passeio a pé por Disney Springs, fotos e almoço sem pressa.',
      },
      {
        title: 'Descanso / Piscina & Compras Finais de Suprimentos',
        description: 'Recuperação muscular total na piscina do hotel, arrumação de malas e compras na Target ou Walmart.',
        activityType: 'rest' as const,
        notes: 'Pese as malas com balança portátil (limite padrão de 23kg por mala).',
      },
    ];

    let parkIndex = 0;
    let shoppingIndex = 0;
    let consecutiveParkCount = 0;

    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      const dateStr = addDays(prefs.startDate, dayNum - 1);
      const weekday = getDayOfWeekPt(dateStr);
      const isFirstDay = dayNum === 1;
      const isLastDay = dayNum === totalDays;

      // 1. DIA DE CHEGADA (INÍCIO)
      if (isFirstDay) {
        itinerary.push({
          date: dateStr,
          dayOfWeek: weekday,
          dayNumber: 1,
          title: 'Chegada em Orlando / Abastecimento Walmart',
          description: 'Pouso no aeroporto MCO, retirada do carro alugado, check-in no hotel e parada estratégica no Walmart Supercenter para fardos de água mineral, lanches e protetor solar a preço de custo.',
          activityType: 'arrival',
          parkId: null,
          ticketId: null,
          isLocked: true,
          effortLevel: 'OFF',
          plannedArrivalTime: '14:00',
          plannedDepartureTime: '21:00',
          personalNotes: 'DIA DE CHEGADA. Abasteça o frigobar com garrafas de água por $5 o fardo para levar aos parques.',
        });
        continue;
      }

      // 2. DIA DE PARTIDA (FINAL)
      if (isLastDay) {
        if (prefs.departureDayHasPark) {
          // Usuário quer parque no dia de ir embora
          itinerary.push({
            date: dateStr,
            dayOfWeek: weekday,
            dayNumber: dayNum,
            title: 'Magic Kingdom — Encerramento & Embarque',
            description: 'Parque na parte da manhã, fotos de despedida, check-out do hotel e deslocamento ao aeroporto MCO para voo de retorno.',
            activityType: 'park',
            parkId: 'magic-kingdom',
            ticketId: 'ticket-disney-mk-single',
            isLocked: true,
            effortLevel: 'Pesado',
            plannedArrivalTime: '08:30',
            plannedDepartureTime: '18:00',
            personalNotes: 'DIA DE PARTIDA. Atenção ao horário limite para devolução do carro alugado no aeroporto.',
          });
        } else {
          // Dia padrão de partida: Check-out, malas, aeroporto e voo
          itinerary.push({
            date: dateStr,
            dayOfWeek: weekday,
            dayNumber: dayNum,
            title: 'Partida de Orlando / Check-out & Retorno ao Brasil',
            description: 'Check-out no hotel, conferência de bagagens (23kg), devolução do veículo alugado no aeroporto MCO e voo de volta para casa.',
            activityType: 'departure',
            parkId: null,
            ticketId: null,
            isLocked: true,
            effortLevel: 'OFF',
            plannedArrivalTime: '10:00',
            plannedDepartureTime: '17:00',
            personalNotes: 'DIA DE PARTIDA. Chegue ao aeroporto de Orlando com pelo menos 3 horas de antecedência para voos internacionais.',
          });
        }
        continue;
      }

      // 3. PENÚLTIMO DIA: Grand Finale no Magic Kingdom se viagem for de 7+ dias
      if (dayNum === totalDays - 1 && totalDays >= 7) {
        itinerary.push({
          date: dateStr,
          dayOfWeek: weekday,
          dayNumber: dayNum,
          title: 'Magic Kingdom — Gran Finale da Viagem',
          description: 'Dia consagrado para fechar a viagem com chave de ouro! Atrações clássicas, TRON Lightcycle / Run e o inesquecível show de fogos Happily Ever After.',
          activityType: 'park',
          parkId: 'magic-kingdom',
          ticketId: dateStr === '2027-05-23' ? 'ticket-disney-mk-single' : 'ticket-disney-4park',
          isLocked: dateStr === '2027-05-23',
          effortLevel: 'Pesado',
          plannedArrivalTime: '08:30',
          plannedDepartureTime: '22:30',
          ropeDropStrategy: 'TRON ou Seven Dwarfs Mine Train logo na abertura.',
          priorityAttractions: ['TRON Lightcycle / Run', 'Seven Dwarfs Mine Train', 'Space Mountain', 'Happily Ever After'],
          personalNotes: 'GRAN FINALE. Aproveite até o fechamento com os fogos de artifício no Castelo.',
        });
        consecutiveParkCount++;
        continue;
      }

      // 4. ANTEPENÚLTIMO DIA (em viagens de 12+ dias): descanso e arrumação de malas
      if (dayNum === totalDays - 2 && totalDays >= 12) {
        itinerary.push({
          date: dateStr,
          dayOfWeek: weekday,
          dayNumber: dayNum,
          title: 'Descanso / Organização de Malas & Compras Finais',
          description: 'Pausa muscular para pesagem de malas, compras de lembrancinhas e descanso antes do dia épico no Magic Kingdom.',
          activityType: 'shopping',
          parkId: null,
          ticketId: null,
          isLocked: false,
          effortLevel: 'OFF',
          personalNotes: 'Organize as notas fiscais e compras para a alfândega.',
        });
        consecutiveParkCount = 0;
        continue;
      }

      // 5. DIAS INTERMEDIÁRIOS: Balanceamento biomecânico
      const needRest = consecutiveParkCount >= (prefs.profile === 'foco_parques' ? 3 : 2);

      if (needRest || parkIndex >= priorityParkSequence.length) {
        const theme = shoppingThemes[shoppingIndex % shoppingThemes.length];
        shoppingIndex++;
        consecutiveParkCount = 0;

        itinerary.push({
          date: dateStr,
          dayOfWeek: weekday,
          dayNumber: dayNum,
          title: theme.title,
          description: theme.description,
          activityType: theme.activityType,
          parkId: null,
          ticketId: null,
          isLocked: false,
          effortLevel: 'OFF',
          plannedArrivalTime: '10:30',
          plannedDepartureTime: '18:00',
          personalNotes: theme.notes,
        });
      } else {
        const parkItem = priorityParkSequence[parkIndex];
        parkIndex++;
        consecutiveParkCount++;

        const parkInfo = PARKS_CATALOG[parkItem.parkId];
        let ticketId = 'ticket-universal-multi';
        if (parkInfo.operator === 'disney') {
          ticketId = 'ticket-disney-4park';
        } else if (parkInfo.operator === 'seaworld') {
          ticketId = 'ticket-seaworld-2park';
        }

        itinerary.push({
          date: dateStr,
          dayOfWeek: weekday,
          dayNumber: dayNum,
          title: parkItem.title,
          description: `${parkInfo.name}: principais atrações e estratégia de aproveitamento inteligente.`,
          activityType: 'park',
          parkId: parkItem.parkId,
          ticketId,
          isLocked: false,
          effortLevel: parkItem.effort,
          plannedArrivalTime: parkInfo.defaultOpeningHour,
          plannedDepartureTime: parkInfo.defaultClosingHour,
          ropeDropStrategy: parkInfo.ropeDropAdvice,
          priorityAttractions: parkInfo.keyAttractions.slice(0, 4),
          personalNotes: `Parque de complexo ${parkInfo.operator.toUpperCase()}. Mantenha hidratação constante.`,
        });
      }
    }

    return itinerary;
  }
}
