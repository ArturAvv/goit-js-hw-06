let counterValue = 0;
const btnReduce = document.querySelector('[data-action="decrement"]');
const btnIncrease = document.querySelector('[data-action="increment"]');
const valueNumber = document.querySelector("#value");

btnReduce.addEventListener("click", () => {
  counterValue -= 1;
  valueNumber.textContent = counterValue;
});

btnIncrease.addEventListener("click", () => {
  counterValue += 1;
  valueNumber.textContent = counterValue;
});
