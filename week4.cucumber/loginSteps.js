const { Given, When, Then } = require("cucumber");
const driver = require("protractor")
var { setDefaultTimeout } = require("cucumber")
setDefaultTimeout(60 * 1000)
 
Given("Launch the application", async ()=>{
    await driver.browser.get("http://leaftaps.com/opentaps/control/main")
})

Given("Maximize the browser", async ()=>{
    await driver.browser.manage().window().maximize()
})

Given("Set the timeouts", async ()=>{
    await driver.browser.manage().timeouts().implicitlyWait(3000)
})

Given("Enter the username as {string}", async (data)=>{
    await driver.element(driver.by.id("username")).sendKeys(data)
})

Given("Enter the password as {string}", async (data)=>{
    await driver.element(driver.by.id("password")).sendKeys(data)
})

When("Clicking on the login button", async ()=>{
    await driver.element(driver.by.className("decorativeSubmit")).click()
})

Then("Verify login successful", async ()=>{
    console.log(await driver.element(driver.by.tagName("h2")).getText())
})



