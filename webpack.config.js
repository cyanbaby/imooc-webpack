const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// entry: './src/index.js',   是简写
// main 就是打包输出的 chunk Names
module.exports = {
	mode: 'development',
	entry: {
		sub: './src/index.js',
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
		publicPath: 'http://localhost:8080',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*

我像把entry: 里面的 index.js打包两次一个个main.js一个sub.js
	首先output不写出口 默认是main(可以在入口把main换成别的, 就生成别的)

	1. 入口写了两个出口不写  或者 写占位符   此时两个文件都被html-webpack-plugin注入了html模板哦
	
*/