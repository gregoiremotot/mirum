const args = process.argv.slice(2); //to remove "node" and "$fileName"

let stringToConvert = args[0]
let intValue = 0

if (isNaN(stringToConvert)) {
    console.log("invalid value")
    return;
}

let revertedString = reverseString(stringToConvert);

let tmpVal = 0
for (let i = 0; i < revertedString.length; i++) {
    if (revertedString[i] != '-') {
        // get ascii value, remove 48 (value of '0'), multiplie by 10^position in the string starting from the end
        intValue += (revertedString[i].charCodeAt(0) - 48) * Math.pow(10, i)
    }
}

// to handle negative number
if (stringToConvert[0] == '-') {
    intValue *= -1
}

console.log('Converted to int : ', intValue);

function reverseString(str) {
    return str.split("").reverse().join("");
}