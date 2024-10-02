import type { Pokemon } from '@/modules/pokemon/interfaces';

// Creamos un objeto que debería cumplir con la interfaz Pokemon
const validPokemon: Pokemon = {
  id: 1,
  name: 'Bulbasaur',
};

// También podríamos probar con un objeto inválido
const invalidPokemon = {
  id: 'one', // Error: este debería ser un número
  name: 123, // Error: este debería ser una cadena
};

describe('Pokemon Interface', () => {
  it('Debería dar un id tipo number', () => {
    expect(typeof validPokemon.id).toBe('number');
  });
  it('Debería dar un id tipo string', () => {
    expect(typeof validPokemon.name).toBe('string');
  });
  it('Debería fallar si el  id no es un número', () => {
    expect(typeof invalidPokemon.id).not.toBe('number');
  });
  it('Deberia fallar si el tipo de name no es un strings', () => {
    expect(typeof invalidPokemon.name).not.toBe('string');
  });
});
