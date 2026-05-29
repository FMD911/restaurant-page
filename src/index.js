import "./style.css";
import { createNav } from "./navbar.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

function renderPage(page) {
  clearContent();

  if (page === "home") content.appendChild(loadHome());
  if (page === "menu") content.appendChild(loadMenu());
  if (page === "contact") content.appendChild(loadContact());
}

document.body.prepend(createNav(renderPage));

renderPage("home");