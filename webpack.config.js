const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// entry: './src/index.js',   是简写
// main 就是打包输出的 chunk Names
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		main: './src/index.js'
	},

	devServer: {
		contentBase: './dist',
		open: true
	},

	module: {
		rules: [{
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
			test: /\.(eot|ttf|woff|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},

	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	}), new CleanWebpackPlugin(['dist'])],

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*

方式一  自动监听 浏览器手动刷新
  "scripts": {
    "watch": "webpack --watch"
  },


方式二   自动监听  浏览器自动刷新
	配置devServer   cnpm i -D webpack-dev-server
	devServer: {
		contentBase: './dist',
		open: true,打开浏览器   ... port .. 很多配置项
		proxy: {
			'/api': 'http://localhost:3000'
			// 这句话的意思就是用户访问/api地址的话，http://localhost:8000/api  会转发到 http://localhost:3000

		}
	},

	添加scripts脚本   "start": "webpack-dev-server"

*/