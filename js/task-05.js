const refs = {
    inputRef : document.querySelector('#name-input'),
    nameRef : document.querySelector('#name-output'),
}

refs.inputRef.addEventListener('input',onInputChange)

function onInputChange(event){
    refs.nameRef.textContent = event.currentTarget.value.trim() || "Anonymous";
}