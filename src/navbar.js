export function createNav(onChangePage) {
  const nav = document.createElement("nav");

  const pages = ["home", "menu", "contact"];
  let active = "home";

  pages.forEach(page => {
    const btn = document.createElement("button");
    btn.textContent = page.toUpperCase();
    btn.dataset.page = page;

    btn.addEventListener("click", () => {
      active = page;
      onChangePage(page);
      updateActive();
    });

    nav.appendChild(btn);
  });

  function updateActive() {
    nav.querySelectorAll("button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.page === active);
    });
  }

  updateActive();

  return nav;
}