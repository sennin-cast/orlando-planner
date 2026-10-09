import { CrowdDataStore } from '../types/crowd';
import { ItineraryDay } from '../types/itinerary';
import { PARKS_CATALOG } from '../data/parksCatalog';
import { CrowdDataService } from '../services/crowdDataService';
import { ParkLiveWaitSummary } from '../services/queueTimesService';
import {
  MONTHS_METADATA_2027,
  getMonthDaysCrowd2027,
  ANNUAL_CROWD_DATA_2027,
  getParkCrowdLevelsForDate,
} from '../data/annualCrowdData2027';

export type CrowdSubTab = 'forecast' | 'annual-calendar' | 'live-queues';

export function renderCrowdView(
  _crowdStore: CrowdDataStore,
  operatorFilter: 'all' | 'disney' | 'universal' | 'seaworld' = 'all',
  subTab: CrowdSubTab = 'forecast',
  selectedLiveParkId: string = 'magic-kingdom',
  liveData?: ParkLiveWaitSummary | null,
  selectedMonth: number = 5,
  tripDatesList: string[] = [],
  itineraryDays: ItineraryDay[] = []
): string {
  const parkIds = Object.keys(PARKS_CATALOG).filter((id) => {
    if (operatorFilter === 'all') return true;
    return PARKS_CATALOG[id].operator === operatorFilter;
  });

  const monthMeta = MONTHS_METADATA_2027[selectedMonth] || MONTHS_METADATA_2027[5];
  const monthDays = getMonthDaysCrowd2027(selectedMonth);

  // Month selector options
  const monthOptions = Object.values(MONTHS_METADATA_2027)
    .map((m) => {
      const isSelected = m.month === selectedMonth;
      return `
        <button
          type="button"
          class="btn-select-crowd-month px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
            isSelected
              ? 'bg-primary text-on-primary shadow-xs'
              : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
          }"
          data-month="${m.month}"
        >
          <span>${m.name} 2027</span>
          <span class="text-[10px] ml-1 opacity-80 font-label-xs-mono">(${m.avgCrowd}/10)</span>
        </button>
      `;
    })
    .join('');

  // 1. Monthly Heatmap Calendar View
  const weekdaysShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const firstDayOfWeek = new Date(`2027-${String(selectedMonth).padStart(2, '0')}-01T12:00:00Z`).getUTCDay();

  let calendarGridCellsHtml = '';
  // Empty offset days for start of month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarGridCellsHtml += `<div class="p-2 min-h-[60px] sm:min-h-[76px] bg-surface-container-low/20 rounded-xl border border-dashed border-outline-variant/15 opacity-30"></div>`;
  }

  let calendarListViewHtml = '';

  // Days of current month
  monthDays.forEach((dInfo) => {
    const isTripDay = tripDatesList.includes(dInfo.date);
    const style = CrowdDataService.getCrowdBadgeStyle(dInfo.crowdLevel);
    const itinDay = itineraryDays.find((d) => d.date === dInfo.date);
    const parkShort = itinDay ? (itinDay.parkId ? (PARKS_CATALOG[itinDay.parkId]?.shortName || itinDay.title) : itinDay.title) : null;
    const isLocked = itinDay?.isLocked || false;
    const crowdDisplay = dInfo.crowdLevel !== null && dInfo.crowdLevel !== undefined ? `${dInfo.crowdLevel}/10` : 'Lotação n/d';

    calendarGridCellsHtml += `
      <div 
        class="p-2 sm:p-2.5 min-h-[68px] sm:min-h-[82px] rounded-xl border transition-all flex flex-col justify-between cursor-pointer group hover:scale-[1.02] ${style.bgClass} ${style.borderClass} ${
          isTripDay ? 'ring-2 ring-primary shadow-sm' : ''
        }"
        title="${dInfo.date}: Nível ${crowdDisplay} (${style.label})${isTripDay ? ` • ${parkShort || 'Dia do seu Roteiro!'}` : ''}${isLocked ? ' [Data Bloqueada]' : ''}"
        data-date="${dInfo.date}"
      >
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs sm:text-sm text-on-surface">${dInfo.day}</span>
          ${
            isTripDay
              ? `<span class="px-1.5 py-0.2 rounded-full bg-primary text-on-primary text-[9px] font-bold flex items-center gap-0.5 truncate max-w-[55px] sm:max-w-[70px]">
                  <span class="truncate">${parkShort || 'Roteiro'}</span>
                  ${isLocked ? '<span class="material-symbols-outlined text-[10px]">lock</span>' : ''}
                </span>`
              : ''
          }
        </div>

        <div class="flex items-end justify-between mt-1">
          <div class="flex flex-col">
            <span class="font-label-xs-mono text-xs sm:text-sm font-extrabold ${style.textClass}">
              ${crowdDisplay}
            </span>
            <span class="text-[9px] text-outline font-medium hidden sm:inline-block">${dInfo.season}</span>
          </div>
          <span class="text-[10px] sm:text-xs material-symbols-outlined ${style.textClass}">
            ${dInfo.crowdLevel !== null && dInfo.crowdLevel <= 3 ? 'sentiment_satisfied' : dInfo.crowdLevel !== null && dInfo.crowdLevel <= 6 ? 'sentiment_neutral' : 'sentiment_very_dissatisfied'}
          </span>
        </div>
      </div>
    `;

    calendarListViewHtml += `
      <div class="p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${style.bgClass} ${style.borderClass} ${
        isTripDay ? 'ring-2 ring-primary shadow-xs' : ''
      }">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 text-center shrink-0">
            <span class="text-sm font-bold text-on-surface">${String(dInfo.day).padStart(2, '0')}/${String(selectedMonth).padStart(2, '0')}</span>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-xs ${style.textClass}">${crowdDisplay}</span>
              <span class="text-[11px] text-outline font-medium">(${style.label})</span>
            </div>
            <span class="text-[10px] text-outline block truncate">${dInfo.season}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          ${
            itinDay
              ? `<span class="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center gap-1">
                  <span>${parkShort}</span>
                  ${isLocked ? '<span class="material-symbols-outlined text-[11px]">lock</span>' : ''}
                </span>`
              : ''
          }
        </div>
      </div>
    `;
  });

  // 2. Park-by-Park Matrix for the selected month or user's trip dates
  const matrixDates = tripDatesList.length > 0 && subTab === 'forecast'
    ? tripDatesList
    : monthDays.slice(0, 15).map((d) => d.date); // First 15 days of month or trip dates

  const tableHeaderDatesHtml = matrixDates
    .map((dateStr) => {
      const parts = dateStr.split('-');
      const d = parts[2];
      const m = parts[1];
      const dayDate = new Date(dateStr + 'T12:00:00Z');
      const wDay = weekdaysShort[dayDate.getUTCDay()];
      const level = ANNUAL_CROWD_DATA_2027[dateStr] ?? null;
      const style = CrowdDataService.getCrowdBadgeStyle(level);

      return `
        <th class="p-1.5 text-center min-w-[38px] border-r border-outline-variant/20">
          <div class="font-label-xs-mono text-[10px] uppercase text-outline">${wDay}</div>
          <div class="font-bold text-[13px] text-on-surface">${d}/${m}</div>
          ${
            level !== null
              ? `<span class="inline-block px-1 rounded text-[10px] font-extrabold ${style.textClass} ${style.bgClass}">
                  ${level}
                </span>`
              : ''
          }
        </th>
      `;
    })
    .join('');

  const parkRowsHtml = parkIds
    .map((parkId) => {
      const park = PARKS_CATALOG[parkId];
      const cellsHtml = matrixDates
        .map((dateStr) => {
          const parkLevels = getParkCrowdLevelsForDate(dateStr);
          const parkInfo = parkLevels[parkId];
          const level = parkInfo?.crowdLevel ?? null;
          const style = CrowdDataService.getCrowdBadgeStyle(level);

          return `
            <td class="p-1 text-center border border-outline-variant/30 ${style.bgClass} hover:opacity-80 transition-opacity" title="${dateStr}: ${park.name} — ${style.label}">
              <div class="flex flex-col items-center justify-center min-w-[34px] h-[34px]">
                <span class="font-bold text-xs ${style.textClass}">
                  ${level ?? 'N/D'}
                </span>
                ${parkInfo?.isRecommended ? '<span class="w-1.5 h-1.5 rounded-full bg-[#27865b] mt-0.5" title="Parque Recomendado!"></span>' : ''}
                ${parkInfo?.isBusyDay ? '<span class="w-1.5 h-1.5 rounded-full bg-[#c44b4b] mt-0.5" title="Dia Mais Movimentado para este parque"></span>' : ''}
              </div>
            </td>
          `;
        })
        .join('');

      return `
        <tr class="hover:bg-surface-container-low/40 transition-colors">
          <td class="p-3 font-body-md-medium text-xs sm:text-sm text-on-surface sticky left-0 bg-surface-container-lowest z-10 border-b border-r border-outline-variant/30 min-w-[140px] truncate">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${park.color};"></span>
              <span class="truncate font-semibold">${park.name}</span>
            </div>
          </td>
          ${cellsHtml}
        </tr>
      `;
    })
    .join('');

  // 3. Live queues content HTML
  let liveQueuesViewHtml = '';
  if (subTab === 'live-queues') {
    const selectedPark = PARKS_CATALOG[selectedLiveParkId] || PARKS_CATALOG['magic-kingdom'];

    const parkSelectorButtons = Object.values(PARKS_CATALOG)
      .map((p) => {
        const isSelected = p.id === selectedLiveParkId;
        return `
          <button 
            type="button" 
            class="btn-select-live-park px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              isSelected
                ? 'bg-primary text-on-primary shadow-xs'
                : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
            }" 
            data-park-id="${p.id}"
          >
            <span class="w-2 h-2 rounded-full" style="background-color: ${p.color};"></span>
            <span>${p.shortName}</span>
          </button>
        `;
      })
      .join('');

    let waitContentHtml = '';
    if (liveData) {
      const landsHtml = liveData.lands
        .map((land) => {
          const ridesList = land.rides
            .map((ride) => {
              let badge = '';
              if (!ride.is_open) {
                badge = `<span class="px-2 py-0.5 rounded bg-surface-container text-outline text-[11px]">Fechado</span>`;
              } else if (ride.wait_time === 0) {
                badge = `<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">Sem Fila</span>`;
              } else if (ride.wait_time <= 20) {
                badge = `<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">${ride.wait_time} min</span>`;
              } else if (ride.wait_time <= 45) {
                badge = `<span class="px-2 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-bold text-[11px]">${ride.wait_time} min</span>`;
              } else {
                badge = `<span class="px-2 py-0.5 rounded bg-[#fdf2f2] text-[#93000a] font-bold text-[11px]">${ride.wait_time} min</span>`;
              }

              return `
                <div class="flex items-center justify-between py-2 border-b border-outline-variant/15 text-xs hover:bg-surface-container-low/40 px-2 rounded transition-colors">
                  <span class="font-medium text-on-surface">${ride.name}</span>
                  ${badge}
                </div>
              `;
            })
            .join('');

          return `
            <div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-2xs space-y-2">
              <h3 class="font-bold text-xs uppercase tracking-wider text-outline">${land.name}</h3>
              <div class="space-y-0.5">
                ${ridesList || '<p class="text-xs text-outline">Nenhuma atração disponível.</p>'}
              </div>
            </div>
          `;
        })
        .join('');

      waitContentHtml = `
        <div class="space-y-4">
          <!-- Summary Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[22px]">timer</span>
              </div>
              <div>
                <span class="text-xs text-outline block">Média de Espera</span>
                <span class="font-label-xs-mono text-xl font-extrabold text-primary">${liveData.avgWaitTime} min</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#ebf6f1] text-[#1b6443] flex items-center justify-center">
                <span class="material-symbols-outlined text-[22px]">attractions</span>
              </div>
              <div>
                <span class="text-xs text-outline block">Atrações Operando</span>
                <span class="font-label-xs-mono text-xl font-extrabold text-[#1b6443]">${liveData.openRides} / ${liveData.totalRides}</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3 truncate">
              <div class="w-10 h-10 rounded-xl bg-[#fdf2f2] text-[#93000a] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[22px]">hourglass_top</span>
              </div>
              <div class="min-w-0">
                <span class="text-xs text-outline block truncate">Pico de Fila Atual</span>
                <span class="font-label-xs-mono text-base font-extrabold text-[#93000a] block truncate" title="${liveData.maxWaitRide?.name || '—'}">
                  ${liveData.maxWaitRide ? `${liveData.maxWaitRide.name}: ${liveData.maxWaitRide.wait_time}m` : '—'}
                </span>
              </div>
            </div>
          </div>

          <!-- Status and Refresh Header -->
          <div class="flex items-center justify-between text-xs px-1">
            <div class="flex items-center gap-2">
              ${
                liveData.isLive
                  ? `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">
                      <span class="w-2 h-2 rounded-full bg-[#27865b] animate-ping"></span>
                      Ao Vivo Agora via API
                    </span>`
                  : `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-outline font-semibold text-[11px]">
                      <span class="w-2 h-2 rounded-full bg-outline"></span>
                      Modo Estimativa / Fila Típica
                    </span>`
              }
              <span class="text-outline font-label-xs-mono">Leitura: ${liveData.lastUpdated}</span>
            </div>

            <button type="button" id="btn-refresh-live-queues" class="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container text-on-surface font-semibold text-xs flex items-center gap-1.5 transition-colors">
              <span class="material-symbols-outlined text-[16px]">refresh</span>
              <span>Atualizar Filas</span>
            </button>
          </div>

          <!-- Lands Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${landsHtml}
          </div>
        </div>
      `;
    } else {
      waitContentHtml = `
        <div class="p-12 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 space-y-3">
          <span class="material-symbols-outlined animate-spin text-primary text-[36px]">progress_activity</span>
          <p class="font-semibold text-on-surface">Carregando dados ao vivo de filas para ${selectedPark.name}...</p>
          <span class="text-xs text-outline">Conectando à API do Queue-Times.com...</span>
        </div>
      `;
    }

    liveQueuesViewHtml = `
      <section class="space-y-4">
        <!-- Park Picker Scroll -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          ${parkSelectorButtons}
        </div>

        <!-- Live Content -->
        ${waitContentHtml}

        <!-- Queue-Times Subtle Attribution Footer -->
        <div class="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2 text-on-surface-variant">
            <span class="material-symbols-outlined text-[18px] text-primary">cloud_sync</span>
            <span>A Real Time API fornece tempos de espera atualizados a cada 5 minutos diretamente dos parques.</span>
          </div>

          <a href="https://queue-times.com/pt-BR" target="_blank" rel="noopener noreferrer" class="font-bold text-primary hover:underline flex items-center gap-1 shrink-0">
            <span>Powered by Queue-Times.com</span>
            <span class="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </section>
    `;
  }

  return `
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title & Sub-tabs -->
      <section class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Calendário de Lotação 2027</h1>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ebf6f1] text-[#1b6443]">Dados Históricos de 20 Anos</span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Previsões analíticas de 365 dias para Universal, Disney e SeaWorld baseadas em dados históricos de Undercover Tourist.
          </p>
        </div>

        <!-- Subtabs: Trip Forecast vs Annual Calendar vs Live Queues -->
        <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto scrollbar-none">
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${subTab === 'forecast' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-subtab="forecast">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px]">date_range</span>
              <span>Minha Viagem</span>
            </span>
          </button>
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${subTab === 'annual-calendar' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-subtab="annual-calendar">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px]">calendar_month</span>
              <span>Calendário Mensal (12 Meses)</span>
            </span>
          </button>
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${subTab === 'live-queues' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}" data-subtab="live-queues">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px] text-[#27865b]">sensors</span>
              <span>Filas ao Vivo</span>
            </span>
          </button>
        </div>
      </section>

      <!-- Educational Pedagogical Accordion: O Que É e Como Usar o Calendário de Lotação -->
      <section class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-2xs overflow-hidden">
        <details class="group p-4 sm:p-5">
          <summary class="flex items-center justify-between cursor-pointer list-none">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[22px]">school</span>
              </div>
              <div>
                <h3 class="font-bold text-xs sm:text-sm text-on-surface flex items-center gap-2">
                  <span>Guia Oficial: O que é e Como Usar o Calendário de Lotação (Crowd Calendar)?</span>
                  <span class="px-2 py-0.5 rounded text-[10px] bg-secondary-fixed text-on-secondary-fixed font-bold">Metodologia</span>
                </h3>
                <span class="text-xs text-outline">Entenda a escala de 1 a 10, critério de desempate de parques e precificação por temporada</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-outline group-open:rotate-180 transition-transform">expand_more</span>
          </summary>

          <div class="pt-4 mt-4 border-t border-outline-variant/20 space-y-4 text-xs text-on-surface-variant leading-relaxed">
            <!-- 1. O que é -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 space-y-1.5">
                <h4 class="font-bold text-primary text-xs flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px]">info</span>
                  <span>O que é um Calendário de Lotação?</span>
                </h4>
                <p>
                  O Calendário de Lotação é a maneira mais simples e precisa de prever o quão cheios estarão os parques temáticos de Orlando em qualquer dia do ano. Permite selecionar as melhores épocas para viajar, comparar clima histórico, feriados e horários de espetáculos.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 space-y-1.5">
                <h4 class="font-bold text-primary text-xs flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px]">query_stats</span>
                  <span>Como os Níveis são Calculados?</span>
                </h4>
                <p>
                  São utilizados <strong>mais de 20 anos de dados históricos de tempos de espera</strong>, cruzando sazonalidade, férias escolares americanas, feriados federais, horários de abertura e fechamento, além de tendências de reservas na hotelaria e venda antecipada de ingressos.
                </p>
              </div>
            </div>

            <!-- 2. Escala 1 a 10 -->
            <div class="p-4 rounded-xl bg-surface-container-low/50 border border-outline-variant/20 space-y-2">
              <h4 class="font-bold text-on-surface text-xs uppercase tracking-wider">
                Nível Diário de Lotação (Escala de 1 a 10 — MAIS IMPORTANTE!)
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div class="p-3 rounded-lg bg-[#ebf6f1] border border-[#c2e6d5] space-y-0.5">
                  <div class="flex items-center gap-1.5 text-[#1b6443] font-bold">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#27865b]"></span>
                    <span>1 a 3: Menor Lotação (Ideal)</span>
                  </div>
                  <p class="text-[11px] text-[#1b6443]/80">Filas de 10 a 25 min nas grandes atrações. Maior número de brinquedos visitados por dia.</p>
                </div>

                <div class="p-3 rounded-lg bg-[#fef7ed] border border-[#f7dfb7] space-y-0.5">
                  <div class="flex items-center gap-1.5 text-[#8f5700] font-bold">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#b97820]"></span>
                    <span>4 a 6: Lotação Média</span>
                  </div>
                  <p class="text-[11px] text-[#8f5700]/80">Ritmo padrão de Orlando. Com Rope Drop matutino faz-se quase tudo com conforto.</p>
                </div>

                <div class="p-3 rounded-lg bg-[#fdf2f2] border border-[#f5c7c7] space-y-0.5">
                  <div class="flex items-center gap-1.5 text-[#93000a] font-bold">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#c44b4b]"></span>
                    <span>7 a 10: Maior Lotação (Pico)</span>
                  </div>
                  <p class="text-[11px] text-[#93000a]/80">Feriados e férias escolares. Filas de 75 a 120+ minutos. Indispensável estratégia rígida.</p>
                </div>
              </div>
            </div>

            <!-- 3. Regra de Ouro & Desempate -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 space-y-1.5">
                <h4 class="font-bold text-on-surface text-xs flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px] text-[#27865b]">check_circle</span>
                  <span>1. COMECE PELO NÍVEL DE LOTAÇÃO DO DIA</span>
                </h4>
                <p>
                  A maioria das famílias deve focar primeiramente no nível geral do dia (1 a 10). Ele expressa o movimento global da cidade. Por exemplo, no geral, o movimento nos parques de Orlando é maior no dia 11 do que nos dias 9 e 10.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 space-y-1.5">
                <h4 class="font-bold text-on-surface text-xs flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[16px] text-[#1967d2]">tune</span>
                  <span>2. CRITÉRIO DE DESEMPATE POR PARQUE</span>
                </h4>
                <p>
                  As recomendações por parque devem ser usadas ao comparar o mesmo parque em dias com o mesmo nível de lotação. Se ambos os dias forem <strong>Nível 6/10</strong>, mas o Magic Kingdom for o <em>Parque Recomendado</em> (círculo verde) no dia 13 e não no dia 12, visite-o no dia 13!
                </p>
              </div>
            </div>

            <!-- 4. Depoimentos Reais -->
            <div class="p-3.5 rounded-xl bg-primary-fixed/20 border border-primary/20 space-y-2">
              <span class="font-bold text-primary text-[11px] uppercase tracking-wider block">Depoimentos Reais de Viajantes</span>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 italic text-[11px] text-on-surface">
                <div class="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/20">
                  “Reservamos nossa viagem com base no calendário de lotação e foi certeiro! A fila mais longa que pegamos foi de 20 minutos.”
                  <span class="not-italic block mt-1 font-semibold text-primary text-[10px]">— SPettiette</span>
                </div>
                <div class="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/20">
                  “Vocês têm, sem dúvidas, o melhor calendário de lotação de Orlando!”
                  <span class="not-italic block mt-1 font-semibold text-primary text-[10px]">— T.H.</span>
                </div>
                <div class="bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/20">
                  “Planejamos todos os nossos agendamentos com antecedência pelo calendário. Não estaríamos tão organizados sem ele.”
                  <span class="not-italic block mt-1 font-semibold text-primary text-[10px]">— Steve, Desenvolvedor Web</span>
                </div>
              </div>
            </div>
          </div>
        </details>
      </section>

      ${
        subTab === 'annual-calendar'
          ? `
      <!-- Month Picker Bar -->
      <section class="space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline">Navegar por Mês de 2027</h2>
          <span class="text-xs text-outline font-label-xs-mono">Ano Completo Disponível</span>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          ${monthOptions}
        </div>
      </section>

      <!-- Selected Month Info Banner -->
      <section class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/20 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg sm:text-xl font-bold text-on-surface">${monthMeta.name} de 2027</h2>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${
                monthMeta.avgCrowd <= 4.5
                  ? 'bg-[#ebf6f1] text-[#1b6443]'
                  : monthMeta.avgCrowd <= 6.5
                  ? 'bg-[#fef7ed] text-[#8f5700]'
                  : 'bg-[#fdf2f2] text-[#93000a]'
              }">
                Média do Mês: ${monthMeta.avgCrowd}/10
              </span>
            </div>
            <span class="text-xs text-outline font-medium mt-0.5 block">${monthMeta.season}</span>
          </div>

          <div class="flex items-center gap-3 text-xs shrink-0">
            <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
              <span class="text-[10px] text-outline block">Clima Médio</span>
              <span class="font-bold text-on-surface font-label-xs-mono">${monthMeta.tempC}</span>
            </div>
            <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
              <span class="text-[10px] text-outline block">Fahrenheit</span>
              <span class="font-bold text-outline font-label-xs-mono">${monthMeta.tempF}</span>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 text-xs flex items-start gap-2 text-on-surface">
          <span class="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">event</span>
          <div>
            <strong class="font-semibold text-primary">Eventos & Sazonalidade em ${monthMeta.name}:</strong>
            <span>${monthMeta.events}</span>
          </div>
        </div>
      </section>

      <!-- Monthly Calendar Heatmap Grid & List View -->
      <section class="bg-surface-container-lowest p-4 sm:p-5 pb-8 sm:pb-10 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">calendar_view_month</span>
            <span>Grade Diária de Lotação — ${monthMeta.name} 2027</span>
          </h3>

          <div class="flex items-center gap-2">
            <span class="text-[11px] text-outline hidden sm:inline-block">Toque no dia para ver detalhes</span>
            <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
              <button type="button" id="btn-crowd-view-grid" class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-surface-container-lowest text-primary shadow-xs transition-colors">
                Grade
              </button>
              <button type="button" id="btn-crowd-view-list" class="px-2.5 py-1 rounded-lg text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
                Lista
              </button>
            </div>
          </div>
        </div>

        <!-- Grid Container -->
        <div id="crowd-month-grid-container" class="space-y-2">
          <!-- Weekdays Header -->
          <div class="grid grid-cols-7 gap-1.5 text-center text-xs font-bold text-outline uppercase pb-1">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sáb</div>
          </div>

          <!-- Calendar Cells Grid -->
          <div class="grid grid-cols-7 gap-1.5 sm:gap-2">
            ${calendarGridCellsHtml}
          </div>
        </div>

        <!-- Mobile List Container (hidden by default on desktop, toggled or displayed on demand) -->
        <div id="crowd-month-list-container" class="hidden space-y-2 max-h-[500px] overflow-y-auto pr-1">
          ${calendarListViewHtml}
        </div>
      </section>
      `
          : ''
      }

      ${
        subTab === 'forecast' || subTab === 'annual-calendar'
          ? `
      <!-- Filter tabs for operators -->
      <section class="flex items-center justify-between gap-4 flex-wrap pt-2">
        <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto">
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${operatorFilter === 'all' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="all">
            Todos os Complexos (10)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${operatorFilter === 'disney' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="disney">
            Disney (4)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${operatorFilter === 'universal' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="universal">
            Universal (4)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${operatorFilter === 'seaworld' ? 'bg-surface-container-lowest text-primary shadow-xs' : 'text-on-surface-variant'}" data-filter="seaworld">
            United Parks (2)
          </button>
        </div>

        <div class="text-xs text-outline flex items-center gap-2">
          <span class="inline-flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-[#27865b]"></span>
            <span>🟢 Parque Recomendado</span>
          </span>
          <span class="inline-flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-[#c44b4b]"></span>
            <span>🔴 Dia Movimentado</span>
          </span>
        </div>
      </section>

      <!-- Matrix Table -->
      <section class="bg-surface-container-lowest rounded-2xl shadow-2xs border border-outline-variant/30 overflow-hidden">
        <div class="p-3 bg-surface-container-low border-b border-outline-variant/20 flex items-center justify-between text-xs">
          <span class="font-bold text-on-surface uppercase tracking-wider text-[11px]">
            ${subTab === 'forecast' ? 'Matriz por Parque — Dias da Sua Viagem' : `Matriz por Parque — 1ª Quinzena de ${monthMeta.name}`}
          </span>
          <span class="text-outline text-[11px]">Cruzamento diário individualizado</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low/70 border-b border-outline-variant/30 text-xs text-outline font-medium">
                <th class="p-3 sticky left-0 bg-surface-container-low z-20 border-r border-outline-variant/30 min-w-[140px]">Parque</th>
                ${tableHeaderDatesHtml}
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/20">
              ${parkRowsHtml}
            </tbody>
          </table>
        </div>

        <div class="p-3 bg-surface-container-low border-t border-outline-variant/20 flex items-center justify-between text-xs text-outline">
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px] text-tertiary-container">verified</span>
            <span>Histórico de 20 anos compilado e traduzido para o Português do Brasil.</span>
          </div>
          <span class="font-label-xs-mono">Temporada 2027</span>
        </div>
      </section>
      `
          : ''
      }

      ${subTab === 'live-queues' ? liveQueuesViewHtml : ''}
    </div>
  `;
}
