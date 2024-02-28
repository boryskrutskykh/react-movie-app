import { test, expect } from '@playwright/test';


test.describe("Search feature", () => {
    test("Search return expected result", async ({page}) => {
        await page.goto('/')
        await page.pause()
    })
})