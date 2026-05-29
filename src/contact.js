export function loadContact() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "📞 Contact Us";

  const info = document.createElement("p");
  info.textContent = "Call us at 123-456-789 or visit us in Mexico City.";

  container.appendChild(title);
  container.appendChild(info);

  return container;
}