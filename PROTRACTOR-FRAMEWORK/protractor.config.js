
exports.config = {

	// what is your test execution framework.
	framework : "jasmine",
	//which browser it should use to execute your tests.
	capabilities : {
		'browserName' : 'chrome'
	},
	// where it can find your test code.
	specs : ['C:/_RAGHU/TUTORIALS/PROTRACTOR/PROJECT/training/PROTRACTOR-FRAMEWORK/specs/login-test-spec.js']

}