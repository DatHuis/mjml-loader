let personalJestConfig = {};

try {
  personalJestConfig = require('./jest.config.personal.js');
} catch (e) {
  // eslint-disable-next-line no-console
  console.log(
    `If you want to override some default jest configs you can do that in your jest.config.personal.js`,
  );
}
module.exports = {
  verbose: true,
  maxWorkers: '30%',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  ...personalJestConfig,
  globals: {
    'ts-jest': {
      isolatedModules: true,
      babelConfig: true,
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  testMatch: ['<rootDir>/src/**/__test__/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest',
};
