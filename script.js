const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('#clear-btn');
const divideBtn = document.querySelector('#divide-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const subractBtn = document.querySelector('#subtract-btn')
const addBtn = document.querySelector('#add-btn')
const equalBtn = document.querySelector('#equal-btn')
let change = document.querySelector('.change')

clearBtn.addEventListener('click', () => {
    console.log("clear clicked");
    firstVal = 0;
    secondVal = 0;
    operator = '';
    input.value = 0;
    
});

divideBtn.addEventListener('click', () => {
   change.textContent = '/' 
   operator = '/'
   firstVal = inputVal; 
});

subractBtn.addEventListener('click', () => {
    change.textContent = '-'
    operator = '-';
    firstVal = inputVal;
});

addBtn.addEventListener('click', () => {
    change.textContent = '+'
    operator = '+';
    firstVal = inputVal;
    // input.value = 0;
    console.log(firstVal);
    
});

multiplyBtn.addEventListener('click', () => {
    change.textContent = '*'
    operator = '*';
    firstVal = inputVal;
});

equalBtn.addEventListener('click', () => {
    secondVal = inputVal;
    console.log(secondVal);
    console.log(operate(operator));
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    if(input.value == 0){
        input.value = '';
        inputVal = '';
    }
    inputVal += button.textContent;
    input.value += button.textContent
    });
})

let inputVal = 0;
input.value = inputVal;
let operator = '';

let secondVal = 0;
let firstVal = 0;

function add(a, b){
    return input.value =  a + b;
};

function subracts(a, b){
    return input.value =  a - b;
};

function multiply(a, b){
    return input.value =  a * b;
};

function divide(a, b){
    return input.value =  a / b;
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

