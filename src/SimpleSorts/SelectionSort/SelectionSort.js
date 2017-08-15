/**
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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.sa = root.sa || {};
    root.sa.SelectionSort = factory();
}
}(this, function(undefined) {
  'use strict';

  /**
   * Determining the input object is an array or not.
   * @param  {object}  o input object
   * @return {Boolean}   return true if o is an array, 
   *                     otherwise return false.
   */
  var _isArray = function(o) {
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
      // assume the current element is the extremum one
      extre = i;

      // check the rest elements and marking the extremum one
      for(j=i+1; j<len; j++){
        if((!dsc && arr[j]<arr[extre])||(dsc && arr[j]>arr[extre])) {
          extre = j;
        }
      }

      // swap the current element with the extremun one
      if(i != extre) {
        _swap(arr, i, extre);
      }
    }

    return arr;
  }; // end of _selectionSort

  return _selectionSort;
}));