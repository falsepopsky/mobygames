import { URL } from 'node:url';

export interface Genre {
  genre_category: string;
  genre_category_id: number;
  genre_description: string;
  genre_id: number;
  genre_name: string;
}

export interface Group {
  group_description: string | null;
  group_id: number;
  group_name: string;
}

export interface GameBrief {
  game_id: number;
  moby_url: string;
  title: string;
}

export interface GameNormal {
  alternate_titles: {
    description: string;
    title: string;
  }[];
  description: string;
  game_id: number;
  genres: Omit<Genre, 'genre_description'>[];
  moby_score: number | null;
  moby_url: string;
  num_votes: number;
  official_url: string | null;
  platforms: Platform[];
  sample_cover: {
    height: number;
    image: string;
    platforms: string[] | null[];
    thumbnail_image: string;
    width: number;
  };
  sample_screenshots: Screenshoot[] | null[];
  title: string;
}

export interface GamesType<T> {
  games: T[];
}

export interface Platform {
  first_release_date: string;
  platform_id: number;
  platform_name: string;
}

export interface Screenshoot {
  caption: string;
  height: number;
  image: string;
  thumbnail_image: string;
  width: number;
}

export interface QueriesBase {
  limit?: string;
  offset?: string;
  format?: 'normal' | 'brief' | 'id';
}

export type QueriesGroups = Omit<QueriesBase, 'format'>;

export interface QueriesGames extends QueriesBase {
  id?: string | string[];
  platform?: string | string[];
  genre?: string | string[];
  group?: string | string[];
  title?: string;
}

export interface QueriesGamesRecent extends QueriesBase {
  age?: string;
}

export type QueriesRandom = Omit<QueriesBase, 'offset'>;

export type QueriesGameById = Omit<QueriesBase, 'limit' | 'offset'>;

export interface GetGenres {
  genres: Genre[];
}

export interface GetGroups {
  groups: Group[];
}

export interface GetPlatforms {
  platforms: Omit<Platform, 'first_release_date'>[];
}

export type GetGames<Q extends QueriesGames> = Q['format'] extends 'normal'
  ? GamesType<GameNormal>
  : Q['format'] extends 'brief'
    ? GamesType<GameBrief>
    : Q['format'] extends 'id'
      ? GamesType<number>
      : GamesType<GameNormal>;

export type GetGamesRecent<Q extends QueriesGamesRecent> = Q['format'] extends 'normal'
  ? GamesType<GameNormal>
  : Q['format'] extends 'brief'
    ? GamesType<GameBrief>
    : Q['format'] extends 'id'
      ? GamesType<number>
      : GamesType<number>;

export type GetGamesRandom<Q extends QueriesRandom> = Q['format'] extends 'normal'
  ? GamesType<GameNormal>
  : Q['format'] extends 'brief'
    ? GamesType<GameBrief>
    : Q['format'] extends 'id'
      ? GamesType<number>
      : GamesType<number>;

export type GetGameById<Q extends QueriesGameById> = Q['format'] extends 'normal'
  ? GameNormal
  : Q['format'] extends 'brief'
    ? GameBrief
    : Q['format'] extends 'id'
      ? GamesType<number>
      : GameNormal;

export interface GetGamePlatforms {
  platforms: Platform[];
}

export interface GetGamePlatformById {
  attributes: {
    attribute_category_id: number;
    attribute_category_name: string;
    attribute_id: number;
    attribute_name: string;
  }[];
  first_release_date: string;
  game_id: number;
  patches: Record<'description' | 'release_date', string>[] | null[];
  platform_id: number;
  platform_name: string;
  ratings:
    | {
        rating_id: number;
        rating_name: string;
        rating_system_id: number;
        rating_system_name: string;
      }[]
    | null[];
  releases: {
    companies: {
      company_id: number;
      company_name: string;
      role: string;
    }[];
    countries: string[];
    description: string | null;
    product_codes:
      | {
          product_code: string;
          product_code_type: string;
          product_code_type_id: number;
        }[]
      | null[];
    release_date: string;
  }[];
}

export interface GetGamePlatformScreenshots {
  screenshots: Screenshoot[];
}

export interface GetGamePlatformCovers {
  cover_groups: {
    comments: string | null;
    countries: string;
    covers: {
      comments: string | null;
      description: string | null;
      height: number;
      image: string;
      scan_of: string;
      thumbnail_image: string;
      width: number;
    }[];
  }[];
}

/**
 * Client library for MobyGames API in Node.js
 */
export class MobyGames {
  private readonly api = 'https://api.mobygames.com';
  private key: string;

  /**
   * @param key Api key for subsequent API calls.
   */
  constructor(key: string) {
    if (typeof key !== 'string' || key.length === 0) {
      throw new Error('api key is required');
    }
    this.key = key;
  }

  /**
   * @param url The URL target.
   * @returns A promise with the fetching data.
   * @throws Will throw an error if `response.ok` is false.
   */
  protected async fetcher<T>(url: string | URL): Promise<T> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      const status = response.status;
      const json = await response.json();
      throw new RangeError(`HTTP response status ${status} from MobyGames API.`, {
        cause: {
          status,
          json,
        },
      });
    }

    return (await response.json()) as T;
  }

  /**
   * @param key The new Api key for making API calls.
   */
  set updateApiKey(key: string) {
    this.key = key;
  }

  /**
   * @param paths paths for the URL.
   * @param queries The object with search parameters.
   * @returns The URL with queries applied.
   */
  protected createQuery(paths: string, queries?: object): string {
    const url = new URL(`/v1/${paths}`, this.api);

    if (typeof queries === 'object') {
      for (const [key, value] of Object.entries(queries)) {
        if (Array.isArray(value)) {
          value.forEach((item: string) => {
            url.searchParams.append(key, item);
          });
        }

        if (typeof value === 'string' && value.length >= 1) {
          url.searchParams.set(key, value);
        }
      }
    }

    url.searchParams.set('api_key', this.key);
    return url.href;
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of games records.
   */
  public async games<Q extends QueriesGames>(queries?: Q): Promise<GetGames<Q>> {
    const target = this.createQuery('games', queries);
    return await this.fetcher<GetGames<Q>>(target);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of random games records.
   */
  public async gamesRandom<Q extends QueriesRandom>(queries?: Q): Promise<GetGamesRandom<Q>> {
    const target = this.createQuery('games/random', queries);
    return await this.fetcher<GetGamesRandom<Q>>(target);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of games records that have been modified recently.
   */
  public async gamesRecent<Q extends QueriesGamesRecent>(queries?: Q): Promise<GetGamesRecent<Q>> {
    const target = this.createQuery('games/recent', queries);
    return await this.fetcher<GetGamesRecent<Q>>(target);
  }

  /**
   * @param id The game `id`
   * @param queries An object containing query parameters to restrict the result.
   * @returns Single game information record.
   */
  public async gameById<Q extends QueriesGameById>(id: string, queries?: Q): Promise<GetGameById<Q>> {
    const target = this.createQuery(`games/${id}`, queries);
    return await this.fetcher<GetGameById<Q>>(target);
  }

  /**
   * @param id The game `id`
   * @returns A list of platforms records for which a game was released.
   */
  public async gamePlatforms(id: string): Promise<GetGamePlatforms> {
    const target = this.createQuery(`games/${id}/platforms`);
    return await this.fetcher<GetGamePlatforms>(target);
  }

  /**
   * @param gameId The game `id`
   * @param platformId The platform `id`
   * @returns Single game information on the specified platform.
   */
  public async gamePlatformById(gameId: string, platformId: string): Promise<GetGamePlatformById> {
    const target = this.createQuery(`games/${gameId}/platforms/${platformId}`);
    return await this.fetcher<GetGamePlatformById>(target);
  }

  /**
   * @param gameId The game `id`
   * @param platformId The platform `id`
   * @returns A list of screenshots records on the specified game and platform.
   */
  public async gamePlatformScreenshots(gameId: string, platformId: string): Promise<GetGamePlatformScreenshots> {
    const target = this.createQuery(`games/${gameId}/platforms/${platformId}/screenshots`);
    return await this.fetcher<GetGamePlatformScreenshots>(target);
  }

  /**
   * @param gameId The game `id`
   * @param platformId The platform `id`
   * @returns A list of covers records on the specified game and platform.
   */
  public async gamePlatformCovers(gameId: string, platformId: string): Promise<GetGamePlatformCovers> {
    const target = this.createQuery(`games/${gameId}/platforms/${platformId}/covers`);
    return await this.fetcher<GetGamePlatformCovers>(target);
  }

  /**
   * @returns A list of genres records.
   */
  public async genres(): Promise<GetGenres> {
    const target = this.createQuery('genres');
    return await this.fetcher<GetGenres>(target);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of groups records.
   */
  public async groups(queries?: QueriesGroups): Promise<GetGroups> {
    const target = this.createQuery('groups', queries);
    return await this.fetcher<GetGroups>(target);
  }

  /**
   * @returns A list of platforms records.
   */
  public async platforms(): Promise<GetPlatforms> {
    const target = this.createQuery('platforms');
    return await this.fetcher<GetPlatforms>(target);
  }
}
