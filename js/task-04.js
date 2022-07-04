let counterValue = 0;
const addListenerBtn = document.querySelector('[data-action="increment"]');
const removeListenerBtn = document.querySelector('[data-action="decrement"]');




removeListenerBtn.addEventListener("click", () => {
    
  console.log(counterValue -=1);
});

addListenerBtn.addEventListener("click", () => {
   
  console.log(counterValue +=1);
});