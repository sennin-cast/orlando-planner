var Oe=Object.defineProperty;var Fe=(i,e,a)=>e in i?Oe(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a;var A=(i,e,a)=>Fe(i,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const qe=[{date:"2027-05-05",dayOfWeek:"Qua",dayNumber:1,title:"Chegada a Orlando / Compras essenciais",description:"Pouso no aeroporto de Orlando (MCO), retirada de veículo, check-in no hotel e compras básicas de mercado (água, lanches e protetor solar).",activityType:"arrival",parkId:null,ticketId:null,isLocked:!0,effortLevel:"OFF",plannedArrivalTime:"14:00",plannedDepartureTime:"21:00",personalNotes:"Chegada internacional e ambientação. Manter tarde/noite leve para descanso do voo."},{date:"2027-05-06",dayOfWeek:"Qui",dayNumber:2,title:"SeaWorld Orlando",description:"Parque de vida marinha com montanhas-russas intensas (Mako, Pipeline, Kraken, Manta). Ritmo controlado para início suave de viagem.",activityType:"park",parkId:"seaworld",ticketId:"ticket-seaworld-2park",isLocked:!1,effortLevel:"Leve",plannedArrivalTime:"08:45",plannedDepartureTime:"17:30",ropeDropStrategy:"Chegar 15 minutos antes da abertura e focar em Pipeline e Mako nas primeiras horas.",priorityAttractions:["Pipeline: The Surf Coaster","Mako","Kraken","Manta","Penguin Trek"],personalNotes:"Primeiro dia de parque. Ideal para aquecimento físico sem sobrecarga."},{date:"2027-05-07",dayOfWeek:"Sex",dayNumber:3,title:"Universal Studios Florida",description:"Beco Diagonal (Harry Potter), Revenge of the Mummy, Men in Black e atrações imersivas do cinema.",activityType:"park",parkId:"universal-studios",ticketId:"ticket-universal-multi",isLocked:!1,effortLevel:"Médio",plannedArrivalTime:"08:30",plannedDepartureTime:"19:00",ropeDropStrategy:"Direto para Harry Potter and the Escape from Gringotts no Diagon Alley.",priorityAttractions:["Harry Potter and the Escape from Gringotts","Revenge of the Mummy","TRANSFORMERS: The Ride 3D","Men in Black"],personalNotes:"Primeiro contato com o universo Universal."},{date:"2027-05-08",dayOfWeek:"Sáb",dayNumber:4,title:"Descanso / Disney Springs",description:"Dia sem parques temáticos. Passeio relaxante em Disney Springs, almoço especial e compras temáticas.",activityType:"rest",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"11:00",plannedDepartureTime:"18:00",diningNotes:"Sugestão: Almoço no Chef Art Smith's Homecomin' ou The Boathouse.",personalNotes:"Pausa estratégica de sábado para evitar multidões de fim de semana nos parques centrais."},{date:"2027-05-09",dayOfWeek:"Dom",dayNumber:5,title:"Busch Gardens Tampa Bay",description:"Dia de montanhas-russas lendárias (Iron Gwazi, Cheetah Hunt, SheiKra, Montu) e safári em Tampa (~1h15 de viagem I-4 W).",activityType:"park",parkId:"busch-gardens",ticketId:"ticket-seaworld-2park",isLocked:!1,effortLevel:"Médio",plannedArrivalTime:"09:40",plannedDepartureTime:"17:30",ropeDropStrategy:"Saída de Orlando às 08h15. Na chegada, ir direto para Iron Gwazi.",priorityAttractions:["Iron Gwazi","Cheetah Hunt","SheiKra","Montu","Cobra's Curse"],personalNotes:"Atenção ao deslocamento de estrada interestadual. Reservar energia para retorno."},{date:"2027-05-10",dayOfWeek:"Seg",dayNumber:6,title:"Volcano Bay",description:"Parque aquático temático da Universal com a imponência do vulcão Krakatau e praias tropicais de relaxamento.",activityType:"park",parkId:"volcano-bay",ticketId:"ticket-universal-multi",isLocked:!1,effortLevel:"Leve",plannedArrivalTime:"09:45",plannedDepartureTime:"16:00",ropeDropStrategy:"Usar pulseira TapuTapu imediatamente para agendar Krakatau Aqua Coaster.",priorityAttractions:["Krakatau Aqua Coaster","Ko'okiri Body Plunge","Honu ika Moana","Waturi Beach"],personalNotes:"Dia revigorante na água após o deslocamento a Tampa."},{date:"2027-05-11",dayOfWeek:"Ter",dayNumber:7,title:"Epic Universe — Visita 1",description:"Primeira exploração do novo e grandioso quarto parque da Universal Orlando: Super Nintendo World, Isle of Berk, Dark Universe e Celestial Park.",activityType:"park",parkId:"epic-universe",ticketId:"ticket-universal-multi",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:15",plannedDepartureTime:"21:00",ropeDropStrategy:"Chegada antecipada prioritária. Entrada focada em Super Nintendo World ou Ministério da Magia.",priorityAttractions:["Mario Kart: Bowser's Challenge","Harry Potter: Battle at the Ministry","Monsters Unchained: The Frankenstein Experiment","Hiccup's Wing Gliders"],personalNotes:"Parque de alto impacto físico. Dia intenso de descobertas."},{date:"2027-05-12",dayOfWeek:"Qua",dayNumber:8,title:"Descanso / Premium Outlets Vineland",description:"Recuperação física pós-Epic Universe. Compras com calma nos outlets e almoço tranquilo.",activityType:"shopping",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"10:30",plannedDepartureTime:"17:00",personalNotes:"Descanso muscular obrigatório para recarregar energias."},{date:"2027-05-13",dayOfWeek:"Qui",dayNumber:9,title:"Islands of Adventure",description:"Hogsmeade (Harry Potter), Jurassic World VelociCoaster, Hagrid's Motorbike e atrações Marvel.",activityType:"park",parkId:"islands-of-adventure",ticketId:"ticket-universal-multi",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"20:00",ropeDropStrategy:"VelociCoaster ou Hagrid's Magical Creatures Motorbike Adventure logo na corda matinal.",priorityAttractions:["Jurassic World VelociCoaster","Hagrid's Magical Creatures Motorbike Adventure","Harry Potter and the Forbidden Journey","The Incredible Hulk Coaster"],personalNotes:"Dia pesado com as melhores atrações radicais de Orlando."},{date:"2027-05-14",dayOfWeek:"Sex",dayNumber:10,title:"Descanso / Mall at Millenia",description:"Dia leve sem parque antes da sequência de parques Disney. Passeio no Millenia Mall, eletrônicos e jantar.",activityType:"rest",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"11:00",plannedDepartureTime:"17:30",diningNotes:"The Cheesecake Factory ou Capital Grille.",personalNotes:"Pausa fundamental antes de iniciar a janela Disney."},{date:"2027-05-15",dayOfWeek:"Sáb",dayNumber:11,title:"Animal Kingdom",description:"Pandora - The World of Avatar, safári africano, Expedition Everest. Início da janela do passe Disney 4-Park Magic.",activityType:"park",parkId:"animal-kingdom",ticketId:"ticket-disney-4park",isLocked:!1,effortLevel:"Leve",plannedArrivalTime:"07:30",plannedDepartureTime:"17:00",ropeDropStrategy:"Entrada antecipada em Pandora: Flight of Passage.",priorityAttractions:["Avatar Flight of Passage","Na'vi River Journey","Expedition Everest","Kilimanjaro Safaris"],personalNotes:"Primeiro dia do passe Disney 4-Park Magic (ativação da janela de 7 dias). Fechamento mais cedo permite descanso noturno."},{date:"2027-05-16",dayOfWeek:"Dom",dayNumber:12,title:"Hollywood Studios",description:"Star Wars: Galaxy's Edge, Toy Story Land e clássicos cinematográficos com show noturno Fantasmic!.",activityType:"park",parkId:"hollywood-studios",ticketId:"ticket-disney-4park",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:00",plannedDepartureTime:"21:30",ropeDropStrategy:"Rise of the Resistance ou Slinky Dog Dash.",priorityAttractions:["Star Wars: Rise of the Resistance","Slinky Dog Dash","The Twilight Zone Tower of Terror","Mickey & Minnie's Runaway Railway","Fantasmic!"],personalNotes:"Segundo parque do passe Disney 4-Park."},{date:"2027-05-17",dayOfWeek:"Seg",dayNumber:13,title:"Descanso / Piscina",description:"Dia inteiro dedicado à piscina do hotel, descanso muscular e recarga das baterias sem compromissos rígidos.",activityType:"rest",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"10:00",plannedDepartureTime:"18:00",personalNotes:"Dia sem deslocamentos para amortecer o cansaço acumulado."},{date:"2027-05-18",dayOfWeek:"Ter",dayNumber:14,title:"EPCOT",description:"World Celebration, World Discovery (Guardiões da Galáxia) e World Showcase com gastronomia internacional e show Luminous.",activityType:"park",parkId:"epcot",ticketId:"ticket-disney-4park",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"21:30",ropeDropStrategy:"Fila virtual para Guardiões da Galáxia às 07h00. Rope drop em Remy's Ratatouille Adventure.",priorityAttractions:["Guardians of the Galaxy: Cosmic Rewind","Remy's Ratatouille Adventure","Frozen Ever After","Soarin' Around the World","Luminous"],personalNotes:"Terceiro parque do passe Disney 4-Park. Longa caminhada pelo World Showcase."},{date:"2027-05-19",dayOfWeek:"Qua",dayNumber:15,title:"Epic Universe — Visita 2",description:"Segunda visita ao Epic Universe para aprofundar atrações não realizadas na primeira ida e rever espetáculos.",activityType:"park",parkId:"epic-universe",ticketId:"ticket-universal-multi",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"21:00",ropeDropStrategy:"Foco no mundo temático complementar (Como Treinar Seu Dragão / Dark Universe).",priorityAttractions:["Super Nintendo World","Ministry of Magic","Celestial Park","Isle of Berk Coasters"],personalNotes:"Segunda entrada do Epic Universe com base na hipótese do ingresso de 5 visitas Universal."},{date:"2027-05-20",dayOfWeek:"Qui",dayNumber:16,title:"Descanso / Compras",description:"Descanso físico e últimas compras de presentes e recordações antes da reta final da viagem.",activityType:"shopping",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"10:30",plannedDepartureTime:"17:00",personalNotes:"Pausa obrigatória antes dos dois grandes dias no Magic Kingdom."},{date:"2027-05-21",dayOfWeek:"Sex",dayNumber:17,title:"Magic Kingdom — Passe Disney",description:"Quarto e último dia do passe Disney 4-Park Magic. Fantasyland, Tomorrowland, TRON e fogos Happily Ever After.",activityType:"park",parkId:"magic-kingdom",ticketId:"ticket-disney-4park",isLocked:!1,effortLevel:"Pesado",plannedArrivalTime:"08:15",plannedDepartureTime:"22:00",ropeDropStrategy:"TRON Lightcycle / Run ou Seven Dwarfs Mine Train logo na abertura.",priorityAttractions:["TRON Lightcycle / Run","Seven Dwarfs Mine Train","Space Mountain","Big Thunder Mountain","Happily Ever After"],personalNotes:"Conclui os 4 parques do passe Disney dentro da janela hipotética de 7 dias iniciada em 15/05."},{date:"2027-05-22",dayOfWeek:"Sáb",dayNumber:18,title:"Descanso / Organização das malas",description:"Dia de descanso, fechamento de compras, arrumação de bagagens e recarga total para o encerramento da viagem.",activityType:"rest",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"10:00",plannedDepartureTime:"18:00",personalNotes:"Dia sem estresse e preparação logística para a despedida."},{date:"2027-05-23",dayOfWeek:"Dom",dayNumber:19,title:"Magic Kingdom — Ingresso Avulso",description:"Gran Finale da viagem! Dia consagrado e travado no calendário, utilizando ingresso avulso exclusivo para encerramento mágico inesquecível.",activityType:"park",parkId:"magic-kingdom",ticketId:"ticket-disney-mk-single",isLocked:!0,effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"22:30",ropeDropStrategy:"Revisitar atrações favoritas com foco emocional de despedida.",priorityAttractions:["TRON Lightcycle / Run","Happily Ever After","Pirates of the Caribbean","Haunted Mansion","Peter Pan's Flight"],personalNotes:"DATA BLOQUEADA. Ingresso avulso dedicado. Não pode ser remanejada pelo otimizador."}],Be=[{id:"ticket-disney-4park",name:"Disney 4-Park Magic Pass",operator:"disney",allowedParkIds:["magic-kingdom","epcot","hollywood-studios","animal-kingdom"],totalVisitsAllowed:4,allowParkRepetition:!1,validityWindowDays:7,fixedStartDate:null,fixedEndDate:null,ruleStatus:"pending_confirmation",officialSourceNote:"Hipótese de planejamento para 2027: 4 visitas em parques distintos dentro de 7 dias corridos. Sujeito à verificação do produto efetivamente adquirido.",isIndependentTicket:!1},{id:"ticket-disney-mk-single",name:"Magic Kingdom — Ingresso Avulso",operator:"disney",allowedParkIds:["magic-kingdom"],totalVisitsAllowed:1,allowParkRepetition:!1,validityWindowDays:1,fixedStartDate:"2027-05-23",fixedEndDate:"2027-05-23",ruleStatus:"confirmed",officialSourceNote:"Ingresso de 1 dia avulso com data fixa e bloqueada para 23/05/2027. Totalmente independente do passe Disney anterior.",isIndependentTicket:!0,lockedDate:"2027-05-23"},{id:"ticket-universal-multi",name:"Universal 3-Park Explorer / Epic Multiday",operator:"universal",allowedParkIds:["universal-studios","islands-of-adventure","epic-universe","volcano-bay"],totalVisitsAllowed:5,allowParkRepetition:!0,maxRepetitionPerPark:{"epic-universe":2,"universal-studios":2,"islands-of-adventure":2,"volcano-bay":1},validityWindowDays:14,fixedStartDate:null,fixedEndDate:null,ruleStatus:"pending_confirmation",officialSourceNote:"Hipótese inicial: janela estimada em 14 dias corridos. Necessário confirmar se o pacote de 2027 permite 2 entradas no Epic Universe e acesso ao Volcano Bay.",isIndependentTicket:!1},{id:"ticket-seaworld-2park",name:"United Parks — SeaWorld & Busch Gardens 2-Park Pass",operator:"seaworld",allowedParkIds:["seaworld","busch-gardens"],totalVisitsAllowed:2,allowParkRepetition:!1,validityWindowDays:14,fixedStartDate:null,fixedEndDate:null,ruleStatus:"pending_confirmation",officialSourceNote:"Passe de 2 parques (SeaWorld Orlando + Busch Gardens Tampa). Janela estimada em 14 dias corridos a partir do primeiro acesso, a confirmar.",isIndependentTicket:!1}],Ne=1,F={ITINERARY:"orlando_planner_itinerary_v1",TICKETS:"orlando_planner_tickets_v1",CROWD:"orlando_planner_crowd_v1",FATIGUE_PARAMS:"orlando_planner_fatigue_params_v1",OPTIMIZER_WEIGHTS:"orlando_planner_optimizer_weights_v1",HISTORY:"orlando_planner_history_v1",SNAPSHOTS:"orlando_planner_snapshots_v1"},W={maxConsecutiveParkDays:3,maxDailyWalkingKm:15,restDayRecoveryBonus:35,longCommuteThresholdMinutes:60,userToleranceMultiplier:1},ee={crowdWeight:.4,fatigueWeight:.25,commuteWeight:.15,preferenceWeight:.1,flexibilityWeight:.1};class je{constructor(){A(this,"undoStack",[]);A(this,"redoStack",[]);A(this,"memoryStore",new Map)}getItem(e){if(typeof window<"u"&&typeof window.localStorage<"u")try{return localStorage.getItem(e)}catch{return this.memoryStore.get(e)||null}return this.memoryStore.get(e)||null}setItem(e,a){if(typeof window<"u"&&typeof window.localStorage<"u")try{localStorage.setItem(e,a);return}catch{}this.memoryStore.set(e,a)}removeItem(e){if(typeof window<"u"&&typeof window.localStorage<"u")try{localStorage.removeItem(e)}catch{}this.memoryStore.delete(e)}saveItinerary(e,a=!0){if(a){const s=this.loadItinerary();s&&(this.undoStack.push(JSON.parse(JSON.stringify(s))),this.undoStack.length>30&&this.undoStack.shift(),this.redoStack=[])}this.setItem(F.ITINERARY,JSON.stringify(e))}loadItinerary(){try{const e=this.getItem(F.ITINERARY);if(e){const a=JSON.parse(e);if(Array.isArray(a)&&a.length>0)return a}}catch(e){console.warn("Falha ao ler roteiro do storage, usando inicial:",e)}return JSON.parse(JSON.stringify(qe))}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}undo(e){if(this.undoStack.length===0)return null;const a=this.undoStack.pop();return this.redoStack.push(JSON.parse(JSON.stringify(e))),this.saveItinerary(a,!1),a}redo(e){if(this.redoStack.length===0)return null;const a=this.redoStack.pop();return this.undoStack.push(JSON.parse(JSON.stringify(e))),this.saveItinerary(a,!1),a}saveTickets(e){this.setItem(F.TICKETS,JSON.stringify(e))}loadTickets(){try{const e=this.getItem(F.TICKETS);if(e){const a=JSON.parse(e);if(Array.isArray(a)&&a.length>0)return a}}catch(e){console.warn("Falha ao ler ingressos do storage, usando inicial:",e)}return JSON.parse(JSON.stringify(Be))}saveCrowdStore(e){this.setItem(F.CROWD,JSON.stringify(e))}loadCrowdStore(){const e={records:{},lastImportDate:null,totalVerifiedDays:0,totalUnavailableDays:0};try{const a=this.getItem(F.CROWD);if(a)return JSON.parse(a)}catch(a){console.warn("Falha ao carregar dados de lotação:",a)}return e}saveFatigueParams(e){this.setItem(F.FATIGUE_PARAMS,JSON.stringify(e))}loadFatigueParams(){try{const e=this.getItem(F.FATIGUE_PARAMS);if(e)return{...W,...JSON.parse(e)}}catch{}return{...W}}saveOptimizerWeights(e){this.setItem(F.OPTIMIZER_WEIGHTS,JSON.stringify(e))}loadOptimizerWeights(){try{const e=this.getItem(F.OPTIMIZER_WEIGHTS);if(e)return{...ee,...JSON.parse(e)}}catch{}return{...ee}}saveSnapshots(e){this.setItem(F.SNAPSHOTS,JSON.stringify(e))}loadSnapshots(){try{const e=this.getItem(F.SNAPSHOTS);if(e)return JSON.parse(e)}catch{}return[]}resetToDefault(){this.removeItem(F.ITINERARY),this.removeItem(F.TICKETS),this.removeItem(F.FATIGUE_PARAMS),this.removeItem(F.OPTIMIZER_WEIGHTS),this.undoStack=[],this.redoStack=[]}exportFullProject(){const e={schemaVersion:Ne,exportedAt:new Date().toISOString(),tripName:"Orlando — Maio 2027",startDate:"2027-05-05",endDate:"2027-05-23",itinerary:this.loadItinerary(),tickets:this.loadTickets(),crowdStore:this.loadCrowdStore(),fatigueParams:this.loadFatigueParams(),optimizerWeights:this.loadOptimizerWeights(),snapshots:this.loadSnapshots()};return JSON.stringify(e,null,2)}importFullProject(e){try{const a=JSON.parse(e);return!a.schemaVersion||!a.itinerary||!Array.isArray(a.itinerary)?{success:!1,message:"Arquivo JSON inválido ou esquema não reconhecido."}:(this.saveItinerary(a.itinerary,!0),a.tickets&&this.saveTickets(a.tickets),a.crowdStore&&this.saveCrowdStore(a.crowdStore),a.fatigueParams&&this.saveFatigueParams(a.fatigueParams),a.optimizerWeights&&this.saveOptimizerWeights(a.optimizerWeights),a.snapshots&&this.saveSnapshots(a.snapshots),{success:!0,message:"Projeto importado com sucesso!"})}catch(a){return{success:!1,message:`Erro ao processar JSON: ${a instanceof Error?a.message:String(a)}`}}}}const P=new je;function ae(i){const e=i.split("-");if(e.length!==3)throw new Error(`Invalid date string format (expected YYYY-MM-DD): "${i}"`);const a=parseInt(e[0],10),s=parseInt(e[1],10),t=parseInt(e[2],10);if(isNaN(a)||isNaN(s)||isNaN(t))throw new Error(`Invalid numeric date components: "${i}"`);return{year:a,month:s,day:t}}function We(i){return i%4===0&&i%100!==0||i%400===0}function ze(i,e){switch(e){case 2:return We(i)?29:28;case 4:case 6:case 9:case 11:return 30;default:return 31}}function He(i){try{const{year:e,month:a,day:s}=ae(i);if(e<1900||e>2100||a<1||a>12)return!1;const t=ze(e,a);return s>=1&&s<=t}catch{return!1}}function me(i,e){const a=ae(i),s=ae(e),t=Date.UTC(a.year,a.month-1,a.day),o=Date.UTC(s.year,s.month-1,s.day);return Math.round((o-t)/(1e3*60*60*24))}function ne(i,e){const{year:a,month:s,day:t}=ae(i),o=new Date(Date.UTC(a,s-1,t));o.setUTCDate(o.getUTCDate()+e);const l=o.getUTCFullYear(),c=String(o.getUTCMonth()+1).padStart(2,"0"),n=String(o.getUTCDate()).padStart(2,"0");return`${l}-${c}-${n}`}const Ve=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],Ue=["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];function Le(i){const{year:e,month:a,day:s}=ae(i),t=new Date(Date.UTC(e,a-1,s));return Ve[t.getUTCDay()]}function $e(i){const{year:e,month:a,day:s}=ae(i),t=Le(i),o=Ue[a-1];return`${t}, ${s} de ${o} de ${e}`}function Re(i,e){const a=[],s=new Map;e.forEach(r=>s.set(r.id,r));const t=new Map;e.forEach(r=>{t.set(r.id,{usedVisits:0,dates:[],parkCounts:{}})});const o=[],l=new Map;i.forEach(r=>{if(r.parkId){const d=l.get(r.date)||[];if(d.push(r.parkId),l.set(r.date,d),!r.ticketId)o.push({date:r.date,parkId:r.parkId}),a.push({code:"UNASSIGNED_TICKET",severity:"conflict",message:`Visita ao parque em ${r.date} (${r.parkId}) não possui ingresso associado.`,date:r.date,parkId:r.parkId});else{const v=s.get(r.ticketId);if(!v)a.push({code:"TICKET_NOT_FOUND",severity:"conflict",message:`Ingresso com ID "${r.ticketId}" associado ao dia ${r.date} não foi encontrado no cadastro.`,date:r.date,ticketId:r.ticketId});else{v.allowedParkIds.includes(r.parkId)||a.push({code:"PARK_NOT_ALLOWED",severity:"conflict",message:`O ingresso "${v.name}" não permite acesso ao parque (${r.parkId}) em ${r.date}.`,date:r.date,ticketId:v.id,parkId:r.parkId});const u=t.get(v.id);u.usedVisits+=1,u.dates.push(r.date),u.parkCounts[r.parkId]=(u.parkCounts[r.parkId]||0)+1}}}}),l.forEach((r,d)=>{r.length>1&&a.push({code:"MULTIPLE_PARKS_SAME_DAY",severity:"conflict",message:`Detectados múltiplos parques no mesmo dia (${d}): ${r.join(", ")}. Não permitido sem passe Park Hopper expresso.`,date:d})});const c=i.find(r=>r.date==="2027-05-23");c&&(c.parkId!=="magic-kingdom"&&a.push({code:"FINAL_DAY_MK_VIOLATION",severity:"conflict",message:"O dia 23/05/2027 deve obrigatoriamente ser reservado para Magic Kingdom.",date:"2027-05-23"}),c.ticketId==="ticket-disney-4park"&&a.push({code:"FINAL_DAY_TICKET_POLLUTION",severity:"conflict",message:"O dia 23/05/2027 deve utilizar ingresso avulso independente e NÃO pode consumir o passe Disney 4-Park.",date:"2027-05-23",ticketId:"ticket-disney-4park"}));const n={};e.forEach(r=>{const d=t.get(r.id),v=[...d.dates].sort(),u=v.length>0?v[0]:null,m=v.length>0?v[v.length-1]:null;let w=null,_=!1;if(r.validityWindowDays&&u&&(w=ne(u,r.validityWindowDays-1),m&&me(u,m)>=r.validityWindowDays)){_=!0;const x=r.ruleStatus==="confirmed"?"conflict":"warning";a.push({code:"VALIDITY_WINDOW_EXCEEDED",severity:x,message:`O ingresso "${r.name}" excedeu a janela de validade de ${r.validityWindowDays} dias (1º uso: ${u}, último: ${m}, expiração: ${w}).`,ticketId:r.id})}r.fixedStartDate&&u&&u<r.fixedStartDate&&a.push({code:"VISIT_BEFORE_START_DATE",severity:"conflict",message:`Uso do ingresso "${r.name}" antes da data de início permitida (${r.fixedStartDate}).`,ticketId:r.id}),r.fixedEndDate&&m&&m>r.fixedEndDate&&a.push({code:"VISIT_AFTER_END_DATE",severity:"conflict",message:`Uso do ingresso "${r.name}" após a data de término permitida (${r.fixedEndDate}).`,ticketId:r.id});const b=d.usedVisits>r.totalVisitsAllowed;b&&a.push({code:"TICKET_OVERLIMIT",severity:"conflict",message:`O ingresso "${r.name}" excedeu o número máximo de visitas permitidas (${d.usedVisits}/${r.totalVisitsAllowed}).`,ticketId:r.id}),r.allowParkRepetition?r.maxRepetitionPerPark&&Object.entries(d.parkCounts).forEach(([x,y])=>{const h=r.maxRepetitionPerPark[x];h!==void 0&&y>h&&a.push({code:"PARK_REPETITION_EXCEEDED",severity:"conflict",message:`O ingresso "${r.name}" excedeu o limite de repetições para o parque ${x} (${y} visitas, máximo permitido: ${h}).`,ticketId:r.id,parkId:x})}):Object.entries(d.parkCounts).forEach(([x,y])=>{y>1&&a.push({code:"PARK_REPETITION_FORBIDDEN",severity:"conflict",message:`O ingresso "${r.name}" não permite repetir visitas ao mesmo parque (${x} visitado ${y} vezes).`,ticketId:r.id,parkId:x})}),r.ruleStatus==="pending_confirmation"&&a.push({code:"TICKET_RULE_PENDING",severity:"warning",message:`Regras de validade do ingresso "${r.name}" estão pendentes de confirmação para a temporada de 2027.`,ticketId:r.id}),n[r.id]={ticketId:r.id,name:r.name,operator:r.operator,usedVisits:d.usedVisits,maxVisits:r.totalVisitsAllowed,usedDates:v,firstUsedDate:u,lastUsedDate:m,windowExpiryDate:w,isExpired:_,isOverLimit:b,ruleStatus:r.ruleStatus}});let g="valid";const p=a.some(r=>r.severity==="conflict"),f=a.some(r=>r.severity==="warning");return p?g="conflict":f?g="warning":g="valid",{status:g,issues:a,ticketUsages:n,unassignedVisits:o}}const E={"magic-kingdom":{id:"magic-kingdom",name:"Magic Kingdom",shortName:"MK",operator:"disney",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"21:00",avgWalkingKm:14.5,avgTransitMinutes:30,baseEffort:"Pesado",color:"#004b89",accentColor:"#2563a6",ropeDropAdvice:"Chegue 45-60 min antes da abertura. Siga direto para Seven Dwarfs Mine Train ou Space Mountain se tiver entrada antecipada.",expressPassNote:"Genie+ / Lightning Lane Multi Pass altamente recomendado para evitar filas de Peter Pan e Space Mountain.",keyAttractions:["TRON Lightcycle / Run","Seven Dwarfs Mine Train","Space Mountain","Big Thunder Mountain Railroad","Haunted Mansion","Pirates of the Caribbean"]},epcot:{id:"epcot",name:"EPCOT",shortName:"EPCOT",operator:"disney",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"21:00",avgWalkingKm:16,avgTransitMinutes:25,baseEffort:"Pesado",color:"#005535",accentColor:"#007047",ropeDropAdvice:"Entre pelo World Showcase ou International Gateway para Remy's Ratatouille Adventure ou vá direto para Frozen Ever After.",expressPassNote:"Guardiões da Galáxia requer Fila Virtual ou Lightning Lane Single Pass avulsa.",keyAttractions:["Guardians of the Galaxy: Cosmic Rewind","Remy's Ratatouille Adventure","Frozen Ever After","Soarin' Around the World","Test Track"]},"hollywood-studios":{id:"hollywood-studios",name:"Disney's Hollywood Studios",shortName:"DHS",operator:"disney",location:"Orlando",defaultOpeningHour:"08:30",defaultClosingHour:"21:00",avgWalkingKm:12,avgTransitMinutes:25,baseEffort:"Pesado",color:"#7d5700",accentColor:"#ffc65e",ropeDropAdvice:"Rope drop crítico em Star Wars: Rise of the Resistance ou Slinky Dog Dash.",expressPassNote:"Maior densidade de atrações concorridas por m². Lightning Lane economiza até 3 horas de filas.",keyAttractions:["Star Wars: Rise of the Resistance","Slinky Dog Dash","The Twilight Zone Tower of Terror","Mickey & Minnie's Runaway Railway","Millennium Falcon: Smugglers Run"]},"animal-kingdom":{id:"animal-kingdom",name:"Disney's Animal Kingdom",shortName:"DAK",operator:"disney",location:"Orlando",defaultOpeningHour:"08:00",defaultClosingHour:"18:00",avgWalkingKm:11.5,avgTransitMinutes:30,baseEffort:"Leve",color:"#005535",accentColor:"#95f0bd",ropeDropAdvice:"Chegada matinal às 07h30 direto para Avatar Flight of Passage em Pandora.",expressPassNote:"Parque fecha mais cedo (18h-19h). Ótimo para tarde/noite relaxante ou jantar fora.",keyAttractions:["Avatar Flight of Passage","Expedition Everest","Kilimanjaro Safaris","Na'vi River Journey","Festival of the Lion King"]},"universal-studios":{id:"universal-studios",name:"Universal Studios Florida",shortName:"USF",operator:"universal",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"20:00",avgWalkingKm:11,avgTransitMinutes:20,baseEffort:"Médio",color:"#004b89",accentColor:"#ccdfff",ropeDropAdvice:"Vá direto para Harry Potter and the Escape from Gringotts no Beco Diagonal (Diagon Alley).",expressPassNote:"Universal Express Pass ilimitado ou standard funciona na maioria das atrações principais.",keyAttractions:["Harry Potter and the Escape from Gringotts","Revenge of the Mummy","TRANSFORMERS: The Ride 3D","Men in Black Alien Attack","Hollywood Rip Ride Rockit"]},"islands-of-adventure":{id:"islands-of-adventure",name:"Universal Islands of Adventure",shortName:"IOA",operator:"universal",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"20:00",avgWalkingKm:13.5,avgTransitMinutes:20,baseEffort:"Pesado",color:"#004b89",accentColor:"#2563a6",ropeDropAdvice:"Rope drop em Hagrid's Magical Creatures Motorbike Adventure ou Jurassic World VelociCoaster.",expressPassNote:"Atenção: Hagrid's frequentemente não aceita Universal Express tradicional; consulte status no dia.",keyAttractions:["Jurassic World VelociCoaster","Hagrid's Magical Creatures Motorbike Adventure","Harry Potter and the Forbidden Journey","The Incredible Hulk Coaster","Spider-Man"]},"epic-universe":{id:"epic-universe",name:"Universal Epic Universe",shortName:"EPIC",operator:"universal",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"21:00",avgWalkingKm:15,avgTransitMinutes:25,baseEffort:"Pesado",color:"#263143",accentColor:"#a4c9ff",ropeDropAdvice:"Novo complexo estelar com múltiplos mundos temáticos imersivos. Requer divisão em duas visitas completas para cobrir atrações.",expressPassNote:"Regras de Express Pass e filas virtuais sujeitas a confirmação no período de 2027.",keyAttractions:["Super Nintendo World (Mario Kart)","The Wizarding World of Harry Potter — Ministry of Magic","How to Train Your Dragon — Isle of Berk","Dark Universe (Classic Monsters)","Celestial Park Coaster"]},"volcano-bay":{id:"volcano-bay",name:"Universal Volcano Bay",shortName:"VB",operator:"universal",location:"Orlando",defaultOpeningHour:"10:00",defaultClosingHour:"18:00",avgWalkingKm:6,avgTransitMinutes:20,baseEffort:"Leve",color:"#007047",accentColor:"#9af5c2",ropeDropAdvice:"Utilize a pulseira TapuTapu logo ao chegar para agendar Cracatoa Aqua Coaster.",expressPassNote:"Parque aquático temático. Ótimo para recuperação física intermediária.",keyAttractions:["Krakatau Aqua Coaster","Ko'okiri Body Plunge","Honu ika Moana","Waturi Beach"]},seaworld:{id:"seaworld",name:"SeaWorld Orlando",shortName:"SWO",operator:"seaworld",location:"Orlando",defaultOpeningHour:"09:00",defaultClosingHour:"18:00",avgWalkingKm:9.5,avgTransitMinutes:15,baseEffort:"Leve",color:"#004b89",accentColor:"#7ed9a7",ropeDropAdvice:"Chegue cedo para Mako e Pipeline: The Surf Coaster com pouca fila.",expressPassNote:"Quick Queue disponível. Excelente para dia com ritmo mais controlado.",keyAttractions:["Mako","Pipeline: The Surf Coaster","Kraken","Manta","Penguin Trek"]},"busch-gardens":{id:"busch-gardens",name:"Busch Gardens Tampa Bay",shortName:"BGT",operator:"seaworld",location:"Tampa",defaultOpeningHour:"10:00",defaultClosingHour:"18:00",avgWalkingKm:13,avgTransitMinutes:75,baseEffort:"Médio",color:"#7d5700",accentColor:"#f5bd57",ropeDropAdvice:"Saia de Orlando às 08h15 pela rodovia I-4 West para chegar antes da abertura das 10h00.",expressPassNote:"Quick Queue pode ser útil em fins de semana ensolarados para Iron Gwazi e Cheetah Hunt.",keyAttractions:["Iron Gwazi","Cheetah Hunt","SheiKra","Montu","Cobras Curse","Serengeti Safari"]}};class H{static calculate(e,a=W){var v;const s={},t=[];let o=0,l=0,c=0,n=((v=e[0])==null?void 0:v.date)||"",g=0;for(let u=0;u<e.length;u++){const m=e[u],w=m.activityType==="park"&&!!m.parkId,_=m.parkId?E[m.parkId]:null;let b=0,x=0,y=0;const h=[];if(w&&_){o++,b=_.avgWalkingKm,x=_.avgTransitMinutes*2;const T=Math.min(30,b/15*30),I=Math.min(20,x/120*20);let q=12;if(_.baseEffort==="Pesado"||m.effortLevel==="Pesado"?q=20:_.baseEffort==="Médio"||m.effortLevel==="Médio"?q=15:q=8,y=(T+I+q)*a.userToleranceMultiplier,l=l*.75+y,o>=2&&(l+=(o-1)*6),o>=a.maxConsecutiveParkDays){const O=`${o} dias seguidos de parques temáticos. Recomendado dia de descanso intercalado.`;h.push(O),o>=3&&t.push(`${m.date} (${_.name}): ${O}`)}if(x>=a.longCommuteThresholdMinutes*2&&(h.push(`Deslocamento interestadual longo para ${_.location} (~${x}min ida e volta).`),u>0&&e[u-1].effortLevel==="Pesado")){const O=`Deslocamento longo para Tampa após dia cansativo em ${e[u-1].date}.`;h.push(O),t.push(O)}if(u>0&&(e[u-1].effortLevel==="Pesado"||e[u-1].parkId==="epic-universe")&&(m.effortLevel==="Pesado"||m.parkId==="epic-universe")){const O=`Alerta de sobrecarga: Dois dias consecutivos de esforço Pesado (${e[u-1].date} e ${m.date}).`;h.push(O),t.includes(O)||t.push(O)}}else o=0,g++,b=m.activityType==="shopping"?5.5:2,x=20,y=m.activityType==="shopping"?20:5,l=Math.max(0,l-a.restDayRecoveryBonus);const k=Math.min(100,Math.max(0,Math.round(l)));k>c&&(c=k,n=m.date);let C="Leve";w?k>=80?C="Crítico":k>=60?C="Alto":k>=35?C="Moderado":C="Leve":C="Descanso",s[m.date]={date:m.date,dayNumber:m.dayNumber,activityType:m.activityType,baseScore:Math.round(y),cumulativeScore:k,level:C,walkKm:b,transitMinutes:x,consecutiveParkDays:o,alerts:h}}const p=e.filter(u=>u.activityType==="park").length,f=Math.ceil(p/2.5),r=Object.values(s).reduce((u,m)=>u+m.cumulativeScore,0),d=Math.round(r/(e.length||1));return{dailyResults:s,overallFatigueScore:d,criticalAlerts:t,recommendedRestDaysCount:f,actualRestDaysCount:g,peakFatigueDay:n}}}class Ge{static calculateItineraryScore(e,a,s,t=ee){if(Re(e,a).issues.some(m=>m.severity==="conflict"))return{totalScore:0,crowdComponent:null,fatigueComponent:0,commuteComponent:0,isValid:!1};const c=H.calculate(e,W),n=Math.max(0,100-c.overallFatigueScore);let g=0,p=0;e.forEach(m=>{if(m.parkId){const w=s.records[`${m.date}_${m.parkId}`];w&&w.crowdLevel!==null&&(g+=(11-w.crowdLevel)*10,p++)}});const r=p>0?Math.round(g/p):null;let d=100;e.forEach(m=>{if(m.parkId){const w=E[m.parkId];w&&w.avgTransitMinutes>60&&(d-=10)}});const v=Math.max(0,d);let u=0;if(r!==null)u=r*t.crowdWeight+n*t.fatigueWeight+v*t.commuteWeight+85*t.preferenceWeight+90*t.flexibilityWeight;else{const m=t.fatigueWeight+t.commuteWeight+t.preferenceWeight+t.flexibilityWeight;u=(n*t.fatigueWeight+v*t.commuteWeight+85*t.preferenceWeight+90*t.flexibilityWeight)/m}return{totalScore:Math.round(u),crowdComponent:r,fatigueComponent:Math.round(n),commuteComponent:Math.round(v),isValid:!0}}static optimize(e,a,s,t=ee){const o=this.calculateItineraryScore(e,a,s,t),l=H.calculate(e,W),n=Object.values(s.records).filter(m=>m.crowdLevel!==null&&m.status==="verified").length<5;let g=JSON.parse(JSON.stringify(e)),p=o.totalScore;const f=[],r=[];g.forEach((m,w)=>{!m.isLocked&&m.date!=="2027-05-05"&&m.date!=="2027-05-23"&&r.push(w)});for(let m=0;m<r.length;m++){for(let w=m+1;w<r.length;w++){const _=r[m],b=r[w],x=g[_],y=g[b];if(x.parkId===y.parkId&&x.activityType===y.activityType)continue;const h=JSON.parse(JSON.stringify(g)),k=h[_].parkId,C=h[_].ticketId,T=h[_].title,I=h[_].description,q=h[_].activityType,O=h[_].effortLevel,Y=h[_].priorityAttractions,Z=h[_].ropeDropStrategy;h[_].parkId=h[b].parkId,h[_].ticketId=h[b].ticketId,h[_].title=h[b].title,h[_].description=h[b].description,h[_].activityType=h[b].activityType,h[_].effortLevel=h[b].effortLevel,h[_].priorityAttractions=h[b].priorityAttractions,h[_].ropeDropStrategy=h[b].ropeDropStrategy,h[b].parkId=k,h[b].ticketId=C,h[b].title=T,h[b].description=I,h[b].activityType=q,h[b].effortLevel=O,h[b].priorityAttractions=Y,h[b].ropeDropStrategy=Z;const B=this.calculateItineraryScore(h,a,s,t);if(B.isValid&&B.totalScore>p+1.5){const U=H.calculate(h,W),te=l.overallFatigueScore-U.overallFatigueScore;let se="Lotação não verificada";if(B.crowdComponent!==null&&o.crowdComponent!==null){const oe=B.crowdComponent-o.crowdComponent;se=oe>0?`Lotação estimada ${oe}% mais favorável`:"Lotação estável"}const le=`Troca recomendada entre ${x.date} (${x.title}) e ${y.date} (${y.title}). Reduz desgaste acumulado e melhora a cadência de descanso.`;if(f.push({id:`swap_${x.date}_${y.date}`,sourceDate:x.date,targetDate:y.date,sourceParkOrActivity:x.title,targetParkOrActivity:y.title,crowdDeltaDescription:se,fatigueDeltaDescription:te>0?`Redução de ${te} pontos na fadiga acumulada`:"Fadiga equilibrada",ticketImpactDescription:"Regras de janelas de ingressos preservadas e válidas.",justification:le,accepted:!0}),g=h,p=B.totalScore,f.length>=4)break}}if(f.length>=4)break}const d=H.calculate(g,W),v=Math.max(0,l.overallFatigueScore-d.overallFatigueScore);let u;return n&&(u="Otimização Parcial: Dados de lotação de maio de 2027 ainda não verificados externamente. O algoritmo priorizou equilíbrio de desgaste físico, intercalação de dias de descanso e conformidade estrita das janelas dos ingressos."),{currentScore:o.totalScore,suggestedScore:Math.round(p),isPartialOptimization:n,partialOptimizationNote:u,suggestions:f,proposedItinerary:g,summary:{crowdImprovementPercent:o.crowdComponent?Math.round((p-o.totalScore)/o.totalScore*100):null,fatigueImprovementPercent:Math.round(v),resolvedConflicts:0}}}}class V{constructor(e){A(this,"store");this.store=e||{records:{},lastImportDate:null,totalVerifiedDays:0,totalUnavailableDays:0}}getStore(){return this.store}setStore(e){this.store=e}getRecord(e,a){const s=`${e}_${a}`;return this.store.records[s]||null}static getCrowdBadgeStyle(e){return e==null?{label:"Dados de lotação não disponíveis",textClass:"text-outline",bgClass:"bg-surface-container",borderClass:"border-outline-variant/40",category:"unavailable"}:e<=3?{label:`${e}/10 • Baixa Lotação`,textClass:"text-[#27865b]",bgClass:"bg-[#ebf6f1]",borderClass:"border-[#c2e6d5]",category:"low"}:e<=6?{label:`${e}/10 • Lotação Média`,textClass:"text-[#b97820]",bgClass:"bg-[#fef7ed]",borderClass:"border-[#f7dfb7]",category:"avg"}:{label:`${e}/10 • Alta Lotação`,textClass:"text-[#c44b4b]",bgClass:"bg-[#fdf2f2]",borderClass:"border-[#f5c7c7]",category:"high"}}importFromJson(e,a){const s={valid:!0,totalParsed:0,importedCount:0,duplicatesCount:0,invalidDatesCount:0,unknownParksCount:0,missingTripDates:[],errors:[]};if(!Array.isArray(e))return s.valid=!1,s.errors.push("Formato JSON inválido: esperado um array de registros de previsão."),s;s.totalParsed=e.length;const t=new Set,o=[];return e.forEach((l,c)=>{if(!l||typeof l!="object"){s.errors.push(`Registro #${c} não é um objeto válido.`);return}const{date:n,parkId:g,crowdLevel:p,isRecommended:f,isBusyDay:r,season:d,status:v}=l;if(!n||!He(n)){s.invalidDatesCount++,s.errors.push(`Registro #${c}: data inválida ou ausente ("${n}").`);return}if(!g||!E[g]){s.unknownParksCount++,s.errors.push(`Registro #${c}: parque desconhecido ("${g}").`);return}const u=`${n}_${g}`;if(t.has(u)){s.duplicatesCount++;return}t.add(u);let m=null;typeof p=="number"&&p>=1&&p<=10?m=Math.round(p):p!=null&&s.errors.push(`Registro #${c} (${u}): índice de lotação inválido (${p}). Definido como nulo.`);const w={date:n,parkId:g,crowdLevel:m,isRecommended:!!f,isBusyDay:!!r,season:d||null,status:v||(m!==null?"verified":"unavailable"),lastUpdated:new Date().toISOString().split("T")[0]};o.push(w)}),s.errors.length>50?(s.valid=!1,s):(o.forEach(l=>{this.store.records[`${l.date}_${l.parkId}`]=l,s.importedCount++}),this.store.lastImportDate=new Date().toISOString().split("T")[0],this.recalculateCounts(),s.missingTripDates=this.findMissingTripDates(),a&&this.auditAdminProvenance(a),s)}importFromCsv(e){const a=e.trim().split(/\r?\n/);if(a.length<2)return{valid:!1,totalParsed:0,importedCount:0,duplicatesCount:0,invalidDatesCount:0,unknownParksCount:0,missingTripDates:[],errors:["CSV vazio ou sem linha de cabeçalho."]};const s=a[0].toLowerCase().split(",").map(r=>r.trim()),t=s.indexOf("date"),o=s.indexOf("parkid"),l=s.indexOf("crowdlevel"),c=s.indexOf("isrecommended"),n=s.indexOf("isbusyday"),g=s.indexOf("season"),p=s.indexOf("status");if(t===-1||o===-1)return{valid:!1,totalParsed:0,importedCount:0,duplicatesCount:0,invalidDatesCount:0,unknownParksCount:0,missingTripDates:[],errors:['Cabeçalho do CSV deve conter ao menos as colunas "date" e "parkId".']};const f=[];for(let r=1;r<a.length;r++){const d=a[r].trim();if(!d)continue;const v=d.split(",").map(k=>k.trim()),u=v[t],m=v[o],w=l!==-1?v[l]:"",_=w&&!isNaN(Number(w))?Number(w):null,b=c!==-1?v[c]==="true"||v[c]==="1":!1,x=n!==-1?v[n]==="true"||v[n]==="1":!1,y=g!==-1?v[g]:null,h=p!==-1?v[p]:"unavailable";f.push({date:u,parkId:m,crowdLevel:_,isRecommended:b,isBusyDay:x,season:y,status:h})}return this.importFromJson(f)}exportPublicJson(){return Object.values(this.store.records)}exportPublicCsv(){const e=Object.values(this.store.records),a="date,parkId,crowdLevel,isRecommended,isBusyDay,season,status,lastUpdated",s=e.map(t=>`${t.date},${t.parkId},${t.crowdLevel??""},${t.isRecommended},${t.isBusyDay},${t.season??""},${t.status},${t.lastUpdated??""}`);return[a,...s].join(`
`)}recalculateCounts(){let e=0,a=0;Object.values(this.store.records).forEach(s=>{s.crowdLevel!==null&&s.status==="verified"?e++:a++}),this.store.totalVerifiedDays=e,this.store.totalUnavailableDays=a}findMissingTripDates(){const e=[],a=Object.keys(E);for(let s=5;s<=23;s++){const t=`2027-05-${String(s).padStart(2,"0")}`;let o=!1;for(const l of a)if(this.store.records[`${t}_${l}`]){o=!0;break}o||e.push(t)}return e}auditAdminProvenance(e){}}const ue=[{id:"international-premium-outlets",name:"Orlando International Premium Outlets",category:"outlet_geral",categoryLabel:"Mega Outlet de Roupas & Tênis",address:"4951 International Dr, Orlando, FL 32819",distanceRegion:"Região Universal / I-Drive (Central)",highlight:"O maior outlet da Flórida (180+ lojas). Melhor variedade para tênis e roupas esportivas em ponta de estoque.",bestFor:["Tênis esportivos","Roupas casuais","Malas de viagem","Cosméticos"],topBrands:["Nike Factory Store & Clearance","Adidas Outlet","Under Armour","Tommy Hilfiger","Polo Ralph Lauren","Calvin Klein","Levi's","Gap Outlet"],savingTips:"Cadastre-se gratuitamente no VIP Shopper Club da Simon Malls no site oficial para obter descontos digitais adicionais de 15% a 25% no caixa. Chegue às 10h00 para estacionar facilmente.",priceLevel:"$$"},{id:"vineland-premium-outlets",name:"Orlando Vineland Premium Outlets",category:"outlet_geral",categoryLabel:"Outlet Premium & Grifes",address:"8200 Vineland Ave, Orlando, FL 32821",distanceRegion:"Região Disney / SeaWorld (Sul)",highlight:"Ambiente mais sofisticado e organizado. Excelentes lojas da Nike, Tommy, Michael Kors e grifes com desconto de fábrica.",bestFor:["Roupas de grife","Bolsas e carteiras","Tênis de corrida","Perfumes"],topBrands:["Nike Factory Store","Michael Kors","Coach","Tory Burch","Columbia Sportswear","Timberland","Lacoste","Asics"],savingTips:"Ideal para visitar em dias após parques da Disney devido à proximidade. Balcão de informações oferece o livro de cupons físico mediante voucher do site da Simon.",priceLevel:"$$"},{id:"lake-buena-vista-factory",name:"Lake Buena Vista Factory Stores",category:"outlet_geral",categoryLabel:"Outlet Tranquilo & Preço Baixo",address:"15657 S Apopka Vineland Rd, Orlando, FL 32821",distanceRegion:"Próximo à Disney Springs",highlight:"Menos muvuca e filas muito menores na Nike Factory e Tommy. Preços frequentemente mais agressivos que nos Premiums.",bestFor:["Roupas básicas","Tênis sem fila","Calçados infantis"],topBrands:["Nike Factory Store (com fila zero)","Under Armour","Gap Outlet","Carter's (roupas infantis)","Levi's Outlet","Aeropostale"],savingTips:"Excelente opção para quem não quer perder tempo em filas gigantescas de provador. Estacionamento sempre tranquilo e gratuito na porta das lojas.",priceLevel:"$"},{id:"ross-dress-for-less",name:"Ross Dress for Less (Várias Unidades)",category:"desconto_extremo",categoryLabel:"Lojas de Desconto Extremo ($5 a $35)",address:"Unidades principais: Millenia Plaza, I-Drive e Sand Lake Rd",distanceRegion:"Múltiplas localizações em Orlando",highlight:"O paraíso das pontas de estoque e sobras de grandes lojas dos EUA. Descontos reais de 60% a 80% sobre a etiqueta original.",bestFor:["Malas Samsonite/Delsey baratas","Tênis Nike/Puma por $25-$45","Roupas Calvin Klein/Tommy","Utensílios para casa"],topBrands:["Samsonite","Nike","Calvin Klein","Tommy Hilfiger","Michael Kors (acessórios)","Under Armour"],savingTips:"Vá no período da manhã (entre 08h30 e 10h00), logo após a reposição noturna das araras. As unidades do Millenia Plaza e da Sand Lake Rd costumam ter estoques de marcas melhores.",priceLevel:"$"},{id:"marshalls-tjmaxx",name:"Marshalls & T.J. Maxx (The Loop / Millenia)",category:"desconto_extremo",categoryLabel:"Marcas Famosas com Super Desconto",address:"Millenia Plaza (4637 Millenia Plaza Way) e The Loop Kissimmee",distanceRegion:"Região Millenia / The Loop",highlight:"Mesmo conceito da Ross, porém com araras mais organizadas e foco maior em roupas de marca, calçados de grife e cosméticos importados.",bestFor:["Cosméticos e maquiagens importadas","Roupas sociais e casuais","Bolsas de couro","Tênis casuais"],topBrands:["Ralph Lauren","Steve Madden","Calvin Klein","Guess","Marc Jacobs (cosméticos/perfumes)","Clinique / Estée Lauder"],savingTips:'Excelente para comprar cosméticos e cremes de cabelo profissionais pela metade do preço da Sephora. Olhe sempre a seção "Red Tag" (etiquetas vermelhas de liquidação final).',priceLevel:"$"},{id:"best-buy-millenia",name:"Best Buy (Millenia & Florida Mall)",category:"eletronicos",categoryLabel:"Mega Loja de Eletrônicos & Informática",address:"4155 Millenia Blvd, Orlando, FL 32839",distanceRegion:"Ao lado do Mall at Millenia",highlight:"A maior rede de eletrônicos dos EUA. Melhor local para comprar notebooks, câmeras, fones de ouvido, smartwatches e videogames.",bestFor:["Notebooks (Dell, Asus, MacBook)","Fones de ouvido (Sony, Bose, JBL)","iPads e Smartwatches","Câmeras GoPro e acessórios"],topBrands:["Apple","Sony","Bose","DJI","Samsung","Nintendo / PlayStation","GoPro"],savingTips:'Procure pelos produtos na categoria "Open-Box" (itens de mostruário ou devoluções de clientes com caixa aberta). Possuem garantia total de fábrica e chegam a custar 20% a 35% mais barato.',priceLevel:"$$"},{id:"mall-at-millenia",name:"The Mall at Millenia",category:"departamento",categoryLabel:"Shopping Fechado & Tecnologia Oficial",address:"4200 Conroy Rd, Orlando, FL 32839",distanceRegion:"Região Conroy / I-4",highlight:"Shopping sofisticado com ar-condicionado. Lar da principal e mais completa Apple Store de Orlando, além de Macy's e Bloomingdale's.",bestFor:["Apple Store oficial (iPhones, MacBooks)","Perfumes e maquiagens","Macy's com cupom de visitante"],topBrands:["Apple Store","Macy's","Sephora","Lululemon","H&M (loja flagship)","Zara"],savingTips:`Na Macy's, vá ao atendimento ao cliente com seu passaporte brasileiro e retire o "Visitor Savings Pass", que dá 10% a 15% de desconto extra na maioria dos departamentos.`,priceLevel:"$$$"},{id:"walmart-target-supercenter",name:"Walmart Supercenter & Target (Turísticos)",category:"mercado_vitaminas",categoryLabel:"Supermercados, Vitaminas & Snacks",address:"Walmart: 8990 Turkey Lake Rd / Target: 4795 W Irlo Bronson Hwy",distanceRegion:"Perto dos complexos hoteleiros",highlight:"Parada obrigatória no 1º dia para abastecer o hotel com água mineral, snacks, protetor solar, cosméticos e vitaminas a preço de custo.",bestFor:["Água mineral e lanches para parques","Vitaminas e suplementos (GNC, Centrum)","Protetor solar e repelente","Lembrancinhas Disney baratas"],topBrands:["Centrum / Nature Made","Coppertone / Banana Boat","Neutrogena","Produtos oficiais Disney a $5-$10"],savingTips:"Compre caixas fechadas de água mineral de 24 garrafinhas por cerca de $4 a $5 para levar nas mochilas dos parques. Dentro dos parques a mesma garrafa custa $4 cada!",priceLevel:"$"}];class z{static generateMarkdownItinerary(e,a,s){var f,r;const t=H.calculate(e),o=new Map;a.forEach(d=>o.set(d.id,d));const l=((f=e[0])==null?void 0:f.date)||"2027-05-05",c=((r=e[e.length-1])==null?void 0:r.date)||"2027-05-23";let n=`# ORLANDO PLANNER — Roteiro de Viagem
`;n+=`**Período:** ${l.substring(5)} a ${c.substring(5)} (${e.length} dias)
`,n+=`**Gerado em:** ${new Date().toLocaleDateString("pt-BR")}

`,n+=`## Resumo Geral
`;const g=e.filter(d=>d.activityType==="park").length,p=e.filter(d=>d.activityType!=="park").length;return n+=`- **Dias com Parques:** ${g} dias
`,n+=`- **Dias de Descanso / Compras:** ${p} dias
`,n+=`- **Índice Médio de Fadiga:** ${t.overallFatigueScore}/100
`,n+=`- **Alertas Físicos:** ${t.criticalAlerts.length>0?t.criticalAlerts.join("; "):"Nenhum alerta crítico"}

`,n+=`## Programação Diária Detalhada

`,n+=`| Data | Dia | Atividade / Parque | Esforço | Lotação Prevista | Fadiga | Ingresso |
`,n+=`|---|---|---|---|---|---|---|
`,e.forEach(d=>{const v=d.parkId?s.records[`${d.date}_${d.parkId}`]:null,u=v&&v.crowdLevel!==null?`${v.crowdLevel}/10`:"Não disponível",m=t.dailyResults[d.date],w=m?m.level:"Leve",_=d.ticketId?o.get(d.ticketId):null,b=_?_.name:d.activityType==="park"?"Sem ingresso":"—",x=d.isLocked?`🔒 ${d.title}`:d.title;n+=`| ${d.date.substring(5)} | ${d.dayOfWeek} | ${x} | ${d.effortLevel} | ${u} | ${w} | ${b} |
`}),n+=`
---

`,n+=`## Recomendações e Estratégia por Dia

`,e.forEach(d=>{const v=d.parkId?E[d.parkId]:null;n+=`### ${d.dayNumber}. ${$e(d.date)}: ${d.title}
`,n+=`- **Tipo:** ${d.activityType==="park"?"Parque Temático":"Descanso / Compras"}
`,n+=`- **Descrição:** ${d.description}
`,v&&(n+=`- **Horário Sugerido:** ${d.plannedArrivalTime||v.defaultOpeningHour} às ${d.plannedDepartureTime||v.defaultClosingHour}
`,(d.ropeDropStrategy||v.ropeDropAdvice)&&(n+=`- **Estratégia de Rope Drop:** ${d.ropeDropStrategy||v.ropeDropAdvice}
`),d.priorityAttractions&&d.priorityAttractions.length>0&&(n+=`- **Atrações Prioritárias:** ${d.priorityAttractions.join(", ")}
`),v.expressPassNote&&(n+=`- **Filas Expressas:** ${v.expressPassNote}
`)),d.diningNotes&&(n+=`- **Alimentação:** ${d.diningNotes}
`),d.personalNotes&&(n+=`- **Observações Pessoais:** ${d.personalNotes}
`),n+=`
`}),n+=`
---

`,n+=`## Guia dos Melhores Outlets para Compras Econômicas

`,ue.forEach(d=>{n+=`### ${d.name} (${d.priceLevel})
`,n+=`- **Categoria:** ${d.categoryLabel}
`,n+=`- **Endereço:** ${d.address} (${d.distanceRegion})
`,n+=`- **Destaque:** ${d.highlight}
`,n+=`- **Melhores Marcas:** ${d.topBrands.join(", ")}
`,n+=`- **Dica para Pagar Menos:** ${d.savingTips}

`}),n+=`
*Documento gerado pelo ORLANDO PLANNER. Sua viagem. Seu roteiro. Sua melhor experiência.*
`,n}static downloadFile(e,a,s){if(typeof window>"u")return;const t=new Blob([a],{type:s}),o=URL.createObjectURL(t),l=document.createElement("a");l.href=o,l.download=e,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(o)}static printFullDossier(e,a,s){var v,u;if(typeof window>"u")return;const t=H.calculate(e),o=new Map;a.forEach(m=>o.set(m.id,m));const l=((v=e[0])==null?void 0:v.date)||"2027-05-05",c=((u=e[e.length-1])==null?void 0:u.date)||"2027-05-23",n=e.filter(m=>m.activityType==="park").length,g=e.filter(m=>m.activityType!=="park").length,p=e.map(m=>{const w=m.parkId?s.records[`${m.date}_${m.parkId}`]:null,_=w&&w.crowdLevel!==null?`${w.crowdLevel}/10`:"N/D",b=m.ticketId?o.get(m.ticketId):null,x=b?b.name:m.activityType==="park"?"Sem ingresso":"—";return`
          <tr>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-weight: bold; white-space: nowrap;">${m.date.substring(5)} (${m.dayOfWeek})</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-weight: 600;">${m.isLocked?"🔒 ":""}${m.title}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">${m.effortLevel}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; text-align: center;">${_}</td>
            <td style="padding: 6px 8px; border: 1px solid #d1d5db; font-size: 11px;">${x}</td>
          </tr>
        `}).join(""),f=e.map(m=>{var _;const w=m.parkId?E[m.parkId]:null;return`
          <div style="margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px dashed #e5e7eb; page-break-inside: avoid;">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: bold; color: #004b89;">
                Dia ${m.dayNumber} • ${$e(m.date)}: ${m.title}
              </h4>
              <span style="font-size: 11px; font-weight: bold; color: #4b5563;">${m.effortLevel}</span>
            </div>
            <p style="margin: 2px 0 6px 0; font-size: 12px; color: #374151;">${m.description}</p>
            ${w?`
              <div style="font-size: 11.5px; background: #f3f4f6; padding: 6px 10px; border-radius: 6px; margin-top: 4px;">
                <strong>Horário:</strong> ${m.plannedArrivalTime||w.defaultOpeningHour} às ${m.plannedDepartureTime||w.defaultClosingHour} | 
                <strong>Rope Drop:</strong> ${m.ropeDropStrategy||w.ropeDropAdvice}
                ${(_=m.priorityAttractions)!=null&&_.length?`<br/><strong>Atrações Prioritárias:</strong> ${m.priorityAttractions.join(", ")}`:""}
              </div>
            `:""}
            ${m.personalNotes?`<p style="margin: 4px 0 0 0; font-size: 11px; color: #6b7280;"><em>Obs: ${m.personalNotes}</em></p>`:""}
          </div>
        `}).join(""),r=ue.map(m=>`
        <div style="margin-bottom: 10px; padding: 8px 10px; border: 1px solid #e5e7eb; border-radius: 6px; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 12px; color: #111827;">
            <span>${m.name}</span>
            <span style="color: #059669;">Preço: ${m.priceLevel}</span>
          </div>
          <div style="font-size: 11px; color: #4b5563; margin-top: 2px;">${m.address} (${m.distanceRegion})</div>
          <div style="font-size: 11px; color: #1f2937; margin-top: 3px;"><strong>Marcas:</strong> ${m.topBrands.slice(0,5).join(", ")}</div>
          <div style="font-size: 11px; color: #004b89; margin-top: 3px;"><strong>Dica de Economia:</strong> ${m.savingTips}</div>
        </div>
      `).join(""),d=window.open("","_blank");if(!d){window.print();return}d.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <title>ORLANDO PLANNER — Roteiro de Viagem</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; margin: 24px; color: #111827; line-height: 1.4; font-size: 12px; }
          h1 { margin: 0 0 4px 0; font-size: 22px; color: #004b89; }
          h2 { margin: 18px 0 8px 0; font-size: 16px; color: #1f2937; border-bottom: 2px solid #004b89; padding-bottom: 4px; }
          h3 { margin: 14px 0 6px 0; font-size: 14px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11.5px; }
          .kpi-box { display: flex; gap: 12px; margin: 12px 0 18px 0; }
          .kpi { flex: 1; padding: 10px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 18px; font-weight: bold; color: #004b89; margin-top: 2px; }
          .page-break { page-break-before: always; }
          @media print {
            body { margin: 12mm 15mm; }
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #004b89; padding-bottom: 8px;">
          <div>
            <h1>ORLANDO PLANNER</h1>
            <div style="font-size: 13px; font-weight: 600; color: #4b5563;">Roteiro Inteligente & Planejamento de Parques e Compras</div>
          </div>
          <div style="text-align: right; font-size: 11px; color: #6b7280;">
            <div><strong>Período:</strong> ${l.substring(5)} a ${c.substring(5)} (${e.length} dias)</div>
            <div>Impresso em: ${new Date().toLocaleDateString("pt-BR")}</div>
          </div>
        </div>

        <div class="kpi-box">
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Duração Total</div>
            <div class="kpi-val">${e.length} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Dias em Parques</div>
            <div class="kpi-val">${n} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Descanso & Outlets</div>
            <div class="kpi-val">${g} dias</div>
          </div>
          <div class="kpi">
            <div style="font-size: 11px; color: #6b7280; text-transform: uppercase;">Índice Médio de Fadiga</div>
            <div class="kpi-val">${t.overallFatigueScore}/100</div>
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
            ${p}
          </tbody>
        </table>

        <div class="page-break"></div>

        <h2>2. Detalhamento Estratégico por Dia (Rope Drop & Atrações)</h2>
        ${f}

        <div class="page-break"></div>

        <h2>3. Guia dos Melhores Outlets para Compras Econômicas</h2>
        <p style="font-size: 11.5px; color: #4b5563; margin-bottom: 12px;">
          Locais selecionados para encontrar os menores preços em roupas, tênis esportivos, malas e eletrônicos em Orlando.
        </p>
        ${r}

        <div style="margin-top: 24px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 8px;">
          ORLANDO PLANNER — Sua viagem. Seu roteiro. Sua melhor experiência.
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 350);
          };
        <\/script>
      </body>
      </html>
    `),d.document.close()}}class Ke{static generateCustomItinerary(e){const a=e.startDate||"2027-05-05";let s=e.endDate;if(!s){const r=e.totalDays||19;s=ne(a,r-1)}let t=me(a,s)+1;(isNaN(t)||t<3)&&(t=e.totalDays||19);const o=Math.max(3,Math.min(35,t)),l=[];let c=[];e.profile==="foco_parques"?c=[{parkId:"epic-universe",effort:"Pesado",title:"Universal Epic Universe — Visita 1"},{parkId:"islands-of-adventure",effort:"Pesado",title:"Universal Islands of Adventure"},{parkId:"magic-kingdom",effort:"Pesado",title:"Magic Kingdom"},{parkId:"hollywood-studios",effort:"Pesado",title:"Disney's Hollywood Studios"},{parkId:"universal-studios",effort:"Médio",title:"Universal Studios Florida"},{parkId:"epcot",effort:"Pesado",title:"EPCOT"},{parkId:"busch-gardens",effort:"Médio",title:"Busch Gardens Tampa Bay"},{parkId:"animal-kingdom",effort:"Leve",title:"Disney's Animal Kingdom"},{parkId:"seaworld",effort:"Leve",title:"SeaWorld Orlando"},{parkId:"volcano-bay",effort:"Leve",title:"Universal Volcano Bay"},{parkId:"epic-universe",effort:"Pesado",title:"Universal Epic Universe — Visita 2"}]:e.profile==="economico_compras"?c=[{parkId:"magic-kingdom",effort:"Pesado",title:"Magic Kingdom"},{parkId:"epic-universe",effort:"Pesado",title:"Universal Epic Universe"},{parkId:"islands-of-adventure",effort:"Pesado",title:"Universal Islands of Adventure"},{parkId:"epcot",effort:"Pesado",title:"EPCOT"},{parkId:"hollywood-studios",effort:"Pesado",title:"Disney's Hollywood Studios"},{parkId:"seaworld",effort:"Leve",title:"SeaWorld Orlando"},{parkId:"animal-kingdom",effort:"Leve",title:"Disney's Animal Kingdom"}]:c=[{parkId:"seaworld",effort:"Leve",title:"SeaWorld Orlando"},{parkId:"universal-studios",effort:"Médio",title:"Universal Studios Florida"},{parkId:"busch-gardens",effort:"Médio",title:"Busch Gardens Tampa Bay"},{parkId:"volcano-bay",effort:"Leve",title:"Universal Volcano Bay"},{parkId:"epic-universe",effort:"Pesado",title:"Universal Epic Universe — Visita 1"},{parkId:"islands-of-adventure",effort:"Pesado",title:"Universal Islands of Adventure"},{parkId:"animal-kingdom",effort:"Leve",title:"Disney's Animal Kingdom"},{parkId:"hollywood-studios",effort:"Pesado",title:"Disney's Hollywood Studios"},{parkId:"epcot",effort:"Pesado",title:"EPCOT"},{parkId:"epic-universe",effort:"Pesado",title:"Universal Epic Universe — Visita 2"},{parkId:"magic-kingdom",effort:"Pesado",title:"Magic Kingdom — Passe Disney"}],e.includeBuschGardensTampa||(c=c.filter(r=>r.parkId!=="busch-gardens"));const n=[{title:"Descanso / International Premium Outlets & Ross",description:"Compras no maior outlet de Orlando (Nike Factory, Adidas, Tommy) + garimpo na Ross Dress for Less (malas de viagem e tênis por $25-$45).",activityType:"shopping",notes:"Dica: Chegue às 10h no International Premium Outlets para pegar vagas perto da Nike."},{title:"Descanso / Vineland Premium Outlets & Best Buy",description:"Compras no Vineland Premium (mais organizado, perto da Disney) e eletrônicos/fones na Best Buy / Apple Store do Mall at Millenia.",activityType:"shopping",notes:"Best Buy: procure itens Open-Box com garantia de fábrica e até 30% de desconto."},{title:"Descanso / Disney Springs & Lake Buena Vista Stores",description:"Manhã nas Lake Buena Vista Factory Stores (preços mais baixos e fila zero na Nike) e tarde relaxante em Disney Springs.",activityType:"rest",notes:"Passeio a pé por Disney Springs, fotos e almoço sem pressa."},{title:"Descanso / Piscina & Compras Finais de Suprimentos",description:"Recuperação muscular total na piscina do hotel, arrumação de malas e compras na Target ou Walmart.",activityType:"rest",notes:"Pese as malas com balança portátil (limite padrão de 23kg por mala)."}];let g=0,p=0,f=0;for(let r=1;r<=o;r++){const d=ne(e.startDate,r-1),v=Le(d),u=r===1,m=r===o;if(u){l.push({date:d,dayOfWeek:v,dayNumber:1,title:"Chegada em Orlando / Abastecimento Walmart",description:"Pouso no aeroporto MCO, retirada do carro alugado, check-in no hotel e parada estratégica no Walmart Supercenter para fardos de água mineral, lanches e protetor solar a preço de custo.",activityType:"arrival",parkId:null,ticketId:null,isLocked:!0,effortLevel:"OFF",plannedArrivalTime:"14:00",plannedDepartureTime:"21:00",personalNotes:"DIA DE CHEGADA. Abasteça o frigobar com garrafas de água por $5 o fardo para levar aos parques."});continue}if(m){e.departureDayHasPark?l.push({date:d,dayOfWeek:v,dayNumber:r,title:"Magic Kingdom — Encerramento & Embarque",description:"Parque na parte da manhã, fotos de despedida, check-out do hotel e deslocamento ao aeroporto MCO para voo de retorno.",activityType:"park",parkId:"magic-kingdom",ticketId:"ticket-disney-mk-single",isLocked:!0,effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"18:00",personalNotes:"DIA DE PARTIDA. Atenção ao horário limite para devolução do carro alugado no aeroporto."}):l.push({date:d,dayOfWeek:v,dayNumber:r,title:"Partida de Orlando / Check-out & Retorno ao Brasil",description:"Check-out no hotel, conferência de bagagens (23kg), devolução do veículo alugado no aeroporto MCO e voo de volta para casa.",activityType:"departure",parkId:null,ticketId:null,isLocked:!0,effortLevel:"OFF",plannedArrivalTime:"10:00",plannedDepartureTime:"17:00",personalNotes:"DIA DE PARTIDA. Chegue ao aeroporto de Orlando com pelo menos 3 horas de antecedência para voos internacionais."});continue}if(r===o-1&&o>=7){l.push({date:d,dayOfWeek:v,dayNumber:r,title:"Magic Kingdom — Gran Finale da Viagem",description:"Dia consagrado para fechar a viagem com chave de ouro! Atrações clássicas, TRON Lightcycle / Run e o inesquecível show de fogos Happily Ever After.",activityType:"park",parkId:"magic-kingdom",ticketId:d==="2027-05-23"?"ticket-disney-mk-single":"ticket-disney-4park",isLocked:d==="2027-05-23",effortLevel:"Pesado",plannedArrivalTime:"08:30",plannedDepartureTime:"22:30",ropeDropStrategy:"TRON ou Seven Dwarfs Mine Train logo na abertura.",priorityAttractions:["TRON Lightcycle / Run","Seven Dwarfs Mine Train","Space Mountain","Happily Ever After"],personalNotes:"GRAN FINALE. Aproveite até o fechamento com os fogos de artifício no Castelo."}),f++;continue}if(r===o-2&&o>=12){l.push({date:d,dayOfWeek:v,dayNumber:r,title:"Descanso / Organização de Malas & Compras Finais",description:"Pausa muscular para pesagem de malas, compras de lembrancinhas e descanso antes do dia épico no Magic Kingdom.",activityType:"shopping",parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",personalNotes:"Organize as notas fiscais e compras para a alfândega."}),f=0;continue}if(f>=(e.profile==="foco_parques"?3:2)||g>=c.length){const _=n[p%n.length];p++,f=0,l.push({date:d,dayOfWeek:v,dayNumber:r,title:_.title,description:_.description,activityType:_.activityType,parkId:null,ticketId:null,isLocked:!1,effortLevel:"OFF",plannedArrivalTime:"10:30",plannedDepartureTime:"18:00",personalNotes:_.notes})}else{const _=c[g];g++,f++;const b=E[_.parkId];let x="ticket-universal-multi";b.operator==="disney"?x="ticket-disney-4park":b.operator==="seaworld"&&(x="ticket-seaworld-2park"),l.push({date:d,dayOfWeek:v,dayNumber:r,title:_.title,description:`${b.name}: principais atrações e estratégia de aproveitamento inteligente.`,activityType:"park",parkId:_.parkId,ticketId:x,isLocked:!1,effortLevel:_.effort,plannedArrivalTime:b.defaultOpeningHour,plannedDepartureTime:b.defaultClosingHour,ropeDropStrategy:b.ropeDropAdvice,priorityAttractions:b.keyAttractions.slice(0,4),personalNotes:`Parque de complexo ${b.operator.toUpperCase()}. Mantenha hidratação constante.`})}}return l}}const pe={1:{month:1,name:"Janeiro",season:"Alta Temporada (Ano Novo) / Média Temporada",tempC:"15°C a 22°C",tempF:"59°F a 72°F",events:"Maratona Walt Disney World Marathon Weekend (início de janeiro); alta lotação nos primeiros dias pelo Ano Novo, normalizando na segunda quinzena.",avgCrowd:7.7,daysCount:31},2:{month:2,name:"Fevereiro",season:"Média a Alta Temporada",tempC:"16°C a 24°C",tempF:"61°F a 75°F",events:"Presidents' Day Weekend e Disney Princess Half Marathon Weekend (meio do mês, dias mais cheios); Mardi Gras na Universal Studios.",avgCrowd:7.6,daysCount:28},3:{month:3,name:"Março",season:"Alta Temporada (Spring Break)",tempC:"18°C a 27°C",tempF:"64°F a 81°F",events:"Início do Spring Break universitário e escolar americano; EPCOT International Flower & Garden Festival; clima quente e dias ensolarados.",avgCrowd:7.6,daysCount:31},4:{month:4,name:"Abril",season:"Alta Temporada (Páscoa / Spring Break)",tempC:"20°C a 29°C",tempF:"68°F a 84°F",events:"Semana de Páscoa e continuação do Spring Break; parques aquáticos (Volcano Bay e Typhoon Lagoon) com grande procura.",avgCrowd:7,daysCount:30},5:{month:5,name:"Maio",season:"Média Temporada / Alta no Feriado",tempC:"22°C a 31°C",tempF:"72°F a 88°F",events:"Primeira quinzena excelente e mais tranquila; Memorial Day Weekend no último fim de semana (lotação atinge nível 8); clima de verão se aproximando.",avgCrowd:6.3,daysCount:31},6:{month:6,name:"Junho",season:"Alta Temporada de Verão",tempC:"24°C a 33°C",tempF:"75°F a 91°F",events:"Início das férias de verão nos Estados Unidos; calor intenso e pancadas de chuva no final da tarde; parques com horário de funcionamento estendido.",avgCrowd:6.5,daysCount:30},7:{month:7,name:"Julho",season:"Altíssima Temporada",tempC:"25°C a 34°C",tempF:"77°F a 93°F",events:"4 de Julho (Dia da Independência dos EUA) com lotação máxima; mês mais quente do ano; indispensável hidratação e pausas no meio do dia.",avgCrowd:6.6,daysCount:31},8:{month:8,name:"Agosto",season:"Alta (1ª quinzena) / Média (2ª quinzena)",tempC:"25°C a 33°C",tempF:"77°F a 91°F",events:"Volta às aulas nas escolas americanas a partir de meados de agosto (redução progressiva de filas); início das noites do Mickey's Not-So-Scary Halloween Party no MK.",avgCrowd:5,daysCount:31},9:{month:9,name:"Setembro",season:"Baixa Temporada (Mês Mais Tranquilo do Ano)",tempC:"24°C a 32°C",tempF:"75°F a 90°F",events:"Melhor mês do ano para fugir de filas! Níveis de 2 a 4 nos dias de semana; Halloween Horror Nights na Universal e EPCOT Food & Wine Festival em andamento.",avgCrowd:6,daysCount:30},10:{month:10,name:"Outubro",season:"Média a Alta Temporada",tempC:"21°C a 29°C",tempF:"70°F a 84°F",events:"Columbus Day weekend; eventos temáticos de Halloween esgotam ingressos; clima muito agradável e noites mais frescas.",avgCrowd:6.6,daysCount:31},11:{month:11,name:"Novembro",season:"Média / Altíssima no Thanksgiving",tempC:"18°C a 26°C",tempF:"64°F a 79°F",events:"Jersey Week na primeira quinzena; semana do Dia de Ação de Graças (Thanksgiving, última semana) atinge níveis 8-9; início das decorações e festas de Natal da Disney.",avgCrowd:7.1,daysCount:30},12:{month:12,name:"Dezembro",season:"Média (1ª quinzena) / Pico Máximo (Natal e Ano Novo)",tempC:"15°C a 23°C",tempF:"59°F a 73°F",events:"Primeiras duas semanas ideais para ver as decorações natalinas com filas moderadas; a partir de 20 de dezembro até o Réveillon os parques atingem lotação 10/10.",avgCrowd:7.5,daysCount:31}},fe={"2027-01-01":10,"2027-01-02":9,"2027-01-03":9,"2027-01-04":8,"2027-01-05":8,"2027-01-06":9,"2027-01-07":9,"2027-01-08":9,"2027-01-09":9,"2027-01-10":9,"2027-01-11":9,"2027-01-12":7,"2027-01-13":6,"2027-01-14":7,"2027-01-15":8,"2027-01-16":8,"2027-01-17":8,"2027-01-18":8,"2027-01-19":8,"2027-01-20":7,"2027-01-21":7,"2027-01-22":7,"2027-01-23":7,"2027-01-24":7,"2027-01-25":6,"2027-01-26":6,"2027-01-27":6,"2027-01-28":6,"2027-01-29":7,"2027-01-30":8,"2027-01-31":8,"2027-02-01":6,"2027-02-02":6,"2027-02-03":6,"2027-02-04":8,"2027-02-05":8,"2027-02-06":8,"2027-02-07":8,"2027-02-08":8,"2027-02-09":8,"2027-02-10":8,"2027-02-11":8,"2027-02-12":8,"2027-02-13":8,"2027-02-14":8,"2027-02-15":8,"2027-02-16":8,"2027-02-17":8,"2027-02-18":8,"2027-02-19":8,"2027-02-20":8,"2027-02-21":8,"2027-02-22":7,"2027-02-23":6,"2027-02-24":7,"2027-02-25":8,"2027-02-26":8,"2027-02-27":8,"2027-02-28":8,"2027-03-01":8,"2027-03-02":7,"2027-03-03":5,"2027-03-04":5,"2027-03-05":6,"2027-03-06":7,"2027-03-07":7,"2027-03-08":7,"2027-03-09":7,"2027-03-10":7,"2027-03-11":7,"2027-03-12":8,"2027-03-13":8,"2027-03-14":8,"2027-03-15":8,"2027-03-16":8,"2027-03-17":8,"2027-03-18":8,"2027-03-19":8,"2027-03-20":8,"2027-03-21":8,"2027-03-22":8,"2027-03-23":8,"2027-03-24":8,"2027-03-25":8,"2027-03-26":9,"2027-03-27":9,"2027-03-28":9,"2027-03-29":9,"2027-03-30":8,"2027-03-31":8,"2027-04-01":8,"2027-04-02":8,"2027-04-03":8,"2027-04-04":8,"2027-04-05":7,"2027-04-06":7,"2027-04-07":7,"2027-04-08":7,"2027-04-09":7,"2027-04-10":7,"2027-04-11":7,"2027-04-12":7,"2027-04-13":6,"2027-04-14":6,"2027-04-15":6,"2027-04-16":6,"2027-04-17":7,"2027-04-18":7,"2027-04-19":6,"2027-04-20":6,"2027-04-21":6,"2027-04-22":6,"2027-04-23":7,"2027-04-24":8,"2027-04-25":8,"2027-04-26":8,"2027-04-27":7,"2027-04-28":7,"2027-04-29":8,"2027-04-30":8,"2027-05-01":8,"2027-05-02":8,"2027-05-03":7,"2027-05-04":7,"2027-05-05":5,"2027-05-06":5,"2027-05-07":6,"2027-05-08":7,"2027-05-09":7,"2027-05-10":6,"2027-05-11":5,"2027-05-12":5,"2027-05-13":5,"2027-05-14":6,"2027-05-15":6,"2027-05-16":6,"2027-05-17":6,"2027-05-18":6,"2027-05-19":5,"2027-05-20":5,"2027-05-21":6,"2027-05-22":7,"2027-05-23":7,"2027-05-24":6,"2027-05-25":5,"2027-05-26":5,"2027-05-27":6,"2027-05-28":8,"2027-05-29":8,"2027-05-30":8,"2027-05-31":8,"2027-06-01":7,"2027-06-02":7,"2027-06-03":7,"2027-06-04":7,"2027-06-05":7,"2027-06-06":7,"2027-06-07":7,"2027-06-08":6,"2027-06-09":6,"2027-06-10":6,"2027-06-11":6,"2027-06-12":7,"2027-06-13":7,"2027-06-14":7,"2027-06-15":6,"2027-06-16":6,"2027-06-17":6,"2027-06-18":6,"2027-06-19":7,"2027-06-20":7,"2027-06-21":7,"2027-06-22":6,"2027-06-23":6,"2027-06-24":6,"2027-06-25":6,"2027-06-26":7,"2027-06-27":7,"2027-06-28":7,"2027-06-29":6,"2027-06-30":6,"2027-07-01":6,"2027-07-02":6,"2027-07-03":8,"2027-07-04":8,"2027-07-05":8,"2027-07-06":7,"2027-07-07":6,"2027-07-08":6,"2027-07-09":6,"2027-07-10":7,"2027-07-11":7,"2027-07-12":7,"2027-07-13":6,"2027-07-14":6,"2027-07-15":6,"2027-07-16":7,"2027-07-17":7,"2027-07-18":7,"2027-07-19":7,"2027-07-20":6,"2027-07-21":6,"2027-07-22":6,"2027-07-23":6,"2027-07-24":7,"2027-07-25":7,"2027-07-26":7,"2027-07-27":6,"2027-07-28":6,"2027-07-29":6,"2027-07-30":6,"2027-07-31":7,"2027-08-01":7,"2027-08-02":7,"2027-08-03":6,"2027-08-04":6,"2027-08-05":6,"2027-08-06":6,"2027-08-07":6,"2027-08-08":6,"2027-08-09":5,"2027-08-10":4,"2027-08-11":4,"2027-08-12":4,"2027-08-13":4,"2027-08-14":5,"2027-08-15":5,"2027-08-16":5,"2027-08-17":4,"2027-08-18":3,"2027-08-19":3,"2027-08-20":4,"2027-08-21":5,"2027-08-22":5,"2027-08-23":4,"2027-08-24":4,"2027-08-25":4,"2027-08-26":5,"2027-08-27":6,"2027-08-28":6,"2027-08-29":6,"2027-08-30":6,"2027-08-31":5,"2027-09-01":5,"2027-09-02":7,"2027-09-03":8,"2027-09-04":8,"2027-09-05":8,"2027-09-06":8,"2027-09-07":6,"2027-09-08":5,"2027-09-09":5,"2027-09-10":6,"2027-09-11":6,"2027-09-12":6,"2027-09-13":6,"2027-09-14":4,"2027-09-15":3,"2027-09-16":4,"2027-09-17":7,"2027-09-18":7,"2027-09-19":7,"2027-09-20":7,"2027-09-21":6,"2027-09-22":6,"2027-09-23":5,"2027-09-24":5,"2027-09-25":6,"2027-09-26":6,"2027-09-27":6,"2027-09-28":5,"2027-09-29":5,"2027-09-30":6,"2027-10-01":7,"2027-10-02":7,"2027-10-03":7,"2027-10-04":7,"2027-10-05":6,"2027-10-06":6,"2027-10-07":6,"2027-10-08":7,"2027-10-09":8,"2027-10-10":8,"2027-10-11":8,"2027-10-12":7,"2027-10-13":6,"2027-10-14":6,"2027-10-15":6,"2027-10-16":7,"2027-10-17":6,"2027-10-18":6,"2027-10-19":5,"2027-10-20":4,"2027-10-21":5,"2027-10-22":7,"2027-10-23":7,"2027-10-24":7,"2027-10-25":6,"2027-10-26":5,"2027-10-27":6,"2027-10-28":8,"2027-10-29":8,"2027-10-30":8,"2027-10-31":8,"2027-11-01":8,"2027-11-02":7,"2027-11-03":7,"2027-11-04":7,"2027-11-05":7,"2027-11-06":7,"2027-11-07":7,"2027-11-08":7,"2027-11-09":6,"2027-11-10":6,"2027-11-11":7,"2027-11-12":7,"2027-11-13":7,"2027-11-14":7,"2027-11-15":6,"2027-11-16":5,"2027-11-17":5,"2027-11-18":5,"2027-11-19":6,"2027-11-20":7,"2027-11-21":7,"2027-11-22":8,"2027-11-23":8,"2027-11-24":9,"2027-11-25":10,"2027-11-26":10,"2027-11-27":10,"2027-11-28":9,"2027-11-29":7,"2027-11-30":3,"2027-12-01":3,"2027-12-02":4,"2027-12-03":6,"2027-12-04":6,"2027-12-05":6,"2027-12-06":6,"2027-12-07":4,"2027-12-08":6,"2027-12-09":6,"2027-12-10":6,"2027-12-11":7,"2027-12-12":6,"2027-12-13":6,"2027-12-14":6,"2027-12-15":6,"2027-12-16":6,"2027-12-17":7,"2027-12-18":9,"2027-12-19":9,"2027-12-20":9,"2027-12-21":9,"2027-12-22":9,"2027-12-23":9,"2027-12-24":10,"2027-12-25":10,"2027-12-26":10,"2027-12-27":10,"2027-12-28":10,"2027-12-29":10,"2027-12-30":10,"2027-12-31":10};function Je(i){const e=fe[i];if(e===void 0)return null;const a=i.split("-"),s=parseInt(a[1],10),t=parseInt(a[2],10),l=new Date(i+"T12:00:00Z").getUTCDay(),c=l===0||l===6;let n="Média";return e<=3?n="Baixa":e>=7&&(n="Alta"),{date:i,day:t,month:s,crowdLevel:e,season:n,isWeekend:c}}function Qe(i){const e=[],a=pe[i];if(!a)return e;const s=String(i).padStart(2,"0");for(let t=1;t<=a.daysCount;t++){const o=String(t).padStart(2,"0"),l=`2027-${s}-${o}`,c=Je(l);c&&e.push(c)}return e}function Me(i,e){const a=fe[i]??5,t=new Date(i+"T12:00:00Z").getUTCDay(),o={};return[{id:"magic-kingdom",delta:t===1||t===6?1:t===2||t===3?-1:0},{id:"epcot",delta:t===5||t===6?1:t===1||t===2?-1:0},{id:"hollywood-studios",delta:t===0||t===6?1:0},{id:"animal-kingdom",delta:-1},{id:"epic-universe",delta:t===0||t===6?2:1},{id:"islands-of-adventure",delta:t===0||t===6?1:0},{id:"universal-studios",delta:t===0||t===6?1:0},{id:"volcano-bay",delta:t===0||t===6?2:0},{id:"seaworld",delta:t===0||t===6?1:-1},{id:"busch-gardens",delta:-1}].forEach(c=>{const n=Math.max(1,Math.min(10,a+c.delta));o[c.id]={crowdLevel:n,isRecommended:n<=4||c.delta<0&&n<=6,isBusyDay:n>=7||c.delta>0}}),o}function Ce(){const i={},e=Object.keys(E);for(let a=5;a<=23;a++){const s=`2027-05-${String(a).padStart(2,"0")}`;e.forEach(t=>{const o=`${s}_${t}`;i[o]={date:s,parkId:t,crowdLevel:null,isRecommended:!1,isBusyDay:!1,season:"Média",status:"unavailable",lastUpdated:null}})}return{records:i,lastImportDate:null,totalVerifiedDays:0,totalUnavailableDays:Object.keys(i).length}}function Ye(){const i={},e=Object.keys(E);for(let a=5;a<=23;a++){const s=`2027-05-${String(a).padStart(2,"0")}`,t=Me(s),o=fe[s]??5,l=o<=3?"Baixa":o>=7?"Alta":"Média";e.forEach(c=>{const n=t[c]||{crowdLevel:o,isRecommended:o<=4,isBusyDay:o>=7},g=`${s}_${c}`;i[g]={date:s,parkId:c,crowdLevel:n.crowdLevel,isRecommended:n.isRecommended,isBusyDay:n.isBusyDay,season:l,status:"verified",lastUpdated:"2026-10-08"}})}return{records:i,lastImportDate:"2026-10-08",totalVerifiedDays:Object.keys(i).length,totalUnavailableDays:0}}function Ze(){const i=[],e=Object.keys(E);for(let a=5;a<=23;a++){const s=`2027-05-${String(a).padStart(2,"0")}`,t=(a+2)%7,o=t===0||t===6;e.forEach(l=>{let c=o?6:4;l==="magic-kingdom"&&(c+=o?2:1),l==="epic-universe"&&(c+=2),l==="animal-kingdom"&&(c-=1),l==="volcano-bay"&&o&&(c+=2);const n=Math.min(9,Math.max(2,c));i.push({date:s,parkId:l,crowdLevel:n,isRecommended:n<=4,isBusyDay:n>=7,season:"Média",status:"verified",lastUpdated:"2026-10-08"})})}return i}const Xe={"magic-kingdom":6,epcot:5,"hollywood-studios":7,"animal-kingdom":8,"universal-studios":65,"islands-of-adventure":64,"volcano-bay":67,"epic-universe":334,seaworld:21,"busch-gardens":24},ea={"magic-kingdom":[{name:"Seven Dwarfs Mine Train",land:"Fantasyland",wait:65,open:!0},{name:"Space Mountain",land:"Tomorrowland",wait:45,open:!0},{name:"TRON Lightcycle / Run",land:"Tomorrowland",wait:60,open:!0},{name:"Big Thunder Mountain Railroad",land:"Frontierland",wait:35,open:!0},{name:"Peter Pan's Flight",land:"Fantasyland",wait:50,open:!0},{name:"Haunted Mansion",land:"Liberty Square",wait:25,open:!0},{name:"Pirates of the Caribbean",land:"Adventureland",wait:20,open:!0},{name:"Jungle Cruise",land:"Adventureland",wait:30,open:!0},{name:"Buzz Lightyear's Space Ranger Spin",land:"Tomorrowland",wait:25,open:!0},{name:"It's a Small World",land:"Fantasyland",wait:15,open:!0}],epcot:[{name:"Guardians of the Galaxy: Cosmic Rewind",land:"World Discovery",wait:75,open:!0},{name:"Remy's Ratatouille Adventure",land:"World Showcase",wait:55,open:!0},{name:"Frozen Ever After",land:"World Showcase",wait:50,open:!0},{name:"Soarin' Around the World",land:"World Nature",wait:30,open:!0},{name:"Test Track (Reimaginado)",land:"World Discovery",wait:40,open:!0},{name:"Spaceship Earth",land:"World Celebration",wait:15,open:!0},{name:"Mission: SPACE",land:"World Discovery",wait:20,open:!0}],"hollywood-studios":[{name:"Star Wars: Rise of the Resistance",land:"Star Wars: Galaxy's Edge",wait:85,open:!0},{name:"Slinky Dog Dash",land:"Toy Story Land",wait:70,open:!0},{name:"The Twilight Zone Tower of Terror",land:"Sunset Boulevard",wait:50,open:!0},{name:"Millennium Falcon: Smugglers Run",land:"Star Wars: Galaxy's Edge",wait:45,open:!0},{name:"Mickey & Minnie's Runaway Railway",land:"Hollywood Boulevard",wait:40,open:!0},{name:"Toy Story Mania!",land:"Toy Story Land",wait:35,open:!0},{name:"Rock 'n' Roller Coaster",land:"Sunset Boulevard",wait:45,open:!0}],"animal-kingdom":[{name:"Avatar Flight of Passage",land:"Pandora",wait:85,open:!0},{name:"Na'vi River Journey",land:"Pandora",wait:45,open:!0},{name:"Expedition Everest",land:"Asia",wait:30,open:!0},{name:"Kilimanjaro Safaris",land:"Africa",wait:35,open:!0},{name:"DINOSAUR",land:"DinoLand U.S.A.",wait:20,open:!0},{name:"Kali River Rapids",land:"Asia",wait:25,open:!0}],"universal-studios":[{name:"Harry Potter and the Escape from Gringotts",land:"Diagon Alley",wait:60,open:!0},{name:"Revenge of the Mummy",land:"New York",wait:35,open:!0},{name:"Transformers: The Ride-3D",land:"Production Central",wait:25,open:!0},{name:"Despicable Me Minion Mayhem",land:"Minion Land",wait:40,open:!0},{name:"Hollywood Rip Ride Rockit",land:"Production Central",wait:35,open:!0},{name:"MEN IN BLACK Alien Attack",land:"World Expo",wait:15,open:!0}],"islands-of-adventure":[{name:"Hagrid's Magical Creatures Motorbike Adventure",land:"Hogsmeade",wait:80,open:!0},{name:"Jurassic World VelociCoaster",land:"Jurassic Park",wait:55,open:!0},{name:"The Incredible Hulk Coaster",land:"Marvel Super Hero Island",wait:30,open:!0},{name:"Harry Potter and the Forbidden Journey",land:"Hogsmeade",wait:45,open:!0},{name:"The Amazing Adventures of Spider-Man",land:"Marvel Super Hero Island",wait:25,open:!0},{name:"Skull Island: Reign of Kong",land:"Skull Island",wait:35,open:!0}],"epic-universe":[{name:"Stardust Racers",land:"Celestial Park",wait:70,open:!0},{name:"Mario Kart: Bowser's Challenge",land:"Super Nintendo World",wait:65,open:!0},{name:"Monsters Unchained: The Frankenstein Experiment",land:"Dark Universe",wait:55,open:!0},{name:"Curse of the Werewolf",land:"Dark Universe",wait:40,open:!0},{name:"Yoshi's Adventure",land:"Super Nintendo World",wait:35,open:!0},{name:"Hiccup's Wing Gliders",land:"Isle of Berk",wait:50,open:!0}],seaworld:[{name:"Pipeline: The Surf Coaster",land:"Coasters",wait:35,open:!0},{name:"Mako",land:"Coasters",wait:25,open:!0},{name:"Kraken",land:"Coasters",wait:15,open:!0},{name:"Manta",land:"Coasters",wait:30,open:!0},{name:"Ice Breaker",land:"Coasters",wait:20,open:!0},{name:"Penguin Trek",land:"Antarctica",wait:30,open:!0}],"busch-gardens":[{name:"Iron Gwazi",land:"Morocco",wait:40,open:!0},{name:"SheiKra",land:"Stanleyville",wait:30,open:!0},{name:"Cheetah Hunt",land:"Edge of Africa",wait:35,open:!0},{name:"Montu",land:"Egypt",wait:20,open:!0},{name:"Cobra's Curse",land:"Egypt",wait:25,open:!0},{name:"Tigris",land:"Stanleyville",wait:20,open:!0}],"volcano-bay":[{name:"Krakatau Aqua Coaster",land:"Rainforest Village",wait:55,open:!0},{name:"Ko'okiri Body Plunge",land:"Wave Village",wait:30,open:!0},{name:"Honu ika Moana",land:"River Village",wait:25,open:!0},{name:"Kala & Tai Nui Serpentine Body Slides",land:"Rainforest Village",wait:20,open:!0}]};class Te{static async fetchParkWaitTimes(e){const a=Xe[e];if(!a)return null;const s=`/api/queue-times/parks/${a}/queue_times.json`,t=`https://queue-times.com/parks/${a}/queue_times.json`;let o=null,l=!1;try{const c=await fetch(s);c.ok&&(o=await c.json(),l=!0)}catch{}if(!o)try{const c=await fetch(t);c.ok&&(o=await c.json(),l=!0)}catch{}if(o){const c=[],n=[];o.lands&&Array.isArray(o.lands)&&o.lands.forEach(d=>{n.push({name:d.name,rides:d.rides||[]}),d.rides&&c.push(...d.rides)}),o.rides&&Array.isArray(o.rides)&&o.rides.length>0&&(n.push({name:"Geral",rides:o.rides}),c.push(...o.rides));const g=c.filter(d=>d.is_open),p=g.filter(d=>d.wait_time>0),f=p.length>0?Math.round(p.reduce((d,v)=>d+v.wait_time,0)/p.length):0;let r=null;if(p.length>0){const d=[...p].sort((v,u)=>u.wait_time-v.wait_time)[0];r={name:d.name,wait_time:d.wait_time}}return{parkId:e,parkName:e,queueTimesId:a,totalRides:c.length,openRides:g.length,avgWaitTime:f,maxWaitRide:r,lands:n,lastUpdated:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),isLive:l}}return this.getFallbackSummary(e,a)}static getFallbackSummary(e,a){const s=ea[e]||[{name:"Atração Principal 1",land:"Área 1",wait:45,open:!0},{name:"Montanha-russa Clássica",land:"Área 2",wait:35,open:!0},{name:"Atração Familiar",land:"Área 1",wait:20,open:!0}],t=new Map;s.forEach((p,f)=>{t.has(p.land)||t.set(p.land,[]),t.get(p.land).push({id:f+1,name:p.name,is_open:p.open,wait_time:p.wait,last_updated:new Date().toISOString()})});const o=Array.from(t.entries()).map(([p,f])=>({name:p,rides:f})),l=s.map((p,f)=>({id:f+1,name:p.name,is_open:p.open,wait_time:p.wait,last_updated:new Date().toISOString()})),c=l.filter(p=>p.is_open),n=Math.round(c.reduce((p,f)=>p+f.wait_time,0)/c.length),g=[...c].sort((p,f)=>f.wait_time-p.wait_time)[0]||null;return{parkId:e,parkName:e,queueTimesId:a,totalRides:l.length,openRides:c.length,avgWaitTime:n,maxWaitRide:g?{name:g.name,wait_time:g.wait_time}:null,lands:o,lastUpdated:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),isLive:!1}}}const aa=[{id:"visao-geral",label:"Visão Geral",icon:"dashboard"},{id:"meu-roteiro",label:"Meu Roteiro",icon:"calendar_today"},{id:"onde-comer",label:"Onde Comer",icon:"restaurant",badge:"Gastronomia"},{id:"roteiros-de-parques",label:"Planos de Parques",icon:"route",badge:"10 Guias"},{id:"guia-outlets",label:"Outlets & Compras",icon:"shopping_bag",badge:"Econômico"},{id:"calendario-de-lotacao",label:"Calendário de Lotação",icon:"groups"},{id:"comparar-datas",label:"Comparar Datas",icon:"compare_arrows"},{id:"meus-ingressos",label:"Meus Ingressos",icon:"confirmation_number"},{id:"sugestoes-de-roteiro",label:"Sugestões de Roteiro",icon:"alt_route"},{id:"desgaste-fisico",label:"Desgaste Físico",icon:"directions_walk"},{id:"historico",label:"Histórico",icon:"history"},{id:"configuracoes",label:"Configurações",icon:"settings"}];function ta(i,e,a){const s=aa.map(t=>{const o=t.id===i;return`
      <button 
        type="button" 
        class="nav-tab-btn w-full flex items-center justify-between px-space-sm py-2 rounded-lg font-body-md transition-colors text-left ${o?"bg-surface-container text-primary font-semibold shadow-xs":"text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"}" 
        data-tab="${t.id}"
      >
        <div class="flex items-center gap-space-sm">
          <span class="material-symbols-outlined text-[19px] ${o?"text-primary":"text-on-surface-variant"}">${t.icon}</span>
          <span class="text-[13.5px]">${t.label}</span>
        </div>
        ${t.badge?`<span class="text-[10px] px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-semibold">${t.badge}</span>`:""}
      </button>
    `}).join("");return`
    <aside id="app-sidebar" class="fixed left-0 top-0 h-full w-[230px] bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between select-none transform -translate-x-full lg:translate-x-0 transition-transform duration-200">
      <div class="flex flex-col">
        <!-- Logo / App Identity -->
        <div class="h-[64px] px-4 flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-lowest">
          <div class="flex items-center cursor-pointer py-1" id="sidebar-logo-btn" title="Orlando Planner">
            <img 
              src="./logo.png" 
              alt="Orlando Planner" 
              class="h-8 max-h-[34px] w-auto max-w-[155px] object-contain hover:opacity-90 transition-opacity" 
            />
          </div>
          <button id="btn-close-mobile-menu" class="lg:hidden p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" aria-label="Fechar menu">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Quick Wizard Trigger Button -->
        <div class="px-space-xs pt-space-xs pb-1">
          <button id="btn-sidebar-trip-generator" class="w-full py-2 px-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold flex items-center justify-between transition-colors shadow-xs">
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">auto_fix_high</span>
              <span>Ajustar Duração</span>
            </div>
            <span class="font-label-xs-mono bg-white/20 px-1.5 py-0.5 rounded text-[10px]">${e}d</span>
          </button>
        </div>

        <!-- Navigation items -->
        <nav class="px-space-xs py-1 space-y-0.5 flex flex-col">
          ${s}
        </nav>
      </div>

      <!-- Bottom User Profile & Trip Badge -->
      <div class="p-space-sm border-t border-outline-variant/30 m-space-xs flex flex-col gap-2">
        <!-- User account card -->
        <div class="bg-surface-container-low p-2 rounded-lg flex items-center justify-between border border-outline-variant/20">
          <div class="flex items-center gap-2 overflow-hidden">
            <div class="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">
              ${a.charAt(0).toUpperCase()}
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="font-label-sm text-[12px] font-semibold text-on-surface truncate">${a}</span>
              <span class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Conectado
              </span>
            </div>
          </div>
          <button id="btn-sidebar-logout" class="p-1 rounded-md text-outline hover:text-error hover:bg-error-container/20 transition-colors" title="Encerrar sessão com segurança" type="button">
            <span class="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>

        <!-- Trip Status & Credits -->
        <div class="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5 border border-outline-variant/20">
          <div class="flex items-center justify-between">
            <span class="font-label-sm text-label-sm font-semibold text-on-surface truncate">Orlando Planner</span>
            <span class="w-2 h-2 rounded-full bg-tertiary-container" title="Planejador Ativo"></span>
          </div>
          <span class="font-caption text-caption text-outline">Viagem de ${e} dias</span>
          <div class="pt-1.5 mt-1 border-t border-outline-variant/20 flex items-center justify-between">
            <a href="https://queue-times.com/pt-BR" target="_blank" rel="noopener noreferrer" class="text-[10px] text-outline hover:text-primary transition-colors flex items-center gap-1 font-medium" title="Dados de filas ao vivo fornecidos por Queue-Times.com">
              <span>Powered by Queue-Times.com</span>
              <span class="material-symbols-outlined text-[10px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  `}function sa(i,e,a,s,t){return`
    <header class="fixed top-0 left-0 lg:left-[230px] right-0 h-[64px] bg-surface-container-lowest border-b border-outline-variant/30 z-40 flex items-center justify-between px-3 sm:px-4 lg:px-space-xl">
      <div class="flex items-center gap-2 sm:gap-space-md">
        <button id="btn-mobile-menu" class="lg:hidden p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors" type="button" aria-label="Abrir menu">
          <span class="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <img 
          src="./logo.png" 
          alt="Orlando Planner" 
          class="lg:hidden h-7 max-h-[30px] w-auto max-w-[125px] object-contain cursor-pointer" 
          id="header-mobile-logo" 
        />

        <button id="btn-header-trip-settings" class="hidden sm:flex items-center gap-space-xs px-2.5 py-1.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-body-md-medium text-[13px] transition-colors" type="button" title="Clique para personalizar duração ou perfil">
          <span class="material-symbols-outlined text-[18px] text-primary">flight_takeoff</span>
          <span>Orlando • ${a} dias</span>
          <span class="material-symbols-outlined text-[16px] text-outline">tune</span>
        </button>
        <span class="hidden md:inline-block h-4 w-[1px] bg-outline-variant/40"></span>
        <span class="hidden md:inline-block font-caption text-caption text-outline uppercase tracking-wider font-semibold">Planejador Oficial</span>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-space-sm md:gap-space-md">
        <!-- Undo / Redo controls -->
        <div class="flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg border border-outline-variant/20">
          <button id="btn-header-undo" class="p-1 rounded text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:pointer-events-none transition-colors" title="Desfazer alteração" ${i?"":"disabled"}>
            <span class="material-symbols-outlined text-[18px]">undo</span>
          </button>
          <button id="btn-header-redo" class="p-1 rounded text-on-surface-variant hover:text-on-surface disabled:opacity-30 disabled:pointer-events-none transition-colors" title="Refazer alteração" ${e?"":"disabled"}>
            <span class="material-symbols-outlined text-[18px]">redo</span>
          </button>
        </div>

        <!-- Direct Print Button -->
        <button id="btn-direct-print" class="h-9 px-2 sm:px-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1.5" title="Imprimir Roteiro Completo / Salvar em PDF" type="button">
          <span class="material-symbols-outlined text-[17px] text-secondary">print</span>
          <span class="hidden sm:inline">Imprimir PDF</span>
        </button>

        <!-- Export Menu dropdown trigger -->
        <div class="relative inline-block text-left" id="export-dropdown-wrapper">
          <button id="btn-export-dropdown" class="h-9 px-2.5 sm:px-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1 sm:gap-1.5 shadow-sm" type="button">
            <span class="material-symbols-outlined text-[16px]">file_download</span>
            <span class="hidden md:inline">Exportar</span>
            <span class="material-symbols-outlined text-[14px]">expand_more</span>
          </button>

          <div id="export-menu" class="hidden absolute right-0 mt-1 w-56 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/30 py-1.5 z-50">
            <button id="action-export-md" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-primary">description</span>
              <span>Exportar Markdown (Roteiro)</span>
            </button>
            <button id="action-export-json" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-tertiary-container">data_object</span>
              <span>Backup do Planejamento (JSON)</span>
            </button>
            <button id="action-print-pdf" class="w-full text-left px-3.5 py-2 text-xs text-on-surface hover:bg-surface-container-low flex items-center gap-2 transition-colors">
              <span class="material-symbols-outlined text-[17px] text-secondary">print</span>
              <span>Dossiê Completo de Impressão (PDF)</span>
            </button>
          </div>
        </div>

        <!-- User Logout Quick Action -->
        <button id="btn-header-logout" class="h-9 px-2 sm:px-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-error-container/20 hover:border-error/40 text-on-surface hover:text-error transition-colors flex items-center gap-1.5" title="Sair da Conta (${t})" type="button">
          <span class="material-symbols-outlined text-[17px]">logout</span>
          <span class="hidden lg:inline text-xs font-medium">Sair</span>
        </button>
      </div>
    </header>
  `}function oa(i,e,a){const s=i.filter(d=>d.activityType==="park").length,t=i.length-s,o=Math.round(s/i.length*100);let l=0,c=0,n=0,g=0;i.forEach(d=>{if(d.parkId){const v=E[d.parkId];(v==null?void 0:v.operator)==="disney"?l++:(v==null?void 0:v.operator)==="universal"?c++:(v==null?void 0:v.operator)==="seaworld"&&n++}else g++});let p="";e.status==="valid"?p=`
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
        Válido
      </span>
    `:e.status==="warning"?p=`
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        Pendente
      </span>
    `:p=`
      <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm font-semibold">
        <span class="w-1.5 h-1.5 rounded-full bg-error"></span>
        Conflito
      </span>
    `;const r=i.slice(0,5).map(d=>{const v=d.parkId?E[d.parkId]:null,m=d.date.split("-")[2];let w="";return d.isLocked?w=`
          <span class="inline-flex items-center gap-1 text-[11px] font-medium px-1.5 py-0.5 rounded bg-secondary-fixed/50 text-secondary">
            <span class="material-symbols-outlined text-[12px]">lock</span>
            Fixo
          </span>
        `:v?w=`
          <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-surface-container text-primary">
            ${v.operator==="disney"?"Disney":v.operator==="universal"?"Universal":"United Parks"}
          </span>
        `:w=`
          <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-medium bg-surface-container text-secondary">
            Sem Parque
          </span>
        `,`
        <div class="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm hover:bg-surface-container-low/60 px-2 rounded-lg transition-colors cursor-pointer day-preview-item" data-date="${d.date}">
          <div class="flex items-start sm:items-center gap-space-md min-w-0">
            <div class="flex flex-col items-center justify-center w-12 py-1 rounded bg-surface-container-low text-center shrink-0">
              <span class="font-label-xs-mono text-label-xs-mono uppercase text-outline">${d.dayOfWeek}</span>
              <span class="font-headline-sm text-headline-sm text-on-surface leading-tight">${m}</span>
            </div>
            <div class="min-w-0 flex flex-col">
              <div class="flex items-center gap-2">
                <span class="font-body-md-medium text-body-md-medium text-on-surface truncate">${d.title}</span>
                ${w}
              </div>
              <span class="font-caption text-caption text-on-surface-variant truncate">${d.description}</span>
            </div>
          </div>
          <div class="flex items-center gap-space-md self-end sm:self-center shrink-0">
            <span class="font-caption text-caption ${d.activityType==="park"?"text-tertiary-container":"text-outline"} bg-surface-container px-2 py-0.5 rounded">
              ${d.activityType==="park"?"Parque":d.activityType==="shopping"?"Compras":"Descanso"}
            </span>
            <span class="font-label-xs-mono text-label-xs-mono text-on-surface-variant min-w-[70px] text-right">
              ${d.effortLevel}
            </span>
          </div>
        </div>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-xl animate-fade-in">
      <!-- Header editorial sóbrio -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
            <span class="font-label-xs-mono text-label-xs-mono uppercase tracking-wider text-outline bg-surface-container px-2 py-0.5 rounded">Itinerário Ativo</span>
            <span class="font-caption text-caption text-outline">Versão 1.0 • Salvo localmente</span>
          </div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight mt-1">Visão Geral</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">Orlando — 05 a 23 de maio de 2027 (19 dias)</p>
        </div>
        
        <div class="flex items-center gap-space-sm">
          <button id="btn-quick-optimize" class="h-9 px-space-md rounded-lg bg-surface-container-lowest hover:bg-surface-container-low text-on-surface shadow-sm font-label-md text-label-md flex items-center gap-1.5 transition-colors border border-outline-variant/40" type="button">
            <span class="material-symbols-outlined text-[17px] text-primary">alt_route</span>
            <span>Ver Otimizações</span>
          </button>
          <button id="btn-open-full-schedule" class="h-9 px-space-md rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center gap-1.5 transition-colors shadow-sm" type="button">
            <span class="material-symbols-outlined text-[17px]">calendar_today</span>
            <span>Ver Roteiro Completo</span>
          </button>
        </div>
      </section>

      <!-- Métricas Rápidas: 4 Cards Compactos -->
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <!-- Card 1: Duração -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Duração Total</span>
            <span class="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">19 dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">05/05 a 23/05/2027</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-primary-container h-full w-full rounded-full"></div>
          </div>
        </div>

        <!-- Card 2: Parques -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Dias em Parques</span>
            <span class="material-symbols-outlined text-[18px] text-tertiary-container">attractions</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">${s} dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">${o}% da programação ativa</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-tertiary-container h-full rounded-full" style="width: ${o}%;"></div>
          </div>
        </div>

        <!-- Card 3: Descanso & Compras -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Descanso & Compras</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">hotel</span>
          </div>
          <div class="mt-space-md">
            <div class="font-headline-lg text-headline-lg text-on-surface font-semibold">${t} dias</div>
            <div class="font-caption text-caption text-outline mt-0.5">Sem agendamento de parque</div>
          </div>
          <div class="w-full bg-surface-container h-1.5 rounded-full mt-space-md overflow-hidden">
            <div class="bg-secondary h-full rounded-full" style="width: ${100-o}%;"></div>
          </div>
        </div>

        <!-- Card 4: Ingressos / Auditoria -->
        <div class="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm border border-outline-variant/20 hover:border-outline-variant/50 transition-all cursor-pointer" id="card-dashboard-tickets">
          <div class="flex items-center justify-between">
            <span class="font-caption text-caption uppercase tracking-wider text-outline font-medium">Validação de Ingressos</span>
            <span class="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
          </div>
          <div class="mt-space-md">
            <div class="flex items-center gap-1.5">
              ${p}
            </div>
            <div class="font-caption text-caption text-outline mt-1.5">Regras de 2027 a conferir</div>
          </div>
          <div class="flex items-center justify-between text-caption font-caption text-secondary mt-space-xs">
            <span>Conferência necessária</span>
            <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
          </div>
        </div>
      </section>

      <!-- Layout Principal em 2 Colunas (65% / 35%) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        <!-- Coluna Principal (65% -> col-span-8) -->
        <section class="lg:col-span-8 flex flex-col gap-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm border border-outline-variant/20">
            <!-- Cabeçalho do Bloco -->
            <div class="flex items-center justify-between pb-space-md">
              <div class="flex items-center gap-space-sm">
                <span class="material-symbols-outlined text-primary-container text-[20px]">view_timeline</span>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Primeiros dias do roteiro</h2>
              </div>
              <span class="font-caption text-caption text-outline">Exibindo 5 de 19 dias</span>
            </div>

            <!-- Tabela / Lista Estruturada de Dias -->
            <div class="flex flex-col divide-y divide-outline-variant/30">
              ${r}
            </div>

            <!-- Rodapé do Card com Ação Direta -->
            <div class="pt-space-md mt-space-sm flex items-center justify-between border-t border-outline-variant/20">
              <div class="flex items-center gap-1.5 text-caption font-caption text-outline">
                <span class="material-symbols-outlined text-[15px]">info</span>
                <span>Roteiro calibrado com dias de descanso intercalados</span>
              </div>
              <button class="inline-flex items-center gap-1 font-body-md-medium text-body-md text-primary hover:text-primary-container transition-colors" id="btn-goto-itinerary">
                <span>Abrir roteiro completo</span>
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          <!-- Resumo Estratégico de Grupos de Parques -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/20">
            <h3 class="font-label-md text-label-md uppercase tracking-wider text-outline mb-space-sm font-semibold">Distribuição por Complexo</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-space-sm">
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Walt Disney World</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${l} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">4 parques + MK</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Universal Orlando</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${c} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">Inclui Epic (2x)</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">United Parks</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${n} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-primary mt-1">SeaWorld, Busch</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-low flex flex-col">
                <span class="font-caption text-caption text-outline">Off-Park / Pausa</span>
                <span class="font-headline-sm text-headline-sm text-on-surface mt-0.5 font-semibold">${g} dias</span>
                <span class="font-label-xs-mono text-label-xs-mono text-tertiary-container mt-1">Recuperação física</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Coluna Secundária (35% -> col-span-4) -->
        <aside class="lg:col-span-4 flex flex-col gap-space-md">
          <!-- Card Branco: Pontos de Atenção -->
          <div class="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col gap-space-md border border-outline-variant/20">
            <div class="flex items-center justify-between pb-space-xs">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-[20px] text-secondary">notification_important</span>
                <h2 class="font-headline-md text-headline-md text-on-surface font-semibold">Pontos de atenção</h2>
              </div>
              <span class="font-label-xs-mono text-label-xs-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">4 alertas</span>
            </div>

            <div class="flex flex-col gap-space-md">
              <!-- Alerta 1: Data Fixa Magic Kingdom -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">lock_clock</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Magic Kingdom Travado (23/05)</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Gran Finale agendado para o último dia de viagem com ingresso avulso. Esta data não pode ser alterada ou remanejada pelo algoritmo.
                  </p>
                </div>
              </div>

              <!-- Alerta 2: Regras de Validade dos Ingressos -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-secondary shrink-0 mt-0.5">hourglass_top</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Validade dos Pacotes Pendente</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    As regras de validade em dias corridos dos passes Disney 4-Park (7 dias) e Universal Explorer (14 dias) ainda requerem confirmação das regras de 2027.
                  </p>
                </div>
              </div>

              <!-- Alerta 3: Parques Épicos -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-primary shrink-0 mt-0.5">rocket_launch</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Epic Universe (2 Visitas)</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Programado para 11/05 e 19/05. Mantenha intervalo adequado entre as duas idas para absorver o novo parque sem saturação.
                  </p>
                </div>
              </div>

              <!-- Alerta 4: Previsão de Lotação -->
              <div class="p-space-md rounded-lg bg-surface-container-low flex gap-3 items-start border border-outline-variant/20">
                <span class="material-symbols-outlined text-[18px] text-outline shrink-0 mt-0.5">schedule</span>
                <div class="flex flex-col min-w-0">
                  <span class="font-label-md text-label-md text-on-surface font-semibold">Previsão 2027 Indisponível</span>
                  <p class="font-caption text-caption text-on-surface-variant mt-0.5 leading-relaxed">
                    Dados oficiais de previsão de lotação para maio de 2027 não estão liberados pelas APIs dos complexos. O planejador opera em modo íntegro sem inventar dados.
                  </p>
                </div>
              </div>
            </div>

            <!-- Atalhos Rápidos da Coluna Secundária -->
            <div class="pt-space-sm flex flex-col gap-2">
              <button id="btn-quick-tickets" class="w-full h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                <span class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[17px] text-secondary">confirmation_number</span>
                  <span>Conferir regras de ingressos</span>
                </span>
                <span class="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              </button>
              <button id="btn-quick-crowd" class="w-full h-9 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-between transition-colors" type="button">
                <span class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[17px] text-primary">groups</span>
                  <span>Ver calendário de lotação</span>
                </span>
                <span class="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              </button>
            </div>
          </div>

          <!-- Card Complementar: Status de Prontidão & Fadiga -->
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-outline-variant/20">
            <div class="flex items-center justify-between">
              <span class="font-caption text-caption uppercase tracking-wider text-outline font-semibold">Índice Médio de Fadiga</span>
              <span class="font-label-xs-mono text-label-xs-mono text-primary font-bold">${a.overallFatigueScore}/100</span>
            </div>
            <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div class="bg-primary-container h-full rounded-full" style="width: ${a.overallFatigueScore}%;"></div>
            </div>
            <div class="flex items-center justify-between text-caption font-caption text-on-surface-variant pt-1">
              <span>${a.actualRestDaysCount} dias de recuperação</span>
              <span class="text-tertiary-container font-medium">${a.criticalAlerts.length===0?"Ritmo equilibrado":`${a.criticalAlerts.length} alertas físicos`}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `}const ia=[{source_id:"src-001",canonical_url:"https://www.vaipradisney.com/blog/comida/",article_title:"Comida — Índice Principal e Guia Gastronômico",publisher:"Vai pra Disney?",author:"Renata Costivelle / Felipe Almeida",published_at:"2014-12-03",updated_at:"2026-05-14",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_comida_index_hash_v1",category:"indice",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-002",canonical_url:"https://www.vaipradisney.com/blog/categoria/comida/",article_title:"Comida — Arquivo de Matérias",publisher:"Vai pra Disney?",author:"VPD Orlando",published_at:"2015-01-01",updated_at:"2026-10-01",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_cat_comida_hash_v1",category:"categoria",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-003",canonical_url:"https://www.vaipradisney.com/blog/onde-comer-magic-kingdom/",article_title:"Onde comer no Magic Kingdom?",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2018-07-15",updated_at:"2026-03-20",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_mk_dining_hash_v1",category:"guia_parque",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-004",canonical_url:"https://www.vaipradisney.com/blog/onde-comer-epcot/",article_title:"Onde comer no Epcot?",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2017-01-20",updated_at:"2026-04-10",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_epcot_dining_hash_v1",category:"guia_parque",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-005",canonical_url:"https://www.vaipradisney.com/blog/restaurantes-disney-springs/",article_title:"Guia de Restaurantes do Disney Springs",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2015-09-10",updated_at:"2026-02-18",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_disney_springs_hash_v1",category:"guia_complexo",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-006",canonical_url:"https://www.vaipradisney.com/blog/onde-comer-universal-studios/",article_title:"Onde comer no Universal Studios?",publisher:"Vai pra Disney?",author:"Felipe Almeida",published_at:"2016-04-12",updated_at:"2025-11-05",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_usf_dining_hash_v1",category:"guia_parque",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-007",canonical_url:"https://www.vaipradisney.com/blog/onde-comer-islands-of-adventure/",article_title:"Onde comer no Islands of Adventure?",publisher:"Vai pra Disney?",author:"Felipe Almeida",published_at:"2016-05-02",updated_at:"2025-11-05",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_ioa_dining_hash_v1",category:"guia_parque",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-008",canonical_url:"https://www.vaipradisney.com/blog/comendo-com-personagens-da-disney/",article_title:"Comendo com personagens da Disney",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2021-11-18",updated_at:"2026-01-12",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_personagens_hash_v1",category:"personagens",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-009",canonical_url:"https://www.vaipradisney.com/blog/comidas-disney-alem-do-hamburguer/",article_title:"Comidas na Disney: além do hambúrguer gastando pouco",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2017-08-04",updated_at:"2025-08-10",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_economia_hash_v1",category:"economia",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-010",canonical_url:"https://www.vaipradisney.com/blog/melhores-restaurantes-orlando/",article_title:"Top 5: os melhores restaurantes de Orlando",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2026-10-02",updated_at:"2026-10-02",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_top_restaurantes_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-011",canonical_url:"https://www.vaipradisney.com/blog/perkins-comer-bem-barato-orlando/",article_title:"Perkins: comer bem e barato em Orlando",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2015-03-14",updated_at:"2024-05-10",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_perkins_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-012",canonical_url:"https://www.vaipradisney.com/blog/anas-kitchen-restaurante-brasileiro-orlando/",article_title:"Ana’s Kitchen: comida caseira brasileira em Orlando",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2016-08-20",updated_at:"2025-09-30",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_anas_kitchen_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-013",canonical_url:"https://www.vaipradisney.com/blog/panera-bread/",article_title:"Panera Bread: comida boa e barata para qualquer momento",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2015-11-04",updated_at:"2024-06-15",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_panera_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-014",canonical_url:"https://www.vaipradisney.com/blog/olive-garden-comer-bem-barato-orlando/",article_title:"Olive Garden: comendo bem e barato em Orlando",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2014-10-09",updated_at:"2025-01-20",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_olive_garden_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-015",canonical_url:"https://www.vaipradisney.com/blog/five-guys-apaixonados-por-cheeseburger/",article_title:"Five Guys: para os apaixonados por cheeseburger",publisher:"Vai pra Disney?",author:"Felipe Almeida",published_at:"2014-05-18",updated_at:"2024-08-11",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_five_guys_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-016",canonical_url:"https://www.vaipradisney.com/blog/panda-express-comida-chinesa-barata-deliciosa/",article_title:"Panda Express: comida chinesa barata e deliciosa",publisher:"Vai pra Disney?",author:"Felipe Almeida",published_at:"2015-07-22",updated_at:"2024-09-02",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_panda_express_hash_v1",category:"avaliacao_restaurante",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-017",canonical_url:"https://www.vaipradisney.com/blog/5-pizzas-que-valem-pena-em-orlando-regiao/",article_title:"5 pizzas que valem a pena em Orlando e região",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2024-07-15",updated_at:"2024-07-15",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_5_pizzas_hash_v1",category:"guia_multiplos_estabelecimentos",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-018",canonical_url:"https://www.chick-fil-a.com/locations/browse/fl",article_title:"Chick-fil-A — Localizador Oficial de Unidades Flórida",publisher:"Chick-fil-A Official",author:"Corporate Relations",published_at:null,updated_at:"2026-09-01",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"cfa_official_locator_fl",category:"rede_fonte_oficial",crawl_status:"fetched",extraction_status:"extracted"},{source_id:"src-019",canonical_url:"https://www.vaipradisney.com/blog/como-reservar-restaurante-na-disney/",article_title:"Como reservar restaurantes na Disney",publisher:"Vai pra Disney?",author:"Renata Costivelle",published_at:"2014-11-20",updated_at:"2026-01-05",discovered_at:"2026-10-08",fetched_at:"2026-10-08",content_hash:"vpd_reserva_disney_hash_v1",category:"procedimentos",crawl_status:"fetched",extraction_status:"extracted"}],ra=[{restaurant_id:"food-001",name:"Earl of Sandwich",normalized_name:"earl of sandwich",operator:"independent",location_type:"disney_springs",resort:null,park:null,park_area:"Marketplace",shopping_center:"Disney Springs",address:"1750 E Buena Vista Dr, Lake Buena Vista, FL 32830",latitude:28.3702,longitude:-81.5154,cuisine_types:["Sanduíches Artesanais","Sopas & Saladas","Americana"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner","snack"],price_category:null,reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Opções Vegetarianas"],accessibility_information:"Acessível para cadeirantes",official_url:"https://earlofsandwichusa.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Sanduíches quentes assados na hora com pães crocantes artesanais e sopas clássicas, sendo um dos maiores sucessos de custo-benefício em Disney Springs.",tips:"O sanduíche The Original 1762 (roast beef com cheddar e molho horseradish) e a sopa de tomate com croutons são referências gastronômicas.",source_ids:["src-011"]},{restaurant_id:"food-002",name:"Perkins Restaurant & Bakery",normalized_name:"perkins restaurant bakery",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"12559 FL-535, Orlando, FL 32836 (unidade Lake Buena Vista)",latitude:28.3845,longitude:-81.5034,cuisine_types:["Americana Tradicional","Panquecas & Waffles","Confeitaria"],service_type:"table_service",meal_types:["breakfast","lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.perkinsrestaurants.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Clássico diner americano famoso pelo farto café da manhã servido o dia inteiro, panquecas fofas, omeletes gigantes e tortas artesanais.",tips:"Excelente para tomar um café da manhã reforçado e econômico antes de ir para os parques, ou para jantar tarde sem filas.",source_ids:["src-011"]},{restaurant_id:"food-003",name:"Ana's Kitchen",normalized_name:"anas kitchen",operator:"independent",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"8810 Commodity Cir #17, Orlando, FL 32819",latitude:28.4357,longitude:-81.4429,cuisine_types:["Brasileira Caseira","Prato Feito","Pasteis"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:[],accessibility_information:null,official_url:null,reservation_url:null,operational_status:"reported_closed",last_verified_at:"2025-09-30",visibility:"historical_only",short_description:"Restaurante de comida caseira brasileira (PF, feijão tropeiro e coxinha). Encerramento permanente reportado em setembro de 2025.",tips:"Encerramento reportado em setembro de 2025; não sugerir no roteiro ativo.",source_ids:["src-012"]},{restaurant_id:"food-004",name:"Panera Bread",normalized_name:"panera bread",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"Múltiplas unidades em Orlando (ex: Millenia e Crossroads)",latitude:28.4878,longitude:-81.4312,cuisine_types:["Padaria Saudável","Sopas em Pão Italiano","Saladas & Paninis"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano","Vegano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.panerabread.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Rede de café e padaria saudável com sopas servidas dentro do pão (Bread Bowl), saladas frescas e sanduíches naturais com ingredientes orgânicos.",tips:"O combo You Pick Two permite escolher meia porção de sopa + meio sanduíche ou salada a um preço super econômico.",source_ids:["src-013"]},{restaurant_id:"food-005",name:"Olive Garden",normalized_name:"olive garden",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"Unidades na International Drive e US-192 Kissimmee",latitude:28.4418,longitude:-81.4705,cuisine_types:["Italiana-Americana","Massas","Sopas & Pães Ilimitados"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano","Opções Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.olivegarden.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"O restaurante queridinho dos brasileiros em Orlando: porções generosas de massa com sopa ou salada da casa e breadsticks quentes com refil ilimitado.",tips:"O prato Tour of Italy reúne lasanha, frango à parmegiana e fettuccine alfredo em uma porção que costuma servir duas pessoas.",source_ids:["src-014"]},{restaurant_id:"food-006",name:"Five Guys",normalized_name:"five guys",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"Unidades na International Drive, Mall at Millenia e Kissimmee",latitude:28.4891,longitude:-81.4287,cuisine_types:["Hambúrgueres Artesanais","Batatas Fritas Frescas","Milkshakes"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Opção sem pão (alface/bowl)"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.fiveguys.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Hambúrgueres preparados na chapa na hora com até 15 acompanhamentos gratuitos, batatas fritas cortadas à mão e caixas de amendoim com casca à vontade.",tips:"Atenção ao tamanho: o Little Burger vem com 1 hambúrguer; o regular vem com 2 hambúrgueres altos. A porção pequena de batata frita transborda o saco!",source_ids:["src-015"]},{restaurant_id:"food-007",name:"Panda Express",normalized_name:"panda express",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"Unidades nos Outlets Premium e praças de alimentação",latitude:28.4735,longitude:-81.4519,cuisine_types:["Chinesa Rápida","Orange Chicken","Arroz Frito & Noodles"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Opções Vegetarianas"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.pandaexpress.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Fast-food asiático com pratos saborosos montados na hora no balcão, famosos pelo icônico Orange Chicken agridoce e rolinhos primavera.",tips:"O formato Plate (1 base de arroz/massa + 2 carnes) custa cerca de $10-$12 e é uma das refeições mais baratas e que mais sustentam durante os dias de compras.",source_ids:["src-016"]},{restaurant_id:"food-008",name:"Pizza Bruno",normalized_name:"pizza bruno",operator:"independent",location_type:"off_park",resort:null,park:null,park_area:"Curry Ford West & College Park",shopping_center:null,address:"3990 Curry Ford Rd, Orlando, FL 32806",latitude:28.5132,longitude:-81.3325,cuisine_types:["Pizzaria Artesanal","Napolitana Autêntica","Entradas Italianas"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano","Vegano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.pizzabrunofl.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Pizzaria artesanal de fermentação lenta reconhecida pelo Guia Michelin na categoria Bib Gourmand, com bordas altas e ingredientes nobres.",tips:"Experimente a pizza com queijo pecorino e mel apimentado (Hot Honey) ou as almôndegas artesanais da casa.",source_ids:["src-017"]},{restaurant_id:"food-009",name:"Via Napoli Ristorante e Pizzeria",normalized_name:"via napoli ristorante e pizzeria",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"epcot",park_area:"World Showcase — Pavilhão da Itália",shopping_center:null,address:"Epcot World Showcase, Lake Buena Vista, FL 32830",latitude:28.3688,longitude:-81.5492,cuisine_types:["Italiana Autêntica","Pizzas a Lenha","Massas Artesanais"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/epcot/via-napoli/",reservation_url:"https://disneyworld.disney.go.com/dining/epcot/via-napoli/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Pizzaria autêntica do EPCOT com três fornos a lenha gigantescos que homenageiam vulcões italianos (Vesúvio, Etna e Stromboli). Água mineral importada para manter o padrão napolitano.",tips:"A pizza Mezzo Metro (meio metro) alimenta tranquilamente 4 a 5 pessoas e tem excelente custo-benefício para famílias dentro dos parques.",source_ids:["src-004","src-017"]},{restaurant_id:"food-010",name:"Prato",normalized_name:"prato",operator:"independent",location_type:"off_park",resort:null,park:null,park_area:"Winter Park",shopping_center:null,address:"124 N Park Ave, Winter Park, FL 32789",latitude:28.5997,longitude:-81.3518,cuisine_types:["Italiana Moderna","Massas Feitas à Mão","Pizzas Gourmet"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.prato-wp.com/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante elegante na charmosa Park Avenue de Winter Park, celebrando a cozinha italiana contemporânea com massas frescas e forno a lenha.",tips:"Ideal para um almoço sofisticado no dia de descanso ou passeio por Winter Park. O gnocchi com trufas e as pizzas individuais são espetaculares.",source_ids:["src-017"]},{restaurant_id:"food-011",name:"Camelo Pizzeria Orlando",normalized_name:"camelo pizzeria orlando",operator:"independent",location_type:"off_park",resort:null,park:null,park_area:"Dr. Phillips",shopping_center:null,address:"6996 Piazza Grande Ave #100, Orlando, FL 32835",latitude:28.5146,longitude:-81.4878,cuisine_types:["Pizzaria Brasileira","Massa Fina Paulistana","Chope & Sobremesas"],service_type:"table_service",meal_types:["dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://pizzariacamelo.com.br/",reservation_url:null,operational_status:"pending_confirmation",last_verified_at:"2026-10-08",visibility:"active",short_description:"Filial internacional da tradicional pizzaria paulistana, famosa pela massa finíssima e crocante com coberturas brasileiras clássicas (frango com catupiry, portuguesa e brigadeiro).",tips:"Excelente pedida para quem sente falta da pizza ao estilo brasileiro com catupiry de verdade durante a viagem.",source_ids:["src-017"]},{restaurant_id:"food-012",name:"Blaze Fast-Fire'd Pizza",normalized_name:"blaze fast fired pizza",operator:"chain",location_type:"disney_springs",resort:null,park:null,park_area:"Town Center",shopping_center:"Disney Springs",address:"Disney Springs Town Center, Lake Buena Vista, FL 32830",latitude:28.3715,longitude:-81.5168,cuisine_types:["Pizzaria Customizável","Massa Fina Artesanal","Rápida e Barata"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Vegano","Sem Glúten (massa de couve-flor)"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.blazepizza.com/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:'Pizzaria no estilo "monte sua própria pizza" assada em forno ultra-rápido de alta temperatura em apenas 3 minutos, com preço fixo para ingredientes ilimitados.',tips:"Você pode colocar quantos queijos, carnes e vegetais quiser pelo mesmo valor de cerca de $11 a $13. Uma das opções mais baratas de Disney Springs.",source_ids:["src-005","src-017"]},{restaurant_id:"food-013",name:"Chick-fil-A",normalized_name:"chick fil a",operator:"chain",location_type:"off_park",resort:null,park:null,park_area:null,shopping_center:null,address:"Unidades na Sand Lake Rd, Millenia e Kissimmee",latitude:28.4502,longitude:-81.4721,cuisine_types:["Frango Frito Empanado","Waffle Potato Fries","Milkshakes Artesanais"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Frango Grelhado (sem glúten)"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.chick-fil-a.com/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Lendária rede americana de frango empanado, famosa pela crocância e atendimento excepcionalmente cortês. Importante: fecha religiosamente aos domingos.",tips:"Peça o Spicy Chicken Sandwich Deluxe com batatas Waffle e peça sachês extras do molho da casa Chick-fil-A Sauce.",source_ids:["src-018"]},{restaurant_id:"food-014",name:"Cinderella's Royal Table",normalized_name:"cinderellas royal table",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"magic-kingdom",park_area:"Fantasyland (Dentro do Castelo da Cinderela)",shopping_center:null,address:"Magic Kingdom Park, Lake Buena Vista, FL 32830",latitude:28.4194,longitude:-81.5812,cuisine_types:["Americana Contemporânea","Menu Degustação","Refeição Real"],service_type:"fine_dining",meal_types:["breakfast","lunch","dinner"],price_category:"$$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Cinderela","Ariel","Aurora","Branca de Neve","Jasmine"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten","Menu Infantil"],accessibility_information:"Elevador interno para acesso ao salão do segundo andar",official_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/cinderella-royal-table/",reservation_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/cinderella-royal-table/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"A experiência máxima de conto de fadas: refeição dentro do Castelo da Cinderela com vista para a Fantasyland e encontro com as princesas clássicas.",tips:"Exige reserva com exatos 60 dias de antecedência às 06h00 (horário de Orlando). Pagamento adiantado obrigatório no cartão no ato da reserva.",source_ids:["src-003","src-008","src-019"]},{restaurant_id:"food-015",name:"Be Our Guest Restaurant",normalized_name:"be our guest restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"magic-kingdom",park_area:"Fantasyland (Castelo da Fera)",shopping_center:null,address:"Magic Kingdom Park, Lake Buena Vista, FL 32830",latitude:28.4211,longitude:-81.5805,cuisine_types:["Francesa Inspirada","Alta Gastronomia","Vinhos & Sobremesas"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["A Fera (aparição pelo salão)"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções Sem Glúten"],accessibility_information:"Totalmente acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/be-our-guest-restaurant/",reservation_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/be-our-guest-restaurant/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante imersivo nos 3 salões do castelo da Bela e a Fera (Salão de Baile, Ala Oeste proibida e Galeria das Rosas). Menu prix-fixe francês requintado.",tips:"A sobremesa The Grey Stuff (o famoso doce cinza da canção Be Our Guest) vem servida em uma xícara de chocolate comestível do Chip.",source_ids:["src-003","src-019"]},{restaurant_id:"food-016",name:"Columbia Harbour House",normalized_name:"columbia harbour house",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"magic-kingdom",park_area:"Liberty Square",shopping_center:null,address:"Magic Kingdom Park, Lake Buena Vista, FL 32830",latitude:28.4187,longitude:-81.5831,cuisine_types:["Frutos do Mar","Salmão Grelhado","Sopas & Sanduíches Leves"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Opções de Peixes","Sem Glúten"],accessibility_information:"Totalmente acessível",official_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/columbia-harbour-house/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"O melhor quick-service para fugir do hambúrguer no Magic Kingdom. Oferece salmão grelhado com arroz, camarões empanados, New England Clam Chowder e saladas frescas.",tips:"Suba para o segundo andar! É climatizado, silencioso, tem janelas charmosas para a Frontierland e quase ninguém vai até lá.",source_ids:["src-003","src-009"]},{restaurant_id:"food-017",name:"Crystal Palace",normalized_name:"crystal palace",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"magic-kingdom",park_area:"Main Street, U.S.A.",shopping_center:null,address:"Magic Kingdom Park, Lake Buena Vista, FL 32830",latitude:28.4181,longitude:-81.5822,cuisine_types:["Buffet Americano","Carnes & Saladas","Doces Infantis"],service_type:"buffet",meal_types:["breakfast","lunch","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Ursinho Pooh","Tigrão","Leitão","Ió (Bisonho)"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções Sem Alérgenos"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/crystal-palace/",reservation_url:"https://disneyworld.disney.go.com/dining/magic-kingdom/crystal-palace/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Lindo pavilhão de vidro inspirado na era vitoriana do século XIX ao lado do Castelo, com buffet livre farto e visita de Pooh e seus amigos do Bosque dos Cem Acres.",tips:"Reservar o café da manhã às 08h00 em dias em que o parque abre às 09h00 permite tirar fotos exclusivas na Main Street vazia!",source_ids:["src-003","src-008"]},{restaurant_id:"food-018",name:"Space 220 Restaurant",normalized_name:"space 220 restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"epcot",park_area:"World Discovery (Próximo à Mission: SPACE)",shopping_center:null,address:"Epcot, Lake Buena Vista, FL 32830",latitude:28.3745,longitude:-81.5471,cuisine_types:["Americana Moderna","Menu Prix-Fixe","Coquetéis Espaciais"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/epcot/space-220/",reservation_url:"https://disneyworld.disney.go.com/dining/epcot/space-220/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Simula uma viagem em elevador espacial (Stellarvator) para uma estação orbital a 220 milhas (354 km) de altitude, com janelas panorâmicas com astronautas flutuando no espaço.",tips:"Se não conseguir reserva para as mesas do salão principal, tente a fila de espera do Space 220 Lounge no mesmo dia para pedir petiscos e drinks sem menu fechado.",source_ids:["src-004","src-010"]},{restaurant_id:"food-019",name:"Regal Eagle Smokehouse",normalized_name:"regal eagle smokehouse",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"epcot",park_area:"World Showcase — Pavilhão dos Estados Unidos",shopping_center:null,address:"Epcot World Showcase, Lake Buena Vista, FL 32830",latitude:28.3693,longitude:-81.5487,cuisine_types:["Churrasco Americano (BBQ)","Costelinha Defumada","Cervejas Artesanais"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Opção Vegetariana (hambúrguer vegetal defumado)"],accessibility_information:"Totalmente acessível",official_url:"https://disneyworld.disney.go.com/dining/epcot/regal-eagle-smokehouse/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Churrasco defumado no estilo autêntico do Texas, Carolina do Norte e Memphis com Sam the Eagle dos Muppets como anfitrião. Salão interno climatizado e terraço ao ar livre.",tips:"A costelinha de porco defumada e o brisket com mac and cheese são saborosíssimos. Há uma estação com 4 tipos de molhos barbecue para você se servir.",source_ids:["src-004","src-009"]},{restaurant_id:"food-020",name:"Garden Grill Restaurant",normalized_name:"garden grill restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"epcot",park_area:"World Nature (Pavilhão The Land)",shopping_center:null,address:"Epcot The Land, Lake Buena Vista, FL 32830",latitude:28.3739,longitude:-81.5524,cuisine_types:["Americana Familiar","Menu Feast Servido na Mesa","Ingredientes da Horta"],service_type:"table_service",meal_types:["breakfast","lunch","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Mickey Fazendeiro","Pluto","Tico","Teco"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções da Horta Sustentável"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/epcot/garden-grill-restaurant/",reservation_url:"https://disneyworld.disney.go.com/dining/epcot/garden-grill-restaurant/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante circular que gira suavemente enquanto você come, com vista para os cenários da atração Living with the Land e vegetais colhidos diretamente das estufas do EPCOT.",tips:"A interação com personagens aqui é uma das mais atenciosas e calmas de toda a Disney porque as mesas são cabines privativas.",source_ids:["src-004","src-008"]},{restaurant_id:"food-021",name:"Sci-Fi Dine-In Theater Restaurant",normalized_name:"sci fi dine in theater restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"hollywood-studios",park_area:"Commissary Lane",shopping_center:null,address:"Disney's Hollywood Studios, Lake Buena Vista, FL 32830",latitude:28.3562,longitude:-81.5599,cuisine_types:["Americana","Hambúrgueres Gourmet","Milkshakes Clássicos"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Mesas adaptadas com formato de carro conversível acessível",official_url:"https://disneyworld.disney.go.com/dining/hollywood-studios/sci-fi-dine-in-theater/",reservation_url:"https://disneyworld.disney.go.com/dining/hollywood-studios/sci-fi-dine-in-theater/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Simula um drive-in noturno dos anos 1950 sob céu estrelado artificial, onde as mesas são carros conversíveis vintage de época e na tela passam trailers hilários de monstros e ficção científica.",tips:"Ambiente super escuro e climatizado, perfeito para descansar os pés e fugir do calor do meio do dia no Hollywood Studios.",source_ids:["src-001","src-019"]},{restaurant_id:"food-022",name:"Woody's Lunch Box",normalized_name:"woodys lunch box",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"hollywood-studios",park_area:"Toy Story Land",shopping_center:null,address:"Disney's Hollywood Studios, Lake Buena Vista, FL 32830",latitude:28.3551,longitude:-81.5627,cuisine_types:["Lanches Nostálgicos","Totchos","Tortinhas Caseiras"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner","snack"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Opção Vegetariana"],accessibility_information:"Balcão externo acessível",official_url:"https://disneyworld.disney.go.com/dining/hollywood-studios/woodys-lunch-box/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Quiosque temático montado dentro da lancheira gigante do Andy em Toy Story Land, servindo os famosos Totchos (batatas tater tots cobertas de queijo e chili) e Lunch Box Tarts.",tips:"Use sempre Mobile Order pelo app My Disney Experience com antecedência de pelo menos 30 minutos, pois as filas físicas na área são imensas.",source_ids:["src-001","src-009"]},{restaurant_id:"food-023",name:"Hollywood & Vine",normalized_name:"hollywood and vine",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"hollywood-studios",park_area:"Echo Lake",shopping_center:null,address:"Disney's Hollywood Studios, Lake Buena Vista, FL 32830",latitude:28.3568,longitude:-81.5583,cuisine_types:["Buffet Americano","Carnes Assadas","Comida para Crianças"],service_type:"buffet",meal_types:["breakfast","lunch","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Disney Junior (no café)","Minnie, Mickey, Donald, Margarida e Pateta (almoço/jantar)"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Opções Sem Alérgenos"],accessibility_information:"Totalmente acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/hollywood-studios/hollywood-and-vine/",reservation_url:"https://disneyworld.disney.go.com/dining/hollywood-studios/hollywood-and-vine/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Buffet com duas experiências distintas: café da manhã animado com personagens do Disney Junior e almoço/jantar com o 'Minnie's Seasonal Dining', com trajes sazonais que mudam conforme a época do ano.",tips:"Pode ser reservado em conjunto com o Fantasmic! Dining Package para garantir voucher de assentos VIP no show noturno Fantasmic! sem fila extra.",source_ids:["src-008"]},{restaurant_id:"food-024",name:"Tusker House Restaurant",normalized_name:"tusker house restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"animal-kingdom",park_area:"África (Vila de Harambe)",shopping_center:null,address:"Disney's Animal Kingdom, Lake Buena Vista, FL 32830",latitude:28.3585,longitude:-81.5921,cuisine_types:["Africana & Internacional","Buffet Completo","Frutas Tropicais & Curries"],service_type:"buffet",meal_types:["breakfast","lunch","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Pato Donald de Safári","Mickey","Margarida","Pateta"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Vegano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/animal-kingdom/tusker-house-restaurant/",reservation_url:"https://disneyworld.disney.go.com/dining/animal-kingdom/tusker-house-restaurant/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Mercado africano colorido em Harambe com buffet diversificado de carnes assadas, cuscuz marroquino, pães artesanais com chutneys e a turma de Donald vestida com trajes de safári.",tips:"O café da manhã é uma das melhores refeições com personagens da Disney por combinar clássicos americanos com opções exóticas deliciosas.",source_ids:["src-008"]},{restaurant_id:"food-025",name:"Satu'li Canteen",normalized_name:"satuli canteen",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"animal-kingdom",park_area:"Pandora — The World of Avatar",shopping_center:null,address:"Disney's Animal Kingdom, Lake Buena Vista, FL 32830",latitude:28.3567,longitude:-81.5938,cuisine_types:["Bowls Saudáveis Customizados","Grelhados Frescos","Bao Buns"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Vegano","Sem Glúten","Low-Carb"],accessibility_information:"Totalmente acessível",official_url:"https://disneyworld.disney.go.com/dining/animal-kingdom/satuli-canteen/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Ampla base de pesquisa da RDA convertida em refeitório pacífico em Pandora. Considerado por muitos o melhor restaurante quick-service de toda a Disney World.",tips:"Monte o bowl escolhendo sua base (arroz com grãos, batata doce ou salada), proteína (frango marinado, rosbife ou tofu) e molho (chimichurri de ervas frescas ou vinaigrette de cebola chamuscada).",source_ids:["src-009"]},{restaurant_id:"food-026",name:"Tiffins Restaurant",normalized_name:"tiffins restaurant",operator:"disney",location_type:"in_park",resort:"Walt Disney World Resort",park:"animal-kingdom",park_area:"Discovery Island",shopping_center:null,address:"Disney's Animal Kingdom, Lake Buena Vista, FL 32830",latitude:28.3572,longitude:-81.5908,cuisine_types:["Culinária Global de Autor","Africana, Asiática e Latina","Alta Gastronomia"],service_type:"fine_dining",meal_types:["lunch","dinner"],price_category:"$$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/animal-kingdom/tiffins/",reservation_url:"https://disneyworld.disney.go.com/dining/animal-kingdom/tiffins/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Inspirado nos diários de viagens dos criadores do Animal Kingdom pela Ásia, África e América do Sul. Galeria de arte com pratos autorais que rivalizam com restaurantes estrelados.",tips:"O pão naan acompanhado por 3 molhos artesanais e o polvo grelhado são lendários. O lounge anexo Nomad Lounge é excelente para um drink relaxante sem reserva.",source_ids:["src-010"]},{restaurant_id:"food-027",name:"‘Ohana",normalized_name:"ohana",operator:"disney",location_type:"resort_hotel",resort:"Disney's Polynesian Village Resort",park:null,park_area:null,shopping_center:null,address:"1600 Seven Seas Dr, Lake Buena Vista, FL 32830",latitude:28.4061,longitude:-81.5855,cuisine_types:["Polinésia & Havaiana","Churrasco no Espeto","Café com Personagens"],service_type:"table_service",meal_types:["breakfast","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Lilo","Stitch","Mickey Havaiano","Pluto (apenas café da manhã)"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/polynesian-resort/ohana/",reservation_url:"https://disneyworld.disney.go.com/dining/polynesian-resort/ohana/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Café da manhã familiar com Lilo & Stitch no resort polinésio e jantar com rodízio servido à mesa de espetos de carne, frango, camarão e o famoso macarrão 'Ohana Noodles.",tips:"À noite, as luzes se apagam e a música do show de fogos do Magic Kingdom é transmitida nas caixas de som com vista privilegiada para o Castelo sobre o lago Seven Seas Lagoon.",source_ids:["src-008"]},{restaurant_id:"food-028",name:"Cape May Cafe",normalized_name:"cape may cafe",operator:"disney",location_type:"resort_hotel",resort:"Disney's Beach Club Resort",park:null,park_area:null,shopping_center:null,address:"1800 Epcot Resorts Blvd, Lake Buena Vista, FL 32830",latitude:28.3705,longitude:-81.5545,cuisine_types:["Buffet Americano Praiano","Waffles do Mickey","Frutos do Mar (noite)"],service_type:"buffet",meal_types:["breakfast","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!0,characters:["Minnie Mouse","Donald","Margarida","Pateta em trajes praianos (somente no café)"],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://disneyworld.disney.go.com/dining/beach-club-resort/cape-may-cafe/",reservation_url:"https://disneyworld.disney.go.com/dining/beach-club-resort/cape-may-cafe/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Café da manhã animado com a turma de Minnie em trajes de banho praianos clássicos em hotel vizinho ao EPCOT. À noite, o buffet converte-se em festim de frutos do mar da Nova Inglaterra.",tips:"Fica a uma curta caminhada do International Gateway do EPCOT e do Disney Skyliner, ideal para quem vai emendar o parque logo cedo.",source_ids:["src-008"]},{restaurant_id:"food-029",name:"Three Bridges Bar & Grill at Villa del Lago",normalized_name:"three bridges bar and grill",operator:"disney",location_type:"resort_hotel",resort:"Disney's Coronado Springs Resort",park:null,park_area:null,shopping_center:null,address:"1000 W Buena Vista Dr, Lake Buena Vista, FL 32830",latitude:28.3619,longitude:-81.5739,cuisine_types:["Espanhola & Latino-Americana","Tapas","Hambúrguer Gourmet & Churros"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Totalmente acessível por pontes de madeira planas",official_url:"https://disneyworld.disney.go.com/dining/coronado-springs-resort/three-bridges-bar-and-grill/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante construído exatamente no centro do lago Lago Dorado sustentado por 3 pontes de madeira. Ambiente arejado à beira d’água com culinária espanhola de excelente preço.",tips:"Um dos maiores segredos bem guardados da Disney: não exige reserva formal (opera por fila virtual Walk-Up no app) e tem vista para os fogos do EPCOT.",source_ids:["src-001"]},{restaurant_id:"food-030",name:"Chef Art Smith's Homecomin'",normalized_name:"chef art smiths homecomin",operator:"independent",location_type:"disney_springs",resort:null,park:null,park_area:"The Landing",shopping_center:"Disney Springs",address:"Disney Springs The Landing, Lake Buena Vista, FL 32830",latitude:28.3708,longitude:-81.5161,cuisine_types:["Sulista Americana","Frango Frito Artesanal","Moonshine & Bolos"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$",reservation_required:!0,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.homecominkitchen.com/",reservation_url:"https://disneyworld.disney.go.com/dining/disney-springs/chef-art-smiths-homecomin/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Comandado pelo chef celebridade Art Smith (ex-chef particular de Oprah Winfrey), serve comida caseira do sul dos Estados Unidos (comfort food) com frango marinado por 24 horas.",tips:"O prato Art’s Famous Fried Chicken com donuts caseiros e purê de batatas é uma unanimidade de sabor. Reserve no primeiro minuto de abertura da janela.",source_ids:["src-005","src-010"]},{restaurant_id:"food-031",name:"The Boathouse",normalized_name:"the boathouse",operator:"independent",location_type:"disney_springs",resort:null,park:null,park_area:"The Landing",shopping_center:"Disney Springs",address:"Disney Springs The Landing, Lake Buena Vista, FL 32830",latitude:28.3712,longitude:-81.5173,cuisine_types:["Frutos do Mar Nobres","Carnes Grelhadas (Steakhouse)","Ostras Frescas"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Sem Glúten","Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://theboathouseorlando.com/",reservation_url:"https://theboathouseorlando.com/reservations/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante naval sofisticado à beira da lagoa de Disney Springs, com barcos de coleção e os famosos carros anfíbios vintage (Amphicars) que navegam na água.",tips:"Mesmo quando não há reservas no app da Disney, o site OpenTable frequentemente possui mesas disponíveis para o The Boathouse!",source_ids:["src-005"]},{restaurant_id:"food-032",name:"Gideon's Bakehouse",normalized_name:"gideons bakehouse",operator:"independent",location_type:"disney_springs",resort:null,park:null,park_area:"The Landing",shopping_center:"Disney Springs",address:"Disney Springs The Landing, Lake Buena Vista, FL 32830",latitude:28.3705,longitude:-81.5165,cuisine_types:["Cookies Artesanais Gigantes","Cafés Gelados Especiais","Bolos"],service_type:"kiosk_snack",meal_types:["snack"],price_category:"$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano"],accessibility_information:"Entrada acessível",official_url:"https://gideonsbakehouse.com/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Famosa por cookies artesanais de quase 250 gramas cada, assados lentamente por 24 horas e repletos de gotas de chocolate. Decoração gótica vitoriana imersiva.",tips:"A fila física costuma passar de 1 a 2 horas. Chegue no início da manhã para entrar na fila virtual presencial com um atendente na porta.",source_ids:["src-005"]},{restaurant_id:"food-033",name:"Three Broomsticks",normalized_name:"three broomsticks",operator:"universal",location_type:"in_park",resort:"Universal Orlando Resort",park:"islands-of-adventure",park_area:"The Wizarding World of Harry Potter — Hogsmeade",shopping_center:null,address:"Universal Islands of Adventure, Orlando, FL 32819",latitude:28.4727,longitude:-81.4735,cuisine_types:["Britânica Tradicional","Shepherd’s Pie & Ribs","Cerveja Amanteigada"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/things-to-do/dining/three-broomsticks",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"A taberna Três Vassouras de Hogsmeade, com arquitetura torta de madeira e pratos britânicos autênticos como Fish & Chips, costelinhas defumadas e cerveja amanteigada gelada.",tips:"O Great Feast é uma travessa imensa que alimenta 4 pessoas com frango assado, costela, espigas de milho e batatas por um excelente valor em grupo.",source_ids:["src-007"]},{restaurant_id:"food-034",name:"Mythos Restaurant",normalized_name:"mythos restaurant",operator:"universal",location_type:"in_park",resort:"Universal Orlando Resort",park:"islands-of-adventure",park_area:"The Lost Continent",shopping_center:null,address:"Universal Islands of Adventure, Orlando, FL 32819",latitude:28.4718,longitude:-81.4717,cuisine_types:["Mediterrânea & Internacional","Frutos do Mar","Carnes & Risotos"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/things-to-do/dining/mythos-restaurant",reservation_url:"https://www.universalorlando.com/web/en/us/things-to-do/dining/mythos-restaurant",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Premiado repetidas vezes como o melhor restaurante de parque temático do mundo. Construído dentro de uma caverna marinha esculpida com figuras mitológicas gregas e vista para o lago.",tips:"Reserve pelo app oficial da Universal ou presencialmente logo pela manhã na entrada do restaurante.",source_ids:["src-007","src-010"]},{restaurant_id:"food-035",name:"Leaky Cauldron",normalized_name:"leaky cauldron",operator:"universal",location_type:"in_park",resort:"Universal Orlando Resort",park:"universal-studios",park_area:"The Wizarding World of Harry Potter — Diagon Alley",shopping_center:null,address:"Universal Studios Florida, Orlando, FL 32819",latitude:28.4792,longitude:-81.4695,cuisine_types:["Britânica Tradicional","Tortas de Carne","Café da Manhã Inglês"],service_type:"quick_service",meal_types:["breakfast","lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/things-to-do/dining/leaky-cauldron",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"O pub Caldeirão Furado no Beco Diagonal, com o caldeirão de verdade fervilhando na lareira e pratos clássicos como Cottage Pie, Bangers and Mash e suco de abóbora.",tips:"Chegue um pouco antes do horário de pico do almoço (11h45) para encontrar mesas livres sob os tetos altos góticos.",source_ids:["src-006"]},{restaurant_id:"food-036",name:"Finnegan's Bar & Grill",normalized_name:"finnegans bar and grill",operator:"universal",location_type:"in_park",resort:"Universal Orlando Resort",park:"universal-studios",park_area:"New York",shopping_center:null,address:"Universal Studios Florida, Orlando, FL 32819",latitude:28.4781,longitude:-81.4708,cuisine_types:["Pub Irlandês Tradicional","Fish & Chips","Chopes Importados"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Vegetariano"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/things-to-do/dining/finnegans-bar-grill",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Pub irlandês autêntico no coração de New York em USF, com música ao vivo típica, balcão de madeira nobre e pratos clássicos como carne enlatada com repolho e torta de pastor.",tips:"Excelente ponto de refúgio climatizado para descansar os pés à tarde com uma cerveja gelada ou almoço completo.",source_ids:["src-006"]},{restaurant_id:"food-037",name:"Toadstool Cafe",normalized_name:"toadstool cafe",operator:"universal",location_type:"in_park",resort:"Universal Epic Universe",park:"epic-universe",park_area:"Super Nintendo World",shopping_center:null,address:"Universal Epic Universe, Orlando, FL 32819",latitude:28.4515,longitude:-81.4421,cuisine_types:["Temática Divertida Nintendo","Hambúrgueres & Sopas de Cogumelo","Sobremesas Lúdicas"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!0,character_dining:!1,characters:["Chef Toad (nas telas interativas)"],dining_plan_eligibility:!1,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Totalmente acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/theme-parks/epic-universe",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante principal de Super Nintendo World dentro de um cogumelo gigante onde o Chef Toad cozinha pratos lúdicos exibidos em janelas panorâmicas do Reino dos Cogumelos.",tips:"Exige agendamento de horário de retorno via QR code logo na entrada da terra pela manhã cedo nos dias de alta visitação.",source_ids:["src-001"]},{restaurant_id:"food-038",name:"Das Stakehaus",normalized_name:"das stakehaus",operator:"universal",location_type:"in_park",resort:"Universal Epic Universe",park:"epic-universe",park_area:"Dark Universe",shopping_center:null,address:"Universal Epic Universe, Orlando, FL 32819",latitude:28.4528,longitude:-81.4435,cuisine_types:["Carnes & Espetos Góticos","Churrasco Europeu","Cervejas Artesanais"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Opção Vegetariana"],accessibility_information:"Acessível para cadeirantes",official_url:"https://www.universalorlando.com/web/en/us/theme-parks/epic-universe",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante temático gótico dos servos dos vampiros em Dark Universe, construído sobre catacumbas antigas servindo carnes assadas e pratos fortes.",tips:"A ambientação com estacas de madeira e esculturas de morcegos é impressionante e super imersiva.",source_ids:["src-001"]},{restaurant_id:"food-039",name:"Sharks Underwater Grill",normalized_name:"sharks underwater grill",operator:"seaworld",location_type:"in_park",resort:"SeaWorld Orlando",park:"seaworld",park_area:"Shark Realm",shopping_center:null,address:"7007 SeaWorld Dr, Orlando, FL 32821",latitude:28.4112,longitude:-81.4615,cuisine_types:["Frutos do Mar Nobres","Carnes Grelhadas","Menu Infantil"],service_type:"table_service",meal_types:["lunch","dinner"],price_category:"$$$",reservation_required:!1,reservation_recommended:!0,mobile_order_available:!1,character_dining:!1,characters:[],dining_plan_eligibility:!1,dietary_options:["Vegetariano","Sem Glúten"],accessibility_information:"Acessível para cadeirantes",official_url:"https://seaworld.com/orlando/dining/sharks-underwater-grill/",reservation_url:"https://seaworld.com/orlando/dining/sharks-underwater-grill/",operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Restaurante requintado com paredes de vidro do chão ao teto voltadas para um aquário panorâmico onde tubarões de várias espécies e arraias nadam tranquilamente ao lado das mesas.",tips:"Excelente fuga do calor do SeaWorld. Se desejar almoçar, faça a reserva presencial assim que o parque abrir diretamente na recepção do restaurante.",source_ids:["src-001"]},{restaurant_id:"food-040",name:"Voyager's Smokehouse",normalized_name:"voyagers smokehouse",operator:"seaworld",location_type:"in_park",resort:"SeaWorld Orlando",park:"seaworld",park_area:"Waterfront",shopping_center:null,address:"7007 SeaWorld Dr, Orlando, FL 32821",latitude:28.4095,longitude:-81.4608,cuisine_types:["Churrasco Americano (BBQ)","Costela Defumada","Frango e Brisket"],service_type:"quick_service",meal_types:["lunch","dinner"],price_category:"$$",reservation_required:!1,reservation_recommended:!1,mobile_order_available:!0,character_dining:!1,characters:[],dining_plan_eligibility:!0,dietary_options:["Opção Vegetariana"],accessibility_information:"Totalmente acessível",official_url:"https://seaworld.com/orlando/dining/voyagers-smokehouse/",reservation_url:null,operational_status:"confirmed",last_verified_at:"2026-10-08",visibility:"active",short_description:"Churrascaria estilo cafeteria no SeaWorld onde as carnes são defumadas lentamente ao vivo em lenha de nogueira, produzindo um aroma irresistível por todo o parque.",tips:"É elegível para o plano All Day Dining Deal do SeaWorld, o que o torna uma das escolhas mais vantajosas de custo-benefício do dia.",source_ids:["src-001"]}],na=ra,la=ia,da=[{evidence_id:"ev-001",restaurant_id:"food-001",source_id:"src-011",field_name:"editorial_recommendation",extracted_value:"Earl of Sandwich - sanduíches e sopa de tomate",source_excerpt_short:"Famoso pelo sanduíche The Original 1762 e sopa de tomate com croutons.",source_published_at:"2016-08-10",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-002",restaurant_id:"food-002",source_id:"src-012",field_name:"editorial_recommendation",extracted_value:"Perkins - café da manhã e pratos econômicos",source_excerpt_short:"Excelente para quem quer comer bem gastando pouco fora dos parques.",source_published_at:"2015-04-12",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-003",restaurant_id:"food-003",source_id:"src-013",field_name:"operational_closure",extracted_value:"Encerramento reportado em setembro de 2025",source_excerpt_short:"Restaurante brasileiro tradicional encerrou suas atividades.",source_published_at:"2025-09-15",verified_at:"2026-10-08",verification_method:"user_reported",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-004",restaurant_id:"food-004",source_id:"src-014",field_name:"editorial_recommendation",extracted_value:"Panera Bread - padaria, sopas e saladas",source_excerpt_short:"Opção leve e rápida para café da manhã ou refeições econômicas.",source_published_at:"2016-01-20",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-005",restaurant_id:"food-005",source_id:"src-015",field_name:"editorial_recommendation",extracted_value:"Olive Garden - massas e salada à vontade",source_excerpt_short:"Clássico para famílias brasileiras com sopa/salada e pães ilimitados.",source_published_at:"2015-09-10",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-006",restaurant_id:"food-006",source_id:"src-016",field_name:"editorial_recommendation",extracted_value:"Five Guys - cheeseburger e batata frita em óleo de amendoim",source_excerpt_short:"Hambúrguer artesanal montado na hora com batatas fartas.",source_published_at:"2015-07-22",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-007",restaurant_id:"food-007",source_id:"src-017",field_name:"editorial_recommendation",extracted_value:"Panda Express - comida chinesa americana rápida",source_excerpt_short:"Orange chicken e noodles com porções generosas e preço baixo.",source_published_at:"2016-03-05",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-008",restaurant_id:"food-008",source_id:"src-018",field_name:"editorial_recommendation",extracted_value:"Pizza Bruno - pizza napolitana em Orlando",source_excerpt_short:"Destaque no guia das 5 melhores pizzas de Orlando.",source_published_at:"2019-11-14",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-009",restaurant_id:"food-009",source_id:"src-018",field_name:"editorial_recommendation",extracted_value:"Via Napoli - autêntica pizza napolitana no EPCOT",source_excerpt_short:"Fornos a lenha batizados com nomes de vulcões italianos.",source_published_at:"2019-11-14",verified_at:"2026-10-08",verification_method:"editorial_review",confidence_level:"high",review_status:"approved"},{evidence_id:"ev-010",restaurant_id:"food-013",source_id:"src-019",field_name:"official_locator",extracted_value:"Chick-fil-A - unidades na Flórida",source_excerpt_short:"Localizador oficial de restaurantes Chick-fil-A na Flórida.",source_published_at:"2026-01-01",verified_at:"2026-10-08",verification_method:"official_site",confidence_level:"high",review_status:"approved"}],Ae={schema_version:"1.0.0",generated_on:"2026-10-08"},ie="orlando_planner_dining_favorites",J="orlando_planner_scheduled_meals";class ca{constructor(){A(this,"restaurants",[...na]);A(this,"sources",[...la]);A(this,"evidences",[...da]);A(this,"memoryStore",new Map);this.ensureInitialized()}getItem(e){if(typeof window<"u"&&typeof window.localStorage<"u")try{return localStorage.getItem(e)}catch{return this.memoryStore.get(e)||null}return this.memoryStore.get(e)||null}setItem(e,a){if(typeof window<"u"&&typeof window.localStorage<"u")try{localStorage.setItem(e,a);return}catch{}this.memoryStore.set(e,a)}clearStorage(){if(this.memoryStore.clear(),typeof window<"u"&&typeof window.localStorage<"u")try{localStorage.removeItem(ie),localStorage.removeItem(J)}catch{}}ensureInitialized(){this.getItem(ie)||this.setItem(ie,JSON.stringify([])),this.getItem(J)||this.setItem(J,JSON.stringify([]))}getAllRestaurants(e=!1){return e?[...this.restaurants]:this.restaurants.filter(a=>a.visibility==="active")}getRestaurantById(e){return this.restaurants.find(a=>a.restaurant_id===e)}getSources(){return[...this.sources]}getSourceById(e){return this.sources.find(a=>a.source_id===e)}getEvidencesForRestaurant(e){return this.evidences.filter(a=>a.restaurant_id===e)}filterRestaurants(e){const a=this.getFavorites();return this.restaurants.filter(s=>{var t,o,l,c,n;if(s.visibility==="historical_only"&&!((t=e.searchQuery)!=null&&t.trim()))return!1;if(e.searchQuery&&e.searchQuery.trim()!==""){const g=e.searchQuery.toLowerCase().trim(),p=s.name.toLowerCase().includes(g),f=((o=s.park)==null?void 0:o.toLowerCase().includes(g))??!1,r=((l=s.park_area)==null?void 0:l.toLowerCase().includes(g))??!1,d=((c=s.resort)==null?void 0:c.toLowerCase().includes(g))??!1,v=s.cuisine_types.some(w=>w.toLowerCase().includes(g)),u=s.short_description.toLowerCase().includes(g),m=s.characters.some(w=>w.toLowerCase().includes(g));if(!p&&!f&&!r&&!d&&!v&&!u&&!m)return!1}if(e.categoryTab&&e.categoryTab!=="all")switch(e.categoryTab){case"in_park":if(s.location_type!=="in_park")return!1;break;case"disney_springs":if(s.location_type!=="disney_springs")return!1;break;case"citywalk":if(s.location_type!=="citywalk")return!1;break;case"resort_hotel":if(s.location_type!=="resort_hotel")return!1;break;case"off_park":if(s.location_type!=="off_park")return!1;break;case"economic":if(s.price_category!=="$"&&s.service_type!=="quick_service")return!1;break;case"character_dining":if(!s.character_dining)return!1;break;case"coffee_dessert":const g=s.meal_types.includes("snack")||s.service_type==="kiosk_snack",p=s.cuisine_types.some(f=>/doces|café|padaria|sorvetes|confeitaria|lanches/i.test(f));if(!g&&!p)return!1;break;case"favorites":if(!a.includes(s.restaurant_id))return!1;break}return!(e.locationType&&e.locationType!=="all"&&s.location_type!==e.locationType||e.park&&e.park!=="all"&&((n=s.park)==null?void 0:n.toLowerCase())!==e.park.toLowerCase()||e.mealType&&e.mealType!=="all"&&!s.meal_types.includes(e.mealType)||e.serviceType&&e.serviceType!=="all"&&s.service_type!==e.serviceType||e.priceCategory&&e.priceCategory!=="all"&&s.price_category!==e.priceCategory||e.cuisine&&e.cuisine!=="all"&&!s.cuisine_types.some(g=>{var p;return g.toLowerCase()===((p=e.cuisine)==null?void 0:p.toLowerCase())})||e.characterDiningOnly&&!s.character_dining||e.reservationRequiredOnly&&!s.reservation_required||e.vegetarianOnly&&!s.dietary_options.some(p=>/vegetariano|vegano|plant-based/i.test(p))||e.confirmedOnly&&s.operational_status!=="confirmed"||e.favoritesOnly&&!a.includes(s.restaurant_id))})}getFavorites(){try{const e=this.getItem(ie);return e?JSON.parse(e):[]}catch{return[]}}isFavorite(e){return this.getFavorites().includes(e)}toggleFavorite(e){const a=this.getFavorites(),s=a.indexOf(e);let t=!1;s>=0?(a.splice(s,1),t=!1):(a.push(e),t=!0);try{this.setItem(ie,JSON.stringify(a))}catch(o){console.error("Erro ao salvar favoritos:",o)}return t}getScheduledMeals(e){try{const a=this.getItem(J),s=a?JSON.parse(a):[];return e?s.filter(t=>t.trip_id===e):s}catch{return[]}}getMealsForDate(e,a){return this.getScheduledMeals(a).filter(t=>t.visit_date===e)}addMeal(e){const a=this.getScheduledMeals(),s={...e,meal_id:`meal-${Date.now()}-${Math.random().toString(36).substr(2,6)}`,created_at:new Date().toISOString()};a.push(s);try{this.setItem(J,JSON.stringify(a))}catch(t){console.error("Erro ao salvar refeição agendada:",t)}return s}updateMeal(e,a){const s=this.getScheduledMeals(),t=s.findIndex(l=>l.meal_id===e);if(t===-1)return;const o={...s[t],...a,meal_id:s[t].meal_id,created_at:s[t].created_at};s[t]=o;try{this.setItem(J,JSON.stringify(s))}catch(l){console.error("Erro ao atualizar refeição:",l)}return o}removeMeal(e){const a=this.getScheduledMeals(),s=a.filter(t=>t.meal_id!==e);if(s.length===a.length)return!1;try{return this.setItem(J,JSON.stringify(s)),!0}catch(t){return console.error("Erro ao remover refeição:",t),!1}}getSuggestionsForDay(e,a,s){var _;const t=[],o=this.getAllRestaurants(!1),l=(a||"").toLowerCase().trim(),c=l.includes("magic kingdom"),n=l.includes("epcot"),g=l.includes("hollywood studios"),p=l.includes("animal kingdom"),f=l.includes("universal studios"),r=l.includes("islands of adventure"),d=l.includes("epic universe"),v=l.includes("volcano bay"),u=l.includes("seaworld"),m=l.includes("busch gardens"),w=l.includes("compras")||l.includes("descanso")||l.includes("chegada")||l.includes("partida")||!a;for(const b of o){if(s&&!b.meal_types.includes(s))continue;let x=!1,y="",h=50;c&&b.park==="Magic Kingdom"?(x=!0,h=95,b.service_type==="quick_service"?y="Opção de refeição rápida dentro do Magic Kingdom, ideal para manter o fluxo de atrações sem perda de tempo.":b.character_dining?y="Experiência mágica com personagens dentro do parque (reserva com 60 dias de antecedência altamente recomendada).":y="Restaurante temático com serviço de mesa excelente para descanso climatizado no Magic Kingdom."):c&&b.location_type==="resort_hotel"&&((_=b.resort)!=null&&_.includes("Polynesian"))?(x=!0,h=80,y="Apenas uma viagem de monorail do Magic Kingdom; clássico havaiano muito procurado para o jantar."):n&&b.park==="EPCOT"?(x=!0,h=95,y=`Destaque gastronômico no World Showcase / Discovery do EPCOT (${b.cuisine_types.join(", ")}).`):g&&b.park==="Disney's Hollywood Studios"?(x=!0,h=95,y="Restaurante imersivo dentro do Hollywood Studios, perfeito para pausa antes dos shows noturnos."):p&&b.park==="Disney's Animal Kingdom"?(x=!0,h=95,y="Localizado no Animal Kingdom com sabores autênticos e opções saudáveis e rápidas."):f&&(b.park==="Universal Studios Florida"||b.location_type==="citywalk")?(x=!0,h=b.park?95:85,y=b.park?"Localizado dentro do Universal Studios Florida, ideal para refeição temática sem sair da área.":"No Universal CityWalk, a poucos passos da saída do parque, perfeito para almoço tardio ou jantar."):r&&(b.park==="Universal's Islands of Adventure"||b.location_type==="citywalk")?(x=!0,h=b.park?95:85,y=b.park?"Dentro do Islands of Adventure, referência gastronômica do parque.":"No CityWalk, trajeto a pé imediato ao lado do portal do Islands of Adventure."):d&&b.park==="Universal Epic Universe"?(x=!0,h=95,y="Localizado no novíssimo Epic Universe, ambiente imersivo de última geração."):v&&(b.park==="Universal Volcano Bay"||b.location_type==="citywalk")?(x=!0,h=90,y="Opção gastronômica próxima para o dia no parque aquático Volcano Bay."):u&&b.park==="SeaWorld Orlando"?(x=!0,h=95,y="Dentro do SeaWorld Orlando, permitindo recarregar energias entre as montanhas-russas."):m&&b.park==="Busch Gardens Tampa Bay"?(x=!0,h=90,y="Opção prática para o dia de visita a Tampa no Busch Gardens."):w&&(b.location_type==="disney_springs"||b.location_type==="off_park")&&(x=!0,h=90,y=b.location_type==="disney_springs"?"Excelente para o dia de compras/descanso em Disney Springs, com ambiente agradável para passear e comer.":"Opção externa econômica e tradicional da rota de compras e International Drive em Orlando."),x&&t.push({restaurant_id:b.restaurant_id,restaurant_name:b.name,meal_type:s||b.meal_types[0],reason_summary:y,is_partial_recommendation:b.operational_status!=="confirmed",requires_advance_reservation:b.reservation_required||b.reservation_recommended,convenience_score:h})}return t.sort((b,x)=>x.convenience_score-b.convenience_score).slice(0,8)}getAuditSummary(){const e=this.sources.length,a=this.sources.map(f=>f.canonical_url),s=this.sources.filter(f=>f.crawl_status==="discovered"||f.crawl_status==="fetched").length,t=this.sources.filter(f=>f.crawl_status==="failed").length,o=this.restaurants.length,l=this.restaurants.filter(f=>f.operational_status==="confirmed").length,c=this.restaurants.filter(f=>f.operational_status==="pending_confirmation").length,n=this.restaurants.filter(f=>f.operational_status==="reported_closed").length,g=new Set;let p=0;return this.restaurants.forEach(f=>{g.has(f.normalized_name)?p++:g.add(f.normalized_name)}),{sources_registered:e,discovered_urls_count:a.length,articles_found:e,articles_processed:s,errors_count:t,restaurants_identified:o,duplicates_count:p,pending_review_count:c,last_execution_date:Ae.generated_on,version:Ae.schema_version,version_diff_notes:["Ingestão inicial baseada no arquivo mestre JSON e catálogo de fontes editoriais.",`Total de ${o} estabelecimentos cadastrados com identificação de operadora e localização.`,`${l} estabelecimentos com checagem operacional preliminar e ${c} aguardando confirmação próxima à viagem em 2027.`,`${n} estabelecimentos com encerramento reportado mantidos exclusivamente como histórico.`]}}exportCatalogAsJSON(){const e={schema_version:"1.0.0",project:"ORLANDO PLANNER",feature:"Onde Comer",generated_on:new Date().toISOString().split("T")[0],scope:{travel_period:{start:"2027-05-05",end:"2027-05-23"},locale:"pt-BR",currency:"USD"},feature_flags:{where_to_eat_enabled:!0,search_enabled:!0,filters_enabled:!0,favorites_enabled:!0,add_to_itinerary_enabled:!0,show_editorial_sources:!0,show_unverified_operational_data_as_confirmed:!1,show_closed_restaurants_in_recommendations:!1},source_catalog:this.sources,restaurants:this.restaurants,evidences:this.evidences,display_rules:{restaurant_catalog_is_user_approved:!0,approval_is_not_operational_verification:!0,unknown_price_or_hours:"omit_and_label_as_not_confirmed",closed_restaurants:"historical_only",recipes:"editorial_reference_only",article_indexes:"discovery_sources_not_restaurants",chain_locations:"do_not_invent_addresses_or_branches"},audit_summary:this.getAuditSummary()};return JSON.stringify(e,null,2)}exportCatalogAsCSV(){const e=["ID","Nome","Operadora","Tipo de Localização","Parque / Resort","Tipo de Serviço","Culinária","Faixa de Preço","Personagens","Reserva Obrigatória","Status Operacional","Visibilidade","Última Verificação"],a=this.restaurants.map(s=>[`"${s.restaurant_id}"`,`"${s.name.replace(/"/g,'""')}"`,`"${s.operator}"`,`"${s.location_type}"`,`"${(s.park||s.resort||s.shopping_center||"Fora dos parques").replace(/"/g,'""')}"`,`"${s.service_type}"`,`"${s.cuisine_types.join("; ").replace(/"/g,'""')}"`,`"${s.price_category||"N/A"}"`,`"${s.character_dining?"Sim":"Não"}"`,`"${s.reservation_required?"Sim":"Não"}"`,`"${s.operational_status}"`,`"${s.visibility}"`,`"${s.last_verified_at||"Pendente"}"`]);return[e.join(","),...a.map(s=>s.join(","))].join(`
`)}exportMealsAsJSON(){const e=this.getScheduledMeals();return JSON.stringify(e,null,2)}exportMealsAsCSV(){const e=["ID","Viagem","Data","Tipo de Refeição","Horário","Restaurante","Status da Reserva","Código de Reserva","Observações"],s=this.getScheduledMeals().map(t=>[`"${t.meal_id}"`,`"${t.trip_id}"`,`"${t.visit_date}"`,`"${t.meal_type}"`,`"${t.planned_time}"`,`"${t.restaurant_name.replace(/"/g,'""')}"`,`"${t.reservation_status}"`,`"${(t.reservation_reference||"").replace(/"/g,'""')}"`,`"${(t.personal_notes||"").replace(/"/g,'""')}"`]);return[e.join(","),...s.map(t=>t.join(","))].join(`
`)}importCatalogSafely(e){let a=0,s=0,t=0;const o=new Map;return this.restaurants.forEach(l=>o.set(l.restaurant_id,l)),e.forEach(l=>{const c=o.get(l.restaurant_id);c?c.name!==l.name||c.operational_status!==l.operational_status||c.service_type!==l.service_type||c.price_category!==l.price_category?(Object.assign(c,l),s++):t++:(this.restaurants.push(l),a++)}),{added:a,updated:s,unchanged:t}}}const R=new ca;function pa(i,e,a,s,t="all"){const o=new Map;e.forEach(n=>o.set(n.id,n));const c=i.filter(n=>t==="parks"?n.activityType==="park":t==="rest"?n.activityType!=="park":!0).map(n=>{const g=n.parkId?E[n.parkId]:null,p=n.parkId?a.records[`${n.date}_${n.parkId}`]:null,f=V.getCrowdBadgeStyle((p==null?void 0:p.crowdLevel)??null),r=s.dailyResults[n.date],d=n.ticketId?o.get(n.ticketId):null,v=R.getMealsForDate(n.date),u=n.date.split("-")[2];let m="border-l-4 border-l-outline-variant",w="bg-surface-container text-outline";n.isLocked?m="border-l-4 border-l-[#c89532]":g&&(g.operator==="disney"?(m="border-l-4 border-l-primary",w="bg-primary-fixed text-on-primary-fixed"):g.operator==="universal"?(m="border-l-4 border-l-[#2563a6]",w="bg-[#ccdfff] text-[#001c39]"):(m="border-l-4 border-l-[#007047]",w="bg-[#95f0bd] text-[#002112]"));let _="bg-surface-container text-outline";return n.effortLevel==="Pesado"?_="bg-[#ffdad6] text-[#93000a] font-medium":n.effortLevel==="Médio"?_="bg-[#ffdeaa] text-[#5f4100] font-medium":n.effortLevel==="Leve"&&(_="bg-[#9af5c2] text-[#005233] font-medium"),`
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-3 hover:border-outline-variant transition-all ${m}" data-date="${n.date}">
          <!-- Top Row: Date, Day, Lock -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-headline-sm text-[16px] font-bold text-on-surface">${n.dayOfWeek}, ${u}/05</span>
              <span class="text-[11px] px-1.5 py-0.5 rounded ${w} font-medium">
                ${g?g.shortName:n.activityType==="shopping"?"Compras":n.activityType==="arrival"?"Chegada":n.activityType==="departure"?"Partida":"Descanso"}
              </span>
            </div>

            <button 
              class="btn-toggle-lock p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-low transition-colors" 
              data-date="${n.date}" 
              title="${n.isLocked?"Data bloqueada (clique para desbloquear)":"Data livre (clique para bloquear)"}"
              type="button"
            >
              <span class="material-symbols-outlined text-[18px] ${n.isLocked?"text-[#c89532]":"text-outline-variant"}">
                ${n.isLocked?"lock":"lock_open"}
              </span>
            </button>
          </div>

          <!-- Title & Description -->
          <div class="flex flex-col gap-1 min-w-0">
            <h3 class="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug truncate" title="${n.title}">
              ${n.title}
            </h3>
            <p class="font-caption text-caption text-on-surface-variant line-clamp-2 leading-relaxed">
              ${n.description}
            </p>
          </div>

          <!-- Indicators Grid: Lotação, Fadiga, Ingresso -->
          <div class="grid grid-cols-2 gap-1.5 pt-1 text-[11px]">
            <!-- Crowd Tag -->
            <div class="px-2 py-1 rounded ${f.bgClass} ${f.textClass} border ${f.borderClass} font-medium flex items-center justify-between truncate" title="${f.label}">
              <span class="truncate">${(p==null?void 0:p.crowdLevel)!==null?`Lotação: ${p==null?void 0:p.crowdLevel}/10`:"Lotação N/D"}</span>
              ${p!=null&&p.isRecommended?'<span class="material-symbols-outlined text-[13px] text-[#27865b]">thumb_up</span>':""}
              ${p!=null&&p.isBusyDay?'<span class="material-symbols-outlined text-[13px] text-[#c44b4b]">warning</span>':""}
            </div>

            <!-- Effort / Fatigue Tag -->
            <div class="px-2 py-1 rounded ${_} font-medium flex items-center justify-between">
              <span>Esforço: ${n.effortLevel}</span>
              <span class="text-[10px] text-outline">${r?r.level:"Leve"}</span>
            </div>
          </div>

          <!-- Ticket Info -->
          <div class="text-[11px] text-on-surface-variant flex items-center justify-between pt-1 border-t border-outline-variant/20">
            <div class="flex items-center gap-1 truncate text-outline" title="${d?d.name:"Sem ingresso associado"}">
              <span class="material-symbols-outlined text-[14px]">confirmation_number</span>
              <span class="truncate">${d?d.name:n.activityType==="park"?"Ingresso não definido":"Dia Off-Park"}</span>
            </div>
          </div>

          <!-- Meals Info -->
          <div class="text-[11px] text-on-surface-variant flex items-center justify-between pt-1 border-t border-outline-variant/20">
            <div class="flex items-center gap-1 truncate ${v.length>0?"text-primary font-semibold":"text-outline"}" title="${v.length>0?v.map(b=>`${b.meal_type.toUpperCase()}: ${b.restaurant_name} (${b.planned_time})`).join(" | "):"Nenhuma refeição agendada"}">
              <span class="material-symbols-outlined text-[14px] ${v.length>0?"text-primary":"text-outline"}">restaurant</span>
              <span class="truncate">${v.length>0?`${v.length} ref.: ${v[0].restaurant_name}${v.length>1?` (+${v.length-1})`:""}`:"Sem refeição agendada"}</span>
            </div>
            <button 
              type="button" 
              class="btn-quick-add-meal text-[11px] text-primary hover:text-primary-container font-semibold flex items-center gap-0.5" 
              data-date="${n.date}"
              title="Adicionar refeição para esta data"
            >
              <span>+ Refeição</span>
            </button>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center justify-between pt-1 gap-1">
            <button 
              type="button" 
              class="btn-open-day-details text-[12px] font-medium text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1"
              data-date="${n.date}"
            >
              <span class="material-symbols-outlined text-[14px]">visibility</span>
              <span>Detalhes</span>
            </button>

            <button 
              type="button" 
              class="btn-trigger-swap text-[12px] font-medium text-on-surface-variant hover:text-on-surface px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1 ${n.isLocked?"opacity-40 cursor-not-allowed":""}"
              data-date="${n.date}"
              ${n.isLocked?"disabled":""}
              title="${n.isLocked?"Data bloqueada contra alterações":"Trocar com outro dia"}"
            >
              <span class="material-symbols-outlined text-[14px]">swap_horiz</span>
              <span>Trocar</span>
            </button>
          </div>
        </div>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Top Title & Filter Bar -->
      <section class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Meu Roteiro</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Programação dia a dia (${i.length} dias). Arraste, troque ou edite qualquer data.
          </p>
        </div>

        <!-- Filter buttons -->
        <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30">
          <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${t==="all"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-filter="all">
            Todos (${i.length})
          </button>
          <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${t==="parks"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-filter="parks">
            Parques (${i.filter(n=>n.activityType==="park").length})
          </button>
          <button class="btn-cal-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${t==="rest"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-filter="rest">
            Descanso/Compras (${i.filter(n=>n.activityType!=="park").length})
          </button>
        </div>
      </section>

      <!-- Calendar Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
        ${c}
      </section>
    </div>
  `}function ua(i,e="all",a="forecast",s="magic-kingdom",t,o=5,l=[]){var _;const c=Object.keys(E).filter(b=>e==="all"?!0:E[b].operator===e),n=pe[o]||pe[5],g=Qe(o),p=Object.values(pe).map(b=>`
        <button
          type="button"
          class="btn-select-crowd-month px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${b.month===o?"bg-primary text-on-primary shadow-xs":"bg-surface-container-low text-on-surface hover:bg-surface-container"}"
          data-month="${b.month}"
        >
          <span>${b.name} 2027</span>
          <span class="text-[10px] ml-1 opacity-80 font-label-xs-mono">(${b.avgCrowd}/10)</span>
        </button>
      `).join(""),f=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],r=new Date(`2027-${String(o).padStart(2,"0")}-01T12:00:00Z`).getUTCDay();let d="";for(let b=0;b<r;b++)d+='<div class="p-2 min-h-[60px] sm:min-h-[76px] bg-surface-container-low/20 rounded-xl border border-dashed border-outline-variant/15 opacity-30"></div>';g.forEach(b=>{const x=l.includes(b.date),y=V.getCrowdBadgeStyle(b.crowdLevel);d+=`
      <div 
        class="p-2 sm:p-2.5 min-h-[60px] sm:min-h-[76px] rounded-xl border transition-all flex flex-col justify-between cursor-pointer group hover:scale-[1.02] ${y.bgClass} ${y.borderClass} ${x?"ring-2 ring-primary shadow-sm":""}"
        title="${b.date}: Nível ${b.crowdLevel}/10 (${y.label})${x?" • Dia do seu Roteiro!":""}"
        data-date="${b.date}"
      >
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs sm:text-sm text-on-surface">${b.day}</span>
          ${x?'<span class="px-1.5 py-0.2 rounded-full bg-primary text-on-primary text-[9px] font-bold">Roteiro</span>':""}
        </div>

        <div class="flex items-end justify-between mt-1">
          <div class="flex flex-col">
            <span class="font-label-xs-mono text-xs sm:text-sm font-extrabold ${y.textClass}">
              ${b.crowdLevel}/10
            </span>
            <span class="text-[9px] text-outline font-medium hidden sm:inline-block">${b.season}</span>
          </div>
          <span class="text-[10px] sm:text-xs material-symbols-outlined ${y.textClass}">
            ${b.crowdLevel<=3?"sentiment_satisfied":b.crowdLevel<=6?"sentiment_neutral":"sentiment_very_dissatisfied"}
          </span>
        </div>
      </div>
    `});const v=l.length>0&&a==="forecast"?l:g.slice(0,15).map(b=>b.date),u=v.map(b=>{const x=b.split("-"),y=x[2],h=x[1],k=new Date(b+"T12:00:00Z"),C=f[k.getUTCDay()],T=fe[b]??null,I=V.getCrowdBadgeStyle(T);return`
        <th class="p-1.5 text-center min-w-[38px] border-r border-outline-variant/20">
          <div class="font-label-xs-mono text-[10px] uppercase text-outline">${C}</div>
          <div class="font-bold text-[13px] text-on-surface">${y}/${h}</div>
          ${T!==null?`<span class="inline-block px-1 rounded text-[10px] font-extrabold ${I.textClass} ${I.bgClass}">
                  ${T}
                </span>`:""}
        </th>
      `}).join(""),m=c.map(b=>{const x=E[b],y=v.map(h=>{const C=Me(h)[b],T=(C==null?void 0:C.crowdLevel)??null,I=V.getCrowdBadgeStyle(T);return`
            <td class="p-1 text-center border border-outline-variant/30 ${I.bgClass} hover:opacity-80 transition-opacity" title="${h}: ${x.name} — ${I.label}">
              <div class="flex flex-col items-center justify-center min-w-[34px] h-[34px]">
                <span class="font-bold text-xs ${I.textClass}">
                  ${T??"N/D"}
                </span>
                ${C!=null&&C.isRecommended?'<span class="w-1.5 h-1.5 rounded-full bg-[#27865b] mt-0.5" title="Parque Recomendado!"></span>':""}
                ${C!=null&&C.isBusyDay?'<span class="w-1.5 h-1.5 rounded-full bg-[#c44b4b] mt-0.5" title="Dia Mais Movimentado para este parque"></span>':""}
              </div>
            </td>
          `}).join("");return`
        <tr class="hover:bg-surface-container-low/40 transition-colors">
          <td class="p-3 font-body-md-medium text-xs sm:text-sm text-on-surface sticky left-0 bg-surface-container-lowest z-10 border-b border-r border-outline-variant/30 min-w-[140px] truncate">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background-color: ${x.color};"></span>
              <span class="truncate font-semibold">${x.name}</span>
            </div>
          </td>
          ${y}
        </tr>
      `}).join("");let w="";if(a==="live-queues"){const b=E[s]||E["magic-kingdom"],x=Object.values(E).map(h=>`
          <button 
            type="button" 
            class="btn-select-live-park px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${h.id===s?"bg-primary text-on-primary shadow-xs":"bg-surface-container-low text-on-surface hover:bg-surface-container"}" 
            data-park-id="${h.id}"
          >
            <span class="w-2 h-2 rounded-full" style="background-color: ${h.color};"></span>
            <span>${h.shortName}</span>
          </button>
        `).join("");let y="";if(t){const h=t.lands.map(k=>{const C=k.rides.map(T=>{let I="";return T.is_open?T.wait_time===0?I='<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">Sem Fila</span>':T.wait_time<=20?I=`<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">${T.wait_time} min</span>`:T.wait_time<=45?I=`<span class="px-2 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-bold text-[11px]">${T.wait_time} min</span>`:I=`<span class="px-2 py-0.5 rounded bg-[#fdf2f2] text-[#93000a] font-bold text-[11px]">${T.wait_time} min</span>`:I='<span class="px-2 py-0.5 rounded bg-surface-container text-outline text-[11px]">Fechado</span>',`
                <div class="flex items-center justify-between py-2 border-b border-outline-variant/15 text-xs hover:bg-surface-container-low/40 px-2 rounded transition-colors">
                  <span class="font-medium text-on-surface">${T.name}</span>
                  ${I}
                </div>
              `}).join("");return`
            <div class="bg-surface-container-lowest rounded-xl p-4 border border-outline-variant/20 shadow-2xs space-y-2">
              <h3 class="font-bold text-xs uppercase tracking-wider text-outline">${k.name}</h3>
              <div class="space-y-0.5">
                ${C||'<p class="text-xs text-outline">Nenhuma atração disponível.</p>'}
              </div>
            </div>
          `}).join("");y=`
        <div class="space-y-4">
          <!-- Summary Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-primary-fixed/40 text-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-[22px]">timer</span>
              </div>
              <div>
                <span class="text-xs text-outline block">Média de Espera</span>
                <span class="font-label-xs-mono text-xl font-extrabold text-primary">${t.avgWaitTime} min</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#ebf6f1] text-[#1b6443] flex items-center justify-center">
                <span class="material-symbols-outlined text-[22px]">attractions</span>
              </div>
              <div>
                <span class="text-xs text-outline block">Atrações Operando</span>
                <span class="font-label-xs-mono text-xl font-extrabold text-[#1b6443]">${t.openRides} / ${t.totalRides}</span>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-3 truncate">
              <div class="w-10 h-10 rounded-xl bg-[#fdf2f2] text-[#93000a] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-[22px]">hourglass_top</span>
              </div>
              <div class="min-w-0">
                <span class="text-xs text-outline block truncate">Pico de Fila Atual</span>
                <span class="font-label-xs-mono text-base font-extrabold text-[#93000a] block truncate" title="${((_=t.maxWaitRide)==null?void 0:_.name)||"—"}">
                  ${t.maxWaitRide?`${t.maxWaitRide.name}: ${t.maxWaitRide.wait_time}m`:"—"}
                </span>
              </div>
            </div>
          </div>

          <!-- Status and Refresh Header -->
          <div class="flex items-center justify-between text-xs px-1">
            <div class="flex items-center gap-2">
              ${t.isLive?`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold text-[11px]">
                      <span class="w-2 h-2 rounded-full bg-[#27865b] animate-ping"></span>
                      Ao Vivo Agora via API
                    </span>`:`<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-outline font-semibold text-[11px]">
                      <span class="w-2 h-2 rounded-full bg-outline"></span>
                      Modo Estimativa / Fila Típica
                    </span>`}
              <span class="text-outline font-label-xs-mono">Leitura: ${t.lastUpdated}</span>
            </div>

            <button type="button" id="btn-refresh-live-queues" class="px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container text-on-surface font-semibold text-xs flex items-center gap-1.5 transition-colors">
              <span class="material-symbols-outlined text-[16px]">refresh</span>
              <span>Atualizar Filas</span>
            </button>
          </div>

          <!-- Lands Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            ${h}
          </div>
        </div>
      `}else y=`
        <div class="p-12 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 space-y-3">
          <span class="material-symbols-outlined animate-spin text-primary text-[36px]">progress_activity</span>
          <p class="font-semibold text-on-surface">Carregando dados ao vivo de filas para ${b.name}...</p>
          <span class="text-xs text-outline">Conectando à API do Queue-Times.com...</span>
        </div>
      `;w=`
      <section class="space-y-4">
        <!-- Park Picker Scroll -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          ${x}
        </div>

        <!-- Live Content -->
        ${y}

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
    `}return`
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
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${a==="forecast"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-subtab="forecast">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px]">date_range</span>
              <span>Minha Viagem</span>
            </span>
          </button>
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${a==="annual-calendar"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-subtab="annual-calendar">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px]">calendar_month</span>
              <span>Calendário Mensal (12 Meses)</span>
            </span>
          </button>
          <button class="btn-crowd-subtab px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${a==="live-queues"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-subtab="live-queues">
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

      ${a==="annual-calendar"?`
      <!-- Month Picker Bar -->
      <section class="space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline">Navegar por Mês de 2027</h2>
          <span class="text-xs text-outline font-label-xs-mono">Ano Completo Disponível</span>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          ${p}
        </div>
      </section>

      <!-- Selected Month Info Banner -->
      <section class="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant/20 pb-3">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-lg sm:text-xl font-bold text-on-surface">${n.name} de 2027</h2>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${n.avgCrowd<=4.5?"bg-[#ebf6f1] text-[#1b6443]":n.avgCrowd<=6.5?"bg-[#fef7ed] text-[#8f5700]":"bg-[#fdf2f2] text-[#93000a]"}">
                Média do Mês: ${n.avgCrowd}/10
              </span>
            </div>
            <span class="text-xs text-outline font-medium mt-0.5 block">${n.season}</span>
          </div>

          <div class="flex items-center gap-3 text-xs shrink-0">
            <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
              <span class="text-[10px] text-outline block">Clima Médio</span>
              <span class="font-bold text-on-surface font-label-xs-mono">${n.tempC}</span>
            </div>
            <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-center">
              <span class="text-[10px] text-outline block">Fahrenheit</span>
              <span class="font-bold text-outline font-label-xs-mono">${n.tempF}</span>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20 text-xs flex items-start gap-2 text-on-surface">
          <span class="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">event</span>
          <div>
            <strong class="font-semibold text-primary">Eventos & Sazonalidade em ${n.name}:</strong>
            <span>${n.events}</span>
          </div>
        </div>
      </section>

      <!-- Monthly Calendar Heatmap Grid -->
      <section class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">calendar_view_month</span>
            <span>Grade Diária de Lotação — ${n.name} 2027</span>
          </h3>
          <span class="text-[11px] text-outline">Toque no dia para ver recomendações</span>
        </div>

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
          ${d}
        </div>
      </section>
      `:""}

      ${a==="forecast"||a==="annual-calendar"?`
      <!-- Filter tabs for operators -->
      <section class="flex items-center justify-between gap-4 flex-wrap pt-2">
        <div class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto">
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="all"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="all">
            Todos os Complexos (10)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="disney"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="disney">
            Disney (4)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="universal"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="universal">
            Universal (4)
          </button>
          <button class="btn-crowd-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="seaworld"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="seaworld">
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
            ${a==="forecast"?"Matriz por Parque — Dias da Sua Viagem":`Matriz por Parque — 1ª Quinzena de ${n.name}`}
          </span>
          <span class="text-outline text-[11px]">Cruzamento diário individualizado</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low/70 border-b border-outline-variant/30 text-xs text-outline font-medium">
                <th class="p-3 sticky left-0 bg-surface-container-low z-20 border-r border-outline-variant/30 min-w-[140px]">Parque</th>
                ${u}
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/20">
              ${m}
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
      `:""}

      ${a==="live-queues"?w:""}
    </div>
  `}class Pe{static evaluateParkDates(e,a,s,t){if(!E[e])return[];const l=H.calculate(a),c=s.filter(n=>n.allowedParkIds.includes(e));return a.map(n=>{const g=t.records[`${n.date}_${e}`],p=(g==null?void 0:g.crowdLevel)??null,f=(g==null?void 0:g.isRecommended)??!1,r=(g==null?void 0:g.isBusyDay)??!1,d=n.isLocked;let v={compatible:!1,ticketName:null,ticketId:null,reason:"Nenhum ingresso cadastrado cobre este parque."};if(c.length>0){const y=c[0];v={compatible:!0,ticketName:y.name,ticketId:y.id,reason:`Compatível com ${y.name}`},n.date==="2027-05-23"&&(e==="magic-kingdom"?v={compatible:!0,ticketName:"Magic Kingdom — Ingresso Avulso",ticketId:"ticket-disney-mk-single",reason:"Data travada para o encerramento da viagem com ingresso avulso."}:v={compatible:!1,ticketName:null,ticketId:null,reason:"Data bloqueada exclusivamente para Magic Kingdom (Encerramento)."})}const u=[];d&&n.parkId!==e&&u.push(`Data está bloqueada com "${n.title}".`),n.date==="2027-05-05"&&u.push("Dia reservado para voo e chegada a Orlando.");const m=l.dailyResults[n.date],w=m?m.cumulativeScore:30;let _=50;p!==null?_+=(6-p)*7:_+=0,w<40?_+=15:w>70&&(_-=20),d&&n.parkId!==e&&(_-=100),n.activityType==="park"&&n.parkId===e&&(_+=10);let b="";d&&n.parkId!==e?b="Data indisponível pois está bloqueada com compromisso prioritário.":p!==null?b=`Previsão de lotação ${p}/10 (${p<=4?"favorável":"elevada"}). Desgaste físico estimado em nível ${(m==null?void 0:m.level)||"Moderado"}.`:b=`Lotação não verificada. Nível de desgaste estimado: ${(m==null?void 0:m.level)||"Moderado"}.`;let x="Não disponível";return p!==null&&(x=`${p}/10`),{date:n.date,dayOfWeek:n.dayOfWeek,currentActivityTitle:n.title,currentActivityType:n.activityType,isDateLocked:d,crowdLevel:p,crowdLabel:x,isRecommendedByCrowd:f,isBusyDayAlert:r,ticketCompatibility:v,projectedFatigueScore:w,projectedFatigueLevel:(m==null?void 0:m.level)||"Moderado",hasConflictWithCurrentPlan:u.length>0,conflictNotes:u,overallRatingScore:Math.max(0,Math.min(100,_)),explanation:b}})}static compareDates(e,a,s,t,o){var f;const c=this.evaluateParkDates(e,s,t,o).filter(r=>a.includes(r.date));if(c.length===0)return{evaluations:[],bestCandidateDate:null,comparativeRationale:"Nenhuma data selecionada para comparação."};const n=c.filter(r=>!r.hasConflictWithCurrentPlan),g=(n.length>0?n:c).reduce((r,d)=>d.overallRatingScore>r.overallRatingScore?d:r);let p=`A data recomendada para ${((f=E[e])==null?void 0:f.name)||e} é ${g.date} (${g.dayOfWeek}). `;return g.crowdLevel!==null?p+=`Apresenta o menor índice de lotação (${g.crowdLevel}/10) e equilíbrio favorável de desgaste físico.`:p+="Apresenta melhor janela de recuperação física no planejamento atual.",{evaluations:c,bestCandidateDate:g.date,comparativeRationale:p}}}function ma(i,e,a,s,t){const o=Object.keys(E),l=E[i]||E["magic-kingdom"],c=Pe.evaluateParkDates(l.id,a,s,t),n=Pe.compareDates(l.id,e.slice(0,3),a,s,t),g=o.map(r=>`
    <option value="${r}" ${r===l.id?"selected":""}>
      ${E[r].name} (${E[r].operator==="disney"?"Disney":E[r].operator==="universal"?"Universal":"United"})
    </option>
  `).join(""),p=n.evaluations.map(r=>{const d=r.date===n.bestCandidateDate,v=V.getCrowdBadgeStyle(r.crowdLevel);return`
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border ${d?"border-primary ring-2 ring-primary/20":"border-outline-variant/30"} flex flex-col justify-between gap-4">
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-headline-sm text-lg font-bold text-on-surface">${r.date.substring(5)} (${r.dayOfWeek})</span>
                ${d?'<span class="px-2 py-0.5 rounded bg-primary text-on-primary text-[11px] font-bold">RECOMENDADO</span>':""}
              </div>
              <span class="text-xs text-outline mt-0.5 block">Programado atualmente: ${r.currentActivityTitle}</span>
            </div>

            <div class="text-right">
              <span class="font-label-xs-mono text-sm font-bold text-primary">${r.overallRatingScore} pts</span>
            </div>
          </div>

          <!-- Key Metrics -->
          <div class="space-y-2 text-xs">
            <!-- Crowd Level -->
            <div class="flex items-center justify-between p-2 rounded ${v.bgClass} border ${v.borderClass}">
              <span class="font-medium text-on-surface">Lotação Prevista:</span>
              <span class="font-bold ${v.textClass}">${r.crowdLabel}</span>
            </div>

            <!-- Fatigue -->
            <div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20">
              <span class="font-medium text-on-surface">Nível de Fadiga:</span>
              <span class="font-semibold text-on-surface">${r.projectedFatigueLevel} (${r.projectedFatigueScore}/100)</span>
            </div>

            <!-- Ticket Compatibility -->
            <div class="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20">
              <span class="font-medium text-on-surface">Ingresso:</span>
              <span class="font-semibold ${r.ticketCompatibility.compatible?"text-tertiary-container":"text-error"} truncate max-w-[150px]" title="${r.ticketCompatibility.reason}">
                ${r.ticketCompatibility.ticketName||"Incompatível"}
              </span>
            </div>
          </div>

          <!-- Explanation -->
          <p class="text-xs text-on-surface-variant bg-surface-container-low p-2.5 rounded-lg leading-relaxed">
            ${r.explanation}
          </p>

          <!-- Conflict warnings if any -->
          ${r.conflictNotes.length>0?`
            <div class="p-2 rounded bg-error-container/40 border border-error-container text-[11px] text-on-error-container flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[15px] text-error">warning</span>
              <span>${r.conflictNotes.join(" ")}</span>
            </div>
          `:""}

          <!-- Action Button -->
          <button 
            type="button" 
            class="btn-apply-candidate-date w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors flex items-center justify-center gap-1 ${r.isDateLocked?"opacity-40 cursor-not-allowed":""}"
            data-park="${l.id}"
            data-date="${r.date}"
            ${r.isDateLocked?"disabled":""}
          >
            <span class="material-symbols-outlined text-[16px]">event_repeat</span>
            <span>Mudar ${l.shortName} para esta data</span>
          </button>
        </div>
      `}).join(""),f=c.map(r=>{const d=e.includes(r.date);return`
        <label class="flex items-center gap-2 p-2 rounded-lg border border-outline-variant/30 hover:bg-surface-container-low cursor-pointer text-xs ${d?"bg-surface-container text-primary font-medium":"text-on-surface"}">
          <input type="checkbox" class="compare-date-checkbox rounded text-primary" value="${r.date}" ${d?"checked":""}>
          <span>${r.date.substring(5)} (${r.dayOfWeek})</span>
        </label>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Comparar Melhores Dias</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Avalie até três datas simultâneas para um parque e decida com base em lotação, janelas de ingressos e desgaste físico.
          </p>
        </div>

        <!-- Park select box -->
        <div class="min-w-[240px]">
          <label class="block text-xs font-semibold uppercase text-outline mb-1">Selecione o Parque</label>
          <select id="select-comparator-park" class="w-full h-10 px-3 rounded-lg border border-outline-variant/40 bg-surface-container-lowest text-on-surface font-body-md text-sm focus:border-primary focus:ring-1 focus:ring-primary">
            ${g}
          </select>
        </div>
      </section>

      <!-- Date pickers strip -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold uppercase tracking-wider text-outline">Selecione até 3 datas da viagem para comparar:</span>
          <span class="text-xs font-label-xs-mono text-primary font-bold">${e.length}/3 selecionadas</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-1.5 pt-1">
          ${f}
        </div>
      </section>

      <!-- Side-by-side comparison cards -->
      ${n.evaluations.length>0?`
        <section class="flex flex-col gap-3">
          <!-- Rationale banner -->
          <div class="bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/30 flex items-center gap-2.5 text-xs text-on-surface">
            <span class="material-symbols-outlined text-[20px] text-primary">lightbulb</span>
            <span><strong>Conclusão Analítica:</strong> ${n.comparativeRationale}</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            ${p}
          </div>
        </section>
      `:`
        <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
          <span class="material-symbols-outlined text-4xl mb-2 text-outline-variant">compare_arrows</span>
          <p class="text-sm">Selecione até 3 datas nos seletores acima para visualizar a comparação lado a lado.</p>
        </div>
      `}
    </div>
  `}function fa(i,e){const a=i.map(t=>{var p;const o=e.ticketUsages[t.id],l=o?o.usedVisits:0,c=t.totalVisitsAllowed,n=Math.min(100,Math.round(l/c*100));let g="";return t.ruleStatus==="confirmed"?g=`
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Confirmado
          </span>
        `:g=`
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Pendente de confirmação
          </span>
        `,`
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[11px] font-label-xs-mono uppercase tracking-wider text-outline block">
                  ${t.operator.toUpperCase()}
                </span>
                <h3 class="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                  ${t.name}
                </h3>
              </div>
              ${g}
            </div>

            <!-- Usage counter & Progress bar -->
            <div class="mt-4">
              <div class="flex items-center justify-between text-xs font-semibold text-on-surface mb-1">
                <span>Visitas utilizadas:</span>
                <span class="font-label-xs-mono text-primary font-bold">${l} de ${c}</span>
              </div>
              <div class="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div class="bg-primary-container h-full rounded-full transition-all" style="width: ${n}%;"></div>
              </div>
            </div>

            <!-- Ticket Specific Details -->
            <div class="mt-4 space-y-2 text-xs text-on-surface-variant">
              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Janela de Validade:</span>
                <span class="font-semibold text-on-surface">${t.validityWindowDays?`${t.validityWindowDays} dias corridos`:"Data específica"}</span>
              </div>

              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Primeiro uso / Expiração:</span>
                <span class="font-semibold text-on-surface truncate max-w-[170px]">
                  ${o!=null&&o.firstUsedDate?`${o.firstUsedDate.substring(5)} até ${((p=o.windowExpiryDate)==null?void 0:p.substring(5))||"—"}`:"Não iniciado"}
                </span>
              </div>

              <div class="flex items-center justify-between p-2 rounded bg-surface-container-low">
                <span>Repetição de Parques:</span>
                <span class="font-semibold text-on-surface">${t.allowParkRepetition?"Permitida (c/ limites)":"Não permitida (1 por parque)"}</span>
              </div>
            </div>

            <!-- Official note -->
            <p class="text-xs text-outline mt-3 leading-relaxed border-t border-outline-variant/20 pt-2.5">
              ${t.officialSourceNote}
            </p>
          </div>

          <!-- Bottom Button -->
          <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <span class="text-xs text-outline">ID: <code class="font-label-xs-mono">${t.id}</code></span>
            <button 
              type="button" 
              class="btn-edit-ticket-rules text-xs font-semibold text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors"
              data-id="${t.id}"
            >
              Ajustar Regras
            </button>
          </div>
        </div>
      `}).join(""),s=e.issues.map(t=>{let o="info",l="bg-surface-container-low",c="text-on-surface";return t.severity==="conflict"?(o="error",l="bg-[#ffdad6]",c="text-[#93000a]"):t.severity==="warning"&&(o="warning",l="bg-[#ffdeaa]/60",c="text-[#5f4100]"),`
        <div class="p-3 rounded-lg ${l} flex items-start gap-2.5 text-xs ${c}">
          <span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">${o}</span>
          <div class="flex flex-col">
            <span class="font-semibold">[${t.code}]</span>
            <span class="mt-0.5 leading-relaxed">${t.message}</span>
          </div>
        </div>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Meus Ingressos</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerenciamento e auditoria estrita de janelas de validade, limites de visitas e regras por parque.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-outline font-medium">Status Geral do Motor:</span>
          ${e.status==="valid"?'<span class="px-2.5 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold">100% Válido</span>':e.status==="warning"?'<span class="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold">Avisos Pendentes</span>':'<span class="px-2.5 py-1 rounded bg-error-container text-on-error-container text-xs font-bold">Conflito Detectado</span>'}
        </div>
      </section>

      <!-- Tickets Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
        ${a}
      </section>

      <!-- Auditoria e Alertas do Motor -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">policy</span>
            <h2 class="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider">
              Relatório de Conformidade e Auditoria
            </h2>
          </div>
          <span class="text-xs text-outline font-label-xs-mono">${e.issues.length} notas emitidas</span>
        </div>

        <div class="space-y-2">
          ${s}
        </div>
      </section>
    </div>
  `}function ga(i,e){const a=i.suggestions.map((s,t)=>`
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-start gap-3 min-w-0">
            <span class="w-6 h-6 rounded-full bg-primary-container text-on-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              ${t+1}
            </span>
            <div class="flex flex-col min-w-0">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="font-bold text-sm text-on-surface">${s.sourceDate.substring(5)}: ${s.sourceParkOrActivity}</span>
                <span class="material-symbols-outlined text-[16px] text-primary">swap_horiz</span>
                <span class="font-bold text-sm text-on-surface">${s.targetDate.substring(5)}: ${s.targetParkOrActivity}</span>
              </div>
              <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">
                ${s.justification}
              </p>
              <div class="flex items-center gap-3 mt-2 text-[11px] text-outline">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-primary">groups</span>
                  <span>${s.crowdDeltaDescription}</span>
                </span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px] text-tertiary-container">directions_walk</span>
                  <span>${s.fatigueDeltaDescription}</span>
                </span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0 self-end md:self-center">
            <label class="flex items-center gap-2 text-xs font-semibold cursor-pointer">
              <input type="checkbox" class="suggestion-toggle-checkbox w-4 h-4 rounded text-primary" data-id="${s.id}" ${s.accepted?"checked":""}>
              <span>Aceitar</span>
            </label>
          </div>
        </div>
      `).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Sugestões de Roteiro</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Motor de otimização analítica: balanceamento de esforço físico, cadência de descanso e restrições obrigatórias.
          </p>
        </div>

        <button 
          id="btn-run-optimizer" 
          class="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition-colors shadow-sm"
          type="button"
        >
          <span class="material-symbols-outlined text-[18px]">psychology</span>
          <span>Recalcular Otimização</span>
        </button>
      </section>

      <!-- Partial Optimization Note if applicable -->
      ${i.isPartialOptimization&&i.partialOptimizationNote?`
        <div class="p-4 rounded-xl bg-secondary-fixed/40 border border-secondary-fixed text-xs text-on-secondary-fixed-variant flex items-start gap-3">
          <span class="material-symbols-outlined text-[20px] text-secondary shrink-0 mt-0.5">info</span>
          <div>
            <strong class="font-semibold block mb-0.5">Otimização Parcial Ativa</strong>
            <p class="leading-relaxed">${i.partialOptimizationNote}</p>
          </div>
        </div>
      `:""}

      <!-- Score Comparison Summary -->
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Pontuação Atual</span>
          <div class="font-headline-lg text-2xl font-bold text-on-surface mt-1">${i.currentScore}/100</div>
          <span class="text-[11px] text-outline mt-0.5 block">Configuração em vigor</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Pontuação Projetada</span>
          <div class="font-headline-lg text-2xl font-bold text-primary mt-1">${i.suggestedScore}/100</div>
          <span class="text-[11px] text-tertiary-container font-semibold mt-0.5 block">
            +${Math.max(0,i.suggestedScore-i.currentScore)} pontos de eficiência
          </span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 text-center">
          <span class="text-xs uppercase text-outline font-semibold">Redução de Fadiga</span>
          <div class="font-headline-lg text-2xl font-bold text-tertiary-container mt-1">
            -${i.summary.fatigueImprovementPercent} pts
          </div>
          <span class="text-[11px] text-outline mt-0.5 block">Melhoria física cumulativa</span>
        </div>
      </section>

      <!-- Optimizer Weights Config Slider Collapsible -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
        <div class="flex items-center justify-between cursor-pointer" id="btn-toggle-weights-panel">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-outline text-[18px]">tune</span>
            <span class="text-xs font-semibold uppercase text-outline">Pesos e Critérios do Algoritmo</span>
          </div>
          <span class="text-xs text-primary font-medium">Ajustar Pesos</span>
        </div>

        <div id="weights-panel" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 mt-2 border-t border-outline-variant/20">
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Lotação: <span id="val-w-crowd" class="font-bold text-primary">${Math.round(e.crowdWeight*100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-crowd" min="0" max="100" value="${e.crowdWeight*100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Fadiga: <span id="val-w-fatigue" class="font-bold text-primary">${Math.round(e.fatigueWeight*100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-fatigue" min="0" max="100" value="${e.fatigueWeight*100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Deslocamentos: <span id="val-w-commute" class="font-bold text-primary">${Math.round(e.commuteWeight*100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-commute" min="0" max="100" value="${e.commuteWeight*100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Preferências: <span id="val-w-pref" class="font-bold text-primary">${Math.round(e.preferenceWeight*100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-pref" min="0" max="100" value="${e.preferenceWeight*100}">
          </div>
          <div>
            <label class="block text-xs text-on-surface font-medium mb-1">Flexibilidade: <span id="val-w-flex" class="font-bold text-primary">${Math.round(e.flexibilityWeight*100)}%</span></label>
            <input type="range" class="weight-slider w-full" id="slider-w-flex" min="0" max="100" value="${e.flexibilityWeight*100}">
          </div>
        </div>
      </section>

      <!-- Proposals List -->
      <section class="flex flex-col gap-3">
        <div class="flex items-center justify-between">
          <h2 class="text-sm font-bold uppercase tracking-wider text-outline">
            Alterações Estratégicas Propostas (${i.suggestions.length})
          </h2>
          ${i.suggestions.length>0?`
            <button id="btn-apply-selected-suggestions" class="px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm" type="button">
              <span class="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Aplicar Alterações Aceitas</span>
            </button>
          `:""}
        </div>

        ${i.suggestions.length>0?`<div class="space-y-3">${a}</div>`:`
          <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
            <span class="material-symbols-outlined text-4xl mb-2 text-tertiary-container">verified</span>
            <h3 class="font-semibold text-on-surface text-base">Roteiro Atual Já Otimizado</h3>
            <p class="text-xs text-outline mt-1 max-w-md mx-auto">
              O itinerário atual atende com excelência ao equilíbrio de desgaste físico, intercalação de compras e respeito obrigatório às datas travadas.
            </p>
          </div>
        `}
      </section>
    </div>
  `}function va(i,e,a){const s=i.map(t=>{const o=e.dailyResults[t.date];if(!o)return"";let l="bg-[#9af5c2] text-[#005233]";return o.level==="Crítico"?l="bg-[#ffdad6] text-[#93000a] font-bold":o.level==="Alto"?l="bg-[#ffdad6] text-[#ba1a1a] font-semibold":o.level==="Moderado"?l="bg-[#ffdeaa] text-[#5f4100]":o.level==="Descanso"&&(l="bg-surface-container text-outline"),`
        <tr class="hover:bg-surface-container-low/50 transition-colors">
          <td class="p-3 text-xs font-semibold text-on-surface">
            ${t.date.substring(5)} (${t.dayOfWeek})
          </td>
          <td class="p-3 text-xs text-on-surface font-medium truncate max-w-[160px]">
            ${t.title}
          </td>
          <td class="p-3 text-xs text-center font-label-xs-mono">
            ${o.walkKm>0?`${o.walkKm.toFixed(1)} km`:"—"}
          </td>
          <td class="p-3 text-xs text-center font-label-xs-mono">
            ${o.transitMinutes>0?`${o.transitMinutes} min`:"—"}
          </td>
          <td class="p-3 text-center">
            <span class="inline-block px-2 py-0.5 rounded text-[11px] ${l}">
              ${o.level}
            </span>
          </td>
          <td class="p-3 text-center">
            <div class="flex items-center justify-center gap-1.5">
              <div class="w-16 bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div class="h-full rounded-full ${o.cumulativeScore>75?"bg-error":o.cumulativeScore>50?"bg-secondary":"bg-tertiary-container"}" style="width: ${o.cumulativeScore}%;"></div>
              </div>
              <span class="font-label-xs-mono text-xs font-bold text-on-surface w-7">${o.cumulativeScore}</span>
            </div>
          </td>
          <td class="p-3 text-xs text-on-surface-variant max-w-[200px] truncate" title="${o.alerts.join(" ")}">
            ${o.alerts.length>0?`<span class="text-error font-medium">${o.alerts[0]}</span>`:'<span class="text-outline">Ritmo controlado</span>'}
          </td>
        </tr>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Desgaste Físico</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Monitoramento biomecânico de caminhada acumulada, impacto de deslocamentos de estrada e janelas de repouso muscular.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-outline font-medium">Esforço Médio do Roteiro:</span>
          <span class="px-2.5 py-1 rounded bg-surface-container font-label-xs-mono font-bold text-primary text-sm">
            ${e.overallFatigueScore}/100
          </span>
        </div>
      </section>

      <!-- KPI Summary Cards -->
      <section class="grid grid-cols-1 sm:grid-cols-4 gap-space-md">
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Dias de Parques</span>
          <div class="font-headline-lg text-2xl font-bold text-on-surface mt-1">${i.filter(t=>t.activityType==="park").length}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Exigem caminhada intensa</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Dias de Descanso / Compras</span>
          <div class="font-headline-lg text-2xl font-bold text-tertiary-container mt-1">${e.actualRestDaysCount}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Recuperam +${a.restDayRecoveryBonus} pts/dia</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Pico de Fadiga</span>
          <div class="font-headline-lg text-2xl font-bold text-secondary mt-1">${e.peakFatigueDay.substring(5)}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Dia com maior esforço acumulado</span>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30">
          <span class="text-xs uppercase text-outline font-semibold">Alertas Críticos</span>
          <div class="font-headline-lg text-2xl font-bold ${e.criticalAlerts.length>0?"text-error":"text-tertiary-container"} mt-1">${e.criticalAlerts.length}</div>
          <span class="text-[11px] text-outline mt-0.5 block">Pontos de atenção física</span>
        </div>
      </section>

      <!-- User Tolerance Sliders Box -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px] text-primary">fitness_center</span>
            <span class="text-xs font-bold uppercase tracking-wider text-outline">Ajuste de Tolerância e Limites Pessoais</span>
          </div>
          <span class="text-xs text-primary font-medium">Parâmetros Ativos</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label class="block text-on-surface font-medium mb-1">Máx. dias seguidos em parques: <span id="val-max-consec" class="font-bold text-primary">${a.maxConsecutiveParkDays} dias</span></label>
            <input type="range" class="w-full" id="slider-max-consec" min="1" max="5" value="${a.maxConsecutiveParkDays}">
          </div>

          <div>
            <label class="block text-on-surface font-medium mb-1">Bônus de recuperação de descanso: <span id="val-rest-bonus" class="font-bold text-primary">${a.restDayRecoveryBonus} pts</span></label>
            <input type="range" class="w-full" id="slider-rest-bonus" min="10" max="60" value="${a.restDayRecoveryBonus}">
          </div>

          <div>
            <label class="block text-on-surface font-medium mb-1">Sensibilidade física pessoal: <span id="val-tolerance" class="font-bold text-primary">${a.userToleranceMultiplier===1?"Padrão (1.0x)":`${a.userToleranceMultiplier.toFixed(1)}x`}</span></label>
            <input type="range" class="w-full" id="slider-tolerance" min="0.8" max="1.3" step="0.1" value="${a.userToleranceMultiplier}">
          </div>
        </div>
      </section>

      <!-- Detailed Breakdown Table -->
      <section class="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <div class="p-4 border-b border-outline-variant/20 flex items-center justify-between">
          <h2 class="text-xs font-bold uppercase tracking-wider text-outline">Detalhamento Diário do Impacto Físico</h2>
          <span class="text-xs text-outline">19 dias avaliados</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-surface-container-low border-b border-outline-variant/30 text-xs text-outline font-semibold">
                <th class="p-3">Data</th>
                <th class="p-3">Atividade</th>
                <th class="p-3 text-center">Caminhada Estimada</th>
                <th class="p-3 text-center">Deslocamento (Ida+Volta)</th>
                <th class="p-3 text-center">Nível</th>
                <th class="p-3 text-center">Esforço Acumulado</th>
                <th class="p-3">Diagnóstico</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/20">
              ${s}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `}function ba(i,e,a){const s=i.map(t=>{const o=t.itinerary.filter(l=>l.activityType==="park").length;return`
        <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-[20px]">bookmark</span>
            </div>
            <div>
              <h3 class="font-bold text-sm text-on-surface">${t.name}</h3>
              <span class="text-xs text-outline">${new Date(t.timestamp).toLocaleString("pt-BR")} • ${o} parques</span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button 
              type="button" 
              class="btn-restore-snapshot px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-primary transition-colors flex items-center gap-1"
              data-id="${t.id}"
            >
              <span class="material-symbols-outlined text-[15px]">restore</span>
              <span>Restaurar</span>
            </button>
            <button 
              type="button" 
              class="btn-delete-snapshot p-1.5 rounded-lg text-outline hover:text-error hover:bg-[#ffdad6]/40 transition-colors"
              data-id="${t.id}"
              title="Excluir snapshot"
            >
              <span class="material-symbols-outlined text-[16px]">delete</span>
            </button>
          </div>
        </div>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Histórico e Versões</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerencie pontos de restauração salvos, histórico de navegação e reverta alterações a qualquer momento.
          </p>
        </div>

        <div class="flex items-center gap-2">
          <button id="btn-history-undo" class="px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold text-on-surface hover:bg-surface-container disabled:opacity-40 flex items-center gap-1 transition-colors" ${e?"":"disabled"}>
            <span class="material-symbols-outlined text-[16px]">undo</span>
            <span>Desfazer</span>
          </button>
          <button id="btn-history-redo" class="px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold text-on-surface hover:bg-surface-container disabled:opacity-40 flex items-center gap-1 transition-colors" ${a?"":"disabled"}>
            <span class="material-symbols-outlined text-[16px]">redo</span>
            <span>Refazer</span>
          </button>
        </div>
      </section>

      <!-- Create Snapshot Banner -->
      <section class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <span class="material-symbols-outlined text-primary text-[24px]">save</span>
          <div>
            <h3 class="text-sm font-bold text-on-surface">Criar Ponto de Restauração</h3>
            <p class="text-xs text-outline">Salve uma fotografia do roteiro antes de fazer experimentos com trocas.</p>
          </div>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          <input 
            type="text" 
            id="input-snapshot-name" 
            placeholder="Ex: Antes da otimização" 
            class="h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-xs text-on-surface w-full sm:w-56 focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button id="btn-create-snapshot" class="h-9 px-4 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold transition-colors shrink-0 flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">add</span>
            <span>Salvar</span>
          </button>
        </div>
      </section>

      <!-- Snapshots List -->
      <section class="flex flex-col gap-3">
        <h2 class="text-xs font-bold uppercase tracking-wider text-outline">
          Pontos Salvos (${i.length})
        </h2>

        ${i.length>0?`<div class="space-y-2.5">${s}</div>`:`
          <div class="bg-surface-container-lowest rounded-xl p-8 text-center text-outline border border-outline-variant/30">
            <span class="material-symbols-outlined text-4xl mb-2 text-outline-variant">history_toggle_drop_down</span>
            <p class="text-xs">Nenhum ponto de restauração manual criado ainda. Crie um acima para guardar versões do roteiro.</p>
          </div>
        `}
      </section>

      <!-- Reset Danger Zone -->
      <section class="bg-[#ffdad6]/30 border border-[#ffdad6] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-[#ba1a1a] text-[20px] mt-0.5">restart_alt</span>
          <div>
            <h4 class="text-xs font-bold text-[#93000a]">Restaurar Roteiro Original de Fábrica</h4>
            <p class="text-xs text-on-surface-variant mt-0.5">
              Descarta todas as edições locais e redefine para a distribuição proposta inicial de 05 a 23 de maio de 2027.
            </p>
          </div>
        </div>

        <button id="btn-reset-initial" class="px-3.5 py-1.5 rounded-lg bg-[#ba1a1a] text-white hover:bg-[#93000a] text-xs font-semibold transition-colors shrink-0">
          Redefinir Tudo
        </button>
      </section>
    </div>
  `}function xa(i){const e=i.totalVerifiedDays,a=i.totalUnavailableDays;return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Configurações & Auditoria</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Gerenciamento do projeto, exportação/importação de dados e módulo administrativo de auditoria.
          </p>
        </div>
      </section>

      <!-- Grid Cards: Backup & Export -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        <!-- Card Backup JSON -->
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-primary mb-2">
              <span class="material-symbols-outlined text-[20px]">save_as</span>
              <h3 class="font-bold text-sm text-on-surface">Backup & Restauração Completa (JSON)</h3>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Exporte todos os dados da viagem (roteiro, ingressos, notas, pesos de otimização) em um único arquivo de dados com esquema versionado (v1).
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20">
            <button id="btn-export-full-json" class="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
              <span class="material-symbols-outlined text-[16px]">download</span>
              <span>Baixar Backup JSON</span>
            </button>

            <label class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">upload</span>
              <span>Importar JSON</span>
              <input type="file" id="input-import-json" accept=".json" class="hidden">
            </label>
          </div>
        </div>

        <!-- Card Export Markdown & Print -->
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-tertiary-container mb-2">
              <span class="material-symbols-outlined text-[20px]">article</span>
              <h3 class="font-bold text-sm text-on-surface">Exportação Editorial (Markdown & PDF)</h3>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Gere um documento estruturado em Markdown com a tabela completa do roteiro, estratégias de Rope Drop e dicas por parque para levar no celular ou imprimir.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant/20">
            <button id="btn-export-settings-md" class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">description</span>
              <span>Baixar Markdown</span>
            </button>

            <button id="btn-export-settings-pdf" class="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary text-xs font-semibold transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">print</span>
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Administrative Module: Crowd Data Auditor -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-4">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant/20">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-secondary text-[20px]">admin_panel_settings</span>
            <div>
              <h2 class="font-headline-sm text-sm font-bold text-on-surface uppercase tracking-wider">
                Módulo Administrativo — Importação & Auditoria de Lotação
              </h2>
              <span class="text-[11px] text-outline block">
                Regra de privacidade: A proveniência é restrita a este fluxo e não é exposta na interface do viajante.
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2 text-xs">
            <span class="px-2 py-0.5 rounded bg-surface-container text-outline font-label-xs-mono">
              ${e} verificados / ${a} nulos
            </span>
          </div>
        </div>

        <!-- Import instructions -->
        <div class="text-xs text-on-surface-variant leading-relaxed bg-surface-container-low p-3 rounded-lg border border-outline-variant/20 space-y-1">
          <p>
            <strong>Formato aceito:</strong> Arquivos JSON ou CSV com colunas: <code>date</code> (YYYY-MM-DD), <code>parkId</code>, <code>crowdLevel</code> (1-10 ou nulo), <code>isRecommended</code> (true/false), <code>isBusyDay</code> (true/false), <code>season</code>, <code>status</code>.
          </p>
          <p class="text-outline">
            Valores não informados ou ausentes permanecem estritamente nulos, sem conversão para zero.
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-wrap items-center gap-3">
          <label class="px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 shadow-sm">
            <span class="material-symbols-outlined text-[16px]">file_upload</span>
            <span>Importar CSV ou JSON de Lotação</span>
            <input type="file" id="input-import-crowd-file" accept=".json,.csv" class="hidden">
          </label>

          <button id="btn-load-benchmark-data" class="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary text-xs font-semibold transition-colors flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[16px]">science</span>
            <span>Carregar Dados Benchmark de Simulação</span>
          </button>

          <button id="btn-clear-crowd-data" class="px-3 py-2 rounded-lg text-outline hover:text-error text-xs font-medium transition-colors">
            Limpar Previsões (Retornar a Nulo)
          </button>
        </div>

        <div id="import-report-banner" class="hidden mt-2 p-3 rounded-lg text-xs"></div>
      </section>

      <!-- System Architecture Info -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 text-xs text-outline space-y-1.5">
        <h4 class="font-bold text-on-surface text-sm uppercase tracking-wider mb-2">Especificação Técnica</h4>
        <p>• <strong>Plataforma:</strong> ORLANDO PLANNER — SPA Estática otimizada para GitHub Pages</p>
        <p>• <strong>Fuso Horário Operacional:</strong> America/New_York (Datas locais imunes a distorção UTC)</p>
        <p>• <strong>Armazenamento:</strong> LocalStorage com versionamento de esquema (v1) e pilha de desfazer/refazer</p>
        <p>• <strong>Conformidade Legal:</strong> Separação hermética de metadados de scraping e modelo de apresentação do viajante</p>
      </section>
    </div>
  `}function ha(i="all"){const a=ue.filter(s=>i==="all"?!0:s.category===i).map(s=>{let t="bg-[#ebf6f1] text-[#27865b] border-[#c2e6d5]";s.priceLevel==="$$"&&(t="bg-[#fef7ed] text-[#b97820] border-[#f7dfb7]"),s.priceLevel==="$$$"&&(t="bg-surface-container text-outline border-outline-variant/40");const o=s.topBrands.map(l=>`
        <span class="inline-block px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium text-[11px]">
          ${l}
        </span>
      `).join("");return`
        <div class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-4 hover:border-outline-variant/60 transition-all">
          <div>
            <!-- Header: Title, Category & Price Level -->
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[11px] font-label-xs-mono uppercase tracking-wider text-outline block">
                  ${s.categoryLabel}
                </span>
                <h3 class="font-headline-sm text-base font-bold text-on-surface mt-0.5">
                  ${s.name}
                </h3>
                <span class="text-xs text-outline flex items-center gap-1 mt-0.5">
                  <span class="material-symbols-outlined text-[14px]">location_on</span>
                  <span>${s.distanceRegion}</span>
                </span>
              </div>

              <span class="px-2 py-0.5 rounded border text-xs font-bold ${t}">
                Preço: ${s.priceLevel}
              </span>
            </div>

            <!-- Description / Highlight -->
            <p class="text-xs text-on-surface-variant mt-3 leading-relaxed">
              ${s.highlight}
            </p>

            <!-- Brands Tags -->
            <div class="mt-3">
              <span class="text-[11px] font-semibold uppercase text-outline block mb-1.5">Lojas e Marcas em Destaque:</span>
              <div class="flex flex-wrap gap-1.5">
                ${o}
              </div>
            </div>

            <!-- Golden Saving Tip -->
            <div class="mt-3.5 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs">
              <div class="flex items-center gap-1.5 text-primary font-bold mb-1">
                <span class="material-symbols-outlined text-[16px]">savings</span>
                <span>Dica de Ouro para Pagar Menos:</span>
              </div>
              <p class="text-on-surface-variant leading-relaxed">
                ${s.savingTips}
              </p>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
            <span class="text-[11px] text-outline font-label-xs-mono truncate max-w-[220px]" title="${s.address}">
              ${s.address}
            </span>

            <button 
              type="button" 
              class="btn-plan-shopping-day px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-xs transition-colors flex items-center gap-1 shrink-0"
              data-outlet-name="${s.name}"
              data-outlet-tips="${s.savingTips}"
            >
              <span class="material-symbols-outlined text-[15px]">event_available</span>
              <span>Incluir no Roteiro</span>
            </button>
          </div>
        </div>
      `}).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title -->
      <section class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div>
          <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Guia de Outlets & Compras Econômicas</h1>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Onde comprar roupas, tênis, eletrônicos e malas pagando os menores preços em Orlando.
          </p>
        </div>

        <button id="btn-open-trip-generator-from-outlets" class="h-10 px-4 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm" type="button">
          <span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
          <span>Personalizar Roteiro por Dias</span>
        </button>
      </section>

      <!-- Category Filter Tabs -->
      <section class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto">
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i==="all"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="all">
          Todos os Locais (${ue.length})
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i==="outlet_geral"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="outlet_geral">
          Outlets de Roupas & Tênis
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i==="desconto_extremo"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="desconto_extremo">
          Preço Baixo Extremo ($5-$35)
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i==="eletronicos"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="eletronicos">
          Eletrônicos & Tech
        </button>
        <button class="btn-outlet-filter px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${i==="mercado_vitaminas"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant"}" data-filter="mercado_vitaminas">
          Mercados & Suprimentos
        </button>
      </section>

      <!-- Strategy Banner: 5 Regras de Ouro -->
      <section class="bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30">
        <div class="flex items-center gap-2 mb-3">
          <span class="material-symbols-outlined text-primary text-[22px]">lightbulb</span>
          <h2 class="text-sm font-bold uppercase tracking-wider text-on-surface">
            5 Regras de Ouro para Compras Baratas em Orlando
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-on-surface-variant">
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">1. Horário Estratégico</strong>
            <p>Vá aos Outlets e à Ross sempre pela manhã (abrem às 08h30-10h). À tarde, as lojas ficam desorganizadas e as filas de provador passam de 40 min.</p>
          </div>
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">2. Cupons VIP Simon</strong>
            <p>Cadastre-se no site da Simon Malls antes da viagem. No caixa de marcas como Nike, Tommy e Polo Ralph, mostre o cupom digital para ganhar +15% a +25% de desconto.</p>
          </div>
          <div class="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
            <strong class="text-on-surface font-semibold">3. Eletrônicos Open-Box</strong>
            <p>Na Best Buy, pergunte ou filtre por itens "Open-Box". São computadores, fones e câmeras devolvidos intactos por americanos com garantia original e 20%-35% de desconto.</p>
          </div>
        </div>
      </section>

      <!-- Cards Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        ${a}
      </section>
    </div>
  `}const be={"magic-kingdom":{id:"magic-kingdom",parkId:"magic-kingdom",parkName:"Magic Kingdom",operator:"disney",title:"Magic Kingdom — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro otimizado para o parque mais icônico do mundo com foco em atrações de alta demanda",targetAudience:"Famílias, crianças, adolescentes e fãs da Disney",estimatedDuration:"12 a 14 horas (dia completo)",ropeDropArrival:"Chegue às catracas 45 a 60 minutos antes da abertura oficial dos portões.",generalStrategy:"Faça as atrações concorridas de Frontierland e Adventureland ou Fantasyland logo cedo. Deixe shows com ar-condicionado para o calor da tarde (13h-16h) e aproveite TRON e Seven Dwarfs Mine Train no fechamento ou via fila virtual/Lightning Lane.",diningRecommendations:{quickService:["Columbia Harbour House (Liberty Square - frutos do mar e opções leves)","Pecos Bill Tall Tale Inn (Frontierland - comida mexicana e porções fartas)","Cosmic Ray's Starlight Café (Tomorrowland - clássicos e show animatrônico)"],tableService:["Be Our Guest Restaurant (Fantasyland - castelo da Fera)","Cinderella's Royal Table (refeição com princesas dentro do castelo)","Skipper Canteen (Adventureland - culinária exótica saborosa)"],snacks:["Dole Whip no Aloha Isle (Adventureland)","Cheshire Cat Tail no Cheshire Café","Cinnamon Roll no Gaston's Tavern"]},nightShow:{name:"Happily Ever After",time:"Geralmente às 20h30 ou 21h00",tip:"Posicione-se na Main Street U.S.A. cerca de 45-60 minutos antes. A melhor visão das projeções é entre a confeitaria e a estátua Partners."},steps:[{step:1,title:"Rope Drop: Frontierland & Tiana's Bayou Adventure",category:"rope_drop",description:"Vá imediatamente para a Frontierland na abertura dos portões para experimentar a emocionante Tiana's Bayou Adventure (se operando em fila convencional ou fila virtual do app) e emende com Big Thunder Mountain Railroad.",tip:"Big Thunder costuma ter menos de 15 minutos nos primeiros 30 minutos de abertura!",badge:"Essencial"},{step:2,title:"Adventureland Clássica",category:"morning",description:"Cruze para a Adventureland vizinha: Pirates of the Caribbean e Jungle Cruise.",tip:"Se a fila do Jungle Cruise já passar de 45 minutos, agende Lightning Lane ou volte durante a tarde/noite.",badge:"Imperdível"},{step:3,title:"Haunted Mansion em Liberty Square",category:"morning",description:"Caminhe até a Mansão Assombrada. O fluxo de pedestres ainda é moderado antes das 11h.",tip:"Aproveite para usar os banheiros temáticos de Tangled (Rapunzel) nas proximidades."},{step:4,title:"Fantasyland dos Clássicos",category:"morning",description:`Faça Peter Pan's Flight, "it's a small world" e Under the Sea ~ Journey of the Little Mermaid.`,tip:`Peter Pan acumula grandes filas rapidamente; priorize-o antes de "it's a small world".`},{step:5,title:"Almoço Estratégico (Quick-Service)",category:"lunch",description:"Faça Mobile Order com antecedência no Columbia Harbour House ou Pecos Bill entre 11h30 e 12h15 para fugir do pico das 12h30-13h30.",tip:"O segundo andar do Columbia Harbour House é silencioso, climatizado e perfeito para recarregar as energias."},{step:6,title:"Parada Festival of Fantasy & Shows Climatizados",category:"afternoon",description:"Assista à parada Festival of Fantasy às 14h/15h. Em seguida, aproveite atrações cobertas e com ar-condicionado durante o calor: Mickey's PhilharMagic, Walt Disney's Enchanted Tiki Room e Country Bear Musical Jamboree.",tip:"Excelente momento para comer um Dole Whip de abacaxi gelado."},{step:7,title:"Tomorrowland: Espaço e Futuro",category:"evening",description:"Space Mountain, Buzz Lightyear's Space Ranger Spin e relaxe no Tomorrowland Transit Authority PeopleMover no fim de tarde.",tip:"O PeopleMover oferece uma vista panorâmica incrível do parque ao pôr do sol sem filas longas."},{step:8,title:"TRON Lightcycle / Run & Seven Dwarfs Mine Train",category:"evening",description:"Acesse TRON via fila virtual (se chamada) ou Lightning Lane Single Pass. Visite Seven Dwarfs Mine Train na última hora do parque antes do show de fogos ou logo após.",badge:"Radical"},{step:9,title:"Happily Ever After & Encerramento Encantado",category:"night_show",description:"Encontre seu lugar na Main Street U.S.A. para o espetáculo de fogos, músicas e projeções. Após os fogos, aproveite que as filas despencam para repetir atrações favoritas até o fechamento!",tip:"As lojas da Main Street permanecem abertas até 1 hora após o fechamento oficial do parque."}]},epcot:{id:"epcot",parkId:"epcot",parkName:"EPCOT",operator:"disney",title:"EPCOT — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro perfeito integrando tecnologia, World Celebration e os 11 pavilhões do World Showcase",targetAudience:"Adultos, famílias, fãs de gastronomia e montanhas-russas de ponta",estimatedDuration:"10 a 12 horas",ropeDropArrival:"Chegue 45 minutos antes da abertura. Entre preferencialmente pela entrada principal (ou International Gateway se vier via Skyliner).",generalStrategy:"Conquiste a Fila Virtual de Guardians of the Galaxy: Cosmic Rewind no app MDE pontualmente às 07h00. No Rope Drop, faça Remy's Ratatouille Adventure ou Test Track / Soarin'. Dedique a tarde aos pavilhões gastronômicos do World Showcase.",diningRecommendations:{quickService:["Sunshine Seasons (The Land - variedade imensa saudável)","Regal Eagle Smokehouse (Pavilhão Americano - churrasco BBQ texano)","Les Halles Boulangerie-Patisserie (Pavilhão França - croissants e quiches)"],tableService:["Space 220 (World Discovery - refeição simulando estar no espaço)","Via Napoli (Pavilhão Itália - melhores pizzas autênticas)","Le Cellier Steakhouse (Pavilhão Canadá - cortes nobres e sopa de cheddar)"],snacks:["Kringla Bakeri Og Kafe (Escola Bread na Noruega)","Caramelkuche (Pavilhão Alemanha - pipoca de caramelo artesanal)"]},nightShow:{name:"Luminous The Symphony of Us",time:"Geralmente às 21h00",tip:"Qualquer ponto ao redor da lagoa do World Showcase oferece boa visão. Fique longe das árvores e do lado favorável ao vento para não pegar fumaça."},steps:[{step:1,title:"07h00 da Manhã: Fila Virtual Cosmic Rewind",category:"rope_drop",description:'No aplicativo My Disney Experience, clique em "Join Virtual Queue" exatamente às 07:00:00 para garantir seu grupo de embarque em Guardians of the Galaxy.',badge:"Crítico"},{step:2,title:"Rope Drop: Remy's Ratatouille Adventure ou Frozen Ever After",category:"rope_drop",description:"Se entrar pelo Skyliner, corra direto para Remy no Pavilhão da França. Se entrar pela frente, vá até Frozen Ever After na Noruega ou Soarin' Around the World.",tip:"Remy e Frozen são as filas mais extensas ao longo do dia com esperas de 60-90min."},{step:3,title:"World Nature: The Land & The Seas",category:"morning",description:"Vá ao pavilhão The Land para curtir Soarin' Around the World e Living with the Land. Depois, The Seas with Nemo & Friends e Turtle Talk with Crush.",tip:"Living with the Land é um passeio de barco relaxante pelas estufas hidropônicas do EPCOT."},{step:4,title:"World Celebration & Spaceship Earth",category:"morning",description:'Visite a famosa "bola do EPCOT" (Spaceship Earth) e a área de Journey of Water, Inspired by Moana.',tip:"A trilha aquática da Moana é linda e refrescante nos dias quentes de Orlando."},{step:5,title:"Guardiões da Galáxia: Cosmic Rewind",category:"afternoon",description:"Quando o seu grupo de embarque for chamado, apresente-se na atração mais espetacular de Orlando. A montanha-russa com lançamento reverso e trilha sonora dos anos 70/80 é imperdível.",badge:"Top 1 de Orlando"},{step:6,title:"Exploração do World Showcase (Pavilhões Mundiais)",category:"afternoon",description:"Passeie pelos 11 países: México (Gran Fiesta Tour), Noruega, China, Alemanha, Itália, EUA, Japão, Marrocos, França e Reino Unido. Aproveite os quiosques de festivais.",tip:"Experimente pequenas porções em múltiplos países em vez de fazer apenas uma grande refeição."},{step:7,title:"Luminous The Symphony of Us",category:"night_show",description:"Encontre um bom ponto ao redor da lagoa do World Showcase às 20h20 para o emocionante show de fogos, fontes dançantes e trilha sonora que celebra a conexão humana.",badge:"Show Noturno"}]},"hollywood-studios":{id:"hollywood-studios",parkId:"hollywood-studios",parkName:"Disney's Hollywood Studios",operator:"disney",title:"Disney's Hollywood Studios — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro de alta adrenalina focado em Star Wars: Galaxy's Edge, Toy Story Land e Tower of Terror",targetAudience:"Fãs de Star Wars, amantes de simuladores e montanhas-russas emocionantes",estimatedDuration:"10 a 12 horas",ropeDropArrival:"Chegue 60 minutos antes da abertura. Este é o parque mais disputado no rope drop!",generalStrategy:"Decida no rope drop entre Star Wars: Rise of the Resistance ou Slinky Dog Dash. Assista aos shows épicos (Indiana Jones e Beauty and the Beast) no início da tarde e garanta lugar no Fantasmic!.",diningRecommendations:{quickService:["Woody's Lunch Box (Toy Story Land - Totchos e sanduíches gourmet)","Ronto Roasters (Galaxy's Edge - Ronto wraps suculentos)","Docking Bay 7 Food and Cargo (comida temática e saudável)"],tableService:["50's Prime Time Café (comida caseira americana e garçons divertidos)","Sci-Fi Dine-In Theater (refeição em carros conversíveis estilo drive-in)","The Hollywood Brown Derby (clássico e sofisticado)"],snacks:["Blue/Green Milk no Milk Stand de Batuu","Carrot Cake Cookie no Trolley Car Café (Starbucks)"]},nightShow:{name:"Fantasmic!",time:"Geralmente às 20h30 ou 21h30 (em dias de alta lotação há duas sessões)",tip:"Chegue ao anfiteatro 45-60 minutos antes do show. O setor central oferece a melhor visão das projeções de água."},steps:[{step:1,title:"Rope Drop: Rise of the Resistance ou Slinky Dog Dash",category:"rope_drop",description:"Caminhe rápido diretamente para Star Wars: Rise of the Resistance. Se a atração estiver indisponível temporariamente na abertura (comum), redirecione instantaneamente para Slinky Dog Dash em Toy Story Land.",badge:"Rope Drop Épico"},{step:2,title:"Star Wars: Galaxy's Edge & Millennium Falcon",category:"morning",description:"Pilote a lendária espaçonave em Millennium Falcon: Smugglers Run e explore as lojas temáticas de Batuu.",tip:"Se for em grupo de adultos, a fila Single Rider da Millennium Falcon poupa até 40 minutos!"},{step:3,title:"Toy Story Land: Toy Story Mania! & Alien Swirling Saucers",category:"morning",description:"Visite Toy Story Mania! (jogo 3D competitivo divertidíssimo) e almoce em seguida no Woody's Lunch Box.",tip:"Peça os famosos Totchos com antecedência via Mobile Order."},{step:4,title:"Mickey & Minnie's Runaway Railway",category:"afternoon",description:"Embarque no Chinese Theatre para o passeio inovador sem trilhos por dentro dos desenhos do Mickey Mouse.",badge:"Tecnologia Incrível"},{step:5,title:"Shows da Tarde Climatizados: Indiana Jones & Beauty and the Beast",category:"show",description:"Assista a Indiana Jones Epic Stunt Spectacular e Beauty and the Beast - Live on Stage. Faça uma pausa climatizada.",tip:"Evite filas externas durante o sol forte das 13h30 às 15h30."},{step:6,title:"Sunset Boulevard: Tower of Terror & Rock 'n' Roller Coaster",category:"evening",description:"Enfrente The Twilight Zone Tower of Terror e Rock 'n' Roller Coaster Starring Aerosmith no fim da tarde.",tip:"As filas de Sunset Boulevard costumam cair após as 18h quando famílias começam a se deslocar para o Fantasmic!."},{step:7,title:"Fantasmic! — O Espetáculo da Noite",category:"night_show",description:"Entre no Hollywood Hills Amphitheater para vivenciar a batalha de Mickey contra os vilões da Disney com água, fogo, laser e fogos.",badge:"Imperdível"}]},"animal-kingdom":{id:"animal-kingdom",parkId:"animal-kingdom",parkName:"Disney's Animal Kingdom",operator:"disney",title:"Disney's Animal Kingdom — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro de imersão na natureza, Pandora - The World of Avatar e expedições pela África e Ásia",targetAudience:"Famílias com crianças, amantes de animais, fotografia e atrações cinematográficas",estimatedDuration:"8 a 10 horas (parque abre e fecha mais cedo que os outros)",ropeDropArrival:"Chegue 45 a 60 minutos antes da abertura oficial. O parque costuma abrir portões mais cedo.",generalStrategy:"Faça Avatar Flight of Passage imediatamente no Rope Drop. Faça o Kilimanjaro Safaris no início da manhã quando os animais estão mais ativos e acordados.",diningRecommendations:{quickService:["Satu'li Canteen (Pandora - bowls saudáveis e deliciosos)","Flame Tree Barbecue (Discovery Island - costelinha e vista panorâmica)","Yak & Yeti Local Food Cafes (Ásia - arroz frito e pratos orientais)"],tableService:["Tiffins Restaurant (Discovery Island - culinária de autor premiada)","Yak & Yeti Restaurant (Ásia - ambiente temático e comida asiática completa)","Tusker House (África - buffet com personagens vestidos de safári)"],snacks:["Pongu Lumpia em Pongu Pongu (Pandora)","Dole Whip com rum ou puro no Tamu Tamu Refreshments"]},nightShow:{name:"Tree of Life Awakenings",time:"A partir do anoitecer a cada 10-15 minutos",tip:"Projeções curtas e poéticas na icônica Árvore da Vida. Ótimo para assistir enquanto caminha em direção à saída do parque."},steps:[{step:1,title:"Rope Drop: Avatar Flight of Passage",category:"rope_drop",description:"Vá a passos rápidos para Pandora e entre na fila de Flight of Passage. O voo nas costas de um Banshee é uma das atrações mais aclamadas da Disney.",badge:"Atração Estrela"},{step:2,title:"Na'vi River Journey",category:"morning",description:"Emende logo em seguida com Na'vi River Journey, o relaxante passeio de barco bioluminescente na floresta de Pandora.",tip:"Aproveite enquanto as pessoas ainda estão presas na fila de Flight of Passage."},{step:3,title:"Kilimanjaro Safaris na África",category:"morning",description:"Caminhe para a África e embarque no safári real pela savana de Harambe. Os animais estão no momento mais ativo do dia.",tip:"Tenha a câmera em mãos; leões, girafas e elefantes costumam cruzar perto do caminhão!"},{step:4,title:"Festival of the Lion King",category:"show",description:"Assista a uma das primeiras apresentações deste espetáculo estilo Broadway em teatro climatizado com acrobatas e músicas ao vivo.",badge:"Melhor Show"},{step:5,title:"Almoço no Satu'li Canteen (Pandora)",category:"lunch",description:"Volte a Pandora para saborear os bowls customizados (frango grelhado, carne ou tofu com bases de grãos e molhos frescos).",tip:"Faça Mobile Order 20 minutos antes de se dirigir ao restaurante."},{step:6,title:"Ásia: Expedition Everest & Kali River Rapids",category:"afternoon",description:"Enfrente o Yeti na montanha-russa Expedition Everest (use a fila Single Rider para ir várias vezes sem esperar!). Em seguida, refresque-se nas correntezas de Kali River Rapids.",tip:"Kali River Rapids molha de verdade! Guarde celulares e documentos nos armários gratuitos."},{step:7,title:"Finding Nemo: The Big Blue... and Beyond!",category:"afternoon",description:"Espetáculo musical maravilhoso com marionetes gigantes e músicas de alta qualidade.",tip:"Excelente parada climatizada durante o pico de calor das 14h-15h."},{step:8,title:"Gorilla Falls & Maharajah Jungle Trek",category:"evening",description:"Trilhas a pé para observar gorilas, tigres asiáticos e morcegos gigantes sem pressa.",tip:"Ao entardecer, pare diante da Tree of Life para fotos incríveis sem aglomeração."}]},"epic-universe":{id:"epic-universe",parkId:"epic-universe",parkName:"Universal Epic Universe",operator:"universal",title:"Universal Epic Universe — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro exclusivo para o mais novo e inovador parque temático de Orlando com 5 mundos interconectados",targetAudience:"Todos os públicos: fãs de Nintendo, Harry Potter, Monstros Clássicos e montanhas-russas revolucionárias",estimatedDuration:"12 a 14 horas",ropeDropArrival:"Chegue 60 a 75 minutos antes da abertura. Os portões do Chronos abrem cedo para controle de fluxo.",generalStrategy:"Entre pelo Celestial Park e atravesse imediatamente para Super Nintendo World ou Dark Universe antes que as filas se formem. Guarde Stardust Racers para o fim de tarde/noite com as luzes acesas.",diningRecommendations:{quickService:["Toadstool Cafe (Super Nintendo World - pratos lúdicos em formato de cogumelos)","Das Stakehaus (Dark Universe - carnes e ambiente gótico)","Mead Hall (Isle of Berk - banquete viking com carnes defumadas)"],tableService:["Atlantic Restaurant (Celestial Park - frutos do mar e vista da lagoa)","The Blue Dragon Pan-Asian Restaurant (culinária asiática espetacular)","The Oak & Star Tavern (churrasco e cervejas artesanais)"],snacks:["Butterbeer versão Ministry of Magic","Pipoca temática de Mario & Yoshi","Doces dos Monstros Clássicos"]},nightShow:{name:"Celestial Light & Water Spectacular",time:"Geralmente às 21h30 na grande lagoa central",tip:"Posicione-se em frente às fontes centrais do Celestial Park com visão desobstruída dos portais cósmicos iluminados."},steps:[{step:1,title:"Entrada pelo Portal Cósmico do Chronos",category:"rope_drop",description:"Cruze os portões dourados de Celestial Park e admire a arquitetura celestial antes de rumar ao primeiro mundo.",badge:"Rope Drop Histórico"},{step:2,title:"Super Nintendo World: Bowser's Challenge & Donkey Kong Mine-Cart",category:"rope_drop",description:"Atravesse o cano verde para Super Nintendo World. Faça Mario Kart: Bowser's Challenge com óculos de realidade aumentada e Mine-Cart Madness na área de Donkey Kong Country.",badge:"Mais Concorrido"},{step:3,title:"Dark Universe: Monsters Unchained & Werewolf",category:"morning",description:"Cruze o portal gótico de Dark Universe. Encare Monsters Unchained: The Frankenstein Experiment (o simulador robótico mais assustador da história da Universal) e a montanha-russa Curse of the Werewolf.",tip:"A fila de Frankenstein é uma das mais detalhadas de qualquer parque temático."},{step:4,title:"Almoço no Toadstool Cafe ou Das Stakehaus",category:"lunch",description:"Almoço temático imersivo. Agende o horário de retorno no aplicativo oficial da Universal logo no início da manhã.",tip:"Reserve com antecedência via app para evitar esgotamento de horários."},{step:5,title:"The Wizarding World of Harry Potter: Ministry of Magic",category:"afternoon",description:"Acesse a Paris dos anos 1920 (Animais Fantásticos) e pegue a rede de Flú para o Ministério da Magia britânico. Embarque na atração principal Harry Potter and the Battle at the Ministry e assista ao show de circo mágico Le Cirque Arcanus.",badge:"Imperdível"},{step:6,title:"How to Train Your Dragon: Isle of Berk",category:"afternoon",description:"Visite a vila viking com dragões voadores. Faça Hiccup's Winged Gliders, Dragon Racer's Rally e tire fotos no Meet Toothless com o Banguela animatrônico ultra-realista.",tip:"A atração aquática Fyre Drill é perfeita para as tardes quentes da Flórida."},{step:7,title:"Celestial Park: Stardust Racers ao Entardecer",category:"evening",description:"Encare Stardust Racers, a montanha-russa de duelo de lançamento duplo com iluminação estelar noturna impressionante que atinge 100 km/h sem freios intermediários.",badge:"Radical Extremo"},{step:8,title:"Show Noturno Celestial & Exploração dos Portais Iluminados",category:"night_show",description:"Encerre o dia assistindo ao espetáculo de águas dançantes e projeções no lago celestial enquanto cada portal de mundo brilha com cores cósmicas.",tip:"Aproveite os últimos minutos para tirar fotos no portal do Chronos com iluminação noturna."}]},"islands-of-adventure":{id:"islands-of-adventure",parkId:"islands-of-adventure",parkName:"Universal Islands of Adventure",operator:"universal",title:"Universal Islands of Adventure — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro de adrenalina pura com Hagrid's Motorbike, VelociCoaster e The Wizarding World of Harry Potter - Hogsmeade",targetAudience:"Fãs de montanhas-russas radicais, Harry Potter, Jurassic Park e Marvel",estimatedDuration:"10 a 12 horas",ropeDropArrival:"Chegue 60 minutos antes da abertura. A corrida matinal para Hagrid's é lendária.",generalStrategy:"No Rope Drop, decida entre Hagrid's Magical Creatures Motorbike Adventure ou Jurassic World VelociCoaster. Atrações aquáticas de Toon Lagoon molham completamente: faça-as antes do almoço e troque de roupa.",diningRecommendations:{quickService:["Three Broomsticks (Hogsmeade - pratos tradicionais britânicos e Butterbeer)","Thunder Falls Terrace (Jurassic Park - costelinha defumada e frango assado)","Blondie's (Toon Lagoon - sanduíches Dagwood gigantes)"],tableService:["Mythos Restaurant (Lost Continent - considerado um dos melhores restaurantes temáticos do mundo)","Confisco Grille (Port of Entry - cozinha internacional)"],snacks:["Butterbeer congelada em Hogsmeade","Green Eggs and Ham Tots em Seuss Landing","Brookies no Croissant Moon Bakery"]},nightShow:{name:"Hogwarts Castle Projection Show / CineSational",time:"A cada 20 minutos após o anoitecer",tip:"Fique na praça em frente ao Castelo de Hogwarts cerca de 15 minutos antes da projeção de luzes."},steps:[{step:1,title:"Rope Drop: Hagrid's Magical Creatures Motorbike Adventure",category:"rope_drop",description:"Caminhe direto por Seuss Landing até Hogsmeade. Hagrid's tem fila média de 90 a 120 minutos durante a tarde; fazê-la na abertura é a maior economia de tempo da viagem.",badge:"Top 1 Prioridade"},{step:2,title:"Jurassic World VelociCoaster",category:"morning",description:"Emende na sequência a melhor montanha-russa do mundo. Com lançamento duplo e manobras sobre a lagoa, a fila ainda estará moderada logo cedo.",badge:"Radical Insuperável"},{step:3,title:"Harry Potter and the Forbidden Journey & Flight of the Hippogriff",category:"morning",description:"Entre no Castelo de Hogwarts e explore as salas de aula de Dumbledore antes do passeio de braço robótico com os dementadores.",tip:"Se a fila de Hagrid's atrasou, use o Single Rider do Forbidden Journey para embarque em menos de 15 minutos."},{step:4,title:"Almoço no Three Broomsticks ou Mythos",category:"lunch",description:"Saboreie o Shepherd's Pie, peixe com batatas fritas (Fish and Chips) e uma cerveja amanteigada bem gelada em Hogsmeade.",tip:"Peça a sobremesa Butterbeer Potted Cream para fechar com chave de ouro."},{step:5,title:"Jurassic Park River Adventure",category:"afternoon",description:"Passeio de barco entre répteis gigantes que culmina com a queda de 25 metros no escuro fugindo do T-Rex.",tip:"As primeiras fileiras se molham mais; use capa ou aproveite o calor da tarde."},{step:6,title:"Toon Lagoon: Popeye & Bluto's Bilge-Rat Barges e Dudley Do-Right",category:"afternoon",description:"Duas das atrações aquáticas mais engraçadas e encharcadas de Orlando. Impossível sair seco!",tip:"Coloque mochilas e celulares nos compartimentos centrais cobertos ou armários."},{step:7,title:"Marvel Super Hero Island: Hulk & Spider-Man",category:"evening",description:"Encare o lançamento catatônico de The Incredible Hulk Coaster e viva o clássico absoluto The Amazing Adventures of Spider-Man.",tip:"Hulk exige que todos os itens dos bolsos sejam guardados nos armários gratuitos da entrada."},{step:8,title:"Hogwarts ao Luar e Encerramento",category:"night_show",description:"Retorne a Hogsmeade à noite para ver as luzes e o castelo brilhando, e faça sua última compra na Honeydukes.",tip:"Hagrid's à noite é uma experiência completamente diferente com iluminação na floresta!"}]},"universal-studios":{id:"universal-studios",parkId:"universal-studios",parkName:"Universal Studios Florida",operator:"universal",title:"Universal Studios Florida — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro cinematográfico com Beco Diagonal, Gringotts, Transformers, Múmia e Simpsons",targetAudience:"Fãs de cinema, cultura pop, simuladores de ponta e magia de Harry Potter",estimatedDuration:"9 a 11 horas",ropeDropArrival:"Chegue 45 a 60 minutos antes da abertura oficial.",generalStrategy:"Vá direto para Harry Potter and the Escape from Gringotts no Beco Diagonal. Em seguida, aproveite Revenge of the Mummy e Transformers. Assista aos shows vespertinos (Bourne Stuntacular).",diningRecommendations:{quickService:["Leaky Cauldron (Caldeirão Furado no Beco Diagonal - tortas e cafés da manhã ingleses)","Today Cafe (sanduíches gourmet e saladas frescas)","Fast Food Boulevard / Krusty Burger (Springfield)"],tableService:["Finnegan's Bar & Grill (New York - pub irlandês animado com música)","Lombard's Seafood Grille (San Francisco - frutos do mar e vista da lagoa)"],snacks:["Donut rosa gigante do Lard Lad Donuts (Springfield)","Butterbeer e sorvete de cerveja amanteigada na Florean Fortescue's"]},nightShow:{name:"CineSational: A Symphonic Spectacular",time:"Geralmente às 21h00 na lagoa central",tip:"Assista do deck central de New York / San Francisco. Show espetacular com centenas de drones, fontes coloridas e trilhas sonoras icônicas de filmes."},steps:[{step:1,title:"Rope Drop: Beco Diagonal & Escape from Gringotts",category:"rope_drop",description:"Entre pela entrada secreta de tijolos em Londres até o Beco Diagonal. Embarque em Harry Potter and the Escape from Gringotts antes das filas passarem de 60 minutos.",badge:"Alta Prioridade"},{step:2,title:"Exploração do Beco Diagonal & Knockturn Alley",category:"morning",description:"Veja o dragão cuspir fogo no topo do banco de Gringotts (a cada 10-15 minutos) e pratique feitiços interativos com sua varinha.",tip:"Não deixe de entrar na Travessa do Tranco (Knockturn Alley), a área mais fresca e misteriosa do parque."},{step:3,title:"Revenge of the Mummy em New York",category:"morning",description:"A montanha-russa indoor favorita dos fãs, misturando efeitos práticos de fogo, velocidade no escuro e escaravelhos.",badge:"Favorito dos Fãs"},{step:4,title:"Transformers: The Ride-3D",category:"morning",description:"Batalha 3D em tamanho real entre Autobots e Decepticons.",tip:"Costuma aceitar fila Single Rider para economia de tempo."},{step:5,title:"Almoço no Leaky Cauldron ou Finnegan's",category:"lunch",description:"Faça uma pausa no Caldeirão Furado ou no pub irlandês Finnegan's em New York ao som de piano ao vivo.",tip:"Excelente cerveja amanteigada ou chope importado."},{step:6,title:"The Bourne Stuntacular",category:"show",description:"Show de dublês mais impressionante de Orlando, mesclando telões de LED de 360 graus, acrobacias ao vivo e efeitos de fumaça e vento.",badge:"Show Imperdível"},{step:7,title:"Springfield: The Simpsons Ride & Men in Black",category:"afternoon",description:"Visite a cidade dos Simpsons, tire foto com o Homer e vá até Men in Black: Alien Attack (jogo de tiro onde você gira e atira em alienígenas).",tip:"Em MIB, aperte repetidamente o botão vermelho do bônus quando mandarem no final para ganhar 100.000 pontos extras!"},{step:8,title:"Hollywood & E.T. Adventure",category:"evening",description:"O clássico nostálgico dos anos 80: voe de bicicleta sobre a cidade com o E.T. no cesto.",tip:"Diga seu nome com clareza para o funcionário ao receber o cartão interativo!"},{step:9,title:"CineSational: A Symphonic Spectacular",category:"night_show",description:"Espetáculo de encerramento na lagoa com drones, fontes, filmes de Jurassic Park, De Volta Para o Futuro, Tubarão e Harry Potter.",badge:"Encerramento Show"}]},"universal-1day-park-to-park":{id:"universal-1day-park-to-park",parkId:"universal-park-to-park",parkName:"Universal Orlando (1 Dia Park-to-Park)",operator:"universal",title:"Universal Orlando — 1 Dia Park-to-Park (2 Parques em 1 Dia)",subtitle:"Roteiro expresso para cobrir as atrações indispensáveis de USF e Islands of Adventure com o Hogwarts Express",targetAudience:"Viajantes com tempo limitado que querem ver o essencial dos dois parques da Universal",estimatedDuration:"12 a 13 horas",ropeDropArrival:"Chegue 60 minutos antes da abertura no Islands of Adventure (ou no parque que abrir primeiro com Early Entry).",generalStrategy:"Exige ingresso Park-to-Park para embarcar no Hogwarts Express. Comece cedo em Islands of Adventure com Hagrid's e VelociCoaster, pegue o trem para USF ao meio-dia, faça Gringotts e Múmia e decida onde terminar a noite.",diningRecommendations:{quickService:["Three Broomsticks (Hogsmeade)","Today Cafe (USF)","Leaky Cauldron (Beco Diagonal)"],tableService:["Mythos Restaurant (Lost Continent)","Finnegan's Bar & Grill (USF)"],snacks:["Butterbeer (em ambas as terras de Harry Potter)","Donut Lard Lad gigante"]},nightShow:{name:"CineSational (USF) ou Projeções no Castelo de Hogwarts (IOA)",time:"Geralmente às 21h00",tip:"Escolha com antecedência em qual dos dois parques você quer finalizar o dia."},steps:[{step:1,title:"Rope Drop no Islands of Adventure: Hagrid's Motorbike",category:"rope_drop",description:"Entrada rápida direto para a área de Hogsmeade para Hagrid's antes que a fila supere 90 minutos.",badge:"Passo Crítico"},{step:2,title:"Jurassic World VelociCoaster",category:"morning",description:"Logo após Hagrid's, caminhe para a VelociCoaster. Essa dobradinha é o ponto alto da viagem para os amantes de adrenalina.",badge:"Radical"},{step:3,title:"Forbidden Journey & Hogsmeade",category:"morning",description:"Faça Harry Potter and the Forbidden Journey (use Single Rider se a fila estiver acima de 40min) e explore Hogsmeade.",tip:"Pegue uma Butterbeer congelada para a caminhada."},{step:4,title:"Hogwarts Express: De Hogsmeade para Londres (King's Cross)",category:"afternoon",description:"Apresente seu ingresso Park-to-Park e embarque no trem mágico. A viagem é uma atração completa com projeções nas janelas!",badge:"Experiência Única"},{step:5,title:"Almoço no Leaky Cauldron & Beco Diagonal",category:"lunch",description:"Desembarque na estação King's Cross em Londres, entre no Beco Diagonal e almoce no Caldeirão Furado.",tip:"Faça Harry Potter and the Escape from Gringotts logo após o almoço."},{step:6,title:"Universal Studios: Revenge of the Mummy & Transformers",category:"afternoon",description:"Atravesse para as áreas de New York e San Francisco para as duas atrações fechadas mais concorridas.",tip:"Use as filas Single Rider em Transformers e Mummy se estiver em ritmo acelerado."},{step:7,title:"The Bourne Stuntacular",category:"show",description:"Assista a este show tecnológico espetacular para descansar os pés no ambiente com ar-condicionado.",badge:"Melhor Show"},{step:8,title:"Hogwarts Express de volta para IOA ou Finalizar em USF",category:"evening",description:"Se quiser rever o show noturno de Hogwarts ou o Hulk, pegue o trem de volta (a experiência na janela é diferente em cada sentido!). Caso contrário, encerre com CineSational em USF.",tip:"O trem opera até cerca de 30 minutos antes do fechamento dos parques."}]},"universal-2day-park-to-park":{id:"universal-2day-park-to-park",parkId:"universal-2day",parkName:"Universal Orlando (2 Dias Park-to-Park)",operator:"universal",title:"Universal Orlando — 2 Dias Park-to-Park (Roteiro Completo)",subtitle:"O equilíbrio perfeito para explorar minuciosamente Universal Studios e Islands of Adventure sem correria",targetAudience:"Famílias e grupos que querem curtir tudo com calma, repetir as atrações favoritas e desfrutar os detalhes temáticos",estimatedDuration:"2 dias completos (8 a 10 horas por dia)",ropeDropArrival:"Dia 1: Islands of Adventure às 08h00. Dia 2: Universal Studios Florida às 08h15.",generalStrategy:"Dedique a maior parte do Dia 1 a Islands of Adventure (Hagrid's, VelociCoaster, Hulk, Spider-Man e Toon Lagoon). Dedique o Dia 2 a Universal Studios Florida (Beco Diagonal, Gringotts, Múmia, Simpsons, Bourne e E.T.), usando o Hogwarts Express entre eles para repetir suas atrações prediletas.",diningRecommendations:{quickService:["Dia 1: Three Broomsticks (Hogsmeade)","Dia 2: Leaky Cauldron ou Today Cafe"],tableService:["Mythos Restaurant (Dia 1)","Finnegan's Bar & Grill ou Cowfish no CityWalk (Dia 2)"],snacks:["Butterbeer Fudge","Floreans Ice Cream","Donut gigante de Homer Simpson"]},nightShow:{name:"Dia 1: Hogwarts Castle Lights / Dia 2: CineSational",time:"21h00 em ambos os dias",tip:"Aproveite cada show noturno no seu respectivo parque sem correria de translado à noite."},steps:[{step:1,title:"Dia 1 - Manhã: Conquistando Islands of Adventure",category:"rope_drop",description:"Rope drop com foco total em Hagrid's Magical Creatures Motorbike Adventure e VelociCoaster nas duas primeiras horas.",badge:"Dia 1: Adrenalina"},{step:2,title:"Dia 1 - Tarde: Áreas Aquáticas e Marvel Super Hero Island",category:"afternoon",description:"Almoço no Mythos, seguido pelas correntezas de Popeye e Dudley Do-Right, e encerramento com The Incredible Hulk e Spider-Man.",tip:"Você terá tempo de sobra para passear e tirar fotos incríveis com os personagens."},{step:3,title:"Dia 1 - Noite: Magia Noturna em Hogsmeade",category:"night_show",description:"Veja as luzes do castelo de Hogwarts, tome uma Butterbeer quente ou gelada e repita o Forbidden Journey com fila zerada.",badge:"Noite Mágica"},{step:4,title:"Dia 2 - Manhã: Beco Diagonal e Clássicos de Hollywood",category:"morning",description:"Comece em Universal Studios com Escape from Gringotts, fotos no Nôitibus Andante e café no Caldeirão Furado.",badge:"Dia 2: Cinema"},{step:5,title:"Dia 2 - Tarde: Ação & Tecnologia",category:"afternoon",description:"Revenge of the Mummy, Transformers, The Bourne Stuntacular e Men in Black com tranquilidade.",tip:"Faça os shows com ar-condicionado nos momentos mais quentes do dia."},{step:6,title:"Dia 2 - Noite: Hogwarts Express & CineSational",category:"night_show",description:"Use o Hogwarts Express no sentido King's Cross para reviver a magia nos dois sentidos e assista ao show de encerramento CineSational na lagoa da Universal.",badge:"Gran Finale"}]},seaworld:{id:"seaworld",parkId:"seaworld",parkName:"SeaWorld Orlando",operator:"seaworld",title:"SeaWorld Orlando — Plano Passo a Passo de 1 Dia",subtitle:"Roteiro da capital das montanhas-russas da Flórida aliado ao resgate da vida marinha e shows aquáticos",targetAudience:"Fãs de montanhas-russas radicais, famílias e amantes da vida marinha",estimatedDuration:"8 a 10 horas",ropeDropArrival:"Chegue 30 a 45 minutos antes da abertura oficial dos portões.",generalStrategy:"Faça as montanhas-russas mais concorridas logo cedo (Pipeline: The Surf Coaster, Mako, Manta e a novíssima Penguin Trek). No meio do dia, intercale os grandes estádios de apresentações com ar-condicionado ou sombra.",diningRecommendations:{quickService:["Voyager's Smokehouse (churrasco americano artesanal com brisket e costela)","Expedition Café (comidas internacionais perto da Antártica)","Altitude Burgers (hambúrgueres artesanais suculentos)"],tableService:["Sharks Underwater Grill (refeição incrível com mesas ao lado do aquário gigante de tubarões)"],snacks:["Cinnabon quente","Dippin' Dots sorvete do futuro","Pretzels artesanais"]},nightShow:{name:"Ignite Fireworks & Fountains (sazonal em festivais e verão)",time:"Geralmente às 21h00 sobre a baía central",tip:"Assista da ponte central de Bayside Stadium para uma visão completa de fogos e chamas."},steps:[{step:1,title:"Rope Drop: Pipeline: The Surf Coaster",category:"rope_drop",description:'Vá direto para a Pipeline logo na entrada. A primeira "surf coaster" do mundo simula manobras de surf em pé com assentos com amortecedores que sobem e descem.',badge:"Inovação Radical"},{step:2,title:"Manta — Montanha-russa Voadora",category:"morning",description:"Embarque na Manta, onde você viaja na posição de bruços voando sobre lagoas e espelhos d'água com o loop pretzel insano.",tip:"Se a fila de Manta estiver longa, use o armário na entrada e retorne no início da tarde."},{step:3,title:"Mako — A Hypercoaster Mais Alta e Rápida de Orlando",category:"morning",description:"Vá até o Shark Realm para enfrentar a Mako: 61 metros de altura, 117 km/h e incríveis momentos de airtime (sensação de gravidade zero).",badge:"Top 1 Velocidade"},{step:4,title:"Penguin Trek & Antarctica Realm",category:"morning",description:"A nova montanha-russa familiar com lançamentos em moto de neve que termina dentro do habitat real e gelado dos pinguins!",badge:"Novidade Imperdível"},{step:5,title:"Almoço no Voyager's Smokehouse ou Sharks Underwater Grill",category:"lunch",description:"Saboreie o melhor churrasco defumado em madeira de nogueira ou almoce ao lado de tubarões reais no aquário panorâmico.",tip:"O Voyager's oferece porções muito fartas que podem ser divididas em duas pessoas."},{step:6,title:"Shows Aquáticos: Orca Encounter & Dolphin Adventures",category:"show",description:'Assista às apresentações educativas e acrobáticas nos estádios abertos. Cuidado com a "Soak Zone" nas primeiras fileiras se não quiser se encharcar!',tip:"Chegue 20 minutos antes do horário marcado nos horários oficiais do parque."},{step:7,title:"Ice Breaker & Kraken",category:"afternoon",description:"Enfrente os múltiplos lançamentos dianteiros e reversos de Ice Breaker e a clássica sem chão Kraken.",tip:"Kraken costuma ter filas muito pequenas após as 15h."},{step:8,title:"Wild Arctic & Manatee Rescue",category:"evening",description:"Visite as belugas, morsas e o centro de reabilitação de peixes-bois nativos da Flórida para uma experiência relaxante e educativa.",tip:"Ótima maneira de encerrar a tarde antes de sair para um outlet ou jantar."}]}};function ya(i="magic-kingdom",e="all"){const s=Object.values(be).filter(r=>e==="all"?!0:r.operator===e),t=be[i]||s[0]||be["magic-kingdom"],o=r=>{switch(r){case"disney":return'<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e8f0fe] text-[#1967d2]">Walt Disney World</span>';case"universal":return'<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#fce8e6] text-[#c5221f]">Universal Orlando</span>';case"seaworld":return'<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#e6f4ea] text-[#137333]">United Parks</span>';default:return""}},l=s.map(r=>`
        <button
          type="button"
          class="btn-select-touring-plan text-left w-full p-3 rounded-xl border transition-all flex flex-col gap-1.5 ${r.id===t.id?"bg-surface-container-lowest border-primary shadow-sm ring-2 ring-primary/20":"bg-surface-container-low/70 hover:bg-surface-container border-outline-variant/30 text-on-surface"}"
          data-plan-id="${r.id}"
        >
          <div class="flex items-center justify-between w-full">
            <span class="font-bold text-xs sm:text-sm text-on-surface">${r.parkName}</span>
            ${o(r.operator)}
          </div>
          <span class="text-[11px] text-outline line-clamp-1">${r.subtitle}</span>
          <div class="flex items-center gap-2 text-[10px] text-outline font-medium pt-1">
            <span class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[12px]">schedule</span>
              ${r.estimatedDuration}
            </span>
            <span>•</span>
            <span class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[12px]">format_list_numbered</span>
              ${r.steps.length} passos
            </span>
          </div>
        </button>
      `).join(""),c=r=>{switch(r){case"rope_drop":return{icon:"wb_twilight",color:"text-[#e37400] bg-[#fef7ed]"};case"morning":return{icon:"wb_sunny",color:"text-[#1a73e8] bg-[#e8f0fe]"};case"lunch":return{icon:"restaurant",color:"text-[#188038] bg-[#e6f4ea]"};case"afternoon":return{icon:"wb_cloudy",color:"text-[#9334e6] bg-[#f3e8fd]"};case"evening":return{icon:"bedtime",color:"text-[#d93025] bg-[#fce8e6]"};case"show":return{icon:"theater_comedy",color:"text-[#a142f4] bg-[#f3e8fd]"};case"night_show":return{icon:"auto_awesome",color:"text-[#f29900] bg-[#fff8e1]"};default:return{icon:"arrow_forward",color:"text-primary bg-primary-container/20"}}},n=t.steps.map(r=>{const d=c(r.category);return`
        <div class="relative flex gap-3 sm:gap-4 group">
          <!-- Step circle number -->
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full ${d.color} flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs border border-outline-variant/30">
              <span class="material-symbols-outlined text-[16px]">${d.icon}</span>
            </div>
            <div class="w-0.5 grow bg-outline-variant/30 my-1 group-last:hidden"></div>
          </div>

          <!-- Step content card -->
          <div class="bg-surface-container-lowest p-3.5 sm:p-4 rounded-xl border border-outline-variant/30 shadow-2xs space-y-2 grow mb-3">
            <div class="flex items-start justify-between gap-2 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="font-label-xs-mono text-xs font-bold text-outline">Passo ${r.step}</span>
                <h4 class="font-bold text-xs sm:text-sm text-on-surface">${r.title}</h4>
              </div>
              ${r.badge?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-fixed text-on-primary-fixed">${r.badge}</span>`:""}
            </div>

            <p class="text-xs text-on-surface-variant leading-relaxed">${r.description}</p>

            ${r.tip?`
              <div class="p-2.5 rounded-lg bg-surface-container-low/70 border border-outline-variant/20 flex items-start gap-2 text-[11px] text-on-surface">
                <span class="material-symbols-outlined text-[14px] text-tertiary-container shrink-0 mt-0.5">tips_and_updates</span>
                <span class="italic"><strong class="not-italic font-semibold text-primary">Dica de Especialista:</strong> ${r.tip}</span>
              </div>
            `:""}
          </div>
        </div>
      `}).join(""),g=t.diningRecommendations.quickService.map(r=>`<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#188038] shrink-0 mt-0.5">check_circle</span><span>${r}</span></li>`).join(""),p=t.diningRecommendations.tableService.map(r=>`<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#1a73e8] shrink-0 mt-0.5">restaurant</span><span>${r}</span></li>`).join(""),f=t.diningRecommendations.snacks.map(r=>`<li class="flex items-start gap-1.5"><span class="material-symbols-outlined text-[14px] text-[#e37400] shrink-0 mt-0.5">icecream</span><span>${r}</span></li>`).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Title & Header -->
      <section class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Roteiros de Parques (Touring Plans)</h1>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-fixed text-on-tertiary-fixed">100% PT-BR</span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Planos de touring passo a passo baseados nos dados históricos de Undercover Tourist para economizar até 4 horas de filas por dia.
          </p>
        </div>

        <button type="button" id="btn-print-touring-plan" class="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 text-on-surface text-xs font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto shadow-2xs">
          <span class="material-symbols-outlined text-[16px]">print</span>
          <span>Imprimir Roteiro do Parque</span>
        </button>
      </section>

      <!-- Operator Filter Tabs -->
      <section class="flex items-center gap-1 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 overflow-x-auto scrollbar-none">
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="all"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-op="all">
          Todos os Roteiros (10)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="disney"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-op="disney">
          Disney (4)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="universal"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-op="universal">
          Universal & Epic Universe (5)
        </button>
        <button class="btn-touring-filter px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${e==="seaworld"?"bg-surface-container-lowest text-primary shadow-xs":"text-on-surface-variant hover:text-on-surface"}" data-op="seaworld">
          SeaWorld Orlando (1)
        </button>
      </section>

      <!-- Main Two-Column Layout (Park Selector + Active Plan Details) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <!-- Left: Park List Selector (4 cols on desktop) -->
        <div class="lg:col-span-4 space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-outline px-1">Selecione o Parque</h3>
          <div class="space-y-2 max-h-[700px] overflow-y-auto pr-1">
            ${l}
          </div>
        </div>

        <!-- Right: Active Plan Details (8 cols on desktop) -->
        <div class="lg:col-span-8 space-y-5" id="printable-touring-plan">
          <!-- Active Plan Hero Banner -->
          <div class="bg-surface-container-lowest p-5 sm:p-6 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-4">
            <div class="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  ${o(t.operator)}
                  <span class="text-xs text-outline font-medium">• ${t.targetAudience}</span>
                </div>
                <h2 class="text-lg sm:text-2xl font-bold text-on-surface">${t.title}</h2>
                <p class="text-xs sm:text-sm text-outline mt-0.5">${t.subtitle}</p>
              </div>

              <div class="px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-center shrink-0">
                <span class="text-[10px] text-outline block">Duração Estimada</span>
                <span class="font-label-xs-mono text-xs font-extrabold text-primary">${t.estimatedDuration}</span>
              </div>
            </div>

            <!-- Strategy Highlights Strip -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 rounded-xl bg-[#fef7ed] border border-[#f7dfb7] space-y-1">
                <div class="flex items-center gap-1.5 text-[#b97820] font-bold text-xs">
                  <span class="material-symbols-outlined text-[16px]">wb_twilight</span>
                  <span>Estratégia de Rope Drop & Portões</span>
                </div>
                <p class="text-xs text-[#6e460d]">${t.ropeDropArrival}</p>
              </div>

              <div class="p-3 rounded-xl bg-[#e8f0fe] border border-[#c2d7fc] space-y-1">
                <div class="flex items-center gap-1.5 text-[#1967d2] font-bold text-xs">
                  <span class="material-symbols-outlined text-[16px]">psychology</span>
                  <span>Filosofia de Economia de Fila</span>
                </div>
                <p class="text-xs text-[#134994]">${t.generalStrategy}</p>
              </div>
            </div>
          </div>

          <!-- Chronological Step-by-Step Sequence -->
          <div class="space-y-3">
            <div class="flex items-center justify-between px-1">
              <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-outline flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-primary">route</span>
                <span>Passo a Passo do Dia (${t.steps.length} Etapas)</span>
              </h3>
              <span class="text-[11px] text-outline font-medium">Ordem cronológica recomendada</span>
            </div>

            <div class="pt-1">
              ${n}
            </div>
          </div>

          <!-- Dining & Night Show Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Dining Recommendations -->
            <div class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-[#ebf6f1] text-[#1b6443] flex items-center justify-center">
                  <span class="material-symbols-outlined text-[18px]">restaurant_menu</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs sm:text-sm text-on-surface">Onde Comer Sem Erro</h4>
                  <span class="text-[11px] text-outline">Recomendações testadas e aprovadas</span>
                </div>
              </div>

              <div class="space-y-2.5 text-xs">
                <div>
                  <span class="font-bold text-[#188038] text-[11px] uppercase tracking-wider block mb-1">Rápido / Quick-Service</span>
                  <ul class="space-y-1 text-on-surface-variant">${g}</ul>
                </div>

                <div class="pt-1 border-t border-outline-variant/15">
                  <span class="font-bold text-[#1a73e8] text-[11px] uppercase tracking-wider block mb-1">Com Reserva / Table-Service</span>
                  <ul class="space-y-1 text-on-surface-variant">${p}</ul>
                </div>

                <div class="pt-1 border-t border-outline-variant/15">
                  <span class="font-bold text-[#e37400] text-[11px] uppercase tracking-wider block mb-1">Lanches & Sobremesas Famosas</span>
                  <ul class="space-y-1 text-on-surface-variant">${f}</ul>
                </div>
              </div>
            </div>

            <!-- Night Show Highlight -->
            <div class="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl border border-outline-variant/30 shadow-2xs space-y-3 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg bg-[#fff8e1] text-[#b97820] flex items-center justify-center">
                    <span class="material-symbols-outlined text-[18px]">celebration</span>
                  </div>
                  <div>
                    <h4 class="font-bold text-xs sm:text-sm text-on-surface">Show de Encerramento da Noite</h4>
                    <span class="text-[11px] text-outline">${t.nightShow.name}</span>
                  </div>
                </div>

                <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1 text-xs">
                  <div class="flex items-center justify-between">
                    <span class="text-outline font-medium">Horário Médio</span>
                    <span class="font-bold text-primary font-label-xs-mono">${t.nightShow.time}</span>
                  </div>
                </div>

                <div class="text-xs text-on-surface-variant leading-relaxed">
                  <strong class="font-semibold text-on-surface">Onde Assistir com Menos Aglomeração:</strong>
                  <p class="mt-1">${t.nightShow.tip}</p>
                </div>
              </div>

              <!-- Vault Link Alert -->
              <div class="p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 flex items-center justify-between text-xs text-outline">
                <span class="flex items-center gap-1.5">
                  <span class="material-symbols-outlined text-[15px] text-tertiary-container">folder_open</span>
                  <span>Versão para Obsidian disponível em <strong>Obsidian_Vault/02 - Planos de Parques</strong></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function _a(i,e,a=null,s=!1){const t=R.getAllRestaurants(!1),o=R.filterRestaurants(i),l=R.getFavorites(),c=R.getAuditSummary(),g=[{id:"all",label:"Todos",icon:"restaurant",count:t.length},{id:"in_park",label:"Dentro dos Parques",icon:"park",count:t.filter(u=>u.location_type==="in_park").length},{id:"disney_springs",label:"Disney Springs",icon:"storefront",count:t.filter(u=>u.location_type==="disney_springs").length},{id:"citywalk",label:"CityWalk",icon:"nightlife",count:t.filter(u=>u.location_type==="citywalk").length},{id:"resort_hotel",label:"Hotéis e Resorts",icon:"hotel",count:t.filter(u=>u.location_type==="resort_hotel").length},{id:"off_park",label:"Fora dos Parques",icon:"near_me",count:t.filter(u=>u.location_type==="off_park").length},{id:"economic",label:"Econômicos",icon:"savings",count:t.filter(u=>u.price_category==="$"||u.service_type==="quick_service").length},{id:"character_dining",label:"Com Personagens",icon:"sentiment_very_satisfied",count:t.filter(u=>u.character_dining).length},{id:"coffee_dessert",label:"Cafés & Sobremesas",icon:"bakery_dining",count:t.filter(u=>u.meal_types.includes("snack")||u.cuisine_types.some(m=>/doces|café|padaria|sorvetes/i.test(m))).length},{id:"favorites",label:"Favoritos",icon:"favorite",count:l.length}].map(u=>`
      <button 
        type="button" 
        class="btn-dining-cat-pill px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shrink-0 ${i.categoryTab===u.id?"bg-primary text-on-primary shadow-xs font-semibold":"bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"}" 
        data-category="${u.id}"
      >
        <span class="material-symbols-outlined text-[15px]">${u.icon}</span>
        <span>${u.label}</span>
        <span class="text-[10px] opacity-75 font-label-xs-mono">(${u.count})</span>
      </button>
    `).join("");let p="";if(a){const u=e.find(x=>x.date===a),m=u?`${u.dayOfWeek}, ${u.date.substring(5)} (${u.title})`:a,w=u!=null&&u.parkId?u.title:(u==null?void 0:u.activityType)==="shopping"?"Compras":"Descanso",b=R.getSuggestionsForDay(a,w).map(x=>{const y=R.getRestaurantById(x.restaurant_id);return`
        <div class="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between gap-2 shadow-2xs">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[11px] font-bold text-primary block">${x.restaurant_name}</span>
              <span class="text-[10px] text-outline">${y!=null&&y.park||(y==null?void 0:y.location_type)==="disney_springs"?"Disney Springs":(y==null?void 0:y.location_type)==="citywalk"?"CityWalk":"Fora dos Parques"} • ${(y==null?void 0:y.service_type)==="quick_service"?"Serviço Rápido":"Serviço de Mesa"}</span>
            </div>
            ${x.requires_advance_reservation?'<span class="text-[9px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold shrink-0">Reserva 60d</span>':'<span class="text-[9px] px-1.5 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-semibold shrink-0">Sem Reserva</span>'}
          </div>
          <p class="text-[11px] text-on-surface-variant leading-relaxed">
            ${x.reason_summary}
          </p>
          <div class="flex items-center justify-between pt-1 border-t border-outline-variant/15 text-[11px]">
            <span class="text-[10px] text-outline font-label-xs-mono">Conveniência: ${x.convenience_score}%</span>
            <button 
              type="button" 
              class="btn-quick-add-to-day text-primary font-semibold hover:underline flex items-center gap-0.5" 
              data-restaurant-id="${x.restaurant_id}" 
              data-date="${a}"
            >
              <span>Agendar</span>
              <span class="material-symbols-outlined text-[13px]">add_circle</span>
            </button>
          </div>
        </div>
      `}).join("");p=`
      <section class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px] text-primary">lightbulb</span>
            <div>
              <h3 class="font-bold text-sm text-on-surface">Sugestões de Onde Comer para: ${m}</h3>
              <p class="text-[11px] text-outline">Recomendações baseadas na localização planejada, tempo de deslocamento e perfil do dia.</p>
            </div>
          </div>
          <button type="button" id="btn-close-day-suggestions" class="p-1 rounded-lg text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5">
          ${b||'<p class="text-xs text-outline col-span-4 py-2">Nenhuma sugestão específica encontrada para este dia.</p>'}
        </div>
      </section>
    `}const f=o.map(u=>{const m=l.includes(u.restaurant_id);let w="";u.operational_status==="confirmed"?w='<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-semibold">Confirmado</span>':u.operational_status==="reported_closed"?w='<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold">Fechado (Histórico)</span>':w='<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-semibold" title="Aguardando confirmação operacional oficial para 2027">Pendente de Confirmação</span>';const _=u.park||u.resort||u.shopping_center||(u.location_type==="disney_springs"?"Disney Springs":u.location_type==="citywalk"?"Universal CityWalk":"Fora dos Parques"),b={quick_service:"Balcão / Rápido",table_service:"Serviço de Mesa",buffet:"Buffet",kiosk_snack:"Quiosque / Snack",bar_lounge:"Bar / Lounge",fine_dining:"Alta Gastronomia"};return`
      <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/30 flex flex-col justify-between gap-3 hover:border-primary/40 transition-all" data-id="${u.restaurant_id}">
        <!-- Top: Nome, Categoria e Favorito -->
        <div>
          <div class="flex items-start justify-between gap-2 mb-1">
            <div>
              <h3 class="font-headline-sm text-[15px] font-bold text-on-surface leading-tight hover:text-primary cursor-pointer btn-open-restaurant-details" data-id="${u.restaurant_id}">
                ${u.name}
              </h3>
              <span class="text-[11px] text-outline font-medium block">
                ${_}
              </span>
            </div>
            <button 
              type="button" 
              class="btn-toggle-dining-favorite p-1 rounded-lg transition-colors hover:bg-surface-container" 
              data-id="${u.restaurant_id}" 
              title="${m?"Remover dos favoritos":"Favoritar restaurante"}"
            >
              <span class="material-symbols-outlined text-[19px] ${m?"text-[#e53935] fill-1":"text-outline-variant"}">
                ${m?"favorite":"favorite_border"}
              </span>
            </button>
          </div>

          <!-- Tags strip -->
          <div class="flex flex-wrap items-center gap-1.5 pt-1">
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
              ${b[u.service_type]||u.service_type}
            </span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs-mono font-bold" title="${u.price_category?`Faixa de preço: ${u.price_category}`:"Faixa de preço não confirmada"}">
              ${u.price_category||"Preço N/D"}
            </span>
            ${u.character_dining?'<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ede7f6] text-[#512da8] font-bold flex items-center gap-0.5"><span class="material-symbols-outlined text-[12px]">sentiment_very_satisfied</span> Personagens</span>':""}
            ${u.reservation_required?'<span class="text-[10px] px-1.5 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-semibold">Reserva Obrigatória</span>':""}
            ${w}
          </div>

          <!-- Culinária -->
          <p class="text-[11px] text-on-surface-variant font-medium pt-2 line-clamp-1">
            <span class="text-outline">Cozinha:</span> ${u.cuisine_types.join(", ")}
          </p>

          <!-- Resumo Curto -->
          <p class="text-[11px] text-outline pt-1 line-clamp-2 leading-relaxed">
            ${u.short_description}
          </p>
        </div>

        <!-- Rodapé de Ações do Card -->
        <div class="pt-2 border-t border-outline-variant/20 flex items-center justify-between gap-1">
          <button 
            type="button" 
            class="btn-open-restaurant-details text-[11px] font-semibold text-primary hover:text-primary-container px-2 py-1 rounded hover:bg-surface-container transition-colors flex items-center gap-1" 
            data-id="${u.restaurant_id}"
          >
            <span class="material-symbols-outlined text-[14px]">info</span>
            <span>Detalhes</span>
          </button>

          <button 
            type="button" 
            class="btn-add-restaurant-to-itinerary text-[11px] font-semibold bg-primary text-on-primary hover:bg-primary-container px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-2xs" 
            data-id="${u.restaurant_id}"
            data-name="${u.name}"
          >
            <span class="material-symbols-outlined text-[14px]">calendar_add_on</span>
            <span>Adicionar ao Roteiro</span>
          </button>
        </div>
      </div>
    `}).join("");let r="";s&&(r=`
      <section class="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-4 shadow-sm animate-fade-in">
        <div class="flex items-center justify-between border-b border-outline-variant/20 pb-3">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[22px] text-primary">admin_panel_settings</span>
            <div>
              <h2 class="font-bold text-sm text-on-surface">Painel Administrativo & Auditoria de Fontes</h2>
              <p class="text-[11px] text-outline">Monitoramento de URLs descobertas, integridade de extração e governança de dados operacionais.</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" id="btn-export-catalog-csv" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">download</span> CSV Catálogo
            </button>
            <button type="button" id="btn-export-catalog-json" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">code</span> JSON Catálogo
            </button>
            <button type="button" id="btn-export-meals-csv" class="px-2.5 py-1 rounded-lg bg-surface border border-outline-variant/40 text-[11px] font-semibold text-on-surface hover:bg-surface-container flex items-center gap-1">
              <span class="material-symbols-outlined text-[13px]">table_view</span> CSV Refeições
            </button>
          </div>
        </div>

        <!-- Métricas Administrativas -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Fontes Registradas</span>
            <span class="font-label-xs-mono text-base font-bold text-primary">${c.sources_registered}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">URLs Descobertas</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${c.discovered_urls_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Artigos Processados</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${c.articles_processed}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Erros de Coleta</span>
            <span class="font-label-xs-mono text-base font-bold text-[#1b6443]">${c.errors_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Restaurantes</span>
            <span class="font-label-xs-mono text-base font-bold text-primary">${c.restaurants_identified}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Duplicatas</span>
            <span class="font-label-xs-mono text-base font-bold text-on-surface">${c.duplicates_count}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <span class="text-[10px] text-outline block">Aguardando Revisão</span>
            <span class="font-label-xs-mono text-base font-bold text-[#8f5700]">${c.pending_review_count}</span>
          </div>
        </div>

        <!-- Notas de Versão e Diferenças -->
        <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1 text-xs">
          <span class="font-semibold text-on-surface block">Relatório de Diferenças e Auditoria da Versão (${c.version} — ${c.last_execution_date}):</span>
          <ul class="list-disc list-inside text-outline space-y-0.5 text-[11px]">
            ${c.version_diff_notes.map(u=>`<li>${u}</li>`).join("")}
          </ul>
        </div>
      </section>
    `);const d=[{id:"all",label:"Todos os Parques"},{id:"Magic Kingdom",label:"Magic Kingdom"},{id:"EPCOT",label:"EPCOT"},{id:"Disney's Hollywood Studios",label:"Hollywood Studios"},{id:"Disney's Animal Kingdom",label:"Animal Kingdom"},{id:"Universal Studios Florida",label:"Universal Studios"},{id:"Universal's Islands of Adventure",label:"Islands of Adventure"},{id:"Universal Epic Universe",label:"Epic Universe"},{id:"Universal Volcano Bay",label:"Volcano Bay"},{id:"SeaWorld Orlando",label:"SeaWorld Orlando"},{id:"Busch Gardens Tampa Bay",label:"Busch Gardens"}].map(u=>`<option value="${u.id}" ${i.park===u.id?"selected":""}>${u.label}</option>`).join(""),v=e.map(u=>`<option value="${u.date}" ${a===u.date?"selected":""}>${u.date.substring(5)} (${u.dayOfWeek}) — ${u.title}</option>`).join("");return`
    <div class="flex flex-col w-full gap-space-lg animate-fade-in">
      <!-- Top Title & Controls Header -->
      <section class="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="font-display-title text-display-title text-on-surface tracking-tight">Onde Comer</h1>
            <span class="text-[11px] px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold font-label-xs-mono">
              ${o.length} Restaurantes
            </span>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Encontre restaurantes e planeje suas refeições durante a viagem.
          </p>
        </div>

        <!-- Quick Top Action Buttons -->
        <div class="flex flex-wrap items-center gap-2">
          <!-- Selector de Sugestões por Dia -->
          <div class="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-xl border border-outline-variant/30 text-xs">
            <span class="material-symbols-outlined text-[16px] text-primary pl-1.5">auto_awesome</span>
            <select id="select-suggest-day" class="h-8 bg-transparent text-xs font-semibold text-on-surface focus:outline-none pr-2">
              <option value="">Sugestões para o dia...</option>
              ${v}
            </select>
          </div>

          <!-- Botão Painel Administrativo -->
          <button 
            type="button" 
            id="btn-toggle-admin-panel" 
            class="px-3 py-2 rounded-xl text-xs font-semibold border border-outline-variant/30 flex items-center gap-1.5 transition-colors ${s?"bg-primary text-on-primary":"bg-surface-container-low text-on-surface hover:bg-surface-container"}"
          >
            <span class="material-symbols-outlined text-[16px]">tune</span>
            <span>Auditoria & Fontes</span>
          </button>
        </div>
      </section>

      <!-- Painel Administrativo (se expandido) -->
      ${r}

      <!-- Painel de Sugestões do Dia (se selecionado) -->
      ${p}

      <!-- Barra de Categorias Principais (Pills) -->
      <section class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        ${g}
      </section>

      <!-- Search & Filters Container -->
      <section class="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 space-y-3 shadow-sm">
        <!-- Search bar -->
        <div class="relative w-full">
          <span class="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">search</span>
          <input 
            type="text" 
            id="input-dining-search" 
            value="${i.searchQuery||""}" 
            placeholder="Pesquisar por nome, culinária, parque, personagens ou palavras-chave..." 
            class="w-full h-10 pl-9 pr-10 rounded-xl border border-outline-variant/40 bg-surface text-on-surface text-xs focus:border-primary focus:ring-1 focus:ring-primary font-medium"
          />
          ${i.searchQuery?`
            <button type="button" id="btn-clear-dining-search" class="absolute right-3 top-2.5 text-outline hover:text-on-surface">
              <span class="material-symbols-outlined text-[16px]">close</span>
            </button>
          `:""}
        </div>

        <!-- Filter Selects Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          <!-- Localização -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Localização</label>
            <select id="filter-dining-location-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${i.locationType==="all"?"selected":""}>Todas</option>
              <option value="in_park" ${i.locationType==="in_park"?"selected":""}>Dentro do Parque</option>
              <option value="disney_springs" ${i.locationType==="disney_springs"?"selected":""}>Disney Springs</option>
              <option value="citywalk" ${i.locationType==="citywalk"?"selected":""}>CityWalk</option>
              <option value="resort_hotel" ${i.locationType==="resort_hotel"?"selected":""}>Hotéis & Resorts</option>
              <option value="off_park" ${i.locationType==="off_park"?"selected":""}>Fora dos Parques</option>
            </select>
          </div>

          <!-- Parque -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Parque</label>
            <select id="filter-dining-park" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              ${d}
            </select>
          </div>

          <!-- Tipo de Refeição -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Refeição</label>
            <select id="filter-dining-meal-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${i.mealType==="all"?"selected":""}>Todas</option>
              <option value="breakfast" ${i.mealType==="breakfast"?"selected":""}>Café da Manhã</option>
              <option value="lunch" ${i.mealType==="lunch"?"selected":""}>Almoço</option>
              <option value="dinner" ${i.mealType==="dinner"?"selected":""}>Jantar</option>
              <option value="snack" ${i.mealType==="snack"?"selected":""}>Lanches / Sobremesas</option>
            </select>
          </div>

          <!-- Tipo de Restaurante -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Tipo de Serviço</label>
            <select id="filter-dining-service-type" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${i.serviceType==="all"?"selected":""}>Todos</option>
              <option value="quick_service" ${i.serviceType==="quick_service"?"selected":""}>Balcão / Rápido</option>
              <option value="table_service" ${i.serviceType==="table_service"?"selected":""}>Mesa (Table Service)</option>
              <option value="buffet" ${i.serviceType==="buffet"?"selected":""}>Buffet</option>
              <option value="kiosk_snack" ${i.serviceType==="kiosk_snack"?"selected":""}>Quiosque</option>
              <option value="bar_lounge" ${i.serviceType==="bar_lounge"?"selected":""}>Bar / Lounge</option>
              <option value="fine_dining" ${i.serviceType==="fine_dining"?"selected":""}>Alta Gastronomia</option>
            </select>
          </div>

          <!-- Faixa de Preço -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Faixa de Preço</label>
            <select id="filter-dining-price-category" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="all" ${i.priceCategory==="all"?"selected":""}>Todas</option>
              <option value="$" ${i.priceCategory==="$"?"selected":""}>$ (Até $15 - Econômico)</option>
              <option value="$$" ${i.priceCategory==="$$"?"selected":""}>$$ ($15 a $35 - Moderado)</option>
              <option value="$$$" ${i.priceCategory==="$$$"?"selected":""}>$$$ ($35 a $60 - Superior)</option>
              <option value="$$$$" ${i.priceCategory==="$$$$"?"selected":""}>$$$$ (Acima de $60 - Luxo)</option>
            </select>
          </div>

          <!-- Status Operacional -->
          <div>
            <label class="block text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Status Operacional</label>
            <select id="filter-dining-confirmed-only" class="w-full h-8 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
              <option value="false" ${i.confirmedOnly?"":"selected"}>Todos os Status</option>
              <option value="true" ${i.confirmedOnly?"selected":""}>Apenas Confirmados</option>
            </select>
          </div>
        </div>

        <!-- Checkbox Filters Strip -->
        <div class="flex flex-wrap items-center gap-4 pt-2 border-t border-outline-variant/20 text-xs text-on-surface">
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-character-dining" class="w-4 h-4 rounded text-primary" ${i.characterDiningOnly?"checked":""} />
            <span>Refeições com Personagens</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-reservation-required" class="w-4 h-4 rounded text-primary" ${i.reservationRequiredOnly?"checked":""} />
            <span>Exige Reserva</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-vegetarian-options" class="w-4 h-4 rounded text-primary" ${i.vegetarianOnly?"checked":""} />
            <span>Opções Vegetarianas / Plant-Based</span>
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer select-none">
            <input type="checkbox" id="check-favorites-only" class="w-4 h-4 rounded text-primary" ${i.favoritesOnly?"checked":""} />
            <span>Apenas Favoritos</span>
          </label>

          <button type="button" id="btn-reset-dining-filters" class="ml-auto text-xs text-primary hover:underline font-semibold flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">refresh</span>
            <span>Limpar Filtros</span>
          </button>
        </div>
      </section>

      <!-- Grid de Restaurantes -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md">
        ${f||`
          <div class="col-span-full py-12 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 space-y-2">
            <span class="material-symbols-outlined text-[36px] text-outline">search_off</span>
            <h3 class="font-bold text-sm text-on-surface">Nenhum restaurante encontrado com os filtros atuais.</h3>
            <p class="text-xs text-outline">Tente ajustar a busca textual ou selecione outra categoria.</p>
          </div>
        `}
      </section>
    </div>
  `}function wa(i){var s;const e=i.isLive?`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">
        <span class="w-1.5 h-1.5 rounded-full bg-[#27865b] animate-ping"></span>
        Tempo Real (Live API)
      </span>`:`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-outline text-[10px]">
        <span class="w-1.5 h-1.5 rounded-full bg-outline"></span>
        Estimativa de Fila
      </span>`,a=i.lands.map(t=>{const o=t.rides.map(l=>{let c="";return l.is_open?l.wait_time===0?c='<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">Livre</span>':l.wait_time<=20?c=`<span class="px-2 py-0.5 rounded bg-[#ebf6f1] text-[#1b6443] font-bold text-[10px]">${l.wait_time} min</span>`:l.wait_time<=45?c=`<span class="px-2 py-0.5 rounded bg-[#fef7ed] text-[#8f5700] font-bold text-[10px]">${l.wait_time} min</span>`:c=`<span class="px-2 py-0.5 rounded bg-[#fdf2f2] text-[#93000a] font-bold text-[10px]">${l.wait_time} min</span>`:c='<span class="px-2 py-0.5 rounded bg-surface-container text-outline text-[10px]">Fechado</span>',`
            <div class="flex items-center justify-between py-1.5 border-b border-outline-variant/15 text-xs">
              <span class="font-medium text-on-surface truncate pr-2">${l.name}</span>
              ${c}
            </div>
          `}).join("");return`
        <div class="pt-2">
          <h4 class="font-bold text-[11px] text-outline uppercase tracking-wider mb-1">${t.name}</h4>
          <div class="space-y-0.5 bg-surface rounded-lg p-2 border border-outline-variant/20">
            ${o||'<p class="text-outline text-[11px]">Nenhuma atração listada nesta área.</p>'}
          </div>
        </div>
      `}).join("");return`
    <div class="space-y-3">
      <!-- Summary metrics strip -->
      <div class="grid grid-cols-3 gap-2">
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center">
          <span class="text-[10px] text-outline block">Média de Espera</span>
          <span class="font-label-xs-mono text-base font-extrabold text-primary">${i.avgWaitTime} min</span>
        </div>
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center">
          <span class="text-[10px] text-outline block">Atrações Abertas</span>
          <span class="font-label-xs-mono text-base font-bold text-on-surface">${i.openRides} / ${i.totalRides}</span>
        </div>
        <div class="p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-center truncate">
          <span class="text-[10px] text-outline block truncate">Pico de Fila</span>
          <span class="font-label-xs-mono text-base font-extrabold text-[#93000a] truncate" title="${((s=i.maxWaitRide)==null?void 0:s.name)||"—"}">
            ${i.maxWaitRide?`${i.maxWaitRide.wait_time} min`:"—"}
          </span>
        </div>
      </div>

      <!-- Status line -->
      <div class="flex items-center justify-between text-[11px] px-1">
        <div class="flex items-center gap-1.5">
          ${e}
          <span class="text-outline font-label-xs-mono">Última leitura: ${i.lastUpdated}</span>
        </div>
        <a href="https://queue-times.com/pt-BR" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold inline-flex items-center gap-0.5" title="Acesse os dados em Queue-Times.com">
          <span>Powered by Queue-Times.com</span>
          <span class="material-symbols-outlined text-[12px]">open_in_new</span>
        </a>
      </div>

      <!-- Lands and Rides List -->
      <div class="max-h-56 overflow-y-auto space-y-2 pr-1">
        ${a}
      </div>
    </div>
  `}function ka(i,e,a){const s=i.parkId?E[i.parkId]:null,t=i.parkId?a.records[`${i.date}_${i.parkId}`]:null,o=V.getCrowdBadgeStyle((t==null?void 0:t.crowdLevel)??null),l=Object.values(E).map(f=>`<option value="${f.id}" ${i.parkId===f.id?"selected":""}>${f.name} (${f.operator.toUpperCase()})</option>`).join(""),c=e.map(f=>`<option value="${f.id}" ${i.ticketId===f.id?"selected":""}>${f.name}</option>`).join(""),n=R.getMealsForDate(i.date),g={breakfast:"Café da Manhã",lunch:"Almoço",dinner:"Jantar",snack:"Lanche / Sobremesa"},p=n.map(f=>`
      <div class="flex items-center justify-between p-2.5 rounded-lg bg-surface border border-outline-variant/20 text-xs">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[16px] text-primary">restaurant</span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-on-surface">${g[f.meal_type]||f.meal_type}:</span>
              <span class="font-semibold text-primary">${f.restaurant_name}</span>
              <span class="text-[10px] text-outline font-label-xs-mono">(${f.planned_time})</span>
            </div>
            ${f.personal_notes?`<span class="text-[10px] text-outline block">${f.personal_notes}</span>`:""}
            ${f.reservation_reference?`<span class="text-[10px] text-[#1b6443] font-label-xs-mono">Reserva: ${f.reservation_reference}</span>`:""}
          </div>
        </div>
        <button type="button" class="btn-remove-day-meal p-1 text-outline hover:text-[#ba1a1a] rounded transition-colors" data-meal-id="${f.meal_id}" title="Remover refeição">
          <span class="material-symbols-outlined text-[16px]">delete</span>
        </button>
      </div>
    `).join("");return`
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Modal Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px]">calendar_today</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                ${i.date.substring(5)} (${i.dayOfWeek}) — Detalhes do Dia
              </h2>
              <span class="text-xs text-outline font-medium">Dia ${i.dayNumber} da programação</span>
            </div>
          </div>

          <button id="btn-close-modal" class="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <form id="form-day-details" class="p-6 overflow-y-auto space-y-4 text-xs" data-date="${i.date}">
          <!-- Title & Activity Type -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Título da Atividade</label>
              <input type="text" name="title" value="${i.title}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Tipo de Dia</label>
              <select name="activityType" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="park" ${i.activityType==="park"?"selected":""}>Parque Temático</option>
                <option value="rest" ${i.activityType==="rest"?"selected":""}>Descanso / Pausa</option>
                <option value="shopping" ${i.activityType==="shopping"?"selected":""}>Compras / Outlets</option>
                <option value="arrival" ${i.activityType==="arrival"?"selected":""}>Chegada em Orlando</option>
                <option value="departure" ${i.activityType==="departure"?"selected":""}>Partida / Retorno (Check-out & Voo)</option>
              </select>
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Descrição</label>
            <textarea name="description" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">${i.description}</textarea>
          </div>

          <!-- Park, Ticket & Lock -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Parque Associado</label>
              <select name="parkId" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="">Nenhum (Dia sem parque)</option>
                ${l}
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Ingresso Utilizado</label>
              <select name="ticketId" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="">Nenhum ingresso</option>
                ${c}
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Nível de Esforço</label>
              <select name="effortLevel" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="OFF" ${i.effortLevel==="OFF"?"selected":""}>OFF (Descanso total)</option>
                <option value="Leve" ${i.effortLevel==="Leve"?"selected":""}>Leve</option>
                <option value="Médio" ${i.effortLevel==="Médio"?"selected":""}>Médio</option>
                <option value="Pesado" ${i.effortLevel==="Pesado"?"selected":""}>Pesado</option>
              </select>
            </div>
          </div>

          <!-- Crowd Status Box -->
          <div class="p-3 rounded-xl ${o.bgClass} border ${o.borderClass} flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] ${o.textClass}">groups</span>
              <span class="font-semibold text-on-surface">Lotação Prevista:</span>
              <span class="font-bold ${o.textClass}">${o.label}</span>
            </div>
            ${t!=null&&t.lastUpdated?`<span class="text-[11px] text-outline font-label-xs-mono">Atualizado: ${t.lastUpdated}</span>`:""}
          </div>

          ${i.parkId?`
          <!-- Quick link to Touring Plan -->
          <div class="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-primary">route</span>
              <div>
                <span class="font-bold text-on-surface text-xs block">Roteiro Passo a Passo (Touring Plan)</span>
                <span class="text-[10px] text-outline">Estratégia de Rope Drop e atrações sequenciadas</span>
              </div>
            </div>
            <button type="button" class="btn-open-park-plan px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-2xs" data-park-id="${i.parkId}">
              <span class="material-symbols-outlined text-[15px]">menu_book</span>
              <span>Ver Roteiro do Parque</span>
            </button>
          </div>

          <!-- Live Queue Times Section (Powered by Queue-Times.com) -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2.5" id="day-live-queue-section" data-park-id="${i.parkId}">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-primary">schedule</span>
                <span class="font-bold text-on-surface text-xs sm:text-sm">Filas ao Vivo — ${(s==null?void 0:s.name)||"Parque"}</span>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" id="btn-refresh-day-queues" class="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface hover:bg-surface-container text-on-surface border border-outline-variant/30 flex items-center gap-1 transition-colors">
                  <span class="material-symbols-outlined text-[14px]">refresh</span>
                  <span>Atualizar</span>
                </button>
              </div>
            </div>

            <div id="day-queue-content" class="text-xs">
              <div class="flex items-center justify-center py-6 text-outline gap-2">
                <span class="material-symbols-outlined animate-spin text-[18px] text-primary">progress_activity</span>
                <span>Consultando filas em tempo real via Queue-Times.com...</span>
              </div>
            </div>
          </div>
          `:""}

          <!-- Alimentação & Refeições Agendadas -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px] text-primary">lunch_dining</span>
                <div>
                  <span class="font-bold text-on-surface text-xs block">Alimentação & Refeições Agendadas</span>
                  <span class="text-[10px] text-outline">Café, almoço, jantar ou lanches vinculados a este dia</span>
                </div>
              </div>
              <button 
                type="button" 
                class="btn-open-add-meal-for-date px-2.5 py-1 rounded-md text-[11px] font-semibold bg-primary text-on-primary hover:bg-primary-container flex items-center gap-1 transition-colors" 
                data-date="${i.date}"
              >
                <span class="material-symbols-outlined text-[13px]">add</span>
                <span>Adicionar Refeição</span>
              </button>
            </div>

            <div class="space-y-1.5">
              ${p||'<p class="text-outline text-[11px] italic py-1">Nenhuma refeição associada a este dia ainda.</p>'}
            </div>
          </div>

          <!-- Times: Arrival & Departure -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto de Chegada</label>
              <input type="text" name="plannedArrivalTime" value="${i.plannedArrivalTime||(s!=null&&s.defaultOpeningHour?s.defaultOpeningHour:"09:00")}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto de Saída</label>
              <input type="text" name="plannedDepartureTime" value="${i.plannedDepartureTime||(s!=null&&s.defaultClosingHour?s.defaultClosingHour:"21:00")}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>
          </div>

          <!-- Rope Drop Strategy -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Estratégia de Rope Drop</label>
            <input type="text" name="ropeDropStrategy" value="${i.ropeDropStrategy||(s!=null&&s.ropeDropAdvice?s.ropeDropAdvice:"")}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
          </div>

          <!-- Personal Notes -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Observações Pessoais</label>
            <textarea name="personalNotes" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">${i.personalNotes||""}</textarea>
          </div>

          <!-- Lock Date Checkbox -->
          <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-[#c89532]">lock</span>
              <div>
                <span class="font-semibold text-on-surface block">Bloquear Esta Data</span>
                <span class="text-[11px] text-outline">Impede que o otimizador altere ou troque este dia de posição.</span>
              </div>
            </div>
            <input type="checkbox" name="isLocked" class="w-5 h-5 rounded text-primary" ${i.isLocked?"checked":""} />
          </div>

          <!-- Modal Footer -->
          <div class="pt-4 border-t border-outline-variant/30 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Salvar Alterações</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}function Sa(i,e){const a=e.find(o=>o.date===i);if(!a)return"";const t=e.filter(o=>o.date!==i&&!o.isLocked&&o.date!=="2027-05-05"&&o.date!=="2027-05-23").map(o=>`<option value="${o.date}">${o.date.substring(5)} (${o.dayOfWeek}): ${o.title}</option>`).join("");return`
    <div id="swap-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-surface-container-lowest w-full max-w-md rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
        <div class="px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">swap_horiz</span>
            <h3 class="font-headline-sm text-sm font-bold text-on-surface">
              Trocar Atividade de Data
            </h3>
          </div>
          <button id="btn-close-swap-modal" class="p-1 rounded text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="form-swap-days" class="p-5 space-y-4 text-xs" data-source="${i}">
          <div class="p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <span class="text-outline uppercase text-[10px] font-bold block mb-1">Origem (Data selecionada):</span>
            <span class="font-bold text-sm text-on-surface">${a.date.substring(5)} (${a.dayOfWeek}): ${a.title}</span>
          </div>

          <div>
            <label class="block text-on-surface font-semibold mb-1">Trocar com qual data?</label>
            <select name="targetDate" class="w-full h-10 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${t}
            </select>
          </div>

          <p class="text-xs text-outline leading-relaxed">
            As duas programações serão invertidas preservando os ingressos associados e as datas do calendário.
          </p>

          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
            <button type="button" id="btn-cancel-swap" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">swap_horiz</span>
              <span>Confirmar Troca</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}function Da(i){return`
    <div id="ticket-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col">
        <div class="px-5 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-[20px]">confirmation_number</span>
            <h3 class="font-headline-sm text-sm font-bold text-on-surface">
              Ajustar Regras do Ingresso
            </h3>
          </div>
          <button id="btn-close-ticket-modal" class="p-1 rounded text-outline hover:text-on-surface">
            <span class="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form id="form-ticket-rules" class="p-5 space-y-4 text-xs" data-id="${i.id}">
          <div>
            <label class="block text-on-surface font-semibold mb-1">Nome do Ingresso</label>
            <input type="text" name="name" value="${i.name}" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Total de Visitas Permitidas</label>
              <input type="number" name="totalVisitsAllowed" value="${i.totalVisitsAllowed}" min="1" max="14" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Janela de Validade (dias corridos)</label>
              <input type="number" name="validityWindowDays" value="${i.validityWindowDays||""}" placeholder="Sem limite" min="1" max="30" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Status de Confirmação</label>
              <select name="ruleStatus" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="pending_confirmation" ${i.ruleStatus==="pending_confirmation"?"selected":""}>Pendente de confirmação</option>
                <option value="confirmed" ${i.ruleStatus==="confirmed"?"selected":""}>Confirmado oficialmente</option>
                <option value="unverifiable" ${i.ruleStatus==="unverifiable"?"selected":""}>Não verificável</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Repetição de Parques</label>
              <select name="allowParkRepetition" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
                <option value="false" ${i.allowParkRepetition?"":"selected"}>Não permitida (1 por parque)</option>
                <option value="true" ${i.allowParkRepetition?"selected":""}>Permitida</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-on-surface font-semibold mb-1">Nota Oficial / Restrições</label>
            <textarea name="officialSourceNote" rows="2" class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">${i.officialSourceNote}</textarea>
          </div>

          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
            <button type="button" id="btn-cancel-ticket-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Salvar Regras</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}function $a(i,e="2027-05-05",a){const s=e||"2027-05-05",t=a,o=Math.max(3,me(s,t)+1);return`
    <div id="trip-gen-modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[92vh]">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-[22px]">auto_fix_high</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                Gerador de Roteiro Sob Medida
              </h2>
              <span class="text-xs text-outline font-medium">Calcule o itinerário ideal informando sua chegada e partida</span>
            </div>
          </div>

          <button id="btn-close-trip-gen-modal" class="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form (Scrollable) -->
        <form id="form-generate-custom-trip" class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Dates Selection (Chegada e Partida) -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-3">
            <div class="flex items-center justify-between">
              <label class="font-bold text-sm text-on-surface flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                <span>Período da Viagem</span>
              </label>
              <span id="label-selected-trip-days" class="font-label-xs-mono text-sm font-extrabold text-primary px-3 py-1 bg-surface-container rounded-lg border border-outline-variant/30 shadow-2xs">
                ${o} dias de estadia
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label class="block text-on-surface font-semibold mb-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px] text-[#27865b]">flight_land</span>
                  <span>Data de Chegada (Início)</span>
                </label>
                <input 
                  type="date" 
                  id="input-trip-start-date" 
                  name="startDate" 
                  value="${s}" 
                  class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" 
                  required 
                />
              </div>

              <div>
                <label class="block text-on-surface font-semibold mb-1 flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px] text-[#c44b4b]">flight_takeoff</span>
                  <span>Data de Partida (Final)</span>
                </label>
                <input 
                  type="date" 
                  id="input-trip-end-date" 
                  name="endDate" 
                  value="${t}" 
                  class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" 
                  required 
                />
              </div>
            </div>

            <!-- Days Slider Sync -->
            <div class="pt-2">
              <div class="flex items-center justify-between text-[11px] text-outline mb-1">
                <span>Ajuste rápido da duração:</span>
                <span id="label-slider-val" class="font-semibold text-on-surface">${o} dias</span>
              </div>
              <input 
                type="range" 
                id="input-trip-total-days" 
                name="totalDays" 
                min="4" 
                max="28" 
                value="${o}" 
                class="w-full"
              />
              <div class="flex items-center justify-between text-[10px] text-outline pt-0.5">
                <span>5 dias</span>
                <span>10 dias</span>
                <span>14 dias (2 sem.)</span>
                <span>19 dias (Padrão)</span>
                <span>25+ dias</span>
              </div>
            </div>
          </div>

          <!-- Departure Day Logistics -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px] text-primary">luggage</span>
              <label class="font-bold text-on-surface text-[13px]">Logística do Dia de Partida (Final)</label>
            </div>
            <p class="text-[11px] text-outline leading-relaxed">
              O último dia define o encerramento do seu roteiro. Escolha como prefere alocar seu tempo antes do retorno:
            </p>

            <div class="space-y-2 pt-1">
              <label class="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface hover:bg-surface-container border border-outline-variant/30 cursor-pointer transition-colors">
                <input type="radio" name="departureOption" value="flight_only" checked class="mt-0.5 text-primary">
                <div class="flex flex-col">
                  <span class="font-semibold text-on-surface">Apenas Check-out, Malas & Aeroporto MCO (Recomendado)</span>
                  <span class="text-[11px] text-outline leading-relaxed">
                    Dia sem parque, reservado para pesagem de bagagens (23kg), check-out tranquilo e deslocamento para o aeroporto com 3h de antecedência. O Grande Encerramento acontece no dia anterior.
                  </span>
                </div>
              </label>

              <label class="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface hover:bg-surface-container border border-outline-variant/30 cursor-pointer transition-colors">
                <input type="radio" name="departureOption" value="morning_park" class="mt-0.5 text-primary">
                <div class="flex flex-col">
                  <span class="font-semibold text-on-surface">Incluir Parque Matinal no Dia de Partida</span>
                  <span class="text-[11px] text-outline leading-relaxed">
                    Indicado para quem possui voo tarde da noite e deseja aproveitar a manhã do último dia em uma atração clássica (Magic Kingdom).
                  </span>
                </div>
              </label>
            </div>
          </div>

          <!-- Profile -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Perfil da Viagem</label>
            <select name="profile" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary">
              <option value="equilibrado" selected>Equilibrado: Melhores Parques + Outlets Baratos</option>
              <option value="foco_parques">Foco em Parques Radicais & Montanhas-Russas</option>
              <option value="economico_compras">Econômico: Mais Compras e Parques Essenciais</option>
              <option value="familia">Família com Crianças (Ritmo Mais Leve)</option>
            </select>
          </div>

          <!-- Preferences -->
          <div class="space-y-2 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="includeBuschGardensTampa" checked class="w-4 h-4 rounded text-primary">
              <span class="text-on-surface font-medium">Incluir Busch Gardens em Tampa (~1h15 de estrada pela I-4)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="includeEpicUniverseTwoDays" checked class="w-4 h-4 rounded text-primary">
              <span class="text-on-surface font-medium">Prever 2 visitas ao novo Universal Epic Universe (para viagens de 12+ dias)</span>
            </label>
          </div>

          <!-- Dynamic Advice Box -->
          <div id="trip-preview-box" class="p-3.5 rounded-xl bg-primary-fixed/30 border border-primary-fixed text-xs text-on-primary-fixed space-y-1">
            <strong class="font-bold flex items-center gap-1.5 text-primary">
              <span class="material-symbols-outlined text-[16px]">info</span>
              <span>Distribuição Estimada do Roteiro:</span>
            </strong>
            <p id="trip-preview-text" class="text-on-surface leading-relaxed">
              Calculando distribuição inteligente de parques e paradas nos outlets mais baratos (International Premium, Vineland e Ross Dress for Less)...
            </p>
          </div>

          <!-- Warning note -->
          <p class="text-[11px] text-outline leading-relaxed">
            * O roteiro atual será automaticamente salvo como um Ponto de Restauração no seu Histórico.
          </p>

          <!-- Footer -->
          <div class="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-trip-gen" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-sm flex items-center gap-2">
              <span class="material-symbols-outlined text-[17px]">auto_fix_high</span>
              <span>Gerar Roteiro Sob Medida</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}function Ca(i){const e=R.getRestaurantById(i);if(!e)return"";const a=R.isFavorite(i),s=R.getEvidencesForRestaurant(i),t=e.source_ids.map(p=>R.getSourceById(p)).filter(Boolean);let o="",l="";e.operational_status==="confirmed"?o='<span class="text-xs px-2 py-0.5 rounded-full bg-[#ebf6f1] text-[#1b6443] font-bold">Informação Operacional Confirmada</span>':e.operational_status==="reported_closed"?(o='<span class="text-xs px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] font-bold">Fechado Permanentemente</span>',l=`
      <div class="p-3 rounded-xl bg-[#ffdad6]/40 border border-[#ba1a1a]/20 flex items-start gap-2.5 text-xs text-[#93000a]">
        <span class="material-symbols-outlined text-[18px] shrink-0">report</span>
        <div>
          <span class="font-bold block">Aviso de Encerramento:</span>
          <span>Este estabelecimento teve seu encerramento reportado em setembro de 2025. Consta neste catálogo apenas como registro histórico editorial. Não é possível adicioná-lo ao roteiro de maio de 2027.</span>
        </div>
      </div>
    `):(o='<span class="text-xs px-2 py-0.5 rounded-full bg-[#fef7ed] text-[#8f5700] font-bold">Aguardando Confirmação Operacional</span>',l=`
      <div class="p-3 rounded-xl bg-[#fef7ed] border border-[#ffdeaa] flex items-start gap-2.5 text-xs text-[#5f4100]">
        <span class="material-symbols-outlined text-[18px] shrink-0">info</span>
        <div>
          <span class="font-bold block">Informação Editorial vs. Operacional:</span>
          <span>Os dados de atendimento, cardápio e preços são referências editoriais e necessitam de checagem prévia nas fontes oficiais antes da sua visita em maio de 2027. Não garantimos preços fixos ou disponibilidade sem confirmação oficial.</span>
        </div>
      </div>
    `);const c={quick_service:"Balcão / Serviço Rápido (Quick-Service)",table_service:"Serviço de Mesa Tradicional (Table-Service)",buffet:"Buffet Livre / Estilo Familiar",kiosk_snack:"Quiosque de Lanches / Sobremesas",bar_lounge:"Bar e Lounge",fine_dining:"Alta Gastronomia / Experiência Especial"},n={breakfast:"Café da Manhã",lunch:"Almoço",dinner:"Jantar",snack:"Lanches / Sobremesas"},g=e.park?`${e.park}${e.park_area?` (${e.park_area})`:""}`:e.resort?`Hotel Resort: ${e.resort}`:e.shopping_center?`Centro Comercial: ${e.shopping_center}`:e.location_type==="disney_springs"?"Disney Springs":e.location_type==="citywalk"?"Universal CityWalk":"Fora dos Parques (Orlando & Região)";return`
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh] animate-fade-in">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-headline-sm">
              <span class="material-symbols-outlined text-[22px]">restaurant</span>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="font-headline-sm text-base font-bold text-on-surface">
                  ${e.name}
                </h2>
                ${e.price_category?`<span class="font-label-xs-mono text-xs px-1.5 py-0.2 rounded bg-surface-container font-bold text-outline">${e.price_category}</span>`:""}
              </div>
              <span class="text-xs text-outline font-medium">${g}</span>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button 
              type="button" 
              class="btn-toggle-dining-favorite p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors" 
              data-id="${e.restaurant_id}" 
              title="${a?"Remover dos favoritos":"Favoritar este restaurante"}"
            >
              <span class="material-symbols-outlined text-[20px] ${a?"text-[#e53935] fill-1":""}">
                ${a?"favorite":"favorite_border"}
              </span>
            </button>
            <button id="btn-close-modal" class="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        <!-- Body -->
        <div class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Alertas de Status -->
          <div class="flex items-center justify-between flex-wrap gap-2">
            ${o}
            ${e.last_verified_at?`<span class="text-[11px] text-outline font-label-xs-mono">Última checagem: ${e.last_verified_at}</span>`:'<span class="text-[11px] text-outline">Verificação de 2027 pendente</span>'}
          </div>

          ${l}

          <!-- Descrição Principal -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1.5">
            <h3 class="font-bold text-xs text-on-surface">Sobre o Restaurante</h3>
            <p class="text-on-surface-variant leading-relaxed">
              ${e.short_description}
            </p>
            ${e.tips?`
              <div class="pt-2 border-t border-outline-variant/15 flex items-start gap-1.5 text-primary">
                <span class="material-symbols-outlined text-[15px] shrink-0 mt-0.5">tips_and_updates</span>
                <span class="font-medium text-[11px]">${e.tips}</span>
              </div>
            `:""}
          </div>

          <!-- Grade de Informações Operacionais -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <!-- Tipo de Serviço -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Tipo de Serviço</span>
              <span class="font-semibold text-on-surface">${c[e.service_type]||e.service_type}</span>
            </div>

            <!-- Culinária -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Culinária</span>
              <span class="font-semibold text-on-surface">${e.cuisine_types.join(", ")}</span>
            </div>

            <!-- Refeições Servidas -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Refeições Servidas</span>
              <span class="font-semibold text-on-surface">${e.meal_types.map(p=>n[p]||p).join(", ")}</span>
            </div>

            <!-- Faixa de Preço -->
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Faixa de Preço Estimada</span>
              <span class="font-semibold text-on-surface">${e.price_category?`${e.price_category} (${e.price_category==="$"?"Econômico":e.price_category==="$$"?"Moderado":e.price_category==="$$$"?"Superior":"Luxo"})`:"Não confirmada oficialmente"}</span>
            </div>
          </div>

          <!-- Reservas & Mobile Order -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <h3 class="font-bold text-xs text-on-surface flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-primary">event_available</span>
              <span>Procedimento de Reserva & Pedido Móvel</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-on-surface-variant">
              <div>
                <span class="text-outline">Reserva de Mesa: </span>
                <span class="font-semibold text-on-surface">
                  ${e.reservation_required?"Obrigatória com antecedência":e.reservation_recommended?"Altamente Recomendada":"Não exigida / Ordem de chegada"}
                </span>
              </div>
              <div>
                <span class="text-outline">Mobile Order (App Oficial): </span>
                <span class="font-semibold text-on-surface">${e.mobile_order_available?"Disponível no App oficial":"Não se aplica / No balcão"}</span>
              </div>
            </div>
            ${e.reservation_url?`
              <div class="pt-1">
                <a href="${e.reservation_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary hover:underline font-semibold">
                  <span>Página Oficial de Reservas</span>
                  <span class="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </div>
            `:""}
          </div>

          <!-- Personagens Disney / Universal -->
          ${e.character_dining?`
            <div class="p-3.5 rounded-xl bg-[#f3e5f5] border border-[#e1bee7] space-y-1.5">
              <h3 class="font-bold text-xs text-[#4a148c] flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px]">sentiment_very_satisfied</span>
                <span>Refeição com Personagens (Character Dining)</span>
              </h3>
              <p class="text-[#4a148c] leading-relaxed">
                <span class="font-semibold">Personagens frequentes:</span> ${e.characters.join(", ")||"Personagens clássicos"}.
              </p>
              <p class="text-[11px] text-[#6a1b9a]">
                *A aparição exata de personagens pode sofrer alterações pela operadora sem aviso prévio. Recomenda-se reservar com exatamente 60 dias de antecedência às 06:00 EST.
              </p>
            </div>
          `:""}

          <!-- Restrições Alimentares e Acessibilidade -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Opções Dietéticas / Restrições</span>
              <span class="font-medium text-on-surface">${e.dietary_options.length>0?e.dietary_options.join(", "):"Consulte no balcão de atendimento"}</span>
            </div>
            <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span class="text-[10px] text-outline font-bold uppercase tracking-wider block mb-1">Acessibilidade</span>
              <span class="font-medium text-on-surface">${e.accessibility_information||"Acesso padrão conforme normas ADA nos parques de Orlando"}</span>
            </div>
          </div>

          <!-- Fontes Editoriais Consultadas (Vai pra Disney?) -->
          <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2">
            <h3 class="font-bold text-xs text-on-surface flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px] text-primary">menu_book</span>
              <span>Referências Editoriais (Vai pra Disney?)</span>
            </h3>
            <p class="text-[11px] text-outline">
              Informações qualitativas, dicas e avaliações baseadas no portal editorial brasileiro especializado:
            </p>
            <div class="space-y-1.5">
              ${t.map(p=>`
                <div class="flex items-center justify-between p-2 rounded-lg bg-surface border border-outline-variant/15">
                  <div class="truncate pr-2">
                    <span class="font-semibold text-on-surface block truncate">${p==null?void 0:p.article_title}</span>
                    <span class="text-[10px] text-outline">Fonte: ${p==null?void 0:p.publisher}</span>
                  </div>
                  <a href="${p==null?void 0:p.canonical_url}" target="_blank" rel="noopener noreferrer" class="shrink-0 text-primary hover:underline font-semibold text-[11px] flex items-center gap-0.5">
                    <span>Ler avaliação original</span>
                    <span class="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                </div>
              `).join("")}
            </div>
            ${s.length>0?`
              <div class="pt-1.5 space-y-1">
                <span class="text-[10px] font-bold text-outline uppercase tracking-wider block">Notas e Fatos Extraídos:</span>
                ${s.map(p=>`
                  <div class="p-2 rounded bg-surface border border-outline-variant/15 text-[11px] text-on-surface-variant italic leading-relaxed">
                    "${p.source_excerpt_short}"
                  </div>
                `).join("")}
              </div>
            `:""}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
            Fechar
          </button>

          ${e.visibility==="active"?`
            <button 
              type="button" 
              class="btn-add-restaurant-to-itinerary px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-2xs transition-colors flex items-center gap-1.5"
              data-id="${e.restaurant_id}"
              data-name="${e.name}"
            >
              <span class="material-symbols-outlined text-[16px]">calendar_add_on</span>
              <span>Adicionar ao Roteiro</span>
            </button>
          `:`
            <span class="text-xs text-outline italic">Indisponível para adicionar ao roteiro</span>
          `}
        </div>
      </div>
    </div>
  `}function Ta(i,e,a,s){var p;const t=R.getAllRestaurants(!1),o=e?R.getRestaurantById(e):t[0],l=a||((p=i[0])==null?void 0:p.date)||"2027-05-05",c=s||"lunch",n=i.map(f=>{const r=f.date===l,d=f.title;return`<option value="${f.date}" ${r?"selected":""}>${f.date.substring(5)} (${f.dayOfWeek}) — ${d}</option>`}).join(""),g=t.map(f=>{const r=f.restaurant_id===(e||(o==null?void 0:o.restaurant_id)),d=f.park||(f.location_type==="disney_springs"?"Disney Springs":f.location_type==="citywalk"?"CityWalk":"Fora");return`<option value="${f.restaurant_id}" ${r?"selected":""}>${f.name} (${d})</option>`}).join("");return`
    <div id="modal-backdrop" class="fixed inset-0 bg-[#111c2d]/40 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh] animate-fade-in">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm">
              <span class="material-symbols-outlined text-[22px]">calendar_add_on</span>
            </div>
            <div>
              <h2 class="font-headline-sm text-base font-bold text-on-surface">
                Adicionar Refeição ao Roteiro
              </h2>
              <span class="text-xs text-outline font-medium">Integração gastronômica com a programação da viagem</span>
            </div>
          </div>

          <button id="btn-close-modal" class="p-2 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Form Body -->
        <form id="form-add-meal" class="p-6 overflow-y-auto space-y-4 text-xs">
          <!-- Seleção do Dia -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Dia do Roteiro</label>
            <select name="visitDate" id="meal-select-date" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${n}
            </select>
          </div>

          <!-- Seleção do Restaurante -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Restaurante</label>
            <select name="restaurantId" id="meal-select-restaurant" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
              ${g}
            </select>
          </div>

          <!-- Tipo de Refeição & Horário -->
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Tipo de Refeição</label>
              <select name="mealType" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required>
                <option value="breakfast" ${c==="breakfast"?"selected":""}>Café da Manhã</option>
                <option value="lunch" ${c==="lunch"?"selected":""}>Almoço</option>
                <option value="dinner" ${c==="dinner"?"selected":""}>Jantar</option>
                <option value="snack" ${c==="snack"?"selected":""}>Lanche / Sobremesa</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Horário Previsto</label>
              <input type="text" name="plannedTime" value="13:00" placeholder="Ex: 12:45" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
          </div>

          <!-- Status de Reserva & Código -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20">
            <div>
              <label class="block text-on-surface font-semibold mb-1">Status da Reserva</label>
              <select name="reservationStatus" class="w-full h-9 px-2 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium">
                <option value="confirmed">Reserva Confirmada</option>
                <option value="needed_pending" selected>Pendente / Fazer Reserva (60d)</option>
                <option value="not_needed">Não Necessita Reserva</option>
                <option value="walk_in">Ordem de Chegada (Walk-in)</option>
              </select>
            </div>

            <div>
              <label class="block text-on-surface font-semibold mb-1">Código / Ref. de Reserva</label>
              <input type="text" name="reservationReference" placeholder="Ex: #WDW-948271" class="w-full h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium" />
            </div>
          </div>

          <!-- Observações Pessoais -->
          <div>
            <label class="block text-on-surface font-semibold mb-1">Observações Pessoais / Preferências</label>
            <textarea name="personalNotes" rows="2" placeholder="Ex: Pedir mesa com vista para os fogos; avisar restrição alimentar ao garçom..." class="w-full p-2.5 rounded-lg border border-outline-variant/40 bg-surface text-on-surface font-medium focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
          </div>

          <!-- Nota de Conveniência e Proteção do Roteiro -->
          <div class="p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-2 text-[11px] text-outline">
            <span class="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">verified_user</span>
            <span>
              Ao associar este restaurante, sua programação de parques, ingressos e notas pessoais são 100% preservadas. Caso o restaurante fique fora do parque do dia, considere o tempo de deslocamento e estacionamento.
            </span>
          </div>

          <!-- Footer Buttons -->
          <div class="pt-3 border-t border-outline-variant/30 flex items-center justify-end gap-2 shrink-0">
            <button type="button" id="btn-cancel-modal" class="px-4 py-2 rounded-lg text-xs font-semibold text-on-surface-variant hover:bg-surface-container transition-colors">
              Cancelar
            </button>
            <button type="submit" class="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container text-xs font-semibold shadow-2xs transition-colors flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[16px]">save</span>
              <span>Confirmar Refeição</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `}const Aa=[{id:"usr_460bb20fe563",lookupHash:"a1a0bcf457f22d00d62e10076a690a6644864b234b79a91360c1c8b61fb2d4ac",salt:"fefcf8477c70967f63c52bae405de7b9",iv:"d743ff6486d566abac5c6bfd",ciphertext:"64fff288efec56fc0b2eea47065f59c242ec6eba95b98544b7418ef7dc6897e1a047399345f33ad5a5aa4af931a93a876224b4b022a3b864a0362a6547e08b86ffb4c80dc5182e1fe4cadd10",iterations:12e4},{id:"usr_cbfad4c7a5b9",lookupHash:"e21acb86b677b8deb6d8537389b4900fcfc8b448b7e2f668ebbc6f6588642ddf",salt:"69ecdf527a73ff9eda4c6be0ef779562",iv:"668b7ef108d299dab7a1a377",ciphertext:"802b5e0fe5f8fa212a7effda797ea02ca62ffdab9a3d6ffe19c5cfcde5995b168cd5b136dd3e8151611038a47d5cf356a3ae02beb9c6ebbaa80344494fb06c47ed53b3150060521ef18e2bbe960ffcc1d8",iterations:12e4},{id:"usr_ef8546d56de7",lookupHash:"94ac20b2c595e9de26a9b07ee7f84a868414487035e9c612b208afe550cc485f",salt:"962f24cc76b0b6243850336b46f8fcda",iv:"a1d0ce8ab483c9cf729e370a",ciphertext:"61f34aa4eca5cd5f939598117e356284e8b6f6feec174c58d48141a1a6a7401c3f8344081e8122fb8a2a34c7952f1496a44aea3ed3ca5e6b534336d0dd44734ff522a2fec342b6ea4470212933",iterations:12e4}],Pa="orlando-planner-salt-v1:",re="orlando_planner_session_v1",Q="orlando_planner_auth_fail_v1",de=5,Ea=60*1e3,Ia=7*24*60*60*1e3,ge=new Map;function X(i,e=!1){try{if(!e&&typeof window<"u"&&window.localStorage){const a=window.localStorage.getItem(i);if(a!==null)return a}else if(e&&typeof window<"u"&&window.sessionStorage){const a=window.sessionStorage.getItem(i);if(a!==null)return a}}catch{}return ge.get(i)||null}function Ee(i,e,a=!1){ge.set(i,e);try{!a&&typeof window<"u"&&window.localStorage?window.localStorage.setItem(i,e):a&&typeof window<"u"&&window.sessionStorage&&window.sessionStorage.setItem(i,e)}catch{}}function ce(i){ge.delete(i);try{typeof window<"u"&&window.localStorage&&window.localStorage.removeItem(i),typeof window<"u"&&window.sessionStorage&&window.sessionStorage.removeItem(i)}catch{}}function xe(){if(typeof window<"u"&&window.crypto&&window.crypto.subtle)return window.crypto.subtle;if(typeof globalThis<"u"&&globalThis.crypto&&globalThis.crypto.subtle)return globalThis.crypto.subtle;throw new Error("Ambiente não possui suporte à API Web Crypto.")}function he(i){const e=new Uint8Array(i.length/2);for(let a=0;a<i.length;a+=2)e[a/2]=parseInt(i.substring(a,a+2),16);return e}function Ie(i){const e=i instanceof Uint8Array?i:new Uint8Array(i);return Array.from(e).map(a=>a.toString(16).padStart(2,"0")).join("")}function La(i){const e=new Uint8Array(i);if(typeof window<"u"&&window.crypto)window.crypto.getRandomValues(e);else if(typeof globalThis<"u"&&globalThis.crypto)globalThis.crypto.getRandomValues(e);else for(let a=0;a<i;a++)e[a]=Math.floor(Math.random()*256);return e}class Ra{constructor(){A(this,"currentUser",null);this.restoreSession()}async computeLookupHash(e){const a=e.trim().toLowerCase(),s=new TextEncoder,o=await xe().digest("SHA-256",s.encode(Pa+a));return Ie(o)}async attemptDecryptRecord(e,a){try{const s=xe(),t=new TextEncoder,o=await s.importKey("raw",t.encode(e.trim()),{name:"PBKDF2"},!1,["deriveKey"]),l=he(a.salt),c=await s.deriveKey({name:"PBKDF2",salt:l,iterations:a.iterations,hash:"SHA-256"},o,{name:"AES-GCM",length:256},!1,["decrypt"]),n=he(a.iv),g=he(a.ciphertext),p=await s.decrypt({name:"AES-GCM",iv:n},c,g),f=new TextDecoder().decode(p),r=JSON.parse(f);return r&&r.valid===!0&&r.name?r:null}catch{return null}}async login(e,a,s=!0){if(this.isLockedOut())return{success:!1,error:`Muitas tentativas incorretas. Sistema bloqueado temporariamente por ${this.getLockoutRemainingSeconds()}s para segurança.`};const t=e?e.trim().toLowerCase():"",o=a?a.trim():"";if(!t||!o)return{success:!1,error:"Por favor, informe seu e-mail e senha de acesso."};const l=Date.now(),c=await this.computeLookupHash(t),n=Aa.find(v=>v.lookupHash===c);let g=null;if(n)g=await this.attemptDecryptRecord(o,n);else{const v=new Uint8Array(16);try{const u=xe(),m=await u.importKey("raw",new TextEncoder().encode(o),{name:"PBKDF2"},!1,["deriveKey"]);await u.deriveKey({name:"PBKDF2",salt:v,iterations:1e4,hash:"SHA-256"},m,{name:"AES-GCM",length:256},!1,["decrypt"])}catch{}}const p=Date.now()-l;if(p<350&&await new Promise(v=>setTimeout(v,350-p)),!g){this.currentUser=null,this.recordFailedAttempt();const v=this.getRemainingAttempts();return v<=0?{success:!1,error:"Credenciais inválidas. Sistema bloqueado por 60s por excesso de tentativas."}:{success:!1,error:`E-mail ou senha incorretos. Tentativas restantes: ${v}.`}}this.clearFailedAttempts();const f=Ie(La(16)),r=Date.now(),d={name:g.name,email:g.email,role:"viajante",sessionId:f,loginTime:r,expiresAt:r+Ia};return this.currentUser=d,this.saveSession(d,s),{success:!0,user:d}}logout(){this.currentUser=null,ce(re)}isAuthenticated(){return this.currentUser?Date.now()>this.currentUser.expiresAt?(this.logout(),!1):!0:!1}getCurrentUser(){return this.isAuthenticated()?this.currentUser:null}saveSession(e,a){const s=JSON.stringify(e);Ee(re,s,!a)}restoreSession(){try{const e=X(re,!1)||X(re,!0);if(e){const a=JSON.parse(e);a&&a.sessionId&&a.expiresAt&&Date.now()<a.expiresAt?this.currentUser=a:this.logout()}}catch{this.currentUser=null}}isLockedOut(){try{const e=X(Q);if(!e)return!1;const a=JSON.parse(e);return!!(a.lockoutUntil&&Date.now()<a.lockoutUntil)}catch{return!1}}getLockoutRemainingSeconds(){try{const e=X(Q);if(!e)return 0;const a=JSON.parse(e);return a.lockoutUntil&&Date.now()<a.lockoutUntil?Math.ceil((a.lockoutUntil-Date.now())/1e3):0}catch{return 0}}getRemainingAttempts(){try{const e=X(Q);if(!e)return de;const a=JSON.parse(e);if(a.lockoutUntil&&Date.now()<a.lockoutUntil)return 0;const s=Number(a.count)||0;return Math.max(0,de-s)}catch{return de}}recordFailedAttempt(){try{let e=0;const a=X(Q);if(a){const t=JSON.parse(a);e=Number(t.count)||0}e++;const s={count:e};e>=de&&(s.lockoutUntil=Date.now()+Ea),Ee(Q,JSON.stringify(s))}catch{}}clearFailedAttempts(){ce(Q)}resetStateForTesting(){this.currentUser=null,ge.clear(),ce(Q),ce(re)}}const j=new Ra;function Ma(i,e=!1,a=0){const s=e?`
      <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-start gap-2.5 text-xs animate-pulse">
        <span class="material-symbols-outlined text-[20px] text-error flex-shrink-0">shield_with_heart</span>
        <div>
          <span class="font-semibold block text-[13px]">Acesso Temporariamente Suspenso</span>
          Muitas tentativas sem sucesso. Aguarde <strong>${a} segundos</strong> para tentar novamente.
        </div>
      </div>
    `:"",t=!e&&i?`
      <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-center gap-2.5 text-xs animate-shake">
        <span class="material-symbols-outlined text-[18px] text-error flex-shrink-0">error</span>
        <span>${i}</span>
      </div>
    `:"";return`
    <div class="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-surface via-surface-container-lowest to-surface-container-low">
      <!-- Background subtle decorative shapes -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"></div>
        <div class="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px]"></div>
      </div>

      <div class="w-full max-w-[440px] flex flex-col items-center">
        <!-- Brand Card -->
        <div class="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-2xl shadow-xl p-6 sm:p-8 backdrop-blur-md">
          
          <!-- Official Logo Display -->
          <div class="flex flex-col items-center text-center mb-6">
            <div class="p-2 mb-2 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20 shadow-xs">
              <img 
                src="./logo.png" 
                alt="Orlando Planner" 
                class="h-12 sm:h-14 w-auto object-contain select-none max-w-[260px]" 
                id="login-logo-img"
              />
            </div>
            <h1 class="font-headline-sm text-base sm:text-lg font-bold text-on-surface tracking-tight mt-1">
              Portal do Roteiro 2027
            </h1>
            <p class="font-caption text-xs text-outline mt-1">
              Acesso exclusivo para viajantes autorizados
            </p>
          </div>

          <!-- Lockout / Error alerts -->
          <div id="login-feedback-area">
            ${s}
            ${t}
          </div>

          <!-- Login Form -->
          <form id="form-login" class="space-y-4" novalidate>
            <!-- E-mail Input -->
            <div>
              <label for="login-email" class="block font-label-md text-xs font-semibold text-on-surface mb-1.5">
                E-mail de Acesso
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                  <span class="material-symbols-outlined text-[19px]">mail</span>
                </div>
                <input 
                  type="email" 
                  id="login-email" 
                  name="email"
                  required
                  autocomplete="email"
                  placeholder="seu-email@dominio.com" 
                  class="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-outline-variant/50 bg-surface-container-low text-on-surface text-sm placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  ${e?"disabled":""}
                />
              </div>
            </div>

            <!-- Password Input -->
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label for="login-password" class="block font-label-md text-xs font-semibold text-on-surface">
                  Senha
                </label>
                <span class="text-[11px] text-outline font-medium">Acesso Restrito</span>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                  <span class="material-symbols-outlined text-[19px]">lock</span>
                </div>
                <input 
                  type="password" 
                  id="login-password" 
                  name="password"
                  required
                  autocomplete="current-password"
                  placeholder="••••••••••••" 
                  class="w-full pl-10 pr-10 py-2.5 rounded-xl border border-outline-variant/50 bg-surface-container-low text-on-surface text-sm placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                  ${e?"disabled":""}
                />
                <button 
                  type="button" 
                  id="btn-toggle-pwd" 
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors focus:outline-none"
                  aria-label="Alternar visibilidade da senha"
                >
                  <span class="material-symbols-outlined text-[20px]" id="pwd-icon">visibility</span>
                </button>
              </div>
            </div>

            <!-- Remember me checkbox -->
            <div class="flex items-center justify-between pt-1">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  id="login-remember" 
                  class="w-4 h-4 rounded text-primary border-outline-variant/60 focus:ring-primary/30" 
                  checked 
                />
                <span class="font-body-sm text-xs text-on-surface-variant">Manter conectado neste navegador</span>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="pt-2">
              <button 
                type="submit" 
                id="btn-login-submit" 
                class="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary hover:bg-primary/90 font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
                ${e?"disabled":""}
              >
                <span class="material-symbols-outlined text-[18px]">key</span>
                <span id="btn-login-text">Acessar Meu Roteiro</span>
                <span id="btn-login-spinner" class="hidden animate-spin material-symbols-outlined text-[18px]">progress_activity</span>
              </button>
            </div>
          </form>

          <!-- Security Footer Badge -->
          <div class="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-center gap-2 text-outline text-[11px]">
            <span class="material-symbols-outlined text-[15px] text-tertiary">lock</span>
            <span>Criptografia ponta a ponta AES-256 & PBKDF2</span>
          </div>
        </div>

        <!-- Privacy & Protection Note -->
        <p class="mt-4 text-center text-[11px] text-outline font-medium">
          Sistema protegido contra acesso não autorizado • Orlando Planner 2027
        </p>
      </div>
    </div>
  `}class Oa{constructor(){A(this,"currentTab","visao-geral");A(this,"itinerary",[]);A(this,"tickets",[]);A(this,"crowdStore");A(this,"fatigueParams",{...W});A(this,"optimizerWeights",{...ee});A(this,"snapshots",[]);A(this,"calFilter","all");A(this,"crowdFilter","all");A(this,"crowdSubTab","forecast");A(this,"selectedLiveParkId","magic-kingdom");A(this,"liveWaitData",null);A(this,"outletFilter","all");A(this,"selectedTouringPlanId","magic-kingdom");A(this,"touringOperatorFilter","all");A(this,"selectedCrowdMonth",5);A(this,"comparatorParkId","magic-kingdom");A(this,"comparatorDates",["2027-05-18","2027-05-21","2027-05-23"]);A(this,"diningCriteria",{searchQuery:"",categoryTab:"all",locationType:"all",park:"all",mealType:"all",serviceType:"all",priceCategory:"all",cuisine:"all",characterDiningOnly:!1,reservationRequiredOnly:!1,vegetarianOnly:!1,confirmedOnly:!1,favoritesOnly:!1});A(this,"selectedDiningDaySuggestion",null);A(this,"showDiningAdminPanel",!1);A(this,"activeModal",null);A(this,"modalSelectedDate",null);A(this,"modalSelectedTicketId",null);A(this,"modalSelectedRestaurantId",null);A(this,"modalSelectedMealDay",null);A(this,"modalSelectedMealType");A(this,"validationResult");A(this,"fatigueResult");A(this,"optimizationResult");this.itinerary=P.loadItinerary(),this.tickets=P.loadTickets();const e=P.loadCrowdStore();this.crowdStore=Object.keys(e.records).length>0?e:Ye(),this.fatigueParams=P.loadFatigueParams(),this.optimizerWeights=P.loadOptimizerWeights(),this.snapshots=P.loadSnapshots(),j.isAuthenticated()?(this.recalculateAll(),this.render(),this.attachGlobalListeners()):this.renderLogin()}recalculateAll(){this.validationResult=Re(this.itinerary,this.tickets),this.fatigueResult=H.calculate(this.itinerary,this.fatigueParams),this.optimizationResult=Ge.optimize(this.itinerary,this.tickets,this.crowdStore,this.optimizerWeights)}saveCurrentState(e=!0){P.saveItinerary(this.itinerary,e),P.saveTickets(this.tickets),P.saveCrowdStore(this.crowdStore),P.saveFatigueParams(this.fatigueParams),P.saveOptimizerWeights(this.optimizerWeights),P.saveSnapshots(this.snapshots),this.recalculateAll()}render(){var g,p;const e=document.getElementById("app");if(!e)return;if(!j.isAuthenticated()){this.renderLogin();return}const a=P.canUndo(),s=P.canRedo(),t=this.itinerary.length;let o="";switch(this.currentTab){case"visao-geral":o=oa(this.itinerary,this.validationResult,this.fatigueResult);break;case"meu-roteiro":o=pa(this.itinerary,this.tickets,this.crowdStore,this.fatigueResult,this.calFilter);break;case"onde-comer":o=_a(this.diningCriteria,this.itinerary,this.selectedDiningDaySuggestion,this.showDiningAdminPanel);break;case"guia-outlets":o=ha(this.outletFilter);break;case"calendario-de-lotacao":{const f=this.itinerary.map(r=>r.date);o=ua(this.crowdStore,this.crowdFilter,this.crowdSubTab,this.selectedLiveParkId,this.liveWaitData,this.selectedCrowdMonth,f);break}case"roteiros-de-parques":o=ya(this.selectedTouringPlanId,this.touringOperatorFilter);break;case"comparar-datas":o=ma(this.comparatorParkId,this.comparatorDates,this.itinerary,this.tickets,this.crowdStore);break;case"meus-ingressos":o=fa(this.tickets,this.validationResult);break;case"sugestoes-de-roteiro":o=ga(this.optimizationResult,this.optimizerWeights);break;case"desgaste-fisico":o=va(this.itinerary,this.fatigueResult,this.fatigueParams);break;case"historico":o=ba(this.snapshots,a,s);break;case"configuracoes":o=xa(this.crowdStore);break}let l="";if(this.activeModal==="day-details"&&this.modalSelectedDate){const f=this.itinerary.find(r=>r.date===this.modalSelectedDate);f&&(l=ka(f,this.tickets,this.crowdStore))}else if(this.activeModal==="swap-days"&&this.modalSelectedDate)l=Sa(this.modalSelectedDate,this.itinerary);else if(this.activeModal==="ticket-rules"&&this.modalSelectedTicketId){const f=this.tickets.find(r=>r.id===this.modalSelectedTicketId);f&&(l=Da(f))}else if(this.activeModal==="trip-generator"){const f=((g=this.itinerary[0])==null?void 0:g.date)||"2027-05-05",r=((p=this.itinerary[this.itinerary.length-1])==null?void 0:p.date)||"2027-05-23";l=$a(t,f,r)}else this.activeModal==="restaurant-details"&&this.modalSelectedRestaurantId?l=Ca(this.modalSelectedRestaurantId):this.activeModal==="add-meal"&&(l=Ta(this.itinerary,this.modalSelectedRestaurantId||void 0,this.modalSelectedMealDay||void 0,this.modalSelectedMealType));const c=j.getCurrentUser(),n=(c==null?void 0:c.name)||"Viajante";e.innerHTML=`
      <div class="min-h-screen bg-surface flex flex-col">
        ${ta(this.currentTab,t,n)}
        <div class="lg:pl-[230px] flex flex-col flex-1">
          ${sa(a,s,t,{},n)}
          <main class="w-full pt-[68px] min-h-screen px-4 sm:px-6 lg:px-space-xl py-6 lg:py-space-xl max-w-7xl">
            ${o}
          </main>
        </div>
        ${l}
      </div>
    `,this.attachViewSpecificListeners()}attachGlobalListeners(){window.addEventListener("keydown",e=>{e.key==="Escape"&&this.activeModal&&this.closeModal()}),window.addEventListener("click",e=>{if(!e.target.closest("#export-dropdown-wrapper")){const s=document.getElementById("export-menu");s&&!s.classList.contains("hidden")&&s.classList.add("hidden")}})}attachViewSpecificListeners(){var n,g,p,f,r,d,v,u,m,w,_,b,x,y,h,k,C,T,I,q,O,Y,Z,B,U,te,se,le,oe,ye,_e,we,ke,Se;document.querySelectorAll(".nav-tab-btn").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-tab");D&&(this.currentTab=D,this.closeMobileSidebar(),this.render())})}),(n=document.getElementById("sidebar-logo-btn"))==null||n.addEventListener("click",()=>{this.currentTab="visao-geral",this.render()}),(g=document.getElementById("header-mobile-logo"))==null||g.addEventListener("click",()=>{this.currentTab="visao-geral",this.render()}),(p=document.getElementById("btn-sidebar-trip-generator"))==null||p.addEventListener("click",()=>{this.openTripGeneratorModal()}),(f=document.getElementById("btn-sidebar-logout"))==null||f.addEventListener("click",()=>{this.handleLogout()}),(r=document.getElementById("btn-header-logout"))==null||r.addEventListener("click",()=>{this.handleLogout()}),(d=document.getElementById("btn-mobile-menu"))==null||d.addEventListener("click",()=>{var S;(S=document.getElementById("app-sidebar"))==null||S.classList.remove("-translate-x-full")}),(v=document.getElementById("btn-close-mobile-menu"))==null||v.addEventListener("click",()=>{this.closeMobileSidebar()}),(u=document.getElementById("btn-header-undo"))==null||u.addEventListener("click",()=>this.handleUndo()),(m=document.getElementById("btn-header-redo"))==null||m.addEventListener("click",()=>this.handleRedo()),(w=document.getElementById("btn-header-trip-settings"))==null||w.addEventListener("click",()=>this.openTripGeneratorModal()),(_=document.getElementById("btn-direct-print"))==null||_.addEventListener("click",()=>this.handlePrintDossier());const e=document.getElementById("btn-export-dropdown"),a=document.getElementById("export-menu");e&&a&&e.addEventListener("click",()=>{a.classList.toggle("hidden")}),(b=document.getElementById("action-export-md"))==null||b.addEventListener("click",()=>{a==null||a.classList.add("hidden"),this.handleExportMarkdown()}),(x=document.getElementById("action-export-json"))==null||x.addEventListener("click",()=>{a==null||a.classList.add("hidden"),this.handleExportJson()}),(y=document.getElementById("action-print-pdf"))==null||y.addEventListener("click",()=>{a==null||a.classList.add("hidden"),this.handlePrintDossier()}),(h=document.getElementById("btn-goto-itinerary"))==null||h.addEventListener("click",()=>{this.currentTab="meu-roteiro",this.render()}),(k=document.getElementById("btn-open-full-schedule"))==null||k.addEventListener("click",()=>{this.currentTab="meu-roteiro",this.render()}),(C=document.getElementById("btn-quick-optimize"))==null||C.addEventListener("click",()=>{this.currentTab="sugestoes-de-roteiro",this.render()}),(T=document.getElementById("card-dashboard-tickets"))==null||T.addEventListener("click",()=>{this.currentTab="meus-ingressos",this.render()}),(I=document.getElementById("btn-quick-tickets"))==null||I.addEventListener("click",()=>{this.currentTab="meus-ingressos",this.render()}),(q=document.getElementById("btn-quick-crowd"))==null||q.addEventListener("click",()=>{this.currentTab="calendario-de-lotacao",this.render()}),document.querySelectorAll(".day-preview-item").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-date");D&&this.openDayDetails(D)})}),document.querySelectorAll(".btn-cal-filter").forEach(S=>{S.addEventListener("click",$=>{this.calFilter=$.currentTarget.getAttribute("data-filter"),this.render()})}),document.querySelectorAll(".btn-toggle-lock").forEach(S=>{S.addEventListener("click",$=>{$.stopPropagation();const D=$.currentTarget.getAttribute("data-date");D&&this.toggleDayLock(D)})}),document.querySelectorAll(".btn-open-day-details").forEach(S=>{S.addEventListener("click",$=>{$.stopPropagation();const D=$.currentTarget.getAttribute("data-date");D&&this.openDayDetails(D)})}),document.querySelectorAll(".btn-trigger-swap").forEach(S=>{S.addEventListener("click",$=>{$.stopPropagation();const D=$.currentTarget.getAttribute("data-date");D&&this.openSwapModal(D)})}),document.querySelectorAll(".btn-outlet-filter").forEach(S=>{S.addEventListener("click",$=>{this.outletFilter=$.currentTarget.getAttribute("data-filter"),this.render()})}),(O=document.getElementById("btn-open-trip-generator-from-outlets"))==null||O.addEventListener("click",()=>{this.openTripGeneratorModal()}),document.querySelectorAll(".btn-plan-shopping-day").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-outlet-name"),L=$.currentTarget.getAttribute("data-outlet-tips");if(D){const M=this.itinerary.find(N=>N.activityType==="shopping"||N.activityType==="rest");M?(M.title=`Compras: ${D}`,M.personalNotes=`${M.personalNotes?M.personalNotes+" • ":""}${L}`,this.saveCurrentState(!0),alert(`O local "${D}" foi adicionado com sucesso ao dia ${M.date.substring(5)} (${M.dayOfWeek})!`),this.currentTab="meu-roteiro",this.render()):alert(`Para incluir "${D}", converta um dia para Compras ou use o Gerador de Roteiro.`)}})}),document.querySelectorAll(".btn-crowd-filter").forEach(S=>{S.addEventListener("click",$=>{this.crowdFilter=$.currentTarget.getAttribute("data-filter"),this.render()})}),document.querySelectorAll(".btn-crowd-subtab").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-subtab");D&&(this.crowdSubTab=D,D==="live-queues"&&!this.liveWaitData?this.loadLiveWaitData(this.selectedLiveParkId):this.render())})}),document.querySelectorAll(".btn-select-live-park").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-park-id");D&&this.loadLiveWaitData(D)})}),(Y=document.getElementById("btn-refresh-live-queues"))==null||Y.addEventListener("click",()=>{this.loadLiveWaitData(this.selectedLiveParkId,!0)}),document.querySelectorAll(".btn-select-crowd-month").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-month");D&&(this.selectedCrowdMonth=parseInt(D,10),this.render())})}),document.querySelectorAll(".btn-select-touring-plan").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-plan-id");D&&(this.selectedTouringPlanId=D,this.render())})}),document.querySelectorAll(".btn-touring-filter").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-op");D&&(this.touringOperatorFilter=D,this.render())})}),(Z=document.getElementById("btn-print-touring-plan"))==null||Z.addEventListener("click",()=>{window.print()});const s=document.getElementById("select-comparator-park");s&&s.addEventListener("change",S=>{this.comparatorParkId=S.target.value,this.render()}),document.querySelectorAll(".compare-date-checkbox").forEach(S=>{S.addEventListener("change",$=>{const D=$.target,L=D.value;D.checked?this.comparatorDates.includes(L)||(this.comparatorDates.length>=3&&this.comparatorDates.shift(),this.comparatorDates.push(L)):this.comparatorDates=this.comparatorDates.filter(M=>M!==L),this.render()})}),document.querySelectorAll(".btn-apply-candidate-date").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-park"),L=$.currentTarget.getAttribute("data-date");D&&L&&this.applyParkToDate(D,L)})}),document.querySelectorAll(".btn-edit-ticket-rules").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-id");D&&this.openTicketRulesModal(D)})}),(B=document.getElementById("btn-run-optimizer"))==null||B.addEventListener("click",()=>{this.recalculateAll(),this.render()});const t=document.getElementById("btn-toggle-weights-panel"),o=document.getElementById("weights-panel");t&&o&&t.addEventListener("click",()=>{o.classList.toggle("hidden")}),document.querySelectorAll(".suggestion-toggle-checkbox").forEach(S=>{S.addEventListener("change",$=>{const D=$.target,L=D.getAttribute("data-id"),M=this.optimizationResult.suggestions.find(N=>N.id===L);M&&(M.accepted=D.checked)})}),(U=document.getElementById("btn-apply-selected-suggestions"))==null||U.addEventListener("click",()=>{this.applyAcceptedOptimizerSuggestions()}),(te=document.getElementById("btn-history-undo"))==null||te.addEventListener("click",()=>this.handleUndo()),(se=document.getElementById("btn-history-redo"))==null||se.addEventListener("click",()=>this.handleRedo()),(le=document.getElementById("btn-create-snapshot"))==null||le.addEventListener("click",()=>{const S=document.getElementById("input-snapshot-name"),$=(S==null?void 0:S.value.trim())||`Ponto de Restauração #${this.snapshots.length+1}`;this.snapshots.unshift({id:`snap_${Date.now()}`,name:$,timestamp:new Date().toISOString(),itinerary:JSON.parse(JSON.stringify(this.itinerary))}),P.saveSnapshots(this.snapshots),this.render()}),document.querySelectorAll(".btn-restore-snapshot").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-id"),L=this.snapshots.find(M=>M.id===D);L&&confirm(`Restaurar o roteiro "${L.name}"?`)&&(this.itinerary=JSON.parse(JSON.stringify(L.itinerary)),this.saveCurrentState(!0),this.render())})}),document.querySelectorAll(".btn-delete-snapshot").forEach(S=>{S.addEventListener("click",$=>{const D=$.currentTarget.getAttribute("data-id");this.snapshots=this.snapshots.filter(L=>L.id!==D),P.saveSnapshots(this.snapshots),this.render()})}),(oe=document.getElementById("btn-reset-initial"))==null||oe.addEventListener("click",()=>{confirm("Tem certeza de que deseja restaurar o roteiro original de fábrica? Todas as personalizações serão redefinidas.")&&(P.resetToDefault(),this.itinerary=P.loadItinerary(),this.tickets=P.loadTickets(),this.crowdStore=Ce(),this.fatigueParams={...W},this.optimizerWeights={...ee},this.recalculateAll(),this.render())}),(ye=document.getElementById("btn-export-full-json"))==null||ye.addEventListener("click",()=>{const S=P.exportFullProject();z.downloadFile("orlando-planner-backup.json",S,"application/json")});const l=document.getElementById("input-import-json");l&&l.addEventListener("change",S=>{var D;const $=(D=S.target.files)==null?void 0:D[0];if($){const L=new FileReader;L.onload=M=>{var K;const N=(K=M.target)==null?void 0:K.result,G=P.importFullProject(N);G.success?(alert(G.message),this.itinerary=P.loadItinerary(),this.tickets=P.loadTickets(),this.crowdStore=P.loadCrowdStore(),this.recalculateAll(),this.render()):alert(G.message)},L.readAsText($)}}),(_e=document.getElementById("btn-export-settings-md"))==null||_e.addEventListener("click",()=>this.handleExportMarkdown()),(we=document.getElementById("btn-export-settings-pdf"))==null||we.addEventListener("click",()=>this.handlePrintDossier());const c=document.getElementById("input-import-crowd-file");c&&c.addEventListener("change",S=>{var D;const $=(D=S.target.files)==null?void 0:D[0];if($){const L=new FileReader;L.onload=M=>{var De;const N=(De=M.target)==null?void 0:De.result,G=new V(this.crowdStore);let K;if($.name.endsWith(".csv"))K=G.importFromCsv(N);else try{const ve=JSON.parse(N);K=G.importFromJson(ve)}catch(ve){alert("JSON inválido: "+ve);return}this.crowdStore=G.getStore(),P.saveCrowdStore(this.crowdStore),this.recalculateAll(),this.render(),alert(`Importação concluída: ${K.importedCount} registros importados. Duplicados: ${K.duplicatesCount}.`)},L.readAsText($)}}),(ke=document.getElementById("btn-load-benchmark-data"))==null||ke.addEventListener("click",()=>{const S=new V(this.crowdStore),$=Ze();S.importFromJson($),this.crowdStore=S.getStore(),P.saveCrowdStore(this.crowdStore),this.recalculateAll(),this.render(),alert("Dados benchmark de simulação carregados com sucesso! Otimização completa liberada.")}),(Se=document.getElementById("btn-clear-crowd-data"))==null||Se.addEventListener("click",()=>{this.crowdStore=Ce(),P.saveCrowdStore(this.crowdStore),this.recalculateAll(),this.render()}),this.attachModalListeners(),this.attachDiningViewListeners()}attachModalListeners(){var r,d,v,u,m,w,_,b,x;(r=document.getElementById("btn-close-modal"))==null||r.addEventListener("click",()=>this.closeModal()),(d=document.getElementById("btn-cancel-modal"))==null||d.addEventListener("click",()=>this.closeModal()),(v=document.getElementById("btn-close-swap-modal"))==null||v.addEventListener("click",()=>this.closeModal()),(u=document.getElementById("btn-cancel-swap"))==null||u.addEventListener("click",()=>this.closeModal()),(m=document.getElementById("btn-close-ticket-modal"))==null||m.addEventListener("click",()=>this.closeModal()),(w=document.getElementById("btn-cancel-ticket-modal"))==null||w.addEventListener("click",()=>this.closeModal()),(_=document.getElementById("btn-close-trip-gen-modal"))==null||_.addEventListener("click",()=>this.closeModal()),(b=document.getElementById("btn-cancel-trip-gen"))==null||b.addEventListener("click",()=>this.closeModal()),document.querySelectorAll(".btn-open-park-plan").forEach(y=>{y.addEventListener("click",h=>{const k=h.currentTarget.getAttribute("data-park-id");k&&(this.selectedTouringPlanId=k,this.closeModal(),this.currentTab="roteiros-de-parques",this.render())})});const e=document.getElementById("form-day-details");e&&e.addEventListener("submit",y=>{var C;y.preventDefault();const h=e.getAttribute("data-date"),k=this.itinerary.find(T=>T.date===h);if(k){const T=new FormData(e);k.title=T.get("title"),k.activityType=T.get("activityType"),k.description=T.get("description"),k.parkId=T.get("parkId")||null,k.ticketId=T.get("ticketId")||null,k.effortLevel=T.get("effortLevel"),k.plannedArrivalTime=T.get("plannedArrivalTime"),k.plannedDepartureTime=T.get("plannedDepartureTime"),k.ropeDropStrategy=T.get("ropeDropStrategy"),k.personalNotes=T.get("personalNotes"),k.isLocked=((C=e.querySelector('input[name="isLocked"]'))==null?void 0:C.checked)??!1,this.saveCurrentState(!0),this.closeModal(),this.render()}});const a=document.getElementById("form-swap-days");a&&a.addEventListener("submit",y=>{y.preventDefault();const h=a.getAttribute("data-source"),C=new FormData(a).get("targetDate");h&&C&&(this.executeDaySwap(h,C),this.closeModal(),this.render())});const s=document.getElementById("form-ticket-rules");s&&s.addEventListener("submit",y=>{y.preventDefault();const h=s.getAttribute("data-id"),k=this.tickets.find(C=>C.id===h);if(k){const C=new FormData(s);k.name=C.get("name"),k.totalVisitsAllowed=parseInt(C.get("totalVisitsAllowed"),10);const T=C.get("validityWindowDays");k.validityWindowDays=T?parseInt(T,10):null,k.ruleStatus=C.get("ruleStatus"),k.allowParkRepetition=C.get("allowParkRepetition")==="true",k.officialSourceNote=C.get("officialSourceNote"),this.saveCurrentState(!0),this.closeModal(),this.render()}}),(x=document.getElementById("btn-refresh-day-queues"))==null||x.addEventListener("click",()=>{const y=document.getElementById("day-live-queue-section"),h=y==null?void 0:y.getAttribute("data-park-id");h&&this.loadDayDetailsQueueTimes(h,!0)});const t=document.getElementById("input-trip-start-date"),o=document.getElementById("input-trip-end-date"),l=document.getElementById("input-trip-total-days"),c=document.getElementById("label-selected-trip-days"),n=document.getElementById("label-slider-val"),g=document.getElementById("trip-preview-text"),p=()=>{if(!t||!o||!l||!c||!g)return;const y=t.value||"2027-05-05",h=o.value||"2027-05-23",k=Math.max(3,me(y,h)+1);c.innerText=`${k} dias de estadia`,n&&(n.innerText=`${k} dias`),l.value=String(Math.min(28,Math.max(4,k)));const C=Math.max(2,Math.floor(k*.62)),T=Math.max(1,k-C-2);g.innerHTML=`<strong>Período de ${k} dias (${y.substring(5)} a ${h.substring(5)}):</strong> 1 dia de chegada (abastecimento) + ~${C} dias nos principais parques temáticos + ${T} dias de compras & descanso nos outlets mais baratos (International Premium, Vineland e Ross) + 1 dia de partida / check-out.`};t&&o&&l&&(t.addEventListener("change",()=>{const y=t.value,h=parseInt(l.value,10)||10;o.value=ne(y,h-1),p()}),o.addEventListener("change",()=>{const y=t.value;o.value<y&&(o.value=y),p()}),l.addEventListener("input",()=>{const y=t.value||"2027-05-05",h=parseInt(l.value,10);o.value=ne(y,h-1),p()}),p());const f=document.getElementById("form-generate-custom-trip");f&&f.addEventListener("submit",y=>{var B,U;y.preventDefault();const h=new FormData(f),k=h.get("startDate")||"2027-05-05",C=h.get("endDate")||"2027-05-23",I=h.get("departureOption")==="morning_park",q=h.get("profile")||"equilibrado",O=((B=f.querySelector('input[name="includeBuschGardensTampa"]'))==null?void 0:B.checked)??!0,Y=((U=f.querySelector('input[name="includeEpicUniverseTwoDays"]'))==null?void 0:U.checked)??!0;this.snapshots.unshift({id:`snap_${Date.now()}`,name:`Roteiro anterior (${this.itinerary.length} dias)`,timestamp:new Date().toISOString(),itinerary:JSON.parse(JSON.stringify(this.itinerary))});const Z=Ke.generateCustomItinerary({startDate:k,endDate:C,departureDayHasPark:I,profile:q,includeBuschGardensTampa:O,includeEpicUniverseTwoDays:Y});this.itinerary=Z,this.saveCurrentState(!0),this.closeModal(),this.currentTab="meu-roteiro",this.render(),alert(`Roteiro sob medida de ${this.itinerary.length} dias gerado com sucesso! Período: ${k} a ${C}.`)}),this.attachMealModalListeners()}attachDiningViewListeners(){var a,s,t,o,l,c,n,g,p,f,r,d,v,u,m,w,_,b;document.querySelectorAll(".btn-dining-cat-pill").forEach(x=>{x.addEventListener("click",y=>{const h=y.currentTarget.getAttribute("data-category");h&&(this.diningCriteria.categoryTab=h,this.render())})});const e=document.getElementById("input-dining-search");e&&(e.addEventListener("input",x=>{this.diningCriteria.searchQuery=x.target.value}),e.addEventListener("keydown",x=>{x.key==="Enter"&&(this.diningCriteria.searchQuery=e.value,this.render())})),(a=document.getElementById("btn-clear-dining-search"))==null||a.addEventListener("click",()=>{this.diningCriteria.searchQuery="",this.render()}),(s=document.getElementById("filter-dining-location-type"))==null||s.addEventListener("change",x=>{this.diningCriteria.locationType=x.target.value,this.render()}),(t=document.getElementById("filter-dining-park"))==null||t.addEventListener("change",x=>{this.diningCriteria.park=x.target.value,this.render()}),(o=document.getElementById("filter-dining-meal-type"))==null||o.addEventListener("change",x=>{this.diningCriteria.mealType=x.target.value,this.render()}),(l=document.getElementById("filter-dining-service-type"))==null||l.addEventListener("change",x=>{this.diningCriteria.serviceType=x.target.value,this.render()}),(c=document.getElementById("filter-dining-price-category"))==null||c.addEventListener("change",x=>{this.diningCriteria.priceCategory=x.target.value,this.render()}),(n=document.getElementById("filter-dining-confirmed-only"))==null||n.addEventListener("change",x=>{this.diningCriteria.confirmedOnly=x.target.value==="true",this.render()}),(g=document.getElementById("check-character-dining"))==null||g.addEventListener("change",x=>{this.diningCriteria.characterDiningOnly=x.target.checked,this.render()}),(p=document.getElementById("check-reservation-required"))==null||p.addEventListener("change",x=>{this.diningCriteria.reservationRequiredOnly=x.target.checked,this.render()}),(f=document.getElementById("check-vegetarian-options"))==null||f.addEventListener("change",x=>{this.diningCriteria.vegetarianOnly=x.target.checked,this.render()}),(r=document.getElementById("check-favorites-only"))==null||r.addEventListener("change",x=>{this.diningCriteria.favoritesOnly=x.target.checked,this.render()}),(d=document.getElementById("btn-reset-dining-filters"))==null||d.addEventListener("click",()=>{this.diningCriteria={searchQuery:"",categoryTab:"all",locationType:"all",park:"all",mealType:"all",serviceType:"all",priceCategory:"all",cuisine:"all",characterDiningOnly:!1,reservationRequiredOnly:!1,vegetarianOnly:!1,confirmedOnly:!1,favoritesOnly:!1},this.render()}),document.querySelectorAll(".btn-toggle-dining-favorite").forEach(x=>{x.addEventListener("click",y=>{y.stopPropagation();const h=y.currentTarget.getAttribute("data-id");h&&(R.toggleFavorite(h),this.render())})}),document.querySelectorAll(".btn-open-restaurant-details").forEach(x=>{x.addEventListener("click",y=>{const h=y.currentTarget.getAttribute("data-id");h&&(this.activeModal="restaurant-details",this.modalSelectedRestaurantId=h,this.render())})}),document.querySelectorAll(".btn-add-restaurant-to-itinerary").forEach(x=>{x.addEventListener("click",y=>{var k;const h=y.currentTarget.getAttribute("data-id");h&&(this.activeModal="add-meal",this.modalSelectedRestaurantId=h,this.modalSelectedMealDay=((k=this.itinerary[0])==null?void 0:k.date)||"2027-05-05",this.render())})}),(v=document.getElementById("select-suggest-day"))==null||v.addEventListener("change",x=>{const y=x.target.value;this.selectedDiningDaySuggestion=y||null,this.render()}),(u=document.getElementById("btn-close-day-suggestions"))==null||u.addEventListener("click",()=>{this.selectedDiningDaySuggestion=null,this.render()}),document.querySelectorAll(".btn-quick-add-to-day").forEach(x=>{x.addEventListener("click",y=>{const h=y.currentTarget.getAttribute("data-restaurant-id"),k=y.currentTarget.getAttribute("data-date");h&&k&&(this.activeModal="add-meal",this.modalSelectedRestaurantId=h,this.modalSelectedMealDay=k,this.render())})}),(m=document.getElementById("btn-toggle-admin-panel"))==null||m.addEventListener("click",()=>{this.showDiningAdminPanel=!this.showDiningAdminPanel,this.render()}),(w=document.getElementById("btn-export-catalog-csv"))==null||w.addEventListener("click",()=>{const x=R.exportCatalogAsCSV();z.downloadFile("orlando-planner-restaurantes.csv",x,"text/csv;charset=utf-8")}),(_=document.getElementById("btn-export-catalog-json"))==null||_.addEventListener("click",()=>{const x=R.exportCatalogAsJSON();z.downloadFile("orlando-planner-catalogo-gastronomico.json",x,"application/json")}),(b=document.getElementById("btn-export-meals-csv"))==null||b.addEventListener("click",()=>{const x=R.exportMealsAsCSV();z.downloadFile("orlando-planner-refeicoes-agendadas.csv",x,"text/csv;charset=utf-8")}),document.querySelectorAll(".btn-quick-add-meal").forEach(x=>{x.addEventListener("click",y=>{y.stopPropagation();const h=y.currentTarget.getAttribute("data-date");h&&(this.activeModal="add-meal",this.modalSelectedMealDay=h,this.modalSelectedRestaurantId=null,this.render())})})}attachMealModalListeners(){document.querySelectorAll(".btn-open-add-meal-for-date").forEach(a=>{a.addEventListener("click",s=>{const t=s.currentTarget.getAttribute("data-date");t&&(this.activeModal="add-meal",this.modalSelectedMealDay=t,this.modalSelectedRestaurantId=null,this.render())})}),document.querySelectorAll(".btn-remove-day-meal").forEach(a=>{a.addEventListener("click",s=>{const t=s.currentTarget.getAttribute("data-meal-id");t&&(R.removeMeal(t),this.render())})});const e=document.getElementById("form-add-meal");e&&e.addEventListener("submit",a=>{a.preventDefault();const s=new FormData(e),t=s.get("visitDate")||"2027-05-05",o=s.get("restaurantId")||"",l=s.get("mealType")||"lunch",c=s.get("plannedTime")||"13:00",n=s.get("reservationStatus")||"needed_pending",g=s.get("reservationReference")||null,p=s.get("personalNotes")||null,f=R.getRestaurantById(o),r=f?f.name:"Restaurante";R.addMeal({trip_id:"trip-may-2027",restaurant_id:o,restaurant_name:r,visit_date:t,meal_type:l,planned_time:c,reservation_status:n,reservation_reference:g,personal_notes:p,itinerary_day_id:t}),this.closeModal(),this.render()})}toggleDayLock(e){const a=this.itinerary.find(s=>s.date===e);a&&(a.isLocked=!a.isLocked,this.saveCurrentState(!0),this.render())}openDayDetails(e){this.activeModal="day-details",this.modalSelectedDate=e,this.render();const a=this.itinerary.find(s=>s.date===e);a&&a.parkId&&this.loadDayDetailsQueueTimes(a.parkId)}async loadDayDetailsQueueTimes(e,a=!1){const s=document.getElementById("day-queue-content");if(s){a&&(s.innerHTML=`
        <div class="flex items-center justify-center py-6 text-outline gap-2">
          <span class="material-symbols-outlined animate-spin text-[18px] text-primary">progress_activity</span>
          <span>Atualizando filas em tempo real...</span>
        </div>
      `);try{const t=await Te.fetchParkWaitTimes(e);if(t&&this.activeModal==="day-details"){const o=document.getElementById("day-queue-content");o&&(o.innerHTML=wa(t))}}catch(t){console.warn("Erro ao carregar filas do dia:",t)}}}async loadLiveWaitData(e,a=!1){this.selectedLiveParkId=e,this.liveWaitData=null,this.render();try{const s=await Te.fetchParkWaitTimes(e);this.liveWaitData=s,this.currentTab==="calendario-de-lotacao"&&this.crowdSubTab==="live-queues"&&this.render()}catch(s){console.warn("Erro ao carregar filas ao vivo:",s),this.render()}}openSwapModal(e){this.activeModal="swap-days",this.modalSelectedDate=e,this.render()}openTicketRulesModal(e){this.activeModal="ticket-rules",this.modalSelectedTicketId=e,this.render()}openTripGeneratorModal(){this.activeModal="trip-generator",this.render()}closeModal(){this.activeModal=null,this.modalSelectedDate=null,this.modalSelectedTicketId=null,this.modalSelectedRestaurantId=null,this.modalSelectedMealDay=null,this.modalSelectedMealType=void 0,this.render()}closeMobileSidebar(){var e;(e=document.getElementById("app-sidebar"))==null||e.classList.add("-translate-x-full")}executeDaySwap(e,a){const s=this.itinerary.findIndex(u=>u.date===e),t=this.itinerary.findIndex(u=>u.date===a);if(s===-1||t===-1)return;if(this.itinerary[s].isLocked||this.itinerary[t].isLocked){alert("Não é possível trocar datas bloqueadas.");return}const o=this.itinerary[s],l=this.itinerary[t],c=o.parkId,n=o.ticketId,g=o.title,p=o.description,f=o.activityType,r=o.effortLevel,d=o.ropeDropStrategy,v=o.priorityAttractions;o.parkId=l.parkId,o.ticketId=l.ticketId,o.title=l.title,o.description=l.description,o.activityType=l.activityType,o.effortLevel=l.effortLevel,o.ropeDropStrategy=l.ropeDropStrategy,o.priorityAttractions=l.priorityAttractions,l.parkId=c,l.ticketId=n,l.title=g,l.description=p,l.activityType=f,l.effortLevel=r,l.ropeDropStrategy=d,l.priorityAttractions=v,this.saveCurrentState(!0)}applyParkToDate(e,a){const s=this.itinerary.find(o=>o.parkId===e),t=this.itinerary.find(o=>o.date===a);if(t){if(t.isLocked){alert("Esta data está bloqueada.");return}s?(this.executeDaySwap(s.date,a),this.currentTab="meu-roteiro",this.render()):(t.parkId=e,t.activityType="park",this.saveCurrentState(!0),this.currentTab="meu-roteiro",this.render())}}applyAcceptedOptimizerSuggestions(){const e=this.optimizationResult.suggestions.filter(a=>a.accepted);if(e.length===0){alert("Nenhuma sugestão aceita para aplicar.");return}this.itinerary=JSON.parse(JSON.stringify(this.optimizationResult.proposedItinerary)),this.saveCurrentState(!0),alert(`${e.length} alterações do otimizador aplicadas com sucesso!`),this.currentTab="meu-roteiro",this.render()}handleUndo(){const e=P.undo(this.itinerary);e&&(this.itinerary=e,this.saveCurrentState(!1),this.render())}handleRedo(){const e=P.redo(this.itinerary);e&&(this.itinerary=e,this.saveCurrentState(!1),this.render())}handleExportMarkdown(){const e=z.generateMarkdownItinerary(this.itinerary,this.tickets,this.crowdStore);z.downloadFile(`orlando-planner-roteiro-${this.itinerary.length}dias.md`,e,"text/markdown;charset=utf-8")}handleExportJson(){const e=P.exportFullProject();z.downloadFile(`orlando-planner-backup-${this.itinerary.length}dias.json`,e,"application/json")}handlePrintDossier(){z.printFullDossier(this.itinerary,this.tickets,this.crowdStore)}renderLogin(e){const a=document.getElementById("app");if(!a)return;const s=j.isLockedOut(),t=j.getLockoutRemainingSeconds();a.innerHTML=Ma(e,s,t);const o=document.getElementById("form-login"),l=document.getElementById("login-email"),c=document.getElementById("login-password"),n=document.getElementById("login-remember"),g=document.getElementById("btn-toggle-pwd"),p=document.getElementById("pwd-icon"),f=document.getElementById("btn-login-submit"),r=document.getElementById("btn-login-spinner"),d=document.getElementById("btn-login-text");if(g&&c&&p&&g.addEventListener("click",()=>{const v=c.type==="password";c.type=v?"text":"password",p.textContent=v?"visibility_off":"visibility"}),s){const v=window.setInterval(()=>{if(!j.isLockedOut())window.clearInterval(v),this.renderLogin();else{const u=j.getLockoutRemainingSeconds(),m=document.getElementById("login-feedback-area");m&&(m.innerHTML=`
              <div class="mb-5 p-3.5 rounded-xl bg-error-container/20 border border-error/30 text-error flex items-start gap-2.5 text-xs animate-pulse">
                <span class="material-symbols-outlined text-[20px] text-error flex-shrink-0">shield_with_heart</span>
                <div>
                  <span class="font-semibold block text-[13px]">Acesso Temporariamente Suspenso</span>
                  Muitas tentativas sem sucesso. Aguarde <strong>${u} segundos</strong> para tentar novamente.
                </div>
              </div>
            `)}},1e3);return}o&&o.addEventListener("submit",async v=>{v.preventDefault();const u=(l==null?void 0:l.value)||"",m=(c==null?void 0:c.value)||"",w=n?n.checked:!0;if(!u.trim()||!m){this.renderLogin("Por favor, informe seu e-mail e senha.");return}f&&(f.disabled=!0),r&&r.classList.remove("hidden"),d&&(d.textContent="Autenticando com segurança...");try{const _=await j.login(u,m,w);_.success?(this.recalculateAll(),this.render(),this.attachGlobalListeners()):this.renderLogin(_.error||"Credenciais inválidas.")}catch{this.renderLogin("Erro inesperado durante a autenticação. Tente novamente.")}})}handleLogout(){window.confirm("Deseja realmente sair do Orlando Planner?")&&(j.logout(),this.renderLogin())}}document.addEventListener("DOMContentLoaded",()=>{new Oa});
//# sourceMappingURL=index-OT-kZBFW.js.map
