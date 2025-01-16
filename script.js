function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const historyList = document.getElementById('history-list');
    try {
        const result = eval(display.value);
        const historyItem = document.createElement('li');
        historyItem.textContent = `${display.value} = ${result}`;
        historyList.appendChild(historyItem);
        display.value = result;
    } catch {
        display.value = 'Error';
    }
}

function clearHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
}
