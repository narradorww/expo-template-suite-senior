export const typography = {
  fontFamily: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 32,
    '2xl': 32,
    '3xl': 36,
    '4xl': 44,
    '5xl': 56,
    '6xl': 68,
  },
  letterSpacing: {
    tighter: -0.5,
    tight: -0.25,
    normal: 0,
    wide: 0.25,
    wider: 0.5,
    widest: 1,
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
} as const

export const textVariants = {
  h1: {
    fontSize: typography.fontSize['5xl'],
    lineHeight: typography.lineHeight['5xl'],
    fontFamily: typography.fontFamily.bold,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontSize: typography.fontSize['4xl'],
    lineHeight: typography.lineHeight['4xl'],
    fontFamily: typography.fontFamily.bold,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontSize: typography.fontSize['3xl'],
    lineHeight: typography.lineHeight['3xl'],
    fontFamily: typography.fontFamily.semiBold,
    letterSpacing: typography.letterSpacing.normal,
  },
  h4: {
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight['2xl'],
    fontFamily: typography.fontFamily.semiBold,
    letterSpacing: typography.letterSpacing.normal,
  },
  h5: {
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.xl,
    fontFamily: typography.fontFamily.medium,
    letterSpacing: typography.letterSpacing.normal,
  },
  h6: {
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
    fontFamily: typography.fontFamily.medium,
    letterSpacing: typography.letterSpacing.normal,
  },
  body: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
    fontFamily: typography.fontFamily.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
    fontFamily: typography.fontFamily.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.sm,
    fontFamily: typography.fontFamily.regular,
    letterSpacing: typography.letterSpacing.normal,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.xs,
    fontFamily: typography.fontFamily.regular,
    letterSpacing: typography.letterSpacing.wide,
  },
  button: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.base,
    fontFamily: typography.fontFamily.medium,
    letterSpacing: typography.letterSpacing.wide,
  },
  overline: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.xs,
    fontFamily: typography.fontFamily.medium,
    letterSpacing: typography.letterSpacing.widest,
  },
} as const

export type TextVariant = keyof typeof textVariants
export type Typography = typeof typography
