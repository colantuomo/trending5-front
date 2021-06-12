import playwright, { Browser, Page } from "playwright";
import debug from "debug";

const log = debug("crawler");

let browser: Browser | undefined;

export async function getBrowser() {
  if (!browser || !browser.isConnected()) {
    log("Novo browser");
    browser = await playwright.chromium.launch({ headless: true });
  }
  return browser;
}

export async function newPage(): Promise<Page> {
  const browser = await getBrowser();
  log("Nova página");
  return browser.newPage();
}
