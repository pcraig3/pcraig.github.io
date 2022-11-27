import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* tags in here appears after the tags in <HEAD> in Layout */}
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Gothic+A1:400,600&amp;display=fallback"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Gothic+A1:400,600&amp;display=fallback"
          />

          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
