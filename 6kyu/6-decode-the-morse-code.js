// https://www.codewars.com/kata/decode-the-morse-code/train/javascript

"use strict";
var decodeMorse = function (morseCode){
    return morseCode.split("   ").map((word) => {
        return word.split(" ")
            .map((morse) => MORSE_CODE[morse])
            .join("");
    }).join(" ").trim();;
}