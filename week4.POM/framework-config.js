exports.config={
    framework:"mocha",
    directconnect : true,
    capabilities: {
        browserName:"chrome",
        shardTestFiles: true,
        maxInstances: 2  
    },
    specs:["TC001.js","TC002.js"],
    // restartBrowserBetweenTests: true,

    mochaOpts:{
        timeout:0,
        
    }
}