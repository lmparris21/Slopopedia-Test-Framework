import { test, expect } from '@playwright/test';
import { LoginModal } from '../pages/authentication';

/*
* Search Test: Positive Test 
* Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/38
*/

//testing login modal and popup window
test.describe('LoginModal , Submitting Valid Login Credentials , Password Link , Signup Button Link', () => {

    test('clicking the login modal & popup window', async ({ page }) => {
        await page.goto('/');
        const loginmodal = new LoginModal(page);
        await loginmodal.clickLoginButton();
        // Login Popup Window Appears 
        await loginmodal.loginHeaderText.isVisible();
    });

/*
* Search Test: Positive Test 
* Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/39
* Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/69
*/

        //testing valid login credentials 
        test('Submitting Valid Login Credentials', async ({ page }) => {
            await page.goto('/');
            const loginmodal = new LoginModal(page);
            await loginmodal.submitloginwithvalidcredentials()
            // Get to Sloppin Button is active when login credentials are entered
            await expect(loginmodal.getToSloppinButton).not.toBeVisible();
            // User is Logged in 
        });

/*
* Search Test: Positive Test 
* Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/40
*/

        //testing  forgot password link button
        test('Clicking Forgot Password Link', async ({ page }) => {
            await page.goto('/');
            const loginmodal = new LoginModal(page);
            await loginmodal.clickLoginButton();
            await loginmodal.forgotPasswordLink.click();
            // User clicks forgot password link, an admin message appears
            await expect(loginmodal.contactAdminMessage).toBeVisible();

        });

/*
* Search Test: Positive Test 
* Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/68
*/
        //testing signup button in login window
        test('Clicking Signup Button In Login Link Window', async ({ page }) => {
            await page.goto('/');
            const loginmodal = new LoginModal(page);
            await loginmodal.clickingSignupButtonInLink()
            // User clicks signup button in Login Window
            await expect(loginmodal.signupButtonInLoginHeaderText).toBeVisible();
            // Signup button is active when user clicks 
        });


    });

