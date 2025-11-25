const {test, expect, devices} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify(require("../testdata.json")));



test('Taking data from Test data', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator("//input[@id='email1']").fill(testData.username);
    await page.locator("//input[@id='password1']").fill(testData.password);
    await page.pause();


  
});
