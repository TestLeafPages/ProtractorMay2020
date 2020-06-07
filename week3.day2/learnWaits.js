const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Webdriver Wait",async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/appear.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        // driver.browser.sleep(5000)

        var ele = driver.element(driver.by.id("btn"))

        driver.element(driver.by.id("username")).sendKeys(driver.protractor.Key.TAB, driver.protractor.Key.TAB)

        var eleAll = driver.element.all(driver.by.id("username"))

        driver.browser.wait(driver.protractor.ExpectedConditions.visibilityOf(ele), 5000)
        console.log(await ele.getText())
    })
})