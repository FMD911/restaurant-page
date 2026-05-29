export function loadHome() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Odin Restaurant";

  const text = document.createElement("p");
  text.textContent = "Best food in the world. Simple JS module rendering.";

  container.appendChild(title);
  container.appendChild(text);

  return container;
}