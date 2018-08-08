// https://www.codewars.com/kata/stop-gninnips-my-sdrow/

"use strict";
const spinWords = (str) => str
    .split(" ")
    .map((word) => word.length >= 5
        ? word.split("").reverse().join("")
        : word)
    .join(" ");
