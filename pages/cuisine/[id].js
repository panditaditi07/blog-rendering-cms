import Link from "next/link";
import Head from "next/head";
import fetchData from "../../components/fetchData/fetchData";
import styles from "./cuisine.module.css";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

function Cuisine(props) {
  let cuisine = props.cuisine;

  return (
    <>
      <Head>
        <title>Cuisine</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        />
      </Head>
      ;
      <div className={styles["container"]}>
        <Header header={props.header} />
        <h1 className={styles["food-type"]}>{cuisine.food_type}</h1>
        <div className={styles["card"]}>
          <h3 className={styles["food-name"]}>{cuisine.food_name}</h3>
          <div className={styles["food-image-div"]}>
            <img
              className={styles["food-image"]}
              src={cuisine.food_image.url}
              alt=""
            />
          </div>
          <div className={styles["food-content-div"]}>
            <p className={styles["food-content"]}>{cuisine.food_content}</p>
          </div>
        </div>
        <Footer footer={props.footer} />
      </div>
    </>
  );
}

export const getStaticProps = async (context) => {
  let cuisine = await fetchData("foodblog_details", `${context.params.id}`);
  let header = await fetchData("blog_header", "blt672beb94ff8b05e1");
  let footer = await fetchData("blog_footer", "bltd343f4a41ad09e0e");
  return {
    props: {
      cuisine: { ...cuisine },
      header: { ...header },
      footer: { ...footer },
    },
  };
};

export const getStaticPaths = async () => {
  let Blogs = await fetchData("foodblog_details").then(function success(
    result
  ) {
    return result;
  });

  let paths = Blogs[0].map((blog) => {
    return {
      params: {
        id: blog.uid.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default Cuisine;
