// LAB-03: Control Flow - If/Else Statements
// Demonstrates if/else, else if, and nested conditions

console.log("=== CONTROL FLOW ===\n");

// 1. Simple If/Else
let number = 15;

if (number >= 0) {
    console.log(`The number ${number} is positive.`);
} else {
    console.log(`The number ${number} is negative.`);
}

// 2. Multiple Conditions (else if)
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Score ${score}: Grade ${grade}`);

// 3. Nested Conditions
let age = 20;
let registered = true;

if (age >= 18) {
    if (registered) {
        console.log("You are eligible to vote and registered!");
    } else {
        console.log("You are eligible to vote but not registered.");
    }
} else {
    console.log("You are not eligible to vote.");
}