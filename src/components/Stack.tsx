import React from 'react'

import { useTheme } from '@context'
import { View, ViewProps, ViewStyle } from 'react-native'

type StackDirection = 'row' | 'column'
type StackAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch'
type StackJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

interface StackProps extends Omit<ViewProps, 'style'> {
  direction?: StackDirection
  spacing?: keyof typeof import('@theme').spacing
  align?: StackAlign
  justify?: StackJustify
  wrap?: boolean
  style?: ViewStyle | ViewStyle[]
}

export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  spacing = 0,
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  const stackStyle: ViewStyle = {
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    ...(wrap && { flexWrap: 'wrap' }),
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  }

  const childrenWithSpacing = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child

    const isLast = index === React.Children.count(children) - 1
    if (isLast || spacing === 0) return child

    const spacingStyle: ViewStyle = {
      [direction === 'row' ? 'marginRight' : 'marginBottom']: theme.spacing[spacing],
    }

    return React.cloneElement(child, {
      style: [child.props.style, spacingStyle],
    })
  })

  return (
    <View style={stackStyle} {...props}>
      {childrenWithSpacing}
    </View>
  )
}
