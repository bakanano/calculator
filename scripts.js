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
function storeNumbers(e) {
    console.log(e.target.innerText);
}

var lowerDisplay = document.querySelector("lowerDisplay");
var numbersButton = Array.from(document.querySelectorAll(`[data-number]`));
numbersButton.forEach((number) => number.addEventListener("mouseup", storeNumbers));