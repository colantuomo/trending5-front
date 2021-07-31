import { GetStaticProps } from "next";

import { MainTitle, Card } from "../components";
import { CardList, HomeWrapper } from "../styles/pages/Home";
import { getCrawlersTopics, Topic } from "../infra/crawlers";

export default function Home({ topics }: Props) {
  return (
    <HomeWrapper>
      {topics?.map((topic, index) => (
        <div key={index}>
          <MainTitle title={topic.crawler} subtitle={topic.topic} />
          <CardList>
            {topic?.items.map((item, itemIndex) => (
              <Card
                link={item.link}
                key={itemIndex}
                title={item.title}
                img={item.img}
                description={item.description}
              />
            ))}
          </CardList>
        </div>
      ))}
    </HomeWrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const ONE_MINUTE = 60;
  const topics = await getCrawlersTopics();
  return {
    props: {
      topics,
    },
    revalidate: ONE_MINUTE * 30,
  };
};

interface Props {
  topics: Topic[];
}
