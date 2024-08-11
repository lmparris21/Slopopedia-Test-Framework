// Natasha
import { test, expect } from "@playwright/test";
import { SignUpPage, invalidEmails } from "../pages/signUpPage.ts";
import * as testData from "../testData.json";

// Test data:
const gobbID = testData.signUpData.gobbID;
const invalidEmail = testData.signUpData.invalidEmail;
const validEmail = testData.signUpData.validEmail;
const existingEmail = testData.signUpData.existingEmail;
const existingGobbID = testData.signUpData.existingGobbID;
const password = testData.signUpData.password;
const shortPassword = testData.signUpData.shortPassword;
const commonPassword = testData.signUpData.commonPassword;
const longPassword = testData.signUpData.longPassword;

test.describe("Sign Up Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const signUpPage = new SignUpPage(page);
    // Navigate to Sign Up page:
    await signUpPage.goToSignUp();
  });
  // Verify that sign up window closes after clicking x icon:
  /*
   * Sign Up Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/34
   */
  test("should close sign up window", async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    // Click Close button:
    await signUpPage.closeSignUp();
    // Verify that close button is no longer visible:
    await expect(signUpPage.closeButton).not.toBeVisible();
  });
  // Verify that log in window opens after clicking Login! link:
  /*
   * Sign Up Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/33
   */
  test("should redirect to login window", async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    // Click Login! link
    await signUpPage.clickLogIn();
    // Verify that login window is displayed:
    await expect(signUpPage.loginHeader).toBeVisible();
  });

  // Verify that error message is displayed when passwords don't match:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/5
   */
  test("should display error message when passwords don't match", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    // Fill out the passwoed field
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with a different password
    await signUpPage.fillOutConfirmPasswordField(shortPassword);
    // Verify that error message is displayed when passwords don't match:
    await expect(signUpPage.passwordsDontMatchError).toContainText(
      "Passwords do not match"
    );
  });

  // Verify that error message is displayed when password is too short:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/18
   */
  test("should display error message when password is too short", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    // Enter short password:
    await signUpPage.fillOutPasswordField(shortPassword);
    // Verify that error message is displayed when password is too short:
    await expect(signUpPage.shortPasswordError).toContainText(
      "Passwords must be at least 10 characters"
    );
  });
  // Verify that error message is displayed for emails containing +test1. This test should be removed in case this changes:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/4
   */
  test("should display error message for emails containing +test1", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field (invalid email with +test1):
    await signUpPage.fillOutEmailField(invalidEmail);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Click "Get to sloppin'" Button
    await signUpPage.clickGetToSloppin();
    // Verify that error message is displayed for emails containing +test1:
    await expect(signUpPage.errorMessage).toContainText(
      "You provided invalid data for this operation. - User.email: Email must match"
    );
  });
  // Verify that error message is displayed when signing up with existing GobbID:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/20
   */
  test("should display error message when signing up with existing GobbID", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(existingGobbID);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Click "Get to sloppin'" Button
    await signUpPage.clickGetToSloppin();
    // Verify that error message is displayed when signing up with existing GobbID:
    await expect(signUpPage.errorMessage).toContainText(
      "Unique constraint failed on the constraint"
    );
  });
  // Verify that error message is displayed when password is too common:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/32
   */
  test("should display error message when password is too common", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field (commond password):
    await signUpPage.fillOutPasswordField(commonPassword);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(commonPassword);
    // Click "Get to sloppin'" Button
    await signUpPage.clickGetToSloppin();
    // Verify that error message is displayed when password is too common:
    await expect(signUpPage.errorMessage).toContainText(
      "Password is too common"
    );
  });
  // Verify that error message is displayed when password is too long:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/28
   */
  test("should display error message when password is too long", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field (long password):
    await signUpPage.fillOutPasswordField(longPassword);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(longPassword);
    // Click "Get to sloppin'" Button
    await signUpPage.clickGetToSloppin();
    // Verify that error message is displayed when password is too common:
    await expect(signUpPage.errorMessage).toContainText(
      "Password must be no longer than 100 characters"
    );
  });
  // Verify that user is not able to sign up when the Gobb ID field is not filled out:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/35
   */
  test("should not be able to sign up when the Gobb ID field is not filled out", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Assert "Get to Sloppin'" button is not clickable:
    await expect(signUpPage.getToSloppinButton).toBeDisabled();
  });
  // Verify that user is not able to sign up when the email field is not filled out:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/36
   */
  test("should not be able to sign up when the email field is not filled out", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Assert "Get to Sloppin'" button is not clickable:
    await expect(signUpPage.getToSloppinButton).toBeDisabled();
  });
  // Verify that user is not able to sign up when the password field is not filled out:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/37
   */
  test("should not be able to sign up when the password field is not filled out", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Assert "Get to Sloppin'" button is not clickable:
    await expect(signUpPage.getToSloppinButton).toBeDisabled();
  });
  // Verify that user is not able to sign up when the confirm password field is not filled out:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/44
   */
  test("should not be able to sign up when confirm password field is not filled out", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await expect(signUpPage.getToSloppinButton).toBeDisabled();
  });
  // Verify that error is displayed when signing up with existing email:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/21
   */
  test("should display error message when signing up with existing email", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    //Fill out email field with earlier registered email:
    await signUpPage.fillOutEmailField(existingEmail);
    // Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Fill out confirm password field with the same password:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Click "Get to sloppin'" Button
    await signUpPage.clickGetToSloppin();
    // Verify that error message is displayed when signing up with existing GobbID:
    await expect(signUpPage.errorMessage).toContainText(
      "Unique constraint failed on the constraint"
    );
  });
  // Verify that error is displayed when when GobbID is typed and removed:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/228
   */
  test("should display error message when GobbID is removed from the field", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out Gobb ID field:
    await signUpPage.fillOutGobbIDField(gobbID);
    // Remove the input:
    await signUpPage.fillOutGobbIDField("");
    // Assert error message is visible:
    await expect(signUpPage.gobbIDrequiredError).toBeVisible();
  });
  // Verify that error is displayed when when email is typed and removed:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/229
   */
  test("should display error message when email is removed from email field", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out email field:
    await signUpPage.fillOutEmailField(validEmail);
    // Remove the input:
    await signUpPage.fillOutEmailField("");
    // Assert error message is visible:
    await expect(signUpPage.emailRequiredError).toBeVisible();
  });
  // Verify that error is displayed when when password is typed and removed:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/230
   */
  test("should display error message when password is removed from the field", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out password field:
    await signUpPage.fillOutPasswordField(password);
    // Remove the input:
    await signUpPage.fillOutPasswordField("");
    // Assert error message is visible:
    await expect(signUpPage.passwordRequiredError).toBeVisible();
  });
  // Verify that error is displayed when when password is added to the confirm password field and removed:
  /*
   * Sign Up Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/231
   */
  test("should display error message when password is removed from the confirm password field", async ({
    page,
  }) => {
    const signUpPage = new SignUpPage(page);
    //Fill out password field:
    await signUpPage.fillOutConfirmPasswordField(password);
    // Remove the input:
    await signUpPage.fillOutConfirmPasswordField("");
    // Assert error message is visible:
    await expect(signUpPage.confirmRequiredError).toBeVisible();
  });
});
// Test iterates through invalid emails and makes sure error message appears
/*
 * Sign Up Tests: Negative Tests
 * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/4
 */
test.describe("Invalid Email Field Tests", () => {
  for (const testCase of invalidEmails) {
    test(`should show an error for invalid email: ${testCase.email} (${testCase.description})`, async ({
      page,
    }) => {
      await page.goto("/");
      const signUpPage = new SignUpPage(page);
      // Go to Sign Up page:
      signUpPage.goToSignUp();
      // Enter invalid email:
      await signUpPage.fillOutEmailField(testCase.email);
      // Verify error message is displayed
      await expect(signUpPage.invalidEmailFieldError).toContainText(
        "Invalid Email"
      );
    });
  }
});
