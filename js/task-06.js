const inputElem = document.querySelector("#validation-input");
inputElem.addEventListener("blur", inputBlur);

function inputBlur(event) {
  if (event.currentTarget.value.length === Number(inputElem.dataset.length)) {
    return inputElem.classList.add("valid") || inputElem.classList.remove("invalid");
  }
  return inputElem.classList.add("invalid") || inputElem.classList.remove("valid");
}
