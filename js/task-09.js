function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorType = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

colorBtn.addEventListener("click", changeClick);

function changeClick() {
  const color = getRandomHexColor();
  colorType.textContent = color;
  bodyColor.style.backgroundColor = color;
}
