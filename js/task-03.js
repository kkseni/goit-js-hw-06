const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");
const imagesEl = images
  .map((images) => `<li class="list__item ">${images}</li>`)
  .join("");
  

list.insertAdjacentHTML("beforeend", imagesEl);

  const imageElFirst = list.firstElementChild;
imageElFirst.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg';
imageElFirst.alt = 'White and Black Long Fur Cat';



const imageElSecond = imageElFirst.nextElementSibling;
imageElSecond.src ='https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg';
imageElSecond.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';


const imageElThird = imageElSecond.nextElementSibling;
imageElThird.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpg';
imageElThird.alt = 'Group of Horses Running';







