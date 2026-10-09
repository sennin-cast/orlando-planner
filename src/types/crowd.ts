export type CrowdSeason = 'Baixa' | 'Média' | 'Alta';
export type CrowdVerificationStatus = 'verified' | 'unverified' | 'unavailable';

/**
 * Public Presentation Record:
 * Strictly devoid of third-party vendor names, scraping URLs, external links or provider logos.
 */
export interface CrowdForecastRecord {
  date: string; // YYYY-MM-DD
  parkId: string;
  crowdLevel: number | null; // 1 to 10 scale (1-3 green, 4-6 orange, 7-10 red). NEVER 0 if unavailable!
  isRecommended: boolean; // Recommended day indicator
  isBusyDay: boolean; // Busy day alert indicator
  season: CrowdSeason | null;
  status: CrowdVerificationStatus;
  lastUpdated: string | null; // Date only, e.g. "2026-10-08", without vendor identity
}

/**
 * Administrative Provenance Record:
 * Kept strictly isolated in administrative import/audit workflows, never leaked to the public itinerary views.
 */
export interface CrowdForecastProvenance {
  importBatchId: string;
  collectedAt: string;
  sourceDomainHash: string; // Hashed/Administrative reference
  sourceUrlAdministrativeOnly: string;
  verificationAudit: string;
  recordsCount: number;
  licenseTermsAcknowledged: boolean;
}

export interface CrowdDataStore {
  records: Record<string, CrowdForecastRecord>; // key: `${date}_${parkId}`
  lastImportDate: string | null;
  totalVerifiedDays: number;
  totalUnavailableDays: number;
}
