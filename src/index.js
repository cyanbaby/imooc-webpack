// es7异步函数
async function getComponent() {
  const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');

  const element = document.createElement('div');
  element.innerHTML = _.join(['cyan', 'baby'], '-');

  return element;

}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element);
  })
})

// 如今index.js生成了两个js 文件 main.js和vendors~lodash.js分别就是一个Chunk CMD可以看到ChunkName
// 回到最初 我们splitChunks里就配置了一个chuns:all其他的全是缺省; 默认项目
// 其他全部默认就可以了