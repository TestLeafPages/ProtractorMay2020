var arr = new Array();

arr.push("Sam")
arr.push("Naveen")
arr.push("Bowya")
arr.push("Hari")

var num = 0

var mapRes = arr.map(ele => ele +" "+ (++num))

console.log(mapRes)