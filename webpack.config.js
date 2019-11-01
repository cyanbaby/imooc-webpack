const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	mode: 'development',
	devtool: 'source-map',
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
Hot Module Replacement  热模块替换 特更新
	我们是没有dist目录呢？  打包生成的文件存在了内存里
btn的click点击一次新增一个item  单双的bgc不一样  但是直接更改样式之后 生成的item都消失了
	需求: 更改样式 不要刷新页面, 替换样式就行了 
	devServer
			hot: true,		 开启热更新
			hotOnly: true  即便是热更新没有生效, 不要刷新页面
			const webpack = require('webpack'); 添加plugins new webpack.HotModuleLeReplacementPlugin()
 
需求2, index.js加载了counter.js和number.js  counter模块把1+到17  修改number模块居然又刷新了
	开启HMR是不刷新了， 但是连number模块的改动也没有更新了
	// 如果当前项目开启了HMR
	if(module.hot) {
		// 如果number改变了执行cb
		module.hot.accept('./number', ()=> {
			number();
		})
	}
	又多了一个   number
	// 如果当前项目开启了HMR
	if(module.hot) {
		// 如果number改变了执行cb
		module.hot.accept('./number', ()=> {
			document.body.removeChild(document.getElementById('number'));
			number();
		})
	}
	
为什么之前的css就不用我们判断呢？   css-loader帮我做了	vue中的vue-loader也是一样...





*/