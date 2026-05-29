export function loadMenu() {
  const container = document.createElement("div");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const grid = document.createElement("div");
  grid.classList.add("menu-grid");

  const items = [
    { name: "Street Tacos", price: "$5", desc: "Corn tortilla with beef, onion, cilantro" },
    { name: "Chicken Burrito", price: "$7", desc: "Rice, beans, grilled chicken" },
    { name: "Beef Burrito", price: "$8", desc: "Slow cooked seasoned beef" },
    { name: "Chicken Quesadilla", price: "$6", desc: "Cheese + grilled chicken" },
    { name: "Cheese Quesadilla", price: "$5", desc: "Melted cheese in tortilla" },
    { name: "Loaded Nachos", price: "$6", desc: "Cheese, jalapeños, salsa" },
    { name: "Guacamole Bowl", price: "$4", desc: "Fresh avocado dip" },
    { name: "Elote Corn", price: "$3", desc: "Mexican street corn" },
    { name: "Churros", price: "$3", desc: "Cinnamon sugar dessert" },
    { name: "Taco Combo", price: "$10", desc: "3 tacos + drink" },
    { name: "Fish Tacos", price: "$6", desc: "Crispy fish, lime crema, cabbage" },
    { name: "Salsa Trio", price: "$3", desc: "Mild, medium, and hot house salsas" }
  ];

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const name = document.createElement("h3");
    name.textContent = item.name;

    const desc = document.createElement("p");
    desc.textContent = item.desc;

    const price = document.createElement("p");
    price.textContent = item.price;
    price.style.fontWeight = "bold";

    card.append(name, desc, price);
    grid.appendChild(card);
  });

  container.append(title, grid);

  return container;
}