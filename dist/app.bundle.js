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
___CSS_LOADER_EXPORT___.push([module.i, "html {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font: 400 16px/16px \"Poppins\", sans-serif, monospace;\n  color: #505050;\n  padding: 0;\n  margin: 0;\n}\n\n.main-container {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n  background-color: green;\n}\n\n.navbar-container {\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: rgba(255, 255, 255, 0.8);\n  height: 65px;\n  width: 100%;\n  padding: 5px 15px;\n}\n.navbar-container .nav-logo-container {\n  height: 100%;\n  width: auto;\n  margin-right: auto;\n}\n.navbar-container .nav-logo-container .nav-logo {\n  height: 55px;\n  width: auto;\n  border-radius: 50%;\n  border: 3px solid #BFB58B;\n}\n.navbar-container .menu-tab,\n.navbar-container .delivery-tab,\n.navbar-container .about-tab {\n  display: block;\n  width: auto;\n  height: 100%;\n  padding: 0 30px;\n}\n.navbar-container .menu-tab h3,\n.navbar-container .delivery-tab h3,\n.navbar-container .about-tab h3 {\n  font-weight: 200;\n  font-size: 20px;\n}\n\n.homepage-landing {\n  display: flex;\n  width: 95%;\n  height: 95%;\n  background-color: blue;\n}", "",{"version":3,"sources":["webpack://src/style.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;AAAF;;AAGA;;;EAGE,mBAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,oDAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;AAAF;;AAIA;EACE,aAAA;EACA,qBAAA;EACA,0CAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;AADF;AAGE;EACE,YAAA;EACA,WAAA;EACA,kBAAA;AADJ;AAEI;EACE,YAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;AAAN;AAIE;;;EAGE,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AAFJ;AAII;;;EACE,gBAAA;EACA,eAAA;AAAN;;AAMA;EACE,aAAA;EACA,UAAA;EACA,WAAA;EACA,sBAAA;AAHF","sourcesContent":["@import url('./assets/font/Poppins/stylesheet.css');\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, \n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font: 400 16px/16px 'Poppins', sans-serif, monospace;\n  color: #505050;\n  padding: 0;\n  margin: 0;\n}\n\n.main-container {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  justify-content: center;\n  background-color: green;\n}\n\n// NAVBAR CONTAINER --------------------------//\n.navbar-container {\n  display: flex;\n  flex-flow: row nowrap;\n  background-color: rgba(256, 256, 256, 0.8);\n  height: 65px;\n  width: 100%;\n  padding: 5px 15px;\n\n  .nav-logo-container {\n    height: 100%;\n    width: auto;\n    margin-right: auto;\n    .nav-logo {\n      height: 55px;\n      width: auto;\n      border-radius: 50%;\n      border: 3px solid #BFB58B;\n    }\n  }\n\n  .menu-tab,\n  .delivery-tab,\n  .about-tab {\n    display: block;\n    width: auto;\n    height: 100%;\n    padding: 0 30px;\n\n    h3 {\n      font-weight: 200;\n      font-size: 20px;\n    }\n  }\n}\n\n// HOMEPAGE ----------------------------------//\n.homepage-landing {\n  display: flex;\n  width: 95%;\n  height: 95%;\n  background-color: blue;\n}"],"sourceRoot":""}]);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepageLandingContainer; });
function homepageLandingContainer() {
  const landingContainer = document.createElement('div');
  landingContainer.id = 'landingContainer';
  landingContainer.classList.add('landing-container');
  return landingContainer;
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
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



function mainPageContainer() {
  const mainContainer = document.createElement('div');
  mainContainer.id = 'content';
  mainContainer.classList.add('main-container');
  mainContainer.appendChild(Object(_nav__WEBPACK_IMPORTED_MODULE_0__["default"])());
  mainContainer.appendChild(Object(_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  return mainContainer;
}


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateNavbar; });
function generateNavbar() {
  let navbarContainer = document.createElement('div');

  let logoContainer = document.createElement('div');
  logoContainer.classList.add('nav-logo-container');
  let logo = document.createElement('img');
  logo.classList.add('nav-logo');
  logo.src = '../src/assets/img/icon.png';
  logoContainer.appendChild(logo);
  navbarContainer.appendChild(logoContainer);

  navbarContainer.id = 'navbarContainer';
  navbarContainer.classList.add('navbar-container');

  let tabClass = ['menu-tab', 'delivery-tab', 'about-tab'];
  let tabName = ['Menu', 'Delivery', 'About Us'];

  for (let i = 0; i < 3; i++) {
    let div = document.createElement('div');
    div.classList.add(tabClass[i]);
    let tabText = document.createElement('h3');
    tabText.innerHTML = tabName[i];
    div.appendChild(tabText);
    navbarContainer.appendChild(div);
  }
  return navbarContainer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvc3R5bGVzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJsYWNrLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1CbGFjay53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJsYWNrSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1CbGFja0l0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1Cb2xkSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1Cb2xkSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtRXh0cmFCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUJvbGQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUJvbGRJdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhTGlnaHQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLUV4dHJhTGlnaHQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1JdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1MaWdodC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1MaWdodEl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1NZWRpdW0ud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bS53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLU1lZGl1bUl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtTWVkaXVtSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1TZW1pQm9sZEl0YWxpYy53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVRoaW4ud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnQvUG9wcGlucy9Qb3BwaW5zLVRoaW4ud29mZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1UaGluSXRhbGljLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250L1BvcHBpbnMvUG9wcGlucy1UaGluSXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXYu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Ozs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBZSxvRkFBdUIsMENBQTBDLEU7Ozs7Ozs7Ozs7OztBQ0FoRjtBQUFlLG9GQUF1QiwyQ0FBMkMsRTs7Ozs7Ozs7Ozs7O0FDQWpGO0FBQWUsb0ZBQXVCLDBDQUEwQyxFOzs7Ozs7Ozs7Ozs7QUNBaEY7QUFBZSxvRkFBdUIsMkNBQTJDLEU7Ozs7Ozs7Ozs7OztBQ0FqRjtBQUFlLG9GQUF1QiwwQ0FBMEMsRTs7Ozs7Ozs7Ozs7O0FDQWhGO0FBQWUsb0ZBQXVCLDJDQUEyQyxFOzs7Ozs7Ozs7Ozs7QUNBakY7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNtQjs7QUFFekMsMEJBQTBCLHVEQUFpQjs7Ozs7Ozs7Ozs7OztBQ0gzQztBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNXOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBYztBQUMxQyw0QkFBNEIscURBQXdCO0FBQ3BEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDMUJBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsbU1BQStGOztBQUVqSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzL2ZvbnQvUG9wcGlucy9zdHlsZXNoZWV0LmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250OiA0MDAgMTZweC8xNnB4IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcbiAgY29sb3I6ICM1MDUwNTA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5uYXZiYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG4ubmF2YmFyLWNvbnRhaW5lciAubmF2LWxvZ28tY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubmF2YmFyLWNvbnRhaW5lciAubmF2LWxvZ28tY29udGFpbmVyIC5uYXYtbG9nbyB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICB3aWR0aDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNCRkI1OEI7XFxufVxcbi5uYXZiYXItY29udGFpbmVyIC5tZW51LXRhYixcXG4ubmF2YmFyLWNvbnRhaW5lciAuZGVsaXZlcnktdGFiLFxcbi5uYXZiYXItY29udGFpbmVyIC5hYm91dC10YWIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG59XFxuLm5hdmJhci1jb250YWluZXIgLm1lbnUtdGFiIGgzLFxcbi5uYXZiYXItY29udGFpbmVyIC5kZWxpdmVyeS10YWIgaDMsXFxuLm5hdmJhci1jb250YWluZXIgLmFib3V0LXRhYiBoMyB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaG9tZXBhZ2UtbGFuZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogOTUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7QUFBRjs7QUFHQTs7O0VBR0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFOO0FBSUU7OztFQUdFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFGSjtBQUlJOzs7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBTjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBSEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJy4vYXNzZXRzL2ZvbnQvUG9wcGlucy9zdHlsZXNoZWV0LmNzcycpO1xcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQ6IDQwMCAxNnB4LzE2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7XFxuICBjb2xvcjogIzUwNTA1MDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLy8gTkFWQkFSIENPTlRBSU5FUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxuLm5hdmJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LCAyNTYsIDI1NiwgMC44KTtcXG4gIGhlaWdodDogNjVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuXFxuICAubmF2LWxvZ28tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAubmF2LWxvZ28ge1xcbiAgICAgIGhlaWdodDogNTVweDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI0JGQjU4QjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1lbnUtdGFiLFxcbiAgLmRlbGl2ZXJ5LXRhYixcXG4gIC5hYm91dC10YWIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcblxcbiAgICBoMyB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gSE9NRVBBR0UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXFxuLmhvbWVwYWdlLWxhbmRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL1BvcHBpbnMtU2VtaUJvbGRJdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9Qb3BwaW5zLVNlbWlCb2xkSXRhbGljLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9Qb3BwaW5zLVRoaW5JdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi9Qb3BwaW5zLVRoaW5JdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fIGZyb20gXCIuL1BvcHBpbnMtTWVkaXVtLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gZnJvbSBcIi4vUG9wcGlucy1NZWRpdW0ud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fIGZyb20gXCIuL1BvcHBpbnMtRXh0cmFMaWdodC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fIGZyb20gXCIuL1BvcHBpbnMtRXh0cmFMaWdodC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUJvbGRJdGFsaWMud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyBmcm9tIFwiLi9Qb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fIGZyb20gXCIuL1BvcHBpbnMtVGhpbi53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyBmcm9tIFwiLi9Qb3BwaW5zLVRoaW4ud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyBmcm9tIFwiLi9Qb3BwaW5zLUJsYWNrSXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEzX19fIGZyb20gXCIuL1BvcHBpbnMtQmxhY2tJdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUxpZ2h0SXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzE1X19fIGZyb20gXCIuL1BvcHBpbnMtTGlnaHRJdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyBmcm9tIFwiLi9Qb3BwaW5zLUJvbGQud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTdfX18gZnJvbSBcIi4vUG9wcGlucy1Cb2xkLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMThfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUJvbGQud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTlfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUJvbGQud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyBmcm9tIFwiLi9Qb3BwaW5zLUl0YWxpYy53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyBmcm9tIFwiLi9Qb3BwaW5zLUl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzIyX19fIGZyb20gXCIuL1BvcHBpbnMtQm9sZEl0YWxpYy53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyBmcm9tIFwiLi9Qb3BwaW5zLUJvbGRJdGFsaWMud29mZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyBmcm9tIFwiLi9Qb3BwaW5zLVJlZ3VsYXIud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjVfX18gZnJvbSBcIi4vUG9wcGlucy1SZWd1bGFyLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjZfX18gZnJvbSBcIi4vUG9wcGlucy1CbGFjay53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyBmcm9tIFwiLi9Qb3BwaW5zLUJsYWNrLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMjhfX18gZnJvbSBcIi4vUG9wcGlucy1MaWdodC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyBmcm9tIFwiLi9Qb3BwaW5zLUxpZ2h0LndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzBfX18gZnJvbSBcIi4vUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMxX19fIGZyb20gXCIuL1BvcHBpbnMtRXh0cmFMaWdodEl0YWxpYy53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMyX19fIGZyb20gXCIuL1BvcHBpbnMtTWVkaXVtSXRhbGljLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzMzX19fIGZyb20gXCIuL1BvcHBpbnMtTWVkaXVtSXRhbGljLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMzRfX18gZnJvbSBcIi4vUG9wcGlucy1TZW1pQm9sZC53b2ZmMlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyBmcm9tIFwiLi9Qb3BwaW5zLVNlbWlCb2xkLndvZmZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMThfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjlfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEyX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEzX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xNl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xOV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIwX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzIxX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjJfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjNfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjRfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMjVfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yNl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yN19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI4X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzI5X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zM19fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM0X19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzM1X19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9hc3NldHMvZm9udC9Qb3BwaW5zL3N0eWxlc2hlZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCOzhEQUNxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qjs4REFDaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7OERBQzZDO0lBQzdDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOzhEQUNpRDtJQUNqRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qjs4REFDc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQzJDO0lBQzNDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUNrRDtJQUNsRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDa0Q7SUFDbEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQzJDO0lBQzNDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUNnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDNkM7SUFDN0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQ2lEO0lBQ2pELGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUM4QztJQUM5QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQzRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCOytEQUN1RDtJQUN2RCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QjsrREFDbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7K0RBQytDO0lBQy9DLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1TZW1pQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1TZW1pQm9sZEl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtVGhpbkl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1UaGluSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1FeHRyYUxpZ2h0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUV4dHJhTGlnaHQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUV4dHJhQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1FeHRyYUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLVRoaW4ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtVGhpbi53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtQmxhY2tJdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtQmxhY2tJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUxpZ2h0SXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUxpZ2h0SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1FeHRyYUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtRXh0cmFCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1Cb2xkSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICAgIHNyYzogdXJsKCdQb3BwaW5zLUJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCdQb3BwaW5zLUJsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1MaWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gICAgc3JjOiB1cmwoJ1BvcHBpbnMtRXh0cmFMaWdodEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1FeHRyYUxpZ2h0SXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1NZWRpdW1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJ1BvcHBpbnMtTWVkaXVtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgICBzcmM6IHVybCgnUG9wcGlucy1TZW1pQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnUG9wcGlucy1TZW1pQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVkMDQ3NjJhNGQyNjA1OTU4ZWI2NWQ0NjZlY2ViNzIzLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWY4YTRhNWYxZTBmZTkxZWM5Zjc1Njg2Y2VjYzVlMzgud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTg1M2E5NmVjMThhYTA4YjNhMTViYWFjNWY0ZGM4NGMud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YjIxNzNkOGNhNzIxOGM5YWE5OGFiOTMwZDQxZmI1Ni53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNmI2MjhiZGVmOTFlOTI3Yjc3YzkxYjQzNDRkZDE5ZS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRkMjRkMTBlMDM3NjkwZjJiZGNkZTVjOGY1Y2RlY2E0LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA2NjE5MmIzZTA3OWJmOTg5YTI4MjNhNzkyMDExYWY3LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTg3NzBmODVlMGMyM2ZjYzI4MjI0ZWNmOTJhM2M2M2Iud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NiOWMyMDUxYjc5ZjZkZjI3YTI1MjIwOTg1MTBkZTkud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1YjU3ZjNhYWUyZDc4ZjVlZTk5MmUxNGVhNGNiYmZmOC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMGViNzU3YzExNTZhNjY3MDYyNjJlZjkwMzc3OGI1Mi53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk3MWQwZWFjMzJmZGZmNDRlZjBhNTZlOTM2NTcwZGJhLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUyNzQ3YmExMjc0NGQ2MzM1Y2M5NGM2Mzg5MjhlZWY5LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGE1NDIzZjgzZDQ5YzViYTZlZWFjZDExNGQ1YWZmODQud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2I3ODFiY2M1Nzc0YjRjYTNhZWZhYWVlMTZhOGE2YTcud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NWJhMDE2MDAyYmUxNWMzMjA3OGNkNWMzOGE5YTExZi53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkY2U0NDgyNjUzZGYyMTMyNmZiMzg5NWQ3NGI4ZmYyNy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY5MzIzNjViYWU3YTY3NTYyZDUwNzk1NzdjYjJkMWMyLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZmNWI3YTFjOTRjYjY0MTliZWM0ZWE5OTZkMWFmYWNlLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWJlYzA1YWI3ZjgzZDM0ZWI5MDUxMGJjYjVkZjIzOTUud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2JjMjU0MDM1ZmQyZGIxMjM0MGY1NjY2ZjI0YTI2NTgud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmOGZjNGZkM2QyYWQ0YTAwYTlhMjBiZTEyMDFlMDE2NC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZTU4OGEyNmJkYWMyNDI4ZjI0MDcyZjA2NTdhOWFmOC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU2M2Y5NzZkYjczY2EwN2Q4ZmMzMTJmNjM0ODQ1NTgxLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM4YmQyZjljOTMwMDExYmMwZTRmNjg5NzczODRlMTYyLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGUwN2YyNzdiMzczZTc1YTE2YjJhYzM3MzA5NjIzYTUud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzg3ZjkwMDNmOTg0ZWYxY2VjNjBlZTBhMjU4ZDhlMzEud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZDE5NzI5ZDZhMDUxMTIxMjQ5M2Q3YTliOTk0OTIxZS53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MWRhOGU0ZjBkNzZiNzE4ODk3YzJiZDRmNGVkZjFmNS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNjM2YzNjEzYjU5ZDU4MTczOWZjNTM2MjZjOWRlMjU5LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFlN2ExMWJjYzU4Y2EyZTg0ZjQzNTEzZGQxYmZmYjY2LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmFkMTRlMWJiYTMzZDA4ODE3NmIyNzMxZGNiZTFiMDAud29mZjJcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjU0OTY4YThjMmVlOWU3YzhiYjZlYTI4ZjcyN2E0MTIud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NTJiYWZjMjc4ZWMxZDAxODk2M2ZlZTJlMWQ4YjhiZC53b2ZmMlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlZDBjOTAwMTI2ZTZiZmNmNDYzYzEyOTNlZTI2MDEzNy53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5OTZhYTAyNGMzZDczYWJkM2JiOGZjMTA2ODQxMWE2LndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2VMYW5kaW5nQ29udGFpbmVyKCkge1xuICBjb25zdCBsYW5kaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhbmRpbmdDb250YWluZXIuaWQgPSAnbGFuZGluZ0NvbnRhaW5lcic7XG4gIGxhbmRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGFuZGluZy1jb250YWluZXInKTtcbiAgcmV0dXJuIGxhbmRpbmdDb250YWluZXI7XG59XG5cbiIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBtYWluUGFnZUNvbnRhaW5lciBmcm9tICcuL2xvYWRlcic7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpblBhZ2VDb250YWluZXIoKSk7XG4iLCJpbXBvcnQgZ2VuZXJhdGVOYXZiYXIgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IGhvbWVwYWdlTGFuZGluZ0NvbnRhaW5lciBmcm9tICcuL2hvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWluUGFnZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluQ29udGFpbmVyLmlkID0gJ2NvbnRlbnQnO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVOYXZiYXIoKSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZXBhZ2VMYW5kaW5nQ29udGFpbmVyKCkpO1xuICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTmF2YmFyKCkge1xuICBsZXQgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtbG9nby1jb250YWluZXInKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCduYXYtbG9nbycpO1xuICBsb2dvLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ltZy9pY29uLnBuZyc7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIG5hdmJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICBuYXZiYXJDb250YWluZXIuaWQgPSAnbmF2YmFyQ29udGFpbmVyJztcbiAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1jb250YWluZXInKTtcblxuICBsZXQgdGFiQ2xhc3MgPSBbJ21lbnUtdGFiJywgJ2RlbGl2ZXJ5LXRhYicsICdhYm91dC10YWInXTtcbiAgbGV0IHRhYk5hbWUgPSBbJ01lbnUnLCAnRGVsaXZlcnknLCAnQWJvdXQgVXMnXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCh0YWJDbGFzc1tpXSk7XG4gICAgbGV0IHRhYlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRhYlRleHQuaW5uZXJIVE1MID0gdGFiTmFtZVtpXTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFiVGV4dCk7XG4gICAgbmF2YmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgcmV0dXJuIG5hdmJhckNvbnRhaW5lcjtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=