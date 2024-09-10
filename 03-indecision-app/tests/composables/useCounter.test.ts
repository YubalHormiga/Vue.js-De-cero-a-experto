import { useCounter } from '@/composable/useCounter';
import { describe, expect, it } from 'vitest';

describe('useCounter', () => {
  it('debería tener un valor inicila de contador de 5', () => {
    const { counter } = useCounter();

    expect(counter.value).toBe(5);
  });
  it('debería calcular correctamente el cuadrado del contador', () => {
    const { squareCounter } = useCounter();
    expect(squareCounter.value).toBe(25);
  });
  it('debería decrementar el valor del contador', () => {
    const { decrement, counter } = useCounter();
    decrement();
    expect(counter.value).toBe(4);
  });
  it('debería recalcular correctamente el cuadrado del contador después de decrementar', () => {
    const { decrement, squareCounter } = useCounter();
    decrement();
    expect(squareCounter.value).toBe(16);
  });
  it('debería decrementar correctamente al hacer múltiples decrementos', () => {
    const { counter, decrement } = useCounter();
    decrement();
    decrement();
    expect(counter.value).toBe(3); // 5 - 2 = 3
  });
});
