const character = ["Guns", "Vegeta", "Goten", "Trunks"];

const [, , , t] = character;
console.log(t);

const returnsArray = () => {
  return [123, "ABC"] as const;
};

const [numbers, letters] = returnsArray();
console.log( numbers.toExponential(2), letters.toLocaleLowerCase() );
