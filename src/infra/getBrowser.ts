import os from "os";
import download from "download-chromium";
import puppeteer, { Page, Browser } from "puppeteer-core";

async function getOptions() {
  const execPath = await download({
    revision: 694644,
    installPath: `${os.tmpdir()}/.local-chromium`,
  });

  return {
    args: [],
    headless: true,
    executablePath: execPath,
  };
}

let browser: Browser | undefined;

export async function getBrowser() {
  const options = await getOptions();

  if (!browser) {
    browser = await puppeteer.launch(options);
  }
  return browser;
}

export async function newPage(): Promise<Page> {
  const browser = await getBrowser();
  return browser.newPage();
}
