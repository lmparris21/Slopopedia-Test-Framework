//must be at the top of every .spec.ts file to import playwright features
import { test, expect } from '@playwright/test';
//import you POM page into this test file
import { LoginModal } from '../pages/POM_example';

//these are the dev environment test data
const URL = process.env.URL!
const fakeEmail = process.env.FAKE_EMAIL!
const fakePassword = process.env.FAKE_PASSWORD!

// this will be performed before each test
test.beforeEach(async ({ page }) => {
    //input webpage into base url in config file
    await page.goto(URL);
})

test.describe('Login Modal', () => {

    test('clicking the login button', async ({ page }) => {
        //create a new instance of the loginModal page
        const loginModal = new LoginModal(page);
        //click the login button using method from POM
        await loginModal.clickLoginButton();
        //assert the text in the heading of login popup
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toHaveText('OH HEY GOBLIN');
        //assert the element is visible
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toBeVisible();
    })

    test('closing the login popup', async ({ page }) => {
        //create a new instance of the loginModal page
        const loginModal = new LoginModal(page);
        //click the close login button (X) using method from POM
        await loginModal.clickLoginCloseButton();
        //assert that the heading 'OH HEY GOBLIN' is now hidden after the popup is closed
        await expect(page.getByRole('heading', { name: 'OH HEY GOBLIN' })).toBeHidden();
    })

    test('filling in the login form with bad credentials', async ({ page }) => {
        //create a new instance of the loginModal page
        const loginModal = new LoginModal(page);
        //use paramaterized method from POM
        await loginModal.submitLoginFormWithBadCredentials(fakeEmail, fakePassword, true);
        //assert the gobb id contains the input 'test@test.com'
        await expect(loginModal.gobbIDTextBox).toHaveValue('test@test.com');
        //assert the password text box contains the input 'Welcome123!'
        await expect(loginModal.passwordTextBox).toHaveValue('Welcome123!');
        //assert that the checkbox is checked
        expect(await loginModal.rememberMeCheckBox.isChecked()).toBeTruthy();
    })

    test('forgot password link', async ({ page }) => {
        //create a new instance of the loginModal page
        const loginModal = new LoginModal(page);
        //use method from POM to click forgot password link
        await loginModal.clickForgotPasswordLink();
        //assert the message popup is present
        await expect(page.getByText('Please contact')).toBeVisible();
        //assert text in forgot password popup
        await expect(page.getByText('Please contact')).toHaveText('Please contact admin to reset password');
    })

    test('clicking the sign up button in the login popup', async ({ page }) => {
        //create a new instance of the loginModal page
        const loginModal = new LoginModal(page);
        //click the login button using method from POM
        await loginModal.clickSignUpButtonInLoginModal();
        //assert it takes you to the sign up popup
        await expect(page.getByRole('heading', { name: 'HEY YOU GOBLIN' })).toBeVisible();
        //assert the text in the heading 
        await expect(page.getByRole('heading', { name: 'HEY YOU GOBLIN' })).toHaveText('HEY YOU GOBLIN');
    })
})

