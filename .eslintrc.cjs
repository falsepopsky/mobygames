module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'promise'],
  extends: ['untidy'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  settings: {
    n: {
      allowModules: ['vitest'],
      resolvePaths: [__dirname],
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
  ignorePatterns: ['dist', '*.cjs', 'env.d.ts'],
};
