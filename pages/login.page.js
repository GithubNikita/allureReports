var LoginPage = function () {

    this.get = function (url) {
        browser.driver.get(url);
    };

	this.login = function () {
		browser.driver.findElement(by.id('Email')).sendKeys('formybesttesting');
        browser.driver.findElement(by.id('next')).click();
        browser.sleep(3000);
		browser.driver.findElement(by.id('Passwd')).sendKeys('22194122Nef');
        browser.driver.findElement(by.id('signIn')).click();
        browser.sleep(3000);
	};
};

module.exports = LoginPage;