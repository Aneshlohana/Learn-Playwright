const {test, expect} = require('@playwright/test')

test("Verify Application Title Using Keyboard", async ({page})=>{
})

test("Verify Application Title Using Loop", async ({page})=>{

  await page.goto("http://www.google.com")

  await page.locator("textarea[name='q']").type("Yotube Playwright Automation",{delay:100})

  await page.waitForSelector("//li[@role='presentation']")

  const elements=await page.$$("//li[@role='presentation']")

  for(let i=0;i<elements.length;i++)
  {

    const text= await elements[i].textContent()

    if(text.includes('playwright'))
    {
       await elements[i].click()
       break
    }

  }

})