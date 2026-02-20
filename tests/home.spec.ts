import { test, expect } from "../fixtures/base";

test.describe("Home Feature", () => {
  test("Search for movie from homepage", async ({ homePage }) => {
    homePage.searchMovie("Inception");

    await expect(homePage.searchResults).toBeAttached();
    await expect(homePage.searchItem).toBeAttached();
  });
});
