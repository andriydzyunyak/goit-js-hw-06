const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((element) => {
  const elementsItemEl = document.createElement("li");

  elementsItemEl.classList.add("item");
  elementsItemEl.textContent = `${element}`;

  const elementsUlEl = document.querySelector("ul#ingredients");

  elementsUlEl.appendChild(elementsItemEl);
});
