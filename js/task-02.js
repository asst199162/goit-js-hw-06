const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (number, index) {
  const navLi = document.createElement("li");
  navLi.textContent = number;
  navLi.classList.add("item")
  list.prepend(navLi)
});