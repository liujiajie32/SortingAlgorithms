var SelectionSort = require('../dist/js/SelectionSort');

var a = [765,45,4,4,3,3,25,2,1,13,10,0];
var b = [765,45,4,4,3,3,25,2,1,13,10,0];

console.log('Output selection sort result in ascending order:');
console.log(SelectionSort(a));

console.log('Output selection sort result in descending order:');
console.log(SelectionSort(b,true));