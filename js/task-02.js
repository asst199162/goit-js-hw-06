const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

// ingredients.forEach(function (number, index) {
//   const navLi = document.createElement("li");
//   navLi.textContent = number;
//   navLi.classList.add("item")
//   list.prepend(navLi)
// });

const listEl = ingredients.map((item) => {
  const li = document.createElement("li")
  li.classList.add('item');
  li.innerHTML = `<p>${item}</p>`;
  return li;
});

list.append(...listEl);
