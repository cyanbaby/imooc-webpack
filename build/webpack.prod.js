const merge = require('webpack-merge');
const conmonConfig = require('./webpack.common.js');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
}

module.exports = merge(conmonConfig, prodConfig)