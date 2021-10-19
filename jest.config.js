/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  roots: ['src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    ...(pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }) || {}),
  },
  resolver: 'jest-pnp-resolver',
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/components/elements/**/*.{ts,tsx}',
  //   'src/hooks/**/*.{ts,tsx}',
  //   'src/utils/**/*.{ts,tsx}',
  //   '!src/*/src/components/elements/Select/Select.tsx',
  //   '!src/*/src/components/elements/Select/Select.types.tsx',
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 75,
  //     functions: 80,
  //     lines: 90,
  //     statements: 90,
  //   },
  // },
  // coverageReporters: [
  //   'json',
  //   'lcov',
  //   'text',
  //   'clover',
  // ],
  // coveragePathIgnorePatterns: [
  //   'node_modules',
  // ],
};
