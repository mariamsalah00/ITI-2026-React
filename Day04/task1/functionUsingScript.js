
console.log("--- Assignment A: Summation ---");
console.log("Summing two numbers (15 + 25):", sumInputs(15, 25));
console.log("Summing a string and a number ('Age: ' + 30):", sumInputs("Age: ", 30));

// --- Testing Assignment B ---
console.log("\n--- Assignment B: Full Name Builder ---");
console.log("All parameters valid:", getFullName("John", "Robert", "Doe"));
// Passing an undefined parameter to see the safety fallback work
console.log("Missing middle name parameter:", getFullName("Jane", undefined, "Smith"));

// --- Testing Assignment C ---
console.log("\n--- Assignment C: Factorial ---");
console.log("Factorial of 5:", getFactorial(5));
console.log("Factorial of 0:", getFactorial(0));

// --- Testing Assignment D ---
console.log("\n--- Assignment D: Calculator ---");
// This will trigger a browser alert popup window first, then log the return value
var calcOutput = simpleCalculator(10, 5, "*");
console.log("Returned Calculator Value:", calcOutput);

// --- Testing Assignment E ---
console.log("\n--- Assignment E: Student Grading ---");
console.log("Grade for score 92:", evaluateGrade(92));
console.log("Grade for score 78:", evaluateGrade(78));
console.log("Grade for score 50:", evaluateGrade(50));
