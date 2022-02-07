import { TopicBarWrapper, TopicLink } from "./styles";

interface Props {
  topics: any[];
}

export function TopicsBar({ topics }: Props) {
  return (
    <TopicBarWrapper>
      {topics.map((topic, index) => (
        <TopicLink key={index}>{topic}</TopicLink>
      ))}
    </TopicBarWrapper>
  );
}
