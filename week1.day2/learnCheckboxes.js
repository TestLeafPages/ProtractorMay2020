const driver = require("protractor")

describe("LeafGround Checkboxes", ()=>{
    it("Programming languages", ()=>{

        driver.browser.waitForAngularEnabled(false);
        driver.browser.get("http://leafground.com/pages/checkbox.html");
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.browser.element(driver.by.xpath("(//input[@type='checkbox'])[1]")).click()

    })
})

