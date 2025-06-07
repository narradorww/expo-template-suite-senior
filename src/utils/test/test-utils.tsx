import React, { ReactElement } from 'react'

import { ThemeProvider } from '@context'
import { render, RenderOptions } from '@testing-library/react-native'

// Remove react-native mock from here - it's causing conflicts

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  themeMode?: 'light' | 'dark'
}

const AllTheProviders = ({
  children,
  themeMode: _themeMode = 'light',
}: {
  children: React.ReactNode
  themeMode?: 'light' | 'dark'
}) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: CustomRenderOptions) =>
  render(ui, {
    wrapper: (props) => <AllTheProviders {...props} themeMode={options?.themeMode} />,
    ...options,
  })

export * from '@testing-library/react-native'
export { customRender as render }
