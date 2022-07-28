import React, { useState, createContext } from 'react'
export const LanguageContext = createContext({
  name: 'en',
  flag: '840',
  height: '14'
})
const PageContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => {
  const [language, setLanguage] = useState({
    name: 'en',
    flag: '840',
    height: '14'
  })
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}
export default PageContextProvider
