import React from "react";
import styles from "../styles/Home.module.css";
import { MainTitle, Card } from "../components";

import { items } from "./fake-data";
import FAKEDATA from "../fake-data.json";

const FAKE_DATA = {
  topic: "Economy",
  subtitle: "",
  items,
};
const index = () => {
  return (
    <section className={styles.container}>
      {FAKEDATA.map((x) => (
        <div className={styles.topics}>
          <MainTitle title={x.crawler} subtitle={x.topic} />
          <div className={styles.cardlist}>
            {(x.items as []).map((item: any) => (
              <Card
                link={item.link}
                key={item.id}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default index;
