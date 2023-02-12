const cart = [];
const pizzor = [
  {
    name: "Margherita",
    ingredients: ["Tomatsås", "Mozzarellaost", "Basilika"],
    price: 50,
  },
  {
    name: "Pepperoni",
    ingredients: ["Tomatsås", "Mozzarellaost", "Pepperoni"],
    price: 55,
  },
  {
    name: "Vegetarisk",
    ingredients: [
      "Tomatsås",
      "Mozzarellaost",
      "Champinjoner",
      "Paprika",
      "Oliver",
    ],
    price: 60,
  },
  {
    name: "Hawaii",
    ingredients: ["Tomatsås", "Ost", "Skinka", "Ananas"],
    price: 60,
  },
  {
    name: "Turbo",
    ingredients: ["Kebab", "Tomatsås", "Ost", "Skinka", ""],
    price: 75,
  },
  {
    name: "Kebabpizza",
    ingredients: ["Kebab", "Tomatsås", "Ost", "Lök", "kebabsås mild"],
    price: 65,
  },
];
const kebabs = [
  {
    name: "Kebabtallrik",
    ingredients: [
      "Kebab",
      "Sallad",
      "Pommes",
      "Gurka",
      "Tomat",
      "Lök",
      "Kebabsås",
    ],
    price: 65,
  },
  {
    name: "Kebabrulle",
    ingredients: [
      "Kebab",
      "Sallad",
      "Tunnbröd",
      "Gurka",
      "Tomat",
      "Lök",
      "Kebabsås",
    ],
    price: 60,
  },
  {
    name: "Kebab i bröd",
    ingredients: [
      "Kebab",
      "Sallad",
      "Pitabröd",
      "Gurka",
      "Tomat",
      "Lök",
      "Kebabsås",
    ],
    price: 55,
  },
];
const sallads = [
  {
    name: "Kebabsallad",
    ingredients: ["Kebab", "Sallad", "Gurka", "Tomat", "Lök", "Kebabsås"],
    price: 60,
  },
  {
    name: "Amerikansk Sallad",
    ingredients: ["Sallad", "Skinka", "Ost", "Gurka", "Tomat", "Mildsås"],
    price: 60,
  },
  {
    name: "Grekisk Sallad",
    ingredients: ["Sallad", "Gurka", "Tomat", "Oliver", "Fetaost"],
    price: 60,
  },
];

function displayKebabs() {
  const kebabbox = document.querySelector(".kebabbox");

  const parentElement = document.createElement("div");

  for (const kebab of kebabs) {
    const kebabElement = document.createElement("div");
    kebabElement.innerHTML = `
    <h2>${kebab.name}</h2>
    <p>Ingredienser: ${kebab.ingredients.join(", ")}</p>
    <p>Pris: ${kebab.price} kr</p>
  `;
    parentElement.appendChild(kebabElement);
  }

  kebabbox.appendChild(parentElement);
}

function displayPizzas() {
  const pizzabox = document.querySelector(".pizzabox");

  const parentElement = document.createElement("div");

  for (const pizza of pizzor) {
    const pizzaElement = document.createElement("div");
    pizzaElement.innerHTML = `
    <h2>${pizza.name}</h2>
    <p>Ingredienser: ${pizza.ingredients.join(", ")}</p>
    <p>Pris: ${pizza.price} kr</p>
  `;
    parentElement.appendChild(pizzaElement);
  }

  pizzabox.appendChild(parentElement);
}

function displaySallads() {
  const salladbox = document.querySelector(".salladbox");

  const parentElement = document.createElement("div");

  for (const sallad of sallads) {
    const salladElement = document.createElement("div");
    salladElement.innerHTML = `
    <h2>${sallad.name}</h2>
    <p>Ingredienser: ${sallad.ingredients.join(", ")}</p>
    <p>Pris: ${sallad.price} kr</p>
  `;
    parentElement.appendChild(salladElement);
  }

  salladbox.appendChild(parentElement);
}
