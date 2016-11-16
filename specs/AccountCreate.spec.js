var LoginPage = require('../pages/login.page');
var AddNewAccountPage = require('../pages/addNewAccount.page');

describe('Test Login Page', function () {

    var loginPage = new LoginPage(),
        addNewAccountPage = new AddNewAccountPage(),
        url = 'https://tagmanager.google.com/#/admin/accounts/create',
        accountName = 'Account';

    beforeAll(function () {
        browser.ignoreSynchronization = true;
        loginPage.get(url);
		loginPage.login();
        browser.ignoreSynchronization = false;
        browser.waitForAngular();
        //browser.pause();
    });

    it('Настройка аккаунта', function () {
        addNewAccountPage.expectEnabledAccountNameInput();
        addNewAccountPage.fillAccountName(accountName);
        expect(addNewAccountPage.getAccountName()).toBe(accountName);
        addNewAccountPage.selectCheckBox();
        addNewAccountPage.expectCheckedCheckBox();
        addNewAccountPage.expectDisabledCreateButtonInput();
    });

    it('Настройка контейнера', function () {
        addNewAccountPage.clickNextButton();
        addNewAccountPage.expectEnabledContainerNameInput();
        addNewAccountPage.fillContainerName(accountName);
        expect(addNewAccountPage.getContainerName()).toBe(accountName);
        addNewAccountPage.expectDisabledCreateButtonInput();
    });

    it('Отмена операции настройки', function () {
        addNewAccountPage.clickCancelButton();
        expect(addNewAccountPage.getAccountName()).toBe('');
        addNewAccountPage.expectNotDisplayedContainerNameInput();
        addNewAccountPage.expectDisabledCreateButtonInput();
    });
});
