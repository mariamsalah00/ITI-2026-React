// a
var numbers = [15, 70, 25, 90, 40, 55, 10, 80];
function sumAll(numbersArray) {
    var sum = eval(numbersArray.join("+"));
    var product = eval(numbersArray.join("*"));

    console.log("Sum = " + sum);
    console.log("Product = " + product);
}
sumAll(numbers);
// b
function sumAll2() {
var numbersArray2= [];

    for (var i = 0; i < arguments.length; i++) {
        numbersArray2.push(arguments[i]);
    }

    var sum = eval(numbersArray2.join("+"));
    var product = eval(numbersArray2.join("*"));

    console.log("Sum = " + sum);
    console.log("Product = " + product);
}

sumAll2(2, 4, 6, 8);

