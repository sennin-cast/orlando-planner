export interface QueueTimesRide {
  id: number;
  name: string;
  is_open: boolean;
  wait_time: number;
  last_updated: string;
}

export interface QueueTimesLand {
  id: number;
  name: string;
  rides: QueueTimesRide[];
}

export interface QueueTimesParkResponse {
  lands: QueueTimesLand[];
  rides: QueueTimesRide[];
}

export interface ParkLiveWaitSummary {
  parkId: string;
  parkName: string;
  queueTimesId: number;
  totalRides: number;
  openRides: number;
  avgWaitTime: number;
  maxWaitRide: { name: string; wait_time: number } | null;
  lands: Array<{
    name: string;
    rides: QueueTimesRide[];
  }>;
  lastUpdated: string;
  isLive: boolean;
}

export const QUEUE_TIMES_PARK_IDS: Record<string, number> = {
  'magic-kingdom': 6,
  'epcot': 5,
  'hollywood-studios': 7,
  'animal-kingdom': 8,
  'universal-studios': 65,
  'islands-of-adventure': 64,
  'volcano-bay': 67,
  'epic-universe': 334,
  'seaworld': 21,
  'busch-gardens': 24,
};

// Fallback sample data in case of offline/CORS restrictions
const FALLBACK_RIDES_BY_PARK: Record<string, Array<{ name: string; land: string; wait: number; open: boolean }>> = {
  'magic-kingdom': [
    { name: 'Seven Dwarfs Mine Train', land: 'Fantasyland', wait: 65, open: true },
    { name: 'Space Mountain', land: 'Tomorrowland', wait: 45, open: true },
    { name: 'TRON Lightcycle / Run', land: 'Tomorrowland', wait: 60, open: true },
    { name: 'Big Thunder Mountain Railroad', land: 'Frontierland', wait: 35, open: true },
    { name: 'Peter Pan\'s Flight', land: 'Fantasyland', wait: 50, open: true },
    { name: 'Haunted Mansion', land: 'Liberty Square', wait: 25, open: true },
    { name: 'Pirates of the Caribbean', land: 'Adventureland', wait: 20, open: true },
    { name: 'Jungle Cruise', land: 'Adventureland', wait: 30, open: true },
    { name: 'Buzz Lightyear\'s Space Ranger Spin', land: 'Tomorrowland', wait: 25, open: true },
    { name: 'It\'s a Small World', land: 'Fantasyland', wait: 15, open: true },
  ],
  'epcot': [
    { name: 'Guardians of the Galaxy: Cosmic Rewind', land: 'World Discovery', wait: 75, open: true },
    { name: 'Remy\'s Ratatouille Adventure', land: 'World Showcase', wait: 55, open: true },
    { name: 'Frozen Ever After', land: 'World Showcase', wait: 50, open: true },
    { name: 'Soarin\' Around the World', land: 'World Nature', wait: 30, open: true },
    { name: 'Test Track (Reimaginado)', land: 'World Discovery', wait: 40, open: true },
    { name: 'Spaceship Earth', land: 'World Celebration', wait: 15, open: true },
    { name: 'Mission: SPACE', land: 'World Discovery', wait: 20, open: true },
  ],
  'hollywood-studios': [
    { name: 'Star Wars: Rise of the Resistance', land: 'Star Wars: Galaxy\'s Edge', wait: 85, open: true },
    { name: 'Slinky Dog Dash', land: 'Toy Story Land', wait: 70, open: true },
    { name: 'The Twilight Zone Tower of Terror', land: 'Sunset Boulevard', wait: 50, open: true },
    { name: 'Millennium Falcon: Smugglers Run', land: 'Star Wars: Galaxy\'s Edge', wait: 45, open: true },
    { name: 'Mickey & Minnie\'s Runaway Railway', land: 'Hollywood Boulevard', wait: 40, open: true },
    { name: 'Toy Story Mania!', land: 'Toy Story Land', wait: 35, open: true },
    { name: 'Rock \'n\' Roller Coaster', land: 'Sunset Boulevard', wait: 45, open: true },
  ],
  'animal-kingdom': [
    { name: 'Avatar Flight of Passage', land: 'Pandora', wait: 85, open: true },
    { name: 'Na\'vi River Journey', land: 'Pandora', wait: 45, open: true },
    { name: 'Expedition Everest', land: 'Asia', wait: 30, open: true },
    { name: 'Kilimanjaro Safaris', land: 'Africa', wait: 35, open: true },
    { name: 'DINOSAUR', land: 'DinoLand U.S.A.', wait: 20, open: true },
    { name: 'Kali River Rapids', land: 'Asia', wait: 25, open: true },
  ],
  'universal-studios': [
    { name: 'Harry Potter and the Escape from Gringotts', land: 'Diagon Alley', wait: 60, open: true },
    { name: 'Revenge of the Mummy', land: 'New York', wait: 35, open: true },
    { name: 'Transformers: The Ride-3D', land: 'Production Central', wait: 25, open: true },
    { name: 'Despicable Me Minion Mayhem', land: 'Minion Land', wait: 40, open: true },
    { name: 'Hollywood Rip Ride Rockit', land: 'Production Central', wait: 35, open: true },
    { name: 'MEN IN BLACK Alien Attack', land: 'World Expo', wait: 15, open: true },
  ],
  'islands-of-adventure': [
    { name: 'Hagrid\'s Magical Creatures Motorbike Adventure', land: 'Hogsmeade', wait: 80, open: true },
    { name: 'Jurassic World VelociCoaster', land: 'Jurassic Park', wait: 55, open: true },
    { name: 'The Incredible Hulk Coaster', land: 'Marvel Super Hero Island', wait: 30, open: true },
    { name: 'Harry Potter and the Forbidden Journey', land: 'Hogsmeade', wait: 45, open: true },
    { name: 'The Amazing Adventures of Spider-Man', land: 'Marvel Super Hero Island', wait: 25, open: true },
    { name: 'Skull Island: Reign of Kong', land: 'Skull Island', wait: 35, open: true },
  ],
  'epic-universe': [
    { name: 'Stardust Racers', land: 'Celestial Park', wait: 70, open: true },
    { name: 'Mario Kart: Bowser\'s Challenge', land: 'Super Nintendo World', wait: 65, open: true },
    { name: 'Monsters Unchained: The Frankenstein Experiment', land: 'Dark Universe', wait: 55, open: true },
    { name: 'Curse of the Werewolf', land: 'Dark Universe', wait: 40, open: true },
    { name: 'Yoshi\'s Adventure', land: 'Super Nintendo World', wait: 35, open: true },
    { name: 'Hiccup\'s Wing Gliders', land: 'Isle of Berk', wait: 50, open: true },
  ],
  'seaworld': [
    { name: 'Pipeline: The Surf Coaster', land: 'Coasters', wait: 35, open: true },
    { name: 'Mako', land: 'Coasters', wait: 25, open: true },
    { name: 'Kraken', land: 'Coasters', wait: 15, open: true },
    { name: 'Manta', land: 'Coasters', wait: 30, open: true },
    { name: 'Ice Breaker', land: 'Coasters', wait: 20, open: true },
    { name: 'Penguin Trek', land: 'Antarctica', wait: 30, open: true },
  ],
  'busch-gardens': [
    { name: 'Iron Gwazi', land: 'Morocco', wait: 40, open: true },
    { name: 'SheiKra', land: 'Stanleyville', wait: 30, open: true },
    { name: 'Cheetah Hunt', land: 'Edge of Africa', wait: 35, open: true },
    { name: 'Montu', land: 'Egypt', wait: 20, open: true },
    { name: 'Cobra\'s Curse', land: 'Egypt', wait: 25, open: true },
    { name: 'Tigris', land: 'Stanleyville', wait: 20, open: true },
  ],
  'volcano-bay': [
    { name: 'Krakatau Aqua Coaster', land: 'Rainforest Village', wait: 55, open: true },
    { name: 'Ko\'okiri Body Plunge', land: 'Wave Village', wait: 30, open: true },
    { name: 'Honu ika Moana', land: 'River Village', wait: 25, open: true },
    { name: 'Kala & Tai Nui Serpentine Body Slides', land: 'Rainforest Village', wait: 20, open: true },
  ],
};

export class QueueTimesService {
  public static async fetchParkWaitTimes(parkId: string): Promise<ParkLiveWaitSummary | null> {
    const queueId = QUEUE_TIMES_PARK_IDS[parkId];
    if (!queueId) return null;

    // Use local proxy in dev, direct URL in prod/fallback
    const proxyUrl = `/api/queue-times/parks/${queueId}/queue_times.json`;
    const directUrl = `https://queue-times.com/parks/${queueId}/queue_times.json`;

    let data: QueueTimesParkResponse | null = null;
    let isLive = false;

    // Try proxy first (avoids CORS)
    try {
      const res = await fetch(proxyUrl);
      if (res.ok) {
        data = await res.json();
        isLive = true;
      }
    } catch {
      // Proxy unavailable, attempt direct URL
    }

    if (!data) {
      try {
        const res = await fetch(directUrl);
        if (res.ok) {
          data = await res.json();
          isLive = true;
        }
      } catch {
        // Direct fetch blocked or offline
      }
    }

    // Process live data if available
    if (data) {
      const allRides: QueueTimesRide[] = [];
      const lands: Array<{ name: string; rides: QueueTimesRide[] }> = [];

      if (data.lands && Array.isArray(data.lands)) {
        data.lands.forEach((l) => {
          lands.push({
            name: l.name,
            rides: l.rides || [],
          });
          if (l.rides) allRides.push(...l.rides);
        });
      }

      if (data.rides && Array.isArray(data.rides) && data.rides.length > 0) {
        lands.push({
          name: 'Geral',
          rides: data.rides,
        });
        allRides.push(...data.rides);
      }

      const openRides = allRides.filter((r) => r.is_open);
      const ridesWithWait = openRides.filter((r) => r.wait_time > 0);
      const avgWait =
        ridesWithWait.length > 0
          ? Math.round(ridesWithWait.reduce((sum, r) => sum + r.wait_time, 0) / ridesWithWait.length)
          : 0;

      let maxWaitRide: { name: string; wait_time: number } | null = null;
      if (ridesWithWait.length > 0) {
        const top = [...ridesWithWait].sort((a, b) => b.wait_time - a.wait_time)[0];
        maxWaitRide = { name: top.name, wait_time: top.wait_time };
      }

      return {
        parkId,
        parkName: parkId,
        queueTimesId: queueId,
        totalRides: allRides.length,
        openRides: openRides.length,
        avgWaitTime: avgWait,
        maxWaitRide,
        lands,
        lastUpdated: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        isLive,
      };
    }

    // Graceful fallback if network/CORS blocks real-time
    return this.getFallbackSummary(parkId, queueId);
  }

  private static getFallbackSummary(parkId: string, queueId: number): ParkLiveWaitSummary {
    const list = FALLBACK_RIDES_BY_PARK[parkId] || [
      { name: 'Atração Principal 1', land: 'Área 1', wait: 45, open: true },
      { name: 'Montanha-russa Clássica', land: 'Área 2', wait: 35, open: true },
      { name: 'Atração Familiar', land: 'Área 1', wait: 20, open: true },
    ];

    const landsMap = new Map<string, QueueTimesRide[]>();
    list.forEach((item, idx) => {
      if (!landsMap.has(item.land)) {
        landsMap.set(item.land, []);
      }
      landsMap.get(item.land)!.push({
        id: idx + 1,
        name: item.name,
        is_open: item.open,
        wait_time: item.wait,
        last_updated: new Date().toISOString(),
      });
    });

    const lands = Array.from(landsMap.entries()).map(([name, rides]) => ({ name, rides }));
    const allRides = list.map((i, idx) => ({
      id: idx + 1,
      name: i.name,
      is_open: i.open,
      wait_time: i.wait,
      last_updated: new Date().toISOString(),
    }));

    const openRides = allRides.filter((r) => r.is_open);
    const avgWait = Math.round(openRides.reduce((sum, r) => sum + r.wait_time, 0) / openRides.length);
    const maxWaitRide = [...openRides].sort((a, b) => b.wait_time - a.wait_time)[0] || null;

    return {
      parkId,
      parkName: parkId,
      queueTimesId: queueId,
      totalRides: allRides.length,
      openRides: openRides.length,
      avgWaitTime: avgWait,
      maxWaitRide: maxWaitRide ? { name: maxWaitRide.name, wait_time: maxWaitRide.wait_time } : null,
      lands,
      lastUpdated: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      isLive: false,
    };
  }
}
