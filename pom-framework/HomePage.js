const driver = require("protractor")
const base = require("./ProtractorBase")

class Home extends base.ProtractorBase{

    async verifyText(){
        console.log(
           await this.getText(this.locateElement("xpath", "//h2[contains(text(),'Welcome ')]"))
        )
    }

}

exports.Home = Home