// cnpm i -D mini-css-extract-plugin  不支持css模块热更新 只适合线上 dev和prod分别style lodaer prod配置相应pugin
// package.json sideEffects;  npm run build
import './style.css';
import './style1.css';
console.log('hello webpack');



/*
import './style.css';

console.log('hello webpack');

// vendors~main.chunk直接把css打包到js里了

//*/