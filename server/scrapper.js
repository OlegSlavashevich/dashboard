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

  await page.goto("https://dominos.by/user/order_history");

  await page.click(".custom-button--primary");

  await page.click(".custom-button");

  await page.evaluate(() => {
    const city = document.querySelector(
      ".orders__current-order-desktop-delivery-content div:nth-child(1) > select"
    );
    city.innerHTML = `<option selected>Минск</option>`;

    const street = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(1) > input"
    );
    street.value = "пр. Независимости";

    const house = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(2) > input"
    );
    house.value = "173";

    const apartment = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(3) > input"
    );
    apartment.value = "700";

    const floor = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(4) > input"
    );
    floor.value = "7";

    const entrance = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(5) > input"
    );
    entrance.value = "1";

    const doorCode = document.querySelector(
      "div.delivery-address__form-wrapper div:nth-child(6) > input"
    );
    doorCode.value = "---";

    const phone = document.querySelector(
      ".checkout__order-form-fields > div:nth-child(1) input"
    );
    phone.value = "+375331234567";

    const email = document.querySelector(
      ".checkout__order-form-fields > div:nth-child(2) input"
    );
    email.value = "test@mail.ru";

    const date = document.querySelector(
      ".checkout__order-form-fields > div:nth-child(3) input"
    );
    date.value = new Date().toUTCString();
  });

  const imageBuffer = await page.screenshot({
    type: "jpeg",
    quality: 100,
    fullPage: true,
  });

  await browser.close();

  return imageBuffer;
};

module.exports = { pizzaScrapper };
