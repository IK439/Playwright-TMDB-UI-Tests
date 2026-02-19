import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Feature", () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.navigateToLogin();
  });

  test("Invalid login shows error message", async () => {
    await expect(login.heading).toBeVisible();
    await expect(login.usernameInput).toBeVisible();
    await expect(login.passwordInput).toBeVisible();
    await expect(login.loginButton).toBeVisible();

    await login.login("wrongUser", "wrongPass");

    await expect(login.errorMessage).toBeVisible();
  });

  test("Successfully log in to TMDB", async () => {
    await login.login();

    await expect(login.profile).toBeVisible();
    await expect(login.avatar).toBeVisible();
  });
});
