import Link from "next/link";
import styles from "./header.module.css";
import Head from "next/head";

function Header({ header }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        />
      </Head>
      <div className={styles["top-nav"]}>
        <div className={styles["logo-container"]}>
          <h3 className={styles["logo"]}>{header.blog_logo}</h3>
        </div>

        {header.navigation.nav_links.map((link, i) => {
          return (
            <div key={i}>
              <Link href={link.href} className={styles["link"]}>
                <a>{link.title} </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Header;
