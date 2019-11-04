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

// 使用promise要@babel/polyfill 如何没有也没有关系  .babelrc的presets @babel/preset-env 中设置了useBuiltIns: 'usage'
// 新版的babel内置了，会自动注入的

// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['cyan', 'baby'], '-');
//     return element;
//   });
// }

// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element);
//   })
// })

