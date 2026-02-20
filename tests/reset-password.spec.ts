import { test, expect } from "../fixtures/base";

test.describe("Reset Password Feature", () => {
  test("Enter email and click continue", async ({ resetPasswordPage }) => {
    await resetPasswordPage.enterEmailAndContinue();
    await expect(resetPasswordPage.passWordReset).toContainText(
      "Password Reset",
    );
  });

  test("Clicking continue with no email shows error message", async ({
    resetPasswordPage,
  }) => {
    await resetPasswordPage.clickContinue();
    await expect(resetPasswordPage.errorMessage).toContainText(
      "Email Required",
    );
  });

  test("Clicking cancel navigates to login page", async ({
    resetPasswordPage,
  }) => {
    await resetPasswordPage.clickCancel();
    await expect(resetPasswordPage.loginHeading).toContainText(
      "Login to your account",
    );
  });
});
