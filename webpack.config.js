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
			test: /\.scss$/,
			use: [
			'style-loader', 
			'css-loader', 
			'sass-loader',
			'postcss-loader'
			]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*
test: /\.scss$/,
use: ['style-loader', 'css-loader', 'sass-loader'] 

cnpm i -D sass-loader
cnpm i -D node-sass


loader的执行顺序是从下到上， 从右到左

postcss-loader  使用PostCss  添加postcss.config.js配置PostCss插件 添加厂商前缀precss
*/