import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ENV } from "../utils/env";

export class LoginPage extends BasePage {
  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly resetPasswordLink: Locator;
  readonly errorMessage: Locator;
  readonly profile: Locator;
  readonly avatar: Locator;

  constructor(page: Page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Login to your account" });
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.resetPasswordLink = page.getByRole("link", { name: "Reset password" });

    this.errorMessage = page.getByText("There was a problem");

    this.profile = page.getByRole("link", { name: "Profile and Settings" });
    this.avatar = page.getByRole("link", { name: "i", exact: true });
  }

  async navigateToLogin() {
    await this.navigate(`${ENV.baseUrl}/login`);
  }

  async login(
    username: string = ENV.username,
    password: string = ENV.password,
  ) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
