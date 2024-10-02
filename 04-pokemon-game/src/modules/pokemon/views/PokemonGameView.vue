<script lang="ts" setup>
import PokemonOption from '../components/PokemonOption.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';
const { isLoading, randomPokemon, gameStatus, pokemonsOptions, checkAnswer, getNextRound } =
  usePokemonGame();
</script>

<template>
  <section
    v-if="isLoading || randomPokemon.id == null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-bounce">Cargando Pokémons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">Quién es este Pókemon?</h1>
    <button
      v-if="gameStatus !== GameStatus.Playing"
      v-on:click="getNextRound(4)"
      class="mb-5 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400"
    >
      ¿Nuevo Juego?
    </button>
    <!-- Pokemon picture -->
    <PokemonPicture
      :randomPokemon="randomPokemon"
      :showPokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- Pokemon option -->
    <PokemonOption
      :pokemonsOptions="pokemonsOptions"
      @selectedOption="checkAnswer"
      :blockSelection="gameStatus !== GameStatus.Playing"
      :selectedPokemonId="randomPokemon.id"
    />
  </section>
</template>
<style scoped></style>
