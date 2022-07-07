
const button = document.querySelector('.change-color');
const bodyBackground = document.querySelector('.widget')
const spanColor= document.querySelector('.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
}
button.addEventListener('click', onChangeColor)



