import Navbar from "../../components/Navbar";
import styles from "../../styles/blog.module.css";
import AreYouAProductEngineerMdx from "../../mdx/are-you-a-product-engineer.mdx";
import React from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AreYouAProductEngineer = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className={styles.content}>
          <AreYouAProductEngineerMdx />
        </div>
      </Layout>
    </>
  );
};

export default AreYouAProductEngineer;
