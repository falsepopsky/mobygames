import { MobyGames } from '../src/index.js';

const client = new MobyGames('tori');

describe('genres()', () => {
  it('returns a successful response', async () => {
    const { genres } = await client.genres();

    expect(Array.isArray(genres)).toBe(true);
    expect(genres).toHaveLength(2);
    expect(genres[0]?.genre_category_id).toBe(1);
    expect(genres[0]?.genre_category).toBe('Basic Genres');
    expect(genres[1]?.genre_description).toBe(
      'Add-ons, expansion packs or downloadable content (DLC) are additional content created for a released video game.'
    );
    expect(genres[1]?.genre_id).toBe(62);
    expect(genres[1]?.genre_name).toBe('Add-on');
  });
});
