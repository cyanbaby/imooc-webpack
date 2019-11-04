document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
    func();
  })
})

// imooc 登录的弹出层 点击再加载 （机智的小伙伴发现会不会影响性能呢）
// 带宽空闲的时候偷偷的把 登录的模块加载一下
// preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。
// preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
// preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。
// 浏览器支持程度不同。

/*

    splitChunks: {
      // 默认是async
      chunks: 'all'
    lodash 和 jquery代码分割是第二次访问才有缓存  
    而 webpack希望我们第一次访问就能很快  lodash和jquery打包成一个文件就不能满足需求了

document.addEventListener('click', () => {
  const element = document.createElement('div');
  element.innerHTML = 'cyan baby';
  document.body.appendChild(element);
})

// 不点击页面的情况下 
// chrome ctrl+shift+p Show Coverage 点击变红录制 main.js利用率70%多
// 在Sources中看红绿色  


*/
