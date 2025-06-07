import React from 'react'

import { TouchableOpacity, TouchableOpacityProps, ViewStyle, ActivityIndicator } from 'react-native'

import { useTheme } from '@context/ThemeContext'
import { type ShadowVariant } from '@theme/shadows'

import { Text } from './Text'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  disabled?: boolean
  shadow?: ShadowVariant
  style?: ViewStyle | ViewStyle[]
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  shadow = 'sm',
  style,
  children,
  onPress,
  ...props
}) => {
  const { theme } = useTheme()

  const isDisabled = disabled || loading

  const getVariantStyles = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: theme.colors.primary[500],
          borderWidth: 0,
        }
      case 'secondary':
        return {
          backgroundColor: theme.colors.secondary[500],
          borderWidth: 0,
        }
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary[500],
        }
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderWidth: 0,
        }
      default:
        return {
          backgroundColor: theme.colors.primary[500],
          borderWidth: 0,
        }
    }
  }

  const getSizeStyles = (): ViewStyle => {
    switch (size) {
      case 'sm':
        return {
          paddingHorizontal: theme.spacing[4],
          paddingVertical: theme.spacing[2],
          minHeight: 36,
        }
      case 'md':
        return theme.layout.button
      case 'lg':
        return {
          paddingHorizontal: theme.spacing[8],
          paddingVertical: theme.spacing[4],
          minHeight: 52,
        }
      default:
        return theme.layout.button
    }
  }

  const getTextColor = (): string => {
    if (isDisabled) {
      return theme.colors.text.disabled
    }

    switch (variant) {
      case 'primary':
        return theme.colors.text.inverse
      case 'secondary':
        return theme.colors.text.inverse
      case 'outline':
        return theme.colors.primary[500]
      case 'ghost':
        return theme.colors.primary[500]
      default:
        return theme.colors.text.inverse
    }
  }

  const buttonStyle: ViewStyle = {
    ...getSizeStyles(),
    ...getVariantStyles(),
    ...theme.shadows[shadow],
    borderRadius: theme.layout.button.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: isDisabled ? 0.6 : 1,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={isDisabled}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={getTextColor()}
          style={{ marginRight: theme.spacing[2] }}
        />
      )}
      {typeof children === 'string' ? (
        <Text variant="button" color={getTextColor()}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}
