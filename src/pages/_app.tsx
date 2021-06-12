import Head from "next/head";
import Global from "../styles/Global";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trending5</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
