import playwright, { Browser, Page } from "playwright";

let browser: Browser | undefined;

export async function getBrowser() {
  if (!browser) {
    browser = await playwright.chromium.launch({ headless: true });
  }
  return browser;
}

export async function newPage(): Promise<Page> {
  const browser = await getBrowser();
  return browser.newPage();
}
