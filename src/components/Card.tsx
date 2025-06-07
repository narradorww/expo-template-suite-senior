import React from 'react'

import { useTheme } from '@context'
import { type ShadowVariant } from '@theme'
import { View, ViewProps, ViewStyle } from 'react-native'

interface CardProps extends Omit<ViewProps, 'style'> {
  variant?: 'elevated' | 'outlined' | 'filled'
  shadow?: ShadowVariant
  padding?: keyof typeof import('@theme').spacing
  style?: ViewStyle | ViewStyle[]
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  shadow = 'md',
  padding = 4,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'elevated':
        return {
          backgroundColor: theme.colors.surface,
          ...theme.shadows[shadow],
        }
      case 'outlined':
        return {
          backgroundColor: theme.colors.surface,
          borderWidth: 1,
          borderColor: theme.colors.border,
        }
      case 'filled':
        return {
          backgroundColor: theme.colors.neutral[50],
        }
      default:
        return {
          backgroundColor: theme.colors.surface,
          ...theme.shadows[shadow],
        }
    }
  }

  const cardStyle: ViewStyle = {
    ...getVariantStyles(),
    borderRadius: theme.layout.card.borderRadius,
    padding: theme.spacing[padding],
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  }

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  )
}
