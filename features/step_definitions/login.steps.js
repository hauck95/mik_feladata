const { Given, When, Then } = require('@cucumber/cucumber');
import { expect } from '@playwright/test';
const { LoginPage } = require('../../page_objects/LoginPage');
const { DashBoardPage } = require('../../page_objects/DashBoardPage');

Given('the user is on the login page', async () => {
    await LoginPage.goto();
});

When('the user logs in with the following credentials:', async function (dataTable) {
    const data = dataTable.rowsHash();
    await LoginPage.login(data.username, data.password)
});

Then('the user should be logged in successfully', async () => {
  await expect(DashBoardPage.logoutButton).toBeVisible()
});

Then('I should see an error message for invalid credentials', async () => {
  await page.waitForSelector('.error-message'); // Adjust selector to your app
});
