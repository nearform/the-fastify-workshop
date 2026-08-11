const js = require('@eslint/js')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const importPlugin = require('eslint-plugin-import')
const sqlPlugin = require('eslint-plugin-sql')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const globals = require('globals')

module.exports = [
  {
    ignores: ['coverage/', 'node_modules/', 'dist/', 'public/', 'migrations/', 'theme/'],
  },
  js.configs.recommended,
  ...tsPlugin.configs['flat/recommended'],
  prettierRecommended,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 2020,
      globals: {
        ...globals.es2015,
        ...globals.node,
      },
    },
    plugins: {
      sql: sqlPlugin,
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        },
      ],
      'sql/format': 'error',
      'sql/no-unsafe-query': ['error', { sqlTag: 'SQL' }],
    },
  },
]
