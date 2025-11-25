const {test, expect, devices} = require('@playwright/test');


test('Open and switch between tabs', async ({ browser }) => {
  // Create a browser context
  const context = await browser.newContext();

  // Open first tab
  const page1 = await context.newPage();
  await page1.goto('https://google.com');

  // Open new tab
  const page2 = await context.newPage();
  await page2.goto('https://github.com');

  // Switch back to first tab
  await page1.bringToFront();
  await page1.fill('input[name="q"]', 'Playwright multiple tabs');

  // Switch back to second tab
  await page2.bringToFront();
  await expect(page2).toHaveURL('https://github.com');
});
