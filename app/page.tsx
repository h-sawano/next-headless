import Image from "next/image";
import styles from "./page.module.css";

import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";

import { News } from "@/app/_libs/microcms";

const data:{contents:News[]} = {
  contents:[
    {
      id: "1",
      title: "オフィスを移転しました",
      category:{
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "2",
      title: "オフィスを移転するかも",
      category:{
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "3",
      title: "オフィスを移転する予定",
      category:{
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19"
    },
  ]
}
const sliceData = data.contents.slice(0,2);

export default function Home() {
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです</p>
        </div>
        <Image
              src="/img-mv.jpg"
              alt=""
              className={styles.bgimg}
              width={4000}
              height={1200}
              priority
            />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
