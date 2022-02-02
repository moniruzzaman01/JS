// max value using math build-in-object

let arr = [3, 5, 23, 4, -5657, 7, 5, 86, 68, 68, 89, 77, 6789, 879, 54, 34, 23, 1]
let maxValue = Math.max(...arr)
console.log("Maximum value is: ", maxValue)



// min value using math build-in-object

let minValue = Math.min(...arr)
console.log("Minimum value is: ", minValue)


// Second largest number 

let secondLargestNumber = -Infinity;

function secLgNum() {
    let temp = Math.max(...arr)
    arr.splice(arr.indexOf(temp),1)
    secondLargestNumber = Math.max(...arr)
    return secondLargestNumber
}
console.log("Second Largest Number is:",secLgNum());