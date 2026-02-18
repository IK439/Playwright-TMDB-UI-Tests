import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator("#search_v4");
    this.searchResults = page.locator("#search_v4_listbox li");
  }

  async navigateToHome() {
    await this.navigate(`${ENV.baseUrl}/`);
  }

  async searchMovie(movieName: string) {
    await this.searchInput.fill(movieName);
    await this.searchResults.first().waitFor({ state: "visible" });
  }

  async selectMovieFromResults(movieName: string) {
    const movie = this.searchResults.filter({ hasText: movieName }).first();
    await movie.click();
  }

  async searchAndSelectMovie(movieName: string) {
    await this.searchMovie(movieName);
    await this.selectMovieFromResults(movieName);
  }
}
