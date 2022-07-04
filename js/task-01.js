

const  item = document.querySelectorAll('.item')
console.log(item);

console.log(`Number of categories:`, item.length)

item.forEach(function (title, elements) {
  const title = item.firstElementChild;
  const elements= item.lastElementChild
  console.log(`Categories:' ${title}}, 'Elements:' ${elements.length}`);
});

