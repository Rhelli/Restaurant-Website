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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_font_Poppins_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./assets/font/Poppins/stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/font/Poppins/stylesheet.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_font_Poppins_stylesheet_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font: 400 16px/16px \"Poppins\", sans-serif, monospace;\n  color: #505050;\n  padding: 0;\n  margin: 0;\n}\n\n.main-container {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n  background-color: green;\n}\n\n.homepage-landing {\n  display: flex;\n  width: 95%;\n  height: 95%;\n  background-color: blue;\n}", "",{"version":3,"sources":["webpack://src/style.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;AAAF;;AAGA;;;EAGE,mBAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,oDAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;AAAF;;AAIA;EACE,aAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;AADF","sourcesContent":["@import url('./assets/font/Poppins/stylesheet.css');\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, \n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font: 400 16px/16px 'Poppins', sans-serif, monospace;\n  color: #505050;\n  padding: 0;\n  margin: 0;\n}\n\n.main-container {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n  background-color: green;\n}\n\n// HOMEPAGE ----------------------------------//\n.homepage-landing {\n  display: flex;\n  width: 95%;\n  height: 95%;\n  background-color: blue;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/font/Poppins/stylesheet.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/font/Poppins/stylesheet.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Poppins_SemiBoldItalic_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Poppins-SemiBoldItalic.woff2 */ "./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff2");
/* harmony import */ var _Poppins_SemiBoldItalic_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Poppins-SemiBoldItalic.woff */ "./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff");
/* harmony import */ var _Poppins_ThinItalic_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Poppins-ThinItalic.woff2 */ "./src/assets/font/Poppins/Poppins-ThinItalic.woff2");
/* harmony import */ var _Poppins_ThinItalic_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Poppins-ThinItalic.woff */ "./src/assets/font/Poppins/Poppins-ThinItalic.woff");
/* harmony import */ var _Poppins_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Poppins-Medium.woff2 */ "./src/assets/font/Poppins/Poppins-Medium.woff2");
/* harmony import */ var _Poppins_Medium_woff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Poppins-Medium.woff */ "./src/assets/font/Poppins/Poppins-Medium.woff");
/* harmony import */ var _Poppins_ExtraLight_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Poppins-ExtraLight.woff2 */ "./src/assets/font/Poppins/Poppins-ExtraLight.woff2");
/* harmony import */ var _Poppins_ExtraLight_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Poppins-ExtraLight.woff */ "./src/assets/font/Poppins/Poppins-ExtraLight.woff");
/* harmony import */ var _Poppins_ExtraBoldItalic_woff2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Poppins-ExtraBoldItalic.woff2 */ "./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff2");
/* harmony import */ var _Poppins_ExtraBoldItalic_woff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Poppins-ExtraBoldItalic.woff */ "./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff");
/* harmony import */ var _Poppins_Thin_woff2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Poppins-Thin.woff2 */ "./src/assets/font/Poppins/Poppins-Thin.woff2");
/* harmony import */ var _Poppins_Thin_woff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Poppins-Thin.woff */ "./src/assets/font/Poppins/Poppins-Thin.woff");
/* harmony import */ var _Poppins_BlackItalic_woff2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Poppins-BlackItalic.woff2 */ "./src/assets/font/Poppins/Poppins-BlackItalic.woff2");
/* harmony import */ var _Poppins_BlackItalic_woff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Poppins-BlackItalic.woff */ "./src/assets/font/Poppins/Poppins-BlackItalic.woff");
/* harmony import */ var _Poppins_LightItalic_woff2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Poppins-LightItalic.woff2 */ "./src/assets/font/Poppins/Poppins-LightItalic.woff2");
/* harmony import */ var _Poppins_LightItalic_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Poppins-LightItalic.woff */ "./src/assets/font/Poppins/Poppins-LightItalic.woff");
/* harmony import */ var _Poppins_Bold_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Poppins-Bold.woff2 */ "./src/assets/font/Poppins/Poppins-Bold.woff2");
/* harmony import */ var _Poppins_Bold_woff__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Poppins-Bold.woff */ "./src/assets/font/Poppins/Poppins-Bold.woff");
/* harmony import */ var _Poppins_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Poppins-ExtraBold.woff2 */ "./src/assets/font/Poppins/Poppins-ExtraBold.woff2");
/* harmony import */ var _Poppins_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Poppins-ExtraBold.woff */ "./src/assets/font/Poppins/Poppins-ExtraBold.woff");
/* harmony import */ var _Poppins_Italic_woff2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Poppins-Italic.woff2 */ "./src/assets/font/Poppins/Poppins-Italic.woff2");
/* harmony import */ var _Poppins_Italic_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Poppins-Italic.woff */ "./src/assets/font/Poppins/Poppins-Italic.woff");
/* harmony import */ var _Poppins_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Poppins-BoldItalic.woff2 */ "./src/assets/font/Poppins/Poppins-BoldItalic.woff2");
/* harmony import */ var _Poppins_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Poppins-BoldItalic.woff */ "./src/assets/font/Poppins/Poppins-BoldItalic.woff");
/* harmony import */ var _Poppins_Regular_woff2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Poppins-Regular.woff2 */ "./src/assets/font/Poppins/Poppins-Regular.woff2");
/* harmony import */ var _Poppins_Regular_woff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Poppins-Regular.woff */ "./src/assets/font/Poppins/Poppins-Regular.woff");
/* harmony import */ var _Poppins_Black_woff2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Poppins-Black.woff2 */ "./src/assets/font/Poppins/Poppins-Black.woff2");
/* harmony import */ var _Poppins_Black_woff__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Poppins-Black.woff */ "./src/assets/font/Poppins/Poppins-Black.woff");
/* harmony import */ var _Poppins_Light_woff2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Poppins-Light.woff2 */ "./src/assets/font/Poppins/Poppins-Light.woff2");
/* harmony import */ var _Poppins_Light_woff__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Poppins-Light.woff */ "./src/assets/font/Poppins/Poppins-Light.woff");
/* harmony import */ var _Poppins_ExtraLightItalic_woff2__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Poppins-ExtraLightItalic.woff2 */ "./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff2");
/* harmony import */ var _Poppins_ExtraLightItalic_woff__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Poppins-ExtraLightItalic.woff */ "./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff");
/* harmony import */ var _Poppins_MediumItalic_woff2__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Poppins-MediumItalic.woff2 */ "./src/assets/font/Poppins/Poppins-MediumItalic.woff2");
/* harmony import */ var _Poppins_MediumItalic_woff__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Poppins-MediumItalic.woff */ "./src/assets/font/Poppins/Poppins-MediumItalic.woff");
/* harmony import */ var _Poppins_SemiBold_woff2__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Poppins-SemiBold.woff2 */ "./src/assets/font/Poppins/Poppins-SemiBold.woff2");
/* harmony import */ var _Poppins_SemiBold_woff__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Poppins-SemiBold.woff */ "./src/assets/font/Poppins/Poppins-SemiBold.woff");
// Imports






































var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_SemiBoldItalic_woff2__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_SemiBoldItalic_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ThinItalic_woff2__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ThinItalic_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Medium_woff2__WEBPACK_IMPORTED_MODULE_6__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Medium_woff__WEBPACK_IMPORTED_MODULE_7__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraLight_woff2__WEBPACK_IMPORTED_MODULE_8__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraLight_woff__WEBPACK_IMPORTED_MODULE_9__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraBoldItalic_woff2__WEBPACK_IMPORTED_MODULE_10__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraBoldItalic_woff__WEBPACK_IMPORTED_MODULE_11__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Thin_woff2__WEBPACK_IMPORTED_MODULE_12__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Thin_woff__WEBPACK_IMPORTED_MODULE_13__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_BlackItalic_woff2__WEBPACK_IMPORTED_MODULE_14__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_BlackItalic_woff__WEBPACK_IMPORTED_MODULE_15__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_LightItalic_woff2__WEBPACK_IMPORTED_MODULE_16__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_LightItalic_woff__WEBPACK_IMPORTED_MODULE_17__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Bold_woff2__WEBPACK_IMPORTED_MODULE_18__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Bold_woff__WEBPACK_IMPORTED_MODULE_19__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraBold_woff2__WEBPACK_IMPORTED_MODULE_20__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_21__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Italic_woff2__WEBPACK_IMPORTED_MODULE_22__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Italic_woff__WEBPACK_IMPORTED_MODULE_23__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_24__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_25__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Regular_woff2__WEBPACK_IMPORTED_MODULE_26__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Regular_woff__WEBPACK_IMPORTED_MODULE_27__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Black_woff2__WEBPACK_IMPORTED_MODULE_28__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Black_woff__WEBPACK_IMPORTED_MODULE_29__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Light_woff2__WEBPACK_IMPORTED_MODULE_30__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_Light_woff__WEBPACK_IMPORTED_MODULE_31__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraLightItalic_woff2__WEBPACK_IMPORTED_MODULE_32__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_ExtraLightItalic_woff__WEBPACK_IMPORTED_MODULE_33__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_MediumItalic_woff2__WEBPACK_IMPORTED_MODULE_34__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_MediumItalic_woff__WEBPACK_IMPORTED_MODULE_35__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_SemiBold_woff2__WEBPACK_IMPORTED_MODULE_36__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Poppins_SemiBold_woff__WEBPACK_IMPORTED_MODULE_37__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: 600;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n    font-weight: 100;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff');\n    font-weight: 200;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format('woff');\n    font-weight: 800;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format('woff');\n    font-weight: 900;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format('woff');\n    font-weight: 300;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format('woff');\n    font-weight: 800;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format('woff');\n    font-weight: bold;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format('woff');\n    font-weight: 900;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format('woff');\n    font-weight: 200;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ") format('woff');\n    font-weight: 500;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ") format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\n", "",{"version":3,"sources":["webpack://src/assets/font/Poppins/stylesheet.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB;8DACqD;IACrD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;8DACiD;IACjD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;8DAC6C;IAC7C,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;8DACiD;IACjD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;8DACsD;IACtD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC2C;IAC3C,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACkD;IAClD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACkD;IAClD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC2C;IAC3C,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACgD;IAChD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC6C;IAC7C,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACiD;IACjD,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC8C;IAC9C,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC4C;IAC5C,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACuD;IACvD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DACmD;IACnD,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB;+DAC+C;IAC/C,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-SemiBoldItalic.woff2') format('woff2'),\n        url('Poppins-SemiBoldItalic.woff') format('woff');\n    font-weight: 600;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-ThinItalic.woff2') format('woff2'),\n        url('Poppins-ThinItalic.woff') format('woff');\n    font-weight: 100;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Medium.woff2') format('woff2'),\n        url('Poppins-Medium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-ExtraLight.woff2') format('woff2'),\n        url('Poppins-ExtraLight.woff') format('woff');\n    font-weight: 200;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-ExtraBoldItalic.woff2') format('woff2'),\n        url('Poppins-ExtraBoldItalic.woff') format('woff');\n    font-weight: 800;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Thin.woff2') format('woff2'),\n        url('Poppins-Thin.woff') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-BlackItalic.woff2') format('woff2'),\n        url('Poppins-BlackItalic.woff') format('woff');\n    font-weight: 900;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-LightItalic.woff2') format('woff2'),\n        url('Poppins-LightItalic.woff') format('woff');\n    font-weight: 300;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Bold.woff2') format('woff2'),\n        url('Poppins-Bold.woff') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-ExtraBold.woff2') format('woff2'),\n        url('Poppins-ExtraBold.woff') format('woff');\n    font-weight: 800;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Italic.woff2') format('woff2'),\n        url('Poppins-Italic.woff') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-BoldItalic.woff2') format('woff2'),\n        url('Poppins-BoldItalic.woff') format('woff');\n    font-weight: bold;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Regular.woff2') format('woff2'),\n        url('Poppins-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Black.woff2') format('woff2'),\n        url('Poppins-Black.woff') format('woff');\n    font-weight: 900;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-Light.woff2') format('woff2'),\n        url('Poppins-Light.woff') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-ExtraLightItalic.woff2') format('woff2'),\n        url('Poppins-ExtraLightItalic.woff') format('woff');\n    font-weight: 200;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-MediumItalic.woff2') format('woff2'),\n        url('Poppins-MediumItalic.woff') format('woff');\n    font-weight: 500;\n    font-style: italic;\n    font-display: swap;\n}\n\n@font-face {\n    font-family: 'Poppins';\n    src: url('Poppins-SemiBold.woff2') format('woff2'),\n        url('Poppins-SemiBold.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Black.woff":
/*!****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Black.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d04762a4d2605958eb65d466eceb723.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Black.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Black.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f8a4a5f1e0fe91ec9f75686cecc5e38.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-BlackItalic.woff":
/*!**********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-BlackItalic.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5853a96ec18aa08b3a15baac5f4dc84c.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-BlackItalic.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-BlackItalic.woff2 ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8b2173d8ca7218c9aa98ab930d41fb56.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Bold.woff":
/*!***************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Bold.woff ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a6b628bdef91e927b77c91b4344dd19e.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Bold.woff2":
/*!****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Bold.woff2 ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dd24d10e037690f2bdcde5c8f5cdeca4.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-BoldItalic.woff":
/*!*********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-BoldItalic.woff ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "066192b3e079bf989a2823a792011af7.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-BoldItalic.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-BoldItalic.woff2 ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "18770f85e0c23fcc28224ecf92a3c63b.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraBold.woff":
/*!********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraBold.woff ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ccb9c2051b79f6df27a2522098510de9.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraBold.woff2":
/*!*********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraBold.woff2 ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b57f3aae2d78f5ee992e14ea4cbbff8.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff":
/*!**************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a0eb757c1156a66706262ef903778b52.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraBoldItalic.woff2 ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "971d0eac32fdff44ef0a56e936570dba.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraLight.woff":
/*!*********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraLight.woff ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "52747ba12744d6335cc94c638928eef9.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraLight.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraLight.woff2 ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a5423f83d49c5ba6eeacd114d5aff84.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff":
/*!***************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7b781bcc5774b4ca3aefaaee16a8a6a7.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff2":
/*!****************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ExtraLightItalic.woff2 ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "55ba016002be15c32078cd5c38a9a11f.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Italic.woff":
/*!*****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Italic.woff ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dce4482653df21326fb3895d74b8ff27.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Italic.woff2":
/*!******************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Italic.woff2 ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f932365bae7a67562d5079577cb2d1c2.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Light.woff":
/*!****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Light.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6f5b7a1c94cb6419bec4ea996d1aface.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Light.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Light.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9bec05ab7f83d34eb90510bcb5df2395.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-LightItalic.woff":
/*!**********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-LightItalic.woff ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cbc254035fd2db12340f5666f24a2658.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-LightItalic.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-LightItalic.woff2 ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f8fc4fd3d2ad4a00a9a20be1201e0164.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Medium.woff":
/*!*****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Medium.woff ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7e588a26bdac2428f24072f0657a9af8.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Medium.woff2":
/*!******************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Medium.woff2 ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "563f976db73ca07d8fc312f634845581.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-MediumItalic.woff":
/*!***********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-MediumItalic.woff ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "38bd2f9c930011bc0e4f68977384e162.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-MediumItalic.woff2":
/*!************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-MediumItalic.woff2 ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de07f277b373e75a16b2ac37309623a5.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Regular.woff":
/*!******************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Regular.woff ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "387f9003f984ef1cec60ee0a258d8e31.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Regular.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Regular.woff2 ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ad19729d6a0511212493d7a9b994921e.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-SemiBold.woff":
/*!*******************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-SemiBold.woff ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "71da8e4f0d76b718897c2bd4f4edf1f5.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-SemiBold.woff2":
/*!********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-SemiBold.woff2 ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3c3f3613b59d581739fc53626c9de259.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff":
/*!*************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ae7a11bcc58ca2e84f43513dd1bffb66.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff2":
/*!**************************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-SemiBoldItalic.woff2 ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6ad14e1bba33d088176b2731dcbe1b00.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Thin.woff":
/*!***************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Thin.woff ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "654968a8c2ee9e7c8bb6ea28f727a412.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-Thin.woff2":
/*!****************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-Thin.woff2 ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "852bafc278ec1d018963fee2e1d8b8bd.woff2");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ThinItalic.woff":
/*!*********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ThinItalic.woff ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed0c900126e6bfcf463c1293ee260137.woff");

/***/ }),

/***/ "./src/assets/font/Poppins/Poppins-ThinItalic.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/font/Poppins/Poppins-ThinItalic.woff2 ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0996aa024c3d73abd3bb8fc1068411a6.woff2");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepageLanding; });
function homepageLanding(container) {
  const landingContainer = document.createElement('div');
  landingContainer.id = 'landingContainer';
  landingContainer.classList.add('landing-container');
  container.appendChild(landingContainer);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "./src/loader.js");



document.body.appendChild(Object(_loader__WEBPACK_IMPORTED_MODULE_1__["default"])());


/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mainPageContainer; });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


function mainPageContainer() {
  const element = document.createElement('div');
  element.id = 'content';
  element.classList.add('main-container');
  return element;
}



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvc3R5bGVzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJsYWNrLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1CbGFjay53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJsYWNrSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1CbGFja0l0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1Cb2xkSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1Cb2xkSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUJvbGRJdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhTGlnaHQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhTGlnaHQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1JdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1MaWdodC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1MaWdodEl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1NZWRpdW0ud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bS53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTWVkaXVtSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZEl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVRoaW4ud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVRoaW4ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1UaGluSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1UaGluSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHls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QSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNtQjs7QUFFekMsMEJBQTBCLHVEQUFpQjs7Ozs7Ozs7Ozs7OztBQ0gzQztBQUFBO0FBQUE7QUFBcUM7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsbU1BQStGOztBQUVqSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2ZvbnQvUG9wcGlucy9zdHlsZXNoZWV0LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250OiA0MDAgMTZweC8xNnB4IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6ICM1MDUwNTA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5ob21lcGFnZS1sYW5kaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtBQUFGOztBQUdBOzs7RUFHRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9hc3NldHMvZm9udC9Qb3BwaW5zL3N0eWxlc2hlZXQuY3NzJyk7XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLCBcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udDogNDAwIDE2cHgvMTZweCAnUG9wcGlucycsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjNTA1MDUwO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4vLyBIT01FUEFHRSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cXG4uaG9tZXBhZ2UtbGFuZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogOTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vUG9wcGlucy1TZW1pQm9sZEl0YWxpYy53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL1BvcHBpbnMtU2VtaUJvbGRJdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL1BvcHBpbnMtVGhpbkl0YWxpYy53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuL1BvcHBpbnMtVGhpbkl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4vUG9wcGlucy1NZWRpdW0ud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyBmcm9tIFwiLi9Qb3BwaW5zLU1lZGl1bS53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUxpZ2h0LndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUxpZ2h0LndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fIGZyb20gXCIuL1BvcHBpbnMtRXh0cmFCb2xkSXRhbGljLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gZnJvbSBcIi4vUG9wcGlucy1UaGluLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fIGZyb20gXCIuL1BvcHBpbnMtVGhpbi53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fIGZyb20gXCIuL1BvcHBpbnMtQmxhY2tJdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTNfX18gZnJvbSBcIi4vUG9wcGlucy1CbGFja0l0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fIGZyb20gXCIuL1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTVfX18gZnJvbSBcIi4vUG9wcGlucy1MaWdodEl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fIGZyb20gXCIuL1BvcHBpbnMtQm9sZC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyBmcm9tIFwiLi9Qb3BwaW5zLUJvbGQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyBmcm9tIFwiLi9Qb3BwaW5zLUV4dHJhQm9sZC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fIGZyb20gXCIuL1BvcHBpbnMtSXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fIGZyb20gXCIuL1BvcHBpbnMtSXRhbGljLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjJfX18gZnJvbSBcIi4vUG9wcGlucy1Cb2xkSXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fIGZyb20gXCIuL1BvcHBpbnMtQm9sZEl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fIGZyb20gXCIuL1BvcHBpbnMtUmVndWxhci53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyBmcm9tIFwiLi9Qb3BwaW5zLVJlZ3VsYXIud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyBmcm9tIFwiLi9Qb3BwaW5zLUJsYWNrLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fIGZyb20gXCIuL1BvcHBpbnMtQmxhY2sud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUxpZ2h0LndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fIGZyb20gXCIuL1BvcHBpbnMtTGlnaHQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUV4dHJhTGlnaHRJdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzFfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzJfX18gZnJvbSBcIi4vUG9wcGlucy1NZWRpdW1JdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzNfX18gZnJvbSBcIi4vUG9wcGlucy1NZWRpdW1JdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyBmcm9tIFwiLi9Qb3BwaW5zLVNlbWlCb2xkLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fIGZyb20gXCIuL1BvcHBpbnMtU2VtaUJvbGQud29mZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF85X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzExX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI1X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI2X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI3X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI4X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzI5X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMwX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM0X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzM1X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzExX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE2X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE3X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE4X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzE5X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI2X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI3X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzMzX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvc3R5bGVzaGVldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7OERBQ3FEO0lBQ3JELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOzhEQUNpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qjs4REFDNkM7SUFDN0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7OERBQ2lEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOzhEQUNzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDMkM7SUFDM0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ2tEO0lBQ2xELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUNrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ2dEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUM2QztJQUM3QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDaUQ7SUFDakQsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQzhDO0lBQzlDLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUM0QztJQUM1QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ3VEO0lBQ3ZELGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUNtRDtJQUNuRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDK0M7SUFDL0MsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLVNlbWlCb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLVNlbWlCb2xkSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1UaGluSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLVRoaW5JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUV4dHJhTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtRXh0cmFMaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtRXh0cmFCb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtVGhpbi53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1UaGluLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1CbGFja0l0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1CbGFja0l0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUV4dHJhQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1FeHRyYUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUJvbGRJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtQmxhY2sud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtQmxhY2sud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUV4dHJhTGlnaHRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLU1lZGl1bUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1NZWRpdW1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLVNlbWlCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWQwNDc2MmE0ZDI2MDU5NThlYjY1ZDQ2NmVjZWI3MjMud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZjhhNGE1ZjFlMGZlOTFlYzlmNzU2ODZjZWNjNWUzOC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ODUzYTk2ZWMxOGFhMDhiM2ExNWJhYWM1ZjRkYzg0Yy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhiMjE3M2Q4Y2E3MjE4YzlhYTk4YWI5MzBkNDFmYjU2LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE2YjYyOGJkZWY5MWU5MjdiNzdjOTFiNDM0NGRkMTllLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGQyNGQxMGUwMzc2OTBmMmJkY2RlNWM4ZjVjZGVjYTQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDY2MTkyYjNlMDc5YmY5ODlhMjgyM2E3OTIwMTFhZjcud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxODc3MGY4NWUwYzIzZmNjMjgyMjRlY2Y5MmEzYzYzYi53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjY2I5YzIwNTFiNzlmNmRmMjdhMjUyMjA5ODUxMGRlOS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjViNTdmM2FhZTJkNzhmNWVlOTkyZTE0ZWE0Y2JiZmY4LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwZWI3NTdjMTE1NmE2NjcwNjI2MmVmOTAzNzc4YjUyLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTcxZDBlYWMzMmZkZmY0NGVmMGE1NmU5MzY1NzBkYmEud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTI3NDdiYTEyNzQ0ZDYzMzVjYzk0YzYzODkyOGVlZjkud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YTU0MjNmODNkNDljNWJhNmVlYWNkMTE0ZDVhZmY4NC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3Yjc4MWJjYzU3NzRiNGNhM2FlZmFhZWUxNmE4YTZhNy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU1YmEwMTYwMDJiZTE1YzMyMDc4Y2Q1YzM4YTlhMTFmLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRjZTQ0ODI2NTNkZjIxMzI2ZmIzODk1ZDc0YjhmZjI3LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjkzMjM2NWJhZTdhNjc1NjJkNTA3OTU3N2NiMmQxYzIud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmY1YjdhMWM5NGNiNjQxOWJlYzRlYTk5NmQxYWZhY2Uud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5YmVjMDVhYjdmODNkMzRlYjkwNTEwYmNiNWRmMjM5NS53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYmMyNTQwMzVmZDJkYjEyMzQwZjU2NjZmMjRhMjY1OC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY4ZmM0ZmQzZDJhZDRhMDBhOWEyMGJlMTIwMWUwMTY0LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlNTg4YTI2YmRhYzI0MjhmMjQwNzJmMDY1N2E5YWY4LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTYzZjk3NmRiNzNjYTA3ZDhmYzMxMmY2MzQ4NDU1ODEud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzhiZDJmOWM5MzAwMTFiYzBlNGY2ODk3NzM4NGUxNjIud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZTA3ZjI3N2IzNzNlNzVhMTZiMmFjMzczMDk2MjNhNS53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzODdmOTAwM2Y5ODRlZjFjZWM2MGVlMGEyNThkOGUzMS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFkMTk3MjlkNmEwNTExMjEyNDkzZDdhOWI5OTQ5MjFlLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcxZGE4ZTRmMGQ3NmI3MTg4OTdjMmJkNGY0ZWRmMWY1LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2MzZjM2MTNiNTlkNTgxNzM5ZmM1MzYyNmM5ZGUyNTkud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWU3YTExYmNjNThjYTJlODRmNDM1MTNkZDFiZmZiNjYud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2YWQxNGUxYmJhMzNkMDg4MTc2YjI3MzFkY2JlMWIwMC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NTQ5NjhhOGMyZWU5ZTdjOGJiNmVhMjhmNzI3YTQxMi53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg1MmJhZmMyNzhlYzFkMDE4OTYzZmVlMmUxZDhiOGJkLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVkMGM5MDAxMjZlNmJmY2Y0NjNjMTI5M2VlMjYwMTM3LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDk5NmFhMDI0YzNkNzNhYmQzYmI4ZmMxMDY4NDExYTYud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZUxhbmRpbmcoY29udGFpbmVyKSB7XG4gIGNvbnN0IGxhbmRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFuZGluZ0NvbnRhaW5lci5pZCA9ICdsYW5kaW5nQ29udGFpbmVyJztcbiAgbGFuZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsYW5kaW5nLWNvbnRhaW5lcicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFuZGluZ0NvbnRhaW5lcik7XG59IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IG1haW5QYWdlQ29udGFpbmVyIGZyb20gJy4vbG9hZGVyJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluUGFnZUNvbnRhaW5lcigpKTtcbiIsImltcG9ydCBob21lcGFnZUxhbmRpbmcgZnJvbSAnLi9ob21lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpblBhZ2VDb250YWluZXIoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWxlbWVudC5pZCA9ICdjb250ZW50JztcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9