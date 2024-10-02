<script lang="ts" setup>
import type { Pokemon } from '../interfaces';

interface Props {
  randomPokemon: Pokemon;
  showPokemon: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showPokemon: false,
});
</script>

<template>
  <section>
    <img
      v-if="!showPokemon"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.randomPokemon.id}.svg`"
      alt="imagen"
      class="brightness-0 h-[200px]"
    />
    <img
      v-else
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.randomPokemon.id}.svg`"
      alt="imagen"
      class="fade-in h-[200px]"
    />
  </section>
</template>
<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
