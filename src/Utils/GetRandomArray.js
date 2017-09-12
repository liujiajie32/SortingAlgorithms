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
'use strict';

/**
 * Determine the input argument is NaN or not.
 * @param  {Number}  n input argument
 * @return {Boolean}   return true if n is NaN, 
 *                     otherwise return false.
 */
let _isNaN = Number.isNaN || function(n) {
  return typeof n === 'number' && isNaN(n);
}


/**
 * Get an array of random numbers.
 * @param  {number} min lower limit of random numbers
 * @param  {number} max upper limit of random numbers
 * @param  {number} len length of the output array
 * @return {array}   return an array of random numbers.
 */
let GetRandomArray = function(min,max,len) {   
  // Entry validity
  if(_isNaN(min) || _isNaN(max) ||_isNaN(len)) {
    return;
  }
  if(max<=min) {
    return;
  }

  let range, rand, i, item, arr = new Array();

  for(i=0; i<len; i++) {
    range = max - min;   
    rand = Math.random();   
    arr.push(Math.round(min) + Math.round(rand * range));      
  }


  return arr;
}   // end of GetRandomArray


export default GetRandomArray;