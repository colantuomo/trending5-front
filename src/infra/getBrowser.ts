import playwright, { Browser, Page } from "playwright";
import debug from "debug";

const log = debug("crawler");

let browser: Browser | undefined;

export async function getBrowser() {
  if (!browser || !browser.isConnected()) {
    log("Novo browser");
    const executablePath =
      "node_modules/ms-playwright/chromium-888113/chrome-linux/chrome";
    browser = await playwright.chromium.launch({
      headless: true,
      executablePath,
    });
  }
  return browser;
}

export async function newPage(): Promise<Page> {
  const browser = await getBrowser();
  log("Nova página");
  return browser.newPage();
}
