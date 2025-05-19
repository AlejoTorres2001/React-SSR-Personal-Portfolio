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
import { config } from '@fortawesome/fontawesome-svg-core'
import LanguageContext from '../context/LanguageContextProvider'
import { Inter } from 'next/font/google'

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false

// Initialize fonts
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <LanguageContext>
        <Component {...pageProps} />
      </LanguageContext>
    </main>
  )
}

export default MyApp