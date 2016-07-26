/* eslint-disable */
const path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
         
      },
      exclude: [nodeModulesPath]
    }]
  }
}