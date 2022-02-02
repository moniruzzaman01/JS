var friends = ['Alia', 'Dalia', 'Malia', 'Salia', 'Liliya', "Jalaiya"]
var numbers = [95, 66, 80, 59, 47, 77]


for (i = 0; i < (numbers.length); i++) {

    // condition checking and showing output
    if (numbers[i] >= 90) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: A+")
    } else if (numbers[i] >= 80 && numbers[i] < 90) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: A")
    } else if (numbers[i] >= 70 && numbers[i] < 80) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: B")
    } else if (numbers[i] >= 60 && numbers[i] < 70) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: C")
    } else if (numbers[i] >= 50 && numbers[i] < 60) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: D")
    } else if (numbers[i] >= 0 && numbers[i] < 50) {
        console.log("Name:" + " " + friends[i] + "\n" + "Grade: F")
    } else {
        console.log("Invalid number")
    }
}