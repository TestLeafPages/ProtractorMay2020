const driver = require("protractor")
const base = require("./ProtractorBase")
const { Home } = require("./HomePage")

class Login extends base.ProtractorBase {

    launchBrowser(){
        driver.browser.get("http://leaftaps.com/opentaps/control/main")
        this.maximizeBrowser
        this.applyImpliWait(3000)
        return this;
    }

    enterUsername(data){
        this.type(this.locateElement("id","username"), data)
        return this;
    }

    enterPassword(data){
        this.type(this.locateElement("id","password"), data)
        return this;
    }

    clickLogin(){
        this.click(this.locateElement("class","decorativeSubmit"))
        return new Home();
    }
    
}

exports.Login = Login