import { getBrowser, newPage } from "./getBrowser";
import debug from "debug";

const log = debug("crawler");
interface DefaultData {
  title: string;
  description?: string;
  link: string;
  img: string;
}

interface GithubTrending extends DefaultData {
  language: string;
  stars: string;
}

export interface Topic<T = DefaultData> {
  crawler: string;
  topic: string;
  items: T[];
}

async function g1Economy() {
  const page = await newPage();
  await page.goto("https://g1.globo.com/economia/");

  return {
    crawler: "G1",
    topic: "economy",
    items: await page.$$eval(
      ".feed-post.bstn-item-shape.type-materia",
      (posts) =>
        posts.slice(0, 5).map((post) => ({
          image: post.querySelector("img").src,
          title: post.querySelector("a").innerText,
          link: post.querySelector("a").href,
          description: post.querySelector(".feed-post-body-resumo").textContent,
        }))
    ),
  };
}

async function githubTrendings(): Promise<Topic<GithubTrending>> {
  const page = await newPage();
  await page.goto("https://github.com/trending");

  const repoNames = await page.$$eval(".Box-row .lh-condensed a", (el) =>
    el.map((link) => link.getAttribute("href")).slice(0, 5)
  );
  const details = await page.$$eval(".Box-row p", (el) =>
    el.map((p) => p.textContent.trim())
  );
  await page.waitForSelector("[itemprop=programmingLanguage]");
  const languages = await page.$$eval(
    ".text-gray .d-inline-block [itemprop=programmingLanguage]",
    (el) => el.map((e) => e.textContent)
  );
  const stars = await page.$$eval(".text-gray .muted-link", (el) =>
    el.map((e) => e.textContent.trim())
  );
  const repos = repoNames.map((title, idx) => {
    const description = details[idx];
    const language = languages[idx] ?? "";
    const star = stars[idx] ?? "";
    // const img =
    //   "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    const img = `https://github.com/${title.split("/")[1]}.png`;
    const link = `https://github.com/${title}`;
    return { title, description, language, stars: star, img, link };
  });
  return {
    crawler: "Github",
    topic: "trending",
    items: repos,
  };
}

async function youtubeTrendings(): Promise<Topic> {
  const page = await newPage();
  await page.goto("https://www.youtube.com/feed/trending?persist_gl=1&gl=BR");
  // await page.goto("https://www.youtube.com/feed/trending?persist_gl=1&gl=US");
  const trendingVideos = await page.$$eval(
    ".style-scope .ytd-expanded-shelf-contents-renderer .text-wrapper #title-wrapper a",
    (el) =>
      el
        .map((x) => {
          const YT_BASE = "https://www.youtube.com";
          return {
            title: x.textContent.trim(),
            link: `${YT_BASE}${x.getAttribute("href")}`,
          };
        })
        .slice(0, 5)
  );
  const imgs = await page.$$eval(
    ".style-scope .ytd-video-renderer .ytd-thumbnail img",
    (el) => el.map((x) => x.getAttribute("src")).slice(0, 5)
  );
  const items = trendingVideos.map((item, idx) => {
    const img = imgs[idx];
    return { ...item, img };
  });
  return {
    crawler: "Youtube",
    topic: "trending",
    items: items,
  };
}

export async function getCrawlersTopics() {
  log("Rodando crawlers");
  const browser = await getBrowser();
  const response = await Promise.all([
    githubTrendings(),
    youtubeTrendings(),
    g1Economy(),
  ]);
  await browser.close();
  return response;
}
