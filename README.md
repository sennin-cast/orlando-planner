# ORLANDO PLANNER

> **Sua viagem. Seu roteiro. Sua melhor experiência.**

Planejador inteligente de viagem para os parques temáticos de Orlando (05/05/2027 a 23/05/2027), projetado com foco em confiabilidade, controle estrito de regras de ingressos, balanceamento biomecânico de desgaste físico e integridade de dados de lotação.

---

## 1. Visão Geral da Arquitetura

O **ORLANDO PLANNER** é uma Single Page Application (SPA) estática construída com:
- **TypeScript 5 (Strict Mode):** Tipagem estrita em todos os modelos e serviços.
- **Vite 5:** Bundler ultrarrápido configurado com caminho base relativo (`base: './'`) para compatibilidade nativa com GitHub Pages em subdiretórios.
- **Tailwind CSS 3:** Design system *Orlando Dispatch* focado em clareza analítica, sem clichês infantis e com legibilidade tipográfica superior (`Inter` + `JetBrains Mono` com números tabulares).
- **Vitest:** Suíte de 22 testes unitários e de integração cobrindo todas as restrições obrigatórias.
- **LocalStorage com Versionamento de Esquema (v1):** Persistência automática no navegador com pilha de histórico (desfazer/refazer) e snapshots manuais.

---

## 2. Estrutura do Projeto

```text
ROTEIRO - ORLANDO/
├── index.html                           # Documento HTML raiz
├── package.json                         # Dependências e scripts
├── tsconfig.json                        # Configuração estrita do TypeScript
├── vite.config.ts                       # Configuração Vite com base relativa
├── tailwind.config.js                   # Tokens de cores e tipografia (DESIGN.md)
├── postcss.config.js                    # PostCSS + Tailwind
├── .github/
│   └── workflows/
│       └── deploy.yml                   # Deploy automático no GitHub Pages
├── public/
│   └── data/
│       └── crowd-calendar.json          # Template público de lotação (sem dados inventados)
├── src/
│   ├── main.ts                          # Controlador central e roteador de abas
│   ├── styles/
│   │   ├── main.css                     # Estilos globais e regras para impressão (PDF)
│   │   └── print.css
│   ├── types/
│   │   ├── park.ts                      # Modelos dos 10 parques e complexos
│   │   ├── ticket.ts                    # Modelos de ingressos e contratos de validação
│   │   ├── itinerary.ts                 # Modelo diário do roteiro (19 dias)
│   │   ├── crowd.ts                     # Separação: apresentação pública vs proveniência admin
│   │   ├── fatigue.ts                   # Parâmetros e resultados de desgaste físico
│   │   └── optimizer.ts                 # Pesos e propostas de otimização explicáveis
│   ├── data/
│   │   ├── parksCatalog.ts              # Catálogo dos 10 parques (Disney, Universal, United)
│   │   ├── initialTickets.ts            # Configuração dos 4 pacotes de ingressos
│   │   ├── initialItinerary.ts          # Roteiro inicial de 05/05 a 23/05/2027
│   │   └── defaultCrowdData.ts          # Dados iniciais nulos + benchmark para simulação
│   ├── services/
│   │   ├── ticketValidator.ts           # Validador de capacidade, janelas e repetições
│   │   ├── fatigueCalculator.ts         # Cálculo biomecânico, deslocamentos e alertas
│   │   ├── comparatorService.ts         # Comparador de até 3 datas para o mesmo parque
│   │   ├── itineraryOptimizer.ts        # Algoritmo de propostas com preservação de bloqueios
│   │   ├── crowdDataService.ts          # Módulo isolado de importação CSV/JSON e privacidade
│   │   ├── storageManager.ts            # Persistência versionada, desfazer/refazer e backup
│   │   └── exportService.ts             # Exportação Markdown, JSON e impressão em PDF
│   ├── components/
│   │   ├── Sidebar.ts                   # Barra lateral de navegação responsiva
│   │   ├── Header.ts                    # Cabeçalho com indicador de salvamento e exportação
│   │   ├── DashboardView.ts             # Visão Geral com KPIs e pontos de atenção
│   │   ├── CalendarView.ts              # Meu Roteiro com cards diários e ações rápidas
│   │   ├── CrowdView.ts                 # Calendário de Lotação (matriz 10 parques x 19 dias)
│   │   ├── ComparatorView.ts            # Comparador lado a lado dos Melhores Dias
│   │   ├── TicketsView.ts               # Gestor de ingressos e relatório de conformidade
│   │   ├── OptimizerView.ts             # Sugestões com aceitação/rejeição individual
│   │   ├── FatigueView.ts               # Monitoramento detalhado de caminhada e estresse
│   │   ├── HistoryView.ts               # Pontos de restauração, histórico e reset
│   │   ├── SettingsView.ts              # Backup, importação admin e auditoria
│   │   ├── DayDetailsModal.ts           # Modal detalhado para inspeção e edição do dia
│   │   ├── SwapDaysModal.ts             # Modal de inversão segura entre duas datas
│   │   └── TicketRulesModal.ts          # Modal para ajuste das regras de ingressos
│   └── utils/
│       └── dateUtils.ts                 # Manipulação segura de datas (America/New_York)
└── tests/
    ├── ticketValidator.test.ts          # 10 testes de ingressos e datas
    ├── crowdAndPrivacy.test.ts          # 6 testes de privacidade e persistência
    └── fatigueAndOptimizer.test.ts      # 6 testes de fadiga e otimização
```

---

## 3. Funcionalidades Implementadas

1. **Visão Geral (Dashboard):**
   - 4 métricas principais (19 dias de viagem, 12 dias em parques, 7 dias sem parque, status dos ingressos).
   - Próximos dias do itinerário com indicação de dias bloqueados.
   - Distribuição estratégica por complexo (Disney, Universal, United Parks e Pausas).
   - 4 alertas prioritários (Magic Kingdom 23/05 travado, validade pendente, Epic Universe x2, previsão 2027).

2. **Meu Roteiro (Calendário Interativo):**
   - 19 cartões estruturados (05/05 a 23/05/2027).
   - Bloqueio e desbloqueio com 1 clique (datas bloqueadas não podem ser movidas pelo otimizador).
   - Inversão de datas (Swap) protegida para evitar perda de visitas.
   - Modal com editor completo de Rope Drop, atrações prioritárias, horários e notas pessoais.

3. **Calendário de Lotação (Crowd Matrix):**
   - Matriz completa de 10 parques x 19 datas.
   - Escala cromática (1-3 verde, 4-6 laranja, 7-10 vermelho).
   - **Princípio de Integridade:** ausência de dados verificados resulta em "Dados de lotação não disponíveis" (em cinza neutro), nunca transformando dados faltantes em zero ou inventando números.
   - **Regra de Privacidade da Fonte:** total isolamento da interface pública; nenhuma tela, exportação ou tooltip exibe URLs externas ou nomes de provedores terceiros.

4. **Comparador de Melhores Dias:**
   - Seleção de qualquer parque do catálogo.
   - Comparação simultânea de até 3 datas da viagem.
   - Exibição de compatibilidade de ingressos, estimativa de fadiga, conflitos e justificativa analítica.

5. **Motor de Ingressos & Conformidade:**
   - Suporte a 4 passes:
     - **Disney 4-Park Magic Pass** (4 parques distintos, janela de 7 dias, status *Pendente de confirmação*).
     - **Magic Kingdom Avulso** (dedicado a 23/05/2027, bloqueado e isolado do passe anterior).
     - **Universal Explorer / Epic Multiday** (5 visitas, 2x Epic Universe, janela de 14 dias, status *Pendente de confirmação*).
     - **SeaWorld & Busch Gardens 2-Park Pass** (2 visitas, janela de 14 dias, status *Pendente de confirmação*).
   - Alerta estrito: enquanto houver regras sob hipótese de planejamento, o roteiro é classificado como *Pendente*, nunca declarando 100% de validade sem confirmação oficial.

6. **Motor de Desgaste Físico (Fadiga):**
   - Estimativa biomecânica baseada em km de caminhada diária, intensidade do parque e tempo de estrada (ex: Busch Gardens Tampa com ~150 min de trânsito ida e volta na I-4 West).
   - Bônus de recuperação nos dias OFF/compras.
   - Alertas para dois dias consecutivos de esforço pesado ou 3+ dias seguidos de parques.
   - Ajuste de tolerância e sensibilidade física pelo usuário.

7. **Motor de Otimização Explicável:**
   - Otimização ponderada (Lotação 40%, Fadiga 25%, Deslocamentos 15%, Preferências 10%, Flexibilidade 10%).
   - Preservação estrita das datas travadas (05/05 Chegada e 23/05 Magic Kingdom).
   - Otimização Parcial declarada quando os índices de 2027 não estão verificados.
   - Comparador de sugestões lado a lado com opção de aceitar/rejeitar cada recomendação individualmente.

8. **Histórico, Backup & Exportação:**
   - Desfazer / Refazer (Undo/Redo) com até 30 passos.
   - Criação de pontos de restauração manuais nomeados.
   - Exportação para Markdown editorial.
   - Backup completo em JSON com validação de esquema.
   - Impressão estilizada em PDF com regras `@media print`.
   - Módulo administrativo de importação de lotação (CSV/JSON) com verificação de integridade e carregamento de dados benchmark para simulação.

---

## 4. Testes Automatizados

A aplicação conta com 22 testes automatizados executados via Vitest, cobrindo:
1. Datas consecutivas e fusos horários locais (`America/New_York`).
2. Anos bissextos e viradas de mês.
3. Janelas de validade dos ingressos.
4. Ingressos com visitas repetidas e limite por parque.
5. Visitas agendadas fora da validade.
6. Ausência de dados de lotação (manutenção de nulo, sem conversão para zero).
7. Conflitos entre ingressos e visitas sem ingresso associado.
8. Preservação mandatória de datas bloqueadas.
9. Detecção de múltiplos parques no mesmo dia.
10. Alertas de fadiga para dias consecutivos de esforço Pesado.
11. Detecção de visitas não alocadas.
12. Importação de dados inválidos e descarte de duplicatas.
13. Persistência no LocalStorage e histórico de desfazer/refazer.
14. Otimização sem dados suficientes com sinalização explícita de modo parcial.
15. Preservação obrigatória do Magic Kingdom em 23/05 com ingresso avulso.
16. Ausência do nome, URL ou marca de terceiros em telas e exportações públicas.
17. Separação entre dados públicos de apresentação e proveniência administrativa.
18. Isolamento de integridade e conformidade de dados.

Para rodar os testes:
```bash
npm test
```

---

## 5. Execução Local

### Pré-requisitos
- Node.js 18+ (testado no Node.js v26)
- npm 9+

### Comandos
```bash
# 1. Instalar dependências
npm install

# 2. Executar servidor de desenvolvimento local
npm run dev

# 3. Executar suíte de testes
npm test

# 4. Compilar versão de produção
npm run build
```

---

## 6. Procedimento de Publicação no GitHub Pages

O projeto já contém o fluxo pronto para publicação no GitHub Pages via GitHub Actions:

1. **Subir o código para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit orlando planner"
   git branch -M main
   git remote add origin https://github.com/<SEU_USUARIO>/<SEU_REPOSITORIO>.git
   git push -u origin main
   ```
2. **Ativar o GitHub Pages:**
   - Acesse o repositório no GitHub.
   - Vá em **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3. **Deploy Automático:**
   - A cada push na branch `main`, o workflow `.github/workflows/deploy.yml` executará automaticamente os testes, o build e o upload do diretório `./dist`.
   - Graças à configuração `base: './'` no `vite.config.ts`, a aplicação funciona perfeitamente em subdomínios (ex: `https://usuario.github.io/meu-roteiro/`).

---

## 7. Pendências de Dados Externos & Regras a Confirmar

Para manter a honestidade analítica conforme exigido no projeto:

1. **Previsões de Lotação para Maio de 2027:**
   - Os números efetivos e atualizados para maio de 2027 ainda não foram divulgados pelas fontes de mercado.
   - O aplicativo opera com registros nulos por padrão. No módulo administrativo em **Configurações**, é possível importar um arquivo CSV/JSON atualizado quando esses dados estiverem disponíveis, ou clicar em **"Carregar Dados Benchmark de Simulação"** para experimentar o fluxo completo do otimizador.

2. **Ingressos Disney — Janela do Passe 4-Park Magic:**
   - Configurado inicialmente com a hipótese de 7 dias corridos de janela a partir do primeiro uso (15/05 a 21/05).
   - Requer confirmação das regras do produto que será comercializado para a temporada de 2027.

3. **Ingressos Universal — Acesso ao Epic Universe:**
   - A hipótese inicial considera 5 visitas (com até 2 entradas no Epic Universe e acesso ao Volcano Bay).
   - Requer verificação oficial da política da Universal para a admissão repetida no Epic Universe em 2027.

4. **Ingressos SeaWorld / Busch Gardens:**
   - A janela estimada de 14 dias entre o SeaWorld e o Busch Gardens Tampa requer confirmação da data de emissão do bilhete final.
