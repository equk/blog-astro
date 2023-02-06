module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: 'es5',
  tabWidth: 2,
  bracketSpacing: true,
  endOfLine: 'lf',
  plugins: [
    require('prettier-plugin-astro'),
    require('prettier-plugin-tailwindcss') /* Must come last */,
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: '**/*astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
