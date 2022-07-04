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
const liElements = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
})
ulItemEl.append( ...liElements);


