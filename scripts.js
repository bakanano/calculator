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
    if (lowerDisplay.textContent === "0") {
        lowerDisplay.textContent = "";
    }
    lowerDisplay.textContent += number;
}

function getKeyboardInput(e) {
    let keyBoardInput = e.key;
    if (keyBoardInput >= 0 && keyBoardInput <= 9) {
        //console.log(typeof(e.key))
        displayNumber(e.key);
    }

}

document.addEventListener("keydown", getKeyboardInput);
let lowerDisplay = document.querySelector(".lowerDisplay");
