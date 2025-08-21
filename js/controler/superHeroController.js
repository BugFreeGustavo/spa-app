import superHeroView from "../view/superHeroView.js";
import superHeroService from "../service/superHeroService.js";

export async function init(){
    const hero = await superHeroService.getHero(255);

    superHeroView.render(hero);
}