//CHARMAINE LOCSIN
import { test, expect } from "@playwright/test";
import { SideBarLinks } from "../pages/profilePage";

//dev environment test data
const URL = process.env.URL!;
const email = process.env.USER_1!;
const password = process.env.USER_1_PASS!;

test.describe("Sidebar Links", () => {
  /* NAVIGATE TO ME GOBLIN PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/47
   */
  test("navigate to me goblin page", async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //creating new instance for the sidebar links
    const sideBarLinks = new SideBarLinks(page);
    //log in user using User 1 credentials from the .env file
    await sideBarLinks.logInUser(email, password);
    //navigate to the user profile page
    await sideBarLinks.clickProfileLink();
    //navigate to the me goblin page
    await sideBarLinks.clickMeGoblinLink();
    //assert the me goblin page is displayed
    const currentUrl = await sideBarLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "profile");
  });

  /* NAVIGATE TO SLOP FESTS PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/86
   */
  test("navigate to slop fests page", async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //create new instance for the sidebar links
    const sideBarLinks = new SideBarLinks(page);
    //log in user using User 1 credentials from the .env file
    await sideBarLinks.logInUser(email, password);
    //navigate to the user profile page
    await sideBarLinks.clickProfileLink();
    //navigate to the slop fests page
    await sideBarLinks.clickSlopFestsLink();
    //assert the slop fests page is displayed
    const currentUrl = await sideBarLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "profile/fests");
  });

  /* NAVIGATE TO RECOMMENDED-A-SLOP PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/87
   */
  test("navigate to recommended-a-slop page", async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //create new instance for the sidebar links
    const sideBarLinks = new SideBarLinks(page);
    //log in user using User 1 credentials from the .env file
    await sideBarLinks.logInUser(email, password);
    //navigate to the profile page
    await sideBarLinks.clickProfileLink();
    //navigate to the recommended-a-slop page
    await sideBarLinks.clickRecommendedASlopLink();
    //assert the recommended-a-slop page is displayed
    const currentUrl = await sideBarLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "profile/recommend");
  });

  /* NAVIGATE TO SETTINGS PAGE
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/61
   */
  test("navigate to settings page", async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //create new instance for the sidebar links
    const sideBarLinks = new SideBarLinks(page);
    //log in user using User 1 credentials from the .env file
    await sideBarLinks.logInUser(email, password);
    //navigate to the profile page
    await sideBarLinks.clickProfileLink();
    //navigate to the settings page
    await sideBarLinks.clickSettingsLink();
    //assert the settings page is displayed
    const currentUrl = await sideBarLinks.getCurrentUrl();
    expect(currentUrl).toBe(URL + "profile/settings");
  });

  /* LOG OUT BUTTON
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/88
   */
  test("log out the user", async ({ page }) => {
    //navigate to webpage
    await page.goto("/");
    //create new instance for the sidebar links
    const sideBarLinks = new SideBarLinks(page);
    //log in user using User 1 credentials from the .env file
    await sideBarLinks.logInUser(email, password);
    //navigate to the profile page
    await sideBarLinks.clickProfileLink();
    //click on the logout button to log out the user
    await sideBarLinks.clickLogOutButton();
    //assert the user is logged out with the home page displayed
    const currentUrl = process.env.URL!;
    expect(currentUrl).toBe(URL);
  });
});
