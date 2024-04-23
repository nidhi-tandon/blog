import Navbar from "../../components/Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { ReactElement } from "react";
import Tag from "../../components/Tag";

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

const Date = styled.div`
  font-size: 14px;
  color: #9c9c9c;
  margin-bottom: 8px;
`;

const HorizontalLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 1px;
  width: 100%;
`;

const Blogs = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Layout>
        <LinkContainer>
            <Link href="/blogs/living-cylically">
              <>
                <h2>How to live cyclically?</h2>
                {/*<Subtext>*/}
                {/*  Find in-depth about what to expect when joining the role of a*/}
                {/*  Product Engineer in Frontend domain*/}
                {/*</Subtext>*/}
                <Tag text="#life" type="life"/>
                <Date>April 2024</Date>
              </>
            </Link>
            <HorizontalLine />

        <Spacing>
          <Link href="/blogs/promise-chaining">
            <>
              <h2>Promise Chaining</h2>
              <Subtext>
                Heck! How can I solve this?
                <div>
                  <code>sequence([asyncFn1, asyncFn2, asyncFn3])</code>
                </div>
              </Subtext>
              <Tag text="#tech" type="tech"/>
              <Date>September 2023</Date>
            </>
          </Link>
        </Spacing>
          <HorizontalLine />

          <Spacing>
            <Link href="/blogs/are-you-a-product-engineer">
              <>
                <h2>Are you a Product Engineer?</h2>
                <Subtext>
                  Find in-depth about what to expect when joining the role of a
                  Product Engineer in Frontend domain
                </Subtext>
                <Tag text="#tech" type="tech"/>
                <Date>September 2022</Date>
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
