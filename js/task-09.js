const btnChangeColor = document.querySelector(".change-color");
const nameLabel = document.querySelector(".color");

btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnChangeColorClick() {
  let bgColor = getRandomHexColor();
  document.body.style.background = bgColor;
  nameLabel.textContent = bgColor;
}
