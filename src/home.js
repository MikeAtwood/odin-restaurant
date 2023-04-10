import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


console.log("Hello World!")

const content = document.getElementById("content")

const Header = document.createElement('h1');
Header.textContent = "Odin's Pizzaria"
content.appendChild(Header)
Header.classList.add('header')

// const navBar = document.createElement('div');
// navBar.textContent = "Menu"
// Header.appendChild(navBar)

