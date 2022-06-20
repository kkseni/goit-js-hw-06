

const  item = document.querySelectorAll('.item')
console.log(item);

console.log(`Number of categories:`, item.length)
const title = item.firstElementChild;
const elements= item.lastElementChild

item.forEach(function (title, elements) {
  console.log(`Categories:' ${title}}, 'Elements:' ${elements.length}`);
});

