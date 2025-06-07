import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { lightTheme, darkTheme, type Theme, type ThemeMode } from '@theme'
import { useColorScheme } from 'react-native'

interface ThemeContextType {
  theme: Theme
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
  toggleTheme: () => void
  isSystemMode: boolean
  setSystemMode: (enabled: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = '@app_theme_mode'
const SYSTEM_MODE_KEY = '@app_system_mode'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme()
  const [themeMode, setThemeModeState] = useState<ThemeMode>('light')
  const [isSystemMode, setIsSystemMode] = useState(true)

  useEffect(() => {
    loadThemePreferences()
  }, [])

  useEffect(() => {
    if (isSystemMode && systemColorScheme) {
      setThemeModeState(systemColorScheme as ThemeMode)
    }
  }, [systemColorScheme, isSystemMode])

  const loadThemePreferences = async () => {
    try {
      const [savedTheme, savedSystemMode] = await Promise.all([
        AsyncStorage.getItem(THEME_STORAGE_KEY),
        AsyncStorage.getItem(SYSTEM_MODE_KEY),
      ])

      const systemModeEnabled = savedSystemMode !== 'false'
      setIsSystemMode(systemModeEnabled)

      if (systemModeEnabled && systemColorScheme) {
        setThemeModeState(systemColorScheme as ThemeMode)
      } else if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeModeState(savedTheme as ThemeMode)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load theme preferences:', error)
    }
  }

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      setThemeModeState(mode)
      setIsSystemMode(false)
      await Promise.all([
        AsyncStorage.setItem(THEME_STORAGE_KEY, mode),
        AsyncStorage.setItem(SYSTEM_MODE_KEY, 'false'),
      ])
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to save theme mode:', error)
    }
  }

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light'
    setThemeMode(newMode)
  }

  const setSystemMode = async (enabled: boolean) => {
    try {
      setIsSystemMode(enabled)
      await AsyncStorage.setItem(SYSTEM_MODE_KEY, enabled.toString())

      if (enabled && systemColorScheme) {
        setThemeModeState(systemColorScheme as ThemeMode)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to save system mode preference:', error)
    }
  }

  const theme = themeMode === 'light' ? lightTheme : darkTheme

  const value: ThemeContextType = {
    theme,
    themeMode,
    setThemeMode,
    toggleTheme,
    isSystemMode,
    setSystemMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
