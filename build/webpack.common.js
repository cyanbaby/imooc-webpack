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
      chunks: 'all',      
      minSize: 30000,  

      // minChunks: 2,  // 当一个模块被用 至少 X次了, 才会进行代码分割
      minChunks: 1, 

      maxAsyncRequests: 5,          // 同时加载的模块数量, 比如目前已经分割了10个模块 就违反了这个要求
                                    // 前5个分割 后面的不分割了
      maxInitialRequests: 3,        // 入口加载的时候引入了其他的js模块 如果分割也只能最多分割3个模块
                                    // 超过3个就不会分割了
      automaticNameDelimiter: '~',  // 链接符~  已经见过了vonder~main.js
      name: true,                   // 让下面分组的filename有效
      cacheGroups: {                // 缓存组，如果没这个 lodash和jquery就分不到一组了

        vendors: {
          test: /[\\/]node_modules[\\/]/,   
          priority: -10,                   
          // filename: 'vendors.js' // 还用就报错了，因为用魔法注释已经命名了啊23333333
        },

        // default根本没有test, 那jquery 不是两个组都符合了？
        // 根据priority的值判断 进值大的分组
      
        default: {           
          // priority: -9,
          priority: -20,
          reuseExistingChunk: true,   
          filename: 'common.js'   
        }
      }
    }
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }

}

