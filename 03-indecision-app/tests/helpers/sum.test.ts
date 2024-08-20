// sum.test.js
import { expect, test } from 'vitest';
import { sum } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  //Preparación
  const a = 1;
  const b = 2;

  //Estimulo
  const result = sum(a, b);
  //Comportamiento esperado
  expect(result).toBe(a + b);
  // expect(sum(1, 2)).toBe(3);
});
