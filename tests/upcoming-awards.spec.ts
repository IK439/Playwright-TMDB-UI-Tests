import { test, expect } from "../fixtures/base";

test.describe("Upcoming Awards Feature", () => {
  test("Sort and filter upcoming awards by popularity descending", async ({
    upcomingAwardsPage,
  }) => {
    await upcomingAwardsPage.sortResultsBy();
    await expect(upcomingAwardsPage.sortOptionText).toContainText(
      "Popularity Descending",
    );

    await upcomingAwardsPage.filterFromDate(1, 21, 2026);
    await expect(upcomingAwardsPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await upcomingAwardsPage.filterToDate(2, 21, 2026);
    await expect(upcomingAwardsPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await upcomingAwardsPage.search();
    await expect(upcomingAwardsPage.searchResults).toBeAttached();
  });
});
