import { test, expect } from "../fixtures/base";

test.describe("Movies Now Playing Feature", () => {
  test("Sort and filter for animation movies playing now", async ({
    moviesNowPlayingPage,
  }) => {
    await moviesNowPlayingPage.sortResults();
    await expect(moviesNowPlayingPage.sortOptionText).toContainText(
      "Rating Descending",
    );

    await expect(moviesNowPlayingPage.whereToWatch).toBeAttached();
    await expect(moviesNowPlayingPage.showMeEverything).toBeChecked();
    await expect(moviesNowPlayingPage.allAvailabilities).toBeChecked();
    await expect(moviesNowPlayingPage.allReleases).not.toBeChecked();
    await expect(moviesNowPlayingPage.allCountries).toBeChecked();
    await expect(moviesNowPlayingPage.theatrical).toBeChecked();

    await moviesNowPlayingPage.filterFromDate(21, 1, 2025);
    await expect(moviesNowPlayingPage.filterFrom).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesNowPlayingPage.filterToDate(21, 1, 2026);
    await expect(moviesNowPlayingPage.filterTo).toHaveValue(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    );

    await moviesNowPlayingPage.selectGenre();
    await expect(moviesNowPlayingPage.genre).toContainText("Animation");

    //await moviesNowPlayingPage.selectCertification();
    //await expect(moviesNowPlayingPage.certification).toContainText("PG");

    await moviesNowPlayingPage.selectLanguage();
    await expect(moviesNowPlayingPage.languageOptionText).toContainText(
      /English/,
    );

    await expect(moviesNowPlayingPage.userScore).toBeAttached();
    await expect(moviesNowPlayingPage.minUserVote).toBeAttached();
    await expect(moviesNowPlayingPage.runTime).toBeAttached();

    await moviesNowPlayingPage.search();
    await expect(moviesNowPlayingPage.searchResults).toBeAttached();
  });
});
