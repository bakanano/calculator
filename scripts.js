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
    lowerScreen.textContent = "";
}

function getKeyboardInput(e) {
    let keyBoardInput = e.key;
    if (keyBoardInput >= 0 && keyBoardInput <= 9) {
        displayNumber(e.key);
    }
    if (keyBoardInput === "Escape") {
        clearScreen();
    }

}

document.addEventListener("keydown", getKeyboardInput);
let lowerScreen = document.querySelector(".lowerDisplay");
let clearButton = document.querySelector(".clear");
let backspaceButton = document.querySelector(".backspace");
