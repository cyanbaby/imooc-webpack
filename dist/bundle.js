/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Content.js":
/*!************************!*\
  !*** ./src/Content.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Content() {\r\n\tvar dom = document.getElementById('root');\t\r\n\tvar header = document.createElement('div');\r\n\theader.innerHTML = 'content'\r\n\tdom.append(header);\r\n}\r\n\r\nmodule.exports = Content;\n\n//# sourceURL=webpack:///./src/Content.js?");

/***/ }),

/***/ "./src/Sidebar.js":
/*!************************!*\
  !*** ./src/Sidebar.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Sidebar() {\r\n\tvar dom = document.getElementById('root');\t\r\n\tvar header = document.createElement('div');\r\n\theader.innerHTML = 'siderbar'\r\n\tdom.append(header);\r\n}\r\n\r\nmodule.exports = Sidebar;\n\n//# sourceURL=webpack:///./src/Sidebar.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Header() {\r\n\tvar dom = document.getElementById('root');\t\r\n\tvar header = document.createElement('div');\r\n\theader.innerHTML = 'header'\r\n\tdom.append(header);\r\n}\r\n\r\nmodule.exports = Header;\r\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Header = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\r\nvar Sidebar = __webpack_require__(/*! ./Sidebar.js */ \"./src/Sidebar.js\");\r\nvar Content = __webpack_require__(/*! ./Content.js */ \"./src/Content.js\");\r\n\r\n// var dom = document.getElementById('root');\t\t\t// 写在这里会报错的哦\r\n\r\nnew Header();\r\nnew Sidebar();\r\nnew Content();\r\n\r\n/*\r\n\r\n文件目录结构一目了然   \r\n不存在index.html 中index.js顺序错误 导致bug\r\nindex.js模块把依赖的模块都导入进来 不存在了index.js的依赖问题\r\n\r\n*/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });