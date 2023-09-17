import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { Header, Footer} from "../components"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <meta name="description" content="Mariano Lovo Portfolio" />
    <title>Mariano Lovo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="/Icon.svg" rel="icon"  />
  </Head>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></Script>
  <header className='site-header sticky-top'>
    <Header/>
  </header>
  <Component {...pageProps} /> 
  <footer className="py-3 my-4 container-xxl mb-0 pb-0">
    <Footer />
  </footer>
  </> 
  )
}
