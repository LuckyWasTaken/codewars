"use strict";
function reduceCards(input){

    const order = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];

    if (!Array.isArray(input)) {
        return null;
    }
    if (typeof(input[0]) === "number") {
        return input.map((val) => val % 13).sort((a, b) => a - b);
    }
    return input.map((val) => val[0]).sort((a, b) => order.indexOf(a) - order.indexOf(b));
}