const refs = {
  containerRef : document.querySelector('.widget'),
  colorValueRef : document.querySelector('.color'),
  buttonOfChangeColorRef: document.querySelector('.change-color'),
  bodyRef : document.querySelector('body'),
};

const innerTextOfSpan = refs.buttonOfChangeColorRef.addEventListener('click',changeColorOfBackGround);


function changeColorOfBackGround(){
  let randomizedColor = getRandomHexColor()

  refs.colorValueRef.innerText = randomizedColor;
  refs.bodyRef.style.backgroundColor = randomizedColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};