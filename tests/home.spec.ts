import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Homepage loads successfully", async ({ page }) => {
  const home = new HomePage(page);

  await home.navigateToHome();

  await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

  await expect(
    page.getByPlaceholder("Search for a movie, tv show, person...", {
      exact: true,
    }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  await expect(page.getByRole("link", { name: "Join TMDB" })).toBeVisible();
});
