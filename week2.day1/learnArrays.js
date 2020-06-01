/* var arr = [10, 20, 30, 40, 50];  literals
//          0   1   2   3   (index or address)

arr.forEach(ele => {
    console.log(ele);
}) */

var arr = new Array();  // Object reference
arr.push(34)    // 0
arr.push(21)    // 1
arr.push(16)    // 2 here 1)
arr.push(1)     // 3      2)
arr.push(88)    // 4       3)
arr.push(56)    // 5
// arr.unshift("Luz")
// arr.shift()
console.log( arr.splice(2, 3) );

for (let i = arr.length-1; i >= 0 ; i--) {
    // console.log(arr[i])
}
arr.sort()

var res = arr.filter(function(ele){
    return ele > 30;
})

console.log(res);










