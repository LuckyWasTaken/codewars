// https://www.codewars.com/kata/multi-tap-keypad-text-entry-on-an-old-mobile-phone/

"use strict";

const layout = [
    "1",    "ABC2", "DEF3",
    "GHI4", "JKL5", "MNO6",
    "PQRS7","TUV8", "WXYZ9",
    "*",    " 0",   "#"
]

function presses(phrase) {
    return phrase
        .toUpperCase()
        .split("")
        .reduce((acc, c) => {
            const key = layout.find((word) => word.indexOf(c) !== -1);
            return acc + key.indexOf(c) + 1;
        }, 0);
}