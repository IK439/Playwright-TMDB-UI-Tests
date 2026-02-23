import { test, expect } from "../fixtures/base";

test.describe("Top-Rated Movies Feature", () => {
  test("Sort and filter for top-rated mystery movies", async ({
    moviesTopRatedPage,
  }) => {
    await moviesTopRatedPage.sortResults();
    await expect(moviesTopRatedPage.sortOptionText).toContainText(
      "Release Date Descending",
    );

    await expect(moviesTopRatedPage.whereToWatch).toBeAttached();
    await expect(moviesTopRatedPage.showMeEverything).toBeChecked();
    await expect(moviesTopRatedPage.allAvailabilities).toBeChecked();
    await expect(moviesTopRatedPage.allReleases).toBeChecked();

    await moviesTopRatedPage.filterFromDate(21, 1, 2025);
    await expect(moviesTopRatedPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesTopRatedPage.filterToDate(21, 1, 2026);
    await expect(moviesTopRatedPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesTopRatedPage.selectGenre();
    await expect(moviesTopRatedPage.genre).toContainText("Mystery");

    await moviesTopRatedPage.selectCertification();
    await expect(moviesTopRatedPage.certification).toContainText("12A");

    await moviesTopRatedPage.selectLanguage();
    await expect(moviesTopRatedPage.languageOptionText).toContainText(
      /English/,
    );

    await expect(moviesTopRatedPage.userScore).toBeAttached();
    await expect(moviesTopRatedPage.minUserVote).toBeAttached();
    await expect(moviesTopRatedPage.runTime).toBeAttached();

    await moviesTopRatedPage.search();
    await expect(moviesTopRatedPage.searchResults).toBeAttached();
  });
});
