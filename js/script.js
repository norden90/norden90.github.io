const cart = [];

const pizzor = [
  {
    name: "Margherita",
    ingredients: ["Tomatsås", "Mozzarellaost", "Basilika"],
    picture: "margarita.jpg",
    price: 50,
  },
  {
    name: "Turbo",
    ingredients: ["Kebab", "Tomatsås", "Ost", "Skinka", ""],
    picture: "turbo.jpg",
    price: 75,
  },
  {
    name: "Kebabpizza",
    ingredients: ["Kebab", "Tomatsås", "Ost", "Lök", "kebabsås mild"],
    picture: "kebabpizza.jpg",
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
    picture: "kebabtallrik.jpg",
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
    picture: "kebabrulle.jpg",
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
    picture: "kebabinbread.jpg",
    price: 55,
  },
];

const sallads = [
  {
    name: "Kebabsallad",
    ingredients: ["Kebab", "Sallad", "Gurka", "Tomat", "Lök", "Kebabsås"],
    picture: "kebabsallad.jpg",
    price: 60,
  },
  {
    name: "Amerikansk Sallad",
    ingredients: ["Sallad", "Skinka", "Ost", "Gurka", "Tomat", "Mildsås"],
    picture: "americansallad.jpg",
    price: 60,
  },
  {
    name: "Grekisk Sallad",
    ingredients: ["Sallad", "Gurka", "Tomat", "Oliver", "Fetaost"],
    picture: "greeksallad.jpg",
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
    <img src="pics/${kebab.picture}" alt="${kebab.name}">
    <p>Ingredienser: ${kebab.ingredients.join(", ")}</p>
    <p>Pris: ${kebab.price} kr</p>
  `;
    // kebabElement.classList.add("col-md-4");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.onclick = () => {
      addToCartClick(kebab);
    };
    button.innerText = "Lägg till i varukorg";
    kebabElement.appendChild(button);
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
    <img src="pics/${pizza.picture}" alt="${pizza.name}">
    <p>Ingredienser: ${pizza.ingredients.join(", ")}</p>
    <p>Pris: ${pizza.price} kr</p>
  `;
    // pizzaElement.classList.add("col-md-4");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.onclick = () => {
      addToCartClick(pizza);
    };
    button.innerText = "Lägg till i varukorg";
    pizzaElement.appendChild(button);
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
    <img src="pics/${sallad.picture}" alt="${sallad.name}">
    <p>Ingredienser: ${sallad.ingredients.join(", ")}</p>
    <p>Pris: ${sallad.price} kr</p>
  `;
    // salladElement.classList.add("col-md-4");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.onclick = () => {
      addToCartClick(sallad);
    };
    button.innerText = "Lägg till i varukorg";
    salladElement.appendChild(button);
    parentElement.appendChild(salladElement);
  }

  salladbox.appendChild(parentElement);
}

function displayCart() {
  let totalCost = 0;
  const cartbox = document.querySelector(".cartbox");
  const parentElement = document.createElement("div");

  for (const [index, product] of cart.entries()) {
    const cartElement = document.createElement("div");
    cartElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>Pris: ${product.price} kr</p>
      <button class="btn btn-danger" onclick="removeFromCart(${index})">Ta bort</button>
      
    `;
    totalCost += product.price;
    parentElement.appendChild(cartElement);
  }

  parentElement.innerHTML += `<p>Total kostnad: ${totalCost} kr</p>`;
  cartbox.innerHTML = "";
  cartbox.appendChild(parentElement);
}

function removeFromCart(index) {
  const temp = cart.indexOf(index);
  if (index > -1) {
    cart.splice(index, 1);
  }
  displayCart();
}

function addToCartClick(product) {
  cart.push(product);
  console.log(product);
  displayCart();
}

function clearCart(cart) {
  cart.splice;
}
