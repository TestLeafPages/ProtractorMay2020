//JS Hoisting
var salary = 5000;

foo()

function foo(){
    salary = 7000
    console.log(salary)
    salary = 10000;
    console.log(salary)
}





