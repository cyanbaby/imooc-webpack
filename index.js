var dom = document.getElementById('root');

// Header();
// Sidebar();
// Content();

new Header();
new Sidebar();
new Content();


/*
虽然index.js不用把所有的业务逻辑写进来了
但是文件变多了啊, index.html 引入的文件变多了 http请求

并且不能看出Header() 对应的文件是哪个  不易维护

*/