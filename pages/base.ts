import { Page } from "@playwright/test";


export class Base {

    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    selectFomDropdown = async (dropdownName: string, itemFromList: string) => {
        await this.page.keyboard.press('Home');
        await this.page.getByRole("combobox", { name: dropdownName }).click();
        await this.page.getByRole("option", { name: itemFromList }).click();
        await this.page.keyboard.press('Home');
    }

    clickOnButton = async (buttonName: string) => {
        await this.page.keyboard.press('Home');
        await this.page.getByRole("button", { name: buttonName }).click();
        await this.page.keyboard.press('Home');
    }

}