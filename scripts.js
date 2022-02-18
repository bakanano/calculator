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

function displayNumber(number) {
    if (lowerScreen.textContent === "0") {
        lowerScreen.textContent = "";
    }
    lowerScreen.textContent += number;
}

function clearScreen() {
    upperScreen.textContent = "";
    lowerScreen.textContent = "0";
}

function deleteNumber() {
    lowerScreen.textContent = lowerScreen.textContent.slice(0, -1);
}

function convertKeyboardOperators(operator) {
    switch(operator) {
        case "/":
            operator = "÷";
            break;
        case "*":
            operator = "×";
            break;
        case "-":
            operator = "-";
            break;
        case "+":
            operator = "+";
            break;
    }

}

function appendDecimal() {
    if (lowerScreen.textContent.includes(".")) {
        return;
    }
    lowerScreen.textContent += ".";
}

function getKeyboardInput(event) {
    let keyboardInput = event.key;
    if (keyboardInput >= 0 && keyboardInput <= 9) {
        displayNumber(event.key);
    }
    if (keyboardInput === "Escape") {
        clearScreen();
    }
    if (keyboardInput === "Backspace") {
        deleteNumber();
    }
    if (keyboardInput === "/" || keyboardInput === "*" || keyboardInput === "-" ||
    keyboardInput === "+") {
        convertKeyboardOperators(keyboardInput);
    }
    if (keyboardInput === ".") {
        appendDecimal();
    }

}

document.addEventListener("keydown", getKeyboardInput);
let upperScreen = document.querySelector(".upperDisplay");
let lowerScreen = document.querySelector(".lowerDisplay");
let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace");
let decimalButton = document.querySelector(".decimal");

clearButton.addEventListener("click", clearScreen);
backspaceButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);
