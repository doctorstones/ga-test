module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'eslint-plugin-react',
    'eslint-plugin-import',
    //"eslint-plugin-jsdoc",
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'off', // in std was warn - removed for readability
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-floating-promises': 'off', // in std was error
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'off', // in std was error
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off', // in std was error
    '@typescript-eslint/no-unsafe-assignment': 'off', // in std was error
    '@typescript-eslint/no-unsafe-call': 'off', // in std was error
    '@typescript-eslint/no-unsafe-member-access': 'off', // in std was error
    '@typescript-eslint/no-unsafe-return': 'off', // in std was error
    '@typescript-eslint/no-unused-expressions': 'off', // in std was error
    '@typescript-eslint/no-unused-vars': 'off', // in std was warn - disabled because it's duplicated by tsconfig prop
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['off', 'single'],
    '@typescript-eslint/require-await': 'error', // in std was error
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off', // in std was error
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': 'off', // in std was error
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-parens': ['off', 'always'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    complexity: 'off',
    'constructor-super': 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    // "id-denylist": [
    //     "error",
    //     "any",
    //     "Number",
    //     "number",
    //     "String",
    //     "string",
    //     "Boolean",
    //     "boolean",
    //     "Undefined",
    //     "undefined"
    // ],
    'id-denylist': 'off', // in std was the above list
    'id-match': 'error',
    'import/order': 'error',
    indent: 'off',
    'jsdoc/check-alignment': 'off', // in std was error - also plugin is commented
    'jsdoc/check-indentation': 'off', // in std was error - also plugin is commented
    'jsdoc/newline-after-description': 'off', // in std was error - also plugin is commented
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 1],
    'max-len': [
      'error',
      {
        code: 140,
      },
    ],
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-implied-eval': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-loss-of-precision': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padded-blocks': [
      'off',
      {
        blocks: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'prefer-arrow/prefer-arrow-functions': 'off', // in std was error
    'prefer-const': 'error',
    radix: 'error',
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['off', 'always'],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-tag-spacing': [
      'off',
      {
        afterOpening: 'allow',
        closingSlash: 'allow',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'off', // in std was error
    'react/no-unsafe': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'require-await': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
  },
}
