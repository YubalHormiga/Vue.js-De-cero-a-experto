// console.log("Inicio");

import { getHeroByid } from "./07-imp-exp";
import { type Hero } from './../data/hero';

// new Promise((resolve, reject) => {
//   console.log('Cuerpo');

//   setTimeout(() => {
//     resolve("Mi amigo cumplió");
//     reject("Mi amigo no cumplió");
//   }, 2000);
// })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage);
//   })
//   .finally(() => {
//     console.log("Fin de la promesa");
//   });

// console.log("Fin");
const getHeoByIdAsync = (id: number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const hero = getHeroByid(id);
  
        hero ? resolve(hero) : reject(`Héroe no encontrado #${id}`);
        
      }, 1500);
    });
  };
  
  getHeoByIdAsync(3)
    .then((hero) => console.log("El nombre es", hero.name))
    .catch(alert);