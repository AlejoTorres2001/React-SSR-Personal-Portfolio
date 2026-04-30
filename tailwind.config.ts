import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: 'var(--light-blue)',
        seaGreen: 'var(--sea-green)',
        seaGreenDark: 'var(--sea-green-dark)',
        seaGreenExtraDark: 'var(--sea-green-extra-dark)',
        orange: 'var(--orange)',
        darkOrange: 'var(--dark-orange)',
        uiBlack: 'var(--black)',
        uiWhite: 'var(--white)'
      },
      boxShadow: {
        seaGreen: '0 0 20px var(--sea-green-shadow)',
        orange: '0 0 30px var(--orange-shadow)',
        lightBlue: '0 0 30px var(--light-blue-shadow)'
      },
      fontFamily: {
        'poppins-semibold': ['var(--font-poppins-semibold)', 'sans-serif'],
        'poppins-bold': ['var(--font-poppins-bold)', 'sans-serif'],
        'poppins-extrabold': ['var(--font-poppins-extrabold)', 'sans-serif'],
        'poppins-light': ['var(--font-poppins-light)', 'sans-serif']
      }
    }
  },
  plugins: []
}

export default config
