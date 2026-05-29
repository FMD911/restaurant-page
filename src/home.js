export function loadHome() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "🌮 El Odin Mexican Restaurant";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Best tacos, burritos, and vibes in the world.";

  const info = document.createElement("p");
  info.textContent = "Fresh food. Clean code. Zero bugs (hopefully).";

  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(info);

  return container;
}