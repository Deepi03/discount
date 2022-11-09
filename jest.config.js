const { defaults } = require('jest-config')
module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: null,
  testRegex: ['.*test.ts$'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  clearMocks: true
}
