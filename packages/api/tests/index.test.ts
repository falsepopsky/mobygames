import { describe, expect, it } from 'vitest';
import { createContext } from '../src/index.js';

describe('context function', () => {
  const context = createContext({ monster: 'Black Magician' });

  it('should return Black magician monster', () => {
    const name = context.getState();

    expect(name.monster).toBe('Black Magician');
    expect(name).not.toBe('Blue Eyes White Dragon');
  });

  it('should change the name monster', () => {
    context.setState({ monster: 'Blue Eyes White Dragon' });
    const name = context.getState();

    expect(name.monster).toBe('Blue Eyes White Dragon');
    expect(name.monster).not.toBe('Black Magician');
  });
});
