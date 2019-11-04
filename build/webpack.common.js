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
      test: /\.scss$/,
      use: [
      'style-loader', 
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
      use: ['style-loader', 'css-loader', 'postcss-loader']
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
    splitChunks: {
      chunks: 'all',      // all同步/异步都分割  但是webpack知道了 配置继续往下走 cacheGroups
      // chunks: 'inintial', // inintial只对同步代码做分割  
      // chunks: 'async',    // async表示做代码分割的时候只对异步代码生效  
      minSize: 30000,
      // minSize: 100000000000,   // 大于才会做代码分割
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: false,   // chunks: 'all'  这里要配置才能实现同步的代码分割
        default: false,

        vendors: {
          test: /[\\/]node_modules[\\/]/,   // 是不是在这个目录啊 在才符合同步分组 要求 venders~main(入口).js
          priority: -10,                    // 
          filename: 'vendors.js',        // 自定义名称
        }
      }
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }

}

