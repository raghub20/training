
describe("Login module test suite", function(){

	
	beforeAll(function(){
		//prerequisites of testsuite
		browser.manage().window().maximize();
	});

	beforeEach(function(){
		//prerequisites of testcase
		browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
	});

	it("Testcase01: Verify login functionality with valid data", function(){

		//enter username driver.findElement(By.css('value'))
		element(by.model("Auth.user.name")).sendKeys("angular");
		//enter password
		element(by.model("Auth.user.password")).sendKeys("password");
		//enter user description
		element(by.id("formly_1_input_username_0")).sendKeys("Angular");
		element(by.partialButtonText("Login")).click();
		browser.sleep(3000);

		//Verify the test result
		var expectedMessage = "You're logged in!!";
		var actualMessage = element(by.xpath('//p[contains(text(), "logged in")]')).getText();

		expect(expectedMessage).toEqual(actualMessage);
	});

	it("Testcase01: Verify login functionality with invalid data", function(){
		//protractor code.
		//browser.manage().window().maximize();
		//browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
		//enter username driver.findElement(By.css('value'))
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