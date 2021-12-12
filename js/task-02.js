const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementsUlEl = document.querySelector("ul#ingredients");

const makeLiEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const elementsItemEl = document.createElement("li");
    elementsItemEl.classList.add("item");
    elementsItemEl.textContent = `${ingredient}`;

    return elementsItemEl;
  });
};

const elements = makeLiEl(ingredients);
elementsUlEl.append(...elements);
