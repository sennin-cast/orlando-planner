import { describe, it, expect } from 'vitest';
import { validateTickets } from '../src/services/ticketValidator';
import { INITIAL_TICKETS } from '../src/data/initialTickets';
import { INITIAL_ITINERARY } from '../src/data/initialItinerary';
import { isLeapYear, daysBetween, areConsecutiveDays, addDays } from '../src/utils/dateUtils';
import { ItineraryDay } from '../src/types/itinerary';

describe('Date Utilities', () => {
  it('correctly handles consecutive dates', () => {
    expect(areConsecutiveDays('2027-05-05', '2027-05-06')).toBe(true);
    expect(areConsecutiveDays('2027-05-05', '2027-05-07')).toBe(false);
  });

  it('correctly identifies leap years and non-leap years', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2027)).toBe(false);
    expect(isLeapYear(2028)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
  });

  it('correctly adds days without time zone drift', () => {
    expect(addDays('2027-05-15', 6)).toBe('2027-05-21');
    expect(daysBetween('2027-05-15', '2027-05-21')).toBe(6);
  });
});

describe('Ticket Validator Engine', () => {
  it('validates the initial itinerary with pending confirmation warnings (not 100% valid yet)', () => {
    const result = validateTickets(INITIAL_ITINERARY, INITIAL_TICKETS);
    // Initial itinerary has tickets marked as pending_confirmation, so status MUST be warning
    expect(result.status).toBe('warning');
    expect(result.issues.some(i => i.code === 'TICKET_RULE_PENDING')).toBe(true);
    expect(result.issues.some(i => i.severity === 'conflict')).toBe(false);
    expect(result.unassignedVisits.length).toBe(0);
  });

  it('detects validity window exceeded (e.g. Disney 4-Park stretched past 7 days)', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    // Move EPCOT from 18/05 to 22/05 so Disney 4-Park is used from 15/05 to 22/05 (8 days)
    const epcotDay = itineraryModified.find(d => d.parkId === 'epcot')!;
    epcotDay.date = '2027-05-23'; // Push past window
    epcotDay.ticketId = 'ticket-disney-4park';

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'VALIDITY_WINDOW_EXCEEDED')).toBe(true);
  });

  it('detects repeated park visit when forbidden (e.g. 2x Magic Kingdom with Disney 4-Park)', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    // Change Animal Kingdom (15/05) to Magic Kingdom under Disney 4-Park
    const dakDay = itineraryModified.find(d => d.date === '2027-05-15')!;
    dakDay.parkId = 'magic-kingdom';
    dakDay.ticketId = 'ticket-disney-4park';

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'PARK_REPETITION_FORBIDDEN')).toBe(true);
    expect(result.status).toBe('conflict');
  });

  it('detects two parks on the same day', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    itineraryModified.push({
      date: '2027-05-07', // Already has Universal Studios
      dayOfWeek: 'Sex',
      dayNumber: 3,
      title: 'Islands of Adventure Tarde',
      description: 'Segundo parque no mesmo dia',
      activityType: 'park',
      parkId: 'islands-of-adventure',
      ticketId: 'ticket-universal-multi',
      isLocked: false,
      effortLevel: 'Pesado',
    });

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'MULTIPLE_PARKS_SAME_DAY')).toBe(true);
    expect(result.status).toBe('conflict');
  });

  it('enforces mandatory single ticket and locked date for Magic Kingdom on 23/05/2027', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    const day23 = itineraryModified.find(d => d.date === '2027-05-23')!;
    // Wrong: using Disney 4-Park on 23/05 instead of independent ticket
    day23.ticketId = 'ticket-disney-4park';

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'FINAL_DAY_TICKET_POLLUTION')).toBe(true);
    expect(result.status).toBe('conflict');
  });

  it('detects unassigned ticket when park is scheduled without ticketId', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    itineraryModified[1].ticketId = null; // SeaWorld without ticket

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'UNASSIGNED_TICKET')).toBe(true);
    expect(result.unassignedVisits.length).toBe(1);
  });

  it('detects ticket limit exceeded when more visits than allowed are scheduled', () => {
    const itineraryModified: ItineraryDay[] = JSON.parse(JSON.stringify(INITIAL_ITINERARY));
    // Add extra visit to SeaWorld pass (only allows 2 visits)
    itineraryModified[3].parkId = 'seaworld';
    itineraryModified[3].ticketId = 'ticket-seaworld-2park';

    const result = validateTickets(itineraryModified, INITIAL_TICKETS);
    expect(result.issues.some(i => i.code === 'TICKET_OVERLIMIT')).toBe(true);
    expect(result.status).toBe('conflict');
  });
});
