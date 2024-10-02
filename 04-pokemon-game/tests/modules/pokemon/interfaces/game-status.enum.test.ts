import { GameStatus } from '@/modules/pokemon/interfaces';

describe('GameStauts Enum', () => {
  it('Deberia tener un valor correcto para Playing', () => {
    expect(GameStatus.Playing).toBe('playing');
  });
  it('Deberia tener un valor válido Won', () => {
    expect(GameStatus.Won).toBe('won');
  });
  it('Deberia tener un valor válido Lost', () => {
    expect(GameStatus.Lost).toBe('lost');
  });
});
