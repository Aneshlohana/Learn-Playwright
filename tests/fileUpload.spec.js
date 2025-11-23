const{test,expect} = require('@playwright/test')

test("File Upload", async ({ page }) => { 
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator('#file-upload').setInputFiles("C:/Users/Anesh Kumar/OneDrive/Desktop/nishaa.jpg");

    await page.locator('#file-submit').click();

    expect(page.locator('h3')).toHaveText("File Uploaded!");

    // await page



  
}) 