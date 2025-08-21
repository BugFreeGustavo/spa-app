import superHeroService from "../service/superHeroService.js";

function render(onClick) {
    const view = document.getElementById('left-content');
    view.innerHTML = "<br>";

    const header = document.createElement('h1');
    header.innerText = "Choose an Hero";
    view.appendChild(header);

    const phrase = document.createElement('h3');
}

export default {render};