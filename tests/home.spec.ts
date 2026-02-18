import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Homepage loads successfully", async ({ page }) => {
  const home = new HomePage(page);

  await home.navigateToHome();

  // Verify main heading/logo is visible
  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

  // Verify search input is visible
  await expect(
    page.getByPlaceholder("Search for a movie, tv show, person...", {
      exact: true,
    }),
  ).toBeVisible();

  // Verify login button is visible
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  // Verify join button is visible
  await expect(page.getByRole("link", { name: "Join TMDB" })).toBeVisible();
});
