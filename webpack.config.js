const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js'
	},
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		hotOnly: true,
		// 针对开发环境才有用的
		proxy: {
			'/app': {
			// 如果接口是一个html 不想要html内容设置一个false
			// 如果转发/路径 需要把index设置''或者false
				target: 'http://rap2api.taobao.org',
				changeOrigin: true,
				// 假设后台跟我说先用demo的, header接口还没弄好
				pathRewrite: {
					'header.json': 'demo.json'		// 后台老弟header写好了 注释掉这个就行了 不用去改其他代码了
				},
				// 如果是一个https
				// secure: false
			}
		}

		// 这样也行
		// proxy: {
		// 	'/app/mock/235740/react/api':{
		// 		target: 'http://rap2api.taobao.org',
		// 		changeOrigin: true
		// 	}
		// }

    // 不是网站/  开始这样是不行滴
    // 请求： /react/api/header.json
    // proxy: {
    //  '/react/api': 'http://rap2api.taobao.org/app/mock/235740/'
    // }

    // 这样也是是不行滴
    // 请求： /app/mock/235740/react/api/header.json'
    // proxy: {
    //  '/app/mock/235740/react/api': 'http://rap2api.taobao.org/'
    // }

	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel-loader',
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}, {
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
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

在.babelrc配置了"useBuiltIns": "usage"后，Babel 会在你使用到 ES2015+ 新特性时，
自动添加 babel-polyfill 的引用，并且是 partial 级别的引用。按我的理解按需引入。。。

*/