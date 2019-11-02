const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  // devtool: 'source-map',
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

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}


/*

webpack 打包react
cnpm i react react-dom  -S   
cnpm i @babel/preset-react -D



babel的presets的插件是是由顺序的  从下而上,从右到左
{
  "presets": [
      [
        "@babel/preset-env", {
          targets: {
            chrome: "67"
          },
          useBuiltIns: 'usage'
        }
      ],
      "@babel/preset-react"
  ]
}
  
*/