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

console.log(swapCase("Egypt"));
// task5
function uniqueCharacters(str) {
    var arr = str.split("");

    var unique = arr.filter(function (ch, index) {
        return arr.indexOf(ch) === index;
    });

    return unique.join("");
}

console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

