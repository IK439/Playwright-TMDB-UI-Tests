import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class HomePage extends BasePage {
  readonly searchBox: Locator;
  readonly trending: Locator;
  readonly latestTrailers: Locator;
  readonly whatsPopular: Locator;
  readonly freeToWatch: Locator;
  readonly joinToday: Locator;
  readonly leaderBoard: Locator;

  readonly searchInput: Locator;
  readonly searchResults: Locator;
  readonly searchItem: Locator;

  constructor(page: Page) {
    super(page);

    this.searchBox = page.getByPlaceholder(
      "Search for a movie, tv show, person......",
    );
    this.trending = page.getByRole("heading", {
      name: "Trending",
    });
    this.latestTrailers = page.getByRole("heading", {
      name: "Latest Trailers",
    });
    this.whatsPopular = page.getByRole("heading", { name: "What's Popular" });
    this.freeToWatch = page.getByRole("heading", { name: "Free To Watch" });
    this.joinToday = page.getByRole("heading", { name: "Join Today" });
    this.leaderBoard = page.getByRole("heading", { name: "Leaderboard" });
    this.searchInput = page.getByPlaceholder(
      "Search for a movie, tv show, person......",
    );

    this.searchResults = page.getByRole("heading", { name: "Search Results" });
    this.searchItem = page.locator("a").filter({ hasText: /^Inception$/ });
  }

  async navigateToHome() {
    await this.navigate(`${ENV.baseUrl}/`);
  }
}
