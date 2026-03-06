import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class ResetPasswordPage extends BasePage {
  readonly heading: Locator;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly errorMessage: Locator;
  readonly loginHeading: Locator;
  readonly passWordReset: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Reset password" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.cancelButton = page.getByRole("link", { name: "Cancel" });
    this.errorMessage = page.getByRole("link", { name: "Email Required" });

    this.loginHeading = page.getByRole("heading", {
      name: "Login to your account",
    });

    this.passWordReset = page.getByRole("heading", { name: "Password Reset" });
  }

  async navigateToResetPassword() {
    await test.step("Navigate to reset password page", async () => {
      await this.navigate(`${ENV.baseUrl}/reset-password`);
    });
  }

  async enterEmailAndContinue() {
    await test.step("Enter email and click continue", async () => {
      await this.emailInput.fill(ENV.email);
      await this.continueButton.click();
    });
  }

  async clickContinue() {
    await test.step("Click continue button", async () => {
      await this.continueButton.click();
    });
  }

  async clickCancel() {
    await test.step("Click cancel button", async () => {
      await this.cancelButton.click();
    });
  }
}
