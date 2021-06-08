import { connect } from "mongoose";
import { GetStaticProps } from "next";

import { TopicsModel } from "./api/model";
import { MainTitle, Card } from "../components";
import { CardList, HomeWrapper } from "../styles/pages/Home";

export default function Home({ topics }: Props) {
  return (
    <HomeWrapper>
      {topics?.map((topic) => (
        <div key={topic._id}>
          <MainTitle title={topic.crawler} subtitle={topic.topic} />
          <CardList>
            {topic?.items.map((item) => (
              <Card
                link={item.link}
                key={item._id}
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
  await connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected");
  const ONE_HOUR = 60 * 60;
  const topics = JSON.parse(
    JSON.stringify(await TopicsModel.find())
  ) as Topic[];
  return {
    props: {
      topics,
    },
    revalidate: ONE_HOUR,
  };
};

interface Props {
  topics: Topic[];
}

interface Items {
  _id: string;
  title: string;
  img: string;
  link: string;
  description: string;
}

interface Topic {
  _id: string;
  topic: string;
  crawler: string;
  date: Date;
  items: Items[];
}
