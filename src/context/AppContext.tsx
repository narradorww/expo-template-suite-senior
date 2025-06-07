import React, { ReactNode } from 'react'

import { ThemeProvider } from './ThemeContext'

interface AppContextProps {
  children: ReactNode
}

export const AppContext: React.FC<AppContextProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
