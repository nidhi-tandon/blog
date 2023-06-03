import Navbar from "../../components/Navbar";
import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import HorizontalLine from "../../components/HorizontalLine";
import styled from "@emotion/styled";

const Spacing = styled.div`
  margin-top: 48px;
`;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LinkContainer = styled.div`
  max-width: 500px;
  margin: 48px auto 32px auto;
  cursor: pointer;
`;

const Subtext = styled.p`
  font-size: 16px;
  color: #d1d1d1;
`;

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <LinkContainer>
          <Link href="/blogs/are-you-a-product-engineer">
            <>
              <h2>Are you a Product Engineer?</h2>
              <Subtext>
                Find in-depth about what to expect when joining the role of a
                Product Engineer in Frontend domain
              </Subtext>
            </>
          </Link>
          <HorizontalLine className={styles.horizontalLine} />

          <Spacing>
            <p>More coming soon! Stay tuned :)</p>
          </Spacing>
        </LinkContainer>
      </Layout>
    </>
  );
};
export default Blogs;
