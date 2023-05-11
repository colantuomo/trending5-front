import { GetStaticProps } from "next";

import { MainTitle, Card } from "../components";
import { CardList, HomeWrapper } from "../styles/pages/Home";
import { getCrawlersTopics, Topic } from "../infra/crawlers";

export default function Home({ topics, updatedAt }: Props) {
  console.log({ updatedAt });
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
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2633828768948445"
            data-ad-slot="2250421838"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      ))}
    </HomeWrapper>
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
