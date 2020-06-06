
const car = require("./Car")

class Audi extends car{

    sunroof(){
        console.log("Enjoy the wind")
    }

}

const obj = new Audi()
obj.sunroof()