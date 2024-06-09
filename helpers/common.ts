
import { Page } from "@playwright/test";
import { Environment, TestContext, Url } from "../types/context-types";

const getEnvVar = async <T>(varName: string, errorMessage: string): Promise<T> => {
    const value = process.env[varName];
    if (!value) {
        throw new Error(errorMessage);
    }
    return value as T;
}

/** 
 * Get the basic information for this test to run, such as Environment or sensitive information.
 * The returned context is required by the framework. 
 */
export const generateTestContext = async (): Promise<TestContext> => {
    const environment = await getEnvVar<Environment>('TESTENV', "Environment: TESTENV not defined during the test execution.");
    const url = await getEnvVar<Url>('URL', "URL not found in the environment variables file. Refer folder: ./env");
    const landingPage = await getEnvVar<Url>('LANDING_PAGE', "LANDING_PAGE not found in the environment variables file. Refer folder: ./env");


    return {
        environment,
        url,
        landingPage
    }
}
