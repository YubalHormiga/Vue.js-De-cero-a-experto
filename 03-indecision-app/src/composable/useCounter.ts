import { ref, computed, defineProps } from 'vue';
export function useCounter() {
  interface Props {
    value: number;
  }
  const props = defineProps<Props>();

  const counter = ref(5);
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
}
