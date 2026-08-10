// task1
function capitalizeWords(str) {
    var words = str.split(" ");
    var result = "";

    for (var i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }

    return result;
}

document.write(capitalizeWords("the quick brown fox")+"<br>");
// task2
function alphabeticalOrder(str) {

    var arr = str.split("");
    var temp;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr.join("");
}

document.write(alphabeticalOrder("javascript"));
// task3
function longestWord(str) {

    var words = str.split(" ");
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {

        if (words[i].length > longest.length) {
            longest = words[i];
        }

    }

    return longest;
}

document.write(longestWord("Web Development Tutorial") + "<br>");
// task4
function swapCase(str) {

    var result = "";

    for (var i = 0; i < str.length; i++) {

        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }

    }

    return result;
}

document.write(swapCase("Egypt")+"<br>");
// task5
function uniqueChars(str) {

    var result = "";

    for (var i = 0; i < str.length; i++) {

        if (result.indexOf(str[i]) == -1) {
            result += str[i];
        }

    }

    return result;
}

document.write(uniqueChars("thequickbrownfoxjumpsoverthelazydog")+"<br>");

