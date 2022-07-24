import home from "./home";
import contact from "./contact";
import menu from "./menu";

const page = document.getElementById("content");

let tabGroup = document.createElement('div');
let homeTab = document.createElement('button');
let menuTab = document.createElement('button');
let contactTab = document.createElement('button');

// Add event listeners to remove and add tabs.
homeTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(home());
});
menuTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(menu());
});
contactTab.addEventListener('click', () => {
    page.removeChild(page.lastChild);
    page.appendChild(contact());
});

// Set button text
homeTab.textContent = "Home";
menuTab.textContent = "Menu";
contactTab.textContent = "Contact";

tabGroup.appendChild(homeTab);
tabGroup.appendChild(menuTab);
tabGroup.appendChild(contactTab);

page.appendChild(tabGroup);
page.appendChild(home());