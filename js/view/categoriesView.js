import chuckService from "../service/chuckService.js";

function render(onClick) {

    const view = document.getElementById('left-content');
    view.innerHTML = "<br>";

    const header = document.createElement('h1');
    header.innerText = "Choose a Category and get a random joke";
    view.appendChild(header);

    const phrase = document.createElement('h3');

    onClick.forEach( element => {
        const item = document.createElement('button');
        item.innerText = `${element.toUpperCase()}`;

        item.addEventListener('click' , async() => {
            phrase.innerText = "";

            const joke = await chuckService.getJokeByCategory(`${element}`);
            phrase.innerText = joke.value;

            view.appendChild(phrase);
        });

        view.appendChild(item);   
    });
}

export default { render };