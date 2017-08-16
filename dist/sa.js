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

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * SelectionSort.js
 *
 * Version 0.0.1
 * Author  LIU Jiajie
 * Date    2017-08-15
 * Detail  Implementation of selection sorting algorithms in JavaScript
 *
 * Usage:
 * 
 *   // AMD mode:
 *   require(['SelectionSort'], function() {
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
 *   var array = [3,2,1];
 *   sa.SelectionSort(array);
 *   
 */
;(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return window.sa = factory(window);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.sa = factory(root);
}
}(this, function(window, undefined) {
  'use strict';

  var methodName = 'SelectionSort';

  /**
   * Determine the input argument is an array or not.
   * @param  {Array}  o input argument
   * @return {Boolean}   return true if o is an array, 
   *                     otherwise return false.
   */
  var _isArray = Array.isArray || function(o) {
    return Object.prototype.toString.call(o)=='[object Array]';
  };


  /**
   * Swap the positions of two elements in an array
   * @param  {array}  arr input array
   * @param  {number} p1  1st position number
   * @param  {number} p2  2nd position number
   * @return {array}      output array
   */
  var _swap = function(arr, p1, p2) {
    var len = arr.length;

    // Entry validity
    if(!_isArray(arr) || len<1 || p1>len || p2>len || p1==p2) {
      return arr;
    }

    arr[p1] = [arr[p2], arr[p2]=arr[p1]][0];
    return arr;
  };


  /**
   * Method of selection sorting
   * @param  {array}   arr Input array
   * @param  {boolean} dsc Sorting in descending order or not
   * @return {array}       Output array
   */
  var _selectionSort = function(arr, dsc=false) {
    var len = arr.length, i, j, min, extre;
    // Entry validity
    if(!_isArray(arr) || len<1) {
      return arr;
    }

    for(i=0; i<len; i++) {
      // assume the current element is an extremum, i.e. it's the maximun
      // when dsc is false, minimum when dsc is true.
      extre = i;

      // check the rest elements and marking the extremum
      for(j=i+1; j<len; j++) {
        // calculate (dsc)xor(arr[j]<arr[extre]) 
        if(dsc != (arr[j]<arr[extre])) {
          extre = j;
        }
      }

      // swap the current element with the extremun
      if(i != extre) {
        _swap(arr, i, extre);
      }
    }

    return arr;
  }; // end of _selectionSort


  return (window ?
            Object.assign(window.sa||{},{[methodName]:_selectionSort})
          : _selectionSort);
}));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * GetRandomArray.js
 *
 * Version 0.0.1
 * Author  LIU Jiajie
 * Date    2017-08-16
 * Detail  Implementation of selection sorting algorithms in JavaScript
 *
 * Usage:
 * 
 *   // AMD mode:
 *   require(['GetRandomArray'], function() {
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
 *   var array = [3,2,1];
 *   sa.GetRandomArray(array);
 *   
 */
;(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return root.sa = factory(window);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.sa = factory(root);
}
}(this, function(window, undefined) {
  'use strict';

  var methodName = 'GetRandomArray';

  /**
   * Determine the input argument is NaN or not.
   * @param  {Number}  n input argument
   * @return {Boolean}   return true if n is NaN, 
   *                     otherwise return false.
   */
  var _isNaN = Number.isNaN || function(n) {
    return typeof n === 'number' && isNaN(n);
  }


  /**
   * Get an array of random numbers.
   * @param  {number} min lower limit of random numbers
   * @param  {number} max upper limit of random numbers
   * @param  {number} len length of the output array
   * @return {array}   return an array of random numbers.
   */
  var _getRandomArray = function(min,max,len) {   
    // Entry validity
    if(_isNaN(min) || _isNaN(max) ||_isNaN(len)) {
      return;
    }
    if(max<=min) {
      return;
    }

    var range, rand, i, item, arr = new Array();

    for(i=0; i<len; i++) {
      range = max - min;   
      rand = Math.random();   
      arr.push(Math.round(min) + Math.round(rand * range));      
    }


    return arr;
  }   // end of _selectionSort


  return (window ?
            Object.assign(window.sa||{},{[methodName]:_getRandomArray})
          : _getRandomArray);
}));

/***/ })
/******/ ]);