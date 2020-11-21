const PercyScript = require('@percy/script');
const MAIN_URL = 'https://www.snstudio.pl/';
var myMap = new Map();
myMap.set("Homepage", MAIN_URL);
myMap.set("Sklep", MAIN_URL + "sklep");
myMap.set("Promocje", MAIN_URL + "promocje");
myMap.set("Produkt", MAIN_URL + "sklep/lakiery-hybrydowe/produkt/protein-base-gold-edition-7ml/category_pathway-92");
// A script to navigate our app and take snapshots with Percy.
myMap.forEach(function(url,key){
  PercyScript.run(async (page, percySnapshot) => {
 
    await page.goto(url);
    page.evaluate(_ => {
      window.scrollBy(0, window.innerHeight);
    });
    page.evaluate(_ => {
      window.scrollBy(0, 0);
    });
    await page.waitFor(1000)
    await percySnapshot(key);
  });
  
});
