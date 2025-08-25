const marvelLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png";
const dcLogo = "https://www.clipartmax.com/png/middle/231-2316283_dc-comics-icon-logo-vector-1976-free-vector-silhouette-dc-comics-logo.png";
const heroesLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Heroes_%28NBC_television_series%29_logo.svg/1200px-Heroes_%28NBC_television_series%29_logo.svg.png";
const wildstormLogo = "https://i.pinimg.com/474x/b3/7d/c9/b37dc98f53429100f24a6db38849db54.jpg";
const darkhorseLogo = "https://static.wikia.nocookie.net/ultimatepopculture/images/0/02/Dark_Horse_Comics_logo.png";

function render(onClick) {
    const view = destroyPreviousView('left-content');

    // Creating title
    createElements("h1", "HeroDex", view);

    //Creating table with heroes
    const outerDiv = document.createElement('div');
    outerDiv.className = ('outerDiv');
    view.appendChild(outerDiv);

    const heroListHeader = document.createElement('table');
    heroListHeader.innerHTML = `
                            <tr>
                                <th>HERO</th>
                                <th>NAME</th>
                                <th>BIRTHPLACE</th>
                                <th>FIRST APPEARANCE</th>
                                <th>PUBLISHER</th>
                                <th>ALIGNMENT</th>
                                <th>OCCUPATION</th>
                            </tr>`;

    let currentId = 1;
    const MAX_ID = 731;
    const batchSize = 10;

    async function loadBatch() {
        const promises = [];

        for (let i = 0; i < batchSize && currentId <= MAX_ID; i++, currentId++) {
            promises.push(onClick.getHero(currentId));
        }

        const heroes = await Promise.all(promises);

        heroes.forEach(hero => {
            const heroRow = document.createElement('tr');
            let publisher = "";
            let alignment = "";

            // CHANGING PUBLISHER TO LOGO
            if (hero.biography.publisher === "Marvel Comics" || hero.biography.publisher === "Sharon Carter") {
                publisher = `<td class="tableImg"><img src="${marvelLogo}"></td>`;

            } else if (hero.biography["publisher"] === "DC Comics") {
                publisher = `<td class="tableImg"><img src="${dcLogo}"></td>`;

            } else if (hero.biography["publisher"] === "NBC - Heroes") {
                publisher = `<td class="tableImg"><img src="${heroesLogo}"></td>`;

            } else if (hero.biography["publisher"] === "Wildstorm") {
                publisher = `<td class="tableImg"><img src="${wildstormLogo}"></td>`;

            } else if (hero.biography["publisher"] === "Dark Horse Comics") {
                publisher = `<td class="tableImg"><img src="${darkhorseLogo}"></td>`;
            } else {
                publisher = `<td>${hero.biography["publisher"]}</td>`
            }

            // CHANGING ALIGNMENT COLOR
            if (hero.biography["alignment"] === "good") {
                alignment = `<td id="good"></td>`;

            } else {
                alignment = `<td id="bad"></td>`;
            }

            heroRow.innerHTML = `
                            <td class="tableImg"><img src="${hero.image.url}"></td>
                            <td>${hero.name}</td>
                            <td>${hero.biography["place-of-birth"]}</td>
                            <td>${hero.biography["first-appearance"]}</td>
                            ${publisher}
                            ${alignment}
                            <td style="overflow: scroll">${hero.work["occupation"]}</td>
                            `;

            heroListHeader.appendChild(heroRow);
        });

        if(currentId <= MAX_ID) {
            setTimeout(loadBatch, 200);
        }
       outerDiv.appendChild(heroListHeader); 
    }

    loadBatch();    
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