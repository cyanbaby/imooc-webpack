import avatar from './avatar.png';		// ES Module
// 思考
// import Header from './header.vue'; 

var img = new Image();
img.src = avatar;

var root = document.getElementById('root');
root.append(img);







/*
// CommonJS

var avatar = require('./avatar.png');
// var avatar = require('http://bl.7yue.pro/images/sentence.6.png');		// 报错

console.log(avatar);			// 2c7d45f05cd0b1e55c7f09cf1df463bf.png



*/