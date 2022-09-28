import Navbar from "../../components/Navbar";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import HorizontalLine from "../../components/HorizontalLine";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className={styles.layout}>
        <div className={styles.link}>
          <Link href="/blogs/are-you-a-product-engineer">
            <div>
              <a>Are you a Product Engineer?</a>
              <p className={styles.subtext}>
                Find in-depth about what to expect when joining the role of a
                Product Engineer in Frontend domain
              </p>
            </div>
          </Link>

          <HorizontalLine width={500} className={styles.horizontalLine}/>

          <br />
          <p>More coming soon! Stay tuned :)</p>
        </div>
      </div>
    </>
  );
};
export default Blogs;
