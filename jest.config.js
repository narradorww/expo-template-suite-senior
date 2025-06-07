module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/setupJest.js'],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/*.(test|spec).(ts|tsx|js)'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/utils/test/**',
    '!src/**/__tests__/**',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@context$': '<rootDir>/src/context',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@components$': '<rootDir>/src/components',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@theme$': '<rootDir>/src/theme',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@utils$': '<rootDir>/src/utils',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@navigation$': '<rootDir>/src/navigation',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@screens$': '<rootDir>/src/screens',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
}
