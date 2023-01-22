const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
  },
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: '/node_modules/',
          use: [
                  {
                        loader: 'style-loader',
                  },
                  {
                        loader: 'css-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/templates/index.html"),
            filename: "index.html",
            
        }),

    ],
    
};