module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:n/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  overrides: [
    {
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
      files: ['packages/api/tests/*.test.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
      },
    },
    {
      extends: ['plugin:jsdoc/recommended-typescript-error'],
      files: ['packages/api/src/*.ts'],
      rules: {
        'jsdoc/require-jsdoc': [
          'error',
          {
            require: {
              ClassDeclaration: true,
              FunctionDeclaration: true,
              MethodDefinition: true,
            },
          },
        ],
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        enums: false,
        variables: false,
        typedefs: false,
      },
    ],
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true,
      },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: false, ignoreVoidOperator: false },
    ],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'n/no-missing-import': 'off',
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        ignores: ['fetch'],
      },
    ],
    'no-console': 'error',
  },
  reportUnusedDisableDirectives: true,
};
