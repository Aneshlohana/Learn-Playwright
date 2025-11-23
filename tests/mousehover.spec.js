const{test,expect} = require('@playwright/test')

test("Valid Login", async ({ page }) => { 
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").fill("admin@gmail.com",{ delay: 100 });
    await page.getByPlaceholder("Enter Password").fill("admin123",{ delay: 100 });
    await page.getByRole("button",{ name: "Sign in " }).click();
    await page.locator("//span[text()='Manage']").hover();

    // await page



  
})