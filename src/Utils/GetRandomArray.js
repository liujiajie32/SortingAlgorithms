/**
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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function() {
      return root.sa = factory(window);
    });
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