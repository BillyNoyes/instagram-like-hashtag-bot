const puppeteer = require("puppeteer");

const BASE_URL = "https://instagram.com/";

const instagram = {
  browser: null,
  page: null,

  initialize: async () => {
    instagram.browser = await puppeteer.launch({
      headless: false,
    });

    instagram.page = await instagram.browser.newPage();
  },

  login: async (username, password) => {
    await instagram.page.goto(BASE_URL, { waitUntil: "networkidle2" });

    // Entering username and password
    await instagram.page.type('input[name="username"]', username, {
      delay: 50,
    });
    await instagram.page.type('input[name="password"]', password, {
      delay: 50,
    });

    // Clicking login button
    let loginButton = await instagram.page.$x(
      '//div[contains(text(), "Log In")]'
    );
    await loginButton[0].click();

    // Clicking Not Now button
    await instagram.page.waitFor(1000);
    loginButton = await instagram.page.$x('//div[contains(text(), "Not Now")]');
    await loginButton[0].click();
  },
};

module.exports = instagram;
