import React from "react";
import styles from "../Card/card.module.css";

interface Props {
  img: string;
  title: string;
  link: string;
}

const Card = ({ title, img, link }: Props) => {
  const altName = (title: string) => title.slice(0, 30);
  const onNavigate = () => {
    window.open(link, "__blank");
  };
  return (
    <div className={styles.card} onClick={onNavigate}>
      <img className={styles.img} src={img} alt={altName(title)} />
      <div className={styles.bottom}>
        <div className={styles.title}>{title}.</div>
      </div>
    </div>
  );
};

export { Card };
