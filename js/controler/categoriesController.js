import categoriesView from '../view/categoriesView.js';
import chuckService from '../service/chuckService.js';

export async function init() {
    const categories = await chuckService.getCategories();

    categoriesView.render(categories);
}