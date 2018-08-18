// https://www.codewars.com/kata/calculator/

"use strict";

const Calculator = function() {
    this.evaluate = string => {
      let m;
      while(m = string.match(/(-?\d+\.?\d*) (\/|\*) (-?\d+\.?\d*)/)) {
        const res = m[2] === '*' 
          ? +m[1] * +m[3]
          : +m[1] / +m[3]
        string = string.replace(m[0], res);
      }
      while(m = string.match(/(-?\d+\.?\d*) (\+|-) (-?\d+\.?\d*)/)) {
        const res = m[2] === '+'
          ? +m[1] + +m[3]
          : +m[1] - +m[3]
        string = string.replace(m[0], res);
      }
      return +string;
    }
  };