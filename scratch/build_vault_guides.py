import os

vault_root = r'c:\Users\evang\Documents\PROJETOS\ROTEIRO - ORLANDO\Obsidian_Vault'

# 03 - Guias JumpStart
js_dir = os.path.join(vault_root, '03 - Guias JumpStart (Estratégias de Parques)')
os.makedirs(js_dir, exist_ok=True)

wdw_js = '''---
title: Guia JumpStart — Walt Disney World Resort
aliases: [JumpStart WDW, Guia Disney World, Estrategia Disney]
tags: [disney, wdw, jumpstart, lightning-lane, reservas]
---

# 🏰 Guia JumpStart — Walt Disney World Resort

Guia estratégico completo para dominar o planejamento no Walt Disney World Resort em Orlando, Flórida.

---

## 🕒 Marcos Críticos de Planejamento (Linha do Tempo)

* **60 Dias Antes do Check-in:**
  * **Reservas de Restaurantes (Dining Reservations):** Abertura às 06:00 (horário de Orlando). Hóspedes de hotéis Disney podem reservar para toda a estadia (até 10 dias). Não-hóspedes reservam dia a dia.
  * **Experiências Especiais:** Droid Depot, Savi's Workshop (sabre de luz em Galaxy's Edge) e Bibbidi Bobbidi Boutique.
* **7 Dias Antes do Check-in (Hóspedes Disney) ou 3 Dias Antes (Público Geral):**
  * **Lightning Lane Multi Pass & Single Pass:** Pré-agendamento de até 3 atrações por parque antes da viagem.
* **No Dia da Visita (07:00 da manhã):**
  * Entrada na **Fila Virtual (Virtual Queue)** pelo app *My Disney Experience* para atrações participantes (como Guardians of the Galaxy: Cosmic Rewind ou Tiana's Bayou Adventure).
  * Segunda oportunidade de Fila Virtual às **13:00** (deve estar dentro do parque).

---

## ⚡ O Novo Sistema Lightning Lane (Fura-Fila)

O antigo Disney Genie+ foi reformulado e agora funciona como o clássico FastPass+ com antecedência:

### 1. Lightning Lane Multi Pass
Permite selecionar previamente **3 atrações** em um único parque temático:
* **No Magic Kingdom, EPCOT e Hollywood Studios:** As atrações são divididas em Níveis (*Tier 1* e *Tier 2*). Você pode escolher 1 atração do Grupo 1 e 2 atrações do Grupo 2 (ou todas 3 do Grupo 2).
* **No Animal Kingdom:** Não há divisão em grupos; você escolhe quaisquer 3 atrações.
* **No dia do parque:** Assim que você utiliza o primeiro passe agendado, você pode agendar imediatamente um novo passe para qualquer parque (se tiver ingresso Park Hopper!).

### 2. Lightning Lane Single Pass (Pago à Parte)
As atrações mais concorridas e de última geração são vendidas individualmente (limite de 2 por pessoa/dia):
* **Magic Kingdom:** TRON Lightcycle / Run e Seven Dwarfs Mine Train.
* **EPCOT:** Guardians of the Galaxy: Cosmic Rewind.
* **Disney's Hollywood Studios:** Star Wars: Rise of the Resistance.
* **Disney's Animal Kingdom:** Avatar Flight of Passage.

---

## 🚌 Transporte Gratuito Disney
* **Monorail (Monotrilho):** Liga o Magic Kingdom ao Transportation and Ticket Center (TTC), Epcot e hotéis Contemporary, Polynesian e Grand Floridian.
* **Disney Skyliner (Teleférico):** Conecta EPCOT e Hollywood Studios aos hotéis Art of Animation, Pop Century, Caribbean Beach e Riviera Resort.
* **Ferryboats & Water Taxis:** Barcos relaxantes navegando por Seven Seas Lagoon, Crescent Lake e Disney Springs.
* **Ônibus Disney:** Frotas regulares entre todos os parques temáticos, aquáticos e hotéis do complexo.

---
## 🔗 Links Relacionados
* [[02 - Planos de Parques (Touring Plans)/01 - Magic Kingdom - Plano de 1 Dia Passo a Passo|Roteiro Magic Kingdom]]
* [[02 - Planos de Parques (Touring Plans)/02 - EPCOT - Plano de 1 Dia Passo a Passo|Roteiro EPCOT]]
* [[02 - Planos de Parques (Touring Plans)/03 - Disney's Hollywood Studios - Plano de 1 Dia Passo a Passo|Roteiro Hollywood Studios]]
* [[02 - Planos de Parques (Touring Plans)/04 - Disney's Animal Kingdom - Plano de 1 Dia Passo a Passo|Roteiro Animal Kingdom]]
'''

with open(os.path.join(js_dir, '01 - Guia JumpStart - Walt Disney World Resort.md'), 'w', encoding='utf-8') as f:
    f.write(wdw_js)

uor_js = '''---
title: Guia JumpStart — Universal Orlando Resort
aliases: [JumpStart UOR, Guia Universal Orlando, Estrategia Universal]
tags: [universal, uor, express-pass, citywalk, hogwarts-express]
---

# ⚡ Guia JumpStart — Universal Orlando Resort

Domine as estratégias, transporte, armários e filas rápidas no Universal Studios Florida, Islands of Adventure e Volcano Bay.

---

## 🎟️ A Regra do Trem: Ingresso Park-to-Park vs Base
* **O Expresso de Hogwarts (Hogwarts Express):** Liga o Beco Diagonal (Universal Studios) a Hogsmeade (Islands of Adventure).
* **Atenção:** Você **DEVE** possuir ingresso com opção **Park-to-Park** para embarcar no trem. Ingressos de 1 parque por dia não têm acesso à atração, que é uma das experiências mágicas mais queridas pelos fãs de Harry Potter.
* O trajeto tem animações e histórias diferentes dependendo do sentido da viagem (ida e volta têm conteúdos distintos nas janelas da cabine).

---

## 🚀 Universal Express Pass
Diferente da Disney, o Express Pass da Universal não exige agendamento de horário. Você simplesmente entra na fila expressa quando quiser:
1. **Universal Express Regular:** Permite cortar a fila 1 vez por atração participante.
2. **Universal Express Unlimited:** Permite cortar a fila **quantas vezes quiser** nas atrações participantes durante todo o dia.
3. **Dica de Ouro dos Hotéis:** Hospedar-se em um dos hotéis da categoria Premier da Universal (*Loews Portofino Bay, Hard Rock Hotel ou Loews Royal Pacific*) garante **Express Pass Unlimited GRATUITO** para todos os hóspedes do quarto durante todo o período da estadia (incluindo o dia do check-in e check-out!).

---

## 🎒 Regra Rígida de Armários Gratuitos (Lockers)
Nas atrações radicais onde itens soltos não são permitidos, a Universal disponibiliza armários pequenos gratuitos pelo tempo estimado da fila:
* **Com detector de metais (Tudo deve ir pro armário, inclusive celular nos bolsos):**
  * *The Incredible Hulk Coaster*
  * *Jurassic World VelociCoaster*
  * *Hollywood Rip Ride Rockit*
* **Com armário pequeno gratuito ao lado da atração:**
  * *Revenge of the Mummy*, *Men in Black*, *Escape from Gringotts*, *Forbidden Journey*.
* **Dica:** Utilize bolsas pequenas ou pochetes para facilitar a guarda rápida nos armários digitais acionados pelo código de barras do seu ingresso.

---
## 🔗 Links Relacionados
* [[02 - Planos de Parques (Touring Plans)/06 - Universal Islands of Adventure - Plano de 1 Dia Passo a Passo|Roteiro Islands of Adventure]]
* [[02 - Planos de Parques (Touring Plans)/07 - Universal Studios Florida - Plano de 1 Dia Passo a Passo|Roteiro Universal Studios Florida]]
* [[02 - Planos de Parques (Touring Plans)/08 - Universal Orlando - 1 Dia Park-to-Park (2 Parques em 1 Dia)|Roteiro 1 Dia Park-to-Park]]
* [[02 - Planos de Parques (Touring Plans)/09 - Universal Orlando - 2 Dias Park-to-Park (Roteiro Completo)|Roteiro 2 Dias Park-to-Park]]
'''

with open(os.path.join(js_dir, '02 - Guia JumpStart - Universal Orlando Resort.md'), 'w', encoding='utf-8') as f:
    f.write(uor_js)

ueu_js = '''---
title: Guia JumpStart — Universal Epic Universe
aliases: [JumpStart Epic Universe, Guia Epic Universe, Novo Parque Universal]
tags: [universal, epic-universe, nintendo, dark-universe, berk, ministerio-da-magia]
---

# 🌌 Guia JumpStart — Universal Epic Universe

O mais avançado e revolucionário parque temático construído no mundo em décadas, apresentando 5 mundos imersivos conectados pelo Celestial Park.

---

## 🌟 Os 5 Mundos Temáticos do Epic Universe

### 1. Celestial Park (O Coração Cósmico)
Jardins exuberantes, fontes dançantes e arquitetura astronômica que serve de ponto de partida para todos os portais:
* **Stardust Racers:** Montanha-russa dupla de corrida espacial atingindo 100 km/h sem freios intermediários e manobra "Celestial Spin" com carrinhos se cruzando de cabeça para baixo.
* **Constellation Carousel:** Carrossel celestial deslizando sobre constelações e constelações mitológicas.
* **Gastronomia:** *Atlantic Restaurant* (alta gastronomia de frutos do mar em aquário envidraçado) e *The Blue Dragon Pan-Asian Restaurant*.

### 2. Super Nintendo World
Entre pelo icônico cano verde e mergulhe em um videogame em tamanho real:
* **Mario Kart: Bowser's Challenge:** A mais tecnológica atração de realidade aumentada do mundo no castelo do Bowser.
* **Yoshi's Adventure:** Passeio elevado para toda a família procurando ovos coloridos.
* **Donkey Kong Country & Mine-Cart Madness:** Montanha-russa com tecnologia revolucionária de trilho oculto que simula saltar sobre trilhos quebrados!
* **Power-Up Bands:** Pulseiras interativas para acumular moedas e enfrentar Bowser Jr.

### 3. The Wizarding World of Harry Potter – Ministry of Magic
Fusão entre a Paris mágica dos anos 1920 de *Animais Fantásticos* e o Ministério da Magia Britânico dos anos 1990:
* **Harry Potter and the Battle at the Ministry:** Elevadores omnidirecionais subindo, descendo e girando enquanto Harry, Ron e Hermione enfrentam os Comensais da Morte para levar Dolores Umbridge a julgamento.
* **Le Cirque Arcanus:** Espetáculo teatral ao vivo com criaturas mágicas e acrobatas.

### 4. How to Train Your Dragon – Isle of Berk
Vila viking completa vivendo em harmonia com dragões:
* **Hiccup's Wing Gliders:** Montanha-russa suspensa sobre a lagoa viking.
* **The Untrainable Dragon:** Show musical ao vivo com dragões voadores em tamanho real.
* **Fyre Drill:** Batalha de barcos viking com canhões de água.
* **Dragon Racer's Rally:** Manobras de treinamento acrobático no ar.

### 5. Dark Universe
Aldeia misteriosa de Frankenstein e lar dos clássicos monstros da Universal:
* **Monsters Unchained: The Frankenstein Experiment:** Atração robótica intensa enfrentando Drácula, Homem-Lobo, Múmia e Monstro da Lagoa Negra.
* **Curse of the Werewolf:** Montanha-russa familiar giratória fugindo de alcateias de lobisomens.
* **Burning Blade Tavern:** Taverna viking com lâminas em chamas a cada 20 minutos.

---
## 🏨 Hotel Integrado
* **Universal Helios Grand Hotel:** Hotel temático de luxo localizado literalmente **DENTRO** do parque, com entrada exclusiva e vista panorâmica para os shows de fontes do Celestial Park.

---
## 🔗 Links Relacionados
* [[02 - Planos de Parques (Touring Plans)/05 - Universal Epic Universe - Plano de 1 Dia Passo a Passo|Roteiro Passo a Passo Epic Universe]]
'''

with open(os.path.join(js_dir, '03 - Guia JumpStart - Universal Epic Universe.md'), 'w', encoding='utf-8') as f:
    f.write(ueu_js)

dlr_js = '''---
title: Guia JumpStart — Disneyland Resort Califórnia
aliases: [JumpStart Disneyland, Guia Disneyland California]
tags: [disney, disneyland, california, dca, jumpstart]
---

# 🏰 Guia JumpStart — Disneyland Resort Califórnia

Para viajantes que desejam combinar ou entender as diferenças entre a costa leste (Orlando) e a costa oeste (Anaheim, Califórnia).

---

## 🌟 Estrutura do Complexo
* **Disneyland Park:** O parque original inaugurado por Walt Disney em 1955. Possui clássicos exclusivos como Indiana Jones Adventure, Matterhorn Bobsleds e Alice in Wonderland.
* **Disney California Adventure (DCA):** Casa de Radiator Springs Racers (Cars Land), Guardians of the Galaxy – Mission: BREAKOUT!, Avengers Campus e Incredicoaster.
* **Proximidade:** Os dois parques ficam a apenas 100 passos um do outro, tornando o Park Hopping extremamente fácil e sem necessidade de transporte!
'''

with open(os.path.join(js_dir, '04 - Guia JumpStart - Disneyland Resort Califórnia.md'), 'w', encoding='utf-8') as f:
    f.write(dlr_js)

# 04 - Guia de Outlets & Compras Orlando
out_dir = os.path.join(vault_root, '04 - Guia de Outlets & Compras Orlando')
os.makedirs(out_dir, exist_ok=True)

out1 = '''---
title: Os Melhores Outlets de Orlando (Preços Baratos)
aliases: [Melhores Outlets, Outlets Baratos Orlando, Guia de Outlets]
tags: [outlets, compras, desconto, economia, orlando]
---

# 🛍️ Os Melhores Outlets de Orlando (Foco em Preço Baixo)

Orlando é a capital mundial das compras com desconto. Saiba onde encontrar os melhores preços sem cair em armadilhas de lojas caras.

---

## 🥇 1. Orlando International Premium Outlets
* **Localização:** 4951 International Drive (norte da I-Drive, próximo à Universal).
* **Perfil:** O **maior outlet de Orlando** (mais de 240 lojas). Possui as maiores pontas de estoque e os maiores saldos da cidade.
* **Lojas Imperdíveis:**
  * *Nike Factory Store*: O maior galpão de saldos de tênis (procure a parede de fundos com caixas sem tampa, descontos adicionais de 30% a 50% sobre a etiqueta vermelha).
  * *Adidas, Puma, Under Armour, Asics*.
  * *Tommy Hilfiger, Calvin Klein, Polo Ralph Lauren, Gap, Levi's*.
* **Dica de Ouro:** Chegue às **09h45** (15 minutos antes da abertura das lojas). As vagas de estacionamento gratuitas próximas à Nike esgotam até as 11h.

---

## 🥈 2. Orlando Vineland Premium Outlets
* **Localização:** 8200 Vineland Ave (sul, próximo ao Disney Springs e complexo Disney).
* **Perfil:** Ambiente mais refinado, corredores mais limpos e menos caótico que o da International Drive.
* **Foco:** Marcas premium e de luxo (Burberry, Gucci, Prada, Michael Kors, Coach, Tory Burch, Kate Spade) combinadas com lojas tradicionais (Nike, Tommy, Gap, Columbia).
* **Recomendação:** Ideal para quem busca compras de roupas de inverno, jaquetas térmicas Columbia/North Face e bolsas de marca com cupons do VIP Club.

---

## 🥉 3. Lake Buena Vista Factory Stores
* **Localização:** 15657 S Apopka Vineland Rd (a 5 minutos da Disney).
* **Perfil:** O outlet "secreto" de Orlando. Menos turistas, estacionamento na porta das lojas e zero filas nos caixas.
* **Destaques:**
  * *Nike Factory Store*: Preços idênticos ou mais baixos que os Premium Outlets, mas com ambiente vazio e sem filas de 40 minutos para pagar.
  * *Old Navy Outlet, Carter's (roupas de bebê/crianças por $4-$8), Levi's, Aeropostale*.

---
## 🔗 Links Relacionados
* [[02 - Garimpo Extremo - Ross, Marshalls e TJ Maxx|Lojas de Desconto Extremo (Ross, Marshalls)]]
* [[03 - Eletrônicos & Smartphones - Best Buy & Apple Store|Eletrônicos na Best Buy]]
* [[05 - Estratégias de Compras, Cupons e Alfândega Brasileira|Estratégias de Cupons & Alfândega]]
'''

with open(os.path.join(out_dir, '01 - Os Melhores Outlets de Orlando (Preços Baratos).md'), 'w', encoding='utf-8') as f:
    f.write(out1)

out2 = '''---
title: Garimpo Extremo — Ross, Marshalls e TJ Maxx
aliases: [Ross Dress for Less, Marshalls, TJ Maxx, Desconto Extremo]
tags: [compras, ross, marshalls, tjmaxx, pechinchas]
---

# 🏷️ Garimpo Extremo: Ross Dress for Less, Marshalls e TJ Maxx

As lojas de departamento *Off-Price* compram sobras de estoque de grandes magazines dos EUA e vendem por até **70% a 80% abaixo do preço de etiqueta original**.

---

## 🧳 O que Comprar na Ross Dress for Less?
1. **Malas de Viagem de Marca:** É o melhor lugar dos EUA para comprar malas rígidas Samsonite, Delsey e Tommy Hilfiger (malas de 23 kg de $250 por **$49 a $69 dólares**).
2. **Tênis de Marca:** Nike, Adidas, Under Armour, Puma e Skechers encontrados por **$24 a $39 dólares**.
3. **Roupas Básicas e Infantis:** Camisetas Calvin Klein por $9, conjuntos infantis Carter's por $7.

## 👗 Marshalls & TJ Maxx
* Ambientes mais organizados que a Ross, com maior ênfase em cosméticos de grife, perfumes, artigos de cozinha (panelas Le Creuset com desconto) e roupas femininas de estilistas conhecidos.

## 💡 Segredos de Garimpo
* **Melhor Horário:** Chegue às **08h00 ou 08h30** (horário de abertura matinal). As prateleiras foram reabastecidas durante a noite e estão intactas e organizadas.
* **Localizações Recomendadas:** Prefira unidades longe dos polos turísticos (ex: Ross de Kissimmee Loop ou na Colonial Drive) para encontrar tamanhos P e M disponíveis.
'''

with open(os.path.join(out_dir, '02 - Garimpo Extremo - Ross, Marshalls e TJ Maxx.md'), 'w', encoding='utf-8') as f:
    f.write(out2)

out3 = '''---
title: Eletrônicos & Smartphones — Best Buy & Apple Store
aliases: [Best Buy Orlando, Apple Store Orlando, Eletronicos]
tags: [eletronicos, apple, best-buy, fones, cameras]
---

# 📱 Eletrônicos & Smartphones: Best Buy e Apple Store

Como economizar na compra de iPhones, MacBooks, consoles de videogame, fones de ouvido e câmeras em Orlando.

---

## 💻 Best Buy (O Segredo do "Open-Box")
* **O que é Open-Box?** Produtos devolvidos por clientes dentro do prazo de 14 dias de arrependimento nos EUA. São inspecionados pela equipe técnica da Best Buy, possuem **garantia integral de fábrica** e descontos de **20% a 40%**!
* **Itens com maior desconto:** Fones de ouvido com cancelamento de ruído (Sony WH-1000XM5, Bose, AirPods Pro), notebooks gamer, iPads e caixas de som JBL.
* **Unidade Recomendada:** Best Buy da Millenia Plaza (4155 Millenia Blvd).

## 🍏 Apple Store Orlando
* Duas unidades oficiais em Orlando: **Mall at Millenia** e **The Florida Mall**.
* **Dica de Estoque:** Para compras de lançamentos (iPhone mais recente), reserve previamente pelo site da Apple para retirada na loja física (*Pick-up*).
'''

with open(os.path.join(out_dir, '03 - Eletrônicos & Smartphones - Best Buy & Apple Store.md'), 'w', encoding='utf-8') as f:
    f.write(out3)

out4 = '''---
title: Suprimentos, Alimentos e Farmácias — Walmart, Target & Walgreens
aliases: [Walmart Orlando, Target, Walgreens, Suprimentos]
tags: [supermercado, suprimentos, walmart, vitaminas, remedios]
---

# 🛒 Suprimentos, Alimentos e Farmácias: Walmart, Target & Walgreens

Economize centenas de dólares no orçamento de alimentação abastecendo suprimentos essenciais fora dos parques temáticos.

---

## 💧 A Parada Obrigatória do Dia 1: Walmart Supercenter
* **Garrafas de Água Mineral:** Um fardo com 40 garrafas de 500ml no Walmart custa cerca de **$5 dólares** (dentro do parque, uma única garrafa custa **$4 dólares**!).
* **Lanches para a Mochila:** Barras de cereais, castanhas, salgadinhos e frutas (é 100% permitido entrar com alimentos lacrados e água nos parques Disney e Universal).
* **Protetor Solar e Pomadas:** Protetor solar em spray Banana Boat / Neutrogena pela metade do preço do Brasil.
* **Unidade recomendada:** Walmart Supercenter na Turkey Lake Rd (ao lado da Universal) ou na US-192 em Kissimmee.

## 🎯 Target & Walgreens
* **Target:** Excelente para roupas básicas de algodão, artigos de decoração e brinquedos exclusivos de colecionador (Lego, Funko Pop, Star Wars).
* **Walgreens / CVS:** Farmácias completas abertas 24h para compras de vitaminas (Centrum, Melatonina, Vitamina C) e analgésicos para alívio muscular pós-parque.
'''

with open(os.path.join(out_dir, '04 - Suprimentos, Alimentos e Farmácias - Walmart, Target & Walgreens.md'), 'w', encoding='utf-8') as f:
    f.write(out4)

out5 = '''---
title: Estratégias de Compras, Cupons e Alfândega Brasileira
aliases: [Alfândega Brasil, Cota 1000 Dolares, Cupons Desconto]
tags: [alfandega, cotas, cupons, impostos, viagem]
---

# 📑 Estratégias de Compras, Cupons de Desconto & Alfândega Brasileira

Orientações legais e práticas para retornar ao Brasil sem surpresas na Receita Federal.

---

## 🏷️ Como Obter Cupons de Desconto Adicionais
1. **VIP Shopper Club (Simon Malls):** Cadastre-se gratuitamente no site oficial do Simon Premium Outlets para ter o *Digital Coupon Book* no celular com descontos de 15% a 25% adicionais em marcas como Tommy, Calvin Klein, Columbia e Levi's.
2. **App dos Fabricantes:** Baixe o app da Nike e cadastre-se no *Nike Membership* para obter cupons de boas-vindas válidos nas lojas de fábrica.

---

## 🛃 Regras da Alfândega Brasileira (Receita Federal)
* **Cota de Isenção por Via Aérea:** **US$ 1.000 (mil dólares americanos)** por passageiro.
* **Bens de Uso Pessoal Isentos (Não entram na cota de US$ 1.000):**
  * **1 Smartphone / Celular:** Deve estar ativado, com chip e em uso pessoal durante a viagem.
  * **1 Relógio de Pulso:** Usado no pulso.
  * **1 Câmera Fotográfica:** Em uso.
  * *Atenção:* Notebooks, iPads/tablets, drones e videogames **NÃO** são considerados itens de uso pessoal e entram na cota de US$ 1.000!
* **Limite de Bagagem:** O limite padrão de mala despachada em voos internacionais é de **23 kg (50 lbs)** por mala. Utilize uma balança digital portátil para evitar taxas de excesso de peso que variam de $100 a $150 dólares por mala.
'''

with open(os.path.join(out_dir, '05 - Estratégias de Compras, Cupons e Alfândega Brasileira.md'), 'w', encoding='utf-8') as f:
    f.write(out5)

# 05 - Roteiro & Metodologia
plan_dir = os.path.join(vault_root, '05 - Roteiro & Metodologia de Viagem')
os.makedirs(plan_dir, exist_ok=True)

plan1 = '''---
title: Logística de Chegada e Partida (Aeroporto MCO)
aliases: [Dia de Chegada, Dia de Partida, Logistica MCO]
tags: [logistica, aeroporto, voos, check-in, mco]
---

# ✈️ Logística de Chegada e Partida (Aeroporto de Orlando - MCO)

A alocação estratégica do primeiro e do último dia é um dos maiores divisores de águas entre uma viagem tranquila e um pesadelo logístico.

---

## 🛬 1. Dia de Chegada (Início)
* **Pouso & Imigração:** Desembarque no MCO, controle de passaportes e retirada de bagagens (reserve de 1h30 a 2h).
* **Retirada do Carro Alugado:** Pegue o veículo no Terminal A, B ou C (pela nova estação do Brightline).
* **Check-in no Hotel:** Descarregue as malas e acomode-se.
* **Parada no Walmart:** Conforme detalhado em [[04 - Guia de Outlets & Compras Orlando/04 - Suprimentos, Alimentos e Farmácias - Walmart, Target & Walgreens|Suprimentos no Walmart]], compre fardos de água mineral, lanches para as mochilas e protetor solar a preço de atacado.
* **Regra:** Nunca agende parque temático no dia do pouso internacional. O cansaço do voo noturno compromete o rendimento e desperdiça o valor do ingresso.

---

## 🛫 2. Dia de Partida (Final) — A Decisão Estratégica
* **Opção Recomendada: Somente Check-out & Aeroporto:**
  * Dedicado à organização minuciosa das malas de 23 kg, pesagem com balança portátil e acomodação de notas fiscais.
  * Devolução do carro alugado no aeroporto sem correria.
  * Chegada ao terminal MCO com **3 horas de antecedência** para voos internacionais.
* **O Grande Encerramento (Gran Finale):**
  * O encerramento épico nos parques (como Magic Kingdom e os fogos *Happily Ever After*) deve acontecer no **penúltimo dia da viagem**, permitindo aproveitar o show até tarde sem o estresse de perder o voo no dia seguinte!
'''

with open(os.path.join(plan_dir, '01 - Logística de Chegada e Partida (MCO).md'), 'w', encoding='utf-8') as f:
    f.write(plan1)

plan2 = '''---
title: Gestão de Fadiga Biomecânica & Dias OFF
aliases: [Fadiga, Desgaste Fisico, Dias de Descanso]
tags: [biomecanica, saude, fadiga, recuperacao, descansos]
---

# 🚶 Gestão de Fadiga Biomecânica & Dias de Pausa (Dias OFF)

Em uma viagem a Orlando, um visitante caminha em média entre **12 km e 20 km por dia** sob temperaturas elevadas. Sem planejamento, a fadiga muscular acumulada no 4º ou 5º dia causa exaustão, dores nos pés e irritabilidade.

---

## 🛑 As Regras Biomecânicas do Orlando Planner

1. **Regra dos 3 Parques Consecutivos (Limite Biomecânico):**
   * Nunca encadeie mais de 2 parques pesados consecutivos sem intercalar um dia OFF ou dia de compras leves.
2. **Classificação de Esforço por Parque:**
   * **Esforço Pesado (15 a 20 km):** Magic Kingdom, EPCOT (o maior parque em área plana) e Universal Epic Universe.
   * **Esforço Médio (11 a 15 km):** Disney's Hollywood Studios, Islands of Adventure, Busch Gardens (inclui viagem de 1h15 pela rodovia I-4).
   * **Esforço Leve (8 a 11 km):** Animal Kingdom (parque arborizado que fecha mais cedo), SeaWorld e Volcano Bay (parque aquático).
3. **Distribuição dos Dias OFF:**
   * Utilize os dias de descanso para dormir até mais tarde, curtir a piscina do hotel e fazer compras sem pressa nos outlets.
'''

with open(os.path.join(plan_dir, '02 - Gestão de Fadiga Biomecânica & Dias OFF.md'), 'w', encoding='utf-8') as f:
    f.write(plan2)

plan3 = '''---
title: Matriz de Roteiros por Duração (7, 10, 14 e 19 Dias)
aliases: [Roteiro 7 Dias, Roteiro 10 Dias, Roteiro 14 Dias, Roteiro 19 Dias]
tags: [itinerarios, recomendacoes, duracao, roteiros]
---

# 🗺️ Matriz de Roteiros por Duração da Viagem

Recomendações ideais calibradas de acordo com a quantidade de dias de estadia em Orlando.

---

## 🏃 1. Viagem Rápida (7 Dias)
* **Dia 1:** Chegada + Walmart
* **Dia 2:** Magic Kingdom
* **Dia 3:** Universal Studios Florida
* **Dia 4:** Pausa / Compras no International Premium Outlets
* **Dia 5:** Universal Islands of Adventure ou Epic Universe
* **Dia 6:** Disney's Hollywood Studios ou EPCOT (Gran Finale)
* **Dia 7:** Check-out e Voo de Partida

## 🌟 2. Viagem Essencial (10 Dias)
* **Dia 1:** Chegada + Abastecimento
* **Dia 2:** SeaWorld Orlando (aquecimento leve)
* **Dia 3:** Magic Kingdom
* **Dia 4:** Descanso & International Premium Outlets
* **Dia 5:** Universal Studios Florida
* **Dia 6:** Universal Islands of Adventure
* **Dia 7:** Pausa & Vineland Premium Outlets + Disney Springs
* **Dia 8:** Disney's Hollywood Studios
* **Dia 9:** Universal Epic Universe (Gran Finale)
* **Dia 10:** Check-out, Malas & Embarque MCO

## 🏆 3. Viagem Completa dos Sonhos (19 Dias — Padrão Master)
* A experiência definitiva equilibrando todos os 10 parques temáticos, 4 dias dedicados de compras econômicas e descansos estratégicos para recuperação física total.
'''

with open(os.path.join(plan_dir, '03 - Matriz de Roteiros por Duração (7, 10, 14 e 19 Dias).md'), 'w', encoding='utf-8') as f:
    f.write(plan3)

# 06 - Regras de Ingressos
rules_dir = os.path.join(vault_root, '06 - Regras de Ingressos & Validação')
os.makedirs(rules_dir, exist_ok=True)

rule1 = '''---
title: Ingressos Disney 4-Park Magic Ticket (Regras e Janelas)
aliases: [Disney 4-Park Magic, Regras Ingressos Disney]
tags: [ingressos, disney, regras, validade]
---

# 🎟️ Ingressos Disney 4-Park Magic Ticket

O ingresso promocional mais popular da Disney para visitantes internacionais.

* **Direito de Visita:** 4 visitas a parques temáticos, sendo exatamente **1 visita a cada um dos 4 parques** (1 dia no Magic Kingdom, 1 dia no EPCOT, 1 dia no Hollywood Studios e 1 dia no Animal Kingdom).
* **Restrição de Repetição:** Não permite repetir o mesmo parque.
* **Janela de Validade:** 7 dias corridos a partir da data de início selecionada no momento da compra.
* **Park Hopping:** Não permite trocar de parque no mesmo dia (1 parque por dia).
'''

with open(os.path.join(rules_dir, '01 - Regras de Ingressos Disney 4-Park Magic Ticket.md'), 'w', encoding='utf-8') as f:
    f.write(rule1)

rule2 = '''---
title: Ingressos Universal 3-Park Explorer Ticket (Regras e Janelas)
aliases: [Universal Explorer Ticket, Regras Ingressos Universal]
tags: [ingressos, universal, regras, validade, parktopark]
---

# 🎟️ Ingressos Universal 3-Park Explorer Ticket

* **Direito de Visita:** Acesso ilimitado aos parques Universal Studios Florida, Universal's Islands of Adventure e Universal's Volcano Bay.
* **Janela de Validade:** **14 dias consecutivos** a partir do primeiro dia de uso.
* **Park-to-Park Incluso:** Permite circular livremente entre os parques no mesmo dia e embarcar no Hogwarts Express.
* **Atenção para Epic Universe:** Verifique se o ingresso adquirido inclui dias específicos no novo Epic Universe, que exige ingressos dedicados com reservas em determinados períodos promocionais.
'''

with open(os.path.join(rules_dir, '02 - Regras de Ingressos Universal 3-Park Explorer.md'), 'w', encoding='utf-8') as f:
    f.write(rule2)

rule3 = '''---
title: Ingressos SeaWorld 2-Park Ticket (Regras e Janelas)
aliases: [SeaWorld 2-Park Ticket, Regras Ingressos SeaWorld]
tags: [ingressos, seaworld, buschgardens, regras]
---

# 🎟️ Ingressos SeaWorld 2-Park Ticket

* **Direito de Visita:** 2 visitas à escolha entre SeaWorld Orlando, Aquatica Orlando, Busch Gardens Tampa Bay e Adventure Island Tampa.
* **Janela de Validade:** A segunda visita deve ocorrer dentro de **14 dias corridos** após a primeira utilização.
* **Transporte Busch Gardens:** A United Parks oferece transporte de ônibus fretado gratuito (*Busch Gardens Shuttle Express*) saindo de pontos estratégicos de Orlando para Tampa.
'''

with open(os.path.join(rules_dir, '03 - Regras de Ingressos SeaWorld 2-Park Ticket.md'), 'w', encoding='utf-8') as f:
    f.write(rule3)

print('All Vault guides and reference notes generated successfully in Obsidian_Vault!')
