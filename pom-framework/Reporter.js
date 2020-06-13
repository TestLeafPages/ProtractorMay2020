// const allure = require("mocha-allure-reporter")

class Reporters {

    async takeSnap(){
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    }
    
    testStep(){
        allure.createStep("initial", () => {
            takeSnap()
            console.log("Success");
        });
    } 

}

module.exports = Reporters