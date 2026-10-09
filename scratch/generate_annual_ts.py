import json
import os

with open('scratch/parsed_crowds_2027.json', 'r', encoding='utf-8') as f:
    parsed_crowds = json.load(f)

# Monthly metadata with Brazilian events & climate
MONTH_META = {
    "1": {
        "name": "Janeiro",
        "season": "Alta Temporada (Ano Novo) / Média Temporada",
        "tempC": "15°C a 22°C",
        "tempF": "59°F a 72°F",
        "events": "Maratona Walt Disney World Marathon Weekend (início de janeiro); alta lotação nos primeiros dias pelo Ano Novo, normalizando na segunda quinzena."
    },
    "2": {
        "name": "Fevereiro",
        "season": "Média a Alta Temporada",
        "tempC": "16°C a 24°C",
        "tempF": "61°F a 75°F",
        "events": "Presidents' Day Weekend e Disney Princess Half Marathon Weekend (meio do mês, dias mais cheios); Mardi Gras na Universal Studios."
    },
    "3": {
        "name": "Março",
        "season": "Alta Temporada (Spring Break)",
        "tempC": "18°C a 27°C",
        "tempF": "64°F a 81°F",
        "events": "Início do Spring Break universitário e escolar americano; EPCOT International Flower & Garden Festival; clima quente e dias ensolarados."
    },
    "4": {
        "name": "Abril",
        "season": "Alta Temporada (Páscoa / Spring Break)",
        "tempC": "20°C a 29°C",
        "tempF": "68°F a 84°F",
        "events": "Semana de Páscoa e continuação do Spring Break; parques aquáticos (Volcano Bay e Typhoon Lagoon) com grande procura."
    },
    "5": {
        "name": "Maio",
        "season": "Média Temporada / Alta no Feriado",
        "tempC": "22°C a 31°C",
        "tempF": "72°F a 88°F",
        "events": "Primeira quinzena excelente e mais tranquila; Memorial Day Weekend no último fim de semana (lotação atinge nível 8); clima de verão se aproximando."
    },
    "6": {
        "name": "Junho",
        "season": "Alta Temporada de Verão",
        "tempC": "24°C a 33°C",
        "tempF": "75°F a 91°F",
        "events": "Início das férias de verão nos Estados Unidos; calor intenso e pancadas de chuva no final da tarde; parques com horário de funcionamento estendido."
    },
    "7": {
        "name": "Julho",
        "season": "Altíssima Temporada",
        "tempC": "25°C a 34°C",
        "tempF": "77°F a 93°F",
        "events": "4 de Julho (Dia da Independência dos EUA) com lotação máxima; mês mais quente do ano; indispensável hidratação e pausas no meio do dia."
    },
    "8": {
        "name": "Agosto",
        "season": "Alta (1ª quinzena) / Média (2ª quinzena)",
        "tempC": "25°C a 33°C",
        "tempF": "77°F a 91°F",
        "events": "Volta às aulas nas escolas americanas a partir de meados de agosto (redução progressiva de filas); início das noites do Mickey's Not-So-Scary Halloween Party no MK."
    },
    "9": {
        "name": "Setembro",
        "season": "Baixa Temporada (Mês Mais Tranquilo do Ano)",
        "tempC": "24°C a 32°C",
        "tempF": "75°F a 90°F",
        "events": "Melhor mês do ano para fugir de filas! Níveis de 2 a 4 nos dias de semana; Halloween Horror Nights na Universal e EPCOT Food & Wine Festival em andamento."
    },
    "10": {
        "name": "Outubro",
        "season": "Média a Alta Temporada",
        "tempC": "21°C a 29°C",
        "tempF": "70°F a 84°F",
        "events": "Columbus Day weekend; eventos temáticos de Halloween esgotam ingressos; clima muito agradável e noites mais frescas."
    },
    "11": {
        "name": "Novembro",
        "season": "Média / Altíssima no Thanksgiving",
        "tempC": "18°C a 26°C",
        "tempF": "64°F a 79°F",
        "events": "Jersey Week na primeira quinzena; semana do Dia de Ação de Graças (Thanksgiving, última semana) atinge níveis 8-9; início das decorações e festas de Natal da Disney."
    },
    "12": {
        "name": "Dezembro",
        "season": "Média (1ª quinzena) / Pico Máximo (Natal e Ano Novo)",
        "tempC": "15°C a 23°C",
        "tempF": "59°F a 73°F",
        "events": "Primeiras duas semanas ideais para ver as decorações natalinas com filas moderadas; a partir de 20 de dezembro até o Réveillon os parques atingem lotação 10/10."
    }
}

# Build TypeScript file
ts_content = '''/**
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
'''

for m_str in sorted(parsed_crowds.keys(), key=lambda x: int(x)):
    m = int(m_str)
    meta = MONTH_META[m_str]
    days = parsed_crowds[m_str]["days"]
    avg_c = round(sum(days.values()) / len(days), 1)
    ts_content += f'''  {m}: {{
    month: {m},
    name: "{meta['name']}",
    season: "{meta['season']}",
    tempC: "{meta['tempC']}",
    tempF: "{meta['tempF']}",
    events: "{meta['events']}",
    avgCrowd: {avg_c},
    daysCount: {len(days)}
  }},
'''

ts_content += '''};

export const ANNUAL_CROWD_DATA_2027: Record<string, number> = {
'''

for m_str in sorted(parsed_crowds.keys(), key=lambda x: int(x)):
    m = int(m_str)
    m_padded = f"{m:02d}"
    days = parsed_crowds[m_str]["days"]
    for d_str, lvl in sorted(days.items(), key=lambda x: int(x[0])):
        d = int(d_str)
        d_padded = f"{d:02d}"
        date_str = f"2027-{m_padded}-{d_padded}"
        ts_content += f'  "{date_str}": {lvl},\n'

ts_content += '''};

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
'''

with open('src/data/annualCrowdData2027.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Generated src/data/annualCrowdData2027.ts successfully!")
