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
    firstVal = 0;
    secondVal = 0;
    operator = '';
    input.value = 0;
    
});

divideBtn.addEventListener('click', () => {
   change.textContent = '/' 
   operator = '/'
   firstVal = inputVal; 
   input.value = '';
   console.log(`first value: ${firstVal}` );
   console.log("divide clicked");
});

subtractBtn.addEventListener('click', () => {
    change.textContent = '-'
    operator = '-';
    firstVal = inputVal;
    input.value = '';
    console.log(`first value: ${firstVal}` );
    console.log("subtract clicked");
});

addBtn.addEventListener('click', () => {
    change.textContent = '+'
    operator = '+';
    firstVal = inputVal;
    input.value = '';
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log("add clicked");
   
});

multiplyBtn.addEventListener('click', () => {
    change.textContent = '*'
    operator = '*';
    firstVal = inputVal;
    input.value = '';
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log("multiply clicked");
});

equalBtn.addEventListener('click', () => {
    secondVal = inputVal;
    console.log(`second value: ${secondVal}`);
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
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
    inputVal = a + b
    return input.value = inputVal
};

function subracts(a, b){
    return input.value =  a - b;
};

function multiply(a, b){
    inputVal = a * b
    return input.value =  inputVal;
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

