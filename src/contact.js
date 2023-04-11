function contactPage() {
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phone = document.createElement("p")
    phone.textContent = "(123) 456 6789"

    const address = document.createElement("p")
    address.textContent = "1234 Street Dr. Minneapolis MN, 55401"

    const contactImg = document.createElement("img")
    contactImg.src = "../src/img/pizza-building.jpeg"
    contactImg.alt = "location"

    contact.appendChild(phone)
    contact.appendChild(address)
    contact.appendChild(contactImg);

    return contact;
}




function loadContact() {
    const main = document.getElementById("main")
    main.textContent = "";
    main.appendChild(contactPage())
}

export default loadContact;