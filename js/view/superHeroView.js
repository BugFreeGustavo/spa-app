import superHeroService from "../service/superHeroService.js";

function render(onClick) {
    const view = document.getElementById('left-content');
    view.innerHTML = "<br>";

    const header = document.createElement('h1');
    header.innerText = "Choose an Hero";
    view.appendChild(header);

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
        const hero = await superHeroService.getHero(randomId);

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

export default { render };