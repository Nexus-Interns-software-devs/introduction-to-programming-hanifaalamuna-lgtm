M// LAB-03: Control Flow - If/Else Statements
// Demonstrates if, else if, and nested conditions

console.log("=== CONTROL FLOW DEMO ===\n");


// 1. Simple If/Else: Positive or Negative Number
console.log("1. Positive or Negative Check");
console.log("-----------------------------");

let number = 15;

if (number > 0) {
  console.log(`The number ${number} is positive`);
} else {
  console.log(`The number ${number} is negative`);
}


// 2. Multiple Conditions: Student Grade
console.log("\n2. Student Grade Calculator");
console.log("-----------------------------");

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


// 3. Nested Conditions: Voting Check
console.log("\n3. Voting Eligibility");
console.log("-----------------------------");

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