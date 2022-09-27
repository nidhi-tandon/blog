import Navbar from "../../../components/Navbar";
import styles from "../../../styles/Blog.module.css";
import AreYouAProductEngineerMdx from "./are-you-a-product-engineer.mdx";

const AreYouAProductEngineer = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <div className={styles.content}>
          <AreYouAProductEngineerMdx />
        </div>
      </div>
    </>
  );
};

export default AreYouAProductEngineer;
