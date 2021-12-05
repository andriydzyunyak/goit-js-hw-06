const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const clickDisplay = document.getElementById("value");

let counterValue = 0;

const onClickMinus = () => {
  counterValue -= 1;
  clickDisplay.innerHTML = counterValue;
};

const onClickPlus = () => {
  counterValue += 1;
  clickDisplay.innerHTML = counterValue;
};

buttonDec.addEventListener("click", onClickMinus);
buttonInc.addEventListener("click", onClickPlus);
