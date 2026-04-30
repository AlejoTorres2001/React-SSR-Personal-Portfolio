import localFont from 'next/font/local'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/main.css'
import Script from 'next/script'

config.autoAddCss = false

const poppinsSemiBold = localFont({
  src: '../public/assets/fonts/Poppins-SemiBold.ttf',
  variable: '--font-poppins-semibold',
  weight: '600',
  display: 'swap'
})

const poppinsBold = localFont({
  src: '../public/assets/fonts/Poppins-Bold.ttf',
  variable: '--font-poppins-bold',
  weight: '700',
  display: 'swap'
})

const poppinsExtraBold = localFont({
  src: '../public/assets/fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins-extrabold',
  weight: '800',
  display: 'swap'
})

const poppinsLight = localFont({
  src: '../public/assets/fonts/Poppins-Light.ttf',
  variable: '--font-poppins-light',
  weight: '300',
  display: 'swap'
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz']
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata = {
  title: "Alejo's Portfolio",
  description: 'Alejo Torres Fullstack Developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSemiBold.variable} ${poppinsBold.variable} ${poppinsExtraBold.variable} ${poppinsLight.variable} ${fraunces.variable} ${jakarta.variable} font-jakarta`}
      >
        {children}
        <Script
          src="https://badgr.com/assets/widgets.bundle.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
