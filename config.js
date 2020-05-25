const driver = require("protractor")

exports.config = {
    framework: "mocha",
    directconnect: true,
    specs:["./week1.day2/firstScript.js"],
    mochaOpts: {
         timeout: 0
    }
}




















        // onprepare: function(){
        //     driver.browser.manage().window().maximize()
        //     driver.browser.manage().timeouts().implicitlyWait(30000)
        //     return driver.browser.get("https://marmelab.com/ng-admin-demo/login.html")
        // }
        // capabilities: {
        //     browserName: 'chrome',
        //     shardTestFiles: true,
        //     maxInstances: 2
        // },