import { test, expect } from "../fixtures/base";

test.describe("Login Feature", () => {
  test("Invalid login shows error message", async ({ loginPage }) => {
    await expect(loginPage.heading).toContainText("Login to your account");

    await loginPage.login("wrongUser", "wrongPass");

    await expect(loginPage.errorMessage).toContainText("There was a problem");
  });

  test("Successfully log in to TMDB", async ({ loginPage }) => {
    await expect(loginPage.heading).toContainText("Login to your account");
    await expect(loginPage.usernameInput).toBeEnabled();
    await expect(loginPage.passwordInput).toBeEnabled();
    await expect(loginPage.loginButton).toBeEnabled();

    await loginPage.login();

    await expect(loginPage.profile).toBeAttached();
    await expect(loginPage.avatar).toBeAttached();
  });
});
