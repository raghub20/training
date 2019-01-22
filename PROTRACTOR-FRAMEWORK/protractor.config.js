
var ConsoleReporter = require('jasmine-console-reporter');
var Reporter = new ConsoleReporter({
	colors: 1
});

/*const HTMLReport = require('protractor-pretty-html-reporter').Reporter;
const Reporter = new HTMLReport({
	path: __dirname + '/results',
    screenshotOnPassed: false
});*/


exports.config = {

	// what is your test execution framework.
	framework : "jasmine",
	//which browser it should use to execute your tests.
	//directConnect : true, //1st chrome, then firefox
	capabilities : {
		'browserName' : 'chrome',
		chromeOptions : {args: ['disable-infobars', 'start-maximized']}
	},
	/*multiCapabilities : [
		{
			'browserName': 'chrome',
			'chromeOptions': {
    		'args': []
   			}
  		},
    	{
    		'browserName': 'firefox',
			'moz:firefoxOptions': {
    			'args': ['--safe-mode']
  			}
		}
	],*/
	// where it can find your test code.
	specs : ['./specs/login-test-spec.js'],

	/*suites : {
		'regressionTestSuite' : './specs/regression-test-suite/*.js',
		'smokeTestSuite' : './specs/smoke-test-suite/*.js'
	},*/
	onPrepare() {
		jasmine.getEnv().addReporter(Reporter);
	},
	baseUrl : 'http://www.way2automation.com/angularjs-protractor/registeration/#/login',
	params : {
		'username' : 'angular',
		'password' : 'password'
	},
	//restartBrowserBetweenTests: true


}