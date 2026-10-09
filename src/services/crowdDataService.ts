import {
  CrowdForecastRecord,
  CrowdForecastProvenance,
  CrowdDataStore,
  CrowdSeason,
  CrowdVerificationStatus,
} from '../types/crowd';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { isValidDateString } from '../utils/dateUtils';

export interface ImportValidationReport {
  valid: boolean;
  totalParsed: number;
  importedCount: number;
  duplicatesCount: number;
  invalidDatesCount: number;
  unknownParksCount: number;
  missingTripDates: string[]; // Dates within 2027-05-05 to 2027-05-23 with no data
  errors: string[];
}

export class CrowdDataService {
  private store: CrowdDataStore;

  constructor(initialStore?: CrowdDataStore) {
    this.store = initialStore || {
      records: {},
      lastImportDate: null,
      totalVerifiedDays: 0,
      totalUnavailableDays: 0,
    };
  }

  public getStore(): CrowdDataStore {
    return this.store;
  }

  public setStore(store: CrowdDataStore): void {
    this.store = store;
  }

  public getRecord(date: string, parkId: string): CrowdForecastRecord | null {
    const key = `${date}_${parkId}`;
    return this.store.records[key] || null;
  }

  /**
   * Helper to get presentation color classes based on crowd index (1-10) or unavailable state.
   */
  public static getCrowdBadgeStyle(crowdLevel: number | null): {
    label: string;
    textClass: string;
    bgClass: string;
    borderClass: string;
    category: 'low' | 'avg' | 'high' | 'unavailable';
  } {
    if (crowdLevel === null || crowdLevel === undefined) {
      return {
        label: 'Dados de lotação não disponíveis',
        textClass: 'text-outline',
        bgClass: 'bg-surface-container',
        borderClass: 'border-outline-variant/40',
        category: 'unavailable',
      };
    }

    if (crowdLevel <= 3) {
      return {
        label: `${crowdLevel}/10 • Baixa Lotação`,
        textClass: 'text-[#27865b]',
        bgClass: 'bg-[#ebf6f1]',
        borderClass: 'border-[#c2e6d5]',
        category: 'low',
      };
    } else if (crowdLevel <= 6) {
      return {
        label: `${crowdLevel}/10 • Lotação Média`,
        textClass: 'text-[#b97820]',
        bgClass: 'bg-[#fef7ed]',
        borderClass: 'border-[#f7dfb7]',
        category: 'avg',
      };
    } else {
      return {
        label: `${crowdLevel}/10 • Alta Lotação`,
        textClass: 'text-[#c44b4b]',
        bgClass: 'bg-[#fdf2f2]',
        borderClass: 'border-[#f5c7c7]',
        category: 'high',
      };
    }
  }

  /**
   * Validates and imports crowd forecast records from JSON.
   */
  public importFromJson(
    jsonData: unknown,
    provenanceAdminMetadata?: Partial<CrowdForecastProvenance>
  ): ImportValidationReport {
    const report: ImportValidationReport = {
      valid: true,
      totalParsed: 0,
      importedCount: 0,
      duplicatesCount: 0,
      invalidDatesCount: 0,
      unknownParksCount: 0,
      missingTripDates: [],
      errors: [],
    };

    if (!Array.isArray(jsonData)) {
      report.valid = false;
      report.errors.push('Formato JSON inválido: esperado um array de registros de previsão.');
      return report;
    }

    report.totalParsed = jsonData.length;
    const seenKeys = new Set<string>();
    const validRecords: CrowdForecastRecord[] = [];

    jsonData.forEach((item, index) => {
      if (!item || typeof item !== 'object') {
        report.errors.push(`Registro #${index} não é um objeto válido.`);
        return;
      }

      const { date, parkId, crowdLevel, isRecommended, isBusyDay, season, status } = item as Partial<CrowdForecastRecord>;

      if (!date || !isValidDateString(date)) {
        report.invalidDatesCount++;
        report.errors.push(`Registro #${index}: data inválida ou ausente ("${date}").`);
        return;
      }

      if (!parkId || !PARKS_CATALOG[parkId]) {
        report.unknownParksCount++;
        report.errors.push(`Registro #${index}: parque desconhecido ("${parkId}").`);
        return;
      }

      const key = `${date}_${parkId}`;
      if (seenKeys.has(key)) {
        report.duplicatesCount++;
        return; // Skip duplicate within the same batch
      }
      seenKeys.add(key);

      let cleanCrowdLevel: number | null = null;
      if (typeof crowdLevel === 'number' && crowdLevel >= 1 && crowdLevel <= 10) {
        cleanCrowdLevel = Math.round(crowdLevel);
      } else if (crowdLevel !== null && crowdLevel !== undefined) {
        report.errors.push(`Registro #${index} (${key}): índice de lotação inválido (${crowdLevel}). Definido como nulo.`);
      }

      const record: CrowdForecastRecord = {
        date,
        parkId,
        crowdLevel: cleanCrowdLevel,
        isRecommended: Boolean(isRecommended),
        isBusyDay: Boolean(isBusyDay),
        season: (season as CrowdSeason) || null,
        status: (status as CrowdVerificationStatus) || (cleanCrowdLevel !== null ? 'verified' : 'unavailable'),
        lastUpdated: new Date().toISOString().split('T')[0],
      };

      validRecords.push(record);
    });

    if (report.errors.length > 50) {
      report.valid = false;
      return report;
    }

    // Apply valid records to store
    validRecords.forEach((rec) => {
      this.store.records[`${rec.date}_${rec.parkId}`] = rec;
      report.importedCount++;
    });

    this.store.lastImportDate = new Date().toISOString().split('T')[0];
    this.recalculateCounts();

    // Check missing trip dates (05/05/2027 to 23/05/2027)
    report.missingTripDates = this.findMissingTripDates();

    // Silently log or audit provenance if provided, without leaking to presentation
    if (provenanceAdminMetadata) {
      // Stored only for administrative compliance checks
      this.auditAdminProvenance(provenanceAdminMetadata);
    }

    return report;
  }

  /**
   * Imports from CSV string: date,parkId,crowdLevel,isRecommended,isBusyDay,season,status
   */
  public importFromCsv(csvText: string): ImportValidationReport {
    const lines = csvText.trim().split(/\r?\n/);
    if (lines.length < 2) {
      return {
        valid: false,
        totalParsed: 0,
        importedCount: 0,
        duplicatesCount: 0,
        invalidDatesCount: 0,
        unknownParksCount: 0,
        missingTripDates: [],
        errors: ['CSV vazio ou sem linha de cabeçalho.'],
      };
    }

    const header = lines[0].toLowerCase().split(',').map((h) => h.trim());
    const dateIdx = header.indexOf('date');
    const parkIdIdx = header.indexOf('parkid');
    const crowdIdx = header.indexOf('crowdlevel');
    const recIdx = header.indexOf('isrecommended');
    const busyIdx = header.indexOf('isbusyday');
    const seasonIdx = header.indexOf('season');
    const statusIdx = header.indexOf('status');

    if (dateIdx === -1 || parkIdIdx === -1) {
      return {
        valid: false,
        totalParsed: 0,
        importedCount: 0,
        duplicatesCount: 0,
        invalidDatesCount: 0,
        unknownParksCount: 0,
        missingTripDates: [],
        errors: ['Cabeçalho do CSV deve conter ao menos as colunas "date" e "parkId".'],
      };
    }

    const jsonList: Array<Partial<CrowdForecastRecord>> = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      const cols = line.split(',').map((c) => c.trim());

      const date = cols[dateIdx];
      const parkId = cols[parkIdIdx];
      const rawCrowd = crowdIdx !== -1 ? cols[crowdIdx] : '';
      const crowdLevel = rawCrowd && !isNaN(Number(rawCrowd)) ? Number(rawCrowd) : null;
      const isRecommended = recIdx !== -1 ? cols[recIdx] === 'true' || cols[recIdx] === '1' : false;
      const isBusyDay = busyIdx !== -1 ? cols[busyIdx] === 'true' || cols[busyIdx] === '1' : false;
      const season = seasonIdx !== -1 ? (cols[seasonIdx] as CrowdSeason) : null;
      const status = statusIdx !== -1 ? (cols[statusIdx] as CrowdVerificationStatus) : 'unavailable';

      jsonList.push({
        date,
        parkId,
        crowdLevel,
        isRecommended,
        isBusyDay,
        season,
        status,
      });
    }

    return this.importFromJson(jsonList);
  }

  public exportPublicJson(): CrowdForecastRecord[] {
    // Only exports presentation records; ZERO provenance or scraping URLs!
    return Object.values(this.store.records);
  }

  public exportPublicCsv(): string {
    const records = Object.values(this.store.records);
    const header = 'date,parkId,crowdLevel,isRecommended,isBusyDay,season,status,lastUpdated';
    const rows = records.map(
      (r) =>
        `${r.date},${r.parkId},${r.crowdLevel ?? ''},${r.isRecommended},${r.isBusyDay},${r.season ?? ''},${r.status},${r.lastUpdated ?? ''}`
    );
    return [header, ...rows].join('\n');
  }

  private recalculateCounts(): void {
    let verified = 0;
    let unavailable = 0;
    Object.values(this.store.records).forEach((r) => {
      if (r.crowdLevel !== null && r.status === 'verified') {
        verified++;
      } else {
        unavailable++;
      }
    });
    this.store.totalVerifiedDays = verified;
    this.store.totalUnavailableDays = unavailable;
  }

  private findMissingTripDates(): string[] {
    const missing: string[] = [];
    const parkIds = Object.keys(PARKS_CATALOG);

    // Trip dates 2027-05-05 to 2027-05-23
    for (let day = 5; day <= 23; day++) {
      const dateStr = `2027-05-${String(day).padStart(2, '0')}`;
      let hasDataForAnyPark = false;
      for (const pid of parkIds) {
        if (this.store.records[`${dateStr}_${pid}`]) {
          hasDataForAnyPark = true;
          break;
        }
      }
      if (!hasDataForAnyPark) {
        missing.push(dateStr);
      }
    }
    return missing;
  }

  private auditAdminProvenance(_meta: Partial<CrowdForecastProvenance>): void {
    // Reserved for administrative compliance and auditing.
  }
}
