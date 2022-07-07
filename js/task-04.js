let counterValue = 0;
const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');

const valueSpan = document.querySelector('#value')



removeListenerBtn.addEventListener("click", () => {
    
  valueSpan.textContent= counterValue -=1;
});

addListenerBtn.addEventListener("click", () => {
   
  valueSpan.textContent= counterValue +=1;
});