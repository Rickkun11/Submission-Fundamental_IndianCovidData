const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const common = require('./webpack.common');
//optimization

module.exports = merge(common, {

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              generatorOpts: { compact: false },
            },
          },
        ],
      }
    ],
  },
  plugins: [

    new MiniCssExtractPlugin({filename: 'assets/css/[hash].css'}),

  ],

  optimization: {
    minimizer: [

  
    ],

  },
});