import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";
import * as Type from "../types/movies.types";

export class MoviesPageOne extends BasePage {
  private config: Type.MoviesPageType;

  readonly sort: Locator;
  readonly sortDropDown: Locator;
  readonly sortOption: Locator;
  readonly sortOptionText: Locator;

  readonly whereToWatch: Locator;

  readonly showMeEverything: Locator;
  readonly allAvailabilities: Locator;
  readonly allReleases: Locator;
  readonly filterFrom: Locator;
  readonly filterTo: Locator;

  readonly genre: Locator;

  readonly certification: Locator;

  readonly languageDropDown: Locator;
  readonly languageFilter: Locator;
  readonly languageOptionText: Locator;

  readonly userScore: Locator;
  readonly minUserVote: Locator;
  readonly runTime: Locator;

  readonly keyWords: Locator;
  readonly keyWord: Locator;

  readonly searchButton: Locator;
  readonly searchResults: Locator;

  constructor(page: Page, config: Type.MoviesPageType) {
    super(page);
    this.config = config;

    this.sort = page.getByRole("heading", { name: "Sort" });

    this.sortDropDown = page.getByText(this.config.defaultSortText).first();

    this.sortOption = page.getByRole("option", {
      name: this.config.sortOption,
    });

    this.sortOptionText = page
      .locator("span")
      .filter({ hasText: this.config.sortOption })
      .nth(1);

    this.whereToWatch = page.getByRole("heading", { name: "Where To Watch" });

    this.showMeEverything = page.getByRole("radio", { name: "Everything" });
    this.allAvailabilities = page.getByRole("checkbox", {
      name: "Search all availabilities?",
    });
    this.allReleases = page.getByRole("checkbox", {
      name: "Search all releases?",
    });

    this.filterFrom = page.locator("#release_date_gte");
    this.filterTo = page.locator("#release_date_lte");

    this.genre = page.getByRole("link", {
      name: this.config.genre,
    });

    this.certification = page.getByRole("link", {
      name: this.config.certification,
      exact: true,
    });

    this.languageDropDown = page
      .getByRole("combobox")
      .filter({ hasText: "None Selected None" })
      .getByLabel("select");
    this.languageFilter = page.getByRole("option", { name: /English/ });
    this.languageOptionText = page
      .locator("span")
      .filter({ hasText: /English/ })
      .nth(1);

    this.userScore = page.getByRole("heading", { name: "User Score" });
    this.minUserVote = page.getByRole("heading", {
      name: "Minimum User Votes",
    });
    this.runTime = page.getByRole("heading", { name: "Runtime" });

    this.keyWords = page
      .locator("span")
      .filter({ hasText: this.config.keyword })
      .getByRole("combobox");
    this.keyWord = page.getByRole("option", { name: this.config.keyword });

    this.searchButton = page.getByRole("link", { name: /load more/i });
    this.searchResults = page.locator(".white_column");
  }

  async navigateToMoviesPage() {
    await this.navigate(`${ENV.baseUrl}${this.config.path}`);
  }

  async sortResults() {
    await this.sort.click();
    await this.sortDropDown.click();
    await this.sortOption.click();
  }

  async filterFromDate(day: number, month: number, year: number) {
    await this.filterFrom.fill(`${day}/${month}/${year}`);
  }

  async filterToDate(day: number, month: number, year: number) {
    await this.filterTo.fill(`${day}/${month}/${year}`);
  }

  async selectGenre() {
    await this.genre.click();
  }

  async selectCertification() {
    await this.certification.click();
  }

  async selectLanguage() {
    await this.languageDropDown.click();
    await this.languageFilter.click();
  }

  async addKeyword() {
    await this.keyWords.fill(this.config.keyword);
  }

  async search() {
    await this.searchButton.click();
  }
}
