export function loadHome() {
  const container = document.createElement("div");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "El Odin Mexican Restaurant";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Fresh, authentic Mexican food every day";

  const highlight = document.createElement("p");
  highlight.textContent = "Tacos • Burritos • Nachos • Churros";

  const btn = document.createElement("button");
  btn.textContent = "View Menu";

  btn.addEventListener("click", () => {
    document.querySelector("nav button:nth-child(2)").click();
  });

  hero.append(title, subtitle, highlight, btn);
  container.appendChild(hero);

  return container;
}