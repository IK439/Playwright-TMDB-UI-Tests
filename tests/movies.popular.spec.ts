import { test, expect } from "../fixtures/base";

test.describe("Popular Movies Feature", () => {
  test("Sort and filter for popular action movies", async ({
    moviesPopularPage,
  }) => {
    await moviesPopularPage.sortResults();
    await expect(moviesPopularPage.sortOptionText).toContainText(
      "Rating Descending",
    );

    await expect(moviesPopularPage.whereToWatch).toBeAttached();
    await expect(moviesPopularPage.showMeEverything).toBeChecked();
    await expect(moviesPopularPage.allAvailabilities).toBeChecked();
    await expect(moviesPopularPage.allReleases).toBeChecked();

    await moviesPopularPage.filterFromDate(21, 1, 2025);
    await expect(moviesPopularPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesPopularPage.filterToDate(21, 1, 2026);
    await expect(moviesPopularPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesPopularPage.selectGenre();
    await expect(moviesPopularPage.genre).toContainText("Action");

    await moviesPopularPage.selectCertification();
    await expect(moviesPopularPage.certification).toContainText("PG");

    await moviesPopularPage.selectLanguage();
    await expect(moviesPopularPage.languageOptionText).toContainText(/English/);

    await expect(moviesPopularPage.userScore).toBeAttached();
    await expect(moviesPopularPage.minUserVote).toBeAttached();
    await expect(moviesPopularPage.runTime).toBeAttached();

    await moviesPopularPage.search();
    await expect(moviesPopularPage.searchResults).toBeAttached();
  });
});
