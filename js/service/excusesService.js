const URL = "https://excuser-three.vercel.app/v1/excuse/";

async function getExcuse(category) {

    const response = await fetch(URL + `${category}`);
    const excuse = await response.json();

    return excuse;
}

function getCategories() {
    return ["family", "office", "children", "college", "party", "funny", "unbelievable", "developers", "gaming"];
}

export default { getExcuse, getCategories };