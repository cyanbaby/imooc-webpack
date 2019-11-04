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
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}
/*
打包分析  https://github.com/webpack/analyse
    如果想要对打包生成的代码进行一些分析  首先要生成一个打包过程的描述文件    webpack --profile --json > stats.json
    修改package.json的script     "dev-build": "webpack --profile --json > stats.json --config ./build/webpack.dev.js",
    多了一个stats.json描述文件  去 http://webpack.github.io/analyse/  如果不能检测看看json文件首行格式乱了没有 手动修改一下

另一种方式就是
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins: ..new BundleAnalyzerPlugin()


     
*/