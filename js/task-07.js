const inputElem = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${inputElem.value}px`;
inputElem.addEventListener("input", fontSizeChange);

function fontSizeChange(event) {
  const fontSize = event.currentTarget.value;
  text.style.fontSize = `${fontSize}px`;
}
