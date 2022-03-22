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

function populateLowerDisplay(number) {
    if (lowerDisplay.textContent === "0" || lowerDisplay.textContent != " ") {
        lowerDisplay.textContent = "";
    }
    lowerDisplay.textContent += number;
    console.log(number);
}

function setOperation(operator) {
    firstOperand = lowerDisplay.textContent;
    currentOperator = operator;
    upperDisplay.textContent = `${firstOperand + currentOperator}`;
}

function evaluateExpression(e) {
    secondOperand = lowerDisplay.textContent;
    lowerDisplay.textContent = operate(currentOperator, firstOperand, secondOperand);
    upperDisplay.textContent = `${firstOperand + currentOperator + secondOperand + "="}`;
}

function clear() {
    upperDisplay.textContent = "";
    lowerDisplay.textContent = "0";    
    currentOperator = "";
    firstOperand = "";
    secondOperand = "";
}

function backspace() {
    lowerDisplay.textContent = lowerDisplay.textContent.slice(0, -1);
}

function addDecimal() {
    if (lowerDisplay.textContent.includes(".")) {
        return;
    }
    lowerDisplay.textContent += ".";
}

var firstOperand = "";
var currentOperator = "";
var secondOperand = "";
var lowerDisplay = document.querySelector(".lowerDisplay");
var upperDisplay = document.querySelector(".upperDisplay");

var numberButtons = document.querySelectorAll(`[data-number]`);
numberButtons.forEach((number) => number.addEventListener("click", () => populateLowerDisplay(number.textContent)));

var operatorButtons = Array.from(document.querySelectorAll(`[data-operator]`));
operatorButtons.forEach((operator) => operator.addEventListener("click", () => setOperation(operator.textContent)));

var equalsButton = document.querySelector(".evaluate");
equalsButton.addEventListener("click", evaluateExpression);

var clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);

var backspaceButton = document.querySelector(".backspace");
backspaceButton.addEventListener("click", backspace);

var decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", addDecimal);