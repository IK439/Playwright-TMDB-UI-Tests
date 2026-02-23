import { test, expect } from "../fixtures/base";

test.describe("Home Feature", () => {
  test("Search for movie from homepage", async ({ homePage }) => {
    await expect(homePage.searchBox).toBeAttached();
    await expect(homePage.trending).toBeAttached();
    await expect(homePage.latestTrailers).toBeAttached();
    await expect(homePage.whatsPopular).toBeAttached();
    await expect(homePage.freeToWatch).toBeAttached();
    await expect(homePage.joinToday).toBeAttached();
    await expect(homePage.leaderBoard).toBeAttached();
  });
});
