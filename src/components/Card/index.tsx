import { CardWrapper } from "./styles";
interface Props {
  img: string;
  title: string;
  link: string;
  description?: string;
}

export const Card = ({ title, img, link, description }: Props) => {
  return (
    <CardWrapper href={link} target="_blank">
      <img src={img} alt={title.slice(0, 30)} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};
