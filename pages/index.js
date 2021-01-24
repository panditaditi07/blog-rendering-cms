import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        />
      </Head>
      <div className={styles["banner"]}>
        <h1 className={styles["heading"]}>Welcome to Yummy and Healthy</h1>
        <img
          src="https://img.cloudygif.com/full/4f3529ba4a2e93c6.gif"
          width="200"
          height="200"
        />
        <div
          className={styles["button-container"]}
          title="Click here for cuisines"
        >
          <Link href="/cuisines">
            <p className={styles["button"]}> Cuisines</p>
          </Link>
        </div>
      </div>
    </>
  );
}
