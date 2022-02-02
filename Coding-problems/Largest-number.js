let number1 = 4;
let number2 = 19;
let number3 = 8;

console.log("First number: ", number1)
console.log("Second number: ", number2)
console.log("Third number: ", number3)

if (number1 > number2 && number1 > number3) {
    console.log("Largest number is: ", number1)
} else if (number2 > number1 && number2 > number3) {
    console.log("Largest number is: ", number2)
} else {
    console.log("Largest number is: ", number3)
}