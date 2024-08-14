<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  setup(props) {
    const counter = ref(props.value);

    const squareCounter = computed(() => {
      return counter.value * counter.value;
    });
    const decrement = () => {
      return counter.value--;
    };
    return {
      counter,
      squareCounter,
      decrement,
    };
  },
});

// import { computed, ref } from 'vue';

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
      <button @click="counter++">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </section>
</template>
<style scoped>
h1 {
  color: red;
}
</style>
