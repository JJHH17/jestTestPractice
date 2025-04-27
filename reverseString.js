// Reverses a given string

function reverseString(string) {
    let splitString = string.split(""); // Splits our string
    let reverseSplit = splitString.reverse(); // Reverses split string
    let joinReverse = reverseSplit.join(""); // Joins reversed array
    return joinReverse; // End Result
}

module.exports = reverseString;