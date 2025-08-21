import excusesService from "../service/excusesService.js";

function render(onClick) {

    const view = document.getElementById('left-content');
    view.innerHTML = "<br>";

    const header = document.createElement('h1');
    header.innerText = "Choose a Category and get a random excuse";
    view.appendChild(header);

    const phrase = document.createElement('h3');

    onClick.forEach( element => {
        const item = document.createElement('button');
        item.innerText = `${element.toUpperCase()}`;

        item.addEventListener('click', async () => {
            phrase.innerText = "";

            const excuse = await excusesService.getExcuse(`${element}`);
            phrase.innerText = excuse[0].excuse;

            view.appendChild(phrase);
        });

        view.appendChild(item);
    })
}

export default { render };