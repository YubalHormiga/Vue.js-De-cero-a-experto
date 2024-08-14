import heroes, { type Owner } from "../data/hero";

export const getHeroByid = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByOwner = (owners:Owner) => {
  return heroes.filter((hero) => hero.owner === owners);
};

console.log(getHeroesByOwner("Marvel"));
