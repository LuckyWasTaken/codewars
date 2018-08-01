// https://www.codewars.com/kata/536ce83e2f403659a5000d47
"use strict";

function add (x, y) {
    return !y
        ? x
        : add(x ^ y , (x & y) << 1);
}