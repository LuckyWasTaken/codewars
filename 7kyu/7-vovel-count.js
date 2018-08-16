// https://www.codewars.com/kata/vowel-count/

"use strict";
function getCount(str) {
    return str.split("").filter((c) => c.match(/[aeiou]/)).length;
}