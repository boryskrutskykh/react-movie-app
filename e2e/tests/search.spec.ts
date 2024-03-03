import {test, expect} from '@playwright/test';


test.describe("Search feature", () => {
    test("Search return expected result", async ({page}) => {
        await page.goto('/')

        await page.getByPlaceholder('What do you want to watch?').click();
        await page.getByPlaceholder('What do you want to watch?').fill('5 element');
        await page.getByRole('button', {name: 'SEARCH'}).click();

        // Increase counter
        await page.getByRole('button', {name: '+'}).click();
        await page.getByRole('button', {name: '+'}).click();
        await page.getByRole('button', {name: '+'}).click();

        await expect(page.getByText('3')).toBeVisible();
    })
})