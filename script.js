const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('#clear-btn');
const divideBtn = document.querySelector('#divide-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const subtractBtn = document.querySelector('#subtract-btn')
const addBtn = document.querySelector('#add-btn')
const equalBtn = document.querySelector('#equal-btn')
let change = document.querySelector('.change')

clearBtn.addEventListener('click', () => {
    console.log("clear clicked");
    firstVal = '';
    secondVal = '';
    operator = '';
    input.value = '';
    change.textContent = '';
});

divideBtn.addEventListener('click', () => {
   change.textContent = '/' 
   operator = '/'
   firstVal = inputVal; 
   input.value = '';
   console.log(`current input value: ${inputVal}`);
   console.log(`first value: ${firstVal}` );
   console.log(`second value: ${secondVal}` );
   console.log("divide clicked");
});

subtractBtn.addEventListener('click', () => {
    change.textContent = '-'
    operator = '-';
    firstVal = inputVal;
    input.value = '';
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log("subtract clicked");
});

addBtn.addEventListener('click', () => {
    change.textContent = '+'
    operator = '+';
    firstVal = inputVal;
    input.value = '';
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log("add clicked");
   
});

multiplyBtn.addEventListener('click', () => {
    change.textContent = '*'
    operator = '*';
    firstVal = inputVal;
    input.value = '';
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log("multiply clicked");
});

equalBtn.addEventListener('click', () => {
    secondVal = inputVal;
    console.log("equal clicked");
    console.log(`first value: ${firstVal}`);
    console.log(`second value: ${secondVal}`);
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    console.log(`current input value: ${inputVal}`);
    displayVal = true;
    console.log(`display active: ${displayVal}`);
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    console.log(`display active: ${displayVal}`);
    if(input.value == 0){
        inputVal = '';
    }
    if(displayVal == true){
        input.value = '';
        inputVal = '';
        displayVal = false;
    }
    inputVal += button.textContent;
    input.value += button.textContent;
    console.log(`current input value: ${inputVal}`);
    });
})

let inputVal = '';
let operator = '';

let displayVal = false;
let secondVal = '';
let firstVal = '';

function add(a, b){
    inputVal = a + b
    return input.value = inputVal
};

function subracts(a, b){
    inputVal = a - b
    return input.value =  inputVal;
};

function multiply(a, b){
    inputVal = a * b
    return input.value =  inputVal;
};

function divide(a, b){
    inputVal = a / b
    return input.value = inputVal;
};

function operate(operator){
   switch(operator){
    case '+':
        return add(parseInt(firstVal), parseInt(secondVal))
        break;
    case '*':
        return multiply(parseInt(firstVal), parseInt(secondVal))
        break;
    case '/':
        return divide(parseInt(firstVal), parseInt(secondVal))
        break;
    case '-':
        return subracts(parseInt(firstVal), parseInt(secondVal))
        break;
   }
}

