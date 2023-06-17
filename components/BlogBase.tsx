import Navbar from "./Navbar";
import styles from "../styles/Blog.module.css";
import React, { ReactNode } from "react";
import styled from "@emotion/styled";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface BlogBaseProps {
  children: ReactNode;
}

const BlogBase = ({ children }: BlogBaseProps) => {
  return (
    <>
      <Navbar />
      <Layout>
        <div className={styles.content}>{children}</div>
      </Layout>
    </>
  );
};

export default BlogBase;
