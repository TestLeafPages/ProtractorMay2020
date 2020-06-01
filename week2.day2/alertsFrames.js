const driver = require("protractor")

describe("Leafground", ()=>{
    
    xit("Handle Alert", async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Alert.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.buttonText("Prompt Box")).click()

        driver.element(driver.by.css("anyText"))

        var alert = driver.browser.switchTo().alert()
        alert.sendKeys("Chennai")
        console.log( await alert.getText())
        alert.accept()

        driver.browser.sleep(5000)

    })

    it("LeafGround Frames",async ()=>{
        
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/frame.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)
        driver.browser.switchTo().frame(1)
        driver.browser.switchTo().frame("frame2")
        driver.element(driver.by.id("Click1")).click()
        driver.browser.switchTo().defaultContent()
        var text = await driver.element(driver.by.tagName("h1")).getText()
        console.log(text);
        

        driver.browser.sleep(5000)

    })

})