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
		publicPath: '/',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*
"scripts"添加      "server": "node server.js"
		起一个服务，监听src改变 自动重启服务器，更新网页内容

cnpm i -D express webpack-dev-middleware
		webapck-dev-middleware 中间件 server用webpack

*/