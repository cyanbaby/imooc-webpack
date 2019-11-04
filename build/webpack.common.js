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
      minSize: 0,  // 符合minSize要求还是不分割呢？  走到cacheGroups 不是 node_modules中的default又是false
      maxSize: 50000,  // 可配可不配  比如现在引入一个1mb的 lodash webpack会尝试次拆分(一般都是拆不了的)
      // 一般不配置
      // vendors~main~._node_modules__lodash@4.17.15@lodash_lodash.js~391cb1ba.js vender.js

      minChunks: 1,  
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: false,   // chunks: 'all'  这里要配置才能实现同步的代码分割
        

        vendors: {
          test: /[\\/]node_modules[\\/]/,   // 是不是在这个目录啊 在才符合同步分组 要求 venders~main(入口).js
          priority: -10,                    // 
          filename: 'vendors.js',        // 自定义名称
        },

        // default: false,   // 默认当到哪儿也不知道
        default: {           // 会分组到default~main.js
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'   // 自定义模块名称
        }
      }
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }

}

