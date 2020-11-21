const PercyScript = require('@percy/script');
const MAIN_URL = 'https://www.snstudio.pl;
const widths = { widths: [768, 992, 1200] };

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {

  await page.goto(MAIN_URL);
  await percySnapshot('Homepage');

  // Enter a new to-do.
  await page.type('.new-todo', 'A really important todo');
  await page.keyboard.press('Enter');
  await percySnapshot('TodoMVC with a new todo', widths);
});
