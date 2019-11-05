(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('this is Cyan');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('service-worker registed');
    }).catch(error => {
      console.log('service-worker register error');
    });
  });
} // PWA 实现192.168.1.101:8080/index.html 关闭服务之后成功访问

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.fab754fbe4739bff2b64.js.map