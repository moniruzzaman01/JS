var friends = ['Alia', 'Dalia', 'Malia', 'Salia', 'Liliya', "Jalaiya"]
var numbers = [95, 66, 80, 59, 47, 77]


var i = 0 // initialization

while (i < (numbers.length)) { // condition check

    // getting single value from array
    var number = numbers[i]
    var friend = friends[i]

    // condition checking and showing output
    if (number >= 90) {
        console.log("Name:" + " " + friend + "\n" + "Grade: A+")
    } else if (number >= 80 && number < 90) {
        console.log("Name:" + " " + friend + "\n" + "Grade: A")
    } else if (number >= 70 && number < 80) {
        console.log("Name:" + " " + friend + "\n" + "Grade: B")
    } else if (number >= 60 && number < 70) {
        console.log("Name:" + " " + friend + "\n" + "Grade: C")
    } else if (number >= 50 && number < 60) {
        console.log("Name:" + " " + friend + "\n" + "Grade: D")
    } else if (number >= 0 && number < 50) {
        console.log("Name:" + " " + friend + "\n" + "Grade: F")
    } else {
        console.log("Invalid number")
    }

    i++ // increment
}