const webpack = require('webpack');
const path = require('path');

const src_dir = path.join(__dirname, './client/src');
const dist_dir = path.join(__dirname, './client/dist');


module.exports = {
  // context: __dirname + '/client/src/',
  entry: `${src_dir}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  output: {
    path: dist_dir,
    filename: 'review.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
