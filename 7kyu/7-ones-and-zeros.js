/* Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. */

"use strict";
function binaryArrayToNumber (arr) {
    return arr.reverse().reduce((acc, curr, i) => {
      if (!curr) return acc
      return acc += Math.pow(2, i)
    } ,0);
};