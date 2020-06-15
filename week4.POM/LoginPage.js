const driver = require("protractor")
const home = require("./HomePage.js")
const base = require("./ProtractorBase")

class Login extends base.ProtractorBase{

    launchApp(){
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        return this;
    }

    enterUsername(sam){
        driver.element(driver.by.id("username")).sendKeys(sam)
        return this;
    }

    enterPassword(data){
        driver.element(driver.by.id("password")).sendKeys(data)
        return this;
    }

    clickLogin(){
        driver.element(driver.by.className("decorativeSubmit")).click()
        return new home.Home();
    }

}

exports.Login = Login