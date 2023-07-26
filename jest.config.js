/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  roots: ['src'],
  reporters: ['jest-silent-reporter', 'summary'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],
  silent: true,
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
  collectCoverage: true,
  collectCoverageFrom: [
    'src/app/components/**/*.{ts,tsx}',
    '!src/app/components/**/index.ts', // ignore barel files
    'src/app/hooks/**/*.{ts,tsx}',
    'src/app/utils/**/*.{ts,tsx}',
    '!src/app/utils/constants.ts', // ignore constants only file
  ],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 90,
  //     statements: 90,
  //   },
  // },
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
  ],
  // coveragePathIgnorePatterns: [
  //   'node_modules',
  // ],
};
