const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  devServer: {
    contentBase: path.join(__dirname, "static"),
    compress: true,
    port: 8080
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.html']
  },
  module: {
    loaders: [
      {
        test: /^\.html$/,
        loaders: [
          'extract-loader',
          'html-loader?attrs=srcipt:src'
        ]
      },
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: path.join(__dirname, './tsconfig.json')
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader?singleton=true',
          'css-loader?sourceMap&importLoaders=1',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rocks',
      template: 'index.ejs'
    })
  //  new CopyWebpackPlugin([
  //    { from: path.join(__dirname, './static') },
  //    { from: path.join(__dirname, './node_modules/material-design-icons/iconfont') }
  //  ])
  ]
}