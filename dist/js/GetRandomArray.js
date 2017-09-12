(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GetRandomArray"] = factory();
	else
		root["GetRandomArray"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * GetRandomArray.js
 *
 * Version 0.0.2
 * Author  LIU Jiajie
 * Date    2017-09-12
 * Detail  Implementation of a Random Array Generator in JavaScript
 *
 * Usage:
 * 
 *   // AMD mode:
 *   require(['GetRandomArray'], function(GetRandomArray) {
 *     var array = [3,2,1];
 *     GetRandomArray(array);
 *   });
 *
 *   // Node mode:
 *   var GetRandomArray = require('GetRandomArray');
 *   var array = [3,2,1];
 *   GetRandomArray(array);
 * 
 *   // Browser globals mode:
 *   <script src="GetRandomArray.js"></script>
 *   <script>
 *     var array = [3,2,1];
 *     sa.GetRandomArray(array);
 *   </script>
 *   
 */


/**
 * Determine the input argument is NaN or not.
 * @param  {Number}  n input argument
 * @return {Boolean}   return true if n is NaN, 
 *                     otherwise return false.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isNaN = Number.isNaN || function (n) {
  return typeof n === 'number' && isNaN(n);
};

/**
 * Get an array of random numbers.
 * @param  {number} min lower limit of random numbers
 * @param  {number} max upper limit of random numbers
 * @param  {number} len length of the output array
 * @return {array}   return an array of random numbers.
 */
var GetRandomArray = function GetRandomArray(min, max, len) {
  // Entry validity
  if (_isNaN(min) || _isNaN(max) || _isNaN(len)) {
    return;
  }
  if (max <= min) {
    return;
  }

  var range = void 0,
      rand = void 0,
      i = void 0,
      item = void 0,
      arr = new Array();

  for (i = 0; i < len; i++) {
    range = max - min;
    rand = Math.random();
    arr.push(Math.round(min) + Math.round(rand * range));
  }

  return arr;
}; // end of GetRandomArray


exports.default = GetRandomArray;

/***/ })
/******/ ]);
});