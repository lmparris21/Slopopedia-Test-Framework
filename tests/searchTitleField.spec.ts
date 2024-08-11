//Pavani Kunapureddy
//must be at the top of every .spec.ts file to import playwright features
import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import * as testData from '../testData.json';

const URL = process.env.URL!


test.describe('Search functionality', () =>{
   // Test the search results contain specific movie titles when searching for "Aliens" (ID: TC0001)
test('To test the "Voyage of the Rock Aliens" movie on the Search Page', async ({ page }) => {
    //naviagte to the slopopedia webpage
        await page.goto('/');

        //Naviagte to the search page
        const mainPage=new MainPage(page);
       await mainPage.clickOnSlopSearchLink();

        // Fill out the title field with valid data:
        await mainPage.fillTypeHereTitleField('Alien')

       //to check the condition of "Voyage of the Rock Aliens","
        const expectedSlopByText =testData.searchData.expectedSlopByText;
      await expect(mainPage.slopSearchByText).toContainText(expectedSlopByText);
      await page.waitForTimeout(3000);
      //close the windows
      await page.close();
    })
// Test the search results contain specific movie titles when searching for "Aliens" (ID: TC0002)
 test('To test the "Alien Vs. Predator" movie on the Search Page', async ({ page }) => {
   //naviagte to the slopopedia webpage
   await page.goto('/');
    //Naviagte to the search page
   const mainPage=new MainPage(page);
  
   await mainPage.clickOnSlopSearchLink();
   // Fill out the title field with valid data:
   await mainPage.fillTypeHereTitleField('Alien');
   //to check the condition of "Alien Vs. Predator"
    const expectedSlopByDescription =testData.searchData.expectedSlopByDescription;
  await expect(mainPage.slopFoundByText).toContainText(expectedSlopByDescription);
  await page.waitForTimeout(3000);
  //close the windows
   await page.close();
    
 })
 // Test the search results contain specific movie titles when searching for "Aliens" (ID: TC0003)
 test('To test the "Alien from L.A." movie on the Search Page', async ({ page }) => {
   //naviagte to the slopopedia webpage
   await page.goto('/');
   
   //Naviagte to the search page
   const mainPage=new MainPage(page);
   await mainPage.clickOnSlopSearchLink();

   // Fill out the title field with valid data:
   await mainPage.fillTypeHereTitleField('Alien');

    //to check the condition of "Alien from L.A."
   const expectedSlopByMessage =testData.searchData.expectedSlopByMessage;
   await expect(mainPage.searchFoundByText).toContainText(expectedSlopByMessage);

   //close the windows
   await page.waitForTimeout(3000);
   await page.close();
    
 })
 // Test the keyword on search page contains specific keyword is selecting "Oops Music Video" (ID: TC0004)
 test('To test the "keywords" field on the Search page', async ({ page }) => {
    //naviagte to the slopopedia webpage
   await page.goto('/');

   //Naviagte to the search page
   const mainPage=new MainPage(page);
   await mainPage.clickOnSlopSearchLink();

   //to fill out the keywords with valid data
   await mainPage.keyWordText.click();

   //select the movie from keywords
  await mainPage.keyWordOptions.click();

  //validate the data from the keyword is "Oops Music Video
  const nameOfTheKeyword =testData.searchData.nameOfTheKeyword;
  await expect(mainPage.keyText).toContainText(nameOfTheKeyword);
  await page.waitForTimeout(3000);

  //close the windows
  await page.close();
   
    
 })
 //verify the sing up funtionality without using page object model (ID: TC0005)
 test('verify the user LogIn functionality', async ({ page }) => {
    //naviagte to the slopopedia webpage
   await page.goto('/');

   //Naviagte to the Login page 
   const mainPage=new MainPage(page);
   await mainPage.clickOnLogIn();

   //fill the email on the login page from .env file
   const username = process.env.FAKE_EMAIL;
   await mainPage.fillOutLogInEmail(username);

   //fill the password on the login page from .env file
   const password = process.env.FAKE_PASSWORD;
   await mainPage.fillOutLogInPassword(password);
   
   //to click the checkbox on the logIn page
   await mainPage.fillOutCheckBox();
    
    //validate the get sloppin button
    const sloppinButton = testData.logInData.sloppinButton;
    await expect(mainPage.logInSloppButton).toContainText(sloppinButton);

//close the windows
    await page.close();
})


 //verify the sing up funtionality without using page object model (ID: TC0006)
 test('verify the user SignUp functionality', async ({ page }) => {
    //naviagte to the slopopedia webpage
    await page.goto('/');
   
    //Navigate to the SingUp page
    const mainPage=new MainPage(page);
    await mainPage.clickOnSignUp();
   
    //check the header on the signup page
    const signUpPageHeader=testData.signUpData1.signUpPageHeader;
    await expect(mainPage.signUpHeader).toContainText(signUpPageHeader);
   
    //fill the GobbId on the signup page
    const gobbID = testData.signUpData1.gobbID;
    await mainPage.fillOutGobbIDField(gobbID);

    //fill the email on the signup page
    const email = testData.signUpData1.email;
    await mainPage.fillOutEmailId(email);
    
    //fill the password on the signup page
    const password = testData.signUpData1.password;
    await mainPage.fillOutPassowrd(password);
    
    //fill the conformation password on the signup page
    const commanPassword = testData.signUpData1.commanPassword;
    await mainPage.fillOutConfirmationPassword(commanPassword);
    
    //click the get to sloppin button
    await mainPage.fillOutGetSloppin();


    //validation of get sloppin button on singUp page
    await expect(mainPage.getSloppinButton).toBeVisible();
//close the windows
    await page.close();
    
   })
    }) 



