const display = document.getElementById("display");
const operators = [add, mul, div, sub, equal, perc, del, clear];
const hide = document.getElementById("hide");
// const buttons = [one, two, three, four, five, six, seven, eight, nine, zero, dot, ast];
const buttons = document.querySelectorAll(".grid-item");
let firstNumber = '';
let secondNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.innerText += button.innerText;
    });
});

clear.addEventListener("click", () => {
    display.innerText = '';
});

add.addEventListener("click", () => {
    operator = '+';
    firstNumber = display.innerText;
    display.innerText = "";
});

sub.addEventListener("click", () => {
    operator = '-';
    firstNumber = display.innerText;
    display.innerText = "";
});

mul.addEventListener("click", () => {
    operator = '*';
    firstNumber = display.innerText;
    display.innerText = "";
});

div.addEventListener("click", () => {
    operator = '/';
    firstNumber = display.innerText;
    display.innerText = "";
});

perc.addEventListener("click", () => {
    if (display.innerText != "") {
        if (operator && firstNumber) {
            secondNumber = display.innerText;
            display.innerText = (parseFloat(firstNumber) * parseFloat(secondNumber)) / 100;
        } 
        else {
            display.innerText = parseFloat(display.innerText) / 100;
        }
    }
});

del.addEventListener("click", () => {
    let updatedText = display.innerText.slice(0, -1);
    display.innerText = updatedText;
})
equal.addEventListener("click", () => {
    secondNumber = display.innerText;
    let result;

    switch(operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        case '%':
            result = perc;
        default:
            result = "Invalid Operation";
    }
    display.innerText = result;
    firstNumber = "0";
    secondNumber = "0";
});