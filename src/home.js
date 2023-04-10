function homePage() {
    const home = document.createElement("div")
    home.classList.add("home")

    const homeImg = document.createElement('img')
    homeImg.src = "../src/img/pizza-home.jpeg";
    homeImg.alt = "Bake";
    
    home.appendChild(createPara("Bringing you the best Pizza from "))
    home.appendChild(createPara("around the world since 1994"))
    home.appendChild(homeImg);
    home.appendChild(createPara("Order online or visit us!"))

    return home;
}

function createPara(text) {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = text;
    return newParagraph;
}

function loadHome() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(homePage())
}

export default loadHome;