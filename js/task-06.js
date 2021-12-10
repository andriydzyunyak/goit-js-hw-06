const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.length;

  if (inputLength === Number(event.currentTarget.dataset.length)) {
    console.log("правильно");
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    console.log("не правильно");
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
