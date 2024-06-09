import { Page, expect } from "@playwright/test";

export class Results {

    private page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    assertResultsPageVisibility = async () =>  await expect(this.page.getByRole('link', { name: 'Tren con salida a'}).nth(1)).toBeVisible({timeout:40000});
}