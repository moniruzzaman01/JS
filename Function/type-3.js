// Factorial

function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

let factOf4 = factorial(4)
console.log("factorial of 4 is:", factOf4)