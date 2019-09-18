exports.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|__tests__)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
