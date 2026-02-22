import { test, expect } from "../fixtures/base";

test.describe("Upcoming Awards Feature", () => {
  test("Sort and filter upcoming awards by popularity descending", async ({
    upcomingAwardsPage,
  }) => {
    await upcomingAwardsPage.sortResults();
    await expect(upcomingAwardsPage.sortOptionText).toContainText(
      "Popularity Descending",
    );

    await upcomingAwardsPage.filterFromDate(21, 1, 2025);
    await expect(upcomingAwardsPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await upcomingAwardsPage.filterToDate(21, 1, 2026);
    await expect(upcomingAwardsPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await upcomingAwardsPage.search();
    await expect(upcomingAwardsPage.searchResults).toBeAttached();
  });
});
