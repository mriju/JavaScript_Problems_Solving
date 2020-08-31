//This is for Feet to Mile
function feetToMile(feet) {

    if (feet < 0) {
        return "You have given Negatiove value.. so please give any positive value to get result..Thanks !"
    } else {
        var mile = feet / 5250
        return mile;
    }
}
var result = feetToMile(1050);
console.log(result);

//This is for Wood Calculator
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Give Positive Values";
    } else {
        var totalWood = 1 * chair + 3 * table + 5 * bed;
        return totalWood;
    }
}
var result = woodCalculator(2, 2, 3);
console.log(result);

//This is for Brike Calculator
function brikeCalculator(n) {
    if (n < 0) {
        return "Give Positive Value"
    } else if (n <= 10) {
        var ten = n * 15;
        return ten;
    } else if (n <= 20) {
        var twenty = n * 12;
        return twenty;
    } else {
        var high = n * 10;
        return high;
    }
}

var result = brikeCalculator(-1);
console.log(result);

//Find tinyFriend from an array
function tinyFriend(giveValue) {
    var minString = giveValue[0];
    for (var i = 0; i < giveValue.length; i++) {
        var string = giveValue[i];
        if (string < minString) {
            minString = string;
        }
    }
    return minString;
}
var smallest = ['abc', 'aaccbb', 'ab', 'a'];
var result = tinyFriend(smallest);
console.log(result);