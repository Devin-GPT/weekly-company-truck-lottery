module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['<rootDir>/weekly-company-truck-lottery/src/__tests__/**/*.{ts,tsx}'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts',
  ],
};
