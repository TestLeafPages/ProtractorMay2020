const driver = require("protractor")
const loginPage = require("./LoginPage")
const { readExcel } = require("../week3.day2/readExcel")

describe("TC001_LoginLeafTaps", ()=>{

    beforeEach(()=>{
        driver.browser.waitForAngularEnabled(false)
    })
        var xcel= new readExcel()
        xcel.getExcelData(".././utils/data.xlsx", "Sheet1").forEach(data =>{
        console.log(data)
        
        it("Enter Username", ()=>{
        new loginPage.Login()
        .launchBrowser()
        .enterUsername(data.Username)
        .enterPassword(data.Password)
        .clickLogin()
        .verifyText();
        })

    afterEach(()=>{
        driver.browser.close()
    })

})
})
   