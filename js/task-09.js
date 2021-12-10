const btnChangeColor = document.querySelector(".change-color");
const nameLabel = document.querySelector(".color");

btnChangeColor.addEventListener("click", handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  nameLabel.textContent = getRandomHexColor();
}
