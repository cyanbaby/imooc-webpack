// 同步引入模块
import _ from 'lodash';
var element = document.createElement('div');
element.innerHTML = _.join(['cyan', 'baby'], '-');
document.body.appendChild(element);



// // 异步引入模块
// // 魔法注释更改代码分割的加载模块的名称  vendors~lodash.js了  
// // 去配置optimization中的splitChunks:
// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['cyan', 'baby'], '-');
//     return element;
//   });
// }

// // 异步加载js,   html的插件只注入一个main.js  又main.js异步加载0.js

// getComponent().then(element => {
//   document.body.appendChild(element);
// })






