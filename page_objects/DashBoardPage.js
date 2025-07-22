class DashBoardPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator('#logout')
  }
    
    async logoutUser() {
        await this.page.logoutButton.click()
    };
};
