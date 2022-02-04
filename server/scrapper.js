const puppeteer = require("puppeteer");

const pizzaScrapper = async (pizza) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--disable-gpu", "--disable-extensions"],
  });

  const device_width = 1920;
  const device_height = 1080;

  const page = await browser.newPage();

  await page.setCacheEnabled(false);
  await page.setViewport({ width: device_width, height: device_height });
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
  );

  await page.goto("https://dominos.by/");

  await page.click(".modal__close");

  const els = await page.$$(".product-card__content");

  for await (el of els) {
    const pizzaName = await el.$eval(
      ".product-card__title",
      (i) => i.textContent
    );
    if (pizzaName === pizza) {
      const button = await el.$(".custom-button");
      await button.evaluate((butt) => butt.click());
    }
  }

  // await page.screenshot({
  //   path: "test.png",
  //   fullPage: true,
  // });

  await page.goto("https://dominos.by/user/order_history");

  await page.click(".custom-button--primary");

  // await page.screenshot({
  //   path: "test14.jpeg",
  //   fullPage: true,
  // });

  await page.click(".custom-button");

  const imageBuffer = await page.screenshot({
    type: "jpeg",
    quality: 100,
    fullPage: true,
  });

  await browser.close();

  return imageBuffer;
};

module.exports = { pizzaScrapper };
