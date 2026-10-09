/**
 * Catálogo de Roteiros Passo a Passo (Touring Plans)
 * Traduzidos e adaptados para o Português do Brasil com base nos guias Undercover Tourist.
 */

export interface TouringPlanStep {
  step: number;
  title: string;
  category: 'rope_drop' | 'morning' | 'lunch' | 'afternoon' | 'evening' | 'show' | 'night_show';
  description: string;
  tip?: string;
  badge?: string;
}

export interface TouringPlan {
  id: string;
  parkId: string;
  parkName: string;
  operator: 'disney' | 'universal' | 'seaworld';
  title: string;
  subtitle: string;
  targetAudience: string;
  estimatedDuration: string;
  ropeDropArrival: string;
  generalStrategy: string;
  diningRecommendations: {
    quickService: string[];
    tableService: string[];
    snacks: string[];
  };
  nightShow: {
    name: string;
    time: string;
    tip: string;
  };
  steps: TouringPlanStep[];
}

export const TOURING_PLANS_CATALOG: Record<string, TouringPlan> = {
  'magic-kingdom': {
    id: 'magic-kingdom',
    parkId: 'magic-kingdom',
    parkName: 'Magic Kingdom',
    operator: 'disney',
    title: 'Magic Kingdom — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro otimizado para o parque mais icônico do mundo com foco em atrações de alta demanda',
    targetAudience: 'Famílias, crianças, adolescentes e fãs da Disney',
    estimatedDuration: '12 a 14 horas (dia completo)',
    ropeDropArrival: 'Chegue às catracas 45 a 60 minutos antes da abertura oficial dos portões.',
    generalStrategy: 'Faça as atrações concorridas de Frontierland e Adventureland ou Fantasyland logo cedo. Deixe shows com ar-condicionado para o calor da tarde (13h-16h) e aproveite TRON e Seven Dwarfs Mine Train no fechamento ou via fila virtual/Lightning Lane.',
    diningRecommendations: {
      quickService: ['Columbia Harbour House (Liberty Square - frutos do mar e opções leves)', 'Pecos Bill Tall Tale Inn (Frontierland - comida mexicana e porções fartas)', 'Cosmic Ray\'s Starlight Café (Tomorrowland - clássicos e show animatrônico)'],
      tableService: ['Be Our Guest Restaurant (Fantasyland - castelo da Fera)', 'Cinderella\'s Royal Table (refeição com princesas dentro do castelo)', 'Skipper Canteen (Adventureland - culinária exótica saborosa)'],
      snacks: ['Dole Whip no Aloha Isle (Adventureland)', 'Cheshire Cat Tail no Cheshire Café', 'Cinnamon Roll no Gaston\'s Tavern']
    },
    nightShow: {
      name: 'Happily Ever After',
      time: 'Geralmente às 20h30 ou 21h00',
      tip: 'Posicione-se na Main Street U.S.A. cerca de 45-60 minutos antes. A melhor visão das projeções é entre a confeitaria e a estátua Partners.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Frontierland & Tiana\'s Bayou Adventure',
        category: 'rope_drop',
        description: 'Vá imediatamente para a Frontierland na abertura dos portões para experimentar a emocionante Tiana\'s Bayou Adventure (se operando em fila convencional ou fila virtual do app) e emende com Big Thunder Mountain Railroad.',
        tip: 'Big Thunder costuma ter menos de 15 minutos nos primeiros 30 minutos de abertura!',
        badge: 'Essencial'
      },
      {
        step: 2,
        title: 'Adventureland Clássica',
        category: 'morning',
        description: 'Cruze para a Adventureland vizinha: Pirates of the Caribbean e Jungle Cruise.',
        tip: 'Se a fila do Jungle Cruise já passar de 45 minutos, agende Lightning Lane ou volte durante a tarde/noite.',
        badge: 'Imperdível'
      },
      {
        step: 3,
        title: 'Haunted Mansion em Liberty Square',
        category: 'morning',
        description: 'Caminhe até a Mansão Assombrada. O fluxo de pedestres ainda é moderado antes das 11h.',
        tip: 'Aproveite para usar os banheiros temáticos de Tangled (Rapunzel) nas proximidades.'
      },
      {
        step: 4,
        title: 'Fantasyland dos Clássicos',
        category: 'morning',
        description: 'Faça Peter Pan\'s Flight, "it\'s a small world" e Under the Sea ~ Journey of the Little Mermaid.',
        tip: 'Peter Pan acumula grandes filas rapidamente; priorize-o antes de "it\'s a small world".'
      },
      {
        step: 5,
        title: 'Almoço Estratégico (Quick-Service)',
        category: 'lunch',
        description: 'Faça Mobile Order com antecedência no Columbia Harbour House ou Pecos Bill entre 11h30 e 12h15 para fugir do pico das 12h30-13h30.',
        tip: 'O segundo andar do Columbia Harbour House é silencioso, climatizado e perfeito para recarregar as energias.'
      },
      {
        step: 6,
        title: 'Parada Festival of Fantasy & Shows Climatizados',
        category: 'afternoon',
        description: 'Assista à parada Festival of Fantasy às 14h/15h. Em seguida, aproveite atrações cobertas e com ar-condicionado durante o calor: Mickey\'s PhilharMagic, Walt Disney\'s Enchanted Tiki Room e Country Bear Musical Jamboree.',
        tip: 'Excelente momento para comer um Dole Whip de abacaxi gelado.'
      },
      {
        step: 7,
        title: 'Tomorrowland: Espaço e Futuro',
        category: 'evening',
        description: 'Space Mountain, Buzz Lightyear\'s Space Ranger Spin e relaxe no Tomorrowland Transit Authority PeopleMover no fim de tarde.',
        tip: 'O PeopleMover oferece uma vista panorâmica incrível do parque ao pôr do sol sem filas longas.'
      },
      {
        step: 8,
        title: 'TRON Lightcycle / Run & Seven Dwarfs Mine Train',
        category: 'evening',
        description: 'Acesse TRON via fila virtual (se chamada) ou Lightning Lane Single Pass. Visite Seven Dwarfs Mine Train na última hora do parque antes do show de fogos ou logo após.',
        badge: 'Radical'
      },
      {
        step: 9,
        title: 'Happily Ever After & Encerramento Encantado',
        category: 'night_show',
        description: 'Encontre seu lugar na Main Street U.S.A. para o espetáculo de fogos, músicas e projeções. Após os fogos, aproveite que as filas despencam para repetir atrações favoritas até o fechamento!',
        tip: 'As lojas da Main Street permanecem abertas até 1 hora após o fechamento oficial do parque.'
      }
    ]
  },

  'epcot': {
    id: 'epcot',
    parkId: 'epcot',
    parkName: 'EPCOT',
    operator: 'disney',
    title: 'EPCOT — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro perfeito integrando tecnologia, World Celebration e os 11 pavilhões do World Showcase',
    targetAudience: 'Adultos, famílias, fãs de gastronomia e montanhas-russas de ponta',
    estimatedDuration: '10 a 12 horas',
    ropeDropArrival: 'Chegue 45 minutos antes da abertura. Entre preferencialmente pela entrada principal (ou International Gateway se vier via Skyliner).',
    generalStrategy: 'Conquiste a Fila Virtual de Guardians of the Galaxy: Cosmic Rewind no app MDE pontualmente às 07h00. No Rope Drop, faça Remy\'s Ratatouille Adventure ou Test Track / Soarin\'. Dedique a tarde aos pavilhões gastronômicos do World Showcase.',
    diningRecommendations: {
      quickService: ['Sunshine Seasons (The Land - variedade imensa saudável)', 'Regal Eagle Smokehouse (Pavilhão Americano - churrasco BBQ texano)', 'Les Halles Boulangerie-Patisserie (Pavilhão França - croissants e quiches)'],
      tableService: ['Space 220 (World Discovery - refeição simulando estar no espaço)', 'Via Napoli (Pavilhão Itália - melhores pizzas autênticas)', 'Le Cellier Steakhouse (Pavilhão Canadá - cortes nobres e sopa de cheddar)'],
      snacks: ['Kringla Bakeri Og Kafe (Escola Bread na Noruega)', 'Caramelkuche (Pavilhão Alemanha - pipoca de caramelo artesanal)']
    },
    nightShow: {
      name: 'Luminous The Symphony of Us',
      time: 'Geralmente às 21h00',
      tip: 'Qualquer ponto ao redor da lagoa do World Showcase oferece boa visão. Fique longe das árvores e do lado favorável ao vento para não pegar fumaça.'
    },
    steps: [
      {
        step: 1,
        title: '07h00 da Manhã: Fila Virtual Cosmic Rewind',
        category: 'rope_drop',
        description: 'No aplicativo My Disney Experience, clique em "Join Virtual Queue" exatamente às 07:00:00 para garantir seu grupo de embarque em Guardians of the Galaxy.',
        badge: 'Crítico'
      },
      {
        step: 2,
        title: 'Rope Drop: Remy\'s Ratatouille Adventure ou Frozen Ever After',
        category: 'rope_drop',
        description: 'Se entrar pelo Skyliner, corra direto para Remy no Pavilhão da França. Se entrar pela frente, vá até Frozen Ever After na Noruega ou Soarin\' Around the World.',
        tip: 'Remy e Frozen são as filas mais extensas ao longo do dia com esperas de 60-90min.'
      },
      {
        step: 3,
        title: 'World Nature: The Land & The Seas',
        category: 'morning',
        description: 'Vá ao pavilhão The Land para curtir Soarin\' Around the World e Living with the Land. Depois, The Seas with Nemo & Friends e Turtle Talk with Crush.',
        tip: 'Living with the Land é um passeio de barco relaxante pelas estufas hidropônicas do EPCOT.'
      },
      {
        step: 4,
        title: 'World Celebration & Spaceship Earth',
        category: 'morning',
        description: 'Visite a famosa "bola do EPCOT" (Spaceship Earth) e a área de Journey of Water, Inspired by Moana.',
        tip: 'A trilha aquática da Moana é linda e refrescante nos dias quentes de Orlando.'
      },
      {
        step: 5,
        title: 'Guardiões da Galáxia: Cosmic Rewind',
        category: 'afternoon',
        description: 'Quando o seu grupo de embarque for chamado, apresente-se na atração mais espetacular de Orlando. A montanha-russa com lançamento reverso e trilha sonora dos anos 70/80 é imperdível.',
        badge: 'Top 1 de Orlando'
      },
      {
        step: 6,
        title: 'Exploração do World Showcase (Pavilhões Mundiais)',
        category: 'afternoon',
        description: 'Passeie pelos 11 países: México (Gran Fiesta Tour), Noruega, China, Alemanha, Itália, EUA, Japão, Marrocos, França e Reino Unido. Aproveite os quiosques de festivais.',
        tip: 'Experimente pequenas porções em múltiplos países em vez de fazer apenas uma grande refeição.'
      },
      {
        step: 7,
        title: 'Luminous The Symphony of Us',
        category: 'night_show',
        description: 'Encontre um bom ponto ao redor da lagoa do World Showcase às 20h20 para o emocionante show de fogos, fontes dançantes e trilha sonora que celebra a conexão humana.',
        badge: 'Show Noturno'
      }
    ]
  },

  'hollywood-studios': {
    id: 'hollywood-studios',
    parkId: 'hollywood-studios',
    parkName: "Disney's Hollywood Studios",
    operator: 'disney',
    title: "Disney's Hollywood Studios — Plano Passo a Passo de 1 Dia",
    subtitle: 'Roteiro de alta adrenalina focado em Star Wars: Galaxy\'s Edge, Toy Story Land e Tower of Terror',
    targetAudience: 'Fãs de Star Wars, amantes de simuladores e montanhas-russas emocionantes',
    estimatedDuration: '10 a 12 horas',
    ropeDropArrival: 'Chegue 60 minutos antes da abertura. Este é o parque mais disputado no rope drop!',
    generalStrategy: 'Decida no rope drop entre Star Wars: Rise of the Resistance ou Slinky Dog Dash. Assista aos shows épicos (Indiana Jones e Beauty and the Beast) no início da tarde e garanta lugar no Fantasmic!.',
    diningRecommendations: {
      quickService: ['Woody\'s Lunch Box (Toy Story Land - Totchos e sanduíches gourmet)', 'Ronto Roasters (Galaxy\'s Edge - Ronto wraps suculentos)', 'Docking Bay 7 Food and Cargo (comida temática e saudável)'],
      tableService: ['50\'s Prime Time Café (comida caseira americana e garçons divertidos)', 'Sci-Fi Dine-In Theater (refeição em carros conversíveis estilo drive-in)', 'The Hollywood Brown Derby (clássico e sofisticado)'],
      snacks: ['Blue/Green Milk no Milk Stand de Batuu', 'Carrot Cake Cookie no Trolley Car Café (Starbucks)']
    },
    nightShow: {
      name: 'Fantasmic!',
      time: 'Geralmente às 20h30 ou 21h30 (em dias de alta lotação há duas sessões)',
      tip: 'Chegue ao anfiteatro 45-60 minutos antes do show. O setor central oferece a melhor visão das projeções de água.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Rise of the Resistance ou Slinky Dog Dash',
        category: 'rope_drop',
        description: 'Caminhe rápido diretamente para Star Wars: Rise of the Resistance. Se a atração estiver indisponível temporariamente na abertura (comum), redirecione instantaneamente para Slinky Dog Dash em Toy Story Land.',
        badge: 'Rope Drop Épico'
      },
      {
        step: 2,
        title: 'Star Wars: Galaxy\'s Edge & Millennium Falcon',
        category: 'morning',
        description: 'Pilote a lendária espaçonave em Millennium Falcon: Smugglers Run e explore as lojas temáticas de Batuu.',
        tip: 'Se for em grupo de adultos, a fila Single Rider da Millennium Falcon poupa até 40 minutos!'
      },
      {
        step: 3,
        title: 'Toy Story Land: Toy Story Mania! & Alien Swirling Saucers',
        category: 'morning',
        description: 'Visite Toy Story Mania! (jogo 3D competitivo divertidíssimo) e almoce em seguida no Woody\'s Lunch Box.',
        tip: 'Peça os famosos Totchos com antecedência via Mobile Order.'
      },
      {
        step: 4,
        title: 'Mickey & Minnie\'s Runaway Railway',
        category: 'afternoon',
        description: 'Embarque no Chinese Theatre para o passeio inovador sem trilhos por dentro dos desenhos do Mickey Mouse.',
        badge: 'Tecnologia Incrível'
      },
      {
        step: 5,
        title: 'Shows da Tarde Climatizados: Indiana Jones & Beauty and the Beast',
        category: 'show',
        description: 'Assista a Indiana Jones Epic Stunt Spectacular e Beauty and the Beast - Live on Stage. Faça uma pausa climatizada.',
        tip: 'Evite filas externas durante o sol forte das 13h30 às 15h30.'
      },
      {
        step: 6,
        title: 'Sunset Boulevard: Tower of Terror & Rock \'n\' Roller Coaster',
        category: 'evening',
        description: 'Enfrente The Twilight Zone Tower of Terror e Rock \'n\' Roller Coaster Starring Aerosmith no fim da tarde.',
        tip: 'As filas de Sunset Boulevard costumam cair após as 18h quando famílias começam a se deslocar para o Fantasmic!.'
      },
      {
        step: 7,
        title: 'Fantasmic! — O Espetáculo da Noite',
        category: 'night_show',
        description: 'Entre no Hollywood Hills Amphitheater para vivenciar a batalha de Mickey contra os vilões da Disney com água, fogo, laser e fogos.',
        badge: 'Imperdível'
      }
    ]
  },

  'animal-kingdom': {
    id: 'animal-kingdom',
    parkId: 'animal-kingdom',
    parkName: "Disney's Animal Kingdom",
    operator: 'disney',
    title: "Disney's Animal Kingdom — Plano Passo a Passo de 1 Dia",
    subtitle: 'Roteiro de imersão na natureza, Pandora - The World of Avatar e expedições pela África e Ásia',
    targetAudience: 'Famílias com crianças, amantes de animais, fotografia e atrações cinematográficas',
    estimatedDuration: '8 a 10 horas (parque abre e fecha mais cedo que os outros)',
    ropeDropArrival: 'Chegue 45 a 60 minutos antes da abertura oficial. O parque costuma abrir portões mais cedo.',
    generalStrategy: 'Faça Avatar Flight of Passage imediatamente no Rope Drop. Faça o Kilimanjaro Safaris no início da manhã quando os animais estão mais ativos e acordados.',
    diningRecommendations: {
      quickService: ['Satu\'li Canteen (Pandora - bowls saudáveis e deliciosos)', 'Flame Tree Barbecue (Discovery Island - costelinha e vista panorâmica)', 'Yak & Yeti Local Food Cafes (Ásia - arroz frito e pratos orientais)'],
      tableService: ['Tiffins Restaurant (Discovery Island - culinária de autor premiada)', 'Yak & Yeti Restaurant (Ásia - ambiente temático e comida asiática completa)', 'Tusker House (África - buffet com personagens vestidos de safári)'],
      snacks: ['Pongu Lumpia em Pongu Pongu (Pandora)', 'Dole Whip com rum ou puro no Tamu Tamu Refreshments']
    },
    nightShow: {
      name: 'Tree of Life Awakenings',
      time: 'A partir do anoitecer a cada 10-15 minutos',
      tip: 'Projeções curtas e poéticas na icônica Árvore da Vida. Ótimo para assistir enquanto caminha em direção à saída do parque.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Avatar Flight of Passage',
        category: 'rope_drop',
        description: 'Vá a passos rápidos para Pandora e entre na fila de Flight of Passage. O voo nas costas de um Banshee é uma das atrações mais aclamadas da Disney.',
        badge: 'Atração Estrela'
      },
      {
        step: 2,
        title: 'Na\'vi River Journey',
        category: 'morning',
        description: 'Emende logo em seguida com Na\'vi River Journey, o relaxante passeio de barco bioluminescente na floresta de Pandora.',
        tip: 'Aproveite enquanto as pessoas ainda estão presas na fila de Flight of Passage.'
      },
      {
        step: 3,
        title: 'Kilimanjaro Safaris na África',
        category: 'morning',
        description: 'Caminhe para a África e embarque no safári real pela savana de Harambe. Os animais estão no momento mais ativo do dia.',
        tip: 'Tenha a câmera em mãos; leões, girafas e elefantes costumam cruzar perto do caminhão!'
      },
      {
        step: 4,
        title: 'Festival of the Lion King',
        category: 'show',
        description: 'Assista a uma das primeiras apresentações deste espetáculo estilo Broadway em teatro climatizado com acrobatas e músicas ao vivo.',
        badge: 'Melhor Show'
      },
      {
        step: 5,
        title: 'Almoço no Satu\'li Canteen (Pandora)',
        category: 'lunch',
        description: 'Volte a Pandora para saborear os bowls customizados (frango grelhado, carne ou tofu com bases de grãos e molhos frescos).',
        tip: 'Faça Mobile Order 20 minutos antes de se dirigir ao restaurante.'
      },
      {
        step: 6,
        title: 'Ásia: Expedition Everest & Kali River Rapids',
        category: 'afternoon',
        description: 'Enfrente o Yeti na montanha-russa Expedition Everest (use a fila Single Rider para ir várias vezes sem esperar!). Em seguida, refresque-se nas correntezas de Kali River Rapids.',
        tip: 'Kali River Rapids molha de verdade! Guarde celulares e documentos nos armários gratuitos.'
      },
      {
        step: 7,
        title: 'Finding Nemo: The Big Blue... and Beyond!',
        category: 'afternoon',
        description: 'Espetáculo musical maravilhoso com marionetes gigantes e músicas de alta qualidade.',
        tip: 'Excelente parada climatizada durante o pico de calor das 14h-15h.'
      },
      {
        step: 8,
        title: 'Gorilla Falls & Maharajah Jungle Trek',
        category: 'evening',
        description: 'Trilhas a pé para observar gorilas, tigres asiáticos e morcegos gigantes sem pressa.',
        tip: 'Ao entardecer, pare diante da Tree of Life para fotos incríveis sem aglomeração.'
      }
    ]
  },

  'epic-universe': {
    id: 'epic-universe',
    parkId: 'epic-universe',
    parkName: 'Universal Epic Universe',
    operator: 'universal',
    title: 'Universal Epic Universe — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro exclusivo para o mais novo e inovador parque temático de Orlando com 5 mundos interconectados',
    targetAudience: 'Todos os públicos: fãs de Nintendo, Harry Potter, Monstros Clássicos e montanhas-russas revolucionárias',
    estimatedDuration: '12 a 14 horas',
    ropeDropArrival: 'Chegue 60 a 75 minutos antes da abertura. Os portões do Chronos abrem cedo para controle de fluxo.',
    generalStrategy: 'Entre pelo Celestial Park e atravesse imediatamente para Super Nintendo World ou Dark Universe antes que as filas se formem. Guarde Stardust Racers para o fim de tarde/noite com as luzes acesas.',
    diningRecommendations: {
      quickService: ['Toadstool Cafe (Super Nintendo World - pratos lúdicos em formato de cogumelos)', 'Das Stakehaus (Dark Universe - carnes e ambiente gótico)', 'Mead Hall (Isle of Berk - banquete viking com carnes defumadas)'],
      tableService: ['Atlantic Restaurant (Celestial Park - frutos do mar e vista da lagoa)', 'The Blue Dragon Pan-Asian Restaurant (culinária asiática espetacular)', 'The Oak & Star Tavern (churrasco e cervejas artesanais)'],
      snacks: ['Butterbeer versão Ministry of Magic', 'Pipoca temática de Mario & Yoshi', 'Doces dos Monstros Clássicos']
    },
    nightShow: {
      name: 'Celestial Light & Water Spectacular',
      time: 'Geralmente às 21h30 na grande lagoa central',
      tip: 'Posicione-se em frente às fontes centrais do Celestial Park com visão desobstruída dos portais cósmicos iluminados.'
    },
    steps: [
      {
        step: 1,
        title: 'Entrada pelo Portal Cósmico do Chronos',
        category: 'rope_drop',
        description: 'Cruze os portões dourados de Celestial Park e admire a arquitetura celestial antes de rumar ao primeiro mundo.',
        badge: 'Rope Drop Histórico'
      },
      {
        step: 2,
        title: 'Super Nintendo World: Bowser\'s Challenge & Donkey Kong Mine-Cart',
        category: 'rope_drop',
        description: 'Atravesse o cano verde para Super Nintendo World. Faça Mario Kart: Bowser\'s Challenge com óculos de realidade aumentada e Mine-Cart Madness na área de Donkey Kong Country.',
        badge: 'Mais Concorrido'
      },
      {
        step: 3,
        title: 'Dark Universe: Monsters Unchained & Werewolf',
        category: 'morning',
        description: 'Cruze o portal gótico de Dark Universe. Encare Monsters Unchained: The Frankenstein Experiment (o simulador robótico mais assustador da história da Universal) e a montanha-russa Curse of the Werewolf.',
        tip: 'A fila de Frankenstein é uma das mais detalhadas de qualquer parque temático.'
      },
      {
        step: 4,
        title: 'Almoço no Toadstool Cafe ou Das Stakehaus',
        category: 'lunch',
        description: 'Almoço temático imersivo. Agende o horário de retorno no aplicativo oficial da Universal logo no início da manhã.',
        tip: 'Reserve com antecedência via app para evitar esgotamento de horários.'
      },
      {
        step: 5,
        title: 'The Wizarding World of Harry Potter: Ministry of Magic',
        category: 'afternoon',
        description: 'Acesse a Paris dos anos 1920 (Animais Fantásticos) e pegue a rede de Flú para o Ministério da Magia britânico. Embarque na atração principal Harry Potter and the Battle at the Ministry e assista ao show de circo mágico Le Cirque Arcanus.',
        badge: 'Imperdível'
      },
      {
        step: 6,
        title: 'How to Train Your Dragon: Isle of Berk',
        category: 'afternoon',
        description: 'Visite a vila viking com dragões voadores. Faça Hiccup\'s Winged Gliders, Dragon Racer\'s Rally e tire fotos no Meet Toothless com o Banguela animatrônico ultra-realista.',
        tip: 'A atração aquática Fyre Drill é perfeita para as tardes quentes da Flórida.'
      },
      {
        step: 7,
        title: 'Celestial Park: Stardust Racers ao Entardecer',
        category: 'evening',
        description: 'Encare Stardust Racers, a montanha-russa de duelo de lançamento duplo com iluminação estelar noturna impressionante que atinge 100 km/h sem freios intermediários.',
        badge: 'Radical Extremo'
      },
      {
        step: 8,
        title: 'Show Noturno Celestial & Exploração dos Portais Iluminados',
        category: 'night_show',
        description: 'Encerre o dia assistindo ao espetáculo de águas dançantes e projeções no lago celestial enquanto cada portal de mundo brilha com cores cósmicas.',
        tip: 'Aproveite os últimos minutos para tirar fotos no portal do Chronos com iluminação noturna.'
      }
    ]
  },

  'islands-of-adventure': {
    id: 'islands-of-adventure',
    parkId: 'islands-of-adventure',
    parkName: 'Universal Islands of Adventure',
    operator: 'universal',
    title: 'Universal Islands of Adventure — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro de adrenalina pura com Hagrid\'s Motorbike, VelociCoaster e The Wizarding World of Harry Potter - Hogsmeade',
    targetAudience: 'Fãs de montanhas-russas radicais, Harry Potter, Jurassic Park e Marvel',
    estimatedDuration: '10 a 12 horas',
    ropeDropArrival: 'Chegue 60 minutos antes da abertura. A corrida matinal para Hagrid\'s é lendária.',
    generalStrategy: 'No Rope Drop, decida entre Hagrid\'s Magical Creatures Motorbike Adventure ou Jurassic World VelociCoaster. Atrações aquáticas de Toon Lagoon molham completamente: faça-as antes do almoço e troque de roupa.',
    diningRecommendations: {
      quickService: ['Three Broomsticks (Hogsmeade - pratos tradicionais britânicos e Butterbeer)', 'Thunder Falls Terrace (Jurassic Park - costelinha defumada e frango assado)', 'Blondie\'s (Toon Lagoon - sanduíches Dagwood gigantes)'],
      tableService: ['Mythos Restaurant (Lost Continent - considerado um dos melhores restaurantes temáticos do mundo)', 'Confisco Grille (Port of Entry - cozinha internacional)'],
      snacks: ['Butterbeer congelada em Hogsmeade', 'Green Eggs and Ham Tots em Seuss Landing', 'Brookies no Croissant Moon Bakery']
    },
    nightShow: {
      name: 'Hogwarts Castle Projection Show / CineSational',
      time: 'A cada 20 minutos após o anoitecer',
      tip: 'Fique na praça em frente ao Castelo de Hogwarts cerca de 15 minutos antes da projeção de luzes.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Hagrid\'s Magical Creatures Motorbike Adventure',
        category: 'rope_drop',
        description: 'Caminhe direto por Seuss Landing até Hogsmeade. Hagrid\'s tem fila média de 90 a 120 minutos durante a tarde; fazê-la na abertura é a maior economia de tempo da viagem.',
        badge: 'Top 1 Prioridade'
      },
      {
        step: 2,
        title: 'Jurassic World VelociCoaster',
        category: 'morning',
        description: 'Emende na sequência a melhor montanha-russa do mundo. Com lançamento duplo e manobras sobre a lagoa, a fila ainda estará moderada logo cedo.',
        badge: 'Radical Insuperável'
      },
      {
        step: 3,
        title: 'Harry Potter and the Forbidden Journey & Flight of the Hippogriff',
        category: 'morning',
        description: 'Entre no Castelo de Hogwarts e explore as salas de aula de Dumbledore antes do passeio de braço robótico com os dementadores.',
        tip: 'Se a fila de Hagrid\'s atrasou, use o Single Rider do Forbidden Journey para embarque em menos de 15 minutos.'
      },
      {
        step: 4,
        title: 'Almoço no Three Broomsticks ou Mythos',
        category: 'lunch',
        description: 'Saboreie o Shepherd\'s Pie, peixe com batatas fritas (Fish and Chips) e uma cerveja amanteigada bem gelada em Hogsmeade.',
        tip: 'Peça a sobremesa Butterbeer Potted Cream para fechar com chave de ouro.'
      },
      {
        step: 5,
        title: 'Jurassic Park River Adventure',
        category: 'afternoon',
        description: 'Passeio de barco entre répteis gigantes que culmina com a queda de 25 metros no escuro fugindo do T-Rex.',
        tip: 'As primeiras fileiras se molham mais; use capa ou aproveite o calor da tarde.'
      },
      {
        step: 6,
        title: 'Toon Lagoon: Popeye & Bluto\'s Bilge-Rat Barges e Dudley Do-Right',
        category: 'afternoon',
        description: 'Duas das atrações aquáticas mais engraçadas e encharcadas de Orlando. Impossível sair seco!',
        tip: 'Coloque mochilas e celulares nos compartimentos centrais cobertos ou armários.'
      },
      {
        step: 7,
        title: 'Marvel Super Hero Island: Hulk & Spider-Man',
        category: 'evening',
        description: 'Encare o lançamento catatônico de The Incredible Hulk Coaster e viva o clássico absoluto The Amazing Adventures of Spider-Man.',
        tip: 'Hulk exige que todos os itens dos bolsos sejam guardados nos armários gratuitos da entrada.'
      },
      {
        step: 8,
        title: 'Hogwarts ao Luar e Encerramento',
        category: 'night_show',
        description: 'Retorne a Hogsmeade à noite para ver as luzes e o castelo brilhando, e faça sua última compra na Honeydukes.',
        tip: 'Hagrid\'s à noite é uma experiência completamente diferente com iluminação na floresta!'
      }
    ]
  },

  'universal-studios': {
    id: 'universal-studios',
    parkId: 'universal-studios',
    parkName: 'Universal Studios Florida',
    operator: 'universal',
    title: 'Universal Studios Florida — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro cinematográfico com Beco Diagonal, Gringotts, Transformers, Múmia e Simpsons',
    targetAudience: 'Fãs de cinema, cultura pop, simuladores de ponta e magia de Harry Potter',
    estimatedDuration: '9 a 11 horas',
    ropeDropArrival: 'Chegue 45 a 60 minutos antes da abertura oficial.',
    generalStrategy: 'Vá direto para Harry Potter and the Escape from Gringotts no Beco Diagonal. Em seguida, aproveite Revenge of the Mummy e Transformers. Assista aos shows vespertinos (Bourne Stuntacular).',
    diningRecommendations: {
      quickService: ['Leaky Cauldron (Caldeirão Furado no Beco Diagonal - tortas e cafés da manhã ingleses)', 'Today Cafe (sanduíches gourmet e saladas frescas)', 'Fast Food Boulevard / Krusty Burger (Springfield)'],
      tableService: ['Finnegan\'s Bar & Grill (New York - pub irlandês animado com música)', 'Lombard\'s Seafood Grille (San Francisco - frutos do mar e vista da lagoa)'],
      snacks: ['Donut rosa gigante do Lard Lad Donuts (Springfield)', 'Butterbeer e sorvete de cerveja amanteigada na Florean Fortescue\'s']
    },
    nightShow: {
      name: 'CineSational: A Symphonic Spectacular',
      time: 'Geralmente às 21h00 na lagoa central',
      tip: 'Assista do deck central de New York / San Francisco. Show espetacular com centenas de drones, fontes coloridas e trilhas sonoras icônicas de filmes.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Beco Diagonal & Escape from Gringotts',
        category: 'rope_drop',
        description: 'Entre pela entrada secreta de tijolos em Londres até o Beco Diagonal. Embarque em Harry Potter and the Escape from Gringotts antes das filas passarem de 60 minutos.',
        badge: 'Alta Prioridade'
      },
      {
        step: 2,
        title: 'Exploração do Beco Diagonal & Knockturn Alley',
        category: 'morning',
        description: 'Veja o dragão cuspir fogo no topo do banco de Gringotts (a cada 10-15 minutos) e pratique feitiços interativos com sua varinha.',
        tip: 'Não deixe de entrar na Travessa do Tranco (Knockturn Alley), a área mais fresca e misteriosa do parque.'
      },
      {
        step: 3,
        title: 'Revenge of the Mummy em New York',
        category: 'morning',
        description: 'A montanha-russa indoor favorita dos fãs, misturando efeitos práticos de fogo, velocidade no escuro e escaravelhos.',
        badge: 'Favorito dos Fãs'
      },
      {
        step: 4,
        title: 'Transformers: The Ride-3D',
        category: 'morning',
        description: 'Batalha 3D em tamanho real entre Autobots e Decepticons.',
        tip: 'Costuma aceitar fila Single Rider para economia de tempo.'
      },
      {
        step: 5,
        title: 'Almoço no Leaky Cauldron ou Finnegan\'s',
        category: 'lunch',
        description: 'Faça uma pausa no Caldeirão Furado ou no pub irlandês Finnegan\'s em New York ao som de piano ao vivo.',
        tip: 'Excelente cerveja amanteigada ou chope importado.'
      },
      {
        step: 6,
        title: 'The Bourne Stuntacular',
        category: 'show',
        description: 'Show de dublês mais impressionante de Orlando, mesclando telões de LED de 360 graus, acrobacias ao vivo e efeitos de fumaça e vento.',
        badge: 'Show Imperdível'
      },
      {
        step: 7,
        title: 'Springfield: The Simpsons Ride & Men in Black',
        category: 'afternoon',
        description: 'Visite a cidade dos Simpsons, tire foto com o Homer e vá até Men in Black: Alien Attack (jogo de tiro onde você gira e atira em alienígenas).',
        tip: 'Em MIB, aperte repetidamente o botão vermelho do bônus quando mandarem no final para ganhar 100.000 pontos extras!'
      },
      {
        step: 8,
        title: 'Hollywood & E.T. Adventure',
        category: 'evening',
        description: 'O clássico nostálgico dos anos 80: voe de bicicleta sobre a cidade com o E.T. no cesto.',
        tip: 'Diga seu nome com clareza para o funcionário ao receber o cartão interativo!'
      },
      {
        step: 9,
        title: 'CineSational: A Symphonic Spectacular',
        category: 'night_show',
        description: 'Espetáculo de encerramento na lagoa com drones, fontes, filmes de Jurassic Park, De Volta Para o Futuro, Tubarão e Harry Potter.',
        badge: 'Encerramento Show'
      }
    ]
  },

  'universal-1day-park-to-park': {
    id: 'universal-1day-park-to-park',
    parkId: 'universal-park-to-park',
    parkName: 'Universal Orlando (1 Dia Park-to-Park)',
    operator: 'universal',
    title: 'Universal Orlando — 1 Dia Park-to-Park (2 Parques em 1 Dia)',
    subtitle: 'Roteiro expresso para cobrir as atrações indispensáveis de USF e Islands of Adventure com o Hogwarts Express',
    targetAudience: 'Viajantes com tempo limitado que querem ver o essencial dos dois parques da Universal',
    estimatedDuration: '12 a 13 horas',
    ropeDropArrival: 'Chegue 60 minutos antes da abertura no Islands of Adventure (ou no parque que abrir primeiro com Early Entry).',
    generalStrategy: 'Exige ingresso Park-to-Park para embarcar no Hogwarts Express. Comece cedo em Islands of Adventure com Hagrid\'s e VelociCoaster, pegue o trem para USF ao meio-dia, faça Gringotts e Múmia e decida onde terminar a noite.',
    diningRecommendations: {
      quickService: ['Three Broomsticks (Hogsmeade)', 'Today Cafe (USF)', 'Leaky Cauldron (Beco Diagonal)'],
      tableService: ['Mythos Restaurant (Lost Continent)', 'Finnegan\'s Bar & Grill (USF)'],
      snacks: ['Butterbeer (em ambas as terras de Harry Potter)', 'Donut Lard Lad gigante']
    },
    nightShow: {
      name: 'CineSational (USF) ou Projeções no Castelo de Hogwarts (IOA)',
      time: 'Geralmente às 21h00',
      tip: 'Escolha com antecedência em qual dos dois parques você quer finalizar o dia.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop no Islands of Adventure: Hagrid\'s Motorbike',
        category: 'rope_drop',
        description: 'Entrada rápida direto para a área de Hogsmeade para Hagrid\'s antes que a fila supere 90 minutos.',
        badge: 'Passo Crítico'
      },
      {
        step: 2,
        title: 'Jurassic World VelociCoaster',
        category: 'morning',
        description: 'Logo após Hagrid\'s, caminhe para a VelociCoaster. Essa dobradinha é o ponto alto da viagem para os amantes de adrenalina.',
        badge: 'Radical'
      },
      {
        step: 3,
        title: 'Forbidden Journey & Hogsmeade',
        category: 'morning',
        description: 'Faça Harry Potter and the Forbidden Journey (use Single Rider se a fila estiver acima de 40min) e explore Hogsmeade.',
        tip: 'Pegue uma Butterbeer congelada para a caminhada.'
      },
      {
        step: 4,
        title: 'Hogwarts Express: De Hogsmeade para Londres (King\'s Cross)',
        category: 'afternoon',
        description: 'Apresente seu ingresso Park-to-Park e embarque no trem mágico. A viagem é uma atração completa com projeções nas janelas!',
        badge: 'Experiência Única'
      },
      {
        step: 5,
        title: 'Almoço no Leaky Cauldron & Beco Diagonal',
        category: 'lunch',
        description: 'Desembarque na estação King\'s Cross em Londres, entre no Beco Diagonal e almoce no Caldeirão Furado.',
        tip: 'Faça Harry Potter and the Escape from Gringotts logo após o almoço.'
      },
      {
        step: 6,
        title: 'Universal Studios: Revenge of the Mummy & Transformers',
        category: 'afternoon',
        description: 'Atravesse para as áreas de New York e San Francisco para as duas atrações fechadas mais concorridas.',
        tip: 'Use as filas Single Rider em Transformers e Mummy se estiver em ritmo acelerado.'
      },
      {
        step: 7,
        title: 'The Bourne Stuntacular',
        category: 'show',
        description: 'Assista a este show tecnológico espetacular para descansar os pés no ambiente com ar-condicionado.',
        badge: 'Melhor Show'
      },
      {
        step: 8,
        title: 'Hogwarts Express de volta para IOA ou Finalizar em USF',
        category: 'evening',
        description: 'Se quiser rever o show noturno de Hogwarts ou o Hulk, pegue o trem de volta (a experiência na janela é diferente em cada sentido!). Caso contrário, encerre com CineSational em USF.',
        tip: 'O trem opera até cerca de 30 minutos antes do fechamento dos parques.'
      }
    ]
  },

  'universal-2day-park-to-park': {
    id: 'universal-2day-park-to-park',
    parkId: 'universal-2day',
    parkName: 'Universal Orlando (2 Dias Park-to-Park)',
    operator: 'universal',
    title: 'Universal Orlando — 2 Dias Park-to-Park (Roteiro Completo)',
    subtitle: 'O equilíbrio perfeito para explorar minuciosamente Universal Studios e Islands of Adventure sem correria',
    targetAudience: 'Famílias e grupos que querem curtir tudo com calma, repetir as atrações favoritas e desfrutar os detalhes temáticos',
    estimatedDuration: '2 dias completos (8 a 10 horas por dia)',
    ropeDropArrival: 'Dia 1: Islands of Adventure às 08h00. Dia 2: Universal Studios Florida às 08h15.',
    generalStrategy: 'Dedique a maior parte do Dia 1 a Islands of Adventure (Hagrid\'s, VelociCoaster, Hulk, Spider-Man e Toon Lagoon). Dedique o Dia 2 a Universal Studios Florida (Beco Diagonal, Gringotts, Múmia, Simpsons, Bourne e E.T.), usando o Hogwarts Express entre eles para repetir suas atrações prediletas.',
    diningRecommendations: {
      quickService: ['Dia 1: Three Broomsticks (Hogsmeade)', 'Dia 2: Leaky Cauldron ou Today Cafe'],
      tableService: ['Mythos Restaurant (Dia 1)', 'Finnegan\'s Bar & Grill ou Cowfish no CityWalk (Dia 2)'],
      snacks: ['Butterbeer Fudge', 'Floreans Ice Cream', 'Donut gigante de Homer Simpson']
    },
    nightShow: {
      name: 'Dia 1: Hogwarts Castle Lights / Dia 2: CineSational',
      time: '21h00 em ambos os dias',
      tip: 'Aproveite cada show noturno no seu respectivo parque sem correria de translado à noite.'
    },
    steps: [
      {
        step: 1,
        title: 'Dia 1 - Manhã: Conquistando Islands of Adventure',
        category: 'rope_drop',
        description: 'Rope drop com foco total em Hagrid\'s Magical Creatures Motorbike Adventure e VelociCoaster nas duas primeiras horas.',
        badge: 'Dia 1: Adrenalina'
      },
      {
        step: 2,
        title: 'Dia 1 - Tarde: Áreas Aquáticas e Marvel Super Hero Island',
        category: 'afternoon',
        description: 'Almoço no Mythos, seguido pelas correntezas de Popeye e Dudley Do-Right, e encerramento com The Incredible Hulk e Spider-Man.',
        tip: 'Você terá tempo de sobra para passear e tirar fotos incríveis com os personagens.'
      },
      {
        step: 3,
        title: 'Dia 1 - Noite: Magia Noturna em Hogsmeade',
        category: 'night_show',
        description: 'Veja as luzes do castelo de Hogwarts, tome uma Butterbeer quente ou gelada e repita o Forbidden Journey com fila zerada.',
        badge: 'Noite Mágica'
      },
      {
        step: 4,
        title: 'Dia 2 - Manhã: Beco Diagonal e Clássicos de Hollywood',
        category: 'morning',
        description: 'Comece em Universal Studios com Escape from Gringotts, fotos no Nôitibus Andante e café no Caldeirão Furado.',
        badge: 'Dia 2: Cinema'
      },
      {
        step: 5,
        title: 'Dia 2 - Tarde: Ação & Tecnologia',
        category: 'afternoon',
        description: 'Revenge of the Mummy, Transformers, The Bourne Stuntacular e Men in Black com tranquilidade.',
        tip: 'Faça os shows com ar-condicionado nos momentos mais quentes do dia.'
      },
      {
        step: 6,
        title: 'Dia 2 - Noite: Hogwarts Express & CineSational',
        category: 'night_show',
        description: 'Use o Hogwarts Express no sentido King\'s Cross para reviver a magia nos dois sentidos e assista ao show de encerramento CineSational na lagoa da Universal.',
        badge: 'Gran Finale'
      }
    ]
  },

  'seaworld': {
    id: 'seaworld',
    parkId: 'seaworld',
    parkName: 'SeaWorld Orlando',
    operator: 'seaworld',
    title: 'SeaWorld Orlando — Plano Passo a Passo de 1 Dia',
    subtitle: 'Roteiro da capital das montanhas-russas da Flórida aliado ao resgate da vida marinha e shows aquáticos',
    targetAudience: 'Fãs de montanhas-russas radicais, famílias e amantes da vida marinha',
    estimatedDuration: '8 a 10 horas',
    ropeDropArrival: 'Chegue 30 a 45 minutos antes da abertura oficial dos portões.',
    generalStrategy: 'Faça as montanhas-russas mais concorridas logo cedo (Pipeline: The Surf Coaster, Mako, Manta e a novíssima Penguin Trek). No meio do dia, intercale os grandes estádios de apresentações com ar-condicionado ou sombra.',
    diningRecommendations: {
      quickService: ['Voyager\'s Smokehouse (churrasco americano artesanal com brisket e costela)', 'Expedition Café (comidas internacionais perto da Antártica)', 'Altitude Burgers (hambúrgueres artesanais suculentos)'],
      tableService: ['Sharks Underwater Grill (refeição incrível com mesas ao lado do aquário gigante de tubarões)'],
      snacks: ['Cinnabon quente', 'Dippin\' Dots sorvete do futuro', 'Pretzels artesanais']
    },
    nightShow: {
      name: 'Ignite Fireworks & Fountains (sazonal em festivais e verão)',
      time: 'Geralmente às 21h00 sobre a baía central',
      tip: 'Assista da ponte central de Bayside Stadium para uma visão completa de fogos e chamas.'
    },
    steps: [
      {
        step: 1,
        title: 'Rope Drop: Pipeline: The Surf Coaster',
        category: 'rope_drop',
        description: 'Vá direto para a Pipeline logo na entrada. A primeira "surf coaster" do mundo simula manobras de surf em pé com assentos com amortecedores que sobem e descem.',
        badge: 'Inovação Radical'
      },
      {
        step: 2,
        title: 'Manta — Montanha-russa Voadora',
        category: 'morning',
        description: 'Embarque na Manta, onde você viaja na posição de bruços voando sobre lagoas e espelhos d\'água com o loop pretzel insano.',
        tip: 'Se a fila de Manta estiver longa, use o armário na entrada e retorne no início da tarde.'
      },
      {
        step: 3,
        title: 'Mako — A Hypercoaster Mais Alta e Rápida de Orlando',
        category: 'morning',
        description: 'Vá até o Shark Realm para enfrentar a Mako: 61 metros de altura, 117 km/h e incríveis momentos de airtime (sensação de gravidade zero).',
        badge: 'Top 1 Velocidade'
      },
      {
        step: 4,
        title: 'Penguin Trek & Antarctica Realm',
        category: 'morning',
        description: 'A nova montanha-russa familiar com lançamentos em moto de neve que termina dentro do habitat real e gelado dos pinguins!',
        badge: 'Novidade Imperdível'
      },
      {
        step: 5,
        title: 'Almoço no Voyager\'s Smokehouse ou Sharks Underwater Grill',
        category: 'lunch',
        description: 'Saboreie o melhor churrasco defumado em madeira de nogueira ou almoce ao lado de tubarões reais no aquário panorâmico.',
        tip: 'O Voyager\'s oferece porções muito fartas que podem ser divididas em duas pessoas.'
      },
      {
        step: 6,
        title: 'Shows Aquáticos: Orca Encounter & Dolphin Adventures',
        category: 'show',
        description: 'Assista às apresentações educativas e acrobáticas nos estádios abertos. Cuidado com a "Soak Zone" nas primeiras fileiras se não quiser se encharcar!',
        tip: 'Chegue 20 minutos antes do horário marcado nos horários oficiais do parque.'
      },
      {
        step: 7,
        title: 'Ice Breaker & Kraken',
        category: 'afternoon',
        description: 'Enfrente os múltiplos lançamentos dianteiros e reversos de Ice Breaker e a clássica sem chão Kraken.',
        tip: 'Kraken costuma ter filas muito pequenas após as 15h.'
      },
      {
        step: 8,
        title: 'Wild Arctic & Manatee Rescue',
        category: 'evening',
        description: 'Visite as belugas, morsas e o centro de reabilitação de peixes-bois nativos da Flórida para uma experiência relaxante e educativa.',
        tip: 'Ótima maneira de encerrar a tarde antes de sair para um outlet ou jantar.'
      }
    ]
  }
};

/**
 * Retorna o touring plan de um determinado parque ou ID
 */
export function getTouringPlanById(planId: string): TouringPlan | null {
  return TOURING_PLANS_CATALOG[planId] || null;
}

/**
 * Retorna o touring plan para um determinado parkId do catálogo principal
 */
export function getTouringPlanForPark(parkId: string): TouringPlan | null {
  const mapping: Record<string, string> = {
    'magic-kingdom': 'magic-kingdom',
    'epcot': 'epcot',
    'hollywood-studios': 'hollywood-studios',
    'animal-kingdom': 'animal-kingdom',
    'epic-universe': 'epic-universe',
    'islands-of-adventure': 'islands-of-adventure',
    'universal-studios': 'universal-studios',
    'seaworld': 'seaworld',
  };
  const mappedId = mapping[parkId];
  return mappedId ? TOURING_PLANS_CATALOG[mappedId] || null : null;
}
