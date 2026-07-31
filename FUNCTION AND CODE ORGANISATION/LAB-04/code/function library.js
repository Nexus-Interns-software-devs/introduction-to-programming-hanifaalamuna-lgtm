// LAB 04
// Function Library

// Reverse a string

/**
 * Reverse a string
 * @param {string} text
 * @returns {string}
 * @example
 * reverseString("hello");
 */
function reverseString(text) {
    return text.split("").reverse().join("");
}

// Count words

/**
 * Count words in a sentence
 * @param {string} text
 * @returns {number}
 * @example
 * countWords("I love JavaScript");
 */
function countWords(text) {
    let words = text.split(" ");
    return words.length;
}

// Check palindrome

/**
 * Check if a word is a palindrome
 * @param {string} text
 * @returns {boolean}
 * @example
 * isPalindrome("madam");
 */
function isPalindrome(text) {
    let reverse = text.split("").reverse().join("");

    if (text == reverse) {
        return true;
    } else {
        return false;
    }
}

// Check prime number

/**
 * Check if a number is prime
 * @param {number} n
 * @returns {boolean}
 * @example
 * isPrime(5);
 */
function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

// Factorial

/**
 * Find factorial
 * @param {number} n
 * @returns {number}
 * @example
 * factorial(5);
 */
function factorial(n) {

    let answer = 1;

    for (let i = 1; i <= n; i++) {
        answer = answer * i;
    }

    return answer;
}

// Fibonacci

/**
 * Find Fibonacci number
 * @param {number} n
 * @returns {number}
 * @example
 * fibonacci(6);
 */
function fibonacci(n) {

    let first = 0;
    let second = 1;

    if (n == 0) {
        return first;
    }

    if (n == 1) {
        return second;
    }

    for (let i = 2; i <= n; i++) {
        let next = first + second;
        first = second;
        second = next;
    }

    return second;
}

// Remove duplicates

/**
 * Remove duplicate values
 * @param {Array} arr
 * @returns {Array}
 * @example
 * removeDuplicates([1,2,2,3]);
 */
function removeDuplicates(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }

    }

    return newArray;
}

// Find median

/**
 * Find the median
 * @param {Array} numbers
 * @returns {number}
 * @example
 * findMedian([1,2,3]);
 */
function findMedian(numbers) {

    numbers.sort(function(a, b) {
        return a - b;
    });

    let middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 == 0) {
        return (numbers[middle - 1] + numbers[middle]) / 2;
    }

    return numbers[middle];
}

// Validate email

/**
 * Check email
 * @param {string} email
 * @returns {boolean}
 * @example
 * isValidEmail("abc@gmail.com");
 */
function isValidEmail(email) {

    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

// Validate phone

/**
 * Check phone number
 * @param {string} phone
 * @returns {boolean}
 * @example
 * isValidPhone("08012345678");
 */
function isValidPhone(phone) {

    if (phone.length == 11) {
        return true;
    } else {
        return false;
    }
}

// Testing

console.log(reverseString("hello"));
console.log(countWords("I love JavaScript"));
console.log(isPalindrome("madam"));

console.log(isPrime(7));
console.log(factorial(5));
console.log(fibonacci(6));

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(findMedian([2, 4, 6, 8, 10]));

console.log(isValidEmail("hanifa@gmail.com"));
console.log(isValidPhone("08012345678"));