// task1
var str = prompt("Enter a string:");

var count = 0;

for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == "e") {
        count++;
    }
}

document.writeln("Number of 'e' characters = " + count + "<br>" );
// task2
var str2 = prompt("Enter a string:");

var caseSensitive = confirm("Consider case sensitivity?");

if (!caseSensitive) {
    str2 = str2.toLowerCase();
}

var reverse = "";

for (var j = str2.length - 1; j >= 0; j--) {
    reverse += str2.charAt(j);
}

if (str2 == reverse) {
   document.writeln("Palindrome");
} else {
    document.writeln("Not Palindrome");
}