import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import { withData } from '../lib/apollo'

class MyApp extends App {
  render() {
    // props は App の中に書かれている
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          />
        </Head>
        <Layout>
          {/* pages内のコンポーネントをすべて表示する */}
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withData(MyApp)
