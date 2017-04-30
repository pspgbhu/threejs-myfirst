var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  
  devSever: {
    port: 8010,
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: true,
  //   }),
  // ],
};
