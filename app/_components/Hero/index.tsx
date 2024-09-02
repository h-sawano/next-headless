import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  title: String;
  sub: String;
}

export default function Hero({ title, sub }: Props){
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Image
          src="/img-mv.jpg"
          alt=""
          className={styles.bgimg}
          width={4000}
          height={1200}
        />
    </section>
  )
}