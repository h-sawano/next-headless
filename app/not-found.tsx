import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページ位が見つかりません</dt>
        <dd className={styles.text}>あなたがアクセスしようとしたページは存在しません。</dd>
      </dl>
    </div>
  );
}
