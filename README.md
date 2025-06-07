# Expo Template Suite Senior

A professional, production-ready Expo template featuring a comprehensive design system, robust testing suite, and modern development workflow. Built with TypeScript, this template provides everything you need to build scalable React Native applications.

## ✨ Features

### 🎨 **Design System**
- **Complete Theme System** with light/dark mode support
- **Styled Components** (Text, Button, Card, Container, Stack)
- **Auto Theme Detection** follows system preferences
- **TypeScript Integration** for type-safe styling
- **Consistent Color Palette** with semantic tokens

### 🧪 **Testing Suite**
- **Jest + React Native Testing Library** fully configured
- **Component Testing** with theme integration
- **Test Utilities** for easy theme and context testing
- **Integration Tests** for complex UI scenarios
- **Coverage Reports** with 70% threshold

### 🛠 **Development Tools**
- **TypeScript** with strict configuration
- **ESLint + Prettier** for code quality
- **Husky Git Hooks** for pre-commit validation
- **Path Aliases** for clean imports (`@components`, `@theme`)
- **Babel Module Resolver** configured

### 📱 **React Native Essentials**
- **React Navigation** ready-to-use
- **AsyncStorage** for data persistence
- **Expo SDK 53** with latest features
- **Safe Area Context** for proper layouts
- **Gesture Handler** for smooth interactions

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-expo-app --template expo-template-suite-senior MyApp
cd MyApp
npm install
```

**⚠️ Important: Add your app assets before running**

See [ASSETS.md](ASSETS.md) for detailed instructions on required images (icon, splash screen, etc.).

Start developing:

```bash
npm start
```

## 📖 Usage Examples

### Using the Theme System

```tsx
import React from 'react'
import { Container, Text, Button, Card, Stack } from '@components'
import { useTheme } from '@context'

export default function MyScreen() {
  const { toggleTheme, themeMode } = useTheme()
  
  return (
    <Container flex padding={4}>
      <Stack spacing={4}>
        <Text variant="h1">Welcome!</Text>
        <Text variant="body">Current theme: {themeMode}</Text>
        
        <Card padding={4}>
          <Stack spacing={3}>
            <Text variant="h3">Theme Demo</Text>
            <Button onPress={toggleTheme}>
              Toggle Theme
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}
```

### Using Styled Components

```tsx
import { Text, Button, Stack } from '@components'

// Text variants
<Text variant="h1">Main Title</Text>
<Text variant="body">Regular text</Text>
<Text variant="caption">Small caption</Text>

// Button variants and sizes
<Stack direction="row" spacing={2}>
  <Button variant="primary" size="lg">Primary</Button>
  <Button variant="outline" size="md">Outline</Button>
  <Button variant="ghost" size="sm">Ghost</Button>
</Stack>

// Custom styling
<Button 
  variant="primary"
  loading={isLoading}
  disabled={isDisabled}
  style={{ marginTop: 20 }}
>
  Custom Button
</Button>
```

### Testing Components

```tsx
import { render, screen, fireEvent } from '../utils/test'
import { Button } from '../components'

test('button handles press correctly', () => {
  const onPress = jest.fn()
  render(<Button onPress={onPress}>Click me</Button>)
  
  fireEvent.press(screen.getByText('Click me'))
  expect(onPress).toHaveBeenCalled()
})
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button with variants and sizes
│   ├── Text.tsx        # Text with typography variants
│   ├── Card.tsx        # Card with elevation styles
│   ├── Container.tsx   # Layout container
│   ├── Stack.tsx       # Flexbox layout helper
│   └── __tests__/      # Component tests
├── context/            # React contexts
│   ├── ThemeContext.tsx # Theme provider and hooks
│   └── AppContext.tsx   # Main app context
├── theme/              # Design system
│   ├── colors.ts       # Color palette (light/dark)
│   ├── typography.ts   # Font styles and variants
│   ├── spacing.ts      # Spacing scale and layouts
│   ├── shadows.ts      # Shadow/elevation system
│   └── index.ts        # Theme exports
├── utils/              # Utilities and helpers
│   ├── test/           # Testing utilities
│   └── i18n/           # Internationalization
├── screens/            # Screen components
├── navigation/         # Navigation configuration
└── __tests__/          # Integration tests
```

## 🎨 Design System

### Theme Usage

```tsx
import { useTheme } from '@context'

function MyComponent() {
  const { theme, themeMode, toggleTheme } = useTheme()
  
  const dynamicStyle = {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing[4],
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.md
  }
  
  return (
    <View style={dynamicStyle}>
      <Text style={{ color: theme.colors.text.primary }}>
        Current theme: {themeMode}
      </Text>
    </View>
  )
}
```

### Color System

```tsx
// Primary colors (blue scale)
theme.colors.primary[50]   // Very light
theme.colors.primary[500]  // Main color
theme.colors.primary[900]  // Very dark

// Semantic colors
theme.colors.success[500]  // Green
theme.colors.warning[500]  // Orange  
theme.colors.error[500]    // Red

// Text colors
theme.colors.text.primary     // Main text
theme.colors.text.secondary   // Muted text
theme.colors.text.disabled    // Disabled text
```

### Typography Scale

```tsx
// Headings
<Text variant="h1">48px Bold</Text>
<Text variant="h2">36px Bold</Text>
<Text variant="h3">30px SemiBold</Text>

// Body text
<Text variant="body">16px Regular</Text>
<Text variant="bodyLarge">18px Regular</Text>
<Text variant="bodySmall">14px Regular</Text>

// Special
<Text variant="button">16px Medium</Text>
<Text variant="caption">12px Regular</Text>
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm test -- --coverage

# Run specific test file
npm test Button.test.tsx
```

### Test Utilities

```tsx
import { render, screen } from '../utils/test'
import { expectToHaveThemeColor } from '../utils/test'

// Render with theme context
render(<MyComponent />)

// Test theme integration
expectToHaveThemeColor(element, 'backgroundColor', 'surface')

// Test with specific theme mode
render(<MyComponent />, { themeMode: 'dark' })
```

### Writing Component Tests

```tsx
import { render, screen, fireEvent } from '../../utils/test'
import { Button } from '../Button'

describe('Button', () => {
  it('applies primary variant styles', () => {
    render(<Button variant="primary" testID="button">Test</Button>)
    
    const button = screen.getByTestId('button')
    expect(button.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: '#0ea5e9' // primary.500
      })
    )
  })
})
```

## 🛠 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS device/simulator |
| `npm run web` | Run on web browser |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run ci` | Run all checks (lint + type + test) |

## 🔧 Configuration

### TypeScript Paths

The template includes pre-configured path aliases:

```tsx
// Instead of relative imports
import { Button } from '../../../components/Button'

// Use clean path aliases
import { Button } from '@components'
import { useTheme } from '@context'
import { lightTheme } from '@theme'
import { formatDate } from '@utils'
```

### Jest Configuration

- **Coverage threshold**: 70% for branches, functions, lines, statements
- **Path mapping**: Supports all TypeScript path aliases
- **Mock setup**: Comprehensive mocks for Expo, React Native, and AsyncStorage
- **Test utilities**: Custom render functions with theme context

### ESLint & Prettier

- **TypeScript support**: Full TypeScript ESLint integration
- **React Native rules**: Optimized for React Native development
- **Import organization**: Automatic import sorting and grouping
- **Prettier integration**: Seamless code formatting

## 🌙 Dark Mode

The template includes a complete dark mode implementation:

- **Automatic detection** of system preference
- **Manual toggle** with persistence
- **Smooth transitions** between themes
- **Complete color coverage** for all components

```tsx
import { useTheme } from '@context'

function ThemeToggle() {
  const { themeMode, toggleTheme, setSystemMode } = useTheme()
  
  return (
    <Stack spacing={2}>
      <Button onPress={toggleTheme}>
        Switch to {themeMode === 'light' ? 'dark' : 'light'} mode
      </Button>
      <Button onPress={() => setSystemMode(true)}>
        Use system theme
      </Button>
    </Stack>
  )
}
```

## 🚀 Getting Started Tips

1. **Explore the components**: Check `src/components/` for available UI elements
2. **Customize the theme**: Modify colors and spacing in `src/theme/`
3. **Add your screens**: Create new screens in `src/screens/`
4. **Write tests**: Use the testing utilities in `src/utils/test/`
5. **Follow the structure**: Maintain the organized folder structure

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run `npm run ci` to ensure all checks pass
6. Submit a pull request

## 📄 License

This project is licensed under the GPL-3.0-only License. See the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](https://github.com/narradorww/expo-template-suite-senior/issues)
2. Review the documentation above
3. Create a new issue with detailed information

**Happy coding!** 🎉

---

_Built with ❤️ for the React Native community. This template provides a solid foundation for building production-ready mobile applications with modern development practices._