import axios from "axios";
import cheerio from "cheerio";
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

async function g1Economy(): Promise<Topic> {
  return axios.get("https://g1.globo.com/economia").then(({ data: html }) => {
    const $ = cheerio.load(html);
    const items = [];
    const articles = $(".feed-post.bstn-item-shape.type-materia");
    articles.each((_, article) => {
      const querySelector = cheerio.load(article);
      items.push({
        title: querySelector("a").text(),
        link: querySelector("a").attr("href"),
        img: querySelector("img").attr("src") || "",
        description: querySelector(".feed-post-body-resumo").text(),
      });
    });
    const firstFiveWithAllProperties = items
      .filter((item) => item.img && item.description && item.title)
      .slice(0, 5);

    return {
      crawler: "G1",
      topic: "economy",
      items: firstFiveWithAllProperties,
    };
  });
}

async function githubTrendings(): Promise<Topic<GithubTrending>> {
  return axios.get("https://github.com/trending").then(({ data: html }) => {
    const $ = cheerio.load(html);
    const items = [];
    const links = $(".Box-row").slice(0, 5);
    links.each((_, link) => {
      const querySelector = cheerio.load(link);
      const title = querySelector(".lh-condensed a").attr("href").substr(1);
      items.push({
        title: title,
        description: querySelector("p").text().trim(),
        language: querySelector("[itemprop=programmingLanguage]").text(),
        stars: Number(
          querySelector("a.Link--muted:first-of-type")
            .text()
            .trim()
            .replace(",", ".")
        ),
        img: `https://github.com/${title.split("/")[0]}.png`,
        link: `https://github.com/${title}`,
      });
    });
    return {
      crawler: "Github",
      topic: "trending",
      items: items,
    };
  });
}

async function youtubeTrendings(): Promise<Topic> {
  return axios
    .get("https://www.youtube.com/feed/trending?persist_gl=1&gl=BR")
    .then(({ data: html }) => {
      const $ = cheerio.load(html);
      const items = [];
      $("script").each((_, script) => {
        const $script = cheerio.load(script);
        const scriptHtml = $script.html();
        const variable = "var ytInitialData = ";
        if (scriptHtml.includes(variable)) {
          const indexStart = scriptHtml.indexOf(variable) + variable.length;
          const indexEnd = scriptHtml.indexOf(";</script>", indexStart);
          const ytInitialData = JSON.parse(
            scriptHtml.substr(indexStart, indexEnd - indexStart)
          );
          const contents =
            ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0]
              .tabRenderer.content.sectionListRenderer.contents;
          const part1 =
            contents[0].itemSectionRenderer.contents[0].shelfRenderer.content
              .expandedShelfContentsRenderer.items;
          const part2 = (contents[2] ?? contents[1])?.itemSectionRenderer
            .contents[0].shelfRenderer.content.expandedShelfContentsRenderer
            .items;
          const firstFive = part1
            .concat(part2)
            .slice(0, 5)
            .map((item: any) => item.videoRenderer);
          const youtubeBaseURL = "https://www.youtube.com";
          firstFive.forEach((item: any) => {
            items.push({
              title: item.title.runs[0].text,
              link:
                youtubeBaseURL +
                item.navigationEndpoint.commandMetadata.webCommandMetadata.url,
              img: item.thumbnail.thumbnails[2].url,
              duration: item.lengthText.simpleText,
              channelName: item.longBylineText.runs[0].text,
              channelLink:
                youtubeBaseURL +
                item.longBylineText.runs[0].navigationEndpoint.commandMetadata
                  .webCommandMetadata.url,
              description: item.descriptionSnippet?.runs[0].text ?? "",
            });
          });
        }
      });
      return {
        crawler: "Youtube",
        topic: "trending",
        items: items,
      };
    });
}

export async function getCrawlersTopics() {
  const responses = await Promise.allSettled([
    githubTrendings(),
    youtubeTrendings(),
    g1Economy(),
  ]);
  return responses.reduce((acc, response) => {
    if (response.status === "fulfilled") {
      return [...acc, response.value];
    }
    return acc;
  }, []);
}
