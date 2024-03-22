import { http, type HttpHandler } from 'msw';
import { gamesPaths } from './games.js';
import { genresPaths } from './genres.js';
import { groupsPaths } from './groups.js';
import { platformsPaths } from './platforms.js';

export const handlers: HttpHandler[] = [
  http.get<never>('https://api.mobygames.com/*', ({ request }) => {
    const url = new URL(request.url);
    const pathname = url.pathname;

    switch (true) {
      case pathname.startsWith('/v1/games'):
        return gamesPaths(url);
      case pathname.startsWith('/v1/genres'):
        return genresPaths(url);
      case pathname.startsWith('/v1/groups'):
        return groupsPaths(url);
      case pathname.startsWith('/v1/platforms'):
        return platformsPaths(url);
      default:
        throw new Error(`Path "${pathname}" is not handled`);
    }
  }),
];
