const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Пошук елемента в DOM- дереві
const ingredientsElement = document.querySelector('#ingredients');

// Створюю єлементи
const createListItem = ingredients.map(element => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = element;
  return createItem;
});
// Додаю єлементи в  DOM- дерево
ingredientsElement.append(...createListItem);


