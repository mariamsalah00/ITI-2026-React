// a
function sumInputs(input1, input2) {
    return input1 + input2;
}

// b- 
function getFullName(firstName, middleName, lastName) {
    var first = firstName !== undefined ? firstName : "";
    var middle = middleName !== undefined ? middleName : "";
    var last = lastName !== undefined ? lastName : "";
    var fullName = first + " " + middle + " " + last;
    return fullName;
}

// c-
function getFactorial(num) {
    if (num < 0) return "Undefined (Negative numbers don't have factorials)";
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// d- Calculator function accepting 3 inputs. It triggers an alert AND returns the calculation.
function simpleCalculator(number1, number2, operation) {
    var result;

    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number2 !== 0 ? number1 / number2 : "Error: Division by zero";
            break;
        default:
            result = "Error: Invalid Operation Type";
    }

    alert("Calculator Result: " + result);
    return result;
}

// e- Function that takes a numerical student score and evaluates their grade rank
function evaluateGrade(degree) {
    if (degree >= 85 && degree <= 100) {
        return "Excellent";
    } else if (degree >= 75 && degree < 85) {
        return "VGood";
    } else if (degree >= 65 && degree < 75) {
        return "Good";
    } else if (degree >= 0 && degree < 65) {
        return "Fail";
    } else {
        return "Invalid degree score provided";
    }
}
