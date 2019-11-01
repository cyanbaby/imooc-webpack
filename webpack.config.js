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
			{
				loader:'css-loader',
				options: {
					importLoaders: 2,
					modules: true
				}
			},
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

css 模块化,  如果createAvatar模块也需要 css模块就需要单独引入了 如果过需要模块化样式 也需要和index一样from之后 style.avatar

*/