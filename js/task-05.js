const input = document.querySelector("#name-input");
const nameLabel = document.querySelector("#name-output");

input.addEventListener("input", onInput);

function onInput(event) {
  nameLabel.textContent = event.currentTarget.value || "Anonymous";
}
