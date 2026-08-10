// a- Sum Function (Unlimited Arguments)
function sum() {
    var total = 0;

    for (var i = 0; i < arguments.length; i++) {
        total += Number(arguments[i]);
    }

    return total;
}

// b- Full Name
function fullName(first, middle, last) {
    first = first || "";
    middle = middle || "";
    last = last || "";

    return (first + " " + middle + " " + last).trim().replace(/\s+/g, " ");
}

// c- Factorial
function factorial(num) {
    if (num < 0) {
        return "Invalid Number";
    }

    var fact = 1;

    for (var i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

// d- Calculator
function calculator(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

        case "%":
            return num1 % num2;

        default:
            return "Invalid Operator";
    }
}

// e- Grade
function getGrade(degree) {
    if (degree >= 85) return "Excellent";
    else if (degree >= 75) return "Very Good";
    else if (degree >= 65) return "Good";
    else return "Fail";
}

