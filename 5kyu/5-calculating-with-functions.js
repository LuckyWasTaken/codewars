// https://www.codewars.com/kata/calculating-with-functions/
"use strict";

function numberFactory(num) {
    return (func) => func ? func(num) : num;
}

const zero = (func) => numberFactory(0)(func);
const one = (func) => numberFactory(1)(func);
const two = (func) => numberFactory(2)(func);
const three = (func) => numberFactory(3)(func);
const four = (func) => numberFactory(4)(func);
const five = (func) => numberFactory(5)(func);
const six = (func) => numberFactory(6)(func);
const seven = (func) => numberFactory(7)(func);
const eight = (func) => numberFactory(8)(func);
const nine = (func) => numberFactory(9)(func);

function plus(a, b) {
  return (a !== undefined &&b !== undefined) ? b+a : (z) => plus(a, z);
}
function minus(a, b) {
  return (a !== undefined&&b !== undefined) ? b-a : (z) => minus(a, z);
}
function times(a, b) {
  return (a !== undefined&&b !== undefined) ? b*a : (z) => times(a, z);
}
function dividedBy(a, b) {
  return (a !== undefined&&b !== undefined) ? Math.floor(b/a) : (z) => dividedBy(a, z);
}