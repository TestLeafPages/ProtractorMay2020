exports.config = {
    framework: 'mocha',
    directConnect: true,
    specs: ["./week3.day2/learnWaits.js","./week3.day2/learnWaits.js"],
    mochaOpts: {
        timeout: 0
    }, multiCapabilities: [
        {"browserName": "chrome"},
        {"browserName": "firefox"}
    ]
}