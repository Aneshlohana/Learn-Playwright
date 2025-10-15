const {test, expect} = require('@playwright/test');

test.use({ viewport: { width: 1480, height: 1000 } });

test('verify error message', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await page.getByPlaceholder("Username").fill("Admin", { delay: 100 });
    await page.locator('input[name="password"]').fill("admin12345", { delay: 1000 });
    await page.locator("//button[@type='submit']").click();

    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent();
    console.log('Error message:', errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy(); // partial match

    expect(errorMessage==="Invalid credentials").toBeTruthy(); // exact match



});