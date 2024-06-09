import { Page, expect } from "@playwright/test";
import { TestContext } from "../types/context-types";
import { TripDetails, TripType } from "../types/app-types";
import { Base } from "./base";


export class Home {

    private page: Page;
    private base: Base;


    constructor(page: Page, base: Base) {
        this.page = page;
        this.base = new Base(page);
    }


    accessApplication = async ({ url }: TestContext) => await this.page.goto(url);

    assertHomePageIsLanded = async ({ landingPage }: TestContext) => {
        await expect(this.page).toHaveURL(landingPage);
        await expect(this.page.getByLabel("Login")).toBeVisible();
    }

    acceptCookies = async () => {
        await this.page.getByRole("button", { name: "Aceptar todas las cookies" }).click();
    }

    setTripType = async(type:TripType)=>{
        await this.page.keyboard.press('Home');
        if (type === "one-way") await this.page.getByText('Viaje solo ida').click();
        await this.page.keyboard.press('Home');
    }

    enterTripData = async (tripData: TripDetails) => {
        await this.base.selectFomDropdown("ORIGEN", tripData.departure);
        await this.base.selectFomDropdown("DESTINO", tripData.arrival);
        await this.page.getByPlaceholder('Fecha ida').click();
        await this.setTripType(tripData.type);
        await this.page.getByText(tripData.dates.departure).nth(2).click();
        await this.page.keyboard.press('Home');
        await this.base.clickOnButton("Aceptar");
    }

    searchTickets = async () => await this.base.clickOnButton("Buscar billete");

}