
function getAge(){
    var age = 0
    return function (){
        return age++;
    }
}

let res = getAge()

console.log(res());
console.log(res());
console.log(res());