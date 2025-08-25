import superHeroView from "../view/superHeroView.js";
import superHeroService from "../service/superHeroService.js";

export async function init(){
    superHeroView.render(superHeroService);
}