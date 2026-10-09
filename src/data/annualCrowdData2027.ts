/**
 * Calendário Anual de Lotação Orlando 2027
 * Baseado nos dados históricos e previsões de 365 dias do Undercover Tourist
 * Traduzido e estruturado para o português do Brasil.
 */

export interface MonthMeta {
  month: number;
  name: string;
  season: string;
  tempC: string;
  tempF: string;
  events: string;
  avgCrowd: number;
  daysCount: number;
}

export interface DayCrowdInfo {
  date: string; // YYYY-MM-DD
  day: number;
  month: number;
  crowdLevel: number; // 1-10
  season: 'Baixa' | 'Média' | 'Alta';
  isWeekend: boolean;
  notes?: string;
}

export const MONTHS_METADATA_2027: Record<number, MonthMeta> = {
  1: {
    month: 1,
    name: "Janeiro",
    season: "Alta Temporada (Ano Novo) / Média Temporada",
    tempC: "15°C a 22°C",
    tempF: "59°F a 72°F",
    events: "Maratona Walt Disney World Marathon Weekend (início de janeiro); alta lotação nos primeiros dias pelo Ano Novo, normalizando na segunda quinzena.",
    avgCrowd: 7.7,
    daysCount: 31
  },
  2: {
    month: 2,
    name: "Fevereiro",
    season: "Média a Alta Temporada",
    tempC: "16°C a 24°C",
    tempF: "61°F a 75°F",
    events: "Presidents' Day Weekend e Disney Princess Half Marathon Weekend (meio do mês, dias mais cheios); Mardi Gras na Universal Studios.",
    avgCrowd: 7.6,
    daysCount: 28
  },
  3: {
    month: 3,
    name: "Março",
    season: "Alta Temporada (Spring Break)",
    tempC: "18°C a 27°C",
    tempF: "64°F a 81°F",
    events: "Início do Spring Break universitário e escolar americano; EPCOT International Flower & Garden Festival; clima quente e dias ensolarados.",
    avgCrowd: 7.6,
    daysCount: 31
  },
  4: {
    month: 4,
    name: "Abril",
    season: "Alta Temporada (Páscoa / Spring Break)",
    tempC: "20°C a 29°C",
    tempF: "68°F a 84°F",
    events: "Semana de Páscoa e continuação do Spring Break; parques aquáticos (Volcano Bay e Typhoon Lagoon) com grande procura.",
    avgCrowd: 7.0,
    daysCount: 30
  },
  5: {
    month: 5,
    name: "Maio",
    season: "Média Temporada / Alta no Feriado",
    tempC: "22°C a 31°C",
    tempF: "72°F a 88°F",
    events: "Primeira quinzena excelente e mais tranquila; Memorial Day Weekend no último fim de semana (lotação atinge nível 8); clima de verão se aproximando.",
    avgCrowd: 6.3,
    daysCount: 31
  },
  6: {
    month: 6,
    name: "Junho",
    season: "Alta Temporada de Verão",
    tempC: "24°C a 33°C",
    tempF: "75°F a 91°F",
    events: "Início das férias de verão nos Estados Unidos; calor intenso e pancadas de chuva no final da tarde; parques com horário de funcionamento estendido.",
    avgCrowd: 6.5,
    daysCount: 30
  },
  7: {
    month: 7,
    name: "Julho",
    season: "Altíssima Temporada",
    tempC: "25°C a 34°C",
    tempF: "77°F a 93°F",
    events: "4 de Julho (Dia da Independência dos EUA) com lotação máxima; mês mais quente do ano; indispensável hidratação e pausas no meio do dia.",
    avgCrowd: 6.6,
    daysCount: 31
  },
  8: {
    month: 8,
    name: "Agosto",
    season: "Alta (1ª quinzena) / Média (2ª quinzena)",
    tempC: "25°C a 33°C",
    tempF: "77°F a 91°F",
    events: "Volta às aulas nas escolas americanas a partir de meados de agosto (redução progressiva de filas); início das noites do Mickey's Not-So-Scary Halloween Party no MK.",
    avgCrowd: 5.0,
    daysCount: 31
  },
  9: {
    month: 9,
    name: "Setembro",
    season: "Baixa Temporada (Mês Mais Tranquilo do Ano)",
    tempC: "24°C a 32°C",
    tempF: "75°F a 90°F",
    events: "Melhor mês do ano para fugir de filas! Níveis de 2 a 4 nos dias de semana; Halloween Horror Nights na Universal e EPCOT Food & Wine Festival em andamento.",
    avgCrowd: 6.0,
    daysCount: 30
  },
  10: {
    month: 10,
    name: "Outubro",
    season: "Média a Alta Temporada",
    tempC: "21°C a 29°C",
    tempF: "70°F a 84°F",
    events: "Columbus Day weekend; eventos temáticos de Halloween esgotam ingressos; clima muito agradável e noites mais frescas.",
    avgCrowd: 6.6,
    daysCount: 31
  },
  11: {
    month: 11,
    name: "Novembro",
    season: "Média / Altíssima no Thanksgiving",
    tempC: "18°C a 26°C",
    tempF: "64°F a 79°F",
    events: "Jersey Week na primeira quinzena; semana do Dia de Ação de Graças (Thanksgiving, última semana) atinge níveis 8-9; início das decorações e festas de Natal da Disney.",
    avgCrowd: 7.1,
    daysCount: 30
  },
  12: {
    month: 12,
    name: "Dezembro",
    season: "Média (1ª quinzena) / Pico Máximo (Natal e Ano Novo)",
    tempC: "15°C a 23°C",
    tempF: "59°F a 73°F",
    events: "Primeiras duas semanas ideais para ver as decorações natalinas com filas moderadas; a partir de 20 de dezembro até o Réveillon os parques atingem lotação 10/10.",
    avgCrowd: 7.5,
    daysCount: 31
  },
};

export const ANNUAL_CROWD_DATA_2027: Record<string, number> = {
  "2027-01-01": 10,
  "2027-01-02": 9,
  "2027-01-03": 9,
  "2027-01-04": 8,
  "2027-01-05": 8,
  "2027-01-06": 9,
  "2027-01-07": 9,
  "2027-01-08": 9,
  "2027-01-09": 9,
  "2027-01-10": 9,
  "2027-01-11": 9,
  "2027-01-12": 7,
  "2027-01-13": 6,
  "2027-01-14": 7,
  "2027-01-15": 8,
  "2027-01-16": 8,
  "2027-01-17": 8,
  "2027-01-18": 8,
  "2027-01-19": 8,
  "2027-01-20": 7,
  "2027-01-21": 7,
  "2027-01-22": 7,
  "2027-01-23": 7,
  "2027-01-24": 7,
  "2027-01-25": 6,
  "2027-01-26": 6,
  "2027-01-27": 6,
  "2027-01-28": 6,
  "2027-01-29": 7,
  "2027-01-30": 8,
  "2027-01-31": 8,
  "2027-02-01": 6,
  "2027-02-02": 6,
  "2027-02-03": 6,
  "2027-02-04": 8,
  "2027-02-05": 8,
  "2027-02-06": 8,
  "2027-02-07": 8,
  "2027-02-08": 8,
  "2027-02-09": 8,
  "2027-02-10": 8,
  "2027-02-11": 8,
  "2027-02-12": 8,
  "2027-02-13": 8,
  "2027-02-14": 8,
  "2027-02-15": 8,
  "2027-02-16": 8,
  "2027-02-17": 8,
  "2027-02-18": 8,
  "2027-02-19": 8,
  "2027-02-20": 8,
  "2027-02-21": 8,
  "2027-02-22": 7,
  "2027-02-23": 6,
  "2027-02-24": 7,
  "2027-02-25": 8,
  "2027-02-26": 8,
  "2027-02-27": 8,
  "2027-02-28": 8,
  "2027-03-01": 8,
  "2027-03-02": 7,
  "2027-03-03": 5,
  "2027-03-04": 5,
  "2027-03-05": 6,
  "2027-03-06": 7,
  "2027-03-07": 7,
  "2027-03-08": 7,
  "2027-03-09": 7,
  "2027-03-10": 7,
  "2027-03-11": 7,
  "2027-03-12": 8,
  "2027-03-13": 8,
  "2027-03-14": 8,
  "2027-03-15": 8,
  "2027-03-16": 8,
  "2027-03-17": 8,
  "2027-03-18": 8,
  "2027-03-19": 8,
  "2027-03-20": 8,
  "2027-03-21": 8,
  "2027-03-22": 8,
  "2027-03-23": 8,
  "2027-03-24": 8,
  "2027-03-25": 8,
  "2027-03-26": 9,
  "2027-03-27": 9,
  "2027-03-28": 9,
  "2027-03-29": 9,
  "2027-03-30": 8,
  "2027-03-31": 8,
  "2027-04-01": 8,
  "2027-04-02": 8,
  "2027-04-03": 8,
  "2027-04-04": 8,
  "2027-04-05": 7,
  "2027-04-06": 7,
  "2027-04-07": 7,
  "2027-04-08": 7,
  "2027-04-09": 7,
  "2027-04-10": 7,
  "2027-04-11": 7,
  "2027-04-12": 7,
  "2027-04-13": 6,
  "2027-04-14": 6,
  "2027-04-15": 6,
  "2027-04-16": 6,
  "2027-04-17": 7,
  "2027-04-18": 7,
  "2027-04-19": 6,
  "2027-04-20": 6,
  "2027-04-21": 6,
  "2027-04-22": 6,
  "2027-04-23": 7,
  "2027-04-24": 8,
  "2027-04-25": 8,
  "2027-04-26": 8,
  "2027-04-27": 7,
  "2027-04-28": 7,
  "2027-04-29": 8,
  "2027-04-30": 8,
  "2027-05-01": 8,
  "2027-05-02": 8,
  "2027-05-03": 7,
  "2027-05-04": 7,
  "2027-05-05": 5,
  "2027-05-06": 5,
  "2027-05-07": 6,
  "2027-05-08": 7,
  "2027-05-09": 7,
  "2027-05-10": 6,
  "2027-05-11": 5,
  "2027-05-12": 5,
  "2027-05-13": 5,
  "2027-05-14": 6,
  "2027-05-15": 6,
  "2027-05-16": 6,
  "2027-05-17": 6,
  "2027-05-18": 6,
  "2027-05-19": 5,
  "2027-05-20": 5,
  "2027-05-21": 6,
  "2027-05-22": 7,
  "2027-05-23": 7,
  "2027-05-24": 6,
  "2027-05-25": 5,
  "2027-05-26": 5,
  "2027-05-27": 6,
  "2027-05-28": 8,
  "2027-05-29": 8,
  "2027-05-30": 8,
  "2027-05-31": 8,
  "2027-06-01": 7,
  "2027-06-02": 7,
  "2027-06-03": 7,
  "2027-06-04": 7,
  "2027-06-05": 7,
  "2027-06-06": 7,
  "2027-06-07": 7,
  "2027-06-08": 6,
  "2027-06-09": 6,
  "2027-06-10": 6,
  "2027-06-11": 6,
  "2027-06-12": 7,
  "2027-06-13": 7,
  "2027-06-14": 7,
  "2027-06-15": 6,
  "2027-06-16": 6,
  "2027-06-17": 6,
  "2027-06-18": 6,
  "2027-06-19": 7,
  "2027-06-20": 7,
  "2027-06-21": 7,
  "2027-06-22": 6,
  "2027-06-23": 6,
  "2027-06-24": 6,
  "2027-06-25": 6,
  "2027-06-26": 7,
  "2027-06-27": 7,
  "2027-06-28": 7,
  "2027-06-29": 6,
  "2027-06-30": 6,
  "2027-07-01": 6,
  "2027-07-02": 6,
  "2027-07-03": 8,
  "2027-07-04": 8,
  "2027-07-05": 8,
  "2027-07-06": 7,
  "2027-07-07": 6,
  "2027-07-08": 6,
  "2027-07-09": 6,
  "2027-07-10": 7,
  "2027-07-11": 7,
  "2027-07-12": 7,
  "2027-07-13": 6,
  "2027-07-14": 6,
  "2027-07-15": 6,
  "2027-07-16": 7,
  "2027-07-17": 7,
  "2027-07-18": 7,
  "2027-07-19": 7,
  "2027-07-20": 6,
  "2027-07-21": 6,
  "2027-07-22": 6,
  "2027-07-23": 6,
  "2027-07-24": 7,
  "2027-07-25": 7,
  "2027-07-26": 7,
  "2027-07-27": 6,
  "2027-07-28": 6,
  "2027-07-29": 6,
  "2027-07-30": 6,
  "2027-07-31": 7,
  "2027-08-01": 7,
  "2027-08-02": 7,
  "2027-08-03": 6,
  "2027-08-04": 6,
  "2027-08-05": 6,
  "2027-08-06": 6,
  "2027-08-07": 6,
  "2027-08-08": 6,
  "2027-08-09": 5,
  "2027-08-10": 4,
  "2027-08-11": 4,
  "2027-08-12": 4,
  "2027-08-13": 4,
  "2027-08-14": 5,
  "2027-08-15": 5,
  "2027-08-16": 5,
  "2027-08-17": 4,
  "2027-08-18": 3,
  "2027-08-19": 3,
  "2027-08-20": 4,
  "2027-08-21": 5,
  "2027-08-22": 5,
  "2027-08-23": 4,
  "2027-08-24": 4,
  "2027-08-25": 4,
  "2027-08-26": 5,
  "2027-08-27": 6,
  "2027-08-28": 6,
  "2027-08-29": 6,
  "2027-08-30": 6,
  "2027-08-31": 5,
  "2027-09-01": 5,
  "2027-09-02": 7,
  "2027-09-03": 8,
  "2027-09-04": 8,
  "2027-09-05": 8,
  "2027-09-06": 8,
  "2027-09-07": 6,
  "2027-09-08": 5,
  "2027-09-09": 5,
  "2027-09-10": 6,
  "2027-09-11": 6,
  "2027-09-12": 6,
  "2027-09-13": 6,
  "2027-09-14": 4,
  "2027-09-15": 3,
  "2027-09-16": 4,
  "2027-09-17": 7,
  "2027-09-18": 7,
  "2027-09-19": 7,
  "2027-09-20": 7,
  "2027-09-21": 6,
  "2027-09-22": 6,
  "2027-09-23": 5,
  "2027-09-24": 5,
  "2027-09-25": 6,
  "2027-09-26": 6,
  "2027-09-27": 6,
  "2027-09-28": 5,
  "2027-09-29": 5,
  "2027-09-30": 6,
  "2027-10-01": 7,
  "2027-10-02": 7,
  "2027-10-03": 7,
  "2027-10-04": 7,
  "2027-10-05": 6,
  "2027-10-06": 6,
  "2027-10-07": 6,
  "2027-10-08": 7,
  "2027-10-09": 8,
  "2027-10-10": 8,
  "2027-10-11": 8,
  "2027-10-12": 7,
  "2027-10-13": 6,
  "2027-10-14": 6,
  "2027-10-15": 6,
  "2027-10-16": 7,
  "2027-10-17": 6,
  "2027-10-18": 6,
  "2027-10-19": 5,
  "2027-10-20": 4,
  "2027-10-21": 5,
  "2027-10-22": 7,
  "2027-10-23": 7,
  "2027-10-24": 7,
  "2027-10-25": 6,
  "2027-10-26": 5,
  "2027-10-27": 6,
  "2027-10-28": 8,
  "2027-10-29": 8,
  "2027-10-30": 8,
  "2027-10-31": 8,
  "2027-11-01": 8,
  "2027-11-02": 7,
  "2027-11-03": 7,
  "2027-11-04": 7,
  "2027-11-05": 7,
  "2027-11-06": 7,
  "2027-11-07": 7,
  "2027-11-08": 7,
  "2027-11-09": 6,
  "2027-11-10": 6,
  "2027-11-11": 7,
  "2027-11-12": 7,
  "2027-11-13": 7,
  "2027-11-14": 7,
  "2027-11-15": 6,
  "2027-11-16": 5,
  "2027-11-17": 5,
  "2027-11-18": 5,
  "2027-11-19": 6,
  "2027-11-20": 7,
  "2027-11-21": 7,
  "2027-11-22": 8,
  "2027-11-23": 8,
  "2027-11-24": 9,
  "2027-11-25": 10,
  "2027-11-26": 10,
  "2027-11-27": 10,
  "2027-11-28": 9,
  "2027-11-29": 7,
  "2027-11-30": 3,
  "2027-12-01": 3,
  "2027-12-02": 4,
  "2027-12-03": 6,
  "2027-12-04": 6,
  "2027-12-05": 6,
  "2027-12-06": 6,
  "2027-12-07": 4,
  "2027-12-08": 6,
  "2027-12-09": 6,
  "2027-12-10": 6,
  "2027-12-11": 7,
  "2027-12-12": 6,
  "2027-12-13": 6,
  "2027-12-14": 6,
  "2027-12-15": 6,
  "2027-12-16": 6,
  "2027-12-17": 7,
  "2027-12-18": 9,
  "2027-12-19": 9,
  "2027-12-20": 9,
  "2027-12-21": 9,
  "2027-12-22": 9,
  "2027-12-23": 9,
  "2027-12-24": 10,
  "2027-12-25": 10,
  "2027-12-26": 10,
  "2027-12-27": 10,
  "2027-12-28": 10,
  "2027-12-29": 10,
  "2027-12-30": 10,
  "2027-12-31": 10,
};

/**
 * Retorna as informações detalhadas de lotação para um determinado dia de 2027.
 */
export function getDayCrowdInfo2027(dateStr: string): DayCrowdInfo | null {
  const level = ANNUAL_CROWD_DATA_2027[dateStr];
  if (level === undefined) return null;

  const parts = dateStr.split('-');
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const d = new Date(dateStr + 'T12:00:00Z');
  const dayOfWeek = d.getUTCDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  let season: 'Baixa' | 'Média' | 'Alta' = 'Média';
  if (level <= 3) season = 'Baixa';
  else if (level >= 7) season = 'Alta';

  return {
    date: dateStr,
    day,
    month,
    crowdLevel: level,
    season,
    isWeekend,
  };
}

/**
 * Retorna todos os dias de um determinado mês de 2027 ordenados.
 */
export function getMonthDaysCrowd2027(month: number): DayCrowdInfo[] {
  const result: DayCrowdInfo[] = [];
  const meta = MONTHS_METADATA_2027[month];
  if (!meta) return result;

  const mPadded = String(month).padStart(2, '0');
  for (let d = 1; d <= meta.daysCount; d++) {
    const dPadded = String(d).padStart(2, '0');
    const dateStr = `2027-${mPadded}-${dPadded}`;
    const info = getDayCrowdInfo2027(dateStr);
    if (info) result.push(info);
  }
  return result;
}

/**
 * Retorna os níveis de cada parque para uma data específica com base na lotação geral e sazonalidade.
 */
export function getParkCrowdLevelsForDate(dateStr: string, baseLevel?: number): Record<string, { crowdLevel: number; isRecommended: boolean; isBusyDay: boolean }> {
  const level = baseLevel ?? ANNUAL_CROWD_DATA_2027[dateStr] ?? 5;
  const d = new Date(dateStr + 'T12:00:00Z');
  const dayOfWeek = d.getUTCDay(); // 0=Dom, 1=Seg, 2=Ter, 3=Qua, 4=Qui, 5=Sex, 6=Sáb

  // Variações específicas por parque:
  // - Magic Kingdom: mais cheio Seg e Sáb
  // - EPCOT: mais cheio Sex e Sáb (especialmente final de tarde para festivais)
  // - Hollywood Studios: equilibrado, ligeiramente mais alto no fim de semana
  // - Animal Kingdom: tende a ter filas mais amenas (fecha mais cedo)
  // - Epic Universe: atração nova em 2027, demanda consistentemente alta
  // - Islands of Adventure / USF: picos no fim de semana
  const result: Record<string, { crowdLevel: number; isRecommended: boolean; isBusyDay: boolean }> = {};

  const parks = [
    { id: 'magic-kingdom', delta: (dayOfWeek === 1 || dayOfWeek === 6) ? 1 : (dayOfWeek === 2 || dayOfWeek === 3 ? -1 : 0) },
    { id: 'epcot', delta: (dayOfWeek === 5 || dayOfWeek === 6) ? 1 : (dayOfWeek === 1 || dayOfWeek === 2 ? -1 : 0) },
    { id: 'hollywood-studios', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 1 : 0 },
    { id: 'animal-kingdom', delta: -1 },
    { id: 'epic-universe', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 2 : 1 },
    { id: 'islands-of-adventure', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 1 : 0 },
    { id: 'universal-studios', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 1 : 0 },
    { id: 'volcano-bay', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 2 : 0 },
    { id: 'seaworld', delta: (dayOfWeek === 0 || dayOfWeek === 6) ? 1 : -1 },
    { id: 'busch-gardens', delta: -1 },
  ];

  parks.forEach((p) => {
    const parkLevel = Math.max(1, Math.min(10, level + p.delta));
    result[p.id] = {
      crowdLevel: parkLevel,
      isRecommended: parkLevel <= 4 || (p.delta < 0 && parkLevel <= 6),
      isBusyDay: parkLevel >= 7 || p.delta > 0,
    };
  });

  return result;
}
