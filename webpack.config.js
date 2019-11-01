const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// entry: './src/index.js',   是简写
// main 就是打包输出的 chunk Names
module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
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
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*
cnpm i -D html-webpack-plugin 插件会生成一个index.html并把打包好的bundle.js引入  
		可以配置index.html模板 不用自己引入bundle.js
		打包之后运行 具体看插件说明
换一下bundle.js的名字， 生成之后原来的bundle.js还在里面 并没有被删除   cnpm i clean-webpack-plugin@1.0.0 -D
		高版本和1.0.0有区别哦使用的时候
		打包之前运行 具体看插件说明


plugin可以在webpack运行到某个时刻的时候 帮我做一些事情

*/