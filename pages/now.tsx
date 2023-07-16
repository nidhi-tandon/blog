import React, { ReactElement } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Blog.module.css";
import NowMdx from "../mdx/now.mdx";

const Now = (): ReactElement => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <NowMdx />
      </div>
    </>
  );
};

export default Now;
