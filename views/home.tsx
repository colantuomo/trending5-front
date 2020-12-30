import React from "react";
import styles from "../styles/Home.module.css";
import { MainTitle, Card } from "../components";

import { items } from "./fake-data";

const FAKE_DATA = {
  topic: "Economy",
  subtitle: "",
  items,
};
const index = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topics}>
        <MainTitle title="Economy" />
        <div className={styles.cardlist}>
          {FAKE_DATA.items.map((item) => (
            <Card
              link={item.link}
              key={item.id}
              title={item.title}
              img={item.link}
            />
          ))}
        </div>
      </div>
      <div className={styles.topics}>
        <MainTitle title="Youtube" subtitle={FAKE_DATA.subtitle} />
        <div className={styles.cardlist}>
          {FAKE_DATA.items.map((item) => (
            <Card
              link={item.link}
              key={item.id}
              title={item.title}
              img={item.link}
            />
          ))}
        </div>
      </div>
      <div className={styles.topics}>
        <MainTitle title="Tech" subtitle={FAKE_DATA.subtitle} />
        <div className={styles.cardlist}>
          {FAKE_DATA.items.map((item) => (
            <Card
              link={item.link}
              key={item.id}
              title={item.title}
              img={item.link}
            />
          ))}
        </div>
      </div>
      <div className={styles.topics}>
        <MainTitle title="Development" subtitle={FAKE_DATA.subtitle} />
        <div className={styles.cardlist}>
          {FAKE_DATA.items.map((item) => (
            <Card
              link={item.link}
              key={item.id}
              title={item.title}
              img={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
