var number = Math.random() * 100; // Generate a random number from 0 to 100.

let param = null;
let value = null;
if(number > 70) {
    value = "People";
    param = "String value";
} else {
    param = 15;
}

function typeAndValue(param) {
    if(param instanceof String) {
        console.log(`[String]  ${param}.`);
    } else {
        console.log(`[Number] ${param}.`);
    }
}

console.log(`Number is ${parseInt(number)}.`);
console.log(`Hello, ${value || "World"}!`);

typeAndValue(param);