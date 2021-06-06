import Head from "next/head";
import Global from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <title>Trending5</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
