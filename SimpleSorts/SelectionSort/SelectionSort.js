/**
 * SelectionSort.js
 *
 * Implementation of selectiion sorting algorithms in JavaScript
 */

/**
 * [selectionSort description]
 * @param  {[type]} dstArray [description]
 * @return {[type]}          [description]
 */
function selectionSort(dstArray) {

  var len = dstArray.length, i, j, min;

  if(!isArray(dstArray) || len<1) {
    return;
  }

  for(i=0; i < len; i++) {
    // assuming the element in current position is the minimum one
    min = i;

    // checking the rest elements of dstArray and marking the minimum one
    for(j=i+1; j < len; j++){
      if (dstArray[j] < dstArray[min]) {
        min = j;
      }
    }

    // swap the current element with the minimun one if it's not
    if (i != min) {
      swap(dstArray, i, min);
    }
  }

  return dstArray;
}

/**
 * [isArray description]
 * @param  {[type]}  o [description]
 * @return {Boolean}   [description]
 */
function isArray(o) {
  return Object.prototype.toString.call(o)=='[object Array]';
}

/**
 * [swap description]
 * @param  {[type]} dstArray [description]
 * @param  {[type]} p1       [description]
 * @param  {[type]} p2       [description]
 * @return {[type]}          [description]
 */
function swap(dstArray, p1, p2) {
  var temp = dstArray[p1];
  dstArray[p1] = dstArray[p2];
  dstArray[p2] = temp;
}