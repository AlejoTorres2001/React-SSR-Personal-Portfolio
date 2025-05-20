'use client'

import React from 'react'
import LanguageContextProvider from './LanguageContextProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageContextProvider>{children}</LanguageContextProvider>
}