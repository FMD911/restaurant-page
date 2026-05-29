export function createNav(onChangePage) {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  homeBtn.addEventListener("click", () => onChangePage("home"));
  menuBtn.addEventListener("click", () => onChangePage("menu"));
  contactBtn.addEventListener("click", () => onChangePage("contact"));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}