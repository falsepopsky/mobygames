import { HttpResponse } from 'msw';

// https://api.mobygames.com/v1/genres?api_key=tori
const genres = {
  genres: [
    {
      genre_category: 'Basic Genres',
      genre_category_id: 1,
      genre_description: '<p>Action games main mechanics revolve around one or more of the following:</p>',
      genre_id: 1,
      genre_name: 'Action',
    },
    {
      genre_category: 'Basic Genres',
      genre_category_id: 1,
      genre_description:
        'Add-ons, expansion packs or downloadable content (DLC) are additional content created for a released video game.',
      genre_id: 62,
      genre_name: 'Add-on',
    },
  ],
};

// https://api.mobygames.com/v1/genres?api_key=bad
const badRequest = {
  genres: null,
};

export function genresPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api.mobygames.com/v1/genres?api_key=tori':
      return HttpResponse.json(genres);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
