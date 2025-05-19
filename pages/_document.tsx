import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
  return (
    <Html lang='en'>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <title>Alejo's Portfolio</title>
      <Head>
      <meta name="description" content="Alejo Torres Fullstack Developer"></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Script id="my-inline-script" strategy="afterInteractive">
        {`
        
     document.addEventListener('touchstart', ()=>{}, {passive: true})
        
        `}
      </Script>
    </Html>
  )
}
