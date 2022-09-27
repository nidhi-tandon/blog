import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Navbar;
