const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsElem = ingredients.map((ingredient) => {
  const itemElem = document.createElement("li");
  itemElem.textContent = `${ingredient}`;
  itemElem.classList = "item";
  return itemElem;
});

const listItem = document.querySelector("ul#ingredients");
listItem.append(...ingredientsElem);
