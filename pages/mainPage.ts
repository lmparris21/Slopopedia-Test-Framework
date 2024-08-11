//Pavani Kunapureddy 

import { Locator, Page, } from "@playwright/test";

export class MainPage {

    //variables
   
    readonly page: Page;
//Slop Blog for locators that identify link elements 
    readonly slopBlogLink : Locator; 
//Search for locators that identify link elements
   
  readonly slopSearchLink : Locator;
    readonly searchTypeHere :Locator;
    readonly slopFoundByText :Locator;
    readonly searchFoundByText : Locator;
    readonly slopSearchByText : Locator;
    readonly keyWordText : Locator;
    readonly keyWordOptions : Locator;
    readonly keyText: Locator;
//Submit slop for locators that identify link elements
    readonly submitSlopLink : Locator;
//I'm feeling sloppy for locators that identify link elements
    readonly imfeelingSloppy : Locator;
    readonly sloppyText :Locator;
// LogIn for locators that identify link elements
    readonly logIn : Locator;
    readonly loginHeader: Locator;
    readonly loginGobbIdEmail:Locator;
    readonly loginPassword : Locator;
//SignUp for locators that identify link elements
    readonly signUp : Locator;
    readonly signUpHeader: Locator;
    readonly gobbIdField :Locator;
    readonly emailIdField :Locator;
    readonly passwordField : Locator;
    readonly conformationPassword: Locator;
    readonly getSloppinButton : Locator;
    readonly checkBox : Locator;
    readonly logInSloppButton  :Locator;

 //The locator identifies the text 'Recently added'
    readonly textOnMainPage : Locator;
 // the locator identifies the "slopopedia logo"
    readonly slopopediaLogo : Locator; 
 // the locator identifies the "movie card" 
    readonly movieCard : Locator; 
    readonly textOfMovieCard: Locator; 
    readonly watchItText: Locator;

    
 //constructor
    constructor(page: Page) {
        this.page = page;
//slop Blogs
        this.slopBlogLink=page.getByTestId('header-link-slop-blog');
//slop search
        this.slopSearchLink=page.getByTestId('header-link-slop-search');
        //Type here field in the search page
        this.searchTypeHere=page.getByPlaceholder('Type Here');
         //movie names on the search page
        this.slopFoundByText = page.locator("text = Alien Vs. Predator");
        this.searchFoundByText = page.locator("text = Alien from L.A.");

        this.slopSearchByText =page.locator("text = Voyage of the Rock Aliens");

 //keyword text field on the search page
        this.keyWordText =page.locator('.css-1xc3v61-indicatorContainer').first();
        this.keyWordOptions =page.getByRole('option', { name: 'Oops Music Video' });
        this.keyText=page.getByText('Oops Music Video', { exact: true });

 //submit slop
        this.submitSlopLink=page.getByTestId('header-link-submit-slop');
 //I'm feeling sloppy
       this.imfeelingSloppy=page.getByRole('link', { name: 'I\'m Feeling Sloppy' });
       this.sloppyText=page.locator("text= You\'ll like this!");
 //LogIn
       this.logIn=page.getByRole('button', { name: 'Log In' });
       this.loginHeader = page.locator("text = OH HEY GOBLIN");
       this.checkBox=page.getByRole('checkbox');
       this.loginGobbIdEmail = page.locator('div').filter({ hasText: /^Gobb ID$/ }).getByPlaceholder('Type here');
       this.loginPassword = page.locator('div').filter({ hasText: /^Password$/ }).getByPlaceholder('Type here');
       this.logInSloppButton=page.getByRole('button', { name: 'Get to Sloppin\'' });
 //Sign Up
    this.signUp = page.getByRole('button', { name: 'Sign Up' });
    this.signUpHeader = page.locator("text = HEY YOU GOBLIN");
    this.gobbIdField = page.locator('div').filter({ hasText: /^Gobb ID$/ }).getByPlaceholder('Type here');
    this.emailIdField = page.locator('div').filter({ hasText: /^Email$/ }).getByPlaceholder('Type here');
    this.passwordField = page.locator('div').filter({ hasText: /^Password$/ }).getByPlaceholder('Type here');
    this.conformationPassword = page.locator('div').filter({ hasText: /^Confirm password$/ }).getByPlaceholder('Type here');
    this.getSloppinButton = page.getByRole('button', { name: 'Get to Sloppin\'' });


 //Text on Main page
    this.textOnMainPage=page.locator("text='RECENTLY ADDED'"); 
 //Slopopedia Logo
    this.slopopediaLogo = page.getByTestId("header-logo-link");
//Movie card on the main page
    this.movieCard =page.getByTestId('moviecard-wrapper-div-Maximum Risk');
    this.textOfMovieCard=page.getByRole('heading', { name: 'Maximum Risk' });
    this.watchItText=page.locator("text ='I watched it!'");

       
    }
//functions
//The `slopBlogLink` variable represents a Playwright Locator for getting the slopblog window
    async clickOnSlopBlogLink(){
        
        await this.slopBlogLink.click();
    
    }
//The `slopSearchLink` variable represents a Playwright Locator for getting the slopSearch window
    async clickOnSlopSearchLink(){
        await this.slopSearchLink.click();
    
    }
    async fillTypeHereTitleField(wordToSearch: string) {
        await this.searchTypeHere.fill(wordToSearch);
      }
//The `submitSlopLink` variable represents a Playwright Locator for getting the submitSlop window
    async clickOnSubmitSlopLink(){
        await this.submitSlopLink.click();
    
    }
//The `I'm feeling sloppyLink` variable represents a Playwright Locator for getting the popup window
    async clickOnImFeelingSloppy(){
        await this.imfeelingSloppy.click();
    }
//The `LogInLink` variable represents a Playwright Locator for getting the LogIn Popup window
    async clickOnLogIn(){
        await this.logIn.click();
    }

    // Fill out checkbox field:
  async fillOutCheckBox() {
    await this.checkBox.click();
  }
  // fill out the gobb Id

  async fillOutLogInEmail(email){
    await this.loginGobbIdEmail.fill(email);
}
 // fill out the logIn passowrd
 async fillOutLogInPassword(password){

    await this.loginPassword.fill(password);
}
//The `SignUpLink` variable represents a Playwright Locator for getting the SignUp popup window
    async clickOnSignUp(){
        await this.signUp.click();
    }

    // Fill out Gobb ID field:
  async fillOutGobbIDField(gobbID: string) {
    await this.gobbIdField.fill(gobbID);
  }
  // Fill out email ID field
  async fillOutEmailId(email: string) {
    await this.emailIdField.fill(email);
  }
  // Fill out password field:
  async fillOutPassowrd(password: string) {
    await this.passwordField.fill(password);
  }
  // Fill out conframtion password field:
  async fillOutConfirmationPassword(conformationpassword: string) {
    await this.conformationPassword.fill(conformationpassword);
  }
  // Fill out get sloppin button
  async fillOutGetSloppin() {
    await this.getSloppinButton.click();
  }

  async clickOnMovieCard(){
        
    await this.movieCard.click();

}

    

    async getCurrentUrl(){
        return this.page.url();
    }
    

}