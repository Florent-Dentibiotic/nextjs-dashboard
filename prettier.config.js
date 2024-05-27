const styleguide = require('@vercel/style-guide/prettier')
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 90,
  bracketSameLine: true,
}

module.exports = {
  ...config,
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
}
