var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./src/js/bootstrap.ts', './src/scss/application.scss'],
  output: {
    filename: './dist/application.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'babel-loader!ts-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/application.css', {
      allChunks: true
    })
  ]

}
