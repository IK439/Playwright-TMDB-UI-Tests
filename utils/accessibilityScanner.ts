import { Page } from "@playwright/test";
import { AxeOptions } from "../types/accessibility.types";
import AxeBuilder from "@axe-core/playwright";

export async function accessibilityScanner(
  page: Page,
  options: AxeOptions = {},
) {
  let builder = new AxeBuilder({ page });

  if (options.include) {
    builder = builder.include(options.include);
  }

  if (options.exclude) {
    builder = builder.exclude(options.exclude);
  }

  if (options.tags) {
    builder = builder.withTags(options.tags);
  }

  const results = await builder.analyze();

  return results;
}
