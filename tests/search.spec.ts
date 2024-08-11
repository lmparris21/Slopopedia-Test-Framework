// Natasha
import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/searchPage.ts";
import * as testData from "../testData.json";

const URL = process.env.URL!;
// Search by title test data:
const titleToSearch = testData.searchTestData.titleToSearch;
const titleToSearchUpperCase = titleToSearch.toUpperCase();
const titleToExpect = testData.searchTestData.titleToExpect;
// Search by description test data:
const slopDescription = testData.searchTestData.slopDescription;
const slopDescriptionUpperCase = slopDescription.toUpperCase();
// Search by decade test data:
const decadeToSearch = testData.searchTestData.decadeToSearch;
// Search by Rotten Tomatoes Score test data:
const minRTScore = testData.searchTestData.minRTScore;
const maxRTScore = testData.searchTestData.maxRTScore;
// Search by keyword test data:
const keyword = testData.searchTestData.keyword;
// Negative search test data:
const invalidSearch = testData.searchTestData.invalidSearch;
const nonExistentTitle = testData.searchTestData.nonExistentTitle;
const scoreZero = testData.searchTestData.scoreZero;
const scoreHundred = testData.searchTestData.scoreHundred;
const slopNumToExpect = testData.searchTestData.slopNumToExpect;

test.describe("Search Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const searchPage = new SearchPage(page);
    // Navigate to search page:
    await searchPage.navigateToSearch();
    // Verify expected URL:
    await expect(page.url()).toBe(URL + "search");
  });

  // Test iterates through all results and makes sure titles contain the word from search
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/158
   */
  test("should return slops with the word from search - positive tests", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Fill out the title field with valid data:
    await searchPage.fillTitleField(titleToSearch);
    // Wait for the search results to appear:
    await searchPage.waitForSearchResults();
    // Assert titles:
    await expect(searchPage.alienFromLA).toContainText(titleToExpect);
    await expect(searchPage.alienVsPredator).toContainText(titleToExpect);
    await expect(searchPage.voyageOfTheRockAliens).toContainText(titleToExpect);
  });
  // Test iterates through all results and makes sure titles contain the word from search when searched in upper case
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/164
   */
  test("should return slops with the word from search when searched in upper case", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Fill out the title field with valid data:
    await searchPage.fillTitleField(titleToSearchUpperCase);
    // Wait for the search results to appear:
    await searchPage.waitForSearchResults();
    // Assert titles:
    await expect(searchPage.alienFromLA).toContainText(titleToExpect);
    await expect(searchPage.alienVsPredator).toContainText(titleToExpect);
    await expect(searchPage.voyageOfTheRockAliens).toContainText(titleToExpect);
  });
  // Test verifies that users can search by description
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/159
   */
  test("should display the right movie when searched by description", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Search by description:
    await searchPage.fillTitleField(slopDescription);
    // Wait for the search results to appear:
    await searchPage.waitForSearchResults();
    // Verify that the expected slop is "Alien Vs. Predator":
    await expect(searchPage.alienVsPredator).toBeVisible();
  });
  // Test verifies that users can search by description and it is not case sensitive
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/221
   */
  test("should display the right movie when searched by description in upper case", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Search by description:
    await searchPage.fillTitleField(slopDescriptionUpperCase);
    // Wait for the search results to appear:
    await searchPage.waitForSearchResults();
    // Verify that the expected slop is "Alien Vs. Predator":
    await expect(searchPage.alienVsPredator).toBeVisible();
  });
  // Test verifies that users can open slop detail screen and close it by clicking "x" icon
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/167
   */
  test("should open and close slop detail", async ({ page }) => {
    const searchPage = new SearchPage(page);
    // Search by description:
    await searchPage.fillTitleField(slopDescription);
    // Click on the slop title:
    await searchPage.alienVsPredator.click();
    // Verify that the close button is visible:
    await expect(searchPage.closeButton).toBeVisible();
    // Click close button:
    await searchPage.closeSlopDetail();
    // Verify that after on "X" icon, the slop detail screen closes:
    await expect(searchPage.closeButton).not.toBeVisible();
  });
  // Test verifies that when user searches by title and RT score, only movies with that score and with this title are shown
  /*
   * Search Tests: Positive Tests, Combination Test Cases
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/225
   */
  test("should search by title and score", async ({ page }) => {
    const searchPage = new SearchPage(page);
    // Search by title:
    await searchPage.fillTitleField(titleToSearch);
    // Set minimum Rotten Tomatoes score:
    await searchPage.setMinRTScore(minRTScore);
    // Set maximum Rotten Tomatoes score:
    await searchPage.setMaxRTScore(maxRTScore);
    // Verify that the movie with the right title and the right RTs score range is visivle:
    await expect(searchPage.voyageOfTheRockAliens).toBeVisible();
    // Verify that the movie with the right title but out of the right RTs score range are hidden:
    await expect(searchPage.alienFromLA).not.toBeVisible();
    await expect(searchPage.alienVsPredator).not.toBeVisible();
  });
  // Test verifies that when user searches decade and title, only movies with that title and of that decade are displayed:
  /*
   * Search Tests: Positive Tests, Combination Test Cases
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/142
   */
  test("should search by decade and title", async ({ page }) => {
    const searchPage = new SearchPage(page);
    // Search by title:
    await searchPage.fillTitleField(titleToSearch);
    // Select a decade from the drop down menu:
    await searchPage.selectDecade(decadeToSearch);
    //I am adding this timeout because some browsers take time to hide movies from the screen and tests are flaky without it:
    await page.waitForTimeout(5000);
    // Verify that the movie with the right title and from right decade are displayed:
    await expect(searchPage.alienVsPredator).toBeVisible();
    // Verify that the movie with the right title but not from decade are hidden:
    await expect(searchPage.alienFromLA).not.toBeVisible();
    await expect(searchPage.voyageOfTheRockAliens).not.toBeVisible();
  });
  // Test verifies that when user searches keyword and title, only movies tagged with that keyword and with this title are displayed:
  /*
   * Search Tests: Positive Tests, Combination Test Cases
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/166
   */
  test("should search by keyword and title", async ({ page }) => {
    const searchPage = new SearchPage(page);
    // Search by title:
    await searchPage.fillTitleField(titleToSearch);
    // Select a keyword from the drop down menu:
    await searchPage.selectKeyword(keyword);
    //I am adding this timeout because some browsers take time to hide movies from the screen and tests are flaky without it:
    await page.waitForTimeout(5000);
    // Verify that the movie with the right title and keyword are displayed:
    await expect(searchPage.alienVsPredator).toBeVisible();
    // Verify that the movie with the right title but not with the right keyword are hidden:
    await expect(searchPage.alienFromLA).not.toBeVisible();
    await expect(searchPage.voyageOfTheRockAliens).not.toBeVisible();
  });
  // Test verifies that movies are displayed in ascending order by default:
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/147
   */
  test("should display movies in ascending order by default", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // This function will check whether the resulrs returned are sorted in ascending order:
    const isSorted = await searchPage.areTitlesSortedAlphabetically();
    // Assert that titles are displayed in ascending order:
    await expect(isSorted).toBe(true);
  });
  // Test verifies that movies are displayed in descending when sort by descending is selected:
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/148
   */
  test("should display movies in descending when sort by descending is selected", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    //I am adding this timeout because some browsers take time to hide movies from the screen and tests are flaky without it:
    await page.waitForTimeout(5000);
    await searchPage.selectDescending();
    // This function will check whether the resulrs returned are sorted in ascending order:
    const isSorted = await searchPage.areTitlesSortedAlphabetically();
    // Assert that titles are displayed in descending order:
    await expect(isSorted).toBe(false);
  });
  // Test verifies that movies with no Rotten Tomatoes score are displayed when selecting "Include movies with no Rotten Tomatoes Score":
  /*
   * Search Tests: Positive Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/165
   */
  test("should display movies with no Rotten Tomatoes score", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Select "Include movies with no Rotten Tomatoes Score"
    await searchPage.icludeNoRTScore();
    // Verify that movie with no Rotten Tomatoes Score is visible:
    await expect(searchPage.movieWithNoRTScore).toBeVisible();
  });
});

test.describe("Search Functionality - negative tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const searchPage = new SearchPage(page);
    // Navigate to search page:
    await searchPage.navigateToSearch();
    // Verify expected URL:
    await expect(page.url()).toBe(URL + "search");
  });
  // Test verifies that slops are not displayed when searching with invalid characters:
  /*
   * Search Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/218
   */
  test("should not display slops when searching with invalid characters", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // Fill out the search title field with ivalid characters:
    await searchPage.fillTitleField(invalidSearch);
    //I am adding this timeout because some browsers take time to hide movies and test might false pass withot it:
    await page.waitForTimeout(5000);
    // Count how many results are displayed:
    const count = await searchPage.firstSlop.count();
    // Assert that no slops are displayed:
    await expect(count).toBe(slopNumToExpect);
  });
  // Test verifies that slops are not displayed when searching for non-existent title:
  /*
   * Search Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/227
   */
  test("should not display slops when entering non-existent title", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // // Fill out the search title field with the title that does not exist in the database:
    await searchPage.fillTitleField(nonExistentTitle);
    //I am adding this timeout because some browsers take time to hide movies and test might false pass withot it:
    await page.waitForTimeout(5000);
    // Count how many results are displayed:
    const count = await searchPage.firstSlop.count();
    // Assert that no slops are displayed:
    await expect(count).toBe(slopNumToExpect);
  });
  // Test verifies that slops are not displayed when min Rotten Tomatoes score is 100 and max RT score is 0:
  /*
   * Search Tests: Negative Tests
   * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/155
   */
  test("should not display slops min RT score is 100 and max RT score is 0", async ({
    page,
  }) => {
    const searchPage = new SearchPage(page);
    // set minimum Rotten Tomatoes score to 100:
    await searchPage.setMinRTScore(scoreHundred);
    // set maximum Rotten Tomatoes score to 0:
    await searchPage.setMaxRTScore(scoreZero);
    //I am adding this timeout because some browsers take time to hide movies and test might false pass withot it:
    await page.waitForTimeout(5000);
    // Count how many results are displayed:
    const count = await searchPage.firstSlop.count();
    // Assert that no slops are displayed:
    await expect(count).toBe(slopNumToExpect);
  });
});
