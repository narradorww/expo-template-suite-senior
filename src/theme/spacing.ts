export const spacing = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const

export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  base: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
} as const

export const layout = {
  container: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[6],
  },
  section: {
    marginBottom: spacing[8],
  },
  card: {
    padding: spacing[4],
    borderRadius: borderRadius.lg,
  },
  button: {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.md,
    minHeight: 44, // iOS accessibility minimum
  },
  input: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
    borderRadius: borderRadius.md,
    minHeight: 44,
  },
} as const

export type Spacing = typeof spacing
export type BorderRadius = typeof borderRadius
export type Layout = typeof layout
