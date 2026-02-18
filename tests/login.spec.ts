import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Group login tests together", () => {
  test("Invalid login shows error message", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigateToLogin();

    await login.login("wrongUser", "wrongPass");

    expect(
      page.getByRole("link", { name: "There was a problem" }),
    ).toBeDefined();
    await expect(page.getByText("We couldn't find your")).toContainText(
      "We couldn't find your username.",
    );
    await expect(
      page.getByText(/You have \d+ remaining login attempts\./),
    ).toBeVisible();
  });

  test("Successfully login to TMDB", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigateToLogin();

    await expect(page.getByRole("heading", { name: /login/i })).toBeVisible();
    await expect(page.getByLabel("Username")).toBeVisible();
    await expect(page.getByLabel("Password")).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

    await login.login();

    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: /profile/i })).toBeVisible();
  });
});
