import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

// var dom = document.getElementById('root');			// 写在这里会报错的哦

new Header();
new Sidebar();
new Content();

/*

文件目录结构一目了然   
不存在index.html 中index.js顺序错误 导致bug
index.js模块把依赖的模块都导入进来 不存在了index.js的依赖问题

*/