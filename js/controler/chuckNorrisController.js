import chuckView from "../view/chuckView.js";
import chuckService from "../service/chuckService.js";

export async function init() {
    const joke = await chuckService.getJoke();

    chuckView.render(joke.value);
}