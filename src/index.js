import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import loadHome from "./home";
import loadContact from './contact';


// creates header element, appends to content
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

// Creates the navbar with buttons, appends to header
function navBar() {
  const nav = document.createElement("nav")

  const homeBtn = document.createElement("button")
  homeBtn.classList.add("nav-btn")
  homeBtn.textContent = "Home"
  homeBtn.addEventListener("click", (e) => {
    console.log("Clicked Home")
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn)
    loadHome()
  });

  const menuBtn = document.createElement("button")
  menuBtn.classList.add("nav-btn")
  menuBtn.textContent = "Menu"
  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuBtn)
    loadMenu()
  });

  const contactBtn = document.createElement("button")
  contactBtn.classList.add("nav-btn")
  contactBtn.textContent = "Contact"
  contactBtn.addEventListener("click", (e) => {
    console.log("Clicked")
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactBtn)
    loadContact()
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

// gets id="content"
function renderPage() {
  const content = document.getElementById("content")

  content.appendChild(Header());
  content.appendChild(createMain())
  setActiveButton(document.querySelector(".nav-btn"))
  loadHome()
}
renderPage();