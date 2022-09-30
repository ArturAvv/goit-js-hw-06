const inputElem = document.querySelector("#name-input");
const nameElem = document.querySelector("#name-output");

inputElem.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  const { value } = event.currentTarget;
  nameElem.textContent = value ? value : "Anonymous";
}
