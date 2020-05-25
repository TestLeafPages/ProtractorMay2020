// import { browser } from "protractor"
// import { element } from "protractor";

const driver = require("protractor")
const expect = require("chai").expect

describe("Automate Super Calculator", ()=>{
    
    it("Addition Functionality", function foo(){

        // driver.browser.waitForAngularEnabled(false)
        driver.browser.get("https://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(3000)

        driver.element(driver.by.model("first")).sendKeys("3");
        driver.element(driver.by.model("second")).sendKeys("2");

        // driver.element(driver.by.model("operator")) +
        // element(driver.by.cssContainingText("option", "%")).click()

        // driver.element(driver.by.model("operator")).element(driver.by.css('value="SUBTRACTION"')).click()

        driver.element(driver.by.model("operator")).$('[value="SUBTRACTION"]').click()

        driver.element(driver.by.buttonText("Go!")).click()
        
        driver.element(driver.by.tagName("h2")).getText().then(function text(txt){
            expect(txt).not.to.equal("1")
            // expect(txt).to.
        })

    })

})