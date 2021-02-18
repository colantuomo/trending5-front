import React from "react";
import useSwr from "swr";

import styles from "../styles/Home.module.css";
import { MainTitle, Card } from "../components";

const index = () => {
  const fetcher = async (url: string) => {
    return await (await fetch(url)).json();
  };
  const { data, error } = useSwr("/api/crawler", fetcher);
  console.log(data);
  // fetch(`${window.location.href}`)

  return (
    <section className={styles.container}>
      {data?.map((x) => (
        <div key={x._id} className={styles.topics}>
          <MainTitle title={x.crawler} subtitle={x.topic} />
          <div className={styles.cardlist}>
            {(x.items as []).map((item: any) => (
              <Card
                link={item.link}
                key={item._id}
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
