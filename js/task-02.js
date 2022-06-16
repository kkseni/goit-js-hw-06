const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ulItemEl = document.querySelector(`ul`)
console.log(ulItemEl)
const Elements = ingredients.map((ingredients) => ` <li class= "item">${ingredients} </li>`).join("");
console.log(Elements);
ulItemEl.innerHTML = Elements;


