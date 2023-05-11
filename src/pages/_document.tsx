import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap"
          />
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2633828768948445"
            async
            crossOrigin="anonymous"
          />
          <script
            async
            custom-element="amp-ad"
            src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2633828768948445"
            async
            crossOrigin="anonymous"
          />
        </body>
      </Html>
    );
  }
}
