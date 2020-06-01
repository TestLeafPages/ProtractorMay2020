const driver = require("protractor")

describe("Julimer", ()=>{
    it("Addition", ()=>{
         driver.browser.get("https://juliemr.github.io/protractor-demo/")
         driver.browser.manage().window().maximize()
         driver.browser.manage().timeouts().implicitlyWait(3000)

         driver.element(driver.by.model("first")).sendKeys(3)
         driver.element(driver.by.model("second")).sendKeys(2)

         driver.element(driver.by.id("gobutton")).click()

         var text = driver.element(driver.by.tagName("h2")).getText()

         console.log(text);
         

    })
})