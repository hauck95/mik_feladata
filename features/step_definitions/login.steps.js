import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../page_objects/LoginPage.js';
import { DashBoardPage } from '../../page_objects/DashBoardPage.js';

Given('the user is on the login page', async function () {
    const loginpage = new LoginPage(this.page)
    await loginpage.goto();
});

When('the user logs in with the following credentials:', async function (dataTable) {
    const loginpage = new LoginPage(this.page)
    const data = dataTable.rowsHash();
    await loginpage.login(data.email, data.password)
});

Then('the user should be logged in successfully', async function () {
    const dashBoardPage = new DashBoardPage(this.page)
  await expect(dashBoardPage.logoutButton).toBeVisible()
});

Then('the user should see an error message for invalid credentials', async function () {
    const loginpage = new LoginPage(this.page)
  await expect(loginpage.errorMessage).toHaveText("Incorrect username or password")
});
