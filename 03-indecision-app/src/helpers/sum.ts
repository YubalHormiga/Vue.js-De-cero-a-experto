// sum.js
export function sum(a: number, b: number) {
  return a + b;
}

export const addArray = (arr: number[], initial: number = 1): number => {
  return arr.reduce((acc, curr) => acc + curr, initial);
};
