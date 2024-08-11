//Lana Kubatina

import { test, expect } from '@playwright/test';
import { ArticlePage } from '../pages/articlePage';
import * as testData from '../testData.json';
import { faker } from '@faker-js/faker';

//these are the dev environment test data
const URL = process.env.URL!
const email = process.env.USER_4!
const password = process.env.USER_4_PASS!
const articleLink = testData.pageUrls.articleUrl;


test.describe('Article Access', () => {
  // Set timeout to 120 seconds
  test.setTimeout(120000);

  /*
  * Negative: View New Entry Link When Not Logged In
  * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/82
  */

  // Test to verify that the "New Entry" link is not visible to guest users
  test('Verify that the New Entry link is not visible when Guest', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    // Create an instance of ArticlePage
    const articlePage = new ArticlePage(page);
    // Click on the Slop Blog link
    await articlePage.clickOnSlopBlogLink();
    // Get the current URL of the page
    const currentUrl = await articlePage.getCurrentUrl();
    // Wait for 1 second
    await page.waitForTimeout(1000);
    // Check that the "New Entry" link is not visible
    await expect(articlePage.newEntryLink).toBeHidden();

  });



  /*
  * Negative: View Drafts Link When Not Logged In
  * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/80
  */

  // Test to verify that the "Drafts" link is not visible to guest users
  test('Verify that the Drafts link is not visible when Guest', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    // Create an instance of ArticlePage
    const articlePage = new ArticlePage(page);
    // Click on the Slop Blog link
    await articlePage.clickOnSlopBlogLink();
    // Get the current URL of the page
    const currentUrl = await articlePage.getCurrentUrl();
    // Wait for 1 second
    await page.waitForTimeout(1000);
    // Check that the "Drafts" link is not visible
    await expect(articlePage.draftsLink).toBeHidden();
  });



  /*
  * Negative: Delete Blog Article as Unauthorized User
  * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/72
  */

  // Test to verify that the "Delete" button is not visible to guest users
  test('Verify that the Delete button is not visible when Guest', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    // Create an instance of ArticlePage
    const articlePage = new ArticlePage(page);
    // Click on the Slop Blog link
    await articlePage.clickOnSlopBlogLink();
    // Get the current URL of the page
    const currentUrl = await articlePage.getCurrentUrl();
    // Check that the URL is correct
    await expect(currentUrl).toBe(URL + 'articles');
    // Click on an article link
    await articlePage.clickOnArticleLink();
    // Wait for 1 second
    await page.waitForTimeout(1000);
    // Check that the "Delete" button is not visible
    await expect(articlePage.deleteButton).toBeHidden();
  });



  /*
  * Submit a Draft Blog Article
  * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/27
  */

  // Test to verify that the authorized user can create a draft of a blog post
  test('Create a new article blog post draft', async ({ page }) => {
  
    // Generate a random title using Faker
   const randomTitle = faker.lorem.words(3);

    // Navigate to the home page
    await page.goto('/');
    // Create an instance of ArticlePage
    const articlePage = new ArticlePage(page);
    // Log in with valid credentials
    await articlePage.login(email, password);
    // Create a new blog entry
    await articlePage.createNewEntry(randomTitle, 'Test Body');
    // Save the new blog entry to drafts
    await articlePage.saveToDrafts();
    // Wait for 1 second
    await page.waitForTimeout(1000);

    // Navigate to drafts page to verify the draft was saved
    await page.goto(`${URL}${testData.pageUrls.allDrafts}`);
    // Wait for the draft title to be visible
    await articlePage.waitForDraftToBeSaved(randomTitle);
    // Check if the draft has been saved successfully 
    const isSaved = await articlePage.isDraftSaved(randomTitle);
    // Log the result of the isSaved check to the console
    console.log('isSaved:', isSaved);  
    // Assert that the draft is saved  
    await expect(isSaved).toBeTruthy();

    // Delete the created blog post draft
    await articlePage.deleteDraft(randomTitle);
    // Wait for the draft title to be removed from the page
    await articlePage.waitForDraftToBeDeleted(randomTitle);
    // Check if the draft has been deleted successfully
    const isDeleted = await articlePage.isDraftDeleted(randomTitle);
    // Log the result of the isDeleted check to the console
    console.log('isDeleted:', isDeleted);  
    // Assert that the draft is deleted  
    await expect(isDeleted).toBeTruthy();
  });



  /*
  * Slop Blog: Create a Blog Article
  * Test Case: https://app.drivt.net/main/projects/6675bb9be3496d35963e0a27/testcases/7
  */

  //Test to verify that the authorized user can create a blog post
  test('Create a new article blog post', async ({ page }) => {

    // Generate a random title using Faker
    const randomTitle = faker.lorem.words(3);

    // Navigate to the home page
    await page.goto('/');
    // Create an instance of ArticlePage
    const articlePage = new ArticlePage(page);
    // Log in with valid credentials
    await articlePage.login(email, password);
    // Create a new blog entry
    await articlePage.createNewEntry(randomTitle, 'Test Body');
    // Publish the new blog entry to articles
    await articlePage.publish();
    // Wait for 1 second to ensure the publish action is completed
    await page.waitForTimeout(1000); 

    // Navigate to drafts page to verify the draft was saved
    await page.goto(`${URL}${testData.pageUrls.allArticles}`);
    // Wait for the post title to be visible
    await articlePage.waitForPostToBeSaved(randomTitle);
    // Check if the post has been saved successfully   
    const isPostSaved = await articlePage.isPostSaved(randomTitle);
    // Log the result of the isPostSaved check to the console
    console.log('isPostSaved:', isPostSaved);
    // Assert that the post is saved
    expect(isPostSaved).toBeTruthy();

    // Delete the created blog post
    await articlePage.deletePost(randomTitle);
    // Wait for the post title to be removed from the page
    await articlePage.waitForPostToBeDeleted(randomTitle);
    // Check if the post has been deleted successfully
    const isPostDeleted = await articlePage.isPostDeleted(randomTitle);
    // Log the result of the isPostDeleted check to the console
    console.log('isPostDeleted:', isPostDeleted);
    // Assert that the post is deleted
    expect(isPostDeleted).toBeTruthy();
    
  });
  

})