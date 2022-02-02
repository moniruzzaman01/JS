let arr = [4, 10]

function getAverage(...arr) {
    let sum = 0;
    let average;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    average = (sum / arr.length)
    return average;
}
var av = getAverage(...arr)
console.log("Average value is:", av)