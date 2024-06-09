
import { Page } from "@playwright/test";
import { Home } from "./home";
import { Base } from "./base";
import { Results } from "./results";

export class Renfe {
    private page: Page;
    private base: Base;
    readonly inHomePage: Home;
    readonly inResultsPage: Results;
    
    // readonly: Home;



    constructor(page: Page) {
        this.page = page;
        this.inHomePage = new Home(this.page, this.base);
        this.inResultsPage = new Results(this.page);
        this.base
    }
}