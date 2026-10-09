import os

vault_root = r'c:\Users\evang\Documents\PROJETOS\ROTEIRO - ORLANDO\Obsidian_Vault'
tp_dir = os.path.join(vault_root, '02 - Planos de Parques (Touring Plans)')
os.makedirs(tp_dir, exist_ok=True)

plans = [
    {
        'file': '01 - Magic Kingdom - Plano de 1 Dia Passo a Passo.md',
        'title': 'Magic Kingdom — Plano de 1 Dia Passo a Passo',
        'park': 'Magic Kingdom',
        'operator': 'Walt Disney World',
        'tags': ['disney', 'magickingdom', 'touringplan', 'roteiro'],
        'rope_drop': 'Chegue à catraca 45 minutos antes da abertura oficial. Siga imediatamente para a Fantasyland ou Frontierland.',
        'steps': [
            ('08:30 - Rope Drop', 'Tiana\'s Bayou Adventure', 'Embarque na nova atração musical de água sem pegar a fila de 90+ minutos da tarde.'),
            ('09:15', 'Jungle Cruise', 'Passeio cômico de barco pelo Adventureland antes que a fila acumule.'),
            ('10:00', 'Pirates of the Caribbean', 'Clássico com ar-condicionado e embarque contínuo de alta capacidade.'),
            ('10:45', 'Haunted Mansion', 'Mansão Mal-Assombrada em Liberty Square com fila ainda moderada.'),
            ('11:30 - Almoço', 'Sleepy Hollow Refreshments', 'Waffles frescos com frango empanado ou frutas com Nutella sob vista para o Castelo da Cinderela.'),
            ('12:30', 'it\'s a small world', 'Passeio relaxante e refrescante no coração da Fantasyland.'),
            ('13:15', 'Peter Pan\'s Flight', 'Voo suspenso por Londres e Neverland (use Lightning Lane Multi Pass se disponível).'),
            ('14:00', 'Under the Sea ~ Journey of the Little Mermaid', 'Atração musical da Pequena Sereia, fila rápida e ambiente climatizado.'),
            ('14:45', 'Dumbo the Flying Elephant', 'Área com playground coberto climatizado ideal para pausa com crianças.'),
            ('15:15', 'Mad Tea Party', 'Xícaras giratórias clássicas sem filas demoradas.'),
            ('15:45', 'The Many Adventures of Winnie the Pooh', 'Passeio lúdico pelas histórias do Ursinho Pooh.'),
            ('17:00 - Jantar', 'Cosmic Ray\'s Starlight Café', 'Refeição rápida com hambúrgueres e sanduíches assistindo ao show do alienígena Sonny Eclipse.'),
            ('18:15', 'Tomorrowland Speedway', 'Pista de corrida com carrinhos a combustão.'),
            ('19:00', 'Space Mountain', 'Montanha-russa no escuro total (aproveite no início da noite).'),
            ('20:45 - Show de Fogos', 'Happily Ever After', 'Posicione-se em frente ao Castelo da Cinderela na Main Street para as projeções e trilha sonora inesquecível.'),
            ('21:30 - Pós-Fogos', 'Seven Dwarfs Mine Train', 'Aproveite a queda brusca da fila imediatamente após o show de fogos.'),
            ('22:15 - Gran Finale', 'TRON Lightcycle / Run', 'Corrida em alta velocidade sob a cúpula iluminada para fechar a noite mágica com chave de ouro.')
        ],
        'dining_tips': 'Peça pelo Mobile Order no app My Disney Experience com 30 minutos de antecedência para evitar filas de balcão.',
        'lightning_lane_tips': 'Agende com antecedência para Peter Pan\'s Flight, Tiana\'s Bayou Adventure e Space Mountain no Lightning Lane Multi Pass. Compre Single Pass para TRON ou Seven Dwarfs Mine Train se preferir não esperar.'
    },
    {
        'file': '02 - EPCOT - Plano de 1 Dia Passo a Passo.md',
        'title': 'EPCOT — Plano de 1 Dia Passo a Passo',
        'park': 'EPCOT',
        'operator': 'Walt Disney World',
        'tags': ['disney', 'epcot', 'touringplan', 'roteiro'],
        'rope_drop': 'Entre pela entrada principal ou International Gateway (Skyliner) e vá direto para Test Track ou World Discovery.',
        'steps': [
            ('08:30 - Rope Drop', 'Test Track (Reimaginado)', 'Experiência de alta velocidade em pista automobilística ao ar livre.'),
            ('09:30', 'Guardians of the Galaxy: Cosmic Rewind', 'Montanha-russa com lançamento reverso e trilha sonora dos anos 70/80 (Fila Virtual às 07h ou Lightning Lane Single Pass).'),
            ('10:45', 'Frozen Ever After', 'Passeio de barco em Arendelle no pavilhão da Noruega.'),
            ('11:45 - Almoço', 'Regal Eagle Smokehouse (Pavilhão Americano)', 'Autêntico churrasco americano com brisket defumado e costelinhas macias.'),
            ('12:45', 'Remy\'s Ratatouille Adventure', 'Simulador 4D em tamanho de ratinho na cozinha do Gusteau (Pavilhão da França).'),
            ('14:00', 'Journey into Imagination with Figment', 'Passeio interativo pelos sentidos com o dragão Figment.'),
            ('14:45', 'Soarin\' Around the World', 'Voo de asa-delta sobre paisagens icônicas da Terra.'),
            ('15:30', 'Living with the Land', 'Passeio educativo de barco pelas estufas agrícolas do futuro da Disney.'),
            ('16:15', 'Journey of Water, Inspired by Moana', 'Trilha interativa ao ar livre com exploração da água e música da Moana.'),
            ('17:00', 'The Seas with Nemo & Friends', 'Passeio sob o mar e visita a um dos maiores aquários oceânicos do mundo.'),
            ('18:00 - Jantar', 'Connections Eatery', 'Hambúrgueres artesanais, pizzas e waffle Liege no World Celebration.'),
            ('19:15', 'Spaceship Earth', 'Viagem pela história da comunicação humana dentro da icônica geosfera.'),
            ('20:00', 'Mission: SPACE', 'Simulador espacial de lançamento a Marte (versão Green menos intensa ou Orange centrífuga).'),
            ('20:30', 'Gran Fiesta Tour Starring The Three Caballeros', 'Passeio tranquilo de barco no interior da pirâmide mexicana com Pato Donald e Zé Carioca.'),
            ('21:00 - Espetáculo Noturno', 'Luminous The Symphony of Us', 'Show emocionante na lagoa central com fogos, fontes d\'água dançantes e canções Disney.')
        ],
        'dining_tips': 'Durante festivais (Flower & Garden ou Food & Wine), substitua as refeições tradicionais por petiscos dos quiosques ao redor da lagoa.',
        'lightning_lane_tips': 'Priorize Remy\'s Ratatouille Adventure ou Frozen Ever After no Multi Pass. Guardians of the Galaxy opera por fila virtual e Single Pass.'
    },
    {
        'file': '03 - Disney\'s Hollywood Studios - Plano de 1 Dia Passo a Passo.md',
        'title': 'Disney\'s Hollywood Studios — Plano de 1 Dia Passo a Passo',
        'park': 'Disney\'s Hollywood Studios',
        'operator': 'Walt Disney World',
        'tags': ['disney', 'hollywoodstudios', 'starwars', 'toystory', 'touringplan'],
        'rope_drop': 'Caminhe rápido diretamente para a Toy Story Land na abertura para fazer Slinky Dog Dash.',
        'steps': [
            ('08:30 - Rope Drop', 'Slinky Dog Dash', 'Montanha-russa familiar na Toy Story Land com a maior fila do parque durante a tarde.'),
            ('09:15', 'Toy Story Mania!', 'Jogo de tiro ao alvo em 3D superdivertido e interativo.'),
            ('10:00', 'Alien Swirling Saucers', 'Passeio giratório dos extraterrestres de Toy Story.'),
            ('10:30', 'Disney Villains: Unfairly Ever After', 'Apresentação teatral dinâmica com os maiores vilões da Disney.'),
            ('11:15', 'Rock \'n\' Roller Coaster Starring Aerosmith', 'Aceleração de 0 a 92 km/h em 2,8 segundos com manobras no escuro ao som de Aerosmith.'),
            ('12:00', 'The Twilight Zone Tower of Terror', 'Quedas livres aleatórias no elevador assombrado do Hollywood Tower Hotel.'),
            ('12:45 - Almoço', 'ABC Commissary ou Backlot Express', 'Saladas frescas, costelas de porco e tigelas de arroz em ambiente climatizado.'),
            ('13:45', 'Mickey & Minnie\'s Runaway Railway', 'Passeio pioneiro sem trilhos pelos desenhos animados do Mickey.'),
            ('14:45', 'The Little Mermaid – A Musical Adventure', 'Show musical moderno com efeitos visuais e bonecos da Ariel.'),
            ('15:30', 'Millennium Falcon: Smugglers Run', 'Pilote a lendária nave de Han Solo em equipe de 6 passageiros em Galaxy\'s Edge.'),
            ('17:00 - Jantar', 'Docking Bay 7 Food and Cargo', 'Pratos temáticos de Star Wars de alta qualidade com frango assado e costelas marinadas.'),
            ('18:15', 'Star Wars: Rise of the Resistance', 'A experiência imersiva mais espetacular da Disney (visite no final da tarde quando a fila diminui).'),
            ('20:30 - Encerramento', 'Fantasmic!', 'Batalha épica entre Mickey feiticeiro e os vilões com águas dançantes, lasers, projeções e barcos ao vivo.')
        ],
        'dining_tips': 'Para um lanche clássico, pegue o Ronto Wrap no Ronto Roasters em Galaxy\'s Edge ou Carrot Cake Cookie no Trolley Car Cafe.',
        'lightning_lane_tips': 'Rise of the Resistance é vendido como Single Pass. No Multi Pass, priorize Slinky Dog Dash na primeira escolha.'
    },
    {
        'file': '04 - Disney\'s Animal Kingdom - Plano de 1 Dia Passo a Passo.md',
        'title': 'Disney\'s Animal Kingdom — Plano de 1 Dia Passo a Passo',
        'park': 'Disney\'s Animal Kingdom',
        'operator': 'Walt Disney World',
        'tags': ['disney', 'animalkingdom', 'pandora', 'avatar', 'touringplan'],
        'rope_drop': 'Dirija-se imediatamente para Pandora - The World of Avatar e entre na fila de Flight of Passage.',
        'steps': [
            ('08:00 - Rope Drop', 'Avatar Flight of Passage', 'Voe sobre as costas de um Banshee em simulador 3D hiper-realista.'),
            ('09:00', 'Na\'vi River Journey', 'Passeio de barco meditativo pela floresta bioluminescente de Pandora.'),
            ('09:45', 'Kilimanjaro Safaris', 'Safári fotográfico com animais em liberdade (leões, elefantes, girafas) com maior atividade pela manhã.'),
            ('10:45', 'Gorilla Falls Exploration Trail', 'Trilha a pé observando gorilas de planície, hipopótamos e aves exóticas.'),
            ('11:30 - Show', 'Festival of the Lion King', 'Espetáculo ao vivo no estilo Broadway com acrobatas e canções clássicas de O Rei Leão.'),
            ('12:15 - Almoço', 'Yak & Yeti Local Food Cafes', 'Pratos rápidos de culinária pan-asiática, frango agridoce e rolinhos primavera.'),
            ('13:15', 'Kali River Rapids', 'Bóia de corredeiras na Ásia perfeita para o calor do meio-dia.'),
            ('14:00', 'Maharajah Jungle Trek', 'Trilha com ruínas místicas onde vivem tigres-de-bengala majestosos.'),
            ('14:45', 'Expedition Everest – Legend of the Forbidden Mountain', 'Montanha-russa eletrizante fugindo do Abominável Homem das Neves que anda para frente e para trás.'),
            ('15:45 - Show', 'Finding Nemo: The Big Blue... and Beyond!', 'Apresentação musical encantadora em teatro refrigerado.'),
            ('16:45', 'DINOSAUR', 'Viagem de jipe no tempo para resgatar um dinossauro antes da queda do meteoro.'),
            ('17:30', 'Meet Favorite Disney Pals at Adventurers Outpost', 'Encontro com Mickey e Minnie com trajes clássicos de exploradores do safári.'),
            ('18:15 - Jantar', 'Satu\'li Canteen', 'As melhores tigelas saudáveis de Orlando com carnes marinadas, batata-doce e molhos frescos.')
        ],
        'dining_tips': 'Satu\'li Canteen em Pandora é amplamente considerado o melhor restaurante rápido (Quick-Service) de todo o Walt Disney World.',
        'lightning_lane_tips': 'Flight of Passage é Single Pass. Expedition Everest e Kilimanjaro Safaris são escolhas ideais no Multi Pass.'
    },
    {
        'file': '05 - Universal Epic Universe - Plano de 1 Dia Passo a Passo.md',
        'title': 'Universal Epic Universe — Plano de 1 Dia Passo a Passo',
        'park': 'Universal Epic Universe',
        'operator': 'Universal Orlando Resort',
        'tags': ['universal', 'epicuniverse', 'nintendo', 'harrypotter', 'touringplan'],
        'rope_drop': 'Entre pelo portal Chronos e siga direto para How to Train Your Dragon ou Dark Universe antes da chegada das multidões da tarde.',
        'steps': [
            ('08:30 - Rope Drop', 'Meet Toothless (Banguela)', 'Encontro emocionante e fotos com o dragão Fúria da Noite na Ilha de Berk.'),
            ('09:00', 'Curse of the Werewolf', 'Montanha-russa giratória na floresta do Dark Universe fugindo de lobisomens.'),
            ('09:45', 'Monsters Unchained: The Frankenstein Experiment', 'A atração mais intensa e assustadora da Universal com os monstros clássicos soltos.'),
            ('10:45', 'Constellation Carousel', 'Carrossel astronômico deslumbrante no Celestial Park.'),
            ('11:30', 'Hiccup\'s Wing Gliders', 'Montanha-russa voadora por cima da lagoa de Berk.'),
            ('12:15 - Almoço', 'Mead Hall ou Spit Fyre Grill', 'Banquete viking com carnes assadas, pães artesanais e hidromel sem álcool.'),
            ('13:15', 'Fyre Drill & Dragon Racer\'s Rally', 'Batalha aquática de barcos e manobras aéreas com dragões.'),
            ('14:15', 'Mario Kart: Bowser\'s Challenge', 'Corrida em realidade aumentada no castelo do Bowser dentro do Super Nintendo World.'),
            ('15:30', 'Yoshi\'s Adventure', 'Passeio elevado contemplando todo o Reino dos Cogumelos e montanhas coloridas.'),
            ('16:30 - Jantar Antecipado', 'Pizza Moon', 'Pizzas artesanais e massas no Celestial Park com vista para os jardins cósmicos.'),
            ('17:45', 'Harry Potter and the Battle at the Ministry', 'A jornada monumental pelas lareiras mágicas de Paris de 1920 até o Ministério da Magia Britânico para o julgamento de Dolores Umbridge.'),
            ('19:15', 'Stardust Racers', 'Montanha-russa dupla de corrida cósmica com manobras invertidas de tirar o fôlego.'),
            ('20:30 - Show das Águas', 'Cosmos Fountain Show', 'Espetáculo de encerramento nas fontes centrais do Celestial Park com luzes, projeções e música orquestral.')
        ],
        'dining_tips': 'Experimente a Butterbeer nas novas receitas do Ministério da Magia e os doces temáticos do Toadstool Cafe no Super Nintendo World.',
        'lightning_lane_tips': 'Universal Express Pass é altamente recomendado para Epic Universe. O acesso a certas áreas pode exigir fila virtual nos dias de alta temporada.'
    },
    {
        'file': '06 - Universal Islands of Adventure - Plano de 1 Dia Passo a Passo.md',
        'title': 'Universal Islands of Adventure — Plano de 1 Dia Passo a Passo',
        'park': 'Universal\'s Islands of Adventure',
        'operator': 'Universal Orlando Resort',
        'tags': ['universal', 'islandsofadventure', 'jurassicworld', 'hulk', 'touringplan'],
        'rope_drop': 'Entre cedo e decida entre Hagrid\'s Motorbike ou VelociCoaster na primeira hora.',
        'steps': [
            ('08:30 - Rope Drop', 'Hagrid\'s Magical Creatures Motorbike Adventure', 'A montanha-russa de história mais aclamada da Flórida (7 lançamentos e queda livre de trilho).'),
            ('09:45', 'Harry Potter and the Forbidden Journey', 'Voo de vassoura pelo Castelo de Hogwarts enfrentando dementadores e dragões.'),
            ('10:45', 'Flight of the Hippogriff', 'Montanha-russa familiar perto da cabana de Hagrid.'),
            ('11:30 - Almoço', 'Thunder Falls Terrace', 'Costelas de churrasco, milho na espiga e frango assado assistindo à queda do Jurassic Park.'),
            ('12:30', 'Popeye & Bluto\'s Bilge-Rat Barges', 'O brinquedo que mais molha em todo o estado da Flórida (traga chinelo ou capa!).'),
            ('13:15', 'Dudley Do-Right\'s Ripsaw Falls', 'Tronco na água com queda íngreme e divertida.'),
            ('14:00', 'Jurassic Park River Adventure', 'Passeio de barco entre dinossauros que termina com fuga do T-Rex em queda de 26 metros.'),
            ('14:45', 'Skull Island: Reign of Kong', 'Expedição de caminhão 3D na ilha de King Kong.'),
            ('15:30', 'Jurassic World VelociCoaster', 'A melhor e mais veloz montanha-russa de lançamento de Orlando (112 km/h com manobra de gravidade zero sobre a água).'),
            ('16:45', 'The Cat in the Hat & Seuss Trolley', 'Passeios clássicos e coloridos para relaxar na área do Dr. Seuss.'),
            ('18:00 - Jantar', 'Confisco Grille', 'Restaurante temático em Port of Entry com culinária mediterrânea e asiática excepcional.'),
            ('19:15', 'The Amazing Adventures of Spider-Man', 'Simulador 3D inovador combatendo o Sexteto Sinistro em Nova York.'),
            ('20:00 - Gran Finale', 'The Incredible Hulk Coaster', 'Lançamento de tubo gama em alta velocidade com 7 inversões iluminadas à noite.')
        ],
        'dining_tips': 'No Three Broomsticks, peça o tradicional Great Feast se estiver em família de 4 pessoas.',
        'lightning_lane_tips': 'Universal Express Pass não inclui Hagrid\'s Motorbike. Portanto, faça Hagrid\'s logo na abertura ou na última hora antes do fechamento.'
    },
    {
        'file': '07 - Universal Studios Florida - Plano de 1 Dia Passo a Passo.md',
        'title': 'Universal Studios Florida — Plano de 1 Dia Passo a Passo',
        'park': 'Universal Studios Florida',
        'operator': 'Universal Orlando Resort',
        'tags': ['universal', 'universalstudios', 'mummy', 'gringotts', 'touringplan'],
        'rope_drop': 'Caminhe direto para o Beco Diagonal e entre em Harry Potter and the Escape from Gringotts.',
        'steps': [
            ('08:30 - Rope Drop', 'Harry Potter and the Escape from Gringotts', 'Aventura subterrânea nos cofres do banco de Gringotts enfrentando Voldemort e Belatriz.'),
            ('09:45', 'Exploração de Diagon Alley & Ollivanders', 'Passeio pelas lojas do Beco Diagonal, apresentação de varinhas em Olivaras e fotos com o dragão que cospe fogo real.'),
            ('10:45', 'Revenge of the Mummy', 'Montanha-russa no escuro espetacular com efeitos de fogo e múmias zumbis.'),
            ('11:30', 'TRANSFORMERS: The Ride-3D', 'Batalha épica de robôs gigantes salvando a AllSpark em Nova York.'),
            ('12:15 - Almoço', 'The Leaky Cauldron (Caldeirão Furado)', 'Culinária britânica autêntica com Fish & Chips, torta de pastor e cerveja amanteigada gelada.'),
            ('13:15', 'Despicable Me Minion Mayhem', 'Simulador divertido se transformando em Minion na casa de Gru.'),
            ('14:00', 'Hollywood Rip Ride Rockit', 'Montanha-russa com subida em 90 graus onde você escolhe a música que toca no seu assento.'),
            ('14:45', 'MEN IN BLACK Alien Attack', 'Competição de tiros a laser eliminando alienígenas em Nova York.'),
            ('15:45', 'The Simpsons Ride', 'Simulador de parque de diversões caótico em Springfield.'),
            ('16:30', 'DreamWorks Land', 'Área temática com Shrek, Kung Fu Panda e Trolls, ideal para fotos e lanches temáticos.'),
            ('17:30', 'E.T. Adventure', 'O brinquedo clássico e nostálgico voando de bicicleta pelas estrelas para salvar a Green Planet.'),
            ('18:30 - Jantar', 'Fast Food Boulevard (Springfield)', 'Hambúrguer Krusty, costelas do Cletus e cerveja Duff oficial.'),
            ('20:00 - Show Noturno', 'CinesSational: A Symphonic Spectacular', 'Espetáculo na lagoa central com drones, águas dançantes e trilhas sonoras icônicas do cinema.')
        ],
        'dining_tips': 'Não deixe de experimentar os Donuts rosas gigantes do Lard Lad Donuts em Springfield.',
        'lightning_lane_tips': 'Universal Express Pass funciona em todas as atrações principais deste parque.'
    },
    {
        'file': '08 - Universal Orlando - 1 Dia Park-to-Park (2 Parques em 1 Dia).md',
        'title': 'Universal Orlando — 1 Dia Park-to-Park (2 Parques no Mesmo Dia)',
        'park': 'Universal Studios & Islands of Adventure',
        'operator': 'Universal Orlando Resort',
        'tags': ['universal', 'parktopark', 'hogwartsexpress', 'touringplan'],
        'rope_drop': 'Comece no Islands of Adventure na abertura, cruze de Hogwarts Express no almoço e termine no Universal Studios Florida.',
        'steps': [
            ('08:00 - Abertura IOA', 'The Incredible Hulk Coaster', 'Sem filas nos primeiros 20 minutos de abertura.'),
            ('08:45', 'The Amazing Adventures of Spider-Man', 'Simulador 3D em Marvel Island.'),
            ('09:30', 'Jurassic World VelociCoaster', 'Aproveite a fila da manhã antes do pico das 11h.'),
            ('10:30', 'Harry Potter and the Forbidden Journey', 'Visita ao Castelo de Hogwarts em Hogsmeade.'),
            ('11:15', 'Hagrid\'s Magical Creatures Motorbike Adventure', 'Use a fila de Single Rider se estiver muito longa para economizar até 45 minutos.'),
            ('12:15 - Almoço', 'The Three Broomsticks', 'Almoço mágico na taverna de Hogsmeade.'),
            ('13:00 - Embarque', 'Hogwarts Express (Estação Hogsmeade para King\'s Cross)', 'Viagem mágica de trem entre os dois parques (exige ingresso Park-to-Park).'),
            ('13:45 - Chegada USF', 'Harry Potter and the Escape from Gringotts', 'Aventura no Beco Diagonal.'),
            ('14:45', 'Revenge of the Mummy', 'Montanha-russa interna da Múmia.'),
            ('15:30', 'TRANSFORMERS: The Ride-3D', 'Simulador 3D dos Autobots.'),
            ('16:15', 'MEN IN BLACK Alien Attack', 'Tiro aos aliens em World Expo.'),
            ('17:15', 'Despicable Me Minion Mayhem', 'Simulador dos Minions.'),
            ('18:30 - Jantar', 'Finnegan\'s Bar & Grill ou CityWalk', 'Jantar irlandês com música ao vivo ou restaurantes no calçadão CityWalk.'),
            ('20:00 - Show Noturno', 'CinesSational na Lagoa', 'Encerramento com fontes e projeções cinematográficas.')
        ],
        'dining_tips': 'Comer um almoço cedo às 11h30 garante que você pegue o Hogwarts Express com menos de 15 minutos de fila.',
        'lightning_lane_tips': 'O passe Universal Express Unlimited é praticamente indispensável para fazer ambos os parques em um único dia com tranquilidade.'
    },
    {
        'file': '09 - Universal Orlando - 2 Dias Park-to-Park (Roteiro Completo).md',
        'title': 'Universal Orlando — 2 Dias Park-to-Park (Roteiro Completo)',
        'park': 'Universal Studios & Islands of Adventure',
        'operator': 'Universal Orlando Resort',
        'tags': ['universal', 'parktopark', '2dias', 'touringplan'],
        'rope_drop': 'Dia 1 focado em Universal Studios Florida + tarde no IOA. Dia 2 focado em Islands of Adventure + tarde no USF.',
        'steps': [
            ('DIA 1 - Manhã USF', 'Despicable Me, Transformers e Revenge of the Mummy', 'Faça as três grandes atrações da entrada em sequência na abertura.'),
            ('DIA 1 - Almoço USF', 'The Leaky Cauldron no Beco Diagonal', 'Pausa imersiva com almoço britânico e exploração de lojas mágicas.'),
            ('DIA 1 - Tarde', 'Hogwarts Express para Islands of Adventure', 'Aproveite Jurassic World VelociCoaster, Jurassic Park River Adventure e Spider-Man à tarde.'),
            ('DIA 1 - Noite', 'Jantar no Cowfish Sushi Burger Bar (CityWalk)', 'Combinação criativa de hambúrgueres gourmet e sushi fresco.'),
            ('DIA 2 - Manhã IOA', 'Rope Drop Hagrid\'s Motorbike & Forbidden Journey', 'Dedicação exclusiva ao mundo de Harry Potter logo cedo.'),
            ('DIA 2 - Almoço IOA', 'Thunder Falls Terrace', 'Almoço com vista para a queda dos dinossauros.'),
            ('DIA 2 - Tarde', 'Popeye Barges & Ripsaw Falls (Água) + Hulk Coaster', 'Aproveite os brinquedos de água no pico do calor e o Hulk no fim do dia.'),
            ('DIA 2 - Fim de Tarde', 'Hogwarts Express para Universal Studios', 'Trajeto reverso de trem com cenas e história inédita na janela da cabine!'),
            ('DIA 2 - Noite USF', 'Escape from Gringotts e show CinesSational', 'Despedida épica dos dois parques com show de luzes e fogos na lagoa.')
        ],
        'dining_tips': 'No CityWalk, reserve restaurantes populares com 1 a 2 semanas de antecedência (Antojitos, Toothsome Chocolate Emporium, Cowfish).',
        'lightning_lane_tips': 'Hospedes de hotéis Premier da Universal (Portofino Bay, Hard Rock, Royal Pacific) recebem Express Pass Unlimited gratuito para ambos os dias.'
    },
    {
        'file': '10 - SeaWorld Orlando - Plano de 1 Dia Passo a Passo.md',
        'title': 'SeaWorld Orlando — Plano de 1 Dia Passo a Passo',
        'park': 'SeaWorld Orlando',
        'operator': 'SeaWorld Parks',
        'tags': ['seaworld', 'montanharussa', 'animais', 'touringplan'],
        'rope_drop': 'Chegue na abertura e faça as montanhas-russas radicais da entrada (Manta e Pipeline) antes dos horários dos shows da tarde.',
        'steps': [
            ('09:00 - Rope Drop', 'Pipeline: The Surf Coaster', 'A única montanha-russa do mundo onde você vai em pé em cima de uma prancha de surfe saltando nas ondas.'),
            ('09:45', 'Manta', 'Montanha-russa deitada de bruços voando como uma arraia gigante com rasante sobre a água.'),
            ('10:30', 'Kraken', 'Montanha-russa sem piso com 7 inversões monumentais.'),
            ('11:15', 'Journey to Atlantis', 'Mistura de montanha-russa com passeio de barco aquático.'),
            ('12:00 - Show', 'Orca Encounter', 'Apresentação educacional imponente sobre as baleias orcas e preservação dos oceanos.'),
            ('12:45 - Almoço', 'Expedition Café ou Voyagers Smokehouse', 'Churrasco defumado com frango assado e brisket em porções generosas.'),
            ('13:45', 'Penguin Trek', 'Nova montanha-russa familiar na neve que termina dentro de um habitat real com centenas de pinguins ao vivo.'),
            ('14:45 - Show', 'Dolphin Adventures', 'Show acrobático com golfinhos e treinadores.'),
            ('15:30', 'Mako', 'A maior, mais rápida e mais alta hiper-montanha-russa de Orlando (61 metros de altura e 117 km/h de velocidade máxima com gravidade zero constante).'),
            ('16:30', 'Ice Breaker', 'Montanha-russa com quatro lançamentos para frente e para trás e rampa quase vertical de 93 graus.'),
            ('17:15 - Show', 'Flippers, Facts and Fun: The Sea Lion Experience', 'Apresentação bem-humorada com leões-marinhos e lontras.'),
            ('18:00', 'Pacific Point Preserve & Shark Encounter', 'Alimente leões-marinhos com peixes frescos e atravesse o túnel submarino de tubarões.'),
            ('19:00 - Jantar', 'Sharks Underwater Grill', 'Restaurante elegante com mesas encostadas no vidro gigante do aquário de tubarões.')
        ],
        'dining_tips': 'O pacote All-Day Dining Deal do SeaWorld permite comer 1 prato principal + 1 acompanhamento/sobremesa + 1 bebida a cada 90 minutos durante todo o dia.',
        'lightning_lane_tips': 'O Quick Queue do SeaWorld é uma excelente opção em feriados e finais de semana ensolarados.'
    }
]

for p in plans:
    steps_table = []
    for hor, att, desc in p['steps']:
        steps_table.append(f'| **{hor}** | **{att}** | {desc} |')
    table_md = '\n'.join(steps_table)
    tags_str = ', '.join(p['tags'])

    content = f'''---
title: {p['title']}
aliases: [{p['park']}, Roteiro {p['park']}]
tags: [{tags_str}]
---

# 🎢 {p['title']}

> [!abstract] Informações do Parque
> * **Complexo:** {p['operator']}
> * **Estratégia de Rope Drop:** {p['rope_drop']}
> * **Consulte também:** [[01 - Calendário de Lotação 2027/00 - Guia Metodológico - O que é o Calendário de Lotação|Calendário de Lotação]] • [[03 - Guias JumpStart (Estratégias de Parques)/01 - Guia JumpStart - Walt Disney World Resort|Guias JumpStart]]

---

## 📋 Itinerário Passo a Passo ({len(p['steps'])} Etapas)

| Horário Estimado | Atração / Parada | Estratégia e Dicas de Aproveitamento |
| :---: | :--- | :--- |
{table_md}

---

## 🍽️ Dicas de Alimentação
{p['dining_tips']}

## ⚡ Estratégia de Filas Rápidas (Fura-Fila)
{p['lightning_lane_tips']}

---
> [!tip] Regra Biomecânica
> Lembre-se de beber água regularmente e intercalar atrações ao ar livre com atrações climatizadas nos horários de pico solar (entre 12h e 15h).
'''

    full_path = os.path.join(tp_dir, p['file'])
    with open(full_path, 'w', encoding='utf-8') as out_f:
        out_f.write(content)

print(f'All {len(plans)} Touring Plans generated successfully in Vault!')
