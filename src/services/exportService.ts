import { ItineraryDay } from '../types/itinerary';
import { TicketDefinition } from '../types/ticket';
import { CrowdDataStore } from '../types/crowd';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { OUTLETS_CATALOG } from '../data/outletsCatalog';
import { formatFullDatePt, formatDateBr, formatDateRangePt } from '../utils/dateUtils';

export class ExportService {
  public static generateMarkdownItinerary(
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore
  ): string {
    const ticketMap = new Map<string, TicketDefinition>();
    tickets.forEach((t) => ticketMap.set(t.id, t));

    const startDate = itinerary[0]?.date || '2027-05-01';
    const endDate = itinerary[itinerary.length - 1]?.date || '2027-05-23';

    let md = `# ORLANDO PLANNER — Roteiro Oficial de Viagem\n`;
    md += `**Período:** ${formatDateRangePt(startDate, endDate)} (${itinerary.length} dias)\n`;
    md += `**Gerado em:** ${new Date().toLocaleDateString('pt-BR')}\n\n`;

    md += `## Resumo Geral\n`;
    const parkDaysCount = itinerary.filter((d) => d.activityType === 'park').length;
    const restDaysCount = itinerary.filter((d) => d.activityType !== 'park').length;
    md += `- **Dias com Parques:** ${parkDaysCount} dias\n`;
    md += `- **Dias de Descanso / Compras:** ${restDaysCount} dias\n\n`;

    md += `## Programação Diária Detalhada\n\n`;
    md += `| Data | Dia | Atividade / Parque | Lotação Prevista | Ingresso |\n`;
    md += `|---|---|---|---|---|\n`;

    itinerary.forEach((day) => {
      const crowdRecord = day.parkId ? crowdStore.records[`${day.date}_${day.parkId}`] : null;
      const crowdText = crowdRecord && crowdRecord.crowdLevel !== null ? `${crowdRecord.crowdLevel}/10` : (day.activityType === 'park' ? 'Lotação não disponível' : 'Dia Off-Park');
      const ticket = day.ticketId ? ticketMap.get(day.ticketId) : null;
      const ticketText = ticket ? ticket.name : (day.activityType === 'park' ? 'Sem ingresso' : '—');

      const title = day.isLocked ? `🔒 ${day.title}` : day.title;

      md += `| ${formatDateBr(day.date)} | ${day.dayOfWeek} | ${title} | ${crowdText} | ${ticketText} |\n`;
    });

    md += `\n---\n\n`;
    md += `## Recomendações e Estratégia por Dia\n\n`;

    itinerary.forEach((day) => {
      const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;
      md += `### ${day.dayNumber}. ${formatFullDatePt(day.date)}: ${day.title}\n`;
      md += `- **Tipo:** ${day.activityType === 'park' ? 'Parque Temático' : 'Descanso / Compras'}\n`;
      md += `- **Descrição:** ${day.description}\n`;

      if (parkInfo) {
        md += `- **Horário Sugerido:** ${day.plannedArrivalTime || parkInfo.defaultOpeningHour} às ${day.plannedDepartureTime || parkInfo.defaultClosingHour}\n`;
        if (day.ropeDropStrategy || parkInfo.ropeDropAdvice) {
          md += `- **Estratégia de Rope Drop:** ${day.ropeDropStrategy || parkInfo.ropeDropAdvice}\n`;
        }
        if (day.priorityAttractions && day.priorityAttractions.length > 0) {
          md += `- **Atrações Prioritárias:** ${day.priorityAttractions.join(', ')}\n`;
        }
        if (parkInfo.expressPassNote) {
          md += `- **Filas Expressas:** ${parkInfo.expressPassNote}\n`;
        }
      }

      if (day.diningNotes) {
        md += `- **Alimentação:** ${day.diningNotes}\n`;
      }
      if (day.personalNotes) {
        md += `- **Observações Pessoais:** ${day.personalNotes}\n`;
      }
      md += `\n`;
    });

    md += `\n---\n\n`;
    md += `## Guia dos Melhores Outlets para Compras Econômicas\n\n`;
    OUTLETS_CATALOG.forEach((store) => {
      md += `### ${store.name} (${store.priceLevel})\n`;
      md += `- **Categoria:** ${store.categoryLabel}\n`;
      md += `- **Endereço:** ${store.address} (${store.distanceRegion})\n`;
      md += `- **Destaque:** ${store.highlight}\n`;
      md += `- **Melhores Marcas:** ${store.topBrands.join(', ')}\n`;
      md += `- **Dica para Pagar Menos:** ${store.savingTips}\n\n`;
    });

    md += `\n*Documento gerado pelo ORLANDO PLANNER. Sua viagem. Seu roteiro. Sua melhor experiência.*\n`;
    return md;
  }

  public static downloadFile(filename: string, content: string, mimeType: string): void {
    if (typeof window === 'undefined') return;
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  public static printFullDossier(
    itinerary: ItineraryDay[],
    tickets: TicketDefinition[],
    crowdStore: CrowdDataStore
  ): void {
    if (typeof window === 'undefined') return;

    const ticketMap = new Map<string, TicketDefinition>();
    tickets.forEach((t) => ticketMap.set(t.id, t));

    const startDate = itinerary[0]?.date || '2027-05-05';
    const endDate = itinerary[itinerary.length - 1]?.date || '2027-05-23';
    const parkDaysCount = itinerary.filter((d) => d.activityType === 'park').length;
    const restDaysCount = itinerary.filter((d) => d.activityType !== 'park').length;

    // Build print HTML document
    const tableRows = itinerary
      .map((day) => {
        const crowdRecord = day.parkId ? crowdStore.records[`${day.date}_${day.parkId}`] : null;
        const crowdText = crowdRecord && crowdRecord.crowdLevel !== null ? `${crowdRecord.crowdLevel}/10` : (day.activityType === 'park' ? 'Lotação não disponível' : 'Dia Off-Park');
        const ticket = day.ticketId ? ticketMap.get(day.ticketId) : null;
        const ticketText = ticket ? ticket.name : (day.activityType === 'park' ? 'Sem ingresso' : '—');

        return `
          <tr>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-weight: bold; white-space: nowrap;">${formatDateBr(day.date)} (${day.dayOfWeek})</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-weight: 600;">${day.isLocked ? '🔒 ' : ''}${day.title}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">${day.effortLevel}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">${crowdText}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-size: 11px;">${ticketText}</td>
          </tr>
        `;
      })
      .join('');

    const daysDetails = itinerary
      .map((day) => {
        const parkInfo = day.parkId ? PARKS_CATALOG[day.parkId] : null;
        return `
          <div style="margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed #e5e7eb; page-break-inside: avoid; break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: bold; color: #004b89;">
                Dia ${day.dayNumber} • ${formatFullDatePt(day.date)}: ${day.title}
              </h4>
              <span style="font-size: 11px; font-weight: bold; color: #4b5563;">${day.activityType === 'park' ? 'Parque Temático' : 'Descanso / Compras'}</span>
            </div>
            <p style="margin: 2px 0 6px 0; font-size: 12px; color: #374151;">${day.description}</p>
            ${parkInfo ? `
              <div style="font-size: 11.5px; background: #f3f4f6; padding: 6px 10px; border-radius: 6px; margin-top: 4px;">
                <strong>Horário:</strong> ${day.plannedArrivalTime || parkInfo.defaultOpeningHour} às ${day.plannedDepartureTime || parkInfo.defaultClosingHour} | 
                <strong>Rope Drop:</strong> ${day.ropeDropStrategy || parkInfo.ropeDropAdvice}
                ${day.priorityAttractions?.length ? `<br/><strong>Atrações Prioritárias:</strong> ${day.priorityAttractions.join(', ')}` : ''}
              </div>
            ` : ''}
            ${day.personalNotes ? `<p style="margin: 4px 0 0 0; font-size: 11px; color: #6b7280;"><em>Obs: ${day.personalNotes}</em></p>` : ''}
          </div>
        `;
      })
      .join('');

    const outletsDetails = OUTLETS_CATALOG
      .map((store) => `
        <div style="margin-bottom: 10px; padding: 8px 10px; border: 1px solid #e5e7eb; border-radius: 6px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 12px; color: #111827;">
            <span>${store.name}</span>
            <span style="color: #059669;">Preço: ${store.priceLevel}</span>
          </div>
          <div style="font-size: 11px; color: #4b5563; margin-top: 2px;">${store.address} (${store.distanceRegion})</div>
          <div style="font-size: 11px; color: #1f2937; margin-top: 3px;"><strong>Marcas:</strong> ${store.topBrands.slice(0, 5).join(', ')}</div>
          <div style="font-size: 11px; color: #004b89; margin-top: 3px;"><strong>Dica de Economia:</strong> ${store.savingTips}</div>
        </div>
      `)
      .join('');

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>ORLANDO PLANNER — Roteiro Oficial de Viagem</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 24px; color: #111827; line-height: 1.4; font-size: 12px; }
          h1 { margin: 0 0 4px 0; font-size: 22px; color: #004b89; }
          h2 { margin: 18px 0 8px 0; font-size: 16px; color: #1f2937; border-bottom: 2px solid #004b89; padding-bottom: 4px; page-break-after: avoid; break-after: avoid; }
          h3, h4 { margin: 14px 0 6px 0; font-size: 14px; page-break-after: avoid; break-after: avoid; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11.5px; }
          thead { display: table-header-group; }
          tr, td, th { page-break-inside: avoid; break-inside: avoid; }
          .kpi-box { display: flex; gap: 12px; margin: 12px 0 18px 0; }
          .kpi { flex: 1; padding: 10px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 18px; font-weight: bold; color: #004b89; margin-top: 2px; }
          .page-break { page-break-before: always; break-before: always; }
          @media print {
            body { margin: 12mm 15mm; }
            .no-print { display: none !important; }
            table, tr, td, th { page-break-inside: avoid; break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #004b89; padding-bottom: 8px;">
          <div>
            <h1>ORLANDO PLANNER</h1>
            <div style="font-size: 13px; font-weight: 600; color: #4b5563;">Roteiro Inteligente & Planejamento Oficial de Parques</div>
          </div>
          <div style="text-align: right; font-size: 11px; color: #6b7280;">
            <div><strong>Período:</strong> ${formatDateRangePt(startDate, endDate)} (${itinerary.length} dias)</div>
            <div>Impresso em: ${new Date().toLocaleDateString('pt-BR')}</div>
          </div>
        </div>

        <div class="kpi-box">
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Duração Total</div>
            <div class="kpi-val">${itinerary.length} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Dias em Parques</div>
            <div class="kpi-val">${parkDaysCount} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Descanso & Outlets</div>
            <div class="kpi-val">${restDaysCount} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Distribuição Estratégica</div>
            <div class="kpi-val" style="font-size: 14px; padding-top: 3px;">Equilibrada</div>
          </div>
        </div>

        <h2>1. Visão Geral da Programação Diária</h2>
        <table>
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: left;">Data</th>
              <th style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: left;">Atividade Planejada</th>
              <th style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">Esforço</th>
              <th style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">Lotação</th>
              <th style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: left;">Ingresso</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        <div class="page-break"></div>

        <h2>2. Detalhamento Estratégico por Dia (Rope Drop & Atrações)</h2>
        ${daysDetails}

        <div class="page-break"></div>

        <h2>3. Guia dos Melhores Outlets para Compras Econômicas</h2>
        <p style="font-size: 11.5px; color: #4b5563; margin-bottom: 12px;">
          Locais selecionados para encontrar os menores preços em roupas, tênis esportivos, malas e eletrônicos em Orlando.
        </p>
        ${outletsDetails}

        <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 8px;">
          ORLANDO PLANNER — Sua viagem. Seu roteiro. Sua melhor experiência.
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 350);
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  }
}
