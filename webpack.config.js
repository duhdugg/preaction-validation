let path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: 'preaction-validation.min.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|__tests__)/,
        loader: 'babel-loader'
      }
    ]
  }
}
