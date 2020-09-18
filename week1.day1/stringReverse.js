var str = "Welcome to Chennai";

var each = str.split(" ");

for (let index = each.length-1; index >= 0; index--) {
    // console.log(each[index])
    process.stdout.write(each[index]+" ")
}