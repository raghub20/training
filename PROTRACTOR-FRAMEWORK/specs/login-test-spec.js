
var LoginPage = require('./../pages/login-page.js');
var login;

describe("Login module test suite", function(){

	
	beforeAll(function(){
		//prerequisites of testsuite
		browser.manage().window().maximize();
		login = new LoginPage();
	});

	beforeEach(function(){
		//prerequisites of testcase
		browser.get(browser.baseUrl);
	});

	it("Testcase01: Verify login functionality with valid data", function(){

		login.enterUsername(browser.params.username);
		login.enterPassword(browser.params.password);
		login.enterUserdescription("angular");
		browser.sleep(3000);
		//Verify the test result
		var expectedMessage = "You're logged in!!";
		var actualMessage = login.getLoginErrorMessage();

		expect(expectedMessage).toEqual(actualMessage);
	});

	it("Testcase01: Verify login functionality with invalid data", function(){
		
		element(by.model("Auth.user.name")).sendKeys("angular1");
		//enter password
		element(by.model("Auth.user.password")).sendKeys("password1");
		//enter user description
		element(by.id("formly_1_input_username_0")).sendKeys("Angular");
		element(by.partialButtonText("Login")).click();
		browser.sleep(3000);

		//Verify the test result
		var expectedMessage = "Username or password is incorrect";
		var actualMessage = element(by.xpath("//*[contains(@class, 'alert')][contains(text(), 'Username or password')]")).getText();

		expect(expectedMessage).toEqual(actualMessage);
	});

	afterAll(function(){
		browser.quit();
	});


});