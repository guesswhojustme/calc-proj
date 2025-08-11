const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('#clear-btn');
const divideBtn = document.querySelector('#divide-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const subtractBtn = document.querySelector('#subtract-btn')
const addBtn = document.querySelector('#add-btn')
const equalBtn = document.querySelector('#equal-btn')
const parentBtnsDiv = document.querySelector('.btn-div')
let change = document.querySelector('.change')

//States
let firstInputActive = true;
let secondInputActive = false
let outputIsDisplaying = false;
let isOperating = false;

//Default values
let secondVal = '';
let firstVal = '';
let totalVal = '';
let operator = '';

//Operation button functionalities
parentBtnsDiv.addEventListener('click', (event) => {
    let target = event.target

    switch (target.id) {
        case 'divide-btn':
                resetOperatorValue();
                chainOperations();
                secondVal = '';
                change.textContent = '/' 
                operator = '/'
                changeStatesStatus();
                console.log("divide clicked");
                logMessages();
            break;
        case 'multiply-btn':
                resetOperatorValue();
                chainOperations();
                secondVal = '';
                change.textContent = '*'
                operator = '*';
                changeStatesStatus();
                console.log("multiply clicked");
                logMessages();
            break;
        case 'subtract-btn':
                resetOperatorValue();
                chainOperations();
                secondVal = '';
                change.textContent = '-'
                operator = '-';
                changeStatesStatus();
                console.log("subtract clicked");
                logMessages();
            break;
        case 'add-btn':
                resetOperatorValue();
                chainOperations();
                secondVal = '';
                change.textContent = '+'
                operator = '+';
                changeStatesStatus();
                console.log("add clicked");
                logMessages();
            break;
        case 'clear-btn':
                console.log("clear clicked");
                firstVal = '';
                secondVal = '';
                totalVal = '';
                operator = '';
                change.textContent = '';
                firstInputActive = true;
                secondInputActive = false;
                outputIsDisplaying = false;
                isOperating = false;
                input.value = '';
                logMessages()
            break;
        case 'equal-btn':
                if(!operator){
                    return 
                }else if(secondVal === ''){
                    secondVal = firstVal;
                }
                else{
                    outputIsDisplaying  = true;
                }
                change.textContent = '='
                firstInputActive = true;
                secondInputActive = false;
                console.log('equal clicked');
                console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
                firstVal = totalVal;
                logMessages()
            break;
    }
})

//Number input buttons, add numbers in input
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

    if(firstInputActive){
        firstVal += button.textContent;
    }else if(secondInputActive) {
        secondVal += button.textContent;
    }
    input.value += button.textContent;
    
    logMessages()
    });
})

//For chaining an operator, runs if user is trying trying to chain an operator
function chainOperations(){
    if(operator && outputIsDisplaying == false){ 
    operate(operator)
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    firstVal = totalVal;
    secondVal = '';
    return input.value = firstVal;
    }
}

//Runs if second value is not present and it resets operator value to allow user change operator when the first value is already defined
function resetOperatorValue() {
    if(secondVal === '') {
        operator = '';
    }
}

//Change states status when operating
function changeStatesStatus(){
    outputIsDisplaying = false;
    secondInputActive = true;
    firstInputActive = false;
    isOperating = true;
}

function logMessages(){
    console.log(`displaying value? : ${outputIsDisplaying }`);
    console.log(`operating? : ${isOperating}, operator: ${operator}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log(`first input active: ${firstInputActive}`);
    console.log(`second input active: ${secondInputActive}`);
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

