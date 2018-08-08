// https://www.codewars.com/kata/552c028c030765286c00007d/

"use strict";
function iqTest(numbers){
    numbers = numbers.split(" ").map((x) => Number(x));
    const odds = numbers.reduce((acc, x) => x%2 ? acc+1 : acc ,0);
    return odds === 1
      ? numbers.indexOf(numbers.find((x) => x%2)) + 1
      : numbers.indexOf(numbers.find((x) => x%2 === 0)) + 1; //But why !x%2 don't work???
}
