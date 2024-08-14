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
