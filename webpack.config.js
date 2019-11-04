const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/index.js'
  },

  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
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
  new CleanWebpackPlugin(['dist']),
  new webpack.HotModuleReplacementPlugin()
              
  ],

  // optimization: {
  //   usedExports: true
  // },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}


/*

tree shaking  摇树  支持支ES Module
  development 默认没有Tree Shaking功能
    optimization: {
      usedExports: true
    },
  package.json  @babel/poly-fill其实就是在window上绑定了一个全局的变量promise..map..并没有到处模块
        如果用tree shaking 就会把@babel/poly-fill给忽略掉
        "sideEffects": ["@babel/polly-fill"], false是一样的(因为我们没有引入@babel/poly-fill) 如果引入了, 还不要摇树,就写@babel/poly-fill
        一般会把*.css写上去
        exports provided: add, minus 
        exports used: add  如果上线了, 就会只有这一个代码了 production optimization都是自动的

*/