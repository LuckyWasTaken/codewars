/* Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array */

"use strict";
function parse( data ) {
  let val = 0;
  return data.split("").reduce((acc,curr) => {
    if(curr === "i") val++;
    if(curr === "d") val--;
    if(curr === "s") val*=val;
    if(curr === "o") acc.push(val);
    return acc
  }, [])
}