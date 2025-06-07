import React from 'react'

import { useTheme } from '@context'
import { View, ViewProps, ViewStyle } from 'react-native'

interface ContainerProps extends Omit<ViewProps, 'style'> {
  flex?: boolean
  center?: boolean
  paddingHorizontal?: keyof typeof import('@theme').spacing
  paddingVertical?: keyof typeof import('@theme').spacing
  padding?: keyof typeof import('@theme').spacing
  style?: ViewStyle | ViewStyle[]
}

export const Container: React.FC<ContainerProps> = ({
  flex = false,
  center = false,
  paddingHorizontal,
  paddingVertical,
  padding,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  const containerStyle: ViewStyle = {
    backgroundColor: theme.colors.background,
    ...(flex && { flex: 1 }),
    ...(center && {
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...(padding && {
      padding: theme.spacing[padding],
    }),
    ...(paddingHorizontal && {
      paddingHorizontal: theme.spacing[paddingHorizontal],
    }),
    ...(paddingVertical && {
      paddingVertical: theme.spacing[paddingVertical],
    }),
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  }

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  )
}
