// https://www.codewars.com/kata/product-of-consecutive-fib-numbers

"use strict";

function productFib(prod){
    let curr = 1;
    let prev = 0;

    while (curr * prev <= prod) {
      if (curr*prev === prod) {
        return [prev, curr, true];
      }
      const next = curr + prev;
      prev = curr;
      curr = next;
    }
    return [prev, curr, false];
}