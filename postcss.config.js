module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-preset-env': {
      browser: '> 0.5%, last 2 versions, Firefox ESR, not dead, not ie',
      stage: 0,
      features: {
        'custom-properties': false
      }
    },
    'postcss-prefix-selector': {
      prefix: '.ola',
      exclude: [/^\.ola/]
    },
    'stylefmt': {}
  }
}
