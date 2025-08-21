function render (onClick) {
    
    const view = document.getElementById("left-content");
    view.innerHTML = "<br>";
    
    const header = document.createElement('h1');
    header.innerText = "Ready for a Random Joke about Chuck?";
    view.appendChild(header);

    const joke = document.createElement('h3');
    joke.innerText = onClick;
    joke.style.color = "#2F4673";
    
    view.appendChild(joke);
}

export default { render };