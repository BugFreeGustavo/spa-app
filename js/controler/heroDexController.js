import heroDexView from "../view/heroDexView.js";
import superHeroService  from "../service/superHeroService.js";

const MAX_HERO_ID = 731;

export async function init() {
    const heroes = await getAllHeroes();

    heroDexView.render(heroes);
}

async function getAllHeroes() {
    let id = 1;
    const heroes = [];

   while(id <= MAX_HERO_ID) {
        const hero = await superHeroService.getHero(id);
        heroes.push(hero);
        id++;
   }

   return heroes;
}
