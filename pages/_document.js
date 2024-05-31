
import Document, {Html, Head, Main, NextScript } from 'next/document'
 
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
 
  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/icon.jpg" type="image/x-icon"/>
            <link rel="stylesheet" href="/main.css"></link>
            <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}