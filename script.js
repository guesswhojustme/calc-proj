const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('#clear-btn');
const divideBtn = document.querySelector('#divide-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const subtractBtn = document.querySelector('#subtract-btn')
const addBtn = document.querySelector('#add-btn')
const equalBtn = document.querySelector('#equal-btn')
let change = document.querySelector('.change')

let firstInput = true;
let secondInput = false
let outputIsDisplaying = false;
let isOperating = false;

let secondVal = '';
let firstVal = '';
let totalVal = '';
let operator = '';

clearBtn.addEventListener('click', () => {
    console.log("clear clicked");
    firstVal = '';
    secondVal = '';
    totalVal = '';
    operator = '';
    change.textContent = '';
    firstInput = true;
    secondInput = false;
    outputIsDisplaying = false;
    isOperating = false;
    input.value = '';
    logMessages()
});

divideBtn.addEventListener('click', () => {
   checkSecondVal();
   chainOperations();
   secondVal = '';
   change.textContent = '/' 
   operator = '/'
   outputIsDisplaying = false;
   secondInput = true;
   firstInput = false;
   isOperating = true;
   console.log("divide clicked");
   logMessages();
});

subtractBtn.addEventListener('click', () => {
    checkSecondVal();
    chainOperations();
    secondVal = '';
    change.textContent = '-'
    operator = '-';
    outputIsDisplaying = false;
    secondInput = true;
    firstInput = false;
    isOperating = true;
    console.log("subtract clicked");
    logMessages();
});

addBtn.addEventListener('click', () => {
    checkSecondVal();
    chainOperations();
    secondVal = '';
    change.textContent = '+'
    operator = '+';
    outputIsDisplaying = false;
    secondInput = true;
    firstInput = false;
    isOperating = true;
    console.log("add clicked");
    logMessages();
});

multiplyBtn.addEventListener('click', () => {
    checkSecondVal();
    chainOperations();
    secondVal = '';
    change.textContent = '*'
    operator = '*';
    outputIsDisplaying = false;
    secondInput = true;
    firstInput = false;
    isOperating = true;
    console.log("multiply clicked");
    logMessages();
});

equalBtn.addEventListener('click', () => {
    if(!operator){
        return 
    }else if(secondVal === ''){
        secondVal = firstVal;
    }
    else{
        outputIsDisplaying  = true;
    }
    change.textContent = '='
    firstInput = true;
    secondInput = false;
    console.log('equal clicked');
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    firstVal = totalVal;
    logMessages()
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    if(outputIsDisplaying){
        input.value = '';
        firstVal = '';
        secondVal = '';
        outputIsDisplaying = false;
    }else if(isOperating){
        input.value = '';
        isOperating= false;
    }

    if(firstInput){
        firstVal += button.textContent;
    }else if(secondInput) {
        secondVal += button.textContent;
    }
    input.value += button.textContent;
    
    logMessages()
    });
})

function chainOperations(){
    if(operator && outputIsDisplaying == false){ 
    operate(operator)
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    firstVal = totalVal;
    secondVal = '';
    return input.value = firstVal;
    }
}

function checkSecondVal() {
    if(secondVal === '') {
        operator = '';
    }
}


function logMessages(){
    console.log(`displaying value? : ${outputIsDisplaying }`);
    console.log(`operating? : ${isOperating}, operator: ${operator}`);
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
        return add(parseFloat(firstVal), parseFloat(secondVal))
        break;
    case '*':
        return multiply(parseFloat(firstVal), parseFloat(secondVal))
        break;
    case '/':
        return divide(parseFloat(firstVal), parseFloat(secondVal))
        break;
    case '-':
        return subracts(parseFloat(firstVal), parseFloat(secondVal))
        break;
   }
}

