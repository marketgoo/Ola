const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SOURCE_DIR = path.join(__dirname, 'src')
const DIST_DIR = path.resolve(__dirname, 'dist')

const JSLoader = {
  test: /\.js$/,
  use: ['babel-loader'],
  exclude: /node_modules/
}

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: `${DIST_DIR}/css/`
      }
    },
    {
      loader: 'css-loader',
      options: {importLoaders: 1},
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      },
    },
  ],
}

module.exports = {
  entry: [
    `${SOURCE_DIR}/index.js`,
    `${SOURCE_DIR}/index.css`
  ],
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  output: {
    path: DIST_DIR,
    filename: 'index.umd.js',
    library: 'ola',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      JSLoader,
      CSSLoader
    ]
  },
  externals: [
    'react',
    'classnames',
    'prop-types',
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
}
