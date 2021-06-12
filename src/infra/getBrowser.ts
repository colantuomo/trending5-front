import chrome from "chrome-aws-lambda";
import puppeteer, { Page, Browser } from "puppeteer";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
};

async function getOptions() {
  const isDev = !process.env.AWS_REGION;
  const exePath = chromeExecPaths[process.platform];
  return isDev
    ? {
        args: [],
        headless: true,
        executablePath: exePath,
      }
    : {
        args: chrome.args,
        headless: chrome.headless,
        executablePath: await chrome.executablePath,
      };
}

let browser: Browser | undefined;

export async function getBrowser() {
  // const options = await getOptions();

  if (!browser) {
    browser = await puppeteer.launch({ headless: true });
  }
  return browser;
}

export async function newPage(): Promise<Page> {
  const browser = await getBrowser();
  return browser.newPage();
}
