//https://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascript

"use strict";
var decodeBits = function (bits){
    return bits.replace(/111111/g, "-").replace(/000000/g, " ").replace(/11/g, ".").replace(/00/g, "");
};

var decodeMorse = function (morseCode){
    return morseCode.split("  ").map((word) => {
        return word.split(" ")
            .map((morse) => MORSE_CODE[morse])
            .join("");
    }).join(" ");
};

//Not passing some tests atm