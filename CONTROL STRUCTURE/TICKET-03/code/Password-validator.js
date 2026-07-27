// TICKET-03: Password Validator

console.log("=== PASSWORD VALIDATOR ===\n");

// Password to test
const password = "SecurePass99";

console.log(`Password: "${password}"`);

// Validation checks
const hasLength = password.length >= 8;
const hasNumber = /[0-9]/.test(password);
const hasUpper = /[A-Z]/.test(password);

// Display result
if (hasLength && hasNumber && hasUpper) {
  console.log("Result: Password Valid ✓");
} else {
  console.log("Result: Password Invalid");

  console.log("Missing:");

  if (!hasLength) {
    console.log("- Length (need 8+ characters)");
  }

  if (!hasNumber) {
    console.log("- Number");
  }

  if (!hasUpper) {
    console.log("- Uppercase Letter");
  }
}