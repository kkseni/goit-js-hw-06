

const body = document.body;
const list = body.firstElementChild;
const firstListItem = list.nextElementSibling;
const listItems = firstListItem.firstElementChild;

const Item = firstListItem.children;
console.log(`Number of categories:`,Item.length)
const title = listItems.firstElementChild;
console.log(`Categories:`, title.textContent);

const listElements = listItems.lastElementChild;

const elements = listElements.children;
console.log(`Elements:`, elements.length);

const SecondChild = listItems.nextElementSibling;

const SecondChildElement= SecondChild.firstElementChild
console.log(`Categories:`, SecondChildElement.textContent);

const secondChildItem = SecondChildElement.nextElementSibling;

const Second = secondChildItem.children;
console.log(`Elements:`,Second.length)

const ThirdChild = SecondChild.nextElementSibling;
const ThirdChildElement = ThirdChild.firstElementChild;
console.log(`Categories:`, ThirdChildElement.textContent);

const ThirdChildItem = ThirdChildElement.nextElementSibling;
const Third= ThirdChildItem.children
console.log(`Elements:`,Third.length)
