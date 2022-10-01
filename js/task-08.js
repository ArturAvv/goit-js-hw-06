const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { password, email },
  } = event.currentTarget;
  if (password.value === "" || email.value === "") {
    alert("все поля должны быть заполнены");
    return;
  }
  const userData = {
    name: email.value,
    password: password.value,
  };
  console.log(userData);
  form.reset();
}
