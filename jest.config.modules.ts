export default {
  displayName: 'modules',
  preset: '<rootDir>/jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/modules',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};
