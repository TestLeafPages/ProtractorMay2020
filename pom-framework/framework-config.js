exports.config={
    framework:"mocha",
    directConnection : true,
    capabilities: {
        browserName:"chrome",
        sharedTestFiles: true,
        maxInstances: 2
        
    },
    specs:[".././pom-framework/TC001.js"],
    
    restartBrowserBetweenTests: true,

    mochaOpts:{
        timeout:0,
        reporter: 'mocha-allure-reporter'
    }
}