import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import profile from "../public/profile.jpeg";
import Navbar from "../components/Navbar";
import Twitter from "../icons/twitter";
import LinkedIn from "../icons/linkedIn";
import Github from "../icons/github";
import MailTo from "../icons/mail";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nidhi Tandon</title>
        <meta name="description" content="Nidhi's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Image
          src={profile}
          alt="Picture of the author"
          width={300}
          height={300}
          objectFit={"cover"}
          style={{
            borderRadius: "50%",
          }}
        />
        <h1 className={styles.title}>Nidhi Tandon</h1>
        <p className={styles.description}>
          <br />
          Health enthusiast and wellness vocalist
          <br />
          Studying stoicism and spirituality
          <br />
          Loves music and plays guitar
          <br />
          Frontend Engineer by profession
        </p>
        <div className={styles.iconsContainer}>
          <a
            href="https://twitter.com/nidhitandon08"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com/in/nidhi-tandon-6ba79b78/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/nidhi-tandon"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="mailto:nidhitandon08@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailTo />
          </a>
        </div>
      </main>
    </div>
  );
}
