// TICKET-02: Grade Calculator
// Calculates letter grade based on student's score

console.log("=== GRADE CALCULATOR ===\n");

// Declare score variable
let score = 85;
let grade;

// Determine grade using if/else if statements

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

// Display result
console.log(`Score: ${score} - Grade: ${grade}`);