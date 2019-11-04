// import _ from 'lodash';  

// 第二种方式: main.js拆成 lodash.js(第二次加载浏览器有缓存的) 和 main.js(当业务逻辑发生改变只要加载man.js即可)
// 不直接引入,直接创建一个lodash.js引入 然后添加入口lodash
// html的plugin是entry反序的自动注入

console.log(_.join(['a', 'b', 'c'], '*****'));
console.log(_.join(['a', 'b', 'c'], '*****'));













/*
import _ from 'lodash';

console.log(_.join(['a', 'b', 'c'], '*****'));
// lodash都被打包到一个文件, main.js

*/