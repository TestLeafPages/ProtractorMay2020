const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Handle Alerts",async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Alert.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.buttonText("Alert Box1")).click()
        .then(null, function(err){
            console.log(err.name)
        })

        var text = await driver.element(driver.by.buttonText("Confirm Box")).getText()
        console.log(text);
        
    })
})