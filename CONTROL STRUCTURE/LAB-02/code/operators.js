// LAB-02: Operators and Expressions
// Demonstrates arithmetic, comparison, and logical operators

console.log("=== OPERATORS AND EXPRESSIONS ===\n");

// Arithmetic Operations
console.log("Arithmetic Operations");
console.log("---------------------");

let num1 = 10;
let num2 = 5;

// Addition
let sum = num1 + num2;
console.log(`Sum: ${sum}`);

// Multiplication
let product = num1 * num2;
console.log(`Product: ${product}`);

// Modulo (remainder)
let remainder = num1 % num2;
console.log(`Remainder: ${remainder}`);


// Comparison Operations
console.log("\nComparison Operations");
console.log("---------------------");

console.log(`Is Equal: ${num1 === num2}`);
console.log(`Is Greater: ${num1 > num2}`);
console.log(`Is Not Equal: ${num1 !== num2}`);


// Logical Operations
console.log("\nLogical Operations");
console.log("---------------------");

let isStudent = true;
let hasID = true;
let hasMoney = false;

// AND operator (both conditions must be true)
console.log(`Both True: ${isStudent && hasID}`);

// OR operator (at least one condition must be true)
console.log(`One True: ${isStudent || hasMoney}`);

// NOT operator (changes true to false and false to true)
console.log(`Not Student: ${!isStudent}`);