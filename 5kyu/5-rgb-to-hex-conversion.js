// https://www.codewars.com/kata/rgb-to-hex-conversion

"use strict";
function rgb(r, g, b){
    const rHex = (Number(r) > 255 ? 255 : ( Number(r) < 0 ? 0 : Number(r) )).toString(16);
    const gHex = (Number(g) > 255 ? 255 : ( Number(g) < 0 ? 0 : Number(g) )).toString(16);
    const bHex = (Number(b) > 255 ? 255 : ( Number(b) < 0 ? 0 : Number(b) )).toString(16);
    return ((rHex.length < 2 ? '0' + rHex : rHex) 
        + (gHex.length < 2 ? '0' + gHex : gHex)
        + (bHex.length < 2 ? '0' + bHex : bHex))
        .toUpperCase();
}