const ulEl = document.querySelectorAll(".item");
console.log("Number of categories: ", ulEl.length);

ulEl.forEach((element) => {
  const liElName = element.querySelector("h2");
  const liElItem = element.querySelectorAll("li");
  console.log(`Category: ${liElName.textContent}`);
  console.log(`Elements: ${liElItem.length}`);
});
