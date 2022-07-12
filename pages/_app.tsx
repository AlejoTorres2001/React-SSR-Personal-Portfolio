import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Profile.css'
import '../styles/AboutMe.css'
import '../styles/Resume.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
