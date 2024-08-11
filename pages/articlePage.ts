import { Locator, Page } from "@playwright/test";
import * as testData from '../testData.json';

export class ArticlePage {
    //Variables 

    // Page object representing the current page
    readonly page: Page;

    // Locator for the Slop Blog link
    readonly slopBlogLink: Locator;

    // Locator for an article link
    readonly articleLink: Locator;

    // Locator for the "New Entry" link
    readonly newEntryLink: Locator;

    // Locator for the "Drafts" link
    readonly draftsLink: Locator;

    // Locator for the "Delete" button
    readonly deleteButton: Locator;

    // Locator for the "Log In" button
    readonly loginButton: Locator;

    // Locator for the Gobb ID input field
    readonly gobbIDInput: Locator;

    // Locator for the Password input field
    readonly passwordInput: Locator;

    // Locator for the "Get to Sloppin'" button
    readonly getToSloppinButton: Locator;

    // Locator for the Slop Blog link
    readonly slopBlog: Locator;

    // Locator for the Title input field
    readonly titleInput: Locator;

    // Locator for the Body input field
    readonly bodyInput: Locator;

    // Locator for the "Save to Drafts" button
    readonly saveToDraftsButton: Locator;

    // Locator for the saved draft title
    readonly savedDraftTitle: Locator;

    //Locator for the "Publish!" button
    readonly publishButton: Locator;

    // Locator for the saved post title
    readonly savedPostTitle: Locator;

    //Locator for the "View published articles" button
    readonly viewArticles: Locator;

    //Constructor to initialize the locators
    constructor(page: Page) {
        // Sets the page object
        this.page = page;

        // Initializes the Slop Blog link locator
        this.slopBlog = page.getByTestId('header-link-slop-blog');

        // Initializes the article link locator
        this.articleLink = page.getByRole('heading', { name: 'Trancers II: The Return of' }).first();

        // Initializes the "New Entry" link locator
        this.newEntryLink = page.getByRole('link', { name: '+ New Entry' });

        // Initializes the "Drafts" link locator
        this.draftsLink = page.getByRole('link', { name: 'Drafts' });

        // Initializes the "Delete" button locator
        this.deleteButton = page.getByRole('button', { name: 'Delete' });

        // Initializes the "Log In" button locator
        this.loginButton = page.getByRole('button', { name: 'Log In' });

        // Initializes the Gobb ID input field locator
        this.gobbIDInput = page.getByLabel('Gobb ID');

        // Initializes the Password input field locator
        this.passwordInput = page.getByLabel('Password');

        // Initializes the "Get to Sloppin'" button locator
        this.getToSloppinButton = page.getByRole('button', { name: "Get to Sloppin'" });

        // Initializes the Slop Blog link locator within the page
        this.slopBlogLink = page.getByRole('link', { name: 'Slop Blog' });

        // Initializes the Title input field locator
        this.titleInput = page.getByPlaceholder('Title');

        // Initializes the Body input field locator
        this.bodyInput = page.getByPlaceholder('Body');

        // Initializes the "Save to Drafts" button locator
        this.saveToDraftsButton = page.getByRole('button', { name: 'Save to Drafts' });

        // Initializes the saved draft title locator
        this.savedDraftTitle = page.getByRole('heading', { name: 'Test Title' });

        //Initializes the "Publish!" button locator
        this.publishButton = page.getByRole('button', { name: 'Publish!' });

        // Initializes the saved post title locator
        this.savedPostTitle = page.getByRole('heading', { name: 'Test Title' });

        //Initializes the "View published articles" button
        this.viewArticles = page.getByRole('button', { name: 'View published articles' });


    }
    //Function

    // Function to get draft title by name
    draftTitle(title: string): Locator {
        return this.page.getByRole('heading', { name: title });
    }
    
    // Function to get post title by name
    postTitle(title: string): Locator {
        return this.page.getByRole('heading', { name: title });
    }

    // Function to click on the Slop Blog link
    async clickOnSlopBlogLink() {
        await this.slopBlog.click();
    }

    // Function to click on an article link
    async clickOnArticleLink() {
        await this.articleLink.click();
    }

    // Function to get the current URL
    async getCurrentUrl() {
        return this.page.url();
    }

    // Function to log in
    async login(gobbID: string, password: string) {
        await this.loginButton.waitFor({ state: 'visible' }); 
        await this.loginButton.click();
        await this.gobbIDInput.waitFor({ state: 'visible' }); 
        await this.gobbIDInput.click();
        await this.gobbIDInput.fill(gobbID);
        await this.passwordInput.waitFor({ state: 'visible' });
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.getToSloppinButton.waitFor({ state: 'visible' });
        await this.getToSloppinButton.click();
    }

    // Function to create a new entry for a blog post
    async createNewEntry(title: string, body: string) {
        await this.slopBlogLink.click();
        await this.newEntryLink.click();
        await this.titleInput.click();
        await this.titleInput.fill(title);
        await this.bodyInput.click();
        await this.bodyInput.fill(body);
    }

    // Function to save the new entry to drafts
    async saveToDrafts() {
        await this.saveToDraftsButton.click();
    }

    // Function to check if the draft is saved
    async isDraftSaved(title: string): Promise<boolean> {
        const draftTitle = await this.draftTitle(title);
        return await draftTitle.isVisible();
    }

    // Function to wait for a draft to be saved
    async waitForDraftToBeSaved(title: string) {
        // Wait for selector
        await this.draftTitle(title).waitFor({ state: 'visible' });
    }

    // Function to delete a created draft
    async deleteDraft(title: string) {
        // Wait for selector
        const draftTitle = await this.draftTitle(title);
        await draftTitle.click();
        await this.deleteButton.click();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
    }

    // Function to wait for a draft to be deleted
    async waitForDraftToBeDeleted(title: string) {
        // Wait for selector to be hidden
        await this.draftTitle(title).waitFor({ state: 'hidden' });
    }

    // Function to check if the draft is deleted
    async isDraftDeleted(title: string): Promise<boolean> {
        try {
            const draftTitle = this.draftTitle(title);
            await draftTitle.waitFor({ state: 'hidden' });
            return true;
        } catch {
            return false;
        }
    }

    //Function to publish the new entry to articles
    async publish() {
        await this.publishButton.click();
    }

    // Function to wait for a post to be saved
    async waitForPostToBeSaved(title: string) {
        // Wait for selector
        await this.postTitle(title).waitFor({ state: 'visible' });
    }

    //Function to check if the new post is saved
    async isPostSaved(title: string): Promise<boolean> {
        await this.page.goto(`${process.env.URL}${testData.pageUrls.allArticles}`);
        await this.page.waitForLoadState('networkidle');
        const postTitle = await this.postTitle(title);
        return await postTitle.isVisible();
    }

    //Function to delete the created post
    async deletePost(title: string) {
        const postTitle = await this.postTitle(title);
        await postTitle.click();
        await this.deleteButton.click();
        await this.page.getByRole('button', { name: 'Confirm' }).click();
      }

      // Function to wait for a post to be deleted
    async waitForPostToBeDeleted(title: string) {
        // Wait for selector to be hidden
        await this.postTitle(title).waitFor({ state: 'hidden' }); 
    }

    // Function to check if the post is deleted
    async isPostDeleted(title: string): Promise<boolean> {
        try {
            await this.page.goto(`${process.env.URL}${testData.pageUrls.allArticles}`);
            await this.page.waitForLoadState('networkidle');
            const postTitle = this.postTitle(title);
            await postTitle.waitFor({ state: 'hidden' });
            return true;
        } catch {
            return false;
        }
    }
}