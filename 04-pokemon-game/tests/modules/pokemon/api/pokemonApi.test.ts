import { pokemonApi } from '@pokemon/api/pokemonApi';
import MockAdapter from 'axios-mock-adapter';

//Creamos el mok
const mock = new MockAdapter(pokemonApi);
describe('pokemonApid', () => {
  afterEach(() => {
    mock.reset();
  });
  it('should be configured as expected', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });

  it('Debría hacer un petición Get y obtener un pokemon', async () => {
    // Datos falsos para la respuesta de la API
    const mockData = { name: 'pikachu', id: 1 };
    // Configurar el mock para la petición GET
    mock.onGet('/pikachu').reply(200, mockData);
    // Realizar la solicitud
    const response = await pokemonApi.get('/pikachu');
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ name: 'pikachu', id: 1 });
  });
  it('Debería manejar errores cuando la Api devuelva un error', async () => {
    // Configurar el mock para que devuelva un error 404
    mock.onGet('/missing').reply(404);

    try {
      // Intentar obtener un Pokémon inexistente
      await pokemonApi.get('/missing');
    } catch (error: any) {
      // Verificar que el código de error es 404
      expect(error.response.status).toBe(404);
    }
  });
});
