const driver = require("protractor")

describe("LeafGround", ()=>{
    it("Drag & Drop", ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/drop.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        var drag = driver.element(driver.by.id("draggable"))
        var drop = driver.element(driver.by.id("droppable"))

        var allVar = driver.element.all(driver.by.className("example"))

        // driver.element(driver.by.css("input#username")).sendKeys("demosalesmanager")

        driver.browser.actions().dragAndDrop(drag, drop).perform()

        driver.browser.sleep(5000)
    })
})