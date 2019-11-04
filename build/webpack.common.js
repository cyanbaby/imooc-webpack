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

// chunkFilename: '[name].chunk.js'
// entry里面的main.. 都会走output里面的filename配置项; index.js在引入一个style1.css 就会被直接合并到main.js
// 非入口的chunk模块会走chunkFilename配置项  

