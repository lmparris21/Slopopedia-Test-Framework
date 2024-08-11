// Natasha
import { Locator, Page } from "@playwright/test";
export class SignUpPage {
  readonly page: Page;
  // Buttons and navigation links:
  readonly signUpButton: Locator;
  readonly closeButton: Locator;
  readonly loginLink: Locator;

  // Sign up form:
  readonly gobbIDField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly getToSloppinButton: Locator;

  // Error messages locators:
  readonly passwordsDontMatchError: Locator;
  readonly shortPasswordError: Locator;
  readonly invalidEmailFieldError: Locator;
  readonly gobbIDrequiredError: Locator;
  readonly emailRequiredError: Locator;
  readonly passwordRequiredError: Locator;
  readonly confirmRequiredError: Locator;
  readonly errorMessage: Locator;

  // Other:
  readonly loginHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    // Buttons and navigation links:
    this.signUpButton = page.getByRole("button", { name: "Sign Up" });
    this.closeButton = page.getByRole("img", { name: "close-button" });
    this.loginLink = page.getByRole("button", { name: "Login!" });

    // Sign up form:
    this.gobbIDField = page.locator('input[type="text"]').first();
    this.emailField = page.locator('input[type="text"]').nth(1);
    this.passwordField = page.locator('input[type="password"]').first();
    this.confirmPasswordField = page.locator('input[type="password"]').nth(1);
    this.getToSloppinButton = page.getByRole("button", {
      name: "Get to Sloppin'",
    });

    // Error messages locators:
    this.passwordsDontMatchError = page.locator(
      "text = Passwords do not match"
    );
    this.shortPasswordError = page.locator(
      "text = Passwords must be at least 10 characters"
    );
    this.invalidEmailFieldError = page.locator("text = Invalid Email");
    this.emailRequiredError = page.locator("text = Email is required");
    this.gobbIDrequiredError = page.locator("text = Gobb ID is required");
    this.passwordRequiredError = page.locator("text = Password is required");
    this.confirmRequiredError = page.locator(
      "text = You must confirm the password"
    );
    this.errorMessage = page.locator(
      "//div[contains(@id, 'headlessui-dialog-panel')]/div/p"
    );
    // Other:
    this.loginHeader = page.locator("text = OH HEY GOBLIN");
  }

  // Navigare to sign up page:
  async goToSignUp() {
    await this.signUpButton.click();
  }
  // Close sign up page:
  async closeSignUp() {
    await this.closeButton.click();
  }
  // Navigate to log in window:
  async clickLogIn() {
    await this.loginLink.click();
  }
  // Fill out Gobb ID field:
  async fillOutGobbIDField(gobbID: string) {
    await this.gobbIDField.fill(gobbID);
  }
  // Fill out password field:
  async fillOutPasswordField(password: string) {
    await this.passwordField.fill(password);
  }
  // Fill out confirm password field:
  async fillOutConfirmPasswordField(password: string) {
    await this.confirmPasswordField.fill(password);
  }
  // Fill out email field:
  async fillOutEmailField(email: string) {
    await this.emailField.fill(email);
  }
  // Click "Get to Sloppin'" button
  async clickGetToSloppin() {
    await this.getToSloppinButton.click();
  }
}
// invalid emails:
export const invalidEmails = [
  { email: "slopopediaproject.com", description: 'Missing "@" symbol' },
  { email: "slopopediaproject", description: "Plain String" },
  { email: "slop@@domain.com", description: "two @@ symbols" },
  { email: "slop@domain!.com", description: "special charecter before.com" },
  { email: "slop@", description: "Missing top-level domain" },
  { email: "@@domain.com", description: "Missing domain name" },
];
