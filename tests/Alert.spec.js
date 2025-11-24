const {test, expect} = require('@playwright/test')


test("Verify Alert ", async ({page})=>{

  await page.goto("http://the-internet.herokuapp.com/javascript_alerts")


  page.on('dialog', async (d)=> {

    expect(d.type()).toContain('alert')
    expect(d.message()).toContain('I am a JS Alert')
    await d.accept();

  })

  await page.locator("//button[text()='Click for JS Alert']").click()



})



test("Verify Confrimation", async ({page})=>{

  await page.goto("http://the-internet.herokuapp.com/javascript_alerts")


  page.on('dialog', async (dialogueWindow)=> {

    expect(dialogueWindow.type()).toContain('confirm')
    expect(dialogueWindow.message()).toContain('I am a JS Confirm')
    await dialogueWindow.dismiss();

  })

  await page.locator("//button[text()='Click for JS Confirm']").click()



})

test.only("Verify Prompt", async ({page})=>{

  await page.goto("http://the-internet.herokuapp.com/javascript_alerts")


  page.on('dialog', async (dialogueWindows)=> {

    expect(dialogueWindows.type()).toContain('prompt')
    expect(dialogueWindows.message()).toContain('I am a JS prompt')
    await dialogueWindows.accept('Anesh');

  })

  await page.locator("//button[text()='Click for JS Prompt']").click()
  await page.waitForTimeout(3000);



})