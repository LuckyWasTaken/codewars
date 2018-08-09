// https://www.codewars.com/kata/weight-for-weight/

"use strict";

function getWeight(str) {
    return str.split("").reduce((acc, val) => (+val) + acc, 0);
}

function orderWeight(strng) {
    return strng
        .split(" ")
        .sort((a, b) => getWeight(a) - getWeight(b) || (a < b
            ? -1
            : 1))
        .join(" ");
}
