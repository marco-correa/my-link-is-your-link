const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, ''),
      filename: 'project.js'
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './assets/styles.css',
        chunkFilename: 'test.css'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      disableHostCheck: true,
      historyApiFallback: true
    }
  };
};
