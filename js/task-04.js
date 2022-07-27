const refs = {
    increment : document.querySelector('#counter [data-action="increment"]'),
    decrement : document.querySelector('#counter [data-action="decrement"]'),
    value : document.getElementById('value'),
}

let counterValue = 0;

refs.increment.addEventListener('click',onClickIncrement);
refs.decrement.addEventListener('click',onClickDecrement );


function onClickIncrement (){
    counterValue +=1;
    refs.value.innerText = counterValue;
}

function onClickDecrement(){
    counterValue -=1;
    refs.value.innerText = counterValue;
}