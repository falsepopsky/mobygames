import { HttpResponse } from 'msw';

// https://api.mobygames.com/v1/games/120555/platforms/141/covers?api_key=tori
const covers = {
  cover_groups: [
    {
      comments: 'Lenticular Edition',
      countries: ['Belgium', 'The Netherlands'],
      covers: [
        {
          comments: 'Lenticular Card on transparant sleeve',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7427601-resident-evil-2-playstation-4-front-cover.jpg',
          scan_of: 'Front Cover',
          thumbnail_image: 'https://cdn.mobygames.com/3de9abaa-abf6-11ed-8949-02420a00012e.webp',
          width: 636,
        },
        {
          comments: null,
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7427568-resident-evil-2-playstation-4-media.jpg',
          scan_of: 'Media',
          thumbnail_image: 'https://cdn.mobygames.com/37132770-abf6-11ed-8949-02420a00012e.webp',
          width: 800,
        },
        {
          comments: 'Keep Case - Front',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7441118-resident-evil-2-playstation-4-other.jpg',
          scan_of: 'Other',
          thumbnail_image: 'https://cdn.mobygames.com/55ce217e-abf6-11ed-b7c8-02420a000136.webp',
          width: 643,
        },
        {
          comments: 'Keep Case - Spine',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7441121-resident-evil-2-playstation-4-other.jpg',
          scan_of: 'Other',
          thumbnail_image: 'https://cdn.mobygames.com/5654051e-abf6-11ed-b7c8-02420a000136.webp',
          width: 68,
        },
        {
          comments: 'Keep Case - Back',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7441124-resident-evil-2-playstation-4-other.jpg',
          scan_of: 'Other',
          thumbnail_image: 'https://cdn.mobygames.com/5727e456-abf6-11ed-b7c8-02420a000136.webp',
          width: 645,
        },
        {
          comments: 'Keep Case - Inside Complete',
          description: null,
          height: 706,
          image: 'https://cdn.mobygames.com/covers/7441127-resident-evil-2-playstation-4-other.jpg',
          scan_of: 'Other',
          thumbnail_image: 'https://cdn.mobygames.com/583d1762-abf6-11ed-b7c8-02420a000136.webp',
          width: 1200,
        },
        {
          comments: 'Warranty Leaflet - Front (Dutch)',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7427571-resident-evil-2-playstation-4-extras.jpg',
          scan_of: 'Extras',
          thumbnail_image: 'https://cdn.mobygames.com/386b5016-abf6-11ed-8949-02420a00012e.webp',
          width: 644,
        },
        {
          comments: 'Warranty Leaflet - Back (French)',
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/7427574-resident-evil-2-playstation-4-extras.jpg',
          scan_of: 'Extras',
          thumbnail_image: 'https://cdn.mobygames.com/38e2a972-abf6-11ed-8949-02420a00012e.webp',
          width: 643,
        },
      ],
    },
    {
      comments: null,
      countries: ['Italy', 'Spain'],
      covers: [
        {
          comments: null,
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/10143414-resident-evil-2-playstation-4-front-cover.jpg',
          scan_of: 'Front Cover',
          thumbnail_image: 'https://cdn.mobygames.com/8853422a-ac0d-11ed-96e1-02420a00012d.webp',
          width: 634,
        },
        {
          comments: null,
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/10143417-resident-evil-2-playstation-4-back-cover.jpg',
          scan_of: 'Back Cover',
          thumbnail_image: 'https://cdn.mobygames.com/88ba8908-ac0d-11ed-96e1-02420a00012d.webp',
          width: 637,
        },
        {
          comments: null,
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/10143420-resident-evil-2-playstation-4-spinesides.jpg',
          scan_of: 'Spine/Sides',
          thumbnail_image: 'https://cdn.mobygames.com/88f68174-ac0d-11ed-96e1-02420a00012d.webp',
          width: 67,
        },
        {
          comments: null,
          description: null,
          height: 800,
          image: 'https://cdn.mobygames.com/covers/10143423-resident-evil-2-playstation-4-media.jpg',
          scan_of: 'Media',
          thumbnail_image: 'https://cdn.mobygames.com/895ecd38-ac0d-11ed-96e1-02420a00012d.webp',
          width: 800,
        },
      ],
    },
  ],
};

// https://api.mobygames.com/v1/games/7151/platforms/16/screenshots?api_key=tori
const screenshots = {
  screenshots: [
    {
      caption: 'The Story',
      height: 224,
      image: 'https://cdn.mobygames.com/screenshots/15986565-judge-dredd-genesis-the-story.png',
      thumbnail_image: 'https://cdn.mobygames.com/5857e968-bf22-11ed-9c42-02420a000140.webp',
      width: 320,
    },
    {
      caption: 'Title',
      height: 224,
      image: 'https://cdn.mobygames.com/screenshots/15986583-judge-dredd-genesis-title.png',
      thumbnail_image: 'https://cdn.mobygames.com/590a2754-bf22-11ed-9c42-02420a000140.webp',
      width: 320,
    },
    {
      caption: 'First mission brief',
      height: 224,
      image: 'https://cdn.mobygames.com/screenshots/15986604-judge-dredd-genesis-first-mission-brief.png',
      thumbnail_image: 'https://cdn.mobygames.com/59e6fee0-bf22-11ed-9c42-02420a000140.webp',
      width: 256,
    },
  ],
};

// https://api.mobygames.com/v1/games/120555/platforms/141?api_key=tori
const platformId = {
  attributes: [
    {
      attribute_category_id: 16,
      attribute_category_name: 'Business Model',
      attribute_id: 124,
      attribute_name: 'Commercial',
    },
    {
      attribute_category_id: 21,
      attribute_category_name: 'Media Type',
      attribute_id: 1095,
      attribute_name: 'Blu-Ray Disc',
    },
  ],
  first_release_date: '2019-01-25',
  game_id: 120555,
  patches: [
    {
      description: '<p>Version 1.01 <small>-- Download: 562.5 MB</small></p>\n<ul>\n<li> Bug fixes</li>\n</ul>',
      release_date: '2019-01-25',
    },
  ],
  platform_id: 141,
  platform_name: 'PlayStation 4',
  ratings: [
    { rating_id: 93, rating_name: 'Mature', rating_system_id: 13, rating_system_name: 'ESRB Rating' },
    { rating_id: 426, rating_name: '18', rating_system_id: 31, rating_system_name: 'PEGI Rating' },
    {
      rating_id: 436,
      rating_name: '18 (keine Jugendfreigabe)',
      rating_system_id: 33,
      rating_system_name: 'USK Rating',
    },
    { rating_id: 2263, rating_name: 'R18+', rating_system_id: 30, rating_system_name: 'ACB Rating' },
  ],
  releases: [
    {
      companies: [
        { company_id: 3955, company_name: 'Capcom Co., Ltd.', role: 'Published by' },
        { company_id: 3955, company_name: 'Capcom Co., Ltd.', role: 'Developed by' },
      ],
      countries: ['Japan'],
      description: 'download release',
      product_codes: [],
      release_date: '2019-01-25',
    },
  ],
};

// https://api.mobygames.com/v1/games/16373/platforms?api_key=tori
const platforms = {
  platforms: [
    { first_release_date: '2006-03-28', platform_id: 3, platform_name: 'Windows' },
    { first_release_date: '2005', platform_id: 7, platform_name: 'PlayStation 2' },
    { first_release_date: '2011-09-20', platform_id: 69, platform_name: 'Xbox 360' },
    { first_release_date: '2011-09-20', platform_id: 81, platform_name: 'PlayStation 3' },
    { first_release_date: '2007-05-31', platform_id: 82, platform_name: 'Wii' },
    { first_release_date: '2015-10-29', platform_id: 132, platform_name: 'Wii U' },
    { first_release_date: '2016-08-30', platform_id: 141, platform_name: 'PlayStation 4' },
    { first_release_date: '2016-08-30', platform_id: 142, platform_name: 'Xbox One' },
    { first_release_date: '2019-05-21', platform_id: 203, platform_name: 'Nintendo Switch' },
  ],
};

// https://api.mobygames.com/v1/games/3695?format=brief&api_key=tori
const gameIdFormat = {
  game_id: 3695,
  moby_url: 'https://www.mobygames.com/game/3695/brave-fencer-musashi/',
  title: 'Brave Fencer Musashi',
};

// https://api.mobygames.com/v1/games/2822?api_key=tori
const gameId = {
  alternate_titles: [],
  description:
    '<p>Three years ago a brilliant scientist disappeared while researching a new form of energy. The government that funded his research wrote the whole affair off as a loss, which made it all the more upsetting when reports of Dr. Kirk\'s good health and nearly finished research came in. A special forces team is sent to the doctor\'s private island laboratory to extract him and his research, but they are totally unprepared for some of the side effects of his developments. Side effects that come from 100 million years in the past.</p>\n<p><em>Dino Crisis</em> is a survival horror game that is very similar in both control and gameplay to its sister series, <a href="https://www.mobygames.com/group/374/biohazard-resident-evil-series/">Resident Evil</a>. As in that series, protagonist Regina will have limited supplies and ammo with which to fight deadly enemies while searching rooms for keys (some figurative, some literal) to open locked areas. Unlike <em>Resident Evil</em> games, Regina will find very few actual supplies laying around, and will instead find "plugs" that are used to open caches of emergency supplies located around the complex. There are only enough plugs to open some of these caches, however, so care must be taken to decide what items are really needed. In another change from <em>Resident Evil</em>, the game is rendered in 3D, allowing the camera to rotate or pan, although camera angles are still out of the control of the player. Even the dumbest dinosaur is smarter than the undead, and enemies can chase and disarm Regina, and even occasionally follow her through doors. Regina can use the force fields in the complex to block her enemies.</p>',
  game_id: 2822,
  genres: [
    { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' },
    { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 4, genre_name: 'Strategy / tactics' },
    { genre_category: 'Perspective', genre_category_id: 2, genre_id: 126, genre_name: '3rd-person (Other)' },
    { genre_category: 'Visual Presentation', genre_category_id: 12, genre_id: 132, genre_name: 'Cinematic camera' },
    { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 102, genre_name: 'Survival horror' },
  ],
  moby_score: 7.7,
  moby_url: 'https://www.mobygames.com/game/2822/dino-crisis/',
  num_votes: 77,
  official_url: null,
  platforms: [
    { first_release_date: '2000', platform_id: 3, platform_name: 'Windows' },
    { first_release_date: '1999', platform_id: 6, platform_name: 'PlayStation' },
    { first_release_date: '2000', platform_id: 8, platform_name: 'Dreamcast' },
    { first_release_date: '2006-12-21', platform_id: 46, platform_name: 'PSP' },
    { first_release_date: '2006-12-21', platform_id: 81, platform_name: 'PlayStation 3' },
    { first_release_date: '2012-08-28', platform_id: 105, platform_name: 'PS Vita' },
  ],
  sample_cover: {
    height: 800,
    image: 'https://cdn.mobygames.com/covers/4094243-dino-crisis-playstation-front-cover.jpg',
    platforms: ['PlayStation'],
    thumbnail_image: 'https://cdn.mobygames.com/9d40a06e-aba5-11ed-9d80-02420a00019a.webp',
    width: 794,
  },
  sample_screenshots: [
    {
      caption: 'Introduction',
      height: 240,
      image: 'https://cdn.mobygames.com/screenshots/15995541-dino-crisis-playstation-introduction.png',
      thumbnail_image: 'https://cdn.mobygames.com/6a1cab8c-bf24-11ed-9c42-02420a000140.webp',
      width: 320,
    },
    {
      caption: 'Costume selection',
      height: 480,
      image: 'https://cdn.mobygames.com/screenshots/334003-dino-crisis-windows-costume-selection.jpg',
      thumbnail_image: 'https://cdn.mobygames.com/47313eb0-ab6c-11ed-ac16-02420a000199.webp',
      width: 640,
    },
    {
      caption: 'Wandering in the shaft',
      height: 480,
      image: 'https://cdn.mobygames.com/screenshots/11817816-dino-crisis-dreamcast-wandering-in-the-shaft.jpg',
      thumbnail_image: 'https://cdn.mobygames.com/e200a106-ac1b-11ed-9f52-02420a000130.webp',
      width: 640,
    },
    {
      caption: 'Helicopter from the intro',
      height: 480,
      image: 'https://cdn.mobygames.com/screenshots/11820030-dino-crisis-dreamcast-helicopter-from-the-intro.jpg',
      thumbnail_image: 'https://cdn.mobygames.com/e233f3a8-ac1b-11ed-9b47-02420a000133.webp',
      width: 640,
    },
    {
      caption: 'Operation Wipe Out - Being attacked by your first target.',
      height: 480,
      image:
        'https://cdn.mobygames.com/screenshots/10561370-dino-crisis-windows-operation-wipe-out-being-attacked-by-your-fi.jpg',
      thumbnail_image: 'https://cdn.mobygames.com/2da36478-ac11-11ed-83c1-02420a000131.webp',
      width: 640,
    },
  ],
  title: 'Dino Crisis',
};

// https://api.mobygames.com/v1/games/recent?format=normal&age=1&api_key=tori
const recentFormatAge = {
  games: [
    {
      alternate_titles: [],
      description:
        "<p><em>Russian Roulette</em> is a game of chance. The player presses 1 to spin the chamber of a six shooter and fire a shot. The player wins if he's not dead after 10 shots.</p>",
      game_id: 106402,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 28, genre_name: 'Gambling' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 130, genre_name: 'Text-based / Spreadsheet' },
        { genre_category: 'Pacing', genre_category_id: 9, genre_id: 106, genre_name: 'Turn-based' },
        { genre_category: 'Interface/Control', genre_category_id: 7, genre_id: 171, genre_name: 'Text parser' },
      ],
      moby_score: null,
      moby_url: 'https://www.mobygames.com/game/106402/russian-roulette/',
      num_votes: 1,
      official_url: null,
      platforms: [
        { first_release_date: '1973', platform_id: 208, platform_name: 'Mainframe' },
        { first_release_date: '1979-01', platform_id: 216, platform_name: 'COSMAC' },
      ],
      sample_cover: null,
      sample_screenshots: [],
      title: 'Russian Roulette',
    },
  ],
};

// https://api.mobygames.com/v1/games/recent?api_key=tori
const recent = { games: [99383, 91091, 106394, 50990, 106393] };

// https://api.mobygames.com/v1/games/random?format=brief&limit=2&api_key=tori
const randomBriefLimit = {
  games: [
    { game_id: 58675, moby_url: 'https://www.mobygames.com/game/58675/forza-horizon/', title: 'Forza Horizon' },
    {
      game_id: 3393,
      moby_url: 'https://www.mobygames.com/game/3393/the-legend-of-zelda/',
      title: 'The Legend of Zelda',
    },
  ],
};

// https://api.mobygames.com/v1/games/random?api_key=tori
const random = {
  games: [58675, 3393, 10816, 15685, 3929],
};

// https://api.mobygames.com/v1/games?platform=15&limit=5&api_key=tori
const gamesPlatformLimit = {
  games: [
    {
      alternate_titles: [
        { description: 'Working title', title: 'Squadron' },
        { description: 'Common abbreviation', title: 'WC1' },
        { description: 'German tag-lined title', title: 'Wing Commander: Der 3D-Raumkampf-Simulator' },
        { description: 'Tag-lined title', title: 'Wing Commander: The 3-D Space Combat Simulator' },
        { description: 'Working title', title: 'Wingleader' },
      ],
      description:
        "<p>The Confederation have been at war with the Kilrathi for the past 20 years, and you're just now joining the Vega campaign. You're a 2nd Lieutenant just out of the Academy, with some good work under your belt. You're posted to Tiger's Claw, the flagship of the Confederation Fleet. Will you help the Confederation to victory, or go down in infamy? </p>\n<p><em>Wing Commander</em> is a space combat simulator interspersed with shipboard dialogs. Onboard the ship, you can save/load game, visit the bar to get the latest gossip, or go on to the next mission briefing, and the 3D space combat part. </p>\n<p>The 3D space combat has you sitting in the cockpit, where you control the craft like roll, turn, up/down, afterburner, as well as fire guns and launch missiles. There are four different crafts on the Confed side, each with different flight characteristics and armament. You will have a wingman on each mission, and you should keep the wingman alive as the wingman will help you if you issue the right orders. You can also taunt the enemy. You'll be fighting several different types of enemy fighters and capital ships, and even combat a few Kilrathi aces. </p>\n<p>When the mission is complete, land back onboard the ship and get ready for the next one. The campaign tree has both winning and losing paths.</p>",
      game_id: 3,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' },
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 3, genre_name: 'Simulation' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 7, genre_name: '1st-person' },
        { genre_category: 'Vehicular Themes', genre_category_id: 11, genre_id: 151, genre_name: 'Space flight' },
        { genre_category: 'Vehicular Themes', genre_category_id: 11, genre_id: 159, genre_name: 'Vehicular combat' },
        { genre_category: 'Setting', genre_category_id: 10, genre_id: 8, genre_name: 'Sci-fi / futuristic' },
      ],
      moby_score: 7.9,
      moby_url: 'https://www.mobygames.com/game/3/wing-commander/',
      num_votes: 199,
      official_url: null,
      platforms: [
        { first_release_date: '1990', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '1992', platform_id: 15, platform_name: 'SNES' },
        { first_release_date: '1992', platform_id: 19, platform_name: 'Amiga' },
        { first_release_date: '1994', platform_id: 20, platform_name: 'SEGA CD' },
        { first_release_date: '1992-12', platform_id: 102, platform_name: 'FM Towns' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/6743023-wing-commander-dos-front-cover.jpg',
        platforms: ['DOS'],
        thumbnail_image: 'https://cdn.mobygames.com/dad1dfd8-abf0-11ed-8a97-02420a00012d.webp',
        width: 560,
      },
      sample_screenshots: [
        {
          caption: 'targeting enemy (EGA)',
          height: 400,
          image: 'https://cdn.mobygames.com/screenshots/1665281-wing-commander-dos-targeting-enemy-ega.png',
          thumbnail_image: 'https://cdn.mobygames.com/22a6bc90-ab77-11ed-aa5a-02420a0001a0.webp',
          width: 640,
        },
        {
          caption: 'in the bar (EGA)',
          height: 400,
          image: 'https://cdn.mobygames.com/screenshots/273001-wing-commander-dos-in-the-bar-ega.png',
          thumbnail_image: 'https://cdn.mobygames.com/bde551d2-ab6b-11ed-837d-02420a00019b.webp',
          width: 640,
        },
        {
          caption: 'Hard action out there !',
          height: 200,
          image: 'https://cdn.mobygames.com/screenshots/15738741-wing-commander-amiga-hard-action-out-there.png',
          thumbnail_image: 'https://cdn.mobygames.com/b4ecec6a-bed6-11ed-9c42-02420a000140.webp',
          width: 320,
        },
        {
          caption: 'Talking to Iceman',
          height: 200,
          image: 'https://cdn.mobygames.com/screenshots/15666506-wing-commander-amiga-talking-to-iceman.png',
          thumbnail_image: 'https://cdn.mobygames.com/0a77dd70-bebe-11ed-9c42-02420a000140.webp',
          width: 320,
        },
        {
          caption: 'Angel',
          height: 200,
          image: 'https://cdn.mobygames.com/screenshots/1664772-wing-commander-dos-angel.png',
          thumbnail_image: 'https://cdn.mobygames.com/2149ab1e-ab77-11ed-a188-02420a00019a.webp',
          width: 320,
        },
      ],
      title: 'Wing Commander',
    },
    {
      alternate_titles: [{ description: 'Informal abbreviation', title: 'PoP 2' }],
      description:
        '<p>After having defeated the evil Grand Vizier Jaffar, the brave Prince claimed just one reward: the hand of the beautiful daughter of the Persian Sultan. However, as the Prince approached the palace, his appearance suddenly turned into that of a beggar. Someone who looked just like the Prince ordered to throw him out. It turns out that Jaffar is alive and back for vengeance. Banished from the palace, the unfortunate Prince must travel to faraway lands and find a way to defeat the villain.</p>\n<p><em>Prince of Persia 2</em> is, like its <a href="https://www.mobygames.com/search/?q=%E3%83%97%E3%83%AA%E3%83%B3%E3%82%B9%E3%82%AA%E3%83%96%E3%83%9A%E3%83%AB%E3%82%B7%E3%83%A3">predecessor</a>, a cinematic platformer. Much of the gameplay is reminiscent of the first game, focusing on precise jumping puzzles, swordfighting, and overcoming many hazards in order to stay alive. Swordfighting is more prominent and features situations where several enemies attack the Prince at once. Reinforcements may arrive after the Prince has eliminated all visible enemies. Like its predecessor, the game must be completed within a time limit.</p>',
      game_id: 78,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 17, genre_name: 'Side view' },
        { genre_category: 'Visual Presentation', genre_category_id: 12, genre_id: 131, genre_name: '2D scrolling' },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 21, genre_name: 'Platform' },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 30, genre_name: 'Puzzle elements' },
        { genre_category: 'Setting', genre_category_id: 10, genre_id: 206, genre_name: 'Middle East' },
      ],
      moby_score: 7.8,
      moby_url: 'https://www.mobygames.com/game/78/prince-of-persia-2-the-shadow-the-flame/',
      num_votes: 111,
      official_url: null,
      platforms: [
        { first_release_date: '1993', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '1996-10', platform_id: 15, platform_name: 'SNES' },
        { first_release_date: '1994', platform_id: 74, platform_name: 'Macintosh' },
        { first_release_date: '1995-01-08', platform_id: 95, platform_name: 'PC-98' },
        { first_release_date: '1994-07', platform_id: 102, platform_name: 'FM Towns' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/5796993-prince-of-persia-2-the-shadow-the-flame-dos-front-cover.jpg',
        platforms: ['DOS'],
        thumbnail_image: 'https://cdn.mobygames.com/4b524f8e-abe9-11ed-8ce3-02420a000131.webp',
        width: 711,
      },
      sample_screenshots: [
        {
          caption: 'A pure cinematic sequence',
          height: 384,
          image:
            'https://cdn.mobygames.com/screenshots/4732162-prince-of-persia-2-the-shadow-the-flame-macintosh-a-pure-cinemat.png',
          thumbnail_image: 'https://cdn.mobygames.com/d2cffd56-abbe-11ed-9377-02420a000197.webp',
          width: 512,
        },
        {
          caption: 'Main menu',
          height: 400,
          image:
            'https://cdn.mobygames.com/screenshots/6190251-prince-of-persia-2-the-shadow-the-flame-pc-98-main-menu.png',
          thumbnail_image: 'https://cdn.mobygames.com/93e49592-abec-11ed-aca6-02420a000132.webp',
          width: 640,
        },
        {
          caption: 'A magic carpet could be useful, but how can the Prince get it animated?...',
          height: 200,
          image:
            'https://cdn.mobygames.com/screenshots/7731016-prince-of-persia-2-the-shadow-the-flame-dos-a-magic-carpet-could.png',
          thumbnail_image: 'https://cdn.mobygames.com/9fb168c6-abf8-11ed-803a-02420a000131.webp',
          width: 320,
        },
        {
          caption: 'Hey you, get off of my... roof!',
          height: 400,
          image:
            'https://cdn.mobygames.com/screenshots/6189109-prince-of-persia-2-the-shadow-the-flame-pc-98-hey-you-get-off-of.png',
          thumbnail_image: 'https://cdn.mobygames.com/93f1d202-abec-11ed-b206-02420a000131.webp',
          width: 640,
        },
        {
          caption: 'From Roof to Roof...',
          height: 200,
          image:
            'https://cdn.mobygames.com/screenshots/2262735-prince-of-persia-2-the-shadow-the-flame-dos-from-roof-to-roof.png',
          thumbnail_image: 'https://cdn.mobygames.com/f9875058-ab7c-11ed-aa5a-02420a0001a0.webp',
          width: 320,
        },
      ],
      title: 'Prince of Persia 2: The Shadow & The Flame',
    },
    {
      alternate_titles: [
        { description: 'Working title', title: 'Ultima VI: Attack of the Blue Meanies' },
        { description: 'Japanese title', title: 'Ultima VI: Itsuwari no Yogensha' },
        { description: 'US SNES title', title: 'Ultima: The False Prophet' },
      ],
      description:
        '<p>Several years after having restored Lord British to his rightful position as the monarch of Britannia, the Avatar is captured by demon-like creatures and placed on a sacrificial altar. His friends Iolo, Shamino and Dupre appear just in time to save him. In the Britannia castle, the Avatar learns that his abductors were gargoyles, a race of enigmatic creatures who have recently invaded Britannia and occupied the shrines of Virtue. As the Avatar embarks on a quest to liberate Britannia, he begins to gain insight into the gargoyles\' true motives, and realizes that it is his duty to achieve peace and understanding between the two races.</p>\n<p><em>Ultima VI</em> is notable for having a fully continuous world. There is no "world map" in the game; all the locations are seamlessly connected to each other, turning the game world into an open environment. Compared to the previous installments in the series, the game focuses more on quests and exploration rather than on combat. The latter no longer involves separate screens; battles occur during exploration, without any transitions. The turn-based system from the previous games has been preserved. </p>\n<p>The interface has been re-designed, the original key-bound commands co-existing with selectable command icons and mouse-based interaction. The game world is more detailed than in the previous games, with a large number of various objects that can be manipulated or added to the inventory. Conversations are more extended, with a wider selection of topics, including many personal ones unique to specific characters. The player is also able to conduct extensive conversations with the Avatar\'s companions, as well as split the party and control the characters separately. Some important topics may be highlighted during text display, to facilitate further dialogue, which requires the player to type the desired conversation topics.</p>\n<p>Like in the predecessors, the player is free to explore the game world from the beginning of the game, and visit locations in any order. Following the main quest and obtaining specific items and information is necessary to complete the story; however, the player can also opt to bypass a large part of it by using previous knowledge of the game or outside help. The FM Towns version has full voice acting for all the conversations, in English and in Japanese.</p>',
      game_id: 104,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 50, genre_name: 'Role-playing (RPG)' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 13, genre_name: 'Top-down' },
        { genre_category: 'Visual Presentation', genre_category_id: 12, genre_id: 131, genre_name: '2D scrolling' },
        { genre_category: 'Pacing', genre_category_id: 9, genre_id: 106, genre_name: 'Turn-based' },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 30, genre_name: 'Puzzle elements' },
        { genre_category: 'Setting', genre_category_id: 10, genre_id: 78, genre_name: 'Fantasy' },
      ],
      moby_score: 7.9,
      moby_url: 'https://www.mobygames.com/game/104/ultima-vi-the-false-prophet/',
      num_votes: 115,
      official_url: null,
      platforms: [
        { first_release_date: '1990', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '2014-06', platform_id: 3, platform_name: 'Windows' },
        { first_release_date: '1992-04-03', platform_id: 15, platform_name: 'SNES' },
        { first_release_date: '1992', platform_id: 19, platform_name: 'Amiga' },
        { first_release_date: '1992', platform_id: 24, platform_name: 'Atari ST' },
        { first_release_date: '1991', platform_id: 27, platform_name: 'Commodore 64' },
        { first_release_date: '1991-11-21', platform_id: 95, platform_name: 'PC-98' },
        { first_release_date: '1991-12', platform_id: 102, platform_name: 'FM Towns' },
        { first_release_date: '1992-06-19', platform_id: 106, platform_name: 'Sharp X68000' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/6575287-ultima-vi-the-false-prophet-dos-front-cover.jpg',
        platforms: ['DOS'],
        thumbnail_image: 'https://cdn.mobygames.com/8c143dd8-abef-11ed-9f52-02420a000130.webp',
        width: 561,
      },
      sample_screenshots: [
        {
          caption: 'Shamino - Ranger, Woodsman, Companion and Friend',
          height: 200,
          image:
            'https://cdn.mobygames.com/screenshots/557321-ultima-vi-the-false-prophet-dos-shamino-ranger-woodsman-companio.png',
          thumbnail_image: 'https://cdn.mobygames.com/0d6b1aa0-ab6e-11ed-9d05-02420a000198.webp',
          width: 320,
        },
        {
          caption: 'Merchant',
          height: 512,
          image: 'https://cdn.mobygames.com/screenshots/15698632-ultima-vi-the-false-prophet-sharp-x68000-merchant.png',
          thumbnail_image: 'https://cdn.mobygames.com/e26a300c-bec8-11ed-9c42-02420a000140.webp',
          width: 768,
        },
        {
          caption: "The initial fight against the gargoyles in Lord British's throne room",
          height: 480,
          image:
            'https://cdn.mobygames.com/screenshots/16730522-ultima-vi-the-false-prophet-fm-towns-the-initial-fight-against-t.png',
          thumbnail_image: 'https://cdn.mobygames.com/3313d760-c2a7-11ed-bae4-02420a0001a1.webp',
          width: 640,
        },
        {
          caption: 'Entering the moon gate.',
          height: 200,
          image:
            'https://cdn.mobygames.com/screenshots/16177669-ultima-vi-the-false-prophet-amiga-entering-the-moon-gate.png',
          thumbnail_image: 'https://cdn.mobygames.com/fbeb0e40-c1c8-11ed-ab6b-02420a000194.webp',
          width: 320,
        },
        {
          caption: 'What the hell...',
          height: 400,
          image: 'https://cdn.mobygames.com/screenshots/5862074-ultima-vi-the-false-prophet-pc-98-what-the-hell.png',
          thumbnail_image: 'https://cdn.mobygames.com/da4a6e2e-abe9-11ed-98b0-02420a000130.webp',
          width: 640,
        },
      ],
      title: 'Ultima VI: The False Prophet',
    },
    {
      alternate_titles: [
        { description: 'Game Boy Color title', title: "Jordan Mechner's Prince of Persia" },
        { description: 'Turkish title', title: 'Pers Prensi' },
        { description: 'Common abbreviation', title: 'PoP' },
        { description: 'French Amstrad title', title: 'Prince de Perse' },
        { description: 'iPhone/iPad title', title: 'Prince of Persia Retro' },
      ],
      description:
        "<p>While the Sultan of Persia is fighting a war in a foreign country, his Grand Vizier Jaffar orchestrates a coup d'état. His way to the throne lies through the Sultan's lovely daughter. Jaffar kidnaps her and threatens to kill her if she refuses to marry him. Meanwhile, the man the Princess loves is thrown into the dungeon. He has only one hour to escape from his prison, defeat the guards on his way, and stop Jaffar before the terrible marriage takes place.</p>\n<p><em>Prince of Persia</em> is a 2D platformer that is commonly regarded as a progenitor of the cinematic platformer genre. Rather than following the more common jump-and-run mechanics, it focuses on careful advancement through fairly complex levels, emphasizing the protagonist's vulnerability and survival aspect. Rotoscoping technique is used to give more realism to the animation of the characters' movements.</p>\n<p>The protagonist must avoid deadly traps, solve some simple jumping and environmental puzzles (such as stepping on pressure plates to raise portcullis), and engage in sword fights with the guards. The player character has an infinite amount of lives, but has to restart at the beginning of a level each time he dies, and must complete the game within an hour. The hero starts with three units of health, which can be replenished with small health potions or permanently increased with large jars.</p>\n<p>The Game Boy Color and SNES versions of the game feature additional levels and new enemies. The Genesis version has a new intro, an altered set of graphics and four new levels.</p>",
      game_id: 196,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 17, genre_name: 'Side view' },
        {
          genre_category: 'Visual Presentation',
          genre_category_id: 12,
          genre_id: 133,
          genre_name: 'Fixed / flip-screen',
        },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 21, genre_name: 'Platform' },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 30, genre_name: 'Puzzle elements' },
        { genre_category: 'Interface/Control', genre_category_id: 7, genre_id: 168, genre_name: 'Direct control' },
        { genre_category: 'Setting', genre_category_id: 10, genre_id: 206, genre_name: 'Middle East' },
        { genre_category: 'Other Attributes', genre_category_id: 6, genre_id: 223, genre_name: 'Regional differences' },
      ],
      moby_score: 8.2,
      moby_url: 'https://www.mobygames.com/game/196/prince-of-persia/',
      num_votes: 524,
      official_url: null,
      platforms: [
        { first_release_date: '1990', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '1992-01', platform_id: 10, platform_name: 'Game Boy' },
        { first_release_date: '1999-04-15', platform_id: 11, platform_name: 'Game Boy Color' },
        { first_release_date: '1992-07-03', platform_id: 15, platform_name: 'SNES' },
        { first_release_date: '1993', platform_id: 16, platform_name: 'Genesis' },
        { first_release_date: '1990', platform_id: 19, platform_name: 'Amiga' },
        { first_release_date: '1992', platform_id: 20, platform_name: 'SEGA CD' },
        { first_release_date: '1992-11', platform_id: 22, platform_name: 'NES' },
        { first_release_date: '1990', platform_id: 24, platform_name: 'Atari ST' },
        { first_release_date: '1992', platform_id: 25, platform_name: 'Game Gear' },
        { first_release_date: '1992', platform_id: 26, platform_name: 'SEGA Master System' },
        { first_release_date: '1989-10-03', platform_id: 31, platform_name: 'Apple II' },
        { first_release_date: '1991-11-08', platform_id: 45, platform_name: 'TurboGrafx CD' },
        { first_release_date: '1990', platform_id: 60, platform_name: 'Amstrad CPC' },
        { first_release_date: '1992', platform_id: 74, platform_name: 'Macintosh' },
        { first_release_date: '2012-01-19', platform_id: 82, platform_name: 'Wii' },
        { first_release_date: '2010-05-28', platform_id: 86, platform_name: 'iPhone' },
        { first_release_date: '1990-07-20', platform_id: 95, platform_name: 'PC-98' },
        { first_release_date: '2010-05-28', platform_id: 96, platform_name: 'iPad' },
        { first_release_date: '2012-01-19', platform_id: 101, platform_name: 'Nintendo 3DS' },
        { first_release_date: '1992-06', platform_id: 102, platform_name: 'FM Towns' },
        { first_release_date: '1991-04-30', platform_id: 106, platform_name: 'Sharp X68000' },
        { first_release_date: '1990', platform_id: 120, platform_name: 'SAM Coupé' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/9482296-prince-of-persia-apple-ii-front-cover.jpg',
        platforms: ['Apple II'],
        thumbnail_image: 'https://cdn.mobygames.com/67a5bf7c-ac07-11ed-af3d-02420a00012f.webp',
        width: 626,
      },
      sample_screenshots: [
        {
          caption: 'The princess awaits our return... (Hercules)',
          height: 576,
          image:
            'https://cdn.mobygames.com/screenshots/16114140-prince-of-persia-dos-the-princess-awaits-our-return-hercules.png',
          thumbnail_image: 'https://cdn.mobygames.com/95c2b4e6-bf76-11ed-9521-02420a000152.webp',
          width: 720,
        },
        {
          caption: 'Opening story',
          height: 270,
          image: 'https://cdn.mobygames.com/screenshots/5633235-prince-of-persia-amstrad-cpc-opening-story.png',
          thumbnail_image: 'https://cdn.mobygames.com/ffbae726-abe7-11ed-887e-02420a00012e.webp',
          width: 384,
        },
        {
          caption: 'Looks like I have taken a wrong step',
          height: 446,
          image:
            'https://cdn.mobygames.com/screenshots/15775119-prince-of-persia-snes-looks-like-i-have-taken-a-wrong-step.png',
          thumbnail_image: 'https://cdn.mobygames.com/83711628-bee2-11ed-9c42-02420a000140.webp',
          width: 512,
        },
        {
          caption: 'Do battle with a green guard',
          height: 224,
          image: 'https://cdn.mobygames.com/screenshots/2107432-prince-of-persia-nes-do-battle-with-a-green-guard.png',
          thumbnail_image: 'https://cdn.mobygames.com/555089d8-ab7b-11ed-8b70-02420a00019a.webp',
          width: 256,
        },
        {
          caption: 'Starting point.',
          height: 200,
          image: 'https://cdn.mobygames.com/screenshots/2262646-prince-of-persia-atari-st-starting-point.png',
          thumbnail_image: 'https://cdn.mobygames.com/f9432702-ab7c-11ed-a188-02420a00019a.webp',
          width: 320,
        },
      ],
      title: 'Prince of Persia',
    },
    {
      alternate_titles: [
        {
          description: 'DOS/Game Boy Color/Genesis tag-lined title',
          title: 'Cannon Fodder: war has never been so much fun',
        },
      ],
      description:
        '<p>Guide a team of up to six soldiers through 72 levels of combat in this top-down action/strategy hybrid, best thought of as <a href="https://www.mobygames.com/search/?q=5016597004326">Lemmings</a> crossed with <a href="https://www.mobygames.com/search/?q=5012189081553">Commando</a> crossed with <a href="https://www.mobygames.com/search/?q=5013715077965">Dune 2</a>. The characters are controlled indirectly using the mouse or joypad, as you activate each soldier or group of them by highlighting them, clicking one button to move them to a particular spot and the another for them to fire guns at an enemy. You can also pick up grenades or rockets, fired by pressing both buttons at once, which can be used to destroy groups of enemies, buildings, or some vehicles.</p>\n<p>Each mission has a specific objective, and some feature vehicles such as tanks that are used to make things easier. Your troops can cross water but can\'t shoot within it, so finding and controlling bridges is often crucial. You can use the arrangement of trees to find hiding places to shoot from and should watch out for CPU soldiers doing the same.</p>',
      game_id: 210,
      genres: [
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' },
        { genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 4, genre_name: 'Strategy / tactics' },
        { genre_category: 'Perspective', genre_category_id: 2, genre_id: 129, genre_name: 'Diagonal-down' },
        { genre_category: 'Visual Presentation', genre_category_id: 12, genre_id: 131, genre_name: '2D scrolling' },
        { genre_category: 'Pacing', genre_category_id: 9, genre_id: 15, genre_name: 'Real-time' },
        { genre_category: 'Gameplay', genre_category_id: 4, genre_id: 225, genre_name: 'Real-time strategy (RTS)' },
        {
          genre_category: 'Interface/Control',
          genre_category_id: 7,
          genre_id: 173,
          genre_name: 'Multiple units/characters control',
        },
        { genre_category: 'Interface/Control', genre_category_id: 7, genre_id: 167, genre_name: 'Point and select' },
      ],
      moby_score: 7.8,
      moby_url: 'https://www.mobygames.com/game/210/cannon-fodder/',
      num_votes: 221,
      official_url: null,
      platforms: [
        { first_release_date: '2015-12-17', platform_id: 1, platform_name: 'Linux' },
        { first_release_date: '1993', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '2009-03-24', platform_id: 3, platform_name: 'Windows' },
        { first_release_date: '2000-12', platform_id: 11, platform_name: 'Game Boy Color' },
        { first_release_date: '1994', platform_id: 15, platform_name: 'SNES' },
        { first_release_date: '1994-12', platform_id: 16, platform_name: 'Genesis' },
        { first_release_date: '1995', platform_id: 17, platform_name: 'Jaguar' },
        { first_release_date: '1993', platform_id: 19, platform_name: 'Amiga' },
        { first_release_date: '1994', platform_id: 24, platform_name: 'Atari ST' },
        { first_release_date: '1994', platform_id: 35, platform_name: '3DO' },
        { first_release_date: '1994', platform_id: 56, platform_name: 'Amiga CD32' },
        { first_release_date: '2004', platform_id: 64, platform_name: 'J2ME' },
        { first_release_date: '2005-11-20', platform_id: 67, platform_name: 'Symbian' },
        { first_release_date: '2013-04-23', platform_id: 74, platform_name: 'Macintosh' },
        { first_release_date: '1994', platform_id: 117, platform_name: 'Acorn 32-bit' },
        { first_release_date: '2019-07-01', platform_id: 286, platform_name: 'Antstream' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/4152738-cannon-fodder-dos-front-cover.jpg',
        platforms: ['DOS'],
        thumbnail_image: 'https://cdn.mobygames.com/b12d82f2-aba7-11ed-b6ec-02420a00019b.webp',
        width: 711,
      },
      sample_screenshots: [
        {
          caption: 'Intro movie',
          height: 144,
          image: 'https://cdn.mobygames.com/screenshots/15901879-cannon-fodder-game-boy-color-intro-movie.png',
          thumbnail_image: 'https://cdn.mobygames.com/fbf27e76-bf09-11ed-9c42-02420a000140.webp',
          width: 160,
        },
        {
          caption: "I'm getting decimated.",
          height: 256,
          image: 'https://cdn.mobygames.com/screenshots/16025292-cannon-fodder-amiga-cd32-im-getting-decimated.png',
          thumbnail_image: 'https://cdn.mobygames.com/dd181232-bf30-11ed-9c42-02420a000140.webp',
          width: 320,
        },
        {
          caption: 'Bring up the map during play if you are lost',
          height: 224,
          image:
            'https://cdn.mobygames.com/screenshots/1559626-cannon-fodder-genesis-bring-up-the-map-during-play-if-you-are-lo.png',
          thumbnail_image: 'https://cdn.mobygames.com/31d46600-ab76-11ed-99ae-02420a00019e.webp',
          width: 320,
        },
        {
          caption: 'Later missions are divided into phases.',
          height: 256,
          image:
            'https://cdn.mobygames.com/screenshots/16025310-cannon-fodder-amiga-cd32-later-missions-are-divided-into-phases.png',
          thumbnail_image: 'https://cdn.mobygames.com/df10bec2-bf30-11ed-9c42-02420a000140.webp',
          width: 320,
        },
        {
          caption: 'Fallen soldiers memorial ',
          height: 144,
          image:
            'https://cdn.mobygames.com/screenshots/15902020-cannon-fodder-game-boy-color-fallen-soldiers-memorial.png',
          thumbnail_image: 'https://cdn.mobygames.com/05dab7be-bf0a-11ed-9c42-02420a000140.webp',
          width: 160,
        },
      ],
      title: 'Cannon Fodder',
    },
  ],
};

// https://api.mobygames.com/v1/games?format=brief&api_key=tori
const gamesFormatBrief = {
  games: [
    { game_id: 47, moby_url: 'https://www.mobygames.com/game/47/zyll/', title: 'Zyll' },
    { game_id: 48, moby_url: 'https://www.mobygames.com/game/48/skate-or-die/', title: 'Skate or Die' },
  ],
};

// https://api.mobygames.com/v1/games?format=id&api_key=tori
const gamesFormatId = {
  games: [1, 2, 3, 4, 5, 6],
};

// https://api.mobygames.com/v1/games?id=101945&id=40017&api_key=tori
const gamesIds = {
  games: [
    {
      alternate_titles: [{ description: 'Japanese title', title: 'Dragon Ball Z Sparking! Meteor' }],
      description:
        '<p><em>Budokai Tenkaichi 3</em> is a 1vs1 fighting game based on the anime/manga Dragon Ball by <a href="https://www.mobygames.com/person/62994/akira-toriyama/">Akira Toriyama</a>. It includes the apocalyptic battles and the essence of the Dragon Ball series following the main story of the popular manga. As in the previous games of the series, you\'ll have to select your character (over 162 characters with their own movements and combos) and fight against a friend or the computer in many different game modes with many different stages and weather/time conditions.</p>\n<p><em>Budokai Tenkaichi 3</em> is the third game of the <a href="https://www.mobygames.com/search/?q=Budokai+Tenkaichi+series">Budokai Tenkaichi series</a> and features some new things like new characters, Battle Replay to capture your fights and save them to a SD card, night and day stages for more accurate battles following the history made by Akira Toriyama and a Disc Fusion to unlock new modes with the need of previously released games <em>Budokai Tenkaichi</em> and <em>Budokai Tenkaichi 2</em>. There are also new combos and movements as well as the possibility to take control of the Giant Apes for the Saiyans.</p>',
      game_id: 40017,
      genres: [{ genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' }],
      moby_score: 7.5,
      moby_url: 'https://www.mobygames.com/game/40017/dragon-ball-z-budokai-tenkaichi-3/',
      num_votes: 14,
      official_url: null,
      platforms: [{ first_release_date: '2007-10-04', platform_id: 7, platform_name: 'PlayStation 2' }],
      sample_cover: {
        height: 800,
        image:
          'https://cdn.mobygames.com/covers/5564015-dragon-ball-z-budokai-tenkaichi-3-playstation-2-front-cover.jpg',
        platforms: ['PlayStation 2'],
        thumbnail_image: 'https://cdn.mobygames.com/74efe722-abe7-11ed-82af-02420a000136.webp',
        width: 565,
      },
      sample_screenshots: [],
      title: 'Dragon Ball Z: Budokai Tenkaichi 3',
    },
    {
      alternate_titles: [],
      description: null,
      game_id: 101945,
      genres: [{ genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' }],
      moby_score: 8.4,
      moby_url: 'https://www.mobygames.com/game/101945/dragon-ball-fighterz/',
      num_votes: 10,
      official_url: 'https://www.bandainamcoent.com/',
      platforms: [{ first_release_date: '2018-01-26', platform_id: 3, platform_name: 'Windows' }],
      sample_cover: {
        height: 215,
        image: 'https://cdn.mobygames.com/covers/1408577-dragon-ball-fighterz-windows-front-cover.jpg',
        platforms: ['Windows'],
        thumbnail_image: 'https://cdn.mobygames.com/dc850962-ab74-11ed-bc1c-02420a00019a.webp',
        width: 460,
      },
      sample_screenshots: [],
      title: 'Dragon Ball FighterZ',
    },
  ],
};

// https://api.mobygames.com/v1/games?api_key=tori
const games = {
  games: [
    {
      alternate_titles: [{ description: 'Finnish title', title: 'Salaiset Kansiot' }],
      description: 'As an extension of one of the most long-running television series of all time',
      game_id: 1,
      genres: [{ genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 2, genre_name: 'Adventure' }],
      moby_score: 7.1,
      moby_url: 'https://www.mobygames.com/game/1/the-x-files-game/',
      num_votes: 55,
      official_url: null,
      platforms: [{ first_release_date: '1998', platform_id: 3, platform_name: 'Windows' }],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/4062982-the-x-files-game-windows-front-cover.jpg',
        platforms: ['Windows', 'Macintosh'],
        thumbnail_image: 'https://cdn.mobygames.com/872aed6c-aba4-11ed-a188-02420a00019a.webp',
        width: 690,
      },
      sample_screenshots: [
        {
          caption:
            'What you see of Mulder and Scully will mostly be in the intro until very late in the game when you actually get a chance to talk to them.',
          height: 576,
          image:
            'https://cdn.mobygames.com/screenshots/10470745-the-x-files-game-playstation-what-you-see-of-mulder-and-scully-w.jpg',
          thumbnail_image: 'https://cdn.mobygames.com/6d9e6b00-ac10-11ed-803a-02420a000131.webp',
          width: 720,
        },
      ],
      title: 'The X-Files Game',
    },
    {
      alternate_titles: [],
      description:
        "<p>Roger Rabbit has been framed for the murder of Marvin Acme, head of the Acme Corporation. Acme's will states that upon his death, Toon Town would be left ot the Toons, but the will is nowhere to be found. You have to find the will and save your wife, Jessica, from Judge Doom and his weasels.</p>\n<p>The game takes place in Hollywood, 1947, where Toons are alive. There are 4 levels in the game, 2 of which are driving levels (levels 1 &amp; 3). Roger and Benny the cab have to beat the weasels to the destination, while dodging cars, trams and Judge Doom's dip which is scattered on the road. There are pick-ups to help you on your way.</p>\n<p>Level 2 is the Ink &amp; Paint Club. The will is on one of the tables. Roger has to pick up all the pieces of paper the penguin waiters put down, whilst avoiding the alcohol and gorilla bouncer.</p>\n<p>Level 4 has you in Judge Doom's warehouse trying to save your wife, Jessica from the dip truck. You have to use gags to progress and make the weasels laugh themselves to death, literally!</p>",
      game_id: 2,
      genres: [{ genre_category: 'Basic Genres', genre_category_id: 1, genre_id: 1, genre_name: 'Action' }],
      moby_score: 5.9,
      moby_url: 'https://www.mobygames.com/game/2/who-framed-roger-rabbit/',
      num_votes: 34,
      official_url: null,
      platforms: [
        { first_release_date: '1988', platform_id: 2, platform_name: 'DOS' },
        { first_release_date: '1988', platform_id: 19, platform_name: 'Amiga' },
      ],
      sample_cover: {
        height: 800,
        image: 'https://cdn.mobygames.com/covers/6287649-who-framed-roger-rabbit-dos-front-cover.jpg',
        platforms: ['DOS'],
        thumbnail_image: 'https://cdn.mobygames.com/4efec046-abed-11ed-8d2f-02420a00012e.webp',
        width: 534,
      },
      sample_screenshots: [
        {
          caption: "But don't let the Waiter catch you. (CGA)",
          height: 200,
          image:
            'https://cdn.mobygames.com/screenshots/7288598-who-framed-roger-rabbit-dos-but-dont-let-the-waiter-catch-you-cg.png',
          thumbnail_image: 'https://cdn.mobygames.com/272f1ce8-abf5-11ed-92cb-02420a000132.webp',
          width: 320,
        },
      ],
      title: 'Who Framed Roger Rabbit',
    },
  ],
};

// https://api.mobygames.com/v1/games?api_key=bad
const badRequest = {
  code: 6,
  error: 'Error parsing parameters',
  message:
    'An unspecified error was encountered parsing query parameters. Ensure that all parameter values are of valid types.',
};

export function gamesPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api.mobygames.com/v1/games/120555/platforms/141/covers?api_key=tori':
      return HttpResponse.json(covers);
    case 'https://api.mobygames.com/v1/games/7151/platforms/16/screenshots?api_key=tori':
      return HttpResponse.json(screenshots);
    case 'https://api.mobygames.com/v1/games/120555/platforms/141?api_key=tori':
      return HttpResponse.json(platformId);
    case 'https://api.mobygames.com/v1/games/16373/platforms?api_key=tori':
      return HttpResponse.json(platforms);
    case 'https://api.mobygames.com/v1/games/3695?format=brief&api_key=tori':
      return HttpResponse.json(gameIdFormat);
    case 'https://api.mobygames.com/v1/games/2822?api_key=tori':
      return HttpResponse.json(gameId);
    case 'https://api.mobygames.com/v1/games/recent?format=normal&age=1&api_key=tori':
      return HttpResponse.json(recentFormatAge);
    case 'https://api.mobygames.com/v1/games/recent?api_key=tori':
      return HttpResponse.json(recent);
    case 'https://api.mobygames.com/v1/games/random?format=brief&limit=2&api_key=tori':
      return HttpResponse.json(randomBriefLimit);
    case 'https://api.mobygames.com/v1/games/random?api_key=tori':
      return HttpResponse.json(random);
    case 'https://api.mobygames.com/v1/games?platform=15&limit=5&api_key=tori':
      return HttpResponse.json(gamesPlatformLimit);
    case 'https://api.mobygames.com/v1/games?id=101945&id=40017&api_key=tori':
      return HttpResponse.json(gamesIds);
    case 'https://api.mobygames.com/v1/games?format=brief&api_key=tori':
      return HttpResponse.json(gamesFormatBrief);
    case 'https://api.mobygames.com/v1/games?format=id&api_key=tori':
      return HttpResponse.json(gamesFormatId);
    case 'https://api.mobygames.com/v1/games?api_key=tori':
      return HttpResponse.json(games);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
