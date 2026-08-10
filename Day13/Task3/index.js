var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var addResult = document.getElementById("addResult");
var mulResult = document.getElementById("mulResult");

function calculate() {
    var x = Number(num1.value);
    var y = Number(num2.value);
    var a = Number(num3.value);
    var b = Number(num4.value);
    addResult.innerHTML = x + y;
    mulResult.innerHTML = a * b;
}
num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);
num3.addEventListener("input", calculate);
num4.addEventListener("input", calculate);

calculate();
