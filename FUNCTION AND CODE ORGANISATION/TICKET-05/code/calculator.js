// TICKET-05
// Modular Calculator

// -------------------------
// Core Operations
// -------------------------

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "You cannot divide by zero";
    }
    return a / b;
}

function exponent(a, b) {
    return a ** b;
}

function squareRoot(a) {
    if (a < 0) {
        return "Invalid number";
    }
    return Math.sqrt(a);
}

// -------------------------
// Memory
// -------------------------

let memory = 0;

function storeMemory(value) {
    memory = value;
}

function recallMemory() {
    return memory;
}

function clearMemory() {
    memory = 0;
}

// -------------------------
// History
// -------------------------

let history = [];

function addToHistory(operation, result) {
    history.push(operation + " = " + result);

    if (history.length > 10) {
        history.shift();
    }
}

function showHistory() {
    console.log("History");

    for (let i = 0; i < history.length; i++) {
        console.log((i + 1) + ". " + history[i]);
    }
}

function clearHistory() {
    history = [];
}

// -------------------------
// Testing
// -------------------------

let answer;

answer = add(5, 3);
console.log("Addition:", answer);
addToHistory("5 + 3", answer);

answer = subtract(10, 4);
console.log("Subtraction:", answer);
addToHistory("10 - 4", answer);

answer = multiply(6, 7);
console.log("Multiplication:", answer);
addToHistory("6 x 7", answer);

answer = divide(20, 5);
console.log("Division:", answer);
addToHistory("20 / 5", answer);

answer = exponent(2, 4);
console.log("Exponent:", answer);
addToHistory("2 ^ 4", answer);

answer = squareRoot(64);
console.log("Square Root:", answer);
addToHistory("√64", answer);

// Memory

storeMemory(answer);

console.log("Memory:", recallMemory());

clearMemory();

console.log("Memory after clearing:", recallMemory());

// History

showHistory();

clearHistory();

console.log("History after clearing:");
showHistory();