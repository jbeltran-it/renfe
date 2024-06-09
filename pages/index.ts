
import { Page } from "@playwright/test";
import { Home } from "./home";

export class Renfe {
    private page: Page;
    readonly inHomePage: Home;


    constructor(page: Page) {
        this.page = page;
        this.inHomePage = new Home(this.page);
    }
}