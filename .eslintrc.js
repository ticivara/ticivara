module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/comment-directive': 'off',
    'prettier/prettier': 'warn', //  0 = off, 1 = warn, 2 = error
    'camelcase': 'off',
    // 'no-unused-vars': ['warn', {}],
    'max-len': ['error', {'code': 999, 'ignoreUrls': true}],
    'no-console': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
