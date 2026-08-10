var numbers = [10, 50, 20, 80, 50, 30, 90, 20, 100, 60, 10];

// Remove Duplicates
function removeDuplicates(arr) {
    var unique = [];

    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) == -1) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

// Sort Ascending
function sortAscending(arr) {
    var asc = arr.slice();

    asc.sort(function (a, b) {
        return a - b;
    });

    return asc;
}

// Sort Descending
function sortDescending(arr) {
    var desc = arr.slice();

    desc.sort(function (a, b) {
        return b - a;
    });

    return desc;
}

var unique = removeDuplicates(numbers);

console.log("No Duplicates:", unique);
console.log("Ascending:", sortAscending(unique));
console.log("Descending:", sortDescending(unique));
// Filter > 50 (User Defined)

function filterGreaterThan50(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("User Filter:", filterGreaterThan50(unique));
// Filter > 50 (Built-in)
var filtered = unique.filter(function (element) {
    return element > 50;
});

console.log("Built-in Filter:", filtered);
// Max & Min (User Defined)
function getMax(arr) {
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function getMin(arr) {
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log("Max (User):", getMax(unique));
console.log("Min (User):", getMin(unique));

// Max & Min (Math Functions)

console.log("Max (Math):", Math.max.apply(null, unique));
console.log("Min (Math):", Math.min.apply(null, unique));
