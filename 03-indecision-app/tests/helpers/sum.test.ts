// sum.test.js
import { expect, test, describe, it } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  //Preparación
  const a = 1;
  const b = 2;

  //Estimulo
  const result = sum(a, b);
  //Comportamiento esperado
  expect(result).toBe(a + b);
  // expect(sum(1, 2)).toBe(3);
  expect(result).toBe(3);
});

describe('addArray', () => {
  it('should return the sum of all elements in the array plus the initial value'),
    () => {
      const result = addArray([1, 2, 3, 4]);
      expect(result).toBe(11);
    };
  it('should return the initial value for an empty array', () => {
    const result = addArray([]);
    expect(result).toBe(1);
  });
  it('should return the correct sum when a different initial value is provided', () => {
    const result = addArray([1, 2, 3, 4], 2);
    expect(result).toBe(12);
  });
});
