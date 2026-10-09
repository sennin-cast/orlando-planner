/**
 * Date utilities strictly designed for America/New_York local travel dates.
 * Avoids any UTC / local time conversion drift by working with calendar components (YYYY, MM, DD).
 */

export interface DateParts {
  year: number;
  month: number; // 1-12
  day: number; // 1-31
}

export function parseDateParts(dateStr: string): DateParts {
  const parts = dateStr.split('-');
  if (parts.length !== 3) {
    throw new Error(`Invalid date string format (expected YYYY-MM-DD): "${dateStr}"`);
  }
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    throw new Error(`Invalid numeric date components: "${dateStr}"`);
  }
  return { year, month, day };
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getDaysInMonth(year: number, month: number): number {
  switch (month) {
    case 2:
      return isLeapYear(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

export function isValidDateString(dateStr: string): boolean {
  try {
    const { year, month, day } = parseDateParts(dateStr);
    if (year < 1900 || year > 2100) return false;
    if (month < 1 || month > 12) return false;
    const maxDays = getDaysInMonth(year, month);
    return day >= 1 && day <= maxDays;
  } catch {
    return false;
  }
}

/**
 * Calculates calendar day offset from reference date (00:00:00 to 00:00:00 local)
 */
export function daysBetween(startDateStr: string, endDateStr: string): number {
  const start = parseDateParts(startDateStr);
  const end = parseDateParts(endDateStr);

  const startUtc = Date.UTC(start.year, start.month - 1, start.day);
  const endUtc = Date.UTC(end.year, end.month - 1, end.day);

  return Math.round((endUtc - startUtc) / (1000 * 60 * 60 * 24));
}

export function addDays(dateStr: string, days: number): string {
  const { year, month, day } = parseDateParts(dateStr);
  const utc = new Date(Date.UTC(year, month - 1, day));
  utc.setUTCDate(utc.getUTCDate() + days);

  const y = utc.getUTCFullYear();
  const m = String(utc.getUTCMonth() + 1).padStart(2, '0');
  const d = String(utc.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function areConsecutiveDays(date1Str: string, date2Str: string): boolean {
  return daysBetween(date1Str, date2Str) === 1;
}

const DAY_NAMES_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTH_NAMES_PT = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
];

export function getDayOfWeekPt(dateStr: string): string {
  const { year, month, day } = parseDateParts(dateStr);
  const d = new Date(Date.UTC(year, month - 1, day));
  return DAY_NAMES_PT[d.getUTCDay()];
}

export function formatDateBr(dateStr: string): string {
  const { day, month } = parseDateParts(dateStr);
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`;
}

export function formatFullDatePt(dateStr: string): string {
  const { year, month, day } = parseDateParts(dateStr);
  const dayName = getDayOfWeekPt(dateStr);
  const monthName = MONTH_NAMES_PT[month - 1];
  return `${dayName}, ${day} de ${monthName} de ${year}`;
}
