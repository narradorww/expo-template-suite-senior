import { lightTheme, darkTheme } from '@theme'

export const mockTheme = {
  light: lightTheme,
  dark: darkTheme,
}

export const createMockThemeContext = (themeMode: 'light' | 'dark' = 'light') => ({
  theme: mockTheme[themeMode],
  themeMode,
  setThemeMode: jest.fn(),
  toggleTheme: jest.fn(),
  isSystemMode: false,
  setSystemMode: jest.fn(),
})

export const getThemeColor = (themeMode: 'light' | 'dark', colorPath: string): string => {
  const theme = mockTheme[themeMode]
  const keys = colorPath.split('.')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = theme.colors
  for (const key of keys) {
    value = value[key]
    if (value === undefined) break
  }

  return value as string
}

// Common test assertions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const expectToHaveStyle = (element: any, property: string, value: any) => {
  expect(element.props.style).toEqual(expect.objectContaining({ [property]: value }))
}

export const expectToHaveThemeColor = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any,
  property: string,
  colorPath: string,
  themeMode: 'light' | 'dark' = 'light',
) => {
  const expectedColor = getThemeColor(themeMode, colorPath)
  expectToHaveStyle(element, property, expectedColor)
}
