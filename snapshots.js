const PercyScript = require('@percy/script');
const MAIN_URL = 'https://www.snstudio.pl';


// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {

  await page.goto(MAIN_URL);
  await percySnapshot('Homepage');
});
