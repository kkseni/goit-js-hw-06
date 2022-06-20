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
const Elements = ingredients.map((ingredients) => createElement("li"));
console.log(Elements); 
ulItemEl.appendChild = Elements;


