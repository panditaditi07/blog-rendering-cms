import Link from "next/link";
import styles from "./footer.module.css";
import Head from "next/head";
function Footer({ footer }) {
  return (
    <>
      <Head>
        <title>Footer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        />
      </Head>
      <div className={styles["footer"]}>
        <p className={styles["footer-heading"]}>
          {footer.copyright_info.company_name}
        </p>
        {/* <p>{footer.footer_heading}</p> */}
        <p className={styles["footer-heading"]}>
          {footer.copyright_info.copyright}
        </p>
      </div>
    </>
  );
}

export default Footer;
