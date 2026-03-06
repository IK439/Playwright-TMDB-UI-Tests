import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";
import * as Type from "../types/movies.types";

export class AwardsPage extends BasePage {
  private config: Type.AwardsPageType;

  readonly sort: Locator;
  readonly sortDropDown: Locator;
  readonly sortOption: Locator;
  readonly sortOptionText: Locator;

  readonly filterFrom: Locator;
  readonly filterTo: Locator;

  readonly searchButton: Locator;
  readonly searchResults: Locator;

  constructor(page: Page, config: Type.AwardsPageType) {
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

    this.filterFrom = page.locator("#release_date_gte");
    this.filterTo = page.locator("#release_date_lte");

    this.searchButton = page
      .locator("#media_v4")
      .getByRole("link", { name: "Search" });
    this.searchResults = page.locator(".white_column");
  }

  async navigateToAwardsPage() {
    await test.step("Navigate to awards page", async () => {
      await this.navigate(`${ENV.baseUrl}${this.config.path}`);
    });
  }

  async sortResults() {
    await test.step("Sort results using configured option", async () => {
      await this.sort.click();
      await this.sortDropDown.click();
      await this.sortOption.click();
    });
  }

  async filterFromDate(day: number, month: number, year: number) {
    await test.step(`Filter results from date ${day}/${month}/${year}`, async () => {
      await this.filterFrom.fill(`${day}/${month}/${year}`);
    });
  }

  async filterToDate(day: number, month: number, year: number) {
    await test.step(`Filter results to date ${day}/${month}/${year}`, async () => {
      await this.filterTo.fill(`${day}/${month}/${year}`);
    });
  }

  async search() {
    await test.step("Execute search", async () => {
      await this.searchButton.click();
    });
  }
}
