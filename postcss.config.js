module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-preset-env': {
      stage: 0,
      features: {
        'custom-properties': false
      }
    },
    'postcss-prefix-selector': {
      prefix: '.ola',
      exclude: ['.ola', '.ola_util-bg', /^\.ola\s/]
    },
    'cssnano': {}
  }
}
