module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "array-callback-return": "error",
    "brace-style": [ "error","1tbs", { "allowSingleLine": false }],
    "camelcase": "off",
    'curly': [ 'error', 'all' ],
    "no-return-await": "off",
    "no-invalid-this": "off",
    'no-empty-pattern': "error",
    "no-magic-numbers": "off",
    "no-unused-vars": "off",
    "semi": "off",
    "space-before-blocks": "error",
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: 'no-public' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "types": ["function"],
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "filter": {
          "regex": "^(.*-.*)$",
          "match": false
        },
        "leadingUnderscore": "allow"
      },
      {
        "selector": "enumMember",
        "format": ["camelCase", "PascalCase", "UPPER_CASE" ],
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
          "selector": "memberLike",
          "format": ["camelCase"],
          "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "format": null,
        "filter": {
          "regex": "[- ]",
          "match": true
        },
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "require"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
    "@typescript-eslint/no-invalid-this": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        "ignoreEnums": true,
        "ignoreArrayIndexes": true,
        "ignoreNumericLiteralTypes": true,
        "ignoreReadonlyClassProperties": true,
        "ignore": [ 0, 1]
      }
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^(_|type)" }],
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/semi": ["error", "never"],
  },
  "ignorePatterns": [
    ".eslintrc.js",
    "index.*"
  ],
};
