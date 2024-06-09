import { Page, expect } from "@playwright/test";
import { TestContext } from "../types/context-types";


export class Home {

    private page: Page;

    accessApplication = async ({ url }: TestContext) => await this.page.goto(url);

    assertHomePageIsLanded = async ({ landingPage }: TestContext) => {
        await expect(this.page).toHaveURL(landingPage);
        await expect(this.page.getByLabel("Login")).toBeVisible();
    }
    
    acceptCookies = async () => {
        await this.page.getByRole("button", { name: "Aceptar todas las cookies" }).click();
    }

    constructor(page: Page) {
        this.page = page;
    }

}