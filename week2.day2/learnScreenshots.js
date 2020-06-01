const driver = require("protractor")
var file = require('fs')

describe("Leafground", ()=>{
    
    it("Handle Windows", async ()=>{

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get("http://leafground.com/pages/Window.html")
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(3000)

        driver.browser.takeScreenshot().then(img => {
            var stream = file.createWriteStream("./snaps/001.png")
            stream.write(new Buffer(img, 'base64'))
            stream.end()
        })
        
    })

})