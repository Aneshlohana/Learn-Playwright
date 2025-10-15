const{test,expect} = require('@playwright/test')

test("Login Test", async ({ page }) => { 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin",{ delay: 100 });
    await page.locator('input[name="password"]').fill("admin123", { delay: 1000 });
    await page.locator("//button[@type='submit']").click();

    
    await page.waitForTimeout(5000);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.getByAltText("profile picture").first().click();
     
    await page.getByText("Logout").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);


  
})