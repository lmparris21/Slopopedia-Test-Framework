//CHARMAINE LOCSIN
import { test, expect } from "@playwright/test";
import { HeaderLinks } from "../pages/profilePage";

//dev environment test data
const URL = process.env.URL!;
const email = process.env.USER_1!;
const password = process.env.USER_1_PASS!;

test.describe("Profile - Header Links", () => {
  /* NAVIGATE TO PROFILE PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/42
   */
  //this will be performed before each test from this point
  test.beforeEach(async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //create an instance for the header links
    const headerLinks = new HeaderLinks(page);
    //log in user using User 1 credentials from the .env file
    await headerLinks.logInUser(email, password);
    //navigate to the profile page
    await headerLinks.clickProfileLink();
  });

  /* NAVIGATE TO HOME PAGE FROM THE PROFILE PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/49
   */
  test("navigate to home page from the profile page", async ({ page }) => {
    //create an instance for the header links
    const headerLinks = new HeaderLinks(page);
    //navigate to the home page
    await headerLinks.clickHomePageLink();
    //assert the home page is displayed
    const currentUrl = await headerLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL);
  });

  /* NAVIGATE TO SLOP SEARCH PAGE FROM THE PROFILE PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/85 - Test Step 1
   */
  test("navigate to slop search page from the profile page", async ({
    page,
  }) => {
    //create an instance for the header links
    const headerLinks = new HeaderLinks(page);
    //navigate to the slop search page
    await headerLinks.clickSlopSearchLink();
    //assert the slop search page is displayed
    const currentUrl = await headerLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "search");
  });

  /* NAVIGATE TO SUBMIT SLOP PAGE FROM THE PROFILE PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/85 - Test Step 2
   */
  test("navigate to submit slop page from the profile page", async ({
    page,
  }) => {
    //create an instance for the header links
    const headerLinks = new HeaderLinks(page);
    //navigate to the submit slop page
    await headerLinks.clickSubmitSlopLink();
    //assert the submit slop page is displayed
    const currentUrl = await headerLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "submit");
  });

  /* NAVIGATE TO SLOP BLOG PAGE FROM THE PROFILE PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/85 - Test Step 3
   */
  test("navigate to slop blog page from the profile page", async ({ page }) => {
    //create an instance for the header links
    const headerLinks = new HeaderLinks(page);
    //navigate to the slop blog page
    await headerLinks.clickSlopBlogLink();
    //assert the slop blog page is displayed
    const currentUrl = await headerLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "articles");
  });
});
