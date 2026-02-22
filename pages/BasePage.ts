import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  private defaultQueryParams = {
    language: "en-GB",
  };

  async navigate(path: string) {
    // Build search params
    const searchParams = new URLSearchParams(
      this.defaultQueryParams as Record<string, string>,
    ).toString();

    // Combine path + params
    const finalUrl = searchParams ? `${path}?${searchParams}` : path;

    await this.page.goto(finalUrl);
  }
}
