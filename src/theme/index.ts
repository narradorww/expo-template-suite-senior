export * from './colors'
export * from './spacing'
export * from './typography'
export * from './shadows'

import { lightColors, darkColors, type ColorPalette } from './colors'
import { shadows, type Shadows, type ShadowVariant } from './shadows'
import {
  spacing,
  borderRadius,
  layout,
  type Spacing,
  type BorderRadius,
  type Layout,
} from './spacing'
import { typography, textVariants, type Typography, type TextVariant } from './typography'

export const lightTheme = {
  colors: lightColors,
  typography,
  textVariants,
  spacing,
  borderRadius,
  layout,
  shadows,
} as const

export const darkTheme = {
  colors: darkColors,
  typography,
  textVariants,
  spacing,
  borderRadius,
  layout,
  shadows,
} as const

export type Theme = typeof lightTheme

export type ThemeMode = 'light' | 'dark'

export {
  type ColorPalette,
  type Typography,
  type TextVariant,
  type Spacing,
  type BorderRadius,
  type Layout,
  type Shadows,
  type ShadowVariant,
}
