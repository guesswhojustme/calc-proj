const input = document.querySelector('#input');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('#equal-btn');

clear.addEventListener('click', () => {
    
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        input.value += button.textContent;
    });
})

function add(a, b){
    return a + b;
};

function subracts(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(num1, operator, num2){
    add()
    subracts()
    multiply()
    divide()
}





