var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
            publicPath: '/dist'
      })
      }
    ]
  },
    devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true
  },
   plugins: [
     new HtmlWebpackPlugin({
      title: 'Project',
      minify: {
        collapseWhitespace: true
      },
      template: './src/index.ejs',
    }),
     new ExtractTextPlugin({
      filename: 'app.css',
      // disabled: false,
      allChunks: true
     }),
  ]
}
