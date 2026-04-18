import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";
import { accessibilityScanner } from "../utils/accessibility";

export class HomePage extends BasePage {
  readonly searchBox: Locator;
  readonly trending: Locator;
  readonly latestTrailers: Locator;
  readonly whatsPopular: Locator;
  readonly freeToWatch: Locator;
  readonly joinToday: Locator;
  readonly leaderBoard: Locator;

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
  }

  async navigateToHome() {
    await test.step("Navigate to home page", async () => {
      await this.navigate(`${ENV.baseUrl}/`);
    });
  }

  async runAccessibilityChecker(): Promise<number> {
    return await test.step("Run accessibility scanner", async () => {
      const results = await accessibilityScanner(this.page);

      return results.violations.length;
    });
  }
}
