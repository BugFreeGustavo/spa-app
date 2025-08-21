import excusesView from "../view/excusesView.js";
import excusesService from "../service/excusesService.js";

export async function init() {
    const excuses = excusesService.getCategories();

    excusesView.render(excuses);
}