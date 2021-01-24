import fetchData from "../../components/fetchData/fetchData";
import Link from "next/link";
import Head from "next/head";
import styles from "./cuisines.module.css";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
function Cuisines(props) {
  let cuisines = props.cuisines;
  return (
    <>
      <Head>
        <title>Cuisines</title>
      </Head>
      <Header header={props.header} />
      <div className={styles["body-container"]}>
        <div className={styles["blog-container"]}>
          {cuisines.map((blog) => {
            return (
              <>
                <div
                  key={blog.uid}
                  className={styles["blog-card"]}
                  key={blog.uid}
                >
                  <div>
                    <Link href={`/cuisine/${blog.uid}`}>
                      <img
                        src={blog.food_image.url}
                        alt="BlogImage"
                        className={styles["food-image"]}
                      ></img>
                    </Link>

                    <div className={styles["blog-card-content"]}>
                      <div className={styles["food-name-overlay"]}>
                        <div className={styles["food-name"]}>
                          <h3>{blog.food_name}</h3>
                        </div>
                      </div>
                      <div className={styles["overlay"]}>
                        <div className={styles["food-title"]}>
                          {blog.food_title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Footer footer={props.footer} />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  let cuisines = await fetchData("foodblog_details").then(function success(
    data
  ) {
    return data;
  });
  let header = await fetchData("blog_header", "blt672beb94ff8b05e1");
  let footer = await fetchData("blog_footer", "bltd343f4a41ad09e0e");

  return {
    props: {
      cuisines: [...cuisines[0]],
      header: { ...header },
      footer: { ...footer },
    },
  };
};
export default Cuisines;
