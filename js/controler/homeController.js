import homeView from '../view/homeView.js';
import homeService from '../service/homeService.js';

export async function init() {
    const homeRender = await homeService.generateIntro();

    homeView.render(homeService);
}
