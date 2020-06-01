var obj = {
    name: "Sam",
    job: "SDET",
    city: "Chennai",
    address: [
        {
        permanent: "Chennai"    // 0
        },
        {
        temporary: "Bangalore"  // 1
        }
    ]
}

var res = obj.address.filter((temp)=>{
    if (temp.temporary == "bangalore") 
        return true;
})

console.log(obj);

