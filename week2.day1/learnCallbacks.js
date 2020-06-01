function f1(x){
    return x+10;
}

function f2(callback) {
    setTimeout(()=>{
        console.log( callback(10) )
    }, 3000)
}

f2(f1)


