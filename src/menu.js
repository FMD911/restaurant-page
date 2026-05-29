export function loadMenu() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "🌮 Menu";

  const item1 = document.createElement("p");
  item1.textContent = "Tacos - $5";

  const item2 = document.createElement("p");
  item2.textContent = "Burritos - $7";

  const item3 = document.createElement("p");
  item3.textContent = "Nachos - $6";

  container.appendChild(title);
  container.appendChild(item1);
  container.appendChild(item2);
  container.appendChild(item3);

  return container;
}