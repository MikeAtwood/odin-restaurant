function menuPage() {
    const menu = document.createElement("div")
    menu.classList.add("menu")

    let pizzaItems = [
        {
            name: "Margherita",
            ingredients: "Tomato sauce, mozzarella cheese, basil",
            image: "../src/img/item1.jpeg"
        },
        {
            name: "Pepperoni",
            ingredients: "Tomato sauce, mozzarella cheese, pepperoni",
            image: "../src/img/item2.jpeg"
        },
        {
            name: "Hawaiian",
            ingredients: "Tomato sauce, mozzarella cheese, ham",
            image: "../src/img/item3.jpeg"
        },
        {
            name: "Margherita",
            ingredients: "Tomato sauce, mozzarella cheese, basil",
            image: "../src/img/item5.jpeg"
        },
        {
            name: "Pepperoni",
            ingredients: "Tomato sauce, mozzarella cheese, pepperoni",
            image: "../src/img/item4.jpeg"
        },
        {
            name: "Hawaiian",
            ingredients: "Tomato sauce, mozzarella cheese, ham",
            image: "../src/img/item6.jpeg"
        },

    ]

    pizzaItems.forEach(function (pizza) {
        menu.appendChild(createPizzaItem(pizza))
    })

    return menu
}

function createPizzaItem(pizza) {
    let div = document.createElement("div")
    div.classList.add("menu-item")
    let name = document.createElement("h2")
    name.textContent = pizza.name
    let ingredients = document.createElement("p")
    ingredients.textContent = pizza.ingredients
    let image = document.createElement("img")
    image.src = pizza.image

    div.appendChild(name)
    div.appendChild(ingredients)
    div.appendChild(image)

    return div;
}



function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(menuPage());
}

export default loadMenu;