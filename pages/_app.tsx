import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Profile.css'
import '../styles/AboutMe.css'
import '../styles/Resume.css'
import '../styles/Badges.css'
import '../styles/Badge.css'
import '../styles/ContactMe.css'
import '../styles/Projects.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core' // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import LanguageContext from '../context/LanguageContextProvider'
config.autoAddCss = false

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <LanguageContext>
      <Component {...pageProps} />
    </LanguageContext>
  )
}

export default MyApp
