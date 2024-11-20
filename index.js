const display = document.getElementById("display");
const buttons = [one, two, three, four, five, six, seven, eight, nine, zero, dot, ast];

buttons.forEach(button, () => {
    button.addEventListener('click', () => {
        display.innerText += buttons.innerText;
    });
});