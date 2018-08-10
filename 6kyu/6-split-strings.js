//https://www.codewars.com/kata/split-strings/

"use strict";
function solution(str){
    return str.match(/.{2}|.{1}/g).map((x) => x.length === 2 ? x : x + "_");
}