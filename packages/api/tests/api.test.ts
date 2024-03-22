import { MobyGames } from '../src/index.js';

describe('MobyGames constructor api key validation tests', () => {
  it('throws an error if no api key is provided', () => {
    expect(
      // @ts-expect-error: Expected api argument.
      () => new MobyGames()
    ).toThrow('api key is required');
  });

  it('throws an error if an empty string is provided', () => {
    expect(() => new MobyGames('')).toThrow('api key is required');
  });

  it('throws error when non-string api key is provided', () => {
    expect(
      // @ts-expect-error: Argument of type 'number' is not assignable to parameter of type 'string'.
      () => new MobyGames(1234)
    ).toThrow('api key is required');
  });

  it('creates an instance when a valid api key is provided', () => {
    expect(() => new MobyGames('fakeApi')).not.toThrow();
  });
});

describe('updateApiKey()', () => {
  it('should update the api key', () => {
    const client = new MobyGames('phase');

    // @ts-expect-error: Property 'key' is private and only accessible within class 'MobyGames'.ts(2341)
    expect(client.key).toBe('phase');

    client.updateApiKey = 'untidy';

    // @ts-expect-error: Property 'key' is private and only accessible within class 'MobyGames'.ts(2341)
    expect(client.key).toBe('untidy');
  });
});
