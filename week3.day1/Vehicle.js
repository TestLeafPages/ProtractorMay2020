// var number;     //declaring

// number = 100;   //initialized    public private

class Vehicle{  //Base or Parent Class

    #wheels = 10;

    constructor(){
        console.log("Base class")
    }

    accelerate(){
        console.log("Moving")
        // return this.#wheels
    }

    stop(){
        console.log("Applying the brake")
    }

}

module.exports = Vehicle

/* const obj = new Vehicle()
console.log(obj.wheels)
console.log(obj.accelerate());
obj.stop() */
