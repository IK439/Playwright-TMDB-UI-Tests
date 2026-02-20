import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class HomePage extends BasePage {
  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly searchItem: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.getByPlaceholder(
      "Search for a movie, tv show, person......",
    );
    this.searchResults = page.getByRole("heading", { name: "Search Results" });
    this.searchItem = page.getByText("Inception July 16, 2010 Cobb");
  }

  async navigateToHome() {
    await this.navigate(`${ENV.baseUrl}/`);
  }

  async searchMovie(movieName: string) {
    await this.searchInput.fill(movieName);
    await this.searchInput.press("Enter");
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
