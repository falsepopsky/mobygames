import { MobyGames } from '../src/index.js';

const client = new MobyGames('tori');

describe('groups()', () => {
  it('returns a successful response without queries', async () => {
    const { groups } = await client.groups();

    expect(Array.isArray(groups)).toBe(true);
    expect(groups).toHaveLength(2);
    expect(groups[0]?.group_id).toBe(1);
    expect(groups[0]?.group_name).toBe('Monkey Island series');
    expect(groups[0]?.group_description).toBe(
      'Monkey Island is a series of comedy adventure games set in fictional 18th century-like Caribbean Islands, telling the story of the young wannabe-pirate Guybrush Threepwood.'
    );
    expect(groups[1]?.group_id).toBe(2);
    expect(groups[1]?.group_name).toBe('Inspiration: Author - H. P. Lovecraft');
    expect(groups[1]?.group_description).toBe('Games based on the writings of H. P. Lovecraft.');
  });

  it('returns a successful response with limit and offset params', async () => {
    const { groups } = await client.groups({ limit: '30', offset: '30' });

    expect(Array.isArray(groups)).toBe(true);
    expect(groups).toHaveLength(2);
    expect(groups[0]?.group_id).toBe(32);
    expect(groups[0]?.group_name).toBe('Commander Keen series');
    expect(groups[0]?.group_description).toBe('Commander Keen is a series of platform games developed by id Software.');
    expect(groups[1]?.group_id).toBe(33);
    expect(groups[1]?.group_name).toBe('Master of Orion series');
    expect(groups[1]?.group_description).toBe(
      'Simtex / Quicksilver sci-fi 4X game series dealing with the spread and security of various competing alien races in a finite cosmos.'
    );
  });
});
