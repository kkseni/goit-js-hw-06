
const button = document.querySelector('.button');
const bodyBackground= document.querySelector('.widget')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  let color = getRandomHexColor();
  bodyBackground.setAttribute('style', `background-color: ${color}`)

}



