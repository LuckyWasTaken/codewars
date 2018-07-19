/* Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
 that checks whether the two arrays have the "same" elements, with the same multiplicities.
 "Same" means, here, that the elements in b are the elements in a squared, regardless of
  the order. */

"use strict";
function comp(array1, array2){
    if (!array1 || !array2) {
        return false;
    }

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.every((x, i) => {
        return x * x === array2[i];
    });
  }