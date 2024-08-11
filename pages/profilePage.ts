import { Locator, Page } from "@playwright/test";

export class SideBarLinks {
    //variables 
    readonly page: Page;
    readonly loginButton: Locator;
    readonly gobbIDTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly getToSloppinButton: Locator;
    readonly profileLink: Locator;
    readonly meGoblinLink: Locator;
    readonly slopFestsLink: Locator;
    readonly recommendedASlopLink: Locator; 
    readonly settingsLink: Locator;
    readonly logOutButton: Locator;
   
    //constructor
    constructor(page: Page){
        this.page=page;
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.gobbIDTextBox = page.getByLabel('Gobb ID');
        this.passwordTextBox = page.getByLabel('Password');
        this.getToSloppinButton = page.getByRole('button', { name: 'Get to Sloppin\'' });
        this.profileLink=page.getByRole('link', { name: 'automateOne'});
        this.meGoblinLink=page.getByRole('link', { name: 'Me goblin'});
        this.slopFestsLink=page.getByRole('link', { name: 'Slop fests'});
        this.recommendedASlopLink=page.getByRole('link', {name: 'Recommended-A-Slop'});
        this.settingsLink=page.getByRole('link', {name: 'Settings'})
        this.logOutButton=page.getByRole('button', {name: 'Logout'})
    }

  //functions
  //click the login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  //click the profile link
  async clickProfileLink() {
    await this.profileLink.click();
  }

    //click the me goblin link
    async clickMeGoblinLink() {
        await this.meGoblinLink.click();
    }

    //click the slop fests link
    async clickSlopFestsLink() {
        await this.slopFestsLink.click();
    }

  //click the recommended-a-slop link
  async clickRecommendedASlopLink() {
    await this.recommendedASlopLink.click();
  }

  //click the settings link
  async clickSettingsLink() {
    await this.settingsLink.click();
  }
  //click the log out button
  async clickLogOutButton() {
    await this.logOutButton.click();
  }

  //get the current url
  async getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Parameterized method to enter credentials
   * @param gobbID - string
   * @param password - string
   */

  //login the user
  async logInUser(gobbID: string, password: string) {
    await this.loginButton.click();
    await this.gobbIDTextBox.fill(gobbID);
    await this.passwordTextBox.fill(password);
    await this.getToSloppinButton.click();
  }
}

export class MeGoblinPage {
  //variables
  readonly page: Page;
  readonly loginButton: Locator;
  readonly closeLoginPopup: Locator;
  readonly gobbIDTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly getToSloppinButton: Locator;
  readonly profileLink: Locator;
  readonly meGoblinLink: Locator;
  readonly slopsToGobbleTab: Locator;
  readonly slopsIveGobbledTab: Locator;
  readonly movieCard: Locator;
  readonly movieModal: Locator;
  readonly movieModalCloseButton: Locator;
  readonly iWantItButton: Locator;
  readonly iWatchedItButton: Locator;
  readonly slopSearchLink: Locator;
  readonly searchTextBox: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.gobbIDTextBox = page.getByLabel("Gobb ID");
    this.passwordTextBox = page.getByLabel("Password");
    this.getToSloppinButton = page.getByRole("button", {
      name: "Get to Sloppin'",
    });
    this.profileLink = page.getByRole("link", { name: "automateOne" });
    this.meGoblinLink = page.getByRole("link", { name: "Me goblin" });
    this.slopsToGobbleTab = page
      .getByRole("tab")
      .filter({ hasText: "SLOPS TO GOBBLE" })
      .nth(0);
    this.slopsIveGobbledTab = page
      .getByRole("tab")
      .filter({ hasText: "SLOPS IVE GOBBLED" })
      .nth(-1);
    this.movieCard = page.getByTestId("moviecard-wrapper-div-");
    this.movieModal = page
      .getByRole("dialog")
      .filter({ hasText: "You'll like this!" });
    this.movieModalCloseButton = page
      .getByRole("dialog")
      .filter({ hasText: "You'll like this!" })
      .getByRole("button", { name: "close-button" });
    this.iWantItButton = page
      .getByTestId("moviepreview-userbuttons-div")
      .getByRole("button", { name: "I want it!" })
      .last();
    this.iWatchedItButton = page
      .getByTestId("moviepreview-userbuttons-div")
      .getByRole("button", { name: "I watched it!" });
    this.slopSearchLink = page.getByRole("link", { name: "Slop Search" });
    this.searchTextBox = page.getByPlaceholder("Type Here");
  }

  //functions
  //click the login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  //click the profile link
  async clickProfileLink() {
    await this.profileLink.click();
  }

  //click the me goblin link
  async clickMeGoblinLink() {
    await this.meGoblinLink.click();
  }

  //click the slops to gobble tab
  async selectSlopsToGobbleTab() {
    await this.slopsToGobbleTab.click();
  }

  //click the slops ive gobbled tab
  async selectSlopsIveGobbledTab() {
    await this.slopsIveGobbledTab.click();
  }

  //select a movie to watch
  async selectAMovieToWatch() {
    await this.iWantItButton.click();
    await this.movieModalCloseButton.click();
  }

  //select a watched movie
  async selectAWatchedMovie() {
    await this.iWatchedItButton.click();
    await this.movieModalCloseButton.click();
  }

  //get the current url
  async getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Parameterized method to enter credentials
   * @param gobbID - string
   * @param password - string
   */

  //login the user
  async logInUser(gobbID: string, password: string) {
    await this.loginButton.click();
    await this.gobbIDTextBox.fill(gobbID);
    await this.passwordTextBox.fill(password);
    await this.getToSloppinButton.click();
  }

  //click the slop search link
  async clickSlopSearchLink() {
    await this.slopSearchLink.click();
  }
}

export class HeaderLinks {
  //variables
  readonly page: Page;
  readonly loginButton: Locator;
  readonly gobbIDTextBox: Locator;
  readonly passwordTextBox: Locator;
  readonly getToSloppinButton: Locator;
  readonly profileLink: Locator;
  readonly homePageLink: Locator;
  readonly slopSearchLink: Locator;
  readonly submitSlopLink: Locator;
  readonly slopBlogLink: Locator;
  readonly imFeelingSloppyLink: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.gobbIDTextBox = page.getByLabel("Gobb ID");
    this.passwordTextBox = page.getByLabel("Password");
    this.getToSloppinButton = page.getByRole("button", {
      name: "Get to Sloppin'",
    });
    this.profileLink = page.getByRole("link", { name: "automateOne" });
    this.homePageLink = page.locator('[data-test-id="header-logo-link"]');
    this.slopSearchLink = page.getByRole("link", { name: "Slop Search" });
    this.submitSlopLink = page.getByRole("link", { name: "Submit Slop" });
    this.slopBlogLink = page.getByRole("link", { name: "Slop Blog" });
    this.imFeelingSloppyLink = page.getByRole("link", {
      name: "I'm Feeling Sloppy",
    });
  }

  //functions
  //click the login button
  async clickLoginButton() {
    await this.loginButton.click();
  }

  //click the profile link
  async clickProfileLink() {
    await this.profileLink.click();
  }

  //click the home page link
  async clickHomePageLink() {
    await this.homePageLink.click();
  }

  //click the slop search link
  async clickSlopSearchLink() {
    await this.slopSearchLink.click();
  }

  //click the submit slop link
  async clickSubmitSlopLink() {
    await this.submitSlopLink.click();
  }

  //click the slop blog link
  async clickSlopBlogLink() {
    await this.slopBlogLink.click();
  }

  //click the i'm feeling sloppy link
  async clickImFeelingSloppyLink() {
    await this.imFeelingSloppyLink.click();
  }

  //get the current url
  async getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Parameterized method to enter credentials
   * @param gobbID - string
   * @param password - string
   */

  //login the user
  async logInUser(gobbID: string, password: string) {
    await this.loginButton.click();
    await this.gobbIDTextBox.fill(gobbID);
    await this.passwordTextBox.fill(password);
    await this.getToSloppinButton.click();
  }
}
