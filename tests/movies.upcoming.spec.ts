import { test, expect } from "../fixtures/base";

test.describe("Upcoming Movies Feature", () => {
  test("Sort and filter for upcoming comedy movies", async ({
    moviesUpcomingPage,
  }) => {
    await moviesUpcomingPage.sortResults();
    await expect(moviesUpcomingPage.sortOptionText).toContainText(
      "Release Date Descending",
    );

    await expect(moviesUpcomingPage.whereToWatch).toBeAttached();
    await expect(moviesUpcomingPage.showMeEverything).toBeChecked();
    await expect(moviesUpcomingPage.allAvailabilities).toBeChecked();
    await expect(moviesUpcomingPage.allReleases).not.toBeChecked();
    await expect(moviesUpcomingPage.allCountries).toBeChecked();
    await expect(moviesUpcomingPage.theatrical).toBeChecked();

    await moviesUpcomingPage.filterFromDate(1, 2, 2026);
    await expect(moviesUpcomingPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesUpcomingPage.filterToDate(1, 12, 2026);
    await expect(moviesUpcomingPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesUpcomingPage.selectGenre();
    await expect(moviesUpcomingPage.genre).toContainText("Comedy");

    //await moviesUpcomingPage.selectCertification();
    //await expect(moviesUpcomingPage.certification).toContainText("PG");

    await moviesUpcomingPage.selectLanguage();
    await expect(moviesUpcomingPage.languageOptionText).toContainText(
      /English/,
    );

    await expect(moviesUpcomingPage.userScore).toBeAttached();
    await expect(moviesUpcomingPage.minUserVote).toBeAttached();
    await expect(moviesUpcomingPage.runTime).toBeAttached();

    await moviesUpcomingPage.search();
    await expect(moviesUpcomingPage.searchResults).toBeAttached();
  });
});
