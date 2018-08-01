"use strict";
function testit(s){
    return s.split(" ")
      .map((word) => word.slice(0, -1) + word.slice(-1).toUpperCase())
      .join(" ");
}