// Natasha
import { Locator, Page } from "@playwright/test";

export class SearchPage {
  readonly page: Page;
  // Top navigation links:
  readonly slopSearchLink: Locator;
  // Slop locators:
  readonly alienFromLA: Locator;
  readonly alienVsPredator: Locator;
  readonly voyageOfTheRockAliens: Locator;
  readonly closeButton: Locator;
  readonly firstSlop: Locator;
  readonly movieWithNoRTScore: Locator;
  // Search filters and fields:
  readonly titleField: Locator;
  readonly minSlider: Locator;
  readonly maxSlider: Locator;
  readonly decadesDropDown: Locator;
  readonly keyWordsDropDown: Locator;
  readonly descendingCheckBox: Locator;
  readonly noRTScoreCheckBox: Locator;
  // Other:
  readonly searchResultsSelector: string;

  constructor(page: Page) {
    this.page = page;
    this.slopSearchLink = page.getByTestId("header-link-slop-search");
    this.titleField = page.locator('[name="titleDescription"]');
    this.searchResultsSelector = '[data-test-id="moviecard-openmodal-h2"]';
    this.firstSlop = page.getByTestId("moviecard-openmodal-h2").first();
    // Slop locators:
    this.alienFromLA = page.locator('text="Alien from L.A."');
    this.alienVsPredator = page.locator('text="Alien Vs. Predator"');
    this.voyageOfTheRockAliens = page.locator(
      'text="Voyage of the Rock Aliens"'
    );
    this.closeButton = page.getByRole("button", { name: "close-button" });
    this.movieWithNoRTScore = page.locator(
      "text = 3 Dev Adam aka Turkish Spiderman"
    );

    // Search filters and fields:
    this.minSlider = page.locator('input[name="rtMin"]');
    this.maxSlider = page.locator('input[name="rtMax"]');
    this.keyWordsDropDown = page.getByRole("main").locator("svg").first();
    this.decadesDropDown = page.getByRole("main").locator("svg").nth(1);
    this.descendingCheckBox = page.getByLabel("Descending");
    this.noRTScoreCheckBox = page.getByLabel("Include movies with no Rotten");
  }
  //Navigate to search page:
  async navigateToSearch() {
    await this.slopSearchLink.click();
  }
  //Fill title field with test data:
  async fillTitleField(wordToSearch: string) {
    await this.titleField.fill(wordToSearch);
  }
  //Wait for test results to load:
  async waitForSearchResults() {
    await this.page.waitForSelector(this.searchResultsSelector);
  }

  // Close slop details screen:
  async closeSlopDetail() {
    await this.closeButton.click();
  }
  // Set minimum Rotten Tomatoes score:
  async setMinRTScore(minScore: string) {
    await this.minSlider.fill(minScore);
  }
  // Set maximum Rotten Tomatoes score:
  async setMaxRTScore(maxScore: string) {
    await this.maxSlider.fill(maxScore);
  }
  // Click on the decades dropdown menu:
  async selectDecade(decade: string) {
    await this.decadesDropDown.click();
    await this.page.getByRole("option", { name: `${decade}` }).click();
  }
  // Click on the keywords dropdown menu:
  async selectKeyword(keyword: string) {
    await this.keyWordsDropDown.click();
    await this.page.getByRole("option", { name: `${keyword}` }).click();
  }

  // Select descending order:
  async selectDescending() {
    await this.descendingCheckBox.click();
  }

  // Include movies with no Rotten Tomatoes Score:
  async icludeNoRTScore() {
    await this.noRTScoreCheckBox.click();
  }

  // This function will check whether the resulrs returned are sorted in ascending order:
  async areTitlesSortedAlphabetically(): Promise<boolean> {
    // Retrieve all titles from the movie cards:
    const titles = await this.page.$$eval(
      this.searchResultsSelector,
      (elements) => elements.map((el) => el.textContent?.trim() || "")
    );
    // Create a sorted copy of the titles array
    const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b));
    // Check if the original titles array is the same as the sorted array
    return titles.every((title, index) => title === sortedTitles[index]);
  }
}
