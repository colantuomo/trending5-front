import { InfoCardImage, InfoCardTexts, InfoCardWrapper } from "./styles";

interface Props {
  imageSrc: string;
  title?: string;
  description?: string;
}

export function InfoCard({ imageSrc, title, description }: Props) {
  return (
    <InfoCardWrapper>
      <InfoCardImage src={imageSrc} width={"100%"} height={150} />
      <InfoCardTexts>
        <h2>{title}</h2>
        <p>{description}</p>
      </InfoCardTexts>
    </InfoCardWrapper>
  );
}
