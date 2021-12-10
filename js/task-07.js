const input = document.querySelector("#font-size-control");
const nameLabel = document.querySelector("#text");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameLabel.style.fontSize = `${event.currentTarget.value}px`;
}
