import React from 'react'
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native'
import { useTheme } from '@context'
import { type TextVariant } from '@theme'

interface TextProps extends Omit<RNTextProps, 'style'> {
  variant?: TextVariant
  color?: string
  style?: TextStyle | TextStyle[]
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  const variantStyle = theme.textVariants[variant]
  const textColor = color || theme.colors.text.primary

  const combinedStyle: TextStyle = {
    ...variantStyle,
    color: textColor,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  }

  return (
    <RNText style={combinedStyle} {...props}>
      {children}
    </RNText>
  )
}