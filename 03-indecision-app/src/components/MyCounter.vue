<script lang="ts" setup>
import { useCounter } from '@/composable/useCounter';

const { counter, squareCounter, decrement } = useCounter();
// import { computed, ref } from 'vue';

// const props = defineProps({
//   value: {
//     type: Number,
//     required: true,
//   },
// });
// const props = defineProps<{
//   value: number;
// }>();
// const props = defineProps<{
//   value: number;
// }>();

// interface Props {
//   value: number;
// }
// const props = defineProps<Props>();

// const counter = ref(props.value);

// const squareCounter = computed(() => {
//   return counter.value * counter.value;
// });

// const decrement = () => {
//   return counter.value--;
// };
</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter++" class="p-1 m-4 bg-cyan-300 rounded-sm">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
