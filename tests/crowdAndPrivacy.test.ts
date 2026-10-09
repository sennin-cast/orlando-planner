import { describe, it, expect } from 'vitest';
import { CrowdDataService } from '../src/services/crowdDataService';
import { StorageManager } from '../src/services/storageManager';
import { INITIAL_ITINERARY } from '../src/data/initialItinerary';
import { INITIAL_TICKETS } from '../src/data/initialTickets';

describe('Crowd Data Service & Privacy Isolation', () => {
  it('strictly preserves null on absence of data and NEVER converts missing values to zero', () => {
    const service = new CrowdDataService();
    expect(service.getStore().totalVerifiedDays).toBe(0);
    const style = CrowdDataService.getCrowdBadgeStyle(null);

    expect(style.category).toBe('unavailable');
    expect(style.label).toBe('Dados de lotação não disponíveis');
    expect(style.label).not.toContain('0/10');
  });

  it('rejects invalid import rows and catches duplicates gracefully', () => {
    const service = new CrowdDataService();
    const badData = [
      { date: 'invalid-date', parkId: 'magic-kingdom', crowdLevel: 5 },
      { date: '2027-05-10', parkId: 'non-existent-park', crowdLevel: 5 },
      { date: '2027-05-11', parkId: 'epcot', crowdLevel: 4 },
      { date: '2027-05-11', parkId: 'epcot', crowdLevel: 4 }, // Duplicate
    ];

    const report = service.importFromJson(badData);
    expect(report.invalidDatesCount).toBe(1);
    expect(report.unknownParksCount).toBe(1);
    expect(report.duplicatesCount).toBe(1);
    expect(report.importedCount).toBe(1);
  });

  it('ensures public export contains zero references to third-party vendor names or URLs', () => {
    const service = new CrowdDataService();
    service.importFromJson([
      {
        date: '2027-05-10',
        parkId: 'magic-kingdom',
        crowdLevel: 4,
        isRecommended: true,
        isBusyDay: false,
        season: 'Média',
        status: 'verified',
      },
    ]);

    const publicJson = JSON.stringify(service.exportPublicJson());
    const publicCsv = service.exportPublicCsv();

    // Mandatory Privacy Check: Undercover Tourist, undercover, undercovertourist.com must NOT exist!
    expect(publicJson.toLowerCase()).not.toContain('undercover');
    expect(publicJson.toLowerCase()).not.toContain('undercovertourist');
    expect(publicCsv.toLowerCase()).not.toContain('undercover');
    expect(publicCsv.toLowerCase()).not.toContain('undercovertourist');
  });

  it('supports CSV import format correctly', () => {
    const service = new CrowdDataService();
    const csvContent = `date,parkId,crowdLevel,isRecommended,isBusyDay,season,status\n2027-05-06,seaworld,3,true,false,Baixa,verified`;
    const report = service.importFromCsv(csvContent);

    expect(report.importedCount).toBe(1);
    const record = service.getRecord('2027-05-06', 'seaworld');
    expect(record).toBeDefined();
    expect(record?.crowdLevel).toBe(3);
    expect(record?.isRecommended).toBe(true);
  });
});

describe('Persistence and State Management', () => {
  it('exports and validates full project JSON payload with schema version', () => {
    const storage = new StorageManager();
    const exportedJson = storage.exportFullProject();
    expect(exportedJson).toBeDefined();

    const parsed = JSON.parse(exportedJson);
    expect(parsed.schemaVersion).toBe(1);
    expect(parsed.itinerary.length).toBe(INITIAL_ITINERARY.length);
    expect(parsed.tickets.length).toBe(INITIAL_TICKETS.length);
  });

  it('handles undo and redo history for itinerary modifications', () => {
    const storage = new StorageManager();
    const initial = storage.loadItinerary();
    expect(initial.length).toBe(19);

    const modified = JSON.parse(JSON.stringify(initial));
    modified[1].title = 'Dia alterado';

    storage.saveItinerary(modified, true);
    expect(storage.canUndo()).toBe(true);

    const reverted = storage.undo(modified);
    expect(reverted).toBeDefined();
    expect(reverted![1].title).toBe(initial[1].title);

    expect(storage.canRedo()).toBe(true);
    const redone = storage.redo(reverted!);
    expect(redone).toBeDefined();
    expect(redone![1].title).toBe('Dia alterado');
  });
});
