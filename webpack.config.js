const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?{"presets":["es2015","react"]}'],
      },
    ],
  },
};

