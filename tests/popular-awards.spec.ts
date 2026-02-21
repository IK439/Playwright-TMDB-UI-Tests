import { test, expect } from "../fixtures/base";

test.describe("Popular Awards Feature", () => {
  test("Sort and filter popular awards by popularity ascending", async ({
    popularAwardsPage,
  }) => {
    await popularAwardsPage.sortResultsBy();
    await expect(popularAwardsPage.sortOptionText).toContainText(
      "Popularity Ascending",
    );

    await popularAwardsPage.filterFromDate(1, 21, 2026);
    await expect(popularAwardsPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await popularAwardsPage.filterToDate(2, 21, 2026);
    await expect(popularAwardsPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await popularAwardsPage.search();
    await expect(popularAwardsPage.searchResults).toBeAttached();
  });
});
