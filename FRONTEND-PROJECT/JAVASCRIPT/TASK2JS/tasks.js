// Basic Math Operations
function basicMathOperations() {
    let num1 = Number(prompt("Enter first number:"));
    let num2 = Number(prompt("Enter second number:"));
    alert(`Sum: ${num1 + num2}\nDifference: ${num1 - num2}\nProduct: ${num1 * num2}\nQuotient: ${(num1 / num2).toFixed(2)}`);
}

// Logical Condition
function checkLogicalCondition() {
    let num = Number(prompt("Enter a number:"));
    alert(num > 10 && num % 2 === 0 ? "Conditions met!" : "Conditions not met!");
}

// Ternary Operator
function checkPositiveNegative() {
    let num = Number(prompt("Enter a number:"));
    alert(num >= 0 ? "Positive" : "Negative");
}

// Odd or Even
function checkOddEven() {
    let num = Number(prompt("Enter a number:"));
    alert(num % 2 === 0 ? "Even" : "Odd");
}

// Grade System
function gradeSystem() {
    let percentage = Number(prompt("Enter your percentage:"));
    let grade;
    switch (true) {
        case percentage >= 90: grade = "A"; break;
        case percentage >= 80: grade = "B"; break;
        case percentage >= 70: grade = "C"; break;
        default: grade = "F"; break;
    }
    alert(`Your grade is: ${grade}`);
}

// Multiplication Table
function multiplicationTable() {
    let num = Number(prompt("Enter a number:"));
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`;
    }
    alert(result);
}

// Count Digits
function countDigits() {
    let num = prompt("Enter a number:");
    alert(`Number of digits: ${num.length}`);
}

// Welcome Alert
function welcomeAlert() {
    alert("Welcome to my website!");
}

// User Confirmation
function userConfirmation() {
    let confirmation = confirm("Do you want to continue?");
    alert(confirmation ? "You chose to continue!" : "You canceled!");
}

// Prompt for Age
function promptForAge() {
    let age = Number(prompt("Enter your age:"));
    alert(age >= 18 ? "You are eligible!" : "You are not eligible!");
}

// BMI Calculator
function bmiCalculator() {
    let weight = Number(prompt("Enter your weight (kg):"));
    let height = Number(prompt("Enter your height (m):"));
    let bmi = weight / (height * height);
    alert(`Your BMI is: ${bmi.toFixed(2)}`);
}

// Reverse a String
function reverseString() {
    let str = prompt("Enter a string:");
    alert(str.split("").reverse().join(""));
}

// Count Vowels
function countVowels() {
    let str = prompt("Enter a string:");
    let count = str.match(/[aeiouAEIOU]/g)?.length || 0;
    alert(`Number of vowels: ${count}`);
}

// Check Palindrome
function checkPalindrome() {
    let str = prompt("Enter a string:");
    alert(str === str.split("").reverse().join("") ? "True" : "False");
}

// Extract Initials
function extractInitials() {
    let name = prompt("Enter your full name:");
    alert(name.split(" ").map(word => word[0].toUpperCase()).join(".") + ".");
}

// Replace Words
function replaceWords() {
    let sentence = prompt("Enter a sentence:");
    let wordToReplace = prompt("Enter the word to replace:");
    let newWord = prompt("Enter the new word:");
    alert(sentence.replace(wordToReplace, newWord));
}

// Split Sentence
function splitSentence() {
    let sentence = prompt("Enter a sentence:");
    alert(sentence.split(" "));
}

// Remove Spaces
function removeSpaces() {
    let str = prompt("Enter a string:");
    alert(str.replace(/\s+/g, ""));
}

// Find Character Frequency
function findCharFrequency() {
    let str = prompt("Enter a string:");
    let char = prompt("Enter a character to find:");
    let count = (str.match(new RegExp(char, "g")) || []).length;
    alert(`Frequency of '${char}': ${count}`);
}
