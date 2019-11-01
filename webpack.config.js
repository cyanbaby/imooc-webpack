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
			test: /\.png$/,
			use: {
				loader: 'file-loader'
			}
		},{
			test: /\.vue$/,
			use: {
				loader: 'vue-loader'
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}


/*
webpack做模块打包的时候, 遇到不知道怎么办的时候, 在module找该怎么办
	rules 规则 [] 可是多条
		test 正则 /\.png$/		如果是.png
		use  
			loader: 'file-loader'   选择file-loader处理(生成Hash.png移到了dist, require这个图片地方自动改成src=hash)


*/