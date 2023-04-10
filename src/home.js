import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



const content = document.getElementById("content")
content.appendChild(Header());

function Header() {
const header = document.createElement('header');
header.classList.add("header")

const restaurantName = document.createElement("h1")
restaurantName.classList.add("restaurant-name")
restaurantName.textContent = "Odin's Pizzaria"

header.appendChild(restaurantName)
header.appendChild(navBar())

return header
}

function navBar() {
    const nav = document.createElement("nav")

    const homeBtn = document.createElement("button")
    homeBtn.classList.add("nav-btn")
    homeBtn.textContent = "Home"
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn)
        loadHome()
    })

    const menuBtn = document.createElement("button")
    homeBtn.classList.add("nav-btn")
    homeBtn.textContent = "Menu"
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn)
        loadMenu()
    })

    const contactBtn = document.createElement("button")
    homeBtn.classList.add("nav-btn")
    homeBtn.textContent = "Contact"
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn)
        loadContact()
    })
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    return nav;
}


// const navBar = document.createElement('div');
// navBar.textContent = "Menu"
// Header.appendChild(navBar)
