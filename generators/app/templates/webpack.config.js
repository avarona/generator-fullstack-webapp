'use strict';

const path = require('path');
process.traceDeprecation = true;

module.exports = {
  entry: './app/origin.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }, {
        test: /\.(scss|sass)$/,
        loader: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
