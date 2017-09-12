(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SelectionSort"] = factory();
	else
		root["SelectionSort"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * SelectionSort.js
 *
 * Version 0.0.2
 * Author  LIU Jiajie
 * Date    2017-09-12
 * Detail  Implementation of selection sorting algorithms in JavaScript
 *
 * Usage:
 * 
 *   // AMD mode:
 *   require(['SelectionSort'], function(SelectionSort) {
 *     var array = [3,2,1];
 *     SelectionSort(array);
 *   });
 *
 *   // Node mode:
 *   var SelectionSort = require('SelectionSort');
 *   var array = [3,2,1];
 *   SelectionSort(array);
 * 
 *   // Browser globals mode:
 *   <script src="SelectionSort.js"></script>
 *   <script>
 *     var array = [3,2,1];
 *     SelectionSort(array);
 *   </script>
 * 
 */


/**
 * Determine the input argument is an array or not.
 * @param  {Array}  o input argument
 * @return {Boolean}   return true if o is an array, 
 *                     otherwise return false.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _isArray = Array.isArray || function (o) {
  return Object.prototype.toString.call(o) == '[object Array]';
};

/**
 * Swap the positions of two elements in an array
 * @param  {array}  arr input array
 * @param  {number} p1  1st position number
 * @param  {number} p2  2nd position number
 * @return {array}      output array
 */
var _swap = function _swap(arr, p1, p2) {
  var len = arr.length;

  // Entry validity
  if (!_isArray(arr) || len < 1 || p1 > len || p2 > len || p1 == p2) {
    return arr;
  }

  arr[p1] = [arr[p2], arr[p2] = arr[p1]][0];
  return arr;
};

/**
 * Method of selection sorting
 * @param  {array}   arr Input array
 * @param  {boolean} dsc Sorting in descending order or not
 * @return {array}       Output array
 */
var SelectionSort = function SelectionSort(arr) {
  var dsc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var len = arr.length,
      i,
      j,
      min,
      extre;
  // Entry validity
  if (!_isArray(arr) || len < 1) {
    return arr;
  }

  for (i = 0; i < len; i++) {
    // assume the current element is an extremum, i.e. it's the maximun
    // when dsc is false, minimum when dsc is true.
    extre = i;

    // check the rest elements and marking the extremum
    for (j = i + 1; j < len; j++) {
      // calculate (dsc)xor(arr[j]<arr[extre]) 
      if (dsc != arr[j] < arr[extre]) {
        extre = j;
      }
    }

    // swap the current element with the extremun
    if (i != extre) {
      _swap(arr, i, extre);
    }
  }

  return arr;
}; // end of _selectionSort

exports.default = SelectionSort;

/***/ })
/******/ ]);
});