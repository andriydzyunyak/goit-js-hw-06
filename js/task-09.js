const btnChangeColor = document.querySelector(".change-color");
const nameLabel = document.querySelector(".color");

btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnChangeColorClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  nameLabel.textContent = document.body.style.backgroundColor;
}
