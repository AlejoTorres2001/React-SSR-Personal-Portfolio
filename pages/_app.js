import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../styles/footer.css'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <title>My Portfolio</title>
  </Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
