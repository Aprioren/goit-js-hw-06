const refs = {
    inputRef : document.querySelector("#validation-input"),
};

refs.inputRef.addEventListener('blur',onValidChange);

function onValidChange(event){
    if (event.currentTarget.value.length >= event.currentTarget.dataset.length){
        event.currentTarget.classList.add('valid');

        if(event.currentTarget.classList.contains('invalid')){
            event.currentTarget.classList.remove('invalid');
        };

    } else {
    //    event.currentTarget.classList.contains('valid') ? event.currentTarget.classList.remove('valid'): event.currentTarget.classList.add('invalid');
        if (event.currentTarget.classList.contains('valid')){
        event.currentTarget.classList.remove('valid');
        };
        event.currentTarget.classList.add('invalid');
    }  
}