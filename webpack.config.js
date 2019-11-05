const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	externals: 'lodash',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'library.js',
		library: 'root',
		libraryTarget: 'umd'
	}
}

/*

用户如果已经用了lodash   externals: 'lodash'

library: 'root',  script标签

libraryTarget: 'umd' 支持AMD CMD CommonJS esModule

*/