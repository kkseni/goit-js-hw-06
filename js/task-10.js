
const newDivEl= document.querySelector('#boxes')
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() { 
  const amount = input.value;
   const arrayDiv = [];
   
    for (let i = 0; i <= amount; i++) { 
      const widthHeightSize = 30 + i * 10 + 'px'; 

      const divNew = document.createElement('div'); 

        divNew.style.width = widthHeightSize; 
        divNew.style.height = widthHeightSize;
        divNew.style.backgroundColor = getRandomHexColor();
      arrayDiv.push(divNew);
       newDivEl.append(divNew);
    }
   
}
buttonCreate.addEventListener('click', createBoxes);

function destroyBoxes() {
   newDivEl.remove();
 }
buttonDestroy.addEventListener('click', destroyBoxes)