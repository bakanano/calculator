function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+":
            return add(a, b);
        case "−":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

function populateLowerDisplay(e) {
    lowerDisplay.textContent = e.target.textContent;
}

function setOperation(e) {
    firstOperand = lowerDisplay.textContent;
    operator = e.target.textContent;
    upperDisplay.textContent = `${firstOperand + operator}`;
}

function evaluateExpression(e) {
    secondOperand = lowerDisplay.textContent;
    lowerDisplay.textContent = operate(operator, firstOperand, secondOperand);
    upperDisplay.textContent = `${firstOperand + operator + secondOperand + "="}`;
}

function clear() {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "0"
    
}

var firstOperand = "";
var operator = "";
var secondOperand = "";
var lowerDisplay = document.querySelector(".lowerDisplay");
var upperDisplay = document.querySelector(".upperDisplay");

var numberButtons = Array.from(document.querySelectorAll(`[data-number]`));
numberButtons.forEach((number) => number.addEventListener("click", populateLowerDisplay));

var operatorButtons = Array.from(document.querySelectorAll(`[data-operator]`));
operatorButtons.forEach((operator) => operator.addEventListener("click", setOperation));

var equalsButton = document.querySelector(".evaluate");
equalsButton.addEventListener("click", evaluateExpression);

var clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);
