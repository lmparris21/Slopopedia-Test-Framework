import { Locator, Page, expect } from "@playwright/test";

//export this POM to be imported into test files
export class LoginModal {

    //variables
    readonly page: Page;
    readonly loginButton: Locator;
    readonly closeLoginPopup: Locator;
    readonly gobbIDTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly rememberMeCheckBox: Locator;
    readonly forgotPasswordLink: Locator;
    readonly getToSloppinButton: Locator;
    readonly signUpButtonInLogin: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.closeLoginPopup = page.getByRole('button', { name: 'close-button' });
        this.gobbIDTextBox = page.getByLabel('Gobb ID');
        this.passwordTextBox = page.getByLabel('Password');
        this.rememberMeCheckBox = page.getByRole('checkbox');
        this.forgotPasswordLink = page.getByRole('button', { name: 'Forgot Password?' });
        this.getToSloppinButton = page.getByRole('button', { name: 'Get to Sloppin\'' });
        this.signUpButtonInLogin = page.getByRole('button', { name: 'Sign Up!' });
    }

    //methods
    //clicking the login button
    async clickLoginButton() {
        await this.loginButton.click();
    }

    //clicking the close button in the login modal
    async clickLoginCloseButton() {
        await this.loginButton.click();
        await this.closeLoginPopup.click();
    }

    /**
     * Parameterized method to enter credentials and check the remeber me checkbox
     * @param gobbID - string
     * @param password - string
     * @param rememberMe - boolean - checkbox is checked true or false
     */
    async submitLoginFormWithBadCredentials(gobbID: string, password: string, rememberMe: boolean) {
        await this.loginButton.click();
        await this.gobbIDTextBox.fill(gobbID);
        await this.passwordTextBox.fill(password);
        if(rememberMe)
            await this.rememberMeCheckBox.check({force: true});
        await this.getToSloppinButton.click();
    }

    //clicking the forgot password link
    async clickForgotPasswordLink() {
        await this.loginButton.click();
        await this.forgotPasswordLink.click();
    }

     //clicking the sign up button in the login modal
     async clickSignUpButtonInLoginModal() {
        await this.loginButton.click();
        await this.signUpButtonInLogin.click();
    }
}