console.log("VERSION 999 TEST");

import "./style.css";
import { createNav } from "./navbar.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const content = document.createElement("div");
content.id = "content";
document.body.appendChild(content);

function render(page) {
  content.innerHTML = "";

  const pages = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact,
  };

  content.appendChild(pages[page]());
}

document.body.prepend(createNav(render));
render("home");