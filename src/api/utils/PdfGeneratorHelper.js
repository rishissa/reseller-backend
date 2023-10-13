const puppeteer = require("puppeteer");
const fs = require("fs");

module.exports = {
  pdf_generator: async (url) => {
    let browser;
    if (browser == null) {
      browser = await puppeteer.launch({
        headless: "new",
        // userDataDir: "../../../chromium_instances",
        args: [
          "--disable-features=IsolateOrigins",
          "--disable-site-isolation-trials",
          "--autoplay-policy=user-gesture-required",
          "--disable-background-networking",
          "--disable-background-timer-throttling",
          "--disable-backgrounding-occluded-windows",
          "--disable-breakpad",
          "--disable-client-side-phishing-detection",
          "--disable-component-update",
          "--disable-default-apps",
          "--disable-dev-shm-usage",
          "--disable-domain-reliability",
          "--disable-extensions",
          "--disable-features=AudioServiceOutOfProcess",
          "--disable-hang-monitor",
          "--disable-ipc-flooding-protection",
          "--disable-notifications",
          "--disable-offer-store-unmasked-wallet-cards",
          "--disable-popup-blocking",
          "--disable-print-preview",
          "--disable-prompt-on-repost",
          "--disable-renderer-backgrounding",
          "--disable-setuid-sandbox",
          "--disable-speech-api",
          "--disable-sync",
          "--hide-scrollbars",
          "--ignore-gpu-blacklist",
          "--metrics-recording-only",
          "--mute-audio",
          // "--no-default-browser-check",
          "--no-first-run",
          "--no-pings",
          "--no-sandbox",
          "--no-zygote",
          "--password-store=basic",
          "--use-gl=swiftshader",
          "--use-mock-keychain",
        ],
      });
    }

    // Create a new page
    console.log("BROWSER STARTED: " + new Date().getTime());

    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: "networkidle0",
    });
    console.log("PAGE OPENED: " + new Date().getTime());
    await page.emulateMediaType("screen");

    await page.waitForSelector("#root", { visible: true });

    console.log("PDF STARTED: " + new Date().getTime());
    // let date = `cat_${new Date().getTime()}`;

    return page;
  },
};
