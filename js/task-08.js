const formLogin = document.querySelector(".login-form");
const btnSubmit = document.querySelector("button");

formLogin.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (mail.value === "" || password.value === "") {
    window.alert("Все поля должны быть заполнены");
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      console.log("name", name);
      console.log("value", value);
    });
    event.currentTarget.reset();
  }
}
