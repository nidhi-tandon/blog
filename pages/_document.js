import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
