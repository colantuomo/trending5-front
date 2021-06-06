import Head from "next/head";
import Global from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <title>Trending5</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
