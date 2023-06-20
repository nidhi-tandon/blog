import Navbar from "../../components/Navbar";
import Link from "next/link";
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

const HorizontalLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 1px;
  width: 100%;
`;

const Blogs = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <LinkContainer>
          <Link href="/blogs/promise-chaining">
            <>
              <h2>Promise Chaining</h2>
              <Subtext>
                Heck! How can I solve this?
                <div>
                  <code>sequence([asyncFn1, asyncFn2, asyncFn3])</code>
                </div>
              </Subtext>
            </>
          </Link>
          <HorizontalLine />

          <Spacing>
            <Link href="/blogs/are-you-a-product-engineer">
              <>
                <h2>Are you a Product Engineer?</h2>
                <Subtext>
                  Find in-depth about what to expect when joining the role of a
                  Product Engineer in Frontend domain
                </Subtext>
              </>
            </Link>
            <HorizontalLine />
          </Spacing>
          <Spacing>More coming soon! Stay tuned ✏️</Spacing>
        </LinkContainer>
      </Layout>
    </>
  );
};
export default Blogs;
