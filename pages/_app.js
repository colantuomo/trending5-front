import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return;
  <>
    <Head>
      <title>Trending5</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
