const {test, expect, devices} = require('@playwright/test');

//  always go with label because values get changed , value , index


test("Select values from Dropdown", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("#state").selectOption({label:"Goa"}); // by label always go with label because values get changed
    // await page.waitForTimeout(3000);
    await page.locator("#state").selectOption({value:"Himachal Pradesh"});  // by value in this case is same but can be differrent 

    // await page.waitForTimeout(3000);

    await page.locator("#state").selectOption({index: 2}); // by index
    // await page.waitForTimeout(3000);

    // const DropdownValue = await page.locator("#state").textContent()
    // console.log(DropdownValue);

    // await expect(DropdownValue.includes("Kerala")).toBeTruthy();

    let state = await page.$('#state')
    let allElements = await state.$$('option')
    for(let i=0; i<allElements.length; i++){
        let element = allElements[i]
        let text = await element.textContent()
        console.log(text);
    }

    await page.locator("#hobbies").selectOption(['Playing','Reading']); // for multiple select option
    await page.waitForTimeout(3000);



})