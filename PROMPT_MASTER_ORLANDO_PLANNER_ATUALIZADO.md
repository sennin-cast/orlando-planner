# PROMPT MASTER — ORLANDO PLANNER

## 1. PAPEL DO AGENTE

Você é um Engenheiro de Software Full Stack Sênior, Arquiteto Frontend e Especialista em Planejamento de Viagens para Parques Temáticos de Orlando.

Sua missão é desenvolver uma aplicação web completa, funcional, responsiva e pronta para publicação no GitHub Pages, denominada:

**ORLANDO PLANNER**

O projeto será um planejador inteligente de viagem que combina:

- Calendário de lotação integrado ao ORLANDO PLANNER, alimentado internamente por dados de previsão.
- Roteiro personalizado de parques temáticos.
- Controle e validação de ingressos.
- Gestão de desgaste físico.
- Recomendações inteligentes de datas.
- Otimização automática do roteiro.
- Histórico de alterações e comparação de alternativas.
- Exportação do planejamento para PDF, Markdown e JSON.

A aplicação deverá funcionar inteiramente no navegador, sem backend obrigatório.

**Princípio fundamental:** nunca apresentar dados estimados, inventados ou não verificados como informações oficiais.

---

## 2. CONTEXTO DA VIAGEM

**Destino:** Orlando, Flórida, Estados Unidos.

**Período do planejamento:** 05/05/2027 a 23/05/2027.

**Objetivo:** distribuir as visitas aos parques de maneira inteligente, priorizando menor lotação, validade dos ingressos, recuperação física e aproveitamento das atrações.

### Parques incluídos

**Walt Disney World**
- Magic Kingdom.
- EPCOT.
- Disney's Hollywood Studios.
- Disney's Animal Kingdom.

**Universal Orlando Resort**
- Universal Studios Florida.
- Universal Islands of Adventure.
- Universal Epic Universe.
- Universal Volcano Bay.

**SeaWorld Parks**
- SeaWorld Orlando.
- Busch Gardens Tampa Bay.

### Restrições pessoais iniciais

1. Dia 05/05/2027 reservado para chegada e organização.
2. Dia 23/05/2027 reservado e bloqueado para Magic Kingdom, como encerramento da viagem.
3. O encerramento deverá utilizar um ingresso avulso, separado do passe Disney utilizado anteriormente.
4. Prever dias de descanso e compras.
5. Evitar sequências excessivamente cansativas.
6. Permitir reconfiguração dos demais dias.
7. Não alterar datas bloqueadas durante a otimização.

---

## 3. FONTE PRINCIPAL DE LOTAÇÃO — USO INTERNO E NÃO EXIBIÇÃO

A fonte prioritária será:

https://www.undercovertourist.com/orlando/crowd-calendar/may-2027/?shem=aimgspc

O Undercover Tourist será utilizado como referência prioritária **apenas na camada interna de dados**, sujeito às condições de uso e eventuais exigências de licença/atribuição.

### Regra obrigatória de privacidade visual da fonte

- **Não exibir** o nome "Undercover Tourist", seu domínio, URL, logotipo, links para a fonte ou metadados de proveniência na interface comum do viajante.
- Não criar cartões "Fonte principal", links "Consultar fonte original", menus de provedores, botões técnicos de importação nem pop-ups com a URL na experiência pública.
- Exibir os resultados com identidade visual própria do **ORLANDO PLANNER**, sem sugerir que previsões de terceiros foram criadas originalmente pelo aplicativo.
- Separar `CrowdForecastRecord` (dados de apresentação) de `CrowdForecastProvenance` (metadados administrativos). A interface pública consome apenas os campos de apresentação.
- Manter proveniência, URL, datas de coleta e status de verificação em documentação/processo administrativo restrito, não nos componentes de interface nem nos arquivos de exportação do roteiro do viajante.
- **Limitação técnica importante:** em hospedagem estática (GitHub Pages), arquivos, JavaScript, requisições e dados entregues ao navegador são inspecionáveis. Não prometer sigilo absoluto de URLs ou metadados publicados. Para confidencialidade real, manter metadados fora do build público ou usar backend autorizado.
- **Conformidade:** se a licença ou os termos exigirem atribuição visível, obter permissão para a apresentação desejada ou escolher fonte alternativa licenciada. Não suprimir atribuição legalmente exigida.
- Essa regra se aplica a todas as telas, tooltips, modais, relatórios, impressões, exports e mensagens comuns ao viajante.

### Classificação visual

- 1 a 3: Lowest Crowds — verde.
- 4 a 6: Average Crowds — laranja.
- 7 a 10: Highest Crowds — vermelho.
- Recommended Park — indicador positivo verde.
- Busy Day for This Park — indicador de alerta vermelho.
- Low, Mid or High Season — indicador de temporada.

### Requisitos obrigatórios

Cada registro de previsão deverá conter:

- Data da visita.
- Parque correspondente.
- Índice de lotação, quando disponível.
- Indicador de parque recomendado.
- Indicador de dia movimentado.
- Classificação de temporada, quando disponível.
- URL da fonte (somente metadados administrativos; não enviar à UI pública).
- Data da coleta ou atualização.
- Status de verificação do dado.

### Integridade dos dados

É proibido inventar índices de lotação.

Se determinado índice não estiver disponível, apresentar:

**Dados de lotação não disponíveis.**

Nunca transformar ausência de dados em índice zero.

Nunca atribuir automaticamente a um parque o índice geral de Orlando como se fosse uma previsão específica daquele parque.

### Estratégia de importação

Criar módulo independente para importação de dados em JSON ou CSV.

A aplicação deve permitir:

1. Importar previsões.
2. Validar o formato.
3. Identificar registros duplicados.
4. Identificar datas ausentes.
5. Substituir previsões antigas.
6. Manter histórico das atualizações.
7. Exibir ao viajante apenas a data de atualização dos dados, se verificável, sem identificar o fornecedor.

Não implementar scraping automático sem verificar as condições de utilização da fonte.

Se o ambiente de desenvolvimento não permitir acessar o calendário, criar o módulo de importação e utilizar valores nulos nos registros não verificados.

Não bloquear a aplicação por falta de dados externos.

---

## 4. ROTEIRO INICIAL

A aplicação deverá iniciar com o seguinte roteiro editável:

| Data | Dia | Atividade | Esforço inicial |
|---|---|---|---|
| 05/05 | Quarta | Chegada a Orlando / Compras essenciais | OFF |
| 06/05 | Quinta | SeaWorld Orlando | Leve |
| 07/05 | Sexta | Universal Studios Florida | Médio |
| 08/05 | Sábado | Descanso / Disney Springs | OFF |
| 09/05 | Domingo | Busch Gardens Tampa Bay | Médio |
| 10/05 | Segunda | Volcano Bay | Leve |
| 11/05 | Terça | Epic Universe — Visita 1 | Pesado |
| 12/05 | Quarta | Descanso / Premium Outlets Vineland | OFF |
| 13/05 | Quinta | Islands of Adventure | Pesado |
| 14/05 | Sexta | Descanso / Mall at Millenia | OFF |
| 15/05 | Sábado | Animal Kingdom | Leve |
| 16/05 | Domingo | Hollywood Studios | Pesado |
| 17/05 | Segunda | Descanso / Piscina | OFF |
| 18/05 | Terça | EPCOT | Pesado |
| 19/05 | Quarta | Epic Universe — Visita 2 | Pesado |
| 20/05 | Quinta | Descanso / Compras | OFF |
| 21/05 | Sexta | Magic Kingdom — Passe Disney | Pesado |
| 22/05 | Sábado | Descanso / Organização das malas | OFF |
| 23/05 | Domingo | Magic Kingdom — Ingresso Avulso | Pesado |

**Importante:** este roteiro é uma proposta inicial de planejamento, não uma distribuição comprovadamente otimizada com base em dados de lotação verificados.

O sistema deverá validar as datas, regras de ingresso e índices de lotação antes de atribuir qualquer status de otimização.

---

## 5. MOTOR DE INGRESSOS

Criar um gerenciador de ingressos configurável.

### Modelo de ingresso

Cada ingresso deverá possuir:

- Identificador único.
- Nome comercial.
- Operadora.
- Parques permitidos.
- Quantidade de visitas.
- Repetição de parques permitida ou não.
- Data de início da validade.
- Data de término.
- Janela de utilização.
- Regras de ativação.
- Restrições específicas.
- Status de confirmação das regras.
- Fonte oficial das condições.

### Disney — 4-Park Magic

Configurar inicialmente como hipótese de planejamento:

- Quatro visitas.
- Quatro parques Disney diferentes.
- Uma visita por parque.
- Primeira visita proposta em 15/05/2027.
- Última visita proposta em 21/05/2027.
- Janela hipotética de sete dias corridos.

Essas condições deverão permanecer com status **Pendente de confirmação** até que sejam verificadas para o produto efetivamente adquirido em 2027.

Não tratar a janela de sete dias como regra universal de ingressos Disney.

### Magic Kingdom — 23/05/2027

Criar ingresso avulso independente.

A visita será obrigatória e bloqueada no calendário.

O motor não poderá consumir uma visita do passe Disney anterior para esse dia.

### Universal Orlando

Configurar inicialmente:

- Universal Studios Florida.
- Islands of Adventure.
- Epic Universe — primeira visita.
- Epic Universe — segunda visita.
- Volcano Bay.

A janela de 14 dias será uma hipótese inicial, sujeita à confirmação.

Verificar se o produto adquirido permite:

- Acesso ao Epic Universe.
- Duas visitas ao Epic Universe.
- Acesso ao Volcano Bay.
- Utilização dentro das datas planejadas.

Se não houver confirmação, exibir aviso de elegibilidade não verificada.

### SeaWorld Parks

Configurar:

- SeaWorld Orlando.
- Busch Gardens Tampa Bay.
- Janela inicialmente estimada em 14 dias.

A validade deverá ser configurável e confirmada conforme o ingresso adquirido.

### Estados de validação

- Válido: todas as condições confirmadas e atendidas.
- Aviso: condição pendente de confirmação.
- Conflito: regra confirmada foi violada.
- Não verificável: informações insuficientes.

O sistema nunca deverá declarar um roteiro 100% válido quando existirem condições obrigatórias não confirmadas.

---

## 6. MOTOR DE FADIGA

Criar um sistema de pontuação de desgaste físico.

Não utilizar apenas classificações fixas por parque.

### Variáveis

- Duração prevista da visita.
- Quantidade estimada de caminhada.
- Tempo de deslocamento.
- Horário de chegada.
- Horário de saída.
- Quantidade de atrações planejadas.
- Dias consecutivos de parques.
- Tempo de recuperação.
- Preferências e limitações informadas pelo usuário.

### Classificações

- Leve.
- Moderado.
- Alto.
- Crítico.
- Descanso.

As classificações iniciais do roteiro serão valores padrão editáveis, não avaliações definitivas.

### Regras

Emitir alertas quando:

- Houver dois dias de esforço elevado consecutivos.
- O desgaste acumulado ultrapassar o limite configurado.
- Houver deslocamento longo após um dia cansativo.
- O intervalo de recuperação for insuficiente.

Recomendar um dia de descanso a cada dois ou três dias de parques, sem transformar essa recomendação em regra obrigatória.

Permitir que o usuário ajuste sua tolerância física.

---

## 7. MOTOR DE OTIMIZAÇÃO

Desenvolver um algoritmo capaz de propor alterações no roteiro.

### Objetivos

1. Minimizar a lotação prevista.
2. Reduzir o desgaste físico.
3. Minimizar deslocamentos.
4. Respeitar preferências pessoais.
5. Preservar datas e atividades bloqueadas.

### Pesos iniciais

- Lotação: 40%.
- Fadiga: 25%.
- Deslocamentos: 15%.
- Preferências pessoais: 10%.
- Flexibilidade: 10%.

Os pesos deverão ser editáveis.

### Restrições obrigatórias

- Datas bloqueadas.
- Quantidade de visitas permitidas.
- Regras confirmadas dos ingressos.
- Parques obrigatórios.
- Período da viagem.
- Disponibilidade de dias.
- Restrições pessoais obrigatórias.

Restrições obrigatórias não podem ser compensadas por uma pontuação melhor.

### Funcionamento

O otimizador deverá:

1. Ler o roteiro atual.
2. Verificar as regras de ingressos.
3. Consultar os dados de lotação disponíveis.
4. Avaliar a fadiga.
5. Gerar alternativas válidas.
6. Calcular a pontuação das alternativas.
7. Comparar os resultados.
8. Apresentar recomendações explicáveis.

Quando não houver dados suficientes para calcular a lotação, o sistema deverá indicar que a otimização é parcial.

Não declarar uma solução globalmente ótima sem evidência.

### Comparador de roteiros

Apresentar lado a lado:

- Roteiro atual.
- Roteiro sugerido.
- Diferença de lotação.
- Diferença de fadiga.
- Impacto nas janelas dos ingressos.
- Alterações propostas.
- Justificativas.

O usuário deverá aceitar ou rejeitar cada alteração.

Nunca modificar automaticamente o roteiro salvo sem confirmação.

---

## 8. INTERFACE DO USUÁRIO

**Regra global de interface:** a origem das previsões de lotação é um detalhe interno de integração e não deve ser apresentada ao viajante. Não incluir nomes de fornecedores, URLs, links externos de consulta, nem opções técnicas de importação na navegação comum. Os recursos de importação e auditoria pertencem ao fluxo administrativo separado. Caso a licença imponha atribuição visível, interromper a publicação dessa integração até resolver a autorização ou trocar a fonte.

Criar dashboard moderno, com identidade visual própria do ORLANDO PLANNER e calendário legível, sem identificação do fornecedor de dados na interface.

Não copiar logotipos, imagens protegidas ou o layout integral do site.

### Cabeçalho

Título:

**ORLANDO PLANNER**

Subtítulo:

**Sua viagem. Seu roteiro. Sua melhor experiência.**

Exibir:

- Período da viagem.
- Dias restantes.
- Quantidade de parques.
- Dias de descanso.
- Status geral do planejamento.

### Dashboard de indicadores

Cards com:

- Disney: visitas utilizadas e disponíveis.
- Universal: visitas utilizadas e disponíveis.
- SeaWorld: visitas utilizadas e disponíveis.
- Lotação média dos dias com dados.
- Índice de fadiga.
- Conflitos detectados.
- Regras pendentes de confirmação.

### Calendário principal

Criar calendário mensal interativo.

Cada dia deverá apresentar:

- Data e dia da semana.
- Parque ou atividade.
- Índice de lotação, quando disponível.
- Cor da classificação.
- Indicador de recomendação de visita (sem mencionar a origem dos dados).
- Nível de fadiga.
- Ingresso utilizado.
- Alertas.
- Indicador de dia bloqueado.

### Edição do calendário

Permitir:

- Alterar parque.
- Trocar atividades entre datas.
- Inserir descanso.
- Adicionar compras.
- Bloquear uma data.
- Inserir observações.
- Desfazer alterações.

Preferir troca entre datas, em vez de simplesmente substituir uma atividade e perder a visita anterior.

### Detalhes do dia

Ao selecionar uma data, abrir um painel contendo:

- Parque planejado.
- Previsão de lotação.
- Data de atualização da previsão, quando verificada (sem nome ou link do fornecedor).
- Horário previsto de chegada.
- Estratégia de Rope Drop.
- Atrações prioritárias.
- Pausas e refeições.
- Estratégia de filas expressas.
- Deslocamento estimado.
- Fadiga prevista.
- Observações pessoais.

Horários de funcionamento, atrações e sistemas de filas devem ser tratados como informações dinâmicas, sujeitas a confirmação.

---

## 9. COMPARADOR DE MELHORES DIAS

Criar funcionalidade:

**Melhores Dias para Visitar**

Ao selecionar um parque, mostrar:

- Datas disponíveis.
- Índices de lotação.
- Recomendações.
- Alertas.
- Compatibilidade com ingressos.
- Fadiga estimada.
- Conflitos com o roteiro atual.

Permitir comparar até três datas.

Destacar a melhor alternativa entre as datas com dados suficientes.

Explicar por que ela foi recomendada.

---

## 10. PERSISTÊNCIA E HISTÓRICO

Utilizar localStorage.

Salvar automaticamente:

- Roteiro.
- Preferências.
- Ingressos.
- Datas bloqueadas.
- Dados importados.
- Configurações de fadiga.
- Pesos de otimização.

Implementar:

- Exportação JSON.
- Importação JSON.
- Exportação Markdown.
- Impressão em PDF.
- Reset para roteiro inicial.
- Histórico de versões.
- Desfazer/refazer.

Os dados deverão possuir versão de esquema para permitir migrações futuras.

---

## 11. ARQUITETURA

Utilizar:

- Vite.
- TypeScript com strict mode.
- HTML5 semântico.
- CSS moderno.
- CSS Grid e Flexbox.
- Componentes modulares.
- Vitest para testes.
- GitHub Actions para deploy.

A aplicação deverá ser estática e funcionar no GitHub Pages.

Configurar corretamente o caminho base do Vite para repositórios publicados em subdiretórios.

Não exigir servidor Node.js em produção.

### Estrutura sugerida

```text
orlando-planner/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── data/
│       └── crowd-calendar.json
├── src/
│   ├── main.ts
│   ├── styles/
│   │   ├── main.css
│   │   ├── calendar.css
│   │   ├── dashboard.css
│   │   └── print.css
│   ├── types/
│   │   ├── park.ts
│   │   ├── ticket.ts
│   │   └── itinerary.ts
│   ├── data/
│   │   ├── initialItinerary.ts
│   │   └── parksCatalog.ts
│   ├── services/
│   │   ├── crowdDataService.ts
│   │   ├── ticketValidator.ts
│   │   ├── fatigueCalculator.ts
│   │   ├── itineraryOptimizer.ts
│   │   ├── storageManager.ts
│   │   └── exportService.ts
│   ├── components/
│   │   ├── Dashboard.ts
│   │   ├── Calendar.ts
│   │   ├── DayDetails.ts
│   │   ├── TicketManager.ts
│   │   ├── CrowdComparison.ts
│   │   └── OptimizationPanel.ts
│   └── utils/
│       └── dateUtils.ts
└── tests/
    ├── ticketValidator.test.ts
    ├── fatigueCalculator.test.ts
    └── itineraryOptimizer.test.ts
```

A estrutura poderá ser ajustada se houver justificativa arquitetural.

---

## 12. TESTES OBRIGATÓRIOS

Criar testes automatizados para:

1. Datas consecutivas.
2. Anos bissextos.
3. Janelas de validade.
4. Ingressos com visitas repetidas.
5. Visitas fora da validade.
6. Ausência de dados de lotação.
7. Conflitos entre ingressos.
8. Datas bloqueadas.
9. Dois parques no mesmo dia.
10. Dias consecutivos de esforço elevado.
11. Alterações que deixam visitas sem data.
12. Importação de dados inválidos.
13. Persistência e restauração.
14. Otimização sem dados suficientes.
15. Preservação obrigatória do Magic Kingdom em 23/05.
16. Ausência do nome, URL e logotipo do fornecedor em todas as telas, tooltips, relatórios e exportações públicas.
17. Ausência de metadados administrativos de proveniência no bundle e nos arquivos públicos quando exigida confidencialidade.
18. Verificação das obrigações de licença/atribuição antes da publicação.

Usar datas locais no fuso America/New_York para o planejamento, evitando erros de um dia causados por conversões UTC.

---

## 13. CRITÉRIOS DE ACEITE

A entrega somente estará completa quando:

- A aplicação abrir corretamente.
- O roteiro inicial estiver carregado.
- Todos os dias forem editáveis, exceto os bloqueados.
- O motor de ingressos funcionar.
- A validação não assumir regras não confirmadas.
- O sistema identificar conflitos.
- A fadiga for calculada.
- O comparador de datas funcionar.
- O otimizador produzir sugestões justificadas.
- A ausência de lotação não gerar números fictícios.
- Os dados forem persistidos.
- A exportação funcionar.
- Os testes automatizados passarem.
- O build de produção funcionar.
- A publicação no GitHub Pages estiver configurada.
- A interface funcionar em desktop e dispositivos móveis.
- Nenhuma tela pública, tooltip, impressão ou exportação identificar o fornecedor de previsões.
- A separação entre dados públicos e metadados administrativos ser testada.
- As condições de uso e atribuição da fonte serem verificadas antes do lançamento.

---

## 14. PROCESSO DE IMPLEMENTAÇÃO

Não gere apenas uma demonstração visual.

Implemente a aplicação real, com lógica funcional.

Trabalhe nesta sequência:

**Etapa 1 — Arquitetura**
Definir modelos de dados, estrutura do projeto e dependências.

**Etapa 2 — Núcleo**
Implementar calendário, catálogo de parques, ingressos, validações e persistência.

**Etapa 3 — Dados**
Implementar importação e rastreabilidade administrativas da fonte prioritária, com visualização pública desacoplada e sem exibir a origem dos dados.

**Etapa 4 — Inteligência**
Implementar fadiga, comparação e otimização.

**Etapa 5 — Interface**
Construir dashboard responsivo, edição interativa e detalhes diários.

**Etapa 6 — Qualidade**
Executar testes, corrigir erros e validar casos extremos.

**Etapa 7 — Publicação**
Configurar build e deploy no GitHub Pages.

### Instrução final

Ao concluir, apresentar:

1. Estrutura de arquivos criada.
2. Funcionalidades implementadas.
3. Resultado dos testes.
4. Comandos para executar localmente.
5. Procedimento de publicação no GitHub Pages.
6. Pendências de dados externos.
7. Regras de ingressos que ainda precisam de confirmação.

**Não afirmar que uma funcionalidade está pronta sem implementá-la e testá-la.**

O resultado esperado é um planejador real, confiável, editável e extensível para a viagem de Orlando em maio de 2027.
