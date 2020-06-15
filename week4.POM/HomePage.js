const driver = require("protractor")
const base = require("./ProtractorBase")

class Home extends base.ProtractorBase {

    async verifyText(){
        console.log(await driver.browser.getTitle())
    }

}

exports.Home = Home