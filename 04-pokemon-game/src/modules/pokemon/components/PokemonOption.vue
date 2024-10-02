<script lang="ts" setup>
import type { Pokemon } from '../interfaces';

interface Props {
  pokemonsOptions: Pokemon[];
  blockSelection: boolean;
  selectedPokemonId: number | null;
}
interface Emits {
  [event: string]: [{ id: number }];
  selectedOption: [{ id: number }];
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <section v-for="pokemon in pokemonsOptions" :key="pokemon.id">
    <button
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-600',
        {
          correct: pokemon.id === selectedPokemonId && blockSelection,
          incorrect: pokemon.id !== selectedPokemonId && blockSelection,
        },
      ]"
      @click="$emit('selectedOption', { id: pokemon.id })"
      :disabled="blockSelection"
    >
      {{ pokemon.name }}
    </button>
  </section>
</template>
<style scoped>
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
.correct {
  @apply bg-blue-500 text-white;
}
.incorrect {
  @apply bg-red-500 opacity-70;
}
</style>
