var webdriver = require('selenium-webdriver'),
	test = require('selenium-webdriver/testing');

// Client side JavaScript functions
test.describe('Main window', function() {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;

    var driver = new webdriver.Builder().forBrowser('firefox').build();
    	driver.manage().window().maximize();
    	driver.get('http://localhost:8000');
    	driver.sleep(driver.executeScript('window.onload'));

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        driver.quit().then(done);
    });

    it('should ask to the user if he/she is ready to proceed', function() {

    });
});