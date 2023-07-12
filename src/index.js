import "./styles.css";
import createHome from "./homepage";
import createMenu from "./menu";
import createContact from "./contact";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#food-button");
const contactButton = document.querySelector("#contact-button");

homeButton.addEventListener("click", createHome);

menuButton.addEventListener("click", createMenu);
contactButton.addEventListener("click", createContact);
createHome();



