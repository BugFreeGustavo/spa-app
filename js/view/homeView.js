function render(onClick) {

    const view = document.getElementById("left-content");
    view.innerHTML = "<br>";

    const heading = document.createElement('h1');
    heading.innerText = onClick;
    leftContent.appendChild(heading);
}

export default { render };
