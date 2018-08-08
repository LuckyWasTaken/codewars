// https://www.codewars.com/kata/5626b561280a42ecc50000d1


"use strict";

function sumDigPow(a, b) {
    return [...Array(b+1).keys()].slice(a) //Generating range (pretty slow huh?)
      .filter((x) => x === ("" + x)
                                .split("")
                                .reduce((acc, d, i) => Math.pow(+d,i+1) + acc,0))
}
