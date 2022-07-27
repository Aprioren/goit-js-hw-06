const refs = {
    inputRef : document.querySelector('#font-size-control'),
    textRef : document.querySelector('#text'),
}

refs.inputRef.addEventListener('change',onInputIncrease);

function onInputIncrease(event){
    refs.textRef.style.fontSize = this.value + "px";
}