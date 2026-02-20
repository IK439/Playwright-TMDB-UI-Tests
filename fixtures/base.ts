import { test as base } from "@playwright/test";
import * as Page from "./index";

// Define the custom fixtures available to tests
type MyFixtures = {
  homePage: Page.HomePage;
  loginPage: Page.LoginPage;
  resetPasswordPage: Page.ResetPasswordPage;
};

// Extend Playwright's base test with custom fixtures
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new Page.HomePage(page);

    await homePage.navigateToHome();

    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new Page.LoginPage(page);

    await loginPage.navigateToLogin();

    await use(loginPage);
  },

  resetPasswordPage: async ({ page }, use) => {
    const resetPassword = new Page.ResetPasswordPage(page);

    await resetPassword.navigateToResetPassword();

    await use(resetPassword);
  },
});

// Re-export expect so tests can import from this fixture file
export { expect } from "@playwright/test";
