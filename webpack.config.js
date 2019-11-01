const path = require('path');

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
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*
use: ['style-loader', 'css-loader'] 使用两个loader就用数组

css-loader 分析出几个css文件的关系 index.css中 @import './avatar.cs' 最终合并成一段
style-loader  写入<head>

注意 这里的 index.js 加载了 index.css模块  
													 			@impoty './avatar.css'模块没问题 (继续@import 'test.css'模块就会报错? 为什么)
											 					(继续@import 'test.css'模块就会报错? 为什么)
													在index.js和index.css平级 @import 'test.css'  没问题

*/