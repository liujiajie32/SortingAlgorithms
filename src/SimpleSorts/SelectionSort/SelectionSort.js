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
'use strict';

/**
 * Determine the input argument is an array or not.
 * @param  {Array}  o input argument
 * @return {Boolean}   return true if o is an array, 
 *                     otherwise return false.
 */
let _isArray = Array.isArray || function(o) {
  return Object.prototype.toString.call(o)=='[object Array]';
};


/**
 * Swap the positions of two elements in an array
 * @param  {array}  arr input array
 * @param  {number} p1  1st position number
 * @param  {number} p2  2nd position number
 * @return {array}      output array
 */
let _swap = function(arr, p1, p2) {
  let len = arr.length;

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
let SelectionSort = function(arr, dsc=false) {
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

export default SelectionSort;