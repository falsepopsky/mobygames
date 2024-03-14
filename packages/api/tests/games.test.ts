import { MobyGames } from '../src/index.js';

const client = new MobyGames('tori');

describe('games()', () => {
  it('returns a successful response without queries', async () => {
    const { games } = await client.games();

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(2);
    expect(Array.isArray(games[0]?.alternate_titles)).toBe(true);
    expect(games[0]?.alternate_titles).toHaveLength(1);
    expect(games[0]?.alternate_titles[0]?.title).toBe('Salaiset Kansiot');
    expect(games[0]?.alternate_titles[0]?.description).toBe('Finnish title');
    expect(games[0]?.description).toBe('As an extension of one of the most long-running television series of all time');
    expect(games[0]?.game_id).toBe(1);
    expect(Array.isArray(games[0]?.genres)).toBe(true);
    expect(games[0]?.genres).toHaveLength(1);
    expect(games[0]?.genres[0]?.genre_category).toBe('Basic Genres');
    expect(games[0]?.genres[0]?.genre_category_id).toBe(1);
    expect(games[0]?.genres[0]?.genre_id).toBe(2);
    expect(games[0]?.genres[0]?.genre_name).toBe('Adventure');
    expect(games[0]?.moby_score).toBe(7.1);
    expect(games[0]?.moby_url).toBe('https://www.mobygames.com/game/1/the-x-files-game/');
    expect(games[0]?.num_votes).toBe(55);
    expect(games[0]?.official_url).toBeNull();
    expect(Array.isArray(games[0]?.platforms)).toBe(true);
    expect(games[0]?.platforms).toHaveLength(1);
    expect(games[0]?.platforms[0]?.platform_id).toBe(3);
    expect(games[0]?.platforms[0]?.platform_name).toBe('Windows');
    expect(games[0]?.platforms[0]?.first_release_date).toBe('1998');
    expect(games[0]?.sample_cover.height).toBe(800);
    expect(games[0]?.sample_cover.width).toBe(690);
    expect(Array.isArray(games[0]?.sample_cover.platforms)).toBe(true);
    expect(games[0]?.sample_cover.platforms).toHaveLength(2);
    expect(games[0]?.sample_cover.thumbnail_image).toBe(
      'https://cdn.mobygames.com/872aed6c-aba4-11ed-a188-02420a00019a.webp'
    );
    expect(games[0]?.sample_cover.image).toBe(
      'https://cdn.mobygames.com/covers/4062982-the-x-files-game-windows-front-cover.jpg'
    );
    expect(Array.isArray(games[0]?.sample_screenshots)).toBe(true);
    expect(games[0]?.title).toBe('The X-Files Game');
    expect(games[1]?.sample_screenshots).toHaveLength(1);
    expect(games[1]?.sample_screenshots[0]?.height).toBe(200);
    expect(games[1]?.sample_screenshots[0]?.width).toBe(320);
    expect(games[1]?.sample_screenshots[0]?.caption).toBe("But don't let the Waiter catch you. (CGA)");
    expect(games[1]?.sample_screenshots[0]?.image).toBe(
      'https://cdn.mobygames.com/screenshots/7288598-who-framed-roger-rabbit-dos-but-dont-let-the-waiter-catch-you-cg.png'
    );
    expect(games[1]?.sample_screenshots[0]?.thumbnail_image).toBe(
      'https://cdn.mobygames.com/272f1ce8-abf5-11ed-92cb-02420a000132.webp'
    );
  });

  it('returns a successful response with format id', async () => {
    const { games } = await client.games({ format: 'id' });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(6);
    expect(games[0]).toBeTypeOf('number');
    expect(games[5]).toBe(6);
  });

  it('returns a successful response with format brief', async () => {
    const { games } = await client.games({ format: 'brief' });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(2);
    expect(games[0]?.game_id).toBe(47);
    expect(games[0]?.moby_url).toBe('https://www.mobygames.com/game/47/zyll/');
    expect(games[0]?.title).toBe('Zyll');
    expect(games[1]?.game_id).toBe(48);
    expect(games[1]?.moby_url).toBe('https://www.mobygames.com/game/48/skate-or-die/');
    expect(games[1]?.title).toBe('Skate or Die');
  });

  it('returns a successful response with multiple IDs', async () => {
    const { games } = await client.games({ id: ['101945', '40017'] });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(2);
    expect(Array.isArray(games[0]?.alternate_titles)).toBe(true);
    expect(games[0]?.game_id).toBe(40017);
    expect(games[0]?.official_url).toBeNull();
    expect(games[0]?.title).toBe('Dragon Ball Z: Budokai Tenkaichi 3');
    expect(games[1]?.game_id).toBe(101945);
    expect(games[1]?.official_url).toBe('https://www.bandainamcoent.com/');
    expect(games[1]?.title).toBe('Dragon Ball FighterZ');
    expect(games[1]?.moby_url).toBe('https://www.mobygames.com/game/101945/dragon-ball-fighterz/');
    expect(games[1]?.description).toBeNull();
  });

  it('returns a successful response with platform and limit', async () => {
    const { games } = await client.games({ platform: '15', limit: '5' });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(5);
    expect(games[0]?.game_id).toBe(3);
    expect(games[0]?.title).toBe('Wing Commander');
    expect(games[1]?.game_id).toBe(78);
    expect(games[1]?.title).toBe('Prince of Persia 2: The Shadow & The Flame');
    expect(games[2]?.game_id).toBe(104);
    expect(games[2]?.title).toBe('Ultima VI: The False Prophet');
    expect(games[3]?.game_id).toBe(196);
    expect(games[3]?.title).toBe('Prince of Persia');
    expect(games[4]?.game_id).toBe(210);
    expect(games[4]?.title).toBe('Cannon Fodder');
  });

  it('throws an error if the request fails', async () => {
    const client = new MobyGames('bad');

    await expect(async () => {
      await client.games();
    }).rejects.toThrow('HTTP response status 400 from MobyGames API.');
  });
});

describe('gamesRandom()', () => {
  it('returns a successful response without queries', async () => {
    const { games } = await client.gamesRandom();

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(5);
    expect(games[0]).toBeTypeOf('number');
    expect(games[3]).toBe(15685);
  });

  it('returns a successful response with format brief and limit', async () => {
    const { games } = await client.gamesRandom({ format: 'brief', limit: '2' });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(2);
    expect(games[0]?.game_id).toBe(58675);
    expect(games[0]?.title).toBe('Forza Horizon');
    expect(games[1]?.game_id).toBe(3393);
    expect(games[1]?.title).toBe('The Legend of Zelda');
  });
});

describe('gamesRecent()', () => {
  it('returns a successful response without queries', async () => {
    const { games } = await client.gamesRecent();

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(5);
    expect(games[0]).toBeTypeOf('number');
    expect(games[3]).toBe(50990);
  });

  it('returns a successful response with format normal and age', async () => {
    const { games } = await client.gamesRecent({ format: 'normal', age: '1' });

    expect(Array.isArray(games)).toBe(true);
    expect(games).toHaveLength(1);
    expect(games[0]?.game_id).toBe(106402);
    expect(games[0]?.title).toBe('Russian Roulette');
    expect(games[0]?.sample_cover).toBeNull();
  });
});

describe('gameById()', () => {
  it('returns a successful response without queries', async () => {
    const data = await client.gameById('2822');

    expect(data.alternate_titles).toHaveLength(0);
    expect(data.game_id).toBe(2822);
    expect(data.moby_url).toBe('https://www.mobygames.com/game/2822/dino-crisis/');
    expect(data.title).toBe('Dino Crisis');
  });

  it('returns a successful response with format', async () => {
    const data = await client.gameById('3695', { format: 'brief' });

    expect(data.game_id).toBe(3695);
    expect(data.moby_url).toBe('https://www.mobygames.com/game/3695/brave-fencer-musashi/');
    expect(data.title).toBe('Brave Fencer Musashi');
  });
});

describe('gamePlatforms()', () => {
  it('returns a successful response', async () => {
    const { platforms } = await client.gamePlatforms('16373');

    expect(platforms).toHaveLength(9);
    expect(platforms[0]?.platform_id).toBe(3);
    expect(platforms[0]?.platform_name).toBe('Windows');
    expect(platforms[4]?.platform_id).toBe(82);
    expect(platforms[4]?.platform_name).toBe('Wii');
    expect(platforms[7]?.platform_id).toBe(142);
    expect(platforms[7]?.platform_name).toBe('Xbox One');
  });
});

describe('gamePlatformById()', () => {
  it('returns a successful response', async () => {
    const data = await client.gamePlatformById('120555', '141');

    expect(data.game_id).toBe(120555);
    expect(data.platform_id).toBe(141);
    expect(data.platform_name).toBe('PlayStation 4');
    expect(data.first_release_date).toBe('2019-01-25');
    expect(Array.isArray(data.patches)).toBe(true);
    expect(data.patches[0]?.description).toBe(
      '<p>Version 1.01 <small>-- Download: 562.5 MB</small></p>\n<ul>\n<li> Bug fixes</li>\n</ul>'
    );
  });
});

describe('gamePlatformScreenshots()', () => {
  it('returns a successful response', async () => {
    const { screenshots } = await client.gamePlatformScreenshots('7151', '16');

    expect(Array.isArray(screenshots)).toBe(true);
    expect(screenshots).toHaveLength(3);
    expect(screenshots[0]?.height).toBe(224);
    expect(screenshots[0]?.width).toBe(320);
    expect(screenshots[1]?.caption).toBe('Title');
    expect(screenshots[1]?.image).toBe('https://cdn.mobygames.com/screenshots/15986583-judge-dredd-genesis-title.png');
    expect(screenshots[2]?.thumbnail_image).toBe('https://cdn.mobygames.com/59e6fee0-bf22-11ed-9c42-02420a000140.webp');
  });
});

describe('gamePlatformCovers()', () => {
  it('returns a successful response', async () => {
    const { cover_groups } = await client.gamePlatformCovers('120555', '141');

    expect(Array.isArray(cover_groups)).toBe(true);
    expect(cover_groups).toHaveLength(2);
    expect(cover_groups[0]?.comments).toBe('Lenticular Edition');
    expect(cover_groups[0]?.countries).toHaveLength(2);
    expect(cover_groups[1]?.comments).toBeNull();
    expect(cover_groups[1]?.covers).toHaveLength(4);
    expect(cover_groups[1]?.covers[0]?.comments).toBeNull();
    expect(cover_groups[1]?.covers[0]?.description).toBeNull();
    expect(cover_groups[1]?.covers[0]?.height).toBe(800);
    expect(cover_groups[1]?.covers[0]?.width).toBe(634);
    expect(cover_groups[1]?.covers[0]?.scan_of).toBe('Front Cover');
  });
});
