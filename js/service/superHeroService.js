const URL = "https://www.superheroapi.com/api.php/df63a528d7f5cc04208082fec6eb26ec/";

async function getHero(id) {

    const response = await fetch(URL + `${id}`, { redirect: 'follow' });
    const hero = await response.json();

    return hero;
}

async function getHeroByName(name) {
    const response = await fetch(URL + `search/${name}`, { redirect: 'follow'});
    const hero = await response.json();

    return hero;
}

export default { getHero, getHeroByName };