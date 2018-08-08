// https://www.codewars.com/kata/sum-of-triangular-numbers/

"use strict";
function sumTriangularNumbers(n) {
    const out = [];
    let i = 0;
    let step = 1;
    while (out.length < n) {
        out.push(i += (step++));
    }
    return out.length > 0
        ? out.reduce((acc, x) => acc + x)
        : 0;
}