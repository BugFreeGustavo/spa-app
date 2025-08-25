import heroDexView from "../view/heroDexView.js";
import superHeroService from "../service/superHeroService.js";

export async function init() {
    heroDexView.render(superHeroService);
}
