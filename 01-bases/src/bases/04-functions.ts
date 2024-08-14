// function greetPerson(name: string){
//     return  `Hola, ${name}`
// }

// const greetPerson = (name: string)=>{
//  return  `Hola, ${name}`
// }
const greetPerson = (name: string) => `Hola, ${name}`;

// const getUser = () => {
//   return {
//     uid: "ABC-123",
//     userName: "Tony01",
//   };
// };
const getUser = (uid: string) => ({
  uid: uid,
  userName: "Tony01",
});
console.log(greetPerson("Yubal"));
console.log(getUser("AB-123"));

const heros = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super Fuerza",
  },
];

const hero = heros.find(hero => hero.id === 2)
console.log(hero?.power?.toUpperCase());
