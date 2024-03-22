import { MobyGames } from '../src/index.js';

const client = new MobyGames('tori');

describe('platforms()', () => {
  it('returns a successful response', async () => {
    const { platforms } = await client.platforms();

    expect(Array.isArray(platforms)).toBe(true);
    expect(platforms).toHaveLength(5);
    expect(platforms[0]?.platform_id).toBe(253);
    expect(platforms[0]?.platform_name).toBe('1292 Advanced Programmable Video System');
    expect(platforms[4]?.platform_id).toBe(117);
    expect(platforms[4]?.platform_name).toBe('Acorn 32-bit');
  });
});
