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
    prevVal = '';
    totalVal = '';
    operator = '';
    change.textContent = '';
    firstInput = true;
    secondInput = false;
    displayVal = false;
    operation = false;
    input.value = '';
    logMessages()
});

divideBtn.addEventListener('click', () => {
   chainOperations();
   secondVal = '';
   change.textContent = '/' 
   operator = '/'
   displayVal = false;
   secondInput = true;
   firstInput = false;
   prevVal = secondVal
   operation = true;
   console.log("divide clicked");
   logMessages()
});

subtractBtn.addEventListener('click', () => {
    chainOperations();
    secondVal = '';
    change.textContent = '-'
    operator = '-';
    displayVal = false;
    secondInput = true;
    firstInput = false;
    prevVal = secondVal
    operation = true;
    console.log("subtract clicked");
    logMessages()
});

addBtn.addEventListener('click', () => {
    chainOperations();
    secondVal = '';
    change.textContent = '+'
    operator = '+';
    displayVal = false;
    secondInput = true;
    firstInput = false;
    prevVal = secondVal
    operation = true;
    console.log("add clicked");
    logMessages()
});

multiplyBtn.addEventListener('click', () => {
    chainOperations();
    secondVal = '';
    change.textContent = '*'
    operator = '*';
    displayVal = false;
    secondInput = true;
    firstInput = false;
    prevVal = secondVal
    operation = true;
    console.log("multiply clicked");
    logMessages()
});

equalBtn.addEventListener('click', () => {
    if(secondVal == ''){
        secondVal = firstVal;
    }else if (operator == ''){
        return displayVal = true;
    }else{
        displayVal = true;
    }
    change.textContent = '='
    firstInput = true;
    secondInput = false;
    console.log('equal clicked');
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    firstVal = totalVal;
    console.log(`previous val: ${prevVal}`); 
    logMessages()
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    if(displayVal == true){
        input.value = '';
        firstVal = '';
        secondVal = '';
        displayVal = false;
    }
    if(operation == true){
        input.value = '';
        operation = false;
    }
    if(firstInput == true){
        firstVal += button.textContent;
    }
    if(secondInput == true) {
        secondVal += button.textContent;
    }
    input.value += button.textContent;
    logMessages()
    });
})

let secondInput = false
let firstInput = true;
let displayVal = false;
let operation = false;

let totalVal = '';
let prevVal = ''
let secondVal = '';
let firstVal = '';
let operator = '';

function chainOperations(){
    if(operator !== ''){
        if(displayVal == false){
        operate(operator)
        console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
        firstVal = totalVal;
        secondVal = '';
        return input.value = firstVal;
        }
    }
}

function logMessages(){
    console.log(`display active: ${displayVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log('_____________________________________________');
}

function add(a, b){
    totalVal = a + b
    return input.value = totalVal
};

function subracts(a, b){
    totalVal = a - b
    return input.value =  totalVal;
};

function multiply(a, b){
    totalVal = a * b
    return input.value =  totalVal;
};

function divide(a, b){
    totalVal = a / b
    if(a == 0){
        return input.value = 'Cannot divide by zero';
    }
    return input.value = totalVal;
};

function operate(operator){
   switch(operator){
    case '+':
        if(prevVal == ''){
            prevVal = secondVal;
            return add(parseFloat(firstVal), parseFloat(secondVal))
        }else {
            return add(parseFloat(firstVal), parseFloat(prevVal))
        }
        
        break;
    case '*':
        if(prevVal == ''){
            prevVal = secondVal;
            return multiply(parseFloat(firstVal), parseFloat(secondVal))
        }else {
            return multiply(parseFloat(firstVal), parseFloat(prevVal))
        }
        break;
    case '/':
        if(prevVal == ''){
            prevVal = secondVal;
            return divide(parseFloat(firstVal), parseFloat(secondVal))
        }else {
            return divide(parseFloat(firstVal), parseFloat(prevVal))
        }
        break;
    case '-':
        if(prevVal == ''){
            prevVal = secondVal;
            return subracts(parseFloat(firstVal), parseFloat(secondVal))
        }else {
            return subracts(parseFloat(firstVal), parseFloat(prevVal))
        }
        break;
   }
}

