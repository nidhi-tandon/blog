import React, { ReactElement } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/blog.module.css";
import NowMdx from "../mdx/now.mdx";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Now = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className={styles.content}>
          <NowMdx />
        </div>
      </Layout>
    </>
  );
};

export default Now;
