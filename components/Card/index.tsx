import React from "react";
import styles from "../Card/card.module.css";

interface Props {
  img: string;
  title: string;
  link: string;
  description?: string;
}

const Card = ({ title, img, link, description }: Props) => {
  const altName = (title: string) => title.slice(0, 30);
  const onNavigate = () => {
    window.open(link, "__blank");
  };
  return (
    <div className={styles.card} onClick={onNavigate}>
      <img className={styles.img} src={img} alt={altName(title)} />
      <div className={styles.bottom}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export { Card };
