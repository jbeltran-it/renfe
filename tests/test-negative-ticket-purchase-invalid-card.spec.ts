import { test, expect } from '@playwright/test';
import { Renfe } from '../pages';
import { TestContext } from '../types/context-types';
import { generateTestContext } from '../helpers/common';
import { TRIP_2 } from '../test-data/tripData';



let renfe: Renfe, testContext: TestContext;

test.beforeEach(async ({ page }) => {
    renfe = new Renfe(page);
    testContext = await generateTestContext();
});


test('Negative ticket purchase with invalid card at Renfe', async ({ page }) => {

    await test.step('Access to Renfe homepage', async () => {
        await renfe.inHomePage.accessApplication(testContext);
        await renfe.inHomePage.assertHomePageIsLanded(testContext);
    });

    await test.step('Accept All Cookies.', async () => {
        await renfe.inHomePage.acceptCookies();
    })

    await test.step('Fill in the ticket search form', async () => {
        await renfe.inHomePage.enterTripData(TRIP_2);
    })

    await test.step('Search for available tickets', async () => {
        await renfe.inHomePage.searchTickets();
    })

    await test.step('Validate the results are returned in the page', async () => {
        await renfe.inResultsPage.assertResultsPageVisibility();
    })

})

