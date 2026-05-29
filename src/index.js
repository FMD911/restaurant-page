console.log("JS loaded");

import { loadHome } from "./home.js";

console.log("App started");

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

function renderHome() {
  clearContent();
  content.appendChild(loadHome());
}

renderHome();