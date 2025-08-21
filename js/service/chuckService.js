const URL = "https://api.chucknorris.io/jokes/"

async function getJoke() {

    const response = await fetch(URL + "random");
    const joke = await response.json();

    return joke;
}

async function getCategories() {

    const response = await fetch(URL + "categories");
    const categories = await response.json();

    return categories;
}

async function getJokeByCategory(category) {

    const response = await fetch(URL + `random?category=${category}`);
    const joke = await response.json(); 

    return joke;
}

export default { getJoke, getCategories, getJokeByCategory };