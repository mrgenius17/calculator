function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator,a,b) {
    if (operator==='+') {
        return add(a,b);
    }
    if (operator==='-') {
        return subtract(a,b);
    }
    if (operator==='*') {
        return multiply(a,b);
    }
    if (operator==='/') {
        return divide(a,b);
    }
}
var operand1 = null;
var operand2 = null;
var operator = null;

const display = document.querySelector('#display-container');

const digits = document.querySelector("#digits-div").querySelectorAll('button');
digits.forEach(button => button.addEventListener('click', () => {
    display.textContent += button.id; 
}));

const operators = document.querySelectorAll('.operator');
operators.forEach(operatorButton => operatorButton.addEventListener('click', () => {
    operator = operatorButton.id;
    operand1 = +(display.textContent);
    display.textContent = "";
}));

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    operand2 = +(display.textContent);
    if(!(operand1 || operand2)){
        console.log(null);
        return;
    }

    display.textContent = operate(operator, operand1, operand2);
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    display.textContent = "";
    operand1 = operand2 = operator = null;
})