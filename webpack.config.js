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
      loader: 'babel-loader', 
      options: {
        presets: [['@babel/preset-env', {
          useBuiltIns: 'usage'
        }]]
      }
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



*/