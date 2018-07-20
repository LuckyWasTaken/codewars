/* Your task is to check wheter a given integer is a perfect power.
 If it is a perfect power, return a pair m and k with mk = n as a proof.
 Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent. */


"use strict";
var isPP = function(n){

    let cur = 2;
    const max = Math.floor(n/2);

    while (cur<=max) {
      let pow = 2;
      let temp = Math.pow(cur, pow)
      while(temp < n) {
        pow++;
        temp = Math.pow(cur, pow);
      }
      if(temp === n) return [cur, pow];
      cur++;
    }

    return null;
}