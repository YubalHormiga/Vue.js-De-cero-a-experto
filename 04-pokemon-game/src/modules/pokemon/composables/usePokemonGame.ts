import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]);
  const pokemonsOptions = ref<Pokemon[]>([]);

  const isLoading = computed(() => {
    return pokemons.value.length === 0;
  });

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex];
  });

  const getPokemons = async (): Promise<Pokemon[]> => {
    const { data } = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonArray = data.results.map((pokemon) => {
      // Extract ID as a number
      const id = pokemon.url.split('/').at(-2) ?? 0;

      return {
        name: pokemon.name,
        id: +id,
      };
    });

    // Shuffle the array randomly
    pokemonArray.sort(() => Math.random() - 0.5);

    return pokemonArray;
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonsOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (value: { id: number }) => {
    const hasWon = randomPokemon.value.id === value.id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000));
    pokemons.value = await getPokemons();
    getNextRound();
    // console.log({ pokemons });
    // console.log(randomPokemon.value[0]);
    // console.log(pokemonsOptions.value);
  });
  return {
    gameStatus,
    getPokemons,
    pokemonsOptions,
    isLoading,
    getNextRound,
    randomPokemon,
    checkAnswer,
  };
};
