import { GetStaticProps } from "next";

import { Header, TopicsBar, InfoCard } from "../components";
import { HomeWrapper } from "../styles/pages/Home";
import { getCrawlersTopics, Topic } from "../infra/crawlers";

export default function Home({ topics, updatedAt }: Props) {
  console.log({ updatedAt });
  // TODO: Add a specific page for every crawler
  return (
    <>
      <Header />
      <TopicsBar topics={topics.map(({ crawler }) => crawler)} />
      <HomeWrapper>
        {topics.map(({ topic, items }, index) =>
          items.map(({ title, description, link, img }) => (
            <InfoCard imageSrc={img} title={title} description={description} />
          ))
        )}
      </HomeWrapper>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const ONE_MINUTE = 60;
  const ONE_HOUR = ONE_MINUTE * 60;
  const topics = await getCrawlersTopics();
  return {
    props: {
      topics,
      updatedAt: new Date().toJSON(),
    },
    revalidate: ONE_HOUR * 3,
  };
};

interface Props {
  topics: Topic[];
  updatedAt: string;
}
