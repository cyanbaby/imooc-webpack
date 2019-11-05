const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');
const conmonConfig = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',

  module: {
    rules: [{
      test: /\.scss$/,
      use: [
      MiniCssExtractPlugin.loader,
      {
        loader:'css-loader',
        options: {
          importLoaders: 2
        }
      },
      'sass-loader',
      'postcss-loader'
      ]
    },{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    }]
  },

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })

  ],

  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  }

}

module.exports = merge(conmonConfig, prodConfig)
// module.exports = prodConfig;



// 走filename: '[name].css',路线， 因为是单独打包，而且在页面直接引入一个link  



// cnpm i -D optimize-css-assets-webpack-plugin  压缩css