function render(onClick) {
    const view = destroyPreviousView('left-content');

    // Creating title
    createElements("h1", "Choose an Hero", view);

    const heroImg = document.createElement('img');
    const heroContainer = document.createElement('article');
    const heroNameElement = document.createElement('h3');

    const generateBtn = document.createElement('button');
    generateBtn.innerText = "GENERATE RANDOM HERO";
    generateBtn.addEventListener('click', async () => {
        heroImg.innerText = "";
        heroContainer.innerText = "";
        heroNameElement.innerText = "";

        const randomId = Math.floor(Math.random() * 731) + 1;
        const hero = await onClick.getHero(randomId);

        heroImg.src = `${hero.image.url}`;

        heroNameElement.innerHTML = `
                        <h2><strong>Biography</strong></h2>
                        <h3><strong>Hero:</strong> ${hero.name}</h3>
                        <h3><strong>Full Name:</strong> ${hero.biography["full-name"]}</h3>
                        <h3><strong>Aliases:</strong> ${hero.biography["aliases"]}</h3>
                        <h3><strong>Profession:</strong> ${hero.work["occupation"]}</h3>
                        `;

        const spaceDiv = document.createElement('div');
        spaceDiv.className = "space";

        heroContainer.appendChild(heroImg);
        heroContainer.appendChild(spaceDiv);
        heroContainer.appendChild(heroNameElement);

        view.appendChild(heroContainer);
    })
    view.appendChild(generateBtn);
}

function createElements(element, innerText, parentNode, className, id) {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv';

    const newElement = document.createElement(element);
    newElement.innerText = innerText;
    newElement.className = className;
    newElement.id = id;

    parentNode.appendChild(outerDiv);
    outerDiv.appendChild(newElement);

}

function destroyPreviousView(id) {
    const view = document.getElementById(id);
    view.innerHTML = "<br>";

    return view;
}

export default { render };