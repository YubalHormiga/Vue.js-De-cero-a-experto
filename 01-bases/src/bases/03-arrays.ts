export const numberArray = [1, 2, 3, 4, 5];

numberArray.push(6);

const numberArrray2 = [...numberArray];
numberArrray2.push(7);
console.log({numberArray, numberArrray2});
