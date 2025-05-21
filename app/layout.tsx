import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import '../styles/main.css'
import Script from 'next/script'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {children}
        <Script
          src="https://badgr.com/assets/widgets.bundle.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
