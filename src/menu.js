function menuPage() {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    
}





function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(menuPage());
}

export default loadMenu;