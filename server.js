const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

// webpack编译器
const complier = webpack(config);	

const app = express();
// 使用webpackDevMiddleware中间件和 编译器
app.use(webpackDevMiddleware(complier, {
	publicPath: config.output.publicPath
}));

app.listen(3000, ()=> {
	console.log('server is running 3000')
});