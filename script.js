function add(x,y) {
    return x+y;
}
function subtract(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x*y;
}
function divide(x,y) {
    return x/y;
}

function operate(op,x,y) {
    let result = 0;
    switch(op) {
        case '+':{
            result = add(x,y);
            break;
        }
        case '-': {
            result = subtract(x,y);
            break;
        }
        case '*': {
            result = multiply(x,y);
            break;
        }
        case '/': {
            result = divide(x,y);
            break;
        }
    }
    whichNumberToChange = 'first';
    clear = true;
    output.textContent = result;
    firstNum.textContent = result;
    secondNum.textContent = '';
    operator.textContent = '';
    return result;
}

function changeNumbers(digit) {
    if(whichNumberToChange == 'first' && !clear) {
        firstNum.textContent += digit;
    }
    else if(whichNumberToChange == 'first' && clear) {
        firstNum.textContent = digit;
    }
    else if(whichNumberToChange == 'second' && !clear){
        secondNum.textContent += digit;
    }
    else {
        secondNum.textContent = digit;
    }
    clear = false;
}

function deleteDigit() {
    if(whichNumberToChange == 'first') {
        firstNum.textContent = firstNum.textContent.slice(0,firstNum.textContent.length-1);
    }
    else {
        secondNum.textContent = secondNum.textContent.slice(0,secondNum.textContent.length-1);
    }
}

function setOperator(op) {
    let contiousExpression = secondNum.textContent !== '';
    if(contiousExpression) {
        operate(operator.textContent,+firstNum.textContent,+secondNum.textContent);
    }
    operator.textContent = op;
    whichNumberToChange = 'second';
    clear = true;
}

let whichNumberToChange = 'first';
let clear = false;

let output = document.querySelector('.output');
let firstNum = document.querySelector('.first-num');
let operator = document.querySelector('.operator');
let secondNum = document.querySelector('.second-num');

let numButtons = document.querySelectorAll('.button-num');

let buttonCle = document.querySelector('.button-cle');
let buttonDel = document.querySelector('.button-del');
let buttonDiv = document.querySelector('.button-div');
let buttonMul = document.querySelector('.button-mul');
let buttonPlu = document.querySelector('.button-plu');
let buttonMin = document.querySelector('.button-min');
let buttonEqu = document.querySelector('.button-equ');
let buttonDot = document.querySelector('.button-dot');

numButtons.forEach(
    (val, index) => {val.onclick = () => changeNumbers(val.innerHTML);}
);

buttonCle.onclick = () => {
    output.textContent = '';
    firstNum.textContent = '';
    secondNum.textContent = '';
    operator.textContent = '';
};

buttonDel.onclick = () => {
    deleteDigit();
};

buttonDiv.onclick = () => {
    setOperator('/');
};
buttonMul.onclick = () => {
    setOperator('*');
};
buttonPlu.onclick = () => {
    setOperator('+');
};
buttonMin.onclick = () => {
    setOperator('-');
};
buttonEqu.onclick = () => {
    operate(operator.textContent,+firstNum.textContent,+secondNum.textContent);
};
buttonDot.onclick = () => {
    changeNumbers('.');
};




