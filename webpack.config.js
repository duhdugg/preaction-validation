let path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    base: './lib/base.js',
    date: './lib/date.js',
    email: './lib/email.js',
    empty: './lib/empty.js',
    isbn10: './lib/isbn10.js',
    isb13: './lib/isbn13.js',
    notEmpty: './lib/notEmpty.js',
    number: './lib/number.js',
    phone: './lib/phone.js',
    price: './lib/price.js',
    salesforceid: './lib/salesforceid.js',
    url: './lib/url.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].min.js',
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
