export function loadContact() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const card = document.createElement("div");
  card.classList.add("contact-card");

  const intro = document.createElement("p");
  intro.textContent = "We are happy to hear from you!";

  const lines = [
    "📍 Mexico City, Mexico",
    "📞 Phone: +123 456 789",
    "📧 Email: contact@odinmexican.com",
    "🕒 Hours: 10:00 - 22:00",
    "🔥 Reservations recommended on weekends",
    "🚚 Delivery available"
  ];

  card.appendChild(intro);

  lines.forEach(text => {
    const p = document.createElement("p");
    p.textContent = text;
    card.appendChild(p);
  });

  container.append(title, card);

  return container;
}