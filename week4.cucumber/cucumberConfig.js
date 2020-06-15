exports.config = {

    framework: 'custom',
    directConnect: true,
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // feature file
    specs: [
        './login.feature'
    ],

    // step definition files
    cucumberOpts: {
        require: ['./loginSteps.js', './hooks.js']
    }

}