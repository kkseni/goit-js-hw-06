const fontSizeInput = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
 
function bigTextSize(event) {
    textSize.style.fontSize = event.currentTarget.value + 'px';
   
}

fontSizeInput.addEventListener('input', bigTextSize)
