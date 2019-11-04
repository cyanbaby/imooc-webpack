/*
// bb讲师表演代码，没什么卵用的
// import a from 'a';    // a模块又引入b  
// import b from 'b';



// 如果a符合default分组 a被打包进 common.js, a中引入了b b也应该打包进common.js
// 但是如果default配置了 reuseExistingChunk: true,   
// 它会去查找 之前已经把b模块已经被引入过,已经放到了某个地方, 现在a中引入的b就不会打包进common.js中了  会去复用

*/