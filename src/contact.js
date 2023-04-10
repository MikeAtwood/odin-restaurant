function contactPage() {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const contactImg = document.createElement("img")
    contactImg.src = "../src/img/pizza-building.jpeg"
    contactImg.alt = "location"

    contact.appendChild(contactImg);

    return contact;
}




function loadContact() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(contactPage())
}

export default loadContact;