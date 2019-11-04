// 这个方式不兼容 得用插件(但是本节课这傻逼讲师讲错了4-5才修正) 
// 正确插件是@babel/plugin-syntax-dynamic-import
function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['cyan', 'baby'], '-');
    return element;
  });
}

// 异步加载js,   html的插件只注入一个main.js  又main.js异步加载0.js

getComponent().then(element => {
  document.body.appendChild(element);
})






/*
import _ from 'lodash';  // 同步执行

console.log(_.join(['a', 'b', 'c'], '*****'));
console.log(_.join(['a', 'b', 'c'], '*****'));


*/