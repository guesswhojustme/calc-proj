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
    firstInputVal = '';
    secondInputVal = '';
    operator = '';
    change.textContent = '';
    firstInput = true;
    secondInput = false;
    input.value = '';
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    // console.log(`current first input value: ${firstInputVal}`);
    // console.log(`current second input value: ${secondInputVal}`);
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log('_____________________________________________');
});

divideBtn.addEventListener('click', () => {
    if(firstVal !== '' && secondVal !== ''){
        console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
        secondVal = '';
    }
   change.textContent = '/' 
   operator = '/'
   secondInput = true;
   firstInput = false;
//    firstVal = firstInputVal;

   input.value = '';
   console.log("divide clicked");
   console.log(`current input value: ${inputVal}`);
   console.log(`first value: ${firstVal}` );
   console.log(`second value: ${secondVal}` );
   console.log(`first input active: ${firstInput}`);
   console.log(`second input active: ${secondInput}`);
   console.log('_____________________________________________');
});

subtractBtn.addEventListener('click', () => {
    if(firstVal !== '' && secondVal !== ''){
        console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
        secondVal = '';
    }
    console.log(`display active: ${displayVal}`);
    change.textContent = '-'
    operator = '-';
    secondInput = true;
    firstInput = false;
    // firstVal = firstInputVal;
    input.value = '';
    console.log("subtract clicked");
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log('_____________________________________________');
});

addBtn.addEventListener('click', () => {
    if(firstVal !== '' && secondVal !== ''){
        console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
        console.log("add clicked");
        console.log(`current input value: ${inputVal}`);
        console.log(`first value: ${firstVal}` );
        console.log(`second value: ${secondVal}` );
        console.log(`first input active: ${firstInput}`);
        console.log(`second input active: ${secondInput}`);
        secondVal = '';
    }
    change.textContent = '+'
    operator = '+';
    secondInput = true;
    firstInput = false;
    // firstVal = firstInputVal;
    input.value = '';
    console.log("add clicked");
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log('_____________________________________________');
});

multiplyBtn.addEventListener('click', () => {
    if(firstVal !== '' && secondVal !== ''){
        console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
        secondVal = '';
    }
    change.textContent = '*'
    operator = '*';
    secondInput = true;
    firstInput = false;
    // firstVal = firstInputVal;
    input.value = '';
    console.log("multiply clicked");
    console.log(`current input value: ${inputVal}`);
    console.log(`first value: ${firstVal}` );
    console.log(`second value: ${secondVal}` );
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log('_____________________________________________');
});

equalBtn.addEventListener('click', () => {
    // secondVal = secondInputVal;
    change.textContent = '='
    if(secondVal == ''){
        displayVal = false;
    }else{
        displayVal = true;
    }
    console.log("equal clicked");
    console.log(`first value: ${firstVal}`);
    console.log(`second value: ${secondVal}`);
    console.log(`${firstVal} ${operator} ${secondVal} = ${operate(operator)}`);
    console.log(`current input value: ${inputVal}`);
    firstInput = true;
    secondInput = false;
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    console.log(`display active: ${displayVal}`);
    console.log('_____________________________________________');
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
    console.log(`display active: ${displayVal}`);
    console.log(`first input active: ${firstInput}`);
    console.log(`second input active: ${secondInput}`);
    
    if(input.value == 0){
        inputVal = '';
    }
    if(displayVal == true){
        input.value = '';
        inputVal = '';
        firstVal = '';
        secondVal = '';
        displayVal = false;
    }
    if(firstInput == true){
        // firstInputVal += button.textContent
        firstVal += button.textContent;
    }
    if(secondInput == true) {
        // secondInputVal += button.textContent
        secondVal += button.textContent;
    }
    
    inputVal += button.textContent;
    input.value += button.textContent;
    console.log(`current input value: ${inputVal}`);
    // console.log(`current first input value: ${firstInputVal}`);
    // console.log(`current second input value: ${secondInputVal}`);
    console.log(`first value: ${firstVal}`);
    console.log(`second value: ${secondVal}`);
    console.log('_____________________________________________');
    
    });
})

let secondInput = false
let secondInputVal = '';

let firstInput = true;
let firstInputVal = ''

let displayVal = false;

let inputVal = '';
let operator = '';

let secondVal = '';
let firstVal = '';

function add(a, b){
    firstVal = a + b
    return input.value = firstVal
};

function subracts(a, b){
    firstVal = a - b
    return input.value =  firstVal;
};

function multiply(a, b){
    firstVal = a * b
    return input.value =  firstVal;
};

function divide(a, b){
    firstVal = a / b
    if(a == 0){
        return input.value = 'Cannot divide by zero';
    }
    return input.value = firstVal;
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
        return divide(parseFloat(firstVal), parseFloat(secondVal))
        break;
    case '-':
        return subracts(parseInt(firstVal), parseInt(secondVal))
        break;
   }
}

