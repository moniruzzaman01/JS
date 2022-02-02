// Absolute value
let number1 = 50;
let number2 = -2;

console.log("Absolute value of number 1 is: ", Math.abs(number1));
console.log("Absolute value of number 2 is: ", Math.abs(number2));


// Random number
let random = (Math.random() * 10);
let roundOfRandom = Math.round(random)
let ceilOfRandom = Math.ceil(random)
let floorOfRandom = Math.floor(random)

console.log("Random number is: ", random);
console.log("Random number(with round property) is: ", roundOfRandom);
console.log("Random number(with floor property) is: ", floorOfRandom);
console.log("Random number(with ceil property) is: ", ceilOfRandom);


// Ceil,Floor,Round of a number 
let number3 = 34.3423542;

console.log("Ceil of variable number3 is: ", Math.ceil(number3));
console.log("floor of variable number3 is: ", Math.floor(number3));
console.log("Round of variable number3 is: ", Math.round(number3));


// Finding Max value
let arr = [1, 2, 5, 7, 34, 7, 89, 54, 7, 54];

let maxValue = Math.max(...arr)
console.log("Maximum value in array is: ", maxValue)


// Finding Min value

let minValue = Math.min(...arr)
console.log("Maximum value in array is: ", minValue)