import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class UpcomingAwardsPage extends BasePage {
  readonly sort: Locator;
  readonly sortDropDown: Locator;
  readonly sortOption: Locator;
  readonly sortOptionText: Locator;

  readonly filterFrom: Locator;
  readonly filterTo: Locator;

  readonly searchButton: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);

    this.sort = page.getByRole("heading", { name: "Sort" });

    this.sortDropDown = page
      .getByRole("combobox")
      .filter({ hasText: "Popularity" })
      .getByLabel("select");

    this.sortOption = page.getByRole("option", {
      name: "Popularity Descending",
    });

    this.sortOptionText = page
      .locator("span")
      .filter({ hasText: "Popularity Descending" })
      .nth(1);

    this.filterFrom = page.locator("#release_date_gte");
    this.filterTo = page.locator("#release_date_lte");

    this.searchButton = page
      .locator("#media_v4")
      .getByRole("link", { name: "Search" });
    this.searchResults = page.locator(".white_column");
  }

  async navigateToUpcomingAwards() {
    await this.navigate(`${ENV.baseUrl}/award/upcoming`);
  }

  async sortResultsBy() {
    await this.sort.click();
    await this.sortDropDown.click();
    await this.sortOption.click();
  }

  async filterFromDate(month: number, day: number, year: number) {
    await this.filterFrom.fill(`${month}/${day}/${year}`);
  }

  async filterToDate(month: number, day: number, year: number) {
    await this.filterTo.fill(`${month}/${day}/${year}`);
  }

  async search() {
    await this.searchButton.click();
  }
}
