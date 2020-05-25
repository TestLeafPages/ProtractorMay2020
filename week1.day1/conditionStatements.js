// if, if-else, nested if, 
// I and JS

var age = 2;
var gender = "male";

if (age < 13) {
    if(gender == "male"){
        console.log("Kids")
    }
} else if(age > 12 && age < 20) { // and
    console.log("Teens")
} else {
    console.log("You're not allowed")
}