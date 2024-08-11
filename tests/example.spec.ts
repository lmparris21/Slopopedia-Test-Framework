//must be at the top of every .spec.ts file to import playwright features
import { test, expect } from '@playwright/test';

//these are the dev environment test data
const URL = process.env.URL!
const fakeEmail = process.env.FAKE_EMAIL!
const fakePassword = process.env.FAKE_PASSWORD!

// this will be performed before each test
test.beforeEach(async ({ page }) => {
    //input webpage into base url in config file
    await page.goto(URL);
    //create a constant for the login button
    const logInButton = page.getByRole('button', { name: 'Log In' });
    //click the login button
    await logInButton.click();
})

// group similar tests together
test.describe('login', () => {

    test('clicking the login button', async ({ page }) => {
        //assert the text in the heading of login popup
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toHaveText('OH HEY GOBLIN');
        //assert the element is visible
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toBeVisible();
    })

    test('closing the login popup', async ({ page }) => {
        //create a constant for the login popup close button
        const closeLoginPopup = page.getByRole('button', { name: 'close-button' });
        //click the login close button
        await closeLoginPopup.click();
        //assert that the heading 'OH HEY GOBLIN' is now hidden after the popup is closed
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toBeHidden();
    })

    test('filling the login form with bad credentials', async ({ page }) => {
        //create constant for gobb id text box
        const gobbIdTextBox = page.getByLabel('Gobb ID');
        //click the gobb id text box
        await gobbIdTextBox.click();
        //fill in the gobb id by using the page.keyboard.type method
        await page.keyboard.type(fakeEmail);
        //create constant for password text box
        const passwordTextBox = page.getByLabel('Password');
        //click the password text box
        await passwordTextBox.click();
        //fill the password text box using the .fill method
        await passwordTextBox.fill(fakePassword);
        //assert the gobb id contains the input 'test@test.com'
        await expect(gobbIdTextBox).toHaveValue('test@test.com');
        //assert the password text box contains the input 'Welcome123!'
        await expect(passwordTextBox).toHaveValue('Welcome123!');
        //create constant for get to sloppin' button
        const getToSloppinButton = page.getByRole('button', { name: 'Get to Sloppin\'' });
        //click the button
        await getToSloppinButton.click();
        //button does not lead anywhere
    })

    test('login popup remember me checkbox', async ({ page }) => {
        //create a constant for the remember me checkbox
        const rememberMeCheckbox = page.getByRole('checkbox');
        //check the checkbox
        await rememberMeCheckbox.check();
        //assert that the checkbox is checked
        //another way of checking -- note the await location
        expect(await rememberMeCheckbox.isChecked()).toBeTruthy();
        //uncheck the checkbox
        await rememberMeCheckbox.uncheck();
        //assert that the checkbox is checked
        expect(await rememberMeCheckbox.isChecked()).toBeFalsy();
    })

    test('forgot password link', async ({ page }) => {
        //create constant for forgot password link
        const forgotPasswordLink = page.getByRole('button', { name: 'Forgot Password?' });
        //click the forgot password button
        await forgotPasswordLink.click();
        //assert the message popup is present
        await expect(page.getByText('Please contact')).toBeVisible();
        //assert text in forgot password popup
        await expect(page.getByText('Please contact')).toHaveText('Please contact admin to reset password');
    })

    test('clicking the sign up button in the login popup', async ({ page }) => {
        //create a constant for the sign up button in the login popup
        const signUpButtonInLogin = page.getByRole('button', { name: 'Sign Up!' });
        //click the sign up button
        await signUpButtonInLogin.click();
        //assert it takes you to the sign up popup
        await expect(page.getByRole('heading', { name: 'HEY YOU GOBLIN' })).toBeVisible();
        //assert the text in the heading 
        await expect(page.getByRole('heading', { name: 'HEY YOU GOBLIN' })).toHaveText('HEY YOU GOBLIN');
    })
})


