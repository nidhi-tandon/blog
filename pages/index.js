import Head from "next/head";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import Navbar from "../components/Navbar";
import Twitter from "../icons/twitter";
import LinkedIn from "../icons/linkedIn";
import Github from "../icons/github";
import MailTo from "../icons/mail";
import styled from "@emotion/styled";
import Link from "next/link";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const AuthorImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Title = styled.h1`
  line-height: 1.15;
  font-size: 2.5rem;
  color: #eeeeee;
  margin: 24px 0 0;
`;

const Description = styled.div`
  margin: 1rem 0 0;
  line-height: 1.5;
  font-size: 1.2rem;
  text-align: center;
  color: #eeeeee;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
`;

const SocialLink = styled(Link)`
  margin: 12px;

  svg {
    height: 24px;
    width: 24px;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Nidhi Tandon</title>
        <meta name="description" content="Nidhi's blog" />
        <link rel="icon" href="/favicon.ico" />
        {/*<link*/}
        {/*  rel="stylesheet"*/}
        {/*  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"*/}
        {/*/>*/}
      </Head>
      <Navbar />

      <Main>
        <AuthorImage
          src={profile}
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <Title>Nidhi Tandon</Title>
        <Description>
          <div>Health enthusiast and wellness vocalist</div>
          <div>Sometimes play guitar</div>
          <div>Love reading books</div>
          <br />
          <div>Frontend Engineer by profession</div>
        </Description>
        <IconContainer>
          <SocialLink
            href="https://twitter.com/nidhitandon08"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/nidhi-tandon-6ba79b78/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </SocialLink>
          <SocialLink
            href="mailto:nidhitandon08@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailTo />
          </SocialLink>
          <SocialLink
            href="https://github.com/nidhi-tandon"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </SocialLink>
        </IconContainer>
      </Main>
    </>
  );
}
