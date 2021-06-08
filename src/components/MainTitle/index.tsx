import { MainTitleWrapper } from "./styles";

interface Props {
  title: string;
  subtitle?: string;
}

export const MainTitle = ({ title, subtitle }: Props) => {
  return (
    <MainTitleWrapper>
      <h1 className={`h1-${title.toLowerCase()}`}>{title}</h1>
      <p>{subtitle}</p>
    </MainTitleWrapper>
  );
};
