import { test, expect } from '@playwright/test';
import { Renfe } from '../pages';
import { TestContext } from '../types/context-types';
import { generateTestContext } from '../helpers/common';



let renfe: Renfe, testContext: TestContext;

test.beforeEach(async ({ page }) => {
    renfe = new Renfe(page);
    testContext = await generateTestContext();
});



test('Negative ticket purchase with invalid card at Renfe', async ({ page }) => {

    await test.step('Access to Renfe homepage', async () => {
        await renfe.inHomePage.accessApplication(testContext);
    });

    await test.step('Application Landed Successfully.', async () => {
        await renfe.inHomePage.assertHomePageIsLanded(testContext);
    })

    await test.step('Accept All Cookies.', async () => {
        await renfe.inHomePage.acceptCookies();
    })

})

