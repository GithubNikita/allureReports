var AddNewAccountPage = function () {

    var accountNameInput = element(by.model('ctrl.form.account.data.name')),
        checkBox = element(by.model('ctrl.form.account.data.shareData')),
        containerNameInput = element(by.model('form.container.data.name')),
        nextBtn = element(by.css('button[data-ng-click=\'stepperCtrl.nextStep()\']')),
        createBtn = element(by.css('button[type=\'submit\']')),
        cancelBtn = element(by.css('button[data-ng-click=\'$event.preventDefault(); ctrl.cancel()\']'));

    this.expectEnabledAccountNameInput = function () {
        expect(accountNameInput.isEnabled()).toBeTruthy();
    };

    this.fillAccountName = function (value) {
        accountNameInput.sendKeys(value);
    };

    this.getAccountName = function () {
        return accountNameInput.getAttribute('value');
    };

    this.selectCheckBox = function () {
        checkBox.click();
    };

    this.expectCheckedCheckBox = function () {
        expect(checkBox.getAttribute('class')).toMatch('material-checked');
    };

    this.expectDisabledCreateButtonInput = function () {
        expect(createBtn.isEnabled()).toBeFalsy();
    };

    this.clickNextButton = function () {
        nextBtn.click();
    };

    this.expectEnabledContainerNameInput = function () {
        expect(containerNameInput.isEnabled()).toBeTruthy();
    };

    this.fillContainerName = function (value) {
        containerNameInput.sendKeys(value);
    };

    this.getContainerName = function () {
        return containerNameInput.getAttribute('value');
    };

    this.clickCancelButton = function () {
        cancelBtn.click();
    };

    this.expectNotDisplayedContainerNameInput = function () {
        expect(containerNameInput.isDisplayed()).toBeFalsy();
    };
};

module.exports = AddNewAccountPage;