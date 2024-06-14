const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendToDisplay(value) {
    display.innerText += value;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}