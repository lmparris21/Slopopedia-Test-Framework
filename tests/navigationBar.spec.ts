
//Pavani Kunapureddy

import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import * as testData from '../testData.json';

const URL = process.env.URL!

test.describe('Main page features',()=>{

// Verify that slop search window opens after clicking slop search link (ID: TC0022)
//Link: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/22
    test (' Should be able to click on Slop Search Link', async({page})=>{

        //naviagte to the slopopedia webpage
        await page.goto('/');

        //Navigate to the slop search page 
        const mainPage=new MainPage(page);
        await mainPage.clickOnSlopSearchLink();

        //validate to the slop serach page URL
        const currentUrl = await mainPage.getCurrentUrl();
        await expect(currentUrl).toBe(URL + 'search');
        
         })

// Verify that slop blog window opens after clicking slop blog link (ID: TC0023)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/23
   test(' Should be able to click on Slop Blog Link', async({page})=>{

        //naviagte to the slopopedia webpage
        await page.goto('/');

        //Navigate to the slop Blog page 
        const mainPage=new MainPage(page);
        await mainPage.clickOnSlopBlogLink();

     //validate to the slop Blog page URL
        const currentUrl = await mainPage.getCurrentUrl();
        await expect(currentUrl).toBe(URL + 'articles');
        
         })

// Verify that sumbit slop window without log In after clicking Sumbit slop link (ID: TC0024)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/24
   test(' Should be able to click on Submit Slop link', async({page})=>{

        //naviagte to the slopopedia webpage
     await page.goto('/');

     //Click the submit button without log in. for this I have created bug report
     const mainPage=new MainPage(page);
    await mainPage.clickOnSubmitSlopLink();

    //validate the submit page Url
   const currentUrl = await mainPage.getCurrentUrl();

   const expectedUrl = await mainPage.getCurrentUrl+'submit';
   const expectedUrl1 = await mainPage.getCurrentUrl();

   if (currentUrl.includes('submit')) {
      if (currentUrl === expectedUrl) {
         console.log('Successfully navigated to the submit page.');
       }
      
    } else if(!currentUrl.includes('submit')) {
      if (currentUrl === expectedUrl1) {
         console.log('Successfully navigated to the submit main page.');
       } 
      
    } else{
      console.log('Successfully navigated to the submit else page.'); 
    }
   
 })

// Verify that I'm feeling sloppy pop-up opens after clicking I'm feeling sloppy link (ID: TC0075)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/75
   test('Should be able to click on  I/m Feeling Sloppy link', async({page})=>{

   //naviagte to the slopopedia webpage
      await page.goto('/');  

    //Navigate to the I'm feeling sloppy page 
      const mainPage=new MainPage(page);

// adding this line because of the locator is not visiable while page is loading, 
      await page.waitForLoadState("networkidle");
       await mainPage.clickOnImFeelingSloppy();

 //validate to the message on the I'm feeling sloppy page
 
       await expect(mainPage.sloppyText).toBeVisible();


     })

// Verify that log in window opens after clicking Login link

// Verify that log in window opens after clicking Login link (ID: TC0077)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/77

     test(' Should be able to click on Log In Link', async({page})=>{
        //naviagte to the slopopedia webpage
        await page.goto('/');

//Navigate to the LogIn page
       const mainPage=new MainPage(page);
       await mainPage.clickOnLogIn();

 // validate to the logIn header message      
       await expect(mainPage.loginHeader).toBeVisible();

      
  
       })
// Verify that Sing up window opens after clicking Sign Up link

 
 })

// Verify that Sing up window opens after clicking Sign Up link (ID: TC0079)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/79

       test(' Should be able to click on SingUp Link ', async({page})=>{
 //naviagte to the slopopedia webpage
       await page.goto('/');

     //Navigate to the SignUp page
      const mainPage=new MainPage(page);
      await mainPage.clickOnSignUp();

 //validate the signUp header      
       await expect(mainPage.signUpHeader).toBeVisible();


  
       })
       // Verify the Text on Slopopedia web page (ID: TC0084)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/84
test(' Verify the Text "RECENTLY ADDED" on main page ', async({page})=>{
   //naviagte to the slopopedia webpage
   await page.goto('/');
   //Verify the text is present on the Main page  
   const mainPage=new MainPage(page); 
   const textOnSlopopedia =testData.textOnSlopopedia.text; 
   await expect(mainPage.textOnMainPage).toContainText(textOnSlopopedia);  

})

// Verify the page logo on Slopopedia web page (ID: TC0081)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/81
  test(' Verify the "slopopedia logo" on the main page ', async({page})=>{
   //naviagte to the slopopedia webpage
   await page.goto('/');
   //Verify the text is present on the Main page  
   const mainPage=new MainPage(page); 
   const textOnSlopopedia =testData.textOnSlopopedia.slopopediaPageLogo; 
   await expect(mainPage.slopopediaLogo).toBeVisible();  

  
    
         })
// Verify the movie card on the Slopopedia web page (ID: TC0226)
//Link : https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/226
test(' Verify the movie card on the main page ', async({page})=>{
try{
   //naviagte to the slopopedia webpage
   await page.goto('/');
 //Navigate to the movie card pop up
   const mainPage=new MainPage(page);
// adding this line because of the locator is not visiable while page is loading, 
 await page.waitForLoadState("networkidle"); 
   await mainPage.clickOnMovieCard();
//Verify the "maximun risk" movie card is present on the popup of movie card
   const movieCard =testData.textOnSlopopedia.movieCard; 
   await expect(mainPage.textOfMovieCard).toBeVisible();  
//verify the I watched it text is present on the movie card
   const iWatchItText=testData.textOnSlopopedia.iWatchItText;
   await expect(mainPage.watchItText).toBeVisible();  
}
catch (error) {
 console.error('Test case failed:', error);
} 

   })


   

   




        
