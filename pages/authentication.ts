import { expect, Locator,Page } from "@playwright/test";

export class LoginModal{

//variables
readonly page: Page;
readonly loginButton: Locator
readonly loginHeaderText: Locator
readonly gobbIDTextBox: Locator
readonly passwordTextBox: Locator 
readonly getToSloppinButton: Locator 
readonly forgotPasswordLink: Locator 
readonly signupButtonInLogin: Locator 
readonly signupButtonInLoginHeaderText: Locator 
readonly contactAdminMessage: Locator


//constructor
constructor(page: Page){
    this.page=page;
    this.loginButton=page.getByRole('button' , { name: 'Log In'});
    this.loginHeaderText=page.getByRole('banner' , {name: 'OH HEY GOBLIN'});
    this.gobbIDTextBox = page.locator("#gobb-id");
    this.passwordTextBox = page.locator("#password");
    this.getToSloppinButton=page.getByRole('button' , {name: 'Get To Sloppin'});
    this.forgotPasswordLink=page.getByRole('button' , {name: 'Forgot Password?'});
    this.signupButtonInLogin=page.getByRole('button' , {name: 'Sign Up!'});
    this.signupButtonInLoginHeaderText=page.locator("text = HEY YOU GOBLIN");
    this.contactAdminMessage = page.locator("text = Please contact admin to reset password")
}

//clicking login button & popup window
async clickLoginButton (){
  //Click Login In
    await this.loginButton.click();
    //Popup window appears 
    await this.loginHeaderText.isVisible();


}

  //submitting valid login credentials 
  async submitloginwithvalidcredentials() {
    // Enter Username and Password and Click Login
    const username = process.env.USER_3 as string;
    const password = process.env.USER_3_PASS as string; 
    await this.loginButton.click();
    await this.gobbIDTextBox.fill(username)
    await this.passwordTextBox.fill(password);
    // The Get to SLoppin Button is active 
    await this.getToSloppinButton.click();
  }



  //clicking forgot password link 
  async clickingForgotPasswordLink() {
    await this.loginButton.click();
    // Click Forgot password link in login window
    await this.forgotPasswordLink.click();
    // password link is active with admin message 
  }

  //clicking signup button in login window
  async clickingSignupButtonInLink() {
    await this.loginButton.click();
    // Click signup button in login window 
    await this.signupButtonInLogin.click();
    // Signup button is active
  }
}