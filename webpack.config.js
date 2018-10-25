const webpack = require('webpack');
const path = require('path');
var src_dir = path.join(__dirname, './client/src');
var dist_dir = path.join(__dirname, './client/dist');


module.exports = {
  // context: __dirname + '/client/src/',
  entry: `${src_dir}/index.js`,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
      },
    ],
  },
  output: {
    path: dist_dir,
    filename: 'review.bundle.js',
  }
};