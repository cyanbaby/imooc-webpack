const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
    main: './src/index.js'
	},

  module: {
    rules: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader'
    },{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480
        }
      }
    },{
      test: /\.(eot|ttf|woff|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), 
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),     
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    },

  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  }
}

// 多入口js, 希望他们的引入的css文件都打包到一个css文件

// 多入口js, 希望他们的引入的css文件分别打包

// 底层都是用optimization  splitChunks 的 cacheGroups  去官网看啦