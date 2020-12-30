import React from "react";
import styles from "../MainTitle/main-title.module.css";

interface Props {
  title: string;
  subtitle?: string;
}

const MainTitle = ({ title, subtitle }: Props) => {
  return (
    <section className={styles.container}>
      <h1 className={styles[`h1-${title.toLowerCase()}`]}>{title}</h1>
      <p className={styles.p}>{subtitle}</p>
    </section>
  );
};

export { MainTitle };
