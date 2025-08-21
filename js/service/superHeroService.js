const URL = "https://superheroapi.com/api/df63a528d7f5cc04208082fec6eb26ec/";

async function getHero(id) {

    const response = await fetch(URL + `${id}`, { redirect: 'follow' });
    const hero = await response.json();

    return hero;
}

export default { getHero };