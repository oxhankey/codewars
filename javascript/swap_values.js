/*
https://www.codewars.com/kata/swap-values/train/javascript

Instructions:
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

function swapValues(arr){
  arr.push(arr[0]);
  arr.shift();
  return arr;
}
