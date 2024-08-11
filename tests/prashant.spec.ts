import { test, expect } from '@playwright/test';
import { ArticlePage } from '../pages/articlePage';
import * as testData from '../testData.json';

const URL = process.env.URL!
const articleLink = testData.pageUrls.articleUrl; 


test.describe('Article Page - change',()=>{

    test('Should be able to view the article', async({page})=>{
        await page.goto('/');
        const articlePage=new ArticlePage(page);
        await articlePage.clickOnSlopBlogLink();
        const currentUrl = await articlePage.getCurrentUrl();
        await expect(currentUrl).toBe(URL + 'articles')
        await articlePage.clickOnArticleLink();
        const articleUrl = await articlePage.getCurrentUrl();
        await expect(articleUrl).toBe(URL + articleLink);

    })
})
