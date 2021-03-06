const version = require('./package.json').version;

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
    'postcss-inject': {
      cssPlainText: `:root { --ola-version: "${version}"; }`
    },
    'cssnano': {}
  }
}
