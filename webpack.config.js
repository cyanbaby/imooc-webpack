const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },

  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
  },

  module: {
    rules: [{ 
      test: /\.js$/, 
      exclude: /node_modules/, 
      loader: 'babel-loader'
    },{
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 20480
        }
      }
    },{
      test: /\.scss$/,
      use: [
      'style-loader', 
      {
        loader:'css-loader',
        options: {
          importLoaders: 2
        }
      },
      'sass-loader',
      'postcss-loader'
      ]
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },{
      test: /\.(eot|ttf|woff|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },

  plugins: [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }), 
  new CleanWebpackPlugin(['dist']),
  new webpack.HotModuleReplacementPlugin()
              
  ],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}


/*
cnpm install --save-dev babel-loader @babel/core
cnpm install @babel/preset-env --save-dev


babel-loader可以传递参数
{
  presets: ["@babel/presets-env"]
}

npx webpack  OK了 但是只翻译了一部分  map函数 低版本还是不支持的,

不仅语法转换, 还需map..新特性给低版本浏览器做补充  cnpm i @babel/polyfill -S(--save)
    注意需要放在项目中 用到新特性的模块引入  比如index.js
    import "@babel/polyfill";

    const arr = [
      new Promise( () => {}),
      new Promise( () => {})
    ];

    arr.map(item => {
      console.log(item);
    })

但是index.js的main.js很大很大,  添加useBuiltIns配置就行了用到map就打包map其他的不和垫片一起打包 (promise支持ie9)
    options: {
      presets: [['@babel/preset-env', {
        useBuiltIns: 'usage'
      }]]
    }
WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.



还可以配置其他参数  浏览器兼容的
    options: {
      presets: [
        ['@babel/preset-env', {  
          targets: {
            chrome: "67"
          },
          useBuiltIns: 'usage'   // 根据业务需求注入 @babel/polyfill的涉及体积
        }]
      ]
      }

这个方案也不是万能的, 如果index.js模块  我们是要开发一个类库或者组件库  正常业务代码就按妆面的写就行了
    import "@babel/polyfill";  这样注入会污染全局变量
    cnpm i -D @babel/plugin-transform-runtime
    cnpm i -S @babel/runtime
    去掉index.jsimport和 options里的presets配置配置plugin
        "plugins": [
          ["@babel/plugin-transform-runtime", {   // 闭包注入 不污染全局
            "corejs": 2,        // 改成了2 需要 cnpm i -S @babel/runtime-corejs2
            "helpers": true,
            "regenerator": true,
            "useESModules": false
          }]
        ]
大家知道 corejs 是一个给低版本的浏览器提供接口的库，如 Promise, map, set 等。
在 babel 中你设置成 false 或者不设置，就是引入的是 corejs 中的库，
而且在全局中引入，也就是说侵入了全局的变量。


如果你的全局有一个引入，不要让引入的库影响全局，
那你就需要引把 corejs 设置成 2。：


配置多了 单独写个.babelrc 比较好  这是网上改编的，es5转es3？ promise兼容最低到ie9?

    {
      "presets": [
          ["@babel/preset-env", {
            "modules": false,
            "targets": {
              "ie": "11"
            },
            "useBuiltIns": "usage"
          }]
        ],
        "plugins": [
          ["@babel/plugin-transform-runtime",{
            "corejs": 2
          }]
        ]
    }
  
*/