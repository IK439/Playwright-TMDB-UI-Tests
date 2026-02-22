import { test as base } from "@playwright/test";
import * as Page from "./index";
import * as Config from "../config/config";

// Define the custom fixtures available to tests
type MyFixtures = {
  homePage: Page.HomePage;
  loginPage: Page.LoginPage;
  moviesPopularPage: Page.MoviesPageOne;
  moviesTopRatedPage: Page.MoviesPageOne;
  moviesNowPlayingPage: Page.MoviesPageTwo;
  moviesUpcomingPage: Page.MoviesPageTwo;
  popularAwardsPage: Page.AwardsPage;
  resetPasswordPage: Page.ResetPasswordPage;
  upcomingAwardsPage: Page.AwardsPage;
};

// Extend Playwright's base test with custom fixtures
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new Page.HomePage(page);

    await homePage.navigateToHome();

    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new Page.LoginPage(page);

    await loginPage.navigateToLogin();

    await use(loginPage);
  },

  resetPasswordPage: async ({ page }, use) => {
    const resetPassword = new Page.ResetPasswordPage(page);

    await resetPassword.navigateToResetPassword();

    await use(resetPassword);
  },

  moviesPopularPage: async ({ page }, use) => {
    const moviesPopularPage = new Page.MoviesPageOne(
      page,
      Config.popularMoviesConfig,
    );

    await moviesPopularPage.navigateToMoviesPage();

    await use(moviesPopularPage);
  },

  moviesTopRatedPage: async ({ page }, use) => {
    const moviesTopRatedPage = new Page.MoviesPageOne(
      page,
      Config.topRatedMoviesConfig,
    );

    await moviesTopRatedPage.navigateToMoviesPage();

    await use(moviesTopRatedPage);
  },

  moviesNowPlayingPage: async ({ page }, use) => {
    const moviesNowPlayingPage = new Page.MoviesPageTwo(
      page,
      Config.nowPlayingMoviesConfig,
    );

    await moviesNowPlayingPage.navigateToMoviesPage();

    await use(moviesNowPlayingPage);
  },

  moviesUpcomingPage: async ({ page }, use) => {
    const moviesUpcomingPage = new Page.MoviesPageTwo(
      page,
      Config.upcomingMoviesConfig,
    );

    await moviesUpcomingPage.navigateToMoviesPage();

    await use(moviesUpcomingPage);
  },

  popularAwardsPage: async ({ page }, use) => {
    const popularAwardsPage = new Page.AwardsPage(
      page,
      Config.popularAwardsConfig,
    );

    await popularAwardsPage.navigateToAwardsPage();

    await use(popularAwardsPage);
  },

  upcomingAwardsPage: async ({ page }, use) => {
    const upcomingAwardsPage = new Page.AwardsPage(
      page,
      Config.upcomingAwardsConfig,
    );

    await upcomingAwardsPage.navigateToAwardsPage();

    await use(upcomingAwardsPage);
  },
});

// Re-export expect so tests can import from this fixture file
export { expect } from "@playwright/test";
