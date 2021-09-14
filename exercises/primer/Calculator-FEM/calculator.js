let runningTotal = 0;
let buffer = "0";
let previousOperator;
const button = document.querySelectorAll('.box');
const result = document.querySelector('.result');


button.forEach(elem => elem.addEventListener('click', function(event){
    let value = event.target.innerText;
    buttonClick(value);
    console.log(value)
}));

function buttonClick(value){
    if (isNaN(parseInt((value)))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if (buffer === "0"){
        buffer = value;
    }else{
        buffer+=value;
        if (buffer.length == 23){
            buffer = value;
        }
    }
}
 
function handleSymbol(value){
    switch(value){
        case 'C':
            buffer="0";
            runningTotal=0;
            previousOperator=null;
            break;
        case '=':
            if (previousOperator === null){
                return;
            }
            flushOperator(parseInt(buffer));
            previousOperator=null;
            buffer = runningTotal;
            runningTotal=0;
            break;
        case '←':
            if (buffer.length === 1){
                buffer = "0";
            }else{
                buffer= buffer.substring(0,buffer.length-1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}
function rerender(){
    result.innerText=buffer;
}

function flushOperator(intBuffer){
    if (previousOperator === "+"){
        runningTotal+=intBuffer;
    }
    else if (previousOperator === "-"){
        runningTotal-=intBuffer;
    }
    else if (previousOperator === "*"){
        runningTotal*=intBuffer;
    }
    else{
        runningTotal/=intBuffer;
    }
}

function handleMath(value){
    const intBuffer=parseInt(buffer);
    if (runningTotal===0){
        runningTotal=intBuffer;
    }else{
        flushOperator(intBuffer)
    }
    previousOperator=value;
    buffer="0";
}