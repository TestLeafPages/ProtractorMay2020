const veh = require("./Vehicle")

class Car extends veh{// Derived class or Child class

    carWheels = 4;

    constructor(){
        super()
        console.log("Inside Child Class");
    }
    // Overriding
    #accelerate(){
        console.log("Applied NOS")
    }
/*    applyBrake(){
        console.log("Applied Hydraulic Brakes")
    }   */
    applyBrake(){
        console.log("Activated Anti-lock Braking System for "+this.carWheels+" wheels")
    }

}

module.exports = Car

var obj = new Car()
obj.accelerate()
obj.applyBrake()