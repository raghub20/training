
var LoginPage = function(){
	this.enterUsername = function(username) {
		element(by.model("Auth.user.name")).sendKeys(username);
	}

	this.enterPassword = function(password) {
		element(by.model("Auth.user.password")).sendKeys(password);
	}

	this.enterUserdescription = function(desc) {
		element(by.id("formly_1_input_username_0")).sendKeys(desc);
	}

	this.clickOnLoginButton = function() {
		element(by.partialButtonText("Login")).click();
	}

	this.getLoginErrorMessage = function() {
		var errorMessage = element(by.xpath("//*[contains(@class, 'alert')][contains(text(), 'Username or password')]"))
		.getText();
		return errorMessage;
	}
}

module.exports = LoginPage;